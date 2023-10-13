---
title: Routing
description: Routing facilities
sidebar_label: Routing
sidebar_position: 30
---

<micro-lc></micro-lc> API offers a set of facilities for routing between sub-applications. Some methods are proxies of
the document window, offered to centralize the routing experience, while other are based on internal logic.

## `goTo`

```typescript
export interface MicrolcApi {
  router: {
    // highlight-next-line
    goTo: (url: string | URL | undefined) => void
    // ...rest of the API
  }
  // ...rest of the API
}
```

`goTo` can be used to route the application to a specific URL. The behaviour of the method changes based on the 
relation between the curren URL and the given URL.

If the new URL has a **different [origin](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin)** than the current
URL, `goTo` behaves as a [`window.open`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) with `target` `_self`.

If the new URL has **same origin and same [pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname)**
as the current URL, `goTo` behaves as a [`history.replaceState`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)
(useful, for example, if you just need to change query parameters).

Finally, if the new URL has **same origin and different pathname** than the current URL, `goTo` behaves as a 
[`history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState).

:::caution
Using this API does not ensure that the url is changed after the `unmount` of the current
application, if any. To achieve that use [`goToApplication`](#gotoapplication)
:::

## `goToApplication`

```typescript
export interface MicrolcApi {
  router: {
    // highlight-next-line
    goToApplication<S = unknown>(id: string, data?: S): Promise<void>
    // ...rest of the API
  }
  // ...rest of the API
}
```

`goToApplication` is the primary method for moving across applications in <micro-lc></micro-lc>. Instead of
requiring the next url, it expects the `id` of the application that needs to be mounted next. The application
must be available in the configuration field `applications`.

The API then proceeds to:

1. `unmount` the currently mounted application, if any
2. retrieve the next url from the application `id`
3. call such url via [`history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) to update the browser
4. `mount` the application with the given `id`

:::caution
If provided `id` does not match any registered application, `goToApplication` will route to 404
[error page](../../docs/guides/applications/error-pages.md).
:::

## `goToErrorPage`

```typescript
export interface MicrolcApi {
  router: {
    // highlight-next-line
    goToErrorPage(statusCode?: number, reason?: string): void
    // ...rest of the API
  }
  // ...rest of the API
}
```

`goToErrorPage` can be used to programmatically route to an [error page](../../docs/guides/applications/error-pages.md).
Argument `statusCode` is the error number (defaults to 404), and `reason` is the cause of the error.

:::caution
If provided `statusCode` does not match any registered error page, `goToErrorPage` will throw an error.
:::

## `open`

```typescript
export interface MicrolcApi {
  router: {
    // highlight-next-line
    open: (url?: string | URL, target?: string, features?: string) => Window | null
    // ...rest of the API
  }
  // ...rest of the API
}
```

`open` mirrors the [browser native API](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).

## `pushState`

```typescript
export interface MicrolcApi {
  router: {
    // highlight-next-line
    pushState: (data: any, unused: string, url?: string | URL | null) => void
    // ...rest of the API
  }
  // ...rest of the API
}
```

`pushState` mirrors the [browser native API](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState).

## `replaceState`

```typescript
export interface MicrolcApi {
  router: {
    // highlight-next-line
    replaceState: (data: any, unused: string, url?: string | URL | null) => void
    // ...rest of the API
  }
  // ...rest of the API
}
```

`replaceState` mirrors the [browser native API](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState).
