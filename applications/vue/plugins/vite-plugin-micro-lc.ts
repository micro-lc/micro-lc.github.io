/* eslint-disable id-length */
import * as cheerio from 'cheerio'
import type { PluginOption } from 'vite'

const module2DynamicImport = ($: cheerio.CheerioAPI, scriptTag: cheerio.Element) => {
  const script$ = $(scriptTag)
  const moduleSrc = script$.attr('src') ?? ''

  script$.removeAttr('src')
  script$.removeAttr('type')
  script$.html(`import(\`\${window.location.origin}${moduleSrc}\`)`)

  return script$
}

const createImportFinallyResolve = (qiankunName: string) => {
  return `\n    const qiankunLifeCycle = window.moudleQiankunAppLifeCycles && window.moudleQiankunAppLifeCycles['${qiankunName}'];\n    if (qiankunLifeCycle) {\n      window.proxy.vitemount((props) => qiankunLifeCycle.mount(props));\n      window.proxy.viteunmount((props) => qiankunLifeCycle.unmount(props));\n      window.proxy.vitebootstrap(() => qiankunLifeCycle.bootstrap());\n      window.proxy.viteupdate((props) => qiankunLifeCycle.update(props));\n    }\n  `
}

const createQiankunHelper = (qiankunName: string) => {
  return `\n  const createDeffer = (hookName) => {\n    const d = new Promise((resolve, reject) => {\n      window.proxy && (window.proxy[\`vite\${hookName}\`] = resolve)\n    })\n    return props => d.then(fn => fn(props));\n  }\n  const bootstrap = createDeffer('bootstrap');\n  const mount = createDeffer('mount');\n  const unmount = createDeffer('unmount');\n  const update = createDeffer('update');\n\n  ;(global => {\n    global.qiankunName = '${qiankunName}';\n    global['${qiankunName}'] = {\n      bootstrap,\n      mount,\n      unmount,\n      update\n    };\n  })(window);\n`
}

export default function plugin(qiankunName: string): PluginOption {
  let isProduction = false

  return {
    configResolved: (config) => { isProduction = config.command === 'build' || config.isProduction },
    name: 'vite-plugin-micro-lc',
    transformIndexHtml: (html) => {
      if (!isProduction) { return html }

      const $ = cheerio.load(html)

      const moduleTags = $('body script[type=module], head script[crossorigin=""]')

      const len = moduleTags.length

      moduleTags.each((idx, moduleTag) => {
        const script$ = module2DynamicImport($, moduleTag)
        if (len - 1 === idx) {
          script$.html(`${script$.html() ?? ''}.finally(() => {\n            ${createImportFinallyResolve(qiankunName)}\n          })`)
        }
      })

      $('body').append(`<script>${createQiankunHelper(qiankunName)}</script>`)

      return $.html()
    },
  }
}
