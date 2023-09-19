---
title: 'Step 1: How To Compose'
description: 'tutorial step to review the process of html-to-json composition'
sidebar_label: 'Step 1: How To Compose'
sidebar_position: 10
---

## Blank Configuration

To begin, reset the configuration to the default and click `Apply`:

```json
{
  "version": 2
}
```

```mdx-code-block
<></>
<tutorial-frame
  configuration={{"version": 2}}
></tutorial-frame>
```

A prominent `404` will appear. No worries, this is expected because no microfrontend is mounted at the route `/`. At the top of the preview, you'll see the current window location as `https://my-domain/`. <micro-lc></micro-lc> is informing you that `/` is not configured to display anything.

## Add Some Compose Context

[composition](../concepts/composition.md) refers to the ability to build a microfrontend from a configuration that closely mirrors HTML. Let's prepare some composition context for <micro-lc></micro-lc> to display at `/`. Trust this step for now; we'll delve into its details later. Paste the following config into the playground:

```json
{
  "version": 2,
  "applications": {
    "home": {
      "integrationMode": "compose",
      "route": "/",
      "config": {
        "content": "Hello"
      }
    }
  }
}
```

Upon pressing `Apply`, you should see 'Hello' displayed.

Next, let's focus on the content key nested inside `applications.home.config.content` - this is our current composition context. Imagine you want to start with a simple homepage at `/` that looks like:

```html
<div>
  <img
    alt="logo"
    src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"
  ></img>
  <a
    href="https://micro-lc.io/"
    target="_blank"
  >Get started with the official documentation!</a>
</div>
```

This consists of an image followed by a link. Now, we need to create an equivalent JSON representation of this HTML using the rules:

- `a` -> `"tag": "a"`
- `href="https://micro-lc.io/"` -> `"attributes": {"href": "https://micro-lc.io/"}`
- `Get started with the official documentation!` -> `"content": "Get started with the official documentation!"`

For each HTML tag, we create a JSON object with `tag`, `attributes`, and `content` fields representing the respective tag, its attributes, and its `children`:

```json
{
  "tag": "a",
  "attributes": {
    "href": "https://micro-lc.io/",
    "target": "_blank"
  },
  "content": "Go to official documentation"
}
```

Recursively applying these rules to the entire HTML, we get:

```json
{
  "tag": "div",
  "content": [
    {
      "tag": "img",
      "attributes": {
        "alt": "logo",
        "src": "https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"
      }
    },
    {
      "tag": "a",
      "attributes": {
        "href": "https://micro-lc.io/",
        "target": "_blank"
      },
      "content": "Go to official documentation"
    }
  ]
}
```

Copy and paste this into the playground's composition context:

```json
{
  "version": 2,
  "applications": {
    "home": {
      "integrationMode": "compose",
      "route": "/",
      "config": {
        "content": 👈 right here
      }
    }
  }
}
```

Then press `Apply`.

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
                  "tag": "a",
                  "attributes": {
                    "href": "https://micro-lc.io/",
                    "target": "_blank"
                  },
                  "content": "Go to official documentation"
                }
              ]
            }
          }
        }
      }
    }
  }
></tutorial-frame>
```

The result might not look visually appealing, so let's enhance it with some styling:

```json
{
  "tag": "div",
  "attributes": {
    "style": "height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px; font-family: Arial;"
  },
  "content": [
    ...
  ]
}
```

You can apply styles to any tag. For instance, on the a tag, we could add:

```json
{
  "tag": "a",
  "attributes": {
    "href": "https://micro-lc.io/",
    "target": "_blank",
    "style": "text-shadow: 2px 2px #aaa;"
  },
  "content": "Go to official documentation"
}
```

Inspecting the DOM, we should obtain:

```html
<div
  style="
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 24px;
    font-family: Arial;
  "
>
  <img
    alt="logo"
    src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"
  ></img>
  <a
    href="https://micro-lc.io/"
    target="_blank"
    style="text-shadow: 2px 2px #aaa;"
  >Get started with the official documentation!</a>
</div>
```

Sounds tedious, right? 💀

Indeed, it can be quite tedious. That's mainly because composition isn't intended to help you build your webpage from standard HTML tags (that's what HTML is for). The primary goal is to facilitate the layout of complex and reusable HTML5 [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components).
