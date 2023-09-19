customElements.define(
  'hello-world-client',
  class extends HTMLElement {
    connectedCallback() {
      Object.assign(this.style, {
        width: 'inherit',
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      })

      const div = window.document.createElement('div')
      Object.assign(div.style, {
        textAlign: 'center'
      })
      this.appendChild(div)

      fetch('/api/')
        .then((res) => res.ok ? res : Promise.reject('Oops! Something went wrong'))
        .then((res) => res.json())
        .then(({message}) => {div.textContent = message})
    }
  }
)