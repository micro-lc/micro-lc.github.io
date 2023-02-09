import type { SyntheticEvent } from 'react'
import { skip, take, Subscription } from 'rxjs'
import type { Observable } from 'rxjs'

import { fromConfigToPluginConfiguration } from './adapter'
import type { IncomingNewConfigurationMessage, Message } from './messages'

type Render = IncomingNewConfigurationMessage['content']

type RenderChannel = Observable<Render>

const reload = (iframe: HTMLIFrameElement): void => { iframe.src = String(iframe.src) }

const recv = (iframe: HTMLIFrameElement) => {
  const listener = ({ data }: MessageEvent<unknown>) => {
    if (
      data === null || typeof data !== 'object' || !('type' in data) || typeof data.type !== 'string' || !['mousedown', 'mousemove'].includes(data.type)
       || !('content' in data)) {
      return
    }

    const { type, content: unknownContent } = data
    switch (type) {
    case 'mousemove':
    case 'mousedown': {
      const boundingClientRect = iframe.getBoundingClientRect()
      const content = unknownContent as MouseEvent
      iframe.dispatchEvent(new MouseEvent(type, {
        ...content,
        clientX: content.clientX + boundingClientRect.left,
        clientY: content.clientY + boundingClientRect.right,
      }))
      break
    }
    default:
      break
    }
  }
  window.addEventListener('message', listener)

  return () => window.removeEventListener('message', listener)
}

const onLoadFactory = (_: Window, origin: string, render: RenderChannel) =>
  (event: SyntheticEvent<HTMLIFrameElement>): void => {
    const subscription = new Subscription()

    const { currentTarget: iframe } = event
    const { contentWindow: to } = iframe
    recv(iframe)

    if (to === null) {
      return
    }

    const sender = (message: Message) => {
      to.postMessage(fromConfigToPluginConfiguration(message), origin)
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
