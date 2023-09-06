---
title: 'Step 3: Layout'
description: tutorial step to define Layout for the website
sidebar_label: 'Step 3: Layout'
sidebar_position: 30
---

Having gained a grasp on composition, we can now delve deeper into the <micro-lc></micro-lc> configuration.

<micro-lc></micro-lc> is a web component that performs several functions. Primarily, it
[divides](../concepts/separation-of-concerns.md) the DOM into two sections:

- **layout**
- **content**

The content varies based on the page URL by mounting and unmounting microfrontends. In contrast, the layout remains static, as illustrated below:

```mdx-code-block
<></>
<example-frame
  id="1"
  base="/frames/concepts/separation-of-concerns"
  height="550px"
  sourceTabs={[{filePath: '/config.yaml', isDefault: true}]}
  src={"/"}
  title="Viewport separation"
></example-frame>
```

:::tip
The configuration for <micro-lc></micro-lc> can be in yaml format. However, using yaml config files requires an extra ~15kB to be loaded on the browser. Fortunately, this operation is dynamic, so it doesn't affect json config files, which have a native interpreter in the browser window.
:::

There's no limit to the shape or style of the [layout](../guides/layout.md). We'll begin with a layout featuring a sidebar and top bar menu, reserving the content space for applications or microfrontends that dynamically change beneath the top bar and to the right of the sidebar.

In the playground, your current configuration should resemble:

```json
{
  "version": 2,
  "applications": {
    "home": {...}
  }
}
```

The applications field configures the content portion of the <micro-lc></micro-lc> viewport. The layout field, on the other hand, is used to set up the layout portion of the viewport:

```json
{
  "version": 2,
  "applications": {
    ...
  },
  "layout": {
    👈 this is a composition context
  }
}
```

As highlighted in the JSON above, the layout field serves as a composition context. It supports keys like:

- sources: to include third-party libraries (this can also be a pure JavaScript side-effect script)
- content: to design the layout using an HTML-like JSON configuration, as discussed in [step 1](./01-how-to-compose.md)

Let's now explore the custom web component [`bk-layout`](https://docs.mia-platform.eu/docs/business_suite/backoffice/components/misc#bk-layout). The bk-layout is a sidebar + top bar menu component configurable in several ways via properties, such as:

- The top-left logo image
- Sidebar menu items and their organization/grouping
- Login/logout menu
- And much more...

```json
{
  "layout": {
    "content": {
      "tag": "bk-layout"
    },
    "sources": [
      "https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/1.3.18/dist/bk-web-components.esm.js"
    ]
  }
}
```

Upon applying this configuration, a blank sidebar menu with a top bar will surround the content area. Let's make some adjustments:

```json
{
  ...,
  "layout": {
    "content": {
      "tag": "bk-layout",
      "properties": {
        "logo": {
          "url": "https://avatars.githubusercontent.com/u/92730708?s=200&v=4"
        },
        "menuItems": [
          {
            "id": "home",
            "label": "Home",
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
```

Now, the logo appears, and a new item also shows up in the sidebar menu. The bk-layout utilizes the <micro-lc></micro-lc> [routing api](../../api/micro-lc-api/routing.md) to activate the item with the "id" of "home" since it matches the application name:

:::tip
The <micro-lc></micro-lc> is injected in every composition context and any custom webcomponent
:::

```json
{
  "version": 2,
  "applications": {
    👇 this one
    "home": {
      ...
    }
  }
  ...
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
                "id": "home",
                "label": "Home",
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

With that application currently mounted, bk-layout activates the corresponding menu entry. We'll discuss more about this later.

:::caution
While the sources field can point to any ESM library or IIFE library, be cautious. If different sources define the same web component tag, the page will malfunction 😢. This issue often arises when multiple versions of the same library are inadvertently included in the sources of different composition contexts.
:::

## An About Page

Although we haven't mounted multiple microfrontends yet, let's prepare for future steps by adding a new entry to the sidebar menu:

```json
{
  ...,
  "menuItems": [
    {
      "id": "home",
      "label": "Home",
      "type": "application"
    },
    {
      "id": "about",
      "label": "About",
      "type": "application"
    }
  ]
}
```

This introduces two issues:

- Clicking on About displays a prominent 404 page (though this was somewhat expected).
- Both Home and About share the same icon.

The latter issue has a straightforward fix:

```json
{
  ...,
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
```

Now, it's time to dive into integrating microfrontends in the content area...
