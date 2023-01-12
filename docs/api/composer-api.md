---
title: Composer API
description: micro-lc composer API
sidebar_label: Composer API
sidebar_position: 30
---

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
```

Any HTML element mounted in <micro-lc></micro-lc> via [layout](../docs/guides/layout.md) or
[mount point](../docs/guides/layout.md#mount-point), or any 
[composable application](../docs/guides/applications/compose.md) is provided with the property `composerApi`, which
provides the same dynamic capability for [mounting HTML subtrees](../docs/concepts/composition.md) <micro-lc></micro-lc>
itself uses under the hood.

The composer API is an object with two methods:

- `premount` which flattens polymorphic configurations and injects import maps, and
- `createComposerContext` which builds an appender that can be called by assigning a root HTML DOM appending the
dynamically configured HTML DOM as subtree of the root.
- `render` wraps `lit-html` `render` method and injects a [context](../docs/guides/applications/compose.md#properties-injection)

### `premount`

```typescript
interface ComposerApi {
  // ... rest of the API
  premount: (config: PluginConfiguration, proxyWindow?: ImportShimContext, reporter?: (err: unknown) => void) => Promise<ResolvedConfig>
}
```

`premount` allows to reduce the 
[`PluginConfiguration` type](localhost:3000/docs/guides/applications/compose#plugin-configuration) to the following
`ResolvedConfig` type

```typescript
interface ResolvedConfig {
  content: Content
  sources: {
    importmap?: ImportMap
    uris: string[]
  }
}
```

the optional `proxyWindow` which defaults to the current `window` must implement the `importShim` interface, allows
to override the importmap features, namely to set a no-op behaviour or select an iframe window. Notice that the
interface is equivalent to

```typescript
interface ImportShimContext {
  importShim<D, E extends Record<string, unknown>>(
    uri: string, parentUrl?: string
  ): Promise<{ default: D } & E>
}
```

After being called, `premount` ensures all import maps declared are available and `uris` sources have been fetched and
their code run. If there is no `sources` in the `PluginConfiguration`, `premount` is a no-operation.
Moreover an error reporter can be injected since `premount` will not throw on errors.

### `createComposerContext`

```typescript
interface ComposerApi {
  // ... rest of the API
  createComposerContext: (
    content: Content,
    options: ComposerOptions
  ) => Promise<ComposerContextAppender>
}
```

Once `premount` has been run, if needed, `createComposerContext` provides a callback for appending the DOM
configured in `content`:

```typescript
type ComposerContextAppender = (container: HTMLElement | DocumentFragment, options?: RenderOptions) => void
```

where `container` is the root element that will be used to append the composed subtree and `options`
refer to optional features provided by the [`lit-html` `render` method](https://lit.dev/docs/api/templates/#render).

Finally, `options` in `createComposerContext` is the object to interact with when the compiler needs to be
instructed to recognize some properties as special context. This feature allows to inject JS context avoiding eval and
works according to the [composability principles](../docs/guides/applications/compose.md#interpolated-properties).

### `render`

```typescript
interface ComposerApi {
  // ... rest of the API
  render: (
    config: ResolvedConfig,
    container: HTMLElement,
    context: Record<string, unknown> = {}
  ) => Promise<ComposerContextAppender>
}
```

Alternatively, if the use case requires to append a `ResolvedConfig` to a `container` html element
and inject a `context` of properties, `render` provides a useful shortcut.

## Standalone usage

The composer API can be directly injected in your browser as a module by adding a script import from CDN source
or in your code as a `dependency`.

To add it to your codebase: 

```mdx-code-block
<Tabs groupId="pkg-manager">
<TabItem value="npm" label="npm" default>
```
```shell
npm install @micro-lc/composer
```
```mdx-code-block
</TabItem>
<TabItem value="yarn" label="yarn">
```
```shell
yarn add @micro-lc/composer
```
```mdx-code-block
</TabItem>
</Tabs>
```

Otherwise, add to your `index.html` the following script:

```html
  <script type="importmap">
    {
      "imports": {
        "@micro-lc/composer": "https://cdn.jsdelivr.net/npm/@micro-lc/composer@latest/dist/bundle/index.min.js"
      }
    }
  </script>
```

and then use it in your scripts:

```html
<body>
  <div id="root"></div>
  <script type="module">
    import {render} from '@micro-lc/composer'

    (async function () {
      const root = document.getElementById('root')

      render({content: "Hello 👋"}, root)
    })()
  </script>
</body>
```

in case your browser does not support modules we recommend to add [es-module-shims](https://github.com/guybedford/es-module-shims).
