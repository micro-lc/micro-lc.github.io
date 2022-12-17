export {}

declare global {
  // eslint-disable-next-line vars-on-top, no-var, camelcase
  var __webpack_public_path__: string | undefined

  interface Window {
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string
    __POWERED_BY_QIANKUN__?: boolean
    __webpack_public_path__?: string
  }
}
