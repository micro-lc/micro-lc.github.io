---
title: 'Step 4: Applications'
description: tutorial step to integrate mfe as applications
sidebar_label: 'Step 4: Applications'
sidebar_position: 40
---

A key element is notably missing in the configuration: `applications`.

As previously mentioned, the [applications](../guides/applications/index.md) configuration handles the dynamic aspect of the <micro-lc></micro-lc> viewport, which mounts and unmounts components based on URL changes.

Now that we've grasped the concept of `composition`, let's delve deeper into the <micro-lc></micro-lc> `applications` configuration.

## Compose

So far, we have the `home` application, integrated as `compose` with "integrationMode" set to "compose":

```json
{
  "version": 2,
  "applications": {
    "home": {
      "integrationMode": "compose",
      "route": "/",
      "config": {
        ...
      }
    }
  },
  ...
}
```

Three fields are configured for the `home` application:

- `route` serves as the activation rule for this application.
- `integrationMode`, which, as of now, has only the value compose.
- `config` provides the composition context.

To resolve the `404` error, let's introduce the `about` application using a different integration mode.

## IFrame

The simplest form of microfrontend integration is the HTML iframe tag, which embeds one webpage within the viewport of another.

:::caution
An iframe with a `src` attribute with the same origin as the top window won't be sandboxed unless specified by the [`sandbox` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attributes).
:::

For demonstration purposes, we'll use [https://example.com](https://example.com) as a placeholder.

```json
{
  "version": 2,
  "applications": {
    "home": {
      ...
    },
    "about": {
      "integrationMode": "iframe",
      "route": "/about",
      "src": "https://example.com/"
    }
  },
  "layout": {
    ...
  }
}
```

Now, using the side menu does not pop the `404` anymore and even the url bar shows correctly the redirections.

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
        },
        "about": {
          "integrationMode": "iframe",
          "route": "/about",
          "src": "https://example.com/"
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

The iframe from `example.com` fits perfectly within the context due to the preset style that <micro-lc></micro-lc> sets on iframe-integrated applications.

With the introduction of this new integration mode, `iframe`, the `config` property becomes irrelevant since there's no need for a composition context. Instead, `src` mirrors the `iframe` `src` attribute.

The `route` field remains consistent across both `integrationMode`s as it signifies the <micro-lc></micro-lc> router activation rule.

Moving on, let's explore the third integration mode.

Let's get to the third integration mode.

## Parcel

The term for this integration mode is derived from the `single-spa` lexicon. In <micro-lc></micro-lc>, a `parcel` symbolizes a single-page application developed with any supported frameworks and linked to a specific application route.

Incorporating external single-page applications into other web pages can pose challenges. Different orchestrators have various solutions to these challenges. It's crucial to highlight the inherent difficulty in integrating microfrontends:

> a JavaScript script cannot run its code with a proxied version of both `globalThis` and `window`

The [shadow realm proposal](https://github.com/tc39/proposal-shadowrealm) is an attempt to resolve this issue.

This means that a bundled single-page application might:

1. Misuse the `document` object in JavaScript, especially when referring to the `body` element.
2. Have conflicting CSS with the orchestrator.
3. Utilize globals that might interfere with another microfrontend's use of the same globals, such as stubbing or wrapping `fetch`, using multiple instances of libraries like `monaco-editor`, etc.
4. Listen to the `popstate` event and introduce another router.
5. And many other potential issues...

While <micro-lc></micro-lc> and its foundational libraries, [qiankun](https://qiankun.umijs.org) and [single-spa](https://single-spa.js.org), can implement measures to circumvent these issues, it's crucial to remember:

> Remedies might sometimes be inadequate. Thus, when using `globals`, always be conscious of other applications.

To integrate an existing single-page application, you only need to make minor adjustments. This topic is covered by dedicated [templates](../guides/applications/index.md). For now, use a React application compatible with <micro-lc></micro-lc>, available here.

Upon adding a new application and creating a new entry in the side menu, a third item appears. Clicking on it brings up the React application.

```json
{
  "version": 2,
  "applications": {
    "home": {
      ...
    },
    "about": {
      ...
    },
    "hash": {
      "integrationMode": "parcel",
      "route": "/hash",
      "entry": "https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/react-hash-router/index.html"
    }
  },
  "layout": {
    ...
  }
}
```

```json
{
  "version": 2,
  "applications": {
    ...
  },
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
              "library": "@fortawesome/free-solid-svg-icons",
              "selector": "faHashtag"
            },
            "id": "hash",
            "label": "Hash",
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
        },
        "about": {
          "integrationMode": "iframe",
          "route": "/about",
          "src": "https://example.com/"
        },
        "hash": {
          "integrationMode": "parcel",
          "route": "/hash",
          "entry": "https://cdn.mia-platform.eu/micro-lc/examples/0.1.3/static/parcels/react-hash-router/index.html"
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

The React application's internal routing is easily managed by such routers since they don't need to be aware of the absolute URL pathname they are mounted on. However, a minor inconvenience arises as the `/hash` URL is not concatenated with a trailing `/`, leading to subroutes like `/hash#/about`.

Let's delve into routing and how to rectify this issue.
