---
title: iFrames
description: Nested browsing contexts
sidebar_label: iFrames
sidebar_position: 10
---

When an **iframe integrated** application is configured, its context is rendered inside the <micro-lc></micro-lc> mount
point as an [iframe tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

:::caution
Be mindful that a website [cannot](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) be embedded
as an iFrame if it served with any `X-Frame-Options` header and <micro-lc></micro-lc> is not `SAMEORIGIN` of the
embedded iFrame. Attempting to do so will result in a console error like:

```mdx-code-block
<console-error-line>
  The loading of "https://www.google.com/" in a frame is denied by "X-Frame-Options" directive set to "SAMEORIGIN"
</console-error-line>
```

When a website responds with a `X-Frame-Options` header, the iFrame does not emit an `onerror` event, hence
<micro-lc></micro-lc> cannot redirect to an error page. The view then depends on the browser used to run the application.
:::

## Usage

Declare an application with integration mode `iframe` in <micro-lc></micro-lc> configuration:

```typescript
interface IFrameApplication {
  integrationMode: "iframe"
  route: string // Path on which the iFrame will be rendered
  src?: string // iFrame src attribute value
  srcdoc?: string // iFrame content
  attributes?: Record<string, string> // Valid attributes of iframe HTML element
}
```

`src` and `srcdoc` are mirrors of the iframe attributes and will override any declaration in the `attributes` field.
Anyway if unused, the declaration of `src` and `srcdoc` in `attributes` is valid and will produce a working iframe.

```mdx-code-block
<></>
<example-frame
  base="/frames/guides/applications/iframes/standard"
  height="550px"
  sourceTabs={[
    { filePath: "/index.html" },
    { filePath: "/config.json" },
    { filePath: "/config.yaml", isDefault: true }
  ]}
  src={"/"}
  title="iFrame integration"
></example-frame>
```

:::tip
In case of unknown embedding website, `srcdoc` can be useful to inline your application html document
:::

```mdx-code-block
<></>
<example-frame
  base="/frames/guides/applications/iframes/inline"
  height="550px"
  sourceTabs={[
    { filePath: "/index.html" },
    { filePath: "/config.json" },
    { filePath: "/config.yaml", isDefault: true }
  ]}
  src={"/"}
  title="iFrame inline integration"
></example-frame>
```

By default, the style of an iFrame application is set to

```css
iframe {
  width: inherit;
  height: inherit;
  border: none;
}
```

and can be overridden easily by setting the `style` attribute.
