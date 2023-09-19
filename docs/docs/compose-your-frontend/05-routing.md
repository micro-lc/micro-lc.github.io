---
title: 'Step 5: Routing'
description: tutorial step to tune routing of micro-lc parcels
sidebar_label: 'Step 5: Routing'
sidebar_position: 50
---

The second task that <micro-lc></micro-lc> accomplishes is routing.

[Routing](../guides/routing.md) is configured via the application's `route` field. Each `integrationMode` has one.

Applications must be divided into two groups:

- Those that need to know where they are mounted.
- Those who don't.

We determine which group an application belongs to by examining its use of the browser's [`history API`](https://developer.mozilla.org/en-US/docs/Web/API/History).

The first group includes:

- Any `iframe` integrated application.
- Any `compose` integrated application that doesn't use web components that push onto the `history`.
- Any `parcel` that doesn't have a router.
- Any `parcel` that has a hash router.
- Any `parcel` that has an in-memory router.

These applications either do not use the `history API` or use it without causing side effects for <micro-lc></micro-lc> centralized routing.

All other applications may use the `history` API, and special handling is required for them.

## The Route Property

The `route` property takes a string, which can have dynamic segments. Out of the registered routes, <micro-lc></micro-lc> will activate the **longest** match in terms of characters, excluding the dynamic segments.

For parcels, an explicit trailing slash must be placed on the route of an application that has internal routing:

```json
{
  ...
  "applications": {
    ...,
    "hash": {
      "route": "/hash/",
      ...
    }
  }
}
```

The trailing slash is not automatically added. This ensures that single-page applications without internal routing can be displayed even if the route called lacks a trailing slash. This is common when the webserver enforces the rule:

> If I don't find a file or a directory, I will try to serve the `./index.html` resource from that path

:::caution
<micro-lc></micro-lc> is not, by default, aware of any webserver rule and won't ever attempt to mimic it by appending slashes or automatically re-routing.

To enforce re-routing rules, nginx comes in handy with the directive:

> try_files   $uri $uri/index.html /index.html =404;

:::

## Base Injection

Now let's try to integrate an application with internal routing. We can use a showcase React application with [browser routing](https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/react-browser-router/index.html)

This application was developed using a <micro-lc></micro-lc> [React template](https://github.com/micro-lc/react-template). By examining the repository:

```json title=https://github.com/micro-lc/react-template/blob/main/package.json
{
  ...
  "homepage": "./", 👈 relative url
  ...
}
```

We can see that local development of the application is straightforward on `/` since static assets, once built, will be relative to the entry point (the `index.html`).

To let <micro-lc></micro-lc> know that it should instruct this application to prepend a pathname to its current relative entry point, we use the `injectBase` property.

```json
{
  ...,
  "applications": {
    ...,
    "browser": {
      "integrationMode": "parcel",
      "route": "/browser/", 👈 notice the trailing slash
      "injectBase": true,
      "entry": "https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/react-browser-router/index.html"
    }
  },
  ...,
  "layout": {
    "content": {
      "tag": "bk-layout",
      "properties": {
        ...,
        "menuItems": [
          {
            ...
          },
          {
            ...
          },
          {
            "icon": {
              "library": "@fortawesome/free-brands-svg-icons",
              "selector": "faReact"
            },
            "id": "browser",
            "label": "Browser",
            "type": "application"
          }
        ]
      }
    },
    "sources": [
      ...
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

Both `/hash/` and `/browser/` routes are properly expanded within the parcel applications.

This is because a base tag is injected into the entry point of the application. <micro-lc></micro-lc> calculates the base path of the parcel that's about to be activated based on the route fields and any existing base tag in the main index.html, making it accessible in the application.

Applications can recover it by using the query selector `qiankun-head base`.

What about applications that already come with a base tag?

The `injectBase` takes options here. If `true` it will attempt to add a base tag only if none is present, whereas if
`override` it will remove any base tag present and inject one.

Let's add an angular application which has a base tag already. If you inspect the [entry index.html](https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/angular13/index.html)
you'll notice that

```html title=https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/angular13/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular13</title>
  <base href="/"> 👈 already set to /
  ...
</head>
<body>
</body>
</html>
```

Let's say that we'd like to expose this application under `/angular/`.

We add the application:

```json
{
  ...,
  "applications": {
    ...,
    "angular": {
      "integrationMode": "parcel",
      "route": "/angular/",
      "injectBase": "override", 👈 override the base tag
      "entry": "https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/angular13/index.html"
    }
  },
  ...,
}
```

and the menu entry

```json
{
  ...,
  "layout": {
    "content": {
      "tag": "bk-layout",
      "properties": {
        ...,
        "menuItems": [
          {
            ...
          },
          {
            ...
          },
          {
            "icon": {
              "library": "@fortawesome/free-brands-svg-icons",
              "selector": "faAngular"
            },
            "id": "angular",
            "label": "Angular",
            "type": "application"
          }
        ]
      }
    },
    "sources": [
      ...
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

Let's try to make a framework-independent custom parcel application...
