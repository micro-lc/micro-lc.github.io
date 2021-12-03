import baseUrl from './baseUrl'

if (typeof window !== 'undefined' && window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = new URL(baseUrl, window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__).href
}

const QIANKUN_HANDLERS = {
  mount: async (props) => {
  },
  unmount: async (props) => {
    return props.singleSpa.unloadApplication(props.name)
  },
  bootstrap: async (props) => {
  }
}

const REGISTER_FOR = ['docusaurus-home', 'docusaurus-content']

REGISTER_FOR.forEach(id => { global[id] = QIANKUN_HANDLERS })
