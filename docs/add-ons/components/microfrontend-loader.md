---
title: 🖼 microfrontend-loader
description: Wrapper for Microfrontend Loader
sidebar_label: 🖼 microfrontend-loader
sidebar_position: 5
---

:::info
Available since `v2.2.0`
:::

Logical web component that encapsulates the ability to load a standalone
microfrontend.

Microfrontends loaded via `microfrontend-loader` are not controlled by
`micro-lc` in terms of routing.

```mdx-code-block
<></>
<example-frame
  base="/frames/components/microfrontend-loader"
  height="550px"
  showSource={false}
  src="/"
  title="Overview"
></example-frame>
```

## Usage

:::caution
This component is intended to be used inside <micro-lc></micro-lc> either in the 
[`layout` composable section](../../docs/guides/layout.md) or in a 
[`compose` microfrontend](../../docs/guides/applications/compose.md), 
since it makes use of <micro-lc></micro-lc> [API](../../api/micro-lc-api) and
the [`compose` API](../../api/composer-api.md).

You **can** use it standalone, but you will have to manually provide a matching API with the property `microlcApi`.
:::

The component can be sourced from
[jsDelivr CDN](https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/microfrontend-loader.js) or from 
[mia CDN](https://cdn.mia-platform.eu/micro-lc/orchestrator/2.2.0/dist/microfrontend-loader.js)

To use the component in <micro-lc></micro-lc>, declare it as part of a [`compose` application](../../docs/guides/applications/compose.md) 
including its [properties and attributes](#properties-and-attributes). 

```json title=my-compose-application.config.json
{
  "sources": "https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/microfrontend-loader.js",
  "content": [
    {
      "tag": "microfrontend-loader",
      "properties": {
        // See properties & attributes table below
        "application": {
          "integrationMode": "parcel",
          "entry": "/my-application/index.html"
        }
      },
    },
    {
      "tag": "microfrontend-loader",
      "booleanAttributes": ["disable-shadow-dom"],
      "properties": {
        // See properties & attributes table below
        "application": {
          "integrationMode": "compose",
          "config": {
            "content": "Hello!"
          }
        }
      }
    }
  ]
}
```

## Properties & attributes {#properties-and-attributes}

|  Property   | Attribute |                             Type                              |     Default      | Description                              |
|:-----------:|:---------:|:-------------------------------------------------------------:|:----------------:|------------------------------------------|
|   `application`    |  `-`   | <code><a href="#routelessapplication">RoutelessApplication</a></code>        |   -   | The microfrontend to be loaded configuration                       |
|      -      | `disable-shadow-dom` |                  <code>boolean</code>                   |                                 `false`                                 | Whether &#60;microfrontend-loader&#62;&#60;/microfrontend-loader&#62; should mount its application in Shadow DOM.                    |
|      -      |  `disable-styling`   |                  <code>boolean</code>                   |                                 `false`                                 | Disable &#60;microfrontend-loader&#62;&#60;/microfrontend-loader&#62; preset styling. |

<h3 id="routelessapplication"><code>RoutelessApplication</code></h3>

A `RoutelessApplication` is any [`Application`](../../docs/guides/applications/index.md) without the
`route` property since any microfrontend, loaded by another microfrontend controlled by <micro-lc></micro-lc>,
does not acquire orchestration in terms of router.

#### Shared

| Property | Type | Default | Description |
|:--------:|:----:|:-------:|-------------|
| `integrationMode` | <code>iframe &#124; compose &#124; parcel</code> | **Required** | see [`integrationMode`](../../docs/guides/applications/index.md) |
| ... ||| extra properties related to the choice of an `integrationMode` |

#### when `"integrationMode": "iframe"`

| Property | Type | Default | Description |
|:--------:|:----:|:-------:|-------------|
| `src` | <code>String</code> | - | the `iframe` source |
| `srcdoc` | <code>String</code> | - | alternative to `src`, the HTML injected into the `iframe` |
| `attributes` | <code>Record<string, string></code> | - | attributes to provide to the `iframe` tag |

#### when `"integrationMode": "compose"`

| Property | Type | Default | Description |
|:--------:|:----:|:-------:|-------------|
| `config` | <code><a href="/docs/guides/applications/compose#plugin-configuration">PluginConfiguration</a></code> | - | the `compose` configuration |

#### when `"integrationMode": "parcel"`

| Property | Type | Default | Description |
|:--------:|:----:|:-------:|-------------|
| `entry` | <code><a href="/docs/guides/applications/parcels#usage">Entry</a></code> | - | the entry html or resources of the parcel application |
| `properties` | <code><a href="/docs/guides/applications/parcels#usage">Properties</a></code> | - | **must be serializable**, a dictionary of properties to inject on application mount |
