import PostChannel, { fromWindowToReceiver } from '@micro-lc/post-channel'
import type { MessageEventWithData } from '@micro-lc/post-channel'
import type { SyntheticEvent } from 'react'
import { skip, take, Subscription } from 'rxjs'
import type { Observable } from 'rxjs'

import { fromConfigToPluginConfiguration } from './adapter'
import type { IncomingNewConfigurationMessage, Message } from './messages'

type Render = IncomingNewConfigurationMessage['content']

type RenderChannel = Observable<Render>

type RegisteredMessages = |
  Message |
  {
    content: unknown
    type: 'mousemove'
  } |
  {
    content: unknown
    type: 'mousedown'
  }

const reload = (iframe: HTMLIFrameElement): void => { iframe.src = String(iframe.src) }

// const recv = (iframe: HTMLIFrameElement) => {
const makeListener = (iframe: HTMLIFrameElement) => ({ data }: MessageEventWithData) => {
  if (
    typeof data !== 'object'
      || !('type' in data)
      || typeof data.type !== 'string'
      || !['mousedown', 'mousemove'].includes(data.type)
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

const onLoadFactory = (self: Window, origin: string, render: RenderChannel) =>
  (event: SyntheticEvent<HTMLIFrameElement>): void => {
    const { currentTarget: iframe } = event
    const { contentWindow: to } = iframe

    if (to === null) {
      return
    }

    const subscription = new Subscription()

    const postChannel = new PostChannel<RegisteredMessages>(
      makeListener(iframe),
      window,
      fromWindowToReceiver(to, { targetOrigin: origin }),
      {
        log(this: PostChannel, message: RegisteredMessages) {
          if (self.__MICRO_LC_PREVIEW_LOG_LEVEL__ === 'debug') {
            const style = { background: this.colors.bg, color: this.colors.fg }
            console.groupCollapsed(`%c Msg from ${self.origin} (top) `, Object.entries(style).map(([key, val]) => `${key}: ${val}`).join('; '))
            console.info(`window '${self.origin}' is sending a message of type %c ${message.type} `, 'background: lightgreen; color: darkgreen')
            console.log({ content: message.content, instance: this.instance })
            console.groupEnd()
          }
        },
      }
    )
    postChannel.send({
      content: {
        disableOverlay: true,
        redirectTo: '/',
        run: true,
      },
      type: 'options',
    })

    const cleanup = () => {
      subscription.unsubscribe()
      postChannel.disconnect()
    }
    // 📯 END

    const first$ = render.pipe(take(1))
    const others$ = render.pipe(skip(1))

    subscription.add(
      first$
        .subscribe((content) => {
          postChannel.send(fromConfigToPluginConfiguration({
            content,
            type: 'new-configuration',
          }))
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
export { PREVIEW_IFRAME_URL } from './adapter'
