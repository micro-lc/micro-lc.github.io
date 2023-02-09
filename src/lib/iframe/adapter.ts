import type { Message, OptionMessage, OutgoingNewConfigurationMessage } from './messages'

const PREVIEW_IFRAME_URL = new URL('https://unpkg.com/@micro-lc/preview@latest/website/index.html')

const fromConfigToPluginConfiguration = (input: Message): OptionMessage | OutgoingNewConfigurationMessage => {
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
                matcher: PREVIEW_IFRAME_URL.origin,
                origin: 'https://my-domain',
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
          'https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-iconic.js',
          'https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-url.js',
          'https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-loading-animation.js',
          'https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js',
        ],
      },
    },
  }
}

export { fromConfigToPluginConfiguration, PREVIEW_IFRAME_URL }
