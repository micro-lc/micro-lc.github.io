import type { Component, Config, PluginConfiguration } from '@micro-lc/interfaces/schemas/v2'

import type { SyntheticEvent } from 'react'
import { skip, take, Subscription } from 'rxjs'
import type { Observable } from 'rxjs'

interface OptionMessage {
  content: {
    disableOverlay?: boolean
    instance?: string
    redirectTo?: string
  }
  type: 'options'
}

interface IncomingNewConfigurationMessage {
  content: {
    configuration: Config
    contexts: Map<string, Component[]>
    tags: string[]
  }
  type: 'new-configuration'
}

interface OutgoingNewConfigurationMessage {
  content: {
    configuration: PluginConfiguration
    contexts: Map<string, Component[]>
    tags: string[]
  }
  type: 'new-configuration'
}

type Message = OptionMessage | IncomingNewConfigurationMessage

type Render = IncomingNewConfigurationMessage['content']

type RenderChannel = Observable<Render>

const reload = (iframe: HTMLIFrameElement): void => { iframe.src = String(iframe.src) }

const adapt = (input: Message): OptionMessage | OutgoingNewConfigurationMessage => {
  if (input.type !== 'new-configuration') {
    return input
  }

  return {
    ...input,
    content: {
      ...input.content,
      configuration: {
        content: {
          attributes: {
            style: 'display: flex; flex-direction: column; height: 100%; width: 100%; gap: 0.5px',
          },
          content: [
            {
              attributes: {
                origin: 'https://my-domain/',
                style: `
                  position: sticky;
                  top: 0;
                  padding: 10px;
                  background-color: #de1f9210;
                  border-bottom: 1px solid #de1f92;
                `,
              },
              tag: 'mlc-url',
            },
            {
              attributes: {
                style: 'width: 100%; height: 100%; position: relative; overflow: hidden;',
              },
              content: {
                attributes: {
                  'primary-color': '#de1f92',
                  style: 'width: 100%; height: 100%;',
                },
                content: {
                  attributes: {
                    style: 'width: 100%; height: 100%; overflow: auto;',
                  },
                  properties: {
                    config: input.content.configuration,
                  },
                  tag: 'micro-lc',
                },
                tag: 'mlc-loading-animation',
              },
              tag: 'div',
            },
          ],
          tag: 'div',
        },
        sources: [
          'http://localhost:4174/mlc-iconic.js',
          'http://localhost:4174/mlc-url.js',
          'http://localhost:4173/micro-lc.production.js',
          'https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-loading-animation.js',
          // 'https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-url.js',
        ],
      },
    },
  }
}

const onLoadFactory = (_: Window, origin: string, render: RenderChannel) =>
  (event: SyntheticEvent<HTMLIFrameElement>): void => {
    const { currentTarget: iframe } = event
    const subscription = new Subscription()

    const { contentWindow: to } = iframe

    if (to === null) {
      return
    }

    const sender = (message: Message) => {
      to.postMessage(adapt(message), origin)
    }

    // init with options
    sender({ content: { disableOverlay: true, redirectTo: '/' }, type: 'options' })

    const cleanup = () => subscription.unsubscribe()
    // 📯 END

    const first$ = render.pipe(take(1))
    const others$ = render.pipe(skip(1))

    subscription.add(
      first$
        .subscribe((content) => {
          sender({
            content,
            type: 'new-configuration',
          })
        })
    )

    subscription.add(
      others$
        .subscribe(() => {
          cleanup()
          reload(iframe)
        })
    )
  }

export type { Render }
export { onLoadFactory }
