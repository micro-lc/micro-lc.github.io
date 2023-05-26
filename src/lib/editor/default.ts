import type { Application, Config } from '@micro-lc/interfaces/schemas/v2'

const home: Application = {
  config: {
    content: {
      attributes: {
        style: 'height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px',
      },
      content: [
        {
          content: 'Welcome to the micro-lc playground! 👋',
          tag: 'span',
        },
        {
          attributes: {
            href: 'https://micro-lc.io/',
            target: '_blank',
          },
          content: 'Get started with the official documentation!',
          tag: 'a',
        },
      ],
      tag: 'div',
    },
  },
  integrationMode: 'compose',
  route: '/home',
}

const about: Application = {
  config: {
    content: {
      attributes: {
        style: 'height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px',
      },
      content: [
        {
          content: 'About 📯',
          tag: 'span',
        },
        {
          attributes: {
            href: 'https://mia-platform.eu/',
            target: '_blank',
          },
          content: 'Check out what we do at Mia-Platform!',
          tag: 'a',
        },
      ],
      tag: 'div',
    },
  },
  integrationMode: 'compose',
  route: '/about',
}


export const defaultConfiguration: Config = {
  applications: {
    about,
    home,
  },
  layout: {
    content: [
      {
        properties: {
          logo: {
            url: 'https://avatars.githubusercontent.com/u/92730708?s=200&v=4',
          },
          menuItems: [
            {
              icon: {
                library: '@ant-design/icons-svg',
                selector: 'HomeOutlined',
              },
              id: 'home',
              label: 'Home',
              type: 'application',
            },
            {
              icon: {
                library: '@ant-design/icons-svg',
                selector: 'ContactsOutlined',
              },
              id: 'about',
              label: 'About',
              type: 'application',
            },
          ],
          mode: 'fixedSideBar',
        },
        tag: 'mlc-layout',
      },
    ],
    sources: 'https://cdn.jsdelivr.net/npm/@micro-lc/layout@~2.0/dist/mlc-layout.js',
  },
  settings: {
    defaultUrl: '/home',
  },
  version: 2,
}
