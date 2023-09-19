---
title: 'Step 6: Make your parcel'
description: tutorial step to create your custom micro-lc parcel
sidebar_label: 'Step 6: Make your parcel'
sidebar_position: 60
---

We briefly touched on webcomponents. Let's dive in custom parcel creation.

Almost any JavaScript script can be a parcel, or any HTML page which includes a JavaScript script.

You can think of a parcel as an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (immediately invoked function expression).

```javascript title=main.js
(() => {
  // application
})()
```

Every frontend framework enters the page with an IIFE, maybe packed as a [UMD](https://github.com/umdjs/umd) (i.e., [React](https://react.dev)) or an ES module (e.g., [Vue](https://vuejs.org)).

A React application looks like:

```javascript
var ReactDOM /* = defined here */
var React /* = defined here */
(() => {
  const container = document.getElementById('root')
  const root = ReactDOM.client.createRoot(container)

  root.render(React.createElement('div', {}, 'Hello!'))
})()
```

To be included in <micro-lc></micro-lc> the requirement is to be a valid [qiankun plugin](https://qiankun.umijs.org) which in
return is a valid [single-spa parcel](https://single-spa.js.org/docs/parcels-overview) bundled as **UMD script**.

Your parcel must export 3 methods:

```typescript
interface Parcel {
  async bootstrap(): null
  async mount(): null
  async unmount(): null
}
```

Since outside an ES module there's no unique way of knowing exports, UMD is recommended as bundle output. <micro-lc></micro-lc> via qiankun
will look for exports via a proxy window property getter

Let's embed a button in the parcel and create the relevant exports:

```javascript title=main.js
(() => {
  // 🧱 mount application here
  let container = null

  // define the 'exports' object
  const exports = {}
  window['custom-parcel'] = exports

  // define the parcel lifecycle
  // 👇 bootstrap
  const bootstrap = async () => null
  
  // 👇 mount: called when route is activated
  const mount = async (props) => {
    container = props.container

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
    button.textContent = 'Click Me!'
    div.appendChild(button)
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

Let's use the same `data protocol` technique used in [step 2](./02-compose-less-by-reusing.md#webcomponents)

```shell
echo "data:text/javascript;base64,$(base64 -w 0 main.js)"
```

and then we have some base64 that can be fetched by <micro-lc></micro-lc>. Let's add a new application

```json
{
  ...,
  "applications": {
    ...,
    "custom": {
      "integrationMode": "parcel",
      "route": "/custom",
      "entry": {
        "scripts": [
          "📄 paste base64 code here"
        ]
      }
    }
  }
}
```

and also let's reference the application in the menu

```json
{
  "layout": {
    "content": {
      "tag": "bk-layout",
      "properties": {
        ...,
        "menuItems": [
          ...,
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
      ...
    ]
  }
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
          "integrationMode": "parcel",
          "route": "/custom",
          "entry": {
            "scripts": ["data:text/javascript;base64,InVzZSBzdHJpY3QiOygoKT0+e2xldCB0PW51bGw7Y29uc3QgZT17fTt3aW5kb3dbImN1c3RvbS1wYXJjZWwiXT1lO2NvbnN0IGw9YXN5bmMoKT0+bnVsbCxpPWFzeW5jIG49Pnt0PW4uY29udGFpbmVyLGNvbnNvbGUubG9nKG4ubWljcm9sY0FwaSk7Y29uc3Qgbz13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IiksYz13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiYnV0dG9uIik7cmV0dXJuIE9iamVjdC5hc3NpZ24oby5zdHlsZSx7YWxpZ25JdGVtczoiY2VudGVyIixkaXNwbGF5OiJmbGV4IixmbGV4RGlyZWN0aW9uOiJjb2x1bW4iLGhlaWdodDoiMTAwJSIsanVzdGlmeUNvbnRlbnQ6ImNlbnRlciIsdGV4dEFsaWduOiJjZW50ZXIifSksYy50ZXh0Q29udGVudD0iQ2xpY2sgTWUhIixvLmFwcGVuZENoaWxkKGMpLG4uY29udGFpbmVyLmFwcGVuZENoaWxkKG8pLG51bGx9LHU9YXN5bmMoKT0+KHQhPT1udWxsJiZ0LmNoaWxkTm9kZXMuZm9yRWFjaChuPT5uLnJlbW92ZSgpKSx0PW51bGwpO2UuYm9vdHN0cmFwPWwsZS5tb3VudD1pLGUudW5tb3VudD11fSkoKTsK"]
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

Let's make it more complex. Say we have another [in-memory router application](https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/react-memory-router/index.html): 
if you navigate to the link you'll see that moving using links does not affect the tab url.

In our custom application we would love to draw a layout, using the compose features but then embedding the `custom-parcel` and the
in memory router application side-by-side.

Let's change the application

```json
{
  ...,
  "applications": {
    ...,
    "custom": {
      "integrationMode": "compose", 👈 new mode
      "route": "/custom",
      "config": {
        "content": {
          "tag": "div",
          "content": [
            {
              ... 👈 custom-parcel goes here
            },
            {
              ... 👈 and in-memory router application goes here
            }
          ]
        }
      }
    }
  }
}
```

We would love to have the mounting factory provided by <micro-lc></micro-lc> inside this context. The `microfrontend-loader`
webcomponent is made for this task.

```json
{
  ...,
  "applications": {
    ...,
    "custom": {
      "integrationMode": "compose", 👈 new mode
      "route": "/custom",
      "config": {
        "sources": [
          "https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/microfrontend-loader.js" 👈 add resources for 'microfrontend-loader'
        ],
        "content": {
          "tag": "div",
          "content": [
            {
              "tag": "microfrontend-loader",
              "properties": {
                "application": {
                  "integrationMode": "parcel",
                  "entry": {
                    "scripts": [
                      "📄 paste base64 code here"
                    ]
                  }
                }
              }
            },
            {
              "tag": "microfrontend-loader",
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
    }
  }
}
```

`microfrontend-loader` takes a unique property `application` which is exactly the same object of any <micro-lc></micro-lc> application but
without a `route` since in this context it does not make any sense.

Let's fix some style

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
        "tag": "microfrontend-loader",
        "attributes": {
          "style": "width: 25%;"
        },
        "properties": {
          "application": {
            "integrationMode": "parcel",
            "entry": {
              "scripts": [
                "📄 paste base64 code here"
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
                "style": "display: flex; justify-content: space-around;"
              },
              "content": [
                {
                  "tag": "microfrontend-loader",
                  "attributes": {
                    "style": "width: 25%;"
                  },
                  "properties": {
                    "application": {
                      "integrationMode": "parcel",
                      "entry": {
                        "scripts": ["data:text/javascript;base64,InVzZSBzdHJpY3QiOygoKT0+e2xldCB0PW51bGw7Y29uc3QgZT17fTt3aW5kb3dbImN1c3RvbS1wYXJjZWwiXT1lO2NvbnN0IGw9YXN5bmMoKT0+bnVsbCxpPWFzeW5jIG49Pnt0PW4uY29udGFpbmVyLGNvbnNvbGUubG9nKG4ubWljcm9sY0FwaSk7Y29uc3Qgbz13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IiksYz13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiYnV0dG9uIik7cmV0dXJuIE9iamVjdC5hc3NpZ24oby5zdHlsZSx7YWxpZ25JdGVtczoiY2VudGVyIixkaXNwbGF5OiJmbGV4IixmbGV4RGlyZWN0aW9uOiJjb2x1bW4iLGhlaWdodDoiMTAwJSIsanVzdGlmeUNvbnRlbnQ6ImNlbnRlciIsdGV4dEFsaWduOiJjZW50ZXIifSksYy50ZXh0Q29udGVudD0iQ2xpY2sgTWUhIixvLmFwcGVuZENoaWxkKGMpLG4uY29udGFpbmVyLmFwcGVuZENoaWxkKG8pLG51bGx9LHU9YXN5bmMoKT0+KHQhPT1udWxsJiZ0LmNoaWxkTm9kZXMuZm9yRWFjaChuPT5uLnJlbW92ZSgpKSx0PW51bGwpO2UuYm9vdHN0cmFwPWwsZS5tb3VudD1pLGUudW5tb3VudD11fSkoKTsK"]
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
