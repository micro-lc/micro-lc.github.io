import baseUrl from './baseUrl'

if (typeof window !== 'undefined' && window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = new URL(baseUrl, window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__).href
}

const onAClickListener = (e) => {
  if (e.srcElement.tagName === 'A') {
    const hrefValue = e.srcElement.getAttribute('href')
    if(hrefValue.startsWith('#')) {
      window.location.hash = hrefValue
      e.preventDefault()
    }
  }
}

const QIANKUN_HANDLERS = {
  mount: async (props) => {
    props.container?.addEventListener('click', onAClickListener);
  },
  unmount: async (props) => {
    props.container?.removeEventListener('click', onAClickListener);
    return props.singleSpa.unloadApplication(props.name)
  },
  bootstrap: async (props) => {
  }
}

const REGISTER_FOR = ['docusaurus-home', 'docusaurus-content']

REGISTER_FOR.forEach(id => { global[id] = QIANKUN_HANDLERS })
