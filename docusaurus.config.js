const baseUrl = require('./baseUrl')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'micro-lc',
  tagline: 'micro-lc project documentation',
  url: 'https://github.com/',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'micro-lc',
  projectName: 'micro-lc',
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      items: []
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Mia srl. All rights reserved.`
    }
  },
  plugins: [
    require.resolve("@easyops-cn/docusaurus-search-local"),
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: [
            require.resolve('./public-path.js'),
            require.resolve('./src/css/custom.css')
          ]
        }
      }
    ]
  ]
}
