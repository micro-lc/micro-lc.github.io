---
title: 'Step 7: Cross Communication'
description: tutorial step to explain how MFEs can communicate in micro-lc
sidebar_label: 'Step 7: Cross Communication'
sidebar_position: 60
---

Let's associate the increment of a number to the click event on the `Click Me!` button of the custom
parcel. Let's also assume we would like to pass such number as a state across <micro-lc></micro-lc>.

Every webcomponent mounted via `compose` integration mode, and every parcel have access to a shared, extendable
API.

<micro-lc></micro-lc> [API](../../api/micro-lc-api/index.md) has methods to extend itself. We can add a shared feature like a counter

```javascript
var microlcApi // = defined here

microlcApi.setExtension(
  'counter',
  {
    get() {
      return this.state
    },
    increment() {
      this.state += 1
      window.dispatchEvent(
        new CustomEvent('increment-counter', { detail: this.state })
      )
    },
    state: 0,
    subscribe(handler) {
      window.addEventListener('increment-counter', (e) => handler(e.detail))
    },
  }
)
```

and then retrieve the extension somewhere else

```javascript
var microlcApi // = defined here

const {counter} = microlcApi.getExtensions()

console.log(counter.get()) // prints 0
```

Let's embed it in out custom parcel by retrieving the <micro-lc></micro-lc> API from the mount arguments

```javascript title=main.js
(() => {
  // ... rest of the code
  
  const mount = async (props) => {
    container = props.container

    // 👇 get the API
    const {microlcApi} = props
    // 👇 set the extension
    const extensions = microlcApi.setExtension(
      'counter',
      {
        get() {
          return this.state
        },
        increment() {
          this.state += 1
          window.dispatchEvent(
            new CustomEvent('increment-counter', { detail: this.state })
          )
        },
        state: 0,
        subscribe(handler) {
          window.addEventListener('increment-counter', (e) => handler(e.detail))
        }
      }
    )

    const div = window.document.createElement('div')
    const button = window.document.createElement('button')
    Object.assign(
      div.style,
      {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
      }
    )

    button.textContent = '+1' // 👈 better label
    button.onclick = () => extensions.counter.increment() // 👈 increment counter

    div.appendChild(button)
    props.container.appendChild(div)

    return null
  }
  
  // ... rest of the code
})()
```

Then we can fix some CSS

```json
{
  "sources": [...],
  "content": {
    "tag": "div",
    "attributes": {
      "style": "display: flex; justify-content: space-around; height: inherit;" 👈 some height here
    },
    "content": [
      {
        "tag": "microfrontend-loader",
        "attributes": {
          "style": "flex-grow: 1; background-color: #e6f7ff;" 👈 fancy background here
        },
        "properties": {
          "application": {
            "integrationMode": "parcel",
            "entry": {
              "scripts": [
                "📄 paste base64 main.js code here" 👈 paste code
              ]
            }
          }
        }
      },
      {
        "tag": "microfrontend-loader",
        "attributes": {
          "style": "flex-grow: 1;"
        },
        "properties": {
          "application": {
            "integrationMode": "parcel",
            "entry": "https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/react-memory-router/index.html"
          }
        }
      }
    ]
  }
}
```

Let's then embed another custom parcel application with a number display, on the right handside, instead of the in-memory router React parcel.

```javascript title=display.js
(() => {
  // 🧱 mount application here
  let container = null

  // define the 'exports' object
  const exports = {}
  window['display-parcel'] = exports

  // define the parcel lifecycle
  // 👇 bootstrap
  const bootstrap = async () => null

  // 👇 mount: called when route is activated
  const mount = async (props) => {
    container = props.container

    // 👇 get the API
    const { microlcApi } = props

    const div = window.document.createElement('div')
    div.textContent = '0'
    microlcApi.getExtensions().counter.subscribe((count) => {div.textContent = count})
    Object.assign(div.style, {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      textAlign: 'center',
    })
    props.container.appendChild(div)

    return null
  }

  // 👇 unmount: called when another route is activated
  const unmount = async () => {
    if (container !== null) {
      container.childNodes.forEach((element) => element.remove())
    }

    return (container = null)
  }

  exports.bootstrap = bootstrap
  exports.mount = mount
  exports.unmount = unmount
})()
```

again by using the data protocol we can add it on the right side

```json
{
  "sources": [...],
  "content": {
    "tag": "div",
    "attributes": {
      "style": "display: flex; justify-content: space-around; height: inherit;"
    },
    "content": [
      {
        ...
      },
      {
        "tag": "microfrontend-loader",
        "attributes": {
          "style": "flex-grow: 1; background-color: #fffcdd" 👈 another fancy background here
        },
        "properties": {
          "application": {
            "integrationMode": "parcel",
            "entry": {
              "scripts": [
                "📄 paste base64 display.js code here" 👈 paste code
              ]
            }
          }
        }
      }
    ]
  }
}
```

and by click on the left it adds to the counter on the right.

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
                    "src": "https://cdn.mia-platform.eu/micro-lc/orchestrator/2.2.0/dist/favicon.png"
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
        },
        "about": {
          "integrationMode": "iframe",
          "route": "/about",
          "src": "https://example.com/"
        },
        "hash": {
          "integrationMode": "parcel",
          "route": "/hash/",
          "entry": "https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/react-hash-router/index.html"
        },
        "browser": {
          "integrationMode": "parcel",
          "route": "/browser/",
          "injectBase": true,
          "entry": "https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/react-browser-router/index.html"
        },
        "angular": {
          "integrationMode": "parcel",
          "route": "/angular/",
          "injectBase": "override",
          "entry": "https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/angular13/index.html"
        },
        "custom": {
          "integrationMode": "compose",
          "route": "/custom",
          "config": {
            "sources": [
              "https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/microfrontend-loader.js"
            ],
            "content": {
              "tag": "div",
              "attributes": {
                "style": "display: flex; justify-content: space-around; height: 100%;"
              },
              "content": [
                {
                  "tag": "microfrontend-loader",
                  "attributes": {
                    "style": "flex-grow: 1; background-color: #e6f7ff;"
                  },
                  "properties": {
                    "application": {
                      "integrationMode": "parcel",
                      "entry": {
                        "scripts": [
                          "data:text/javascript;base64,InVzZSBzdHJpY3QiOygoKT0+e2xldCBuPW51bGw7Y29uc3QgZT17fTt3aW5kb3dbImN1c3RvbS1wYXJjZWwiXT1lO2NvbnN0IGk9YXN5bmMoKT0+bnVsbCxzPWFzeW5jIHQ9PntuPXQuY29udGFpbmVyO2NvbnN0e21pY3JvbGNBcGk6bH09dCx1PWwuc2V0RXh0ZW5zaW9uKCJjb3VudGVyIix7Z2V0KCl7cmV0dXJuIHRoaXMuc3RhdGV9LGluY3JlbWVudCgpe3RoaXMuc3RhdGUrPTEsd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCJpbmNyZW1lbnQtY291bnRlciIse2RldGFpbDp0aGlzLnN0YXRlfSkpfSxzdGF0ZTowLHN1YnNjcmliZShhKXtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoImluY3JlbWVudC1jb3VudGVyIixkPT5hKGQuZGV0YWlsKSl9fSksbz13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IiksYz13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiYnV0dG9uIik7cmV0dXJuIE9iamVjdC5hc3NpZ24oby5zdHlsZSx7YWxpZ25JdGVtczoiY2VudGVyIixkaXNwbGF5OiJmbGV4IixmbGV4RGlyZWN0aW9uOiJjb2x1bW4iLGhlaWdodDoiMTAwJSIsanVzdGlmeUNvbnRlbnQ6ImNlbnRlciIsdGV4dEFsaWduOiJjZW50ZXIifSksYy50ZXh0Q29udGVudD0iKzEiLGMuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCgpPT51LmNvdW50ZXIuaW5jcmVtZW50KCkpLG8uYXBwZW5kQ2hpbGQoYyksdC5jb250YWluZXIuYXBwZW5kQ2hpbGQobyksbnVsbH0scj1hc3luYygpPT4obiE9PW51bGwmJm4uY2hpbGROb2Rlcy5mb3JFYWNoKHQ9PnQucmVtb3ZlKCkpLG49bnVsbCk7ZS5ib290c3RyYXA9aSxlLm1vdW50PXMsZS51bm1vdW50PXJ9KSgpOwo="
                        ]
                      }
                    }
                  }
                },
                {
                  "tag": "microfrontend-loader",
                  "attributes": {
                    "style": "flex-grow: 1; background-color: #fffcdd"
                  },
                  "properties": {
                    "application": {
                      "integrationMode": "parcel",
                      "entry": {
                        "scripts": [
                          "data:text/javascript;base64,InVzZSBzdHJpY3QiOygoKT0+e2xldCB0PW51bGw7Y29uc3QgZT17fTt3aW5kb3dbImRpc3BsYXktcGFyY2VsIl09ZTtjb25zdCBjPWFzeW5jKCk9Pm51bGwsaT1hc3luYyBuPT57dD1uLmNvbnRhaW5lcjtjb25zdHttaWNyb2xjQXBpOnN9PW4sbz13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7cmV0dXJuIG8udGV4dENvbnRlbnQ9IjAiLHMuZ2V0RXh0ZW5zaW9ucygpLmNvdW50ZXIuc3Vic2NyaWJlKHI9PntvLnRleHRDb250ZW50PVN0cmluZyhyKX0pLE9iamVjdC5hc3NpZ24oby5zdHlsZSx7YWxpZ25JdGVtczoiY2VudGVyIixkaXNwbGF5OiJmbGV4IixmbGV4RGlyZWN0aW9uOiJjb2x1bW4iLGhlaWdodDoiMTAwJSIsanVzdGlmeUNvbnRlbnQ6ImNlbnRlciIsdGV4dEFsaWduOiJjZW50ZXIifSksbi5jb250YWluZXIuYXBwZW5kQ2hpbGQobyksbnVsbH0sbD1hc3luYygpPT4odCE9PW51bGwmJnQuY2hpbGROb2Rlcy5mb3JFYWNoKG49Pm4ucmVtb3ZlKCkpLHQ9bnVsbCk7ZS5ib290c3RyYXA9YyxlLm1vdW50PWksZS51bm1vdW50PWx9KSgpOwo="
                        ]
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      },
      "layout": {
        "content": {
          "tag": "bk-layout",
          "properties": {
            "logo": {
              "url": "https://avatars.githubusercontent.com/u/92730708?s=200&v=4"
            },
            "menuItems": [
              {
                "icon": {
                  "library": "@ant-design/icons-svg",
                  "selector": "HomeOutlined"
                },
                "id": "home",
                "label": "Home",
                "type": "application"
              },
              {
                "icon": {
                  "library": "@ant-design/icons-svg",
                  "selector": "ContactsOutlined"
                },
                "id": "about",
                "label": "About",
                "type": "application"
              },
              {
                "icon": {
                  "library": "@fortawesome/free-solid-svg-icons",
                  "selector": "faHashtag"
                },
                "id": "hash",
                "label": "Hash",
                "type": "application"
              },
              {
                "icon": {
                  "library": "@fortawesome/free-brands-svg-icons",
                  "selector": "faReact"
                },
                "id": "browser",
                "label": "Browser",
                "type": "application"
              },
              {
                "icon": {
                  "library": "@fortawesome/free-brands-svg-icons",
                  "selector": "faAngular"
                },
                "id": "angular",
                "label": "Angular",
                "type": "application"
              },
              {
                "icon": {
                  "library": "@fortawesome/free-solid-svg-icons",
                  "selector": "faBox"
                },
                "id": "custom",
                "label": "Custom",
                "type": "application"
              }
            ]
          }
        },
        "sources": [
          "https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js"
        ]
      }
    }
  }
></tutorial-frame>
```

<micro-lc></micro-lc> API [supports](../../api/micro-lc-api/index.md) several methods and actions that out
of the box let you interact with the page.

Mainly, it allows to retrieve the overall configuration, the current application, routing APIs and more...

Using the <micro-lc></micro-lc> API allows cross communication between any parcel or compose application and the
layout of <micro-lc></micro-lc> and also state persistence amongst microfrontend applications whether mounted or
not.
