import type { IncomingNewConfigurationMessage, OutgoingNewConfigurationMessage } from './messages'

const PREVIEW_IFRAME_URL = new URL(
  `https://cdn.mia-platform.eu/micro-lc/preview/${process.env.MICRO_LC_PREVIEW_VERSION}/website/index.html`
)

const fromConfigToPluginConfiguration = (input: IncomingNewConfigurationMessage): OutgoingNewConfigurationMessage => ({
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
                  box-sizing: border-box;
                  height: 53px;
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
        `https://cdn.mia-platform.eu/micro-lc/layout/${process.env.MICRO_LC_LAYOUT_VERSION}/dist/mlc-iconic.js`,
        `https://cdn.mia-platform.eu/micro-lc/layout/${process.env.MICRO_LC_LAYOUT_VERSION}/dist/mlc-url.js`,
        `https://cdn.mia-platform.eu/micro-lc/layout/${process.env.MICRO_LC_LAYOUT_VERSION}/dist/mlc-loading-animation.js`,
        `https://cdn.mia-platform.eu/micro-lc/orchestrator/${process.env.MICRO_LC_ORCHESTRATOR_VERSION}/dist/micro-lc.production.js`,
      ],
    },
  },
})

export { fromConfigToPluginConfiguration, PREVIEW_IFRAME_URL }
