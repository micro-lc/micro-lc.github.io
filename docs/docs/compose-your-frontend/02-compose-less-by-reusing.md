---
title: 'Step 2: Compose Less By Reusing'
description: 'tutorial step to introduce webcomponents as mfe fine graining'
sidebar_label: 'Step 2: Compose Less By Reusing'
sidebar_position: 20
---

Let's talk about webcomponents.

## Web Components

Think of web components as:

>webcomponent = fragment of HTML + JavaScript business logic

Interestingly, neither of the two elements is obligatory.

Most of the time, web components manifest as an IIFE (Immediately Invoked Function Expression) JavaScript file or result from the side effects of a JavaScript script file. Once defined, they empower the browser with custom HTML tags.

To begin, let's create one and integrate it into <micro-lc></micro-lc>. Draft a file named custom-button.js:

```javascript title=custom-button.js
class CustomButton extends HTMLElement {
  connectedCallback() {
    const shadowDom = this.attachShadow({mode: 'open'})
    const slot = this.ownerDocument.createElement('slot')
    const button = this.ownerDocument.createElement('button')

    button.onclick = () => window.open('https://micro-lc.io/', {target: '_blank'})

    button.appendChild(slot)
    shadowDom.appendChild(button)
  }
}

customElements.define('custom-button', CustomButton)
```

Next, convert the script to a [data protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) version:

```shell
echo "data:text/javascript;base64,$(base64 -w 0 custom-button.js)"
```

Then, incorporate this script into our composition context:

```json
{
  "version": 2,
  "applications": {
    "home": {
      "integrationMode": "compose",
      "route": "/",
      "config": {
        "content": {...},
        "sources": [
          👈 paste the string here
        ]
      }
    }
  }
}
```

After clicking `Apply`, there might not be any noticeable changes. However, the custom-button tag is now recognized by the browser.

:::tip
To verify, run the following in your browser's console:

```javascript
console.assert(typeof customElements.get('custom-button') !== undefined)
```

:::

Now, replace the anchor tag we've previously used in the composition context:

```json
{
  "tag": "div",
  "attributes": {...},
  "content": [
    {
      ... 👈 img tag
    },
    {
      "tag": "custom-button",
      "content": "Go to official documentation"
    }
  ]
}
```

A tangible button with the label `Go to official documentation` will appear, embedded with logic to open a new tab directed to `https://micro-lc.io/`.

```mdx-code-block
<></>
<tutorial-frame
  configuration={
    {
      "version": 2,
      "applications": {
        "home": {
          "integrationMode": "compose",
          "route": "/",
          "config": {
            "content": {
              "tag": "div",
              "attributes": {
                "style": "height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px; font-family: Arial;"
              },
              "content": [
                {
                  "tag": "img",
                  "attributes": {
                    "alt": "logo",
                    "src": "https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"
                  }
                },
                {
                  "tag": "custom-button",
                  "content": "Go to official documentation"
                }
              ]
            },
            "sources": [
              "data:text/javascript;base64,Y2xhc3MgQ3VzdG9tQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQgewogIGNvbm5lY3RlZENhbGxiYWNrKCkgewogICAgY29uc3Qgc2hhZG93RG9tID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSkKICAgIGNvbnN0IHNsb3QgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpCiAgICBjb25zdCBidXR0b24gPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykKCiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL21pY3JvLWxjLmlvLycsIHsgdGFyZ2V0OiAnX2JsYW5rJyB9KQoKICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzbG90KQogICAgc2hhZG93RG9tLmFwcGVuZENoaWxkKGJ1dHRvbikKICB9Cn0KCmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY3VzdG9tLWJ1dHRvbicsIEN1c3RvbUJ1dHRvbikK"
            ]
          }
        }
      }
    }
  }
></tutorial-frame>
```

To enhance the reusability of our component, make minor tweaks to custom-button.js:

```javascript title=custom-button.js
class CustomButton extends HTMLElement {
  connectedCallback() {
    const shadowDom = this.attachShadow({mode: 'open'})
    const slot = this.ownerDocument.createElement('slot')
    const button = this.ownerDocument.createElement('button')

    // 👇 here
    button.onclick = () => this.url && window.open(this.url, {target: '_blank'})

    button.appendChild(slot)
    shadowDom.appendChild(button)
  }
}

customElements.define('custom-button', CustomButton)
```

After re-encoding:

```shell
echo "data:text/javascript;base64,$(base64 -w 0 custom-button.js)"
```

Replace the preceding string in the sources field. After clicking `Apply`, you'll notice that the button no longer functions as `this.url` remains undefined.

## Properties

Until now, our composition has permitted defining tags, attributes, and content/children. It does more than a mere HTML-to-JSON translation; it also supports JavaScript property injection:

```json
{
  "tag": "div",
  "attributes": {...},
  "content": [
    {
      ... 👈 img tag
    },
    {
      "tag": "custom-button",
      "properties": {
        "url": "https://micro-lc.io/"
      },
      "content": "Go to official documentation"
    }
  ]
}
```

Clicking on the button now will lead you to https://micro-lc.io/. Success!

## Libraries

The data protocol serves us well, especially in contexts lacking a web server. However, in real-world scenarios where you're serving your <micro-lc></micro-lc> infused webpage, it might be more practical to bundle and package [libraries](../guides/reuse-third-party-libraries.md) with tools like [vite](https://vitejs.dev) or [webpack](https://webpack.js.org/). The sources field can handle any valid URL, such as `/assets/my-webcomponent-library.js`.

For instance, there's an online web component library:

```url
https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js
```

Among its several components, the [`bk-button`](https://docs.mia-platform.eu/docs/business_suite/backoffice/components/buttons) seems tailor-made for our needs.

Make the necessary replacements and then utilize bk-button instead of custom-button:

```json
{
  "content": {
    "tag": "div",
    "content": [
      {
        ... 👈 img tag
      },
      {
        "tag": "bk-button",
        "properties": {
          "content": "Go to official documentation",
          "action": {
            "type": "href",
            "config": {
              "href": "https://micro-lc.io/",
              "target": "_blank"
            }
          }
        }
      }
    ]
  },
  "sources": [
    // 👇 here
    "https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js"
  ]
}
```

```mdx-code-block
<></>
<tutorial-frame
  configuration={
    {
      "version": 2,
      "applications": {
        "home": {
          "integrationMode": "compose",
          "route": "/",
          "config": {
            "content": {
              "tag": "div",
              "attributes": {
                "style": "height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px; font-family: Arial;"
              },
              "content": [
                {
                  "tag": "img",
                  "attributes": {
                    "alt": "logo",
                    "src": "https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"
                  }
                },
                {
                  "tag": "bk-button",
                  "properties": {
                    "content": "Go to official documentation",
                    "action": {
                      "type": "href",
                      "config": {
                        "href": "https://micro-lc.io/",
                        "target": "_blank"
                      }
                    }
                  }
                }
              ]
            },
            "sources": [
              "https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js"
            ]
          }
        }
      }
    }
  }
></tutorial-frame>
```

As we wrap up this tutorial, let's venture into crafting an engaging website layout...
