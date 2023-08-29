import type { MicrolcApi, BaseExtension } from '@micro-lc/orchestrator'
import { renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import { createApp } from 'vue'
import type { App as VueApp } from 'vue'
import type { Router } from 'vue-router'

import App from './App.vue'
import createVueRouter from './router'

import './assets/main.css'

export interface MicrolcProps extends QiankunProps {
  container?: HTMLElement
  formKind?: string
  microlcApi?: MicrolcApi<BaseExtension>
}

let app: VueApp<Element> | null = null
let routerCtx: {cleanup: () => void; router: Router} | null = null

const APP_SELECTOR = '#vue-app'

const retrieveContainer = (props: MicrolcProps) => {
  const { document: { body } } = window
  const container = props.container ?? body
  console.log(container, window.document.body)
  return container.querySelector<HTMLElement>(APP_SELECTOR) ?? body
}

const renderApp = (props: MicrolcProps) => {
  if (app === null) {
    routerCtx = createVueRouter()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    app = createApp(App)
    app.use(routerCtx.router)
    app.mount(retrieveContainer(props))
  }
}

renderWithQiankun({
  bootstrap() {
    /* no-op */
  },
  mount(props: QiankunProps) {
    renderApp(props)
  },
  unmount() {
    routerCtx?.cleanup()
    app?.unmount()
    app = null
  },
  update() {
    /* no-op */
  },
})

if (!window.__POWERED_BY_QIANKUN__) {
  renderApp({})
}
