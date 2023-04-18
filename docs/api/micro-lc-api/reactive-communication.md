---
title: Reactive communication
description: Reactive state object manipulation
sidebar_label: Reactive communication
sidebar_position: 20
---

<micro-lc></micro-lc> holds a state object which can be updated key-be-key at first level only. This means that clients
of this API are responsible for merging anything that goes beyond the first level.

:::caution
<micro-lc></micro-lc> uses `rxjs@^7` to dispatch reactive changes. In case of interoperability issues with
other reactive libraries like [Bacon.js](https://github.com/baconjs/bacon.js),
[Callbags](https://github.com/callbag/callbag),
[Kefir](https://github.com/kefirjs/kefir), [xstream](https://github.com/staltz/xstream), or rxjs lower versions like `^6`,
we recommend to polyfill `Symbol.observable` as reported [here](https://ncjamieson.com/how-to-use-interop-observables/).

A polyfill is provided by <micro-lc></micro-lc> itself since `v2.0.9` available by including in your `index.html`

```html
<script src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@^2/dist/polyfills/symbol-observable.js"></script>
```

:::

State object can be updated with [`set`](#set) method and consumed with [`subscribe`](#subscribe) method.

```typescript
// Application 1 ⤵
microlcApi.set({ userName: 'John Doe' })

// Application 2 ⤵
microlcApi.subscribe((state) => console.log(JSON.stringify(state)))
// output: {"userName":"John Doe"}

// Application 1 ⤵
microlcApi.set({ grants: ['read', 'write'] })

// Application 3 ⤵
microlcApi.subscribe((state) => console.log(JSON.stringify(state)))
// output: {"userName":"John Doe","grants":["read","write"]}
```

:::tip
If you need to extend state with specific state management tools, like Redux, you can either add a specific key using
this API, or register your tool as an [extension](./extensions.md).
:::

## `set`

```typescript
export interface MicrolcApi<E extends Record<string, unknown>> {
  // highlight-next-line
  readonly set: (event: Partial<E>) => void
  // ...rest of the API
}
```

## `subscribe`

```typescript
import type { Subscription } from 'rxjs'

export interface MicrolcApi<E extends Record<string, unknown>> {
  // highlight-next-line
  readonly subscribe: (next: (value: Partial<E>) => void) => Subscription
  // ...rest of the API
}
```

## `next`

:::caution
This API will completely override the state. Use it with caution.
:::

```typescript
import type { Subscription } from 'rxjs'

export interface MicrolcApi<E extends Record<string, unknown>> {
  // highlight-next-line
  readonly next: (value: E) => void
  // ...rest of the API
}
```
