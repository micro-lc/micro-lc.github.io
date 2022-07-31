import baseUrl from './baseUrl'

if (typeof window !== 'undefined' && window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = new URL(baseUrl, window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__).href
}

const onAClickListener = (event) => {
  if (event.srcElement.tagName === 'A') {
    const hrefValue = event.srcElement.getAttribute('href')
    if (hrefValue.startsWith('#')) {
      window.location.hash = hrefValue
      event.preventDefault()
    }
  }
}

const domNodeInsertedListener = (event) => {
  const isNavbarInserted = event.relatedNode.className === 'navbar navbar--fixed-top'
  if(isNavbarInserted) {
    const initialHash = window.location.hash
    window.location.hash = ''
    window.location.hash = initialHash
  }
}

const QIANKUN_HANDLERS = {
  mount: async (props) => {
    if(window.location.hash) {
      props.container?.addEventListener('DOMNodeInserted', domNodeInsertedListener)
    }
    props.container?.addEventListener('click', onAClickListener)
  },
  unmount: async (props) => {
    props.container?.removeEventListener('click', onAClickListener)
    props.container?.removeEventListener('DOMNodeInserted', domNodeInsertedListener)

    return props.singleSpa.unloadApplication(props.name)
  },
  bootstrap: async (props) => {
  }
}

const REGISTER_FOR = ['docusaurus-home', 'docusaurus-content']

REGISTER_FOR.forEach(id => { global[id] = QIANKUN_HANDLERS })
