---
title: 🛠 Middleware
description: Configurations service station
sidebar_label: 🛠 Middleware
sidebar_position: 10
---

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
```

:::caution
The following documentation refers to **version 3.x.x** of the service.
:::

**Middleware** is a backend service responsible for [serving](#serving-from-file-system) <micro-lc></micro-lc> static and
configuration files, while applying some useful manipulation logic before returning their content. This logic is also
distributed through an [SDK](#sdk) to ease the process of building custom configurations servers.

## Usage

Middleware is available as a Docker image on [Dockerhub](https://hub.docker.com/r/microlc/middleware).

### Environment variables

Middleware it built using Mia-Platform's [custom-plugin-lib](https://github.com/mia-platform/custom-plugin-lib), hence it
needs the environment variables outlined in the 
[library documentation](https://github.com/mia-platform/custom-plugin-lib#environment-variables-configuration).

On top of those, Middleware accepts the following environment variables:

|            Name            |   Type   |              Default              | Description                                                                                                 |
| :------------------------: | :------: | :-------------------------------: | ----------------------------------------------------------------------------------------------------------- |
|  `PUBLIC_DIRECTORY_PATH`   | `string` |   `/usr/static/configurations`    | Absolute path of the [directory](#serving-from-file-system) containing static files to be served            |
| `RESOURCES_DIRECTORY_PATH` | `string` |       `/usr/static/public`        | Absolute path of the [directory](#serving-from-file-system) containing configuration resources to be served |
|   `SERVICE_CONFIG_PATH`    | `string` | `/usr/src/app/config/config.json` | Absolute path of the [service configuration](#service-configuration) file                                   |

## Service configuration

The service accepts a JSON configuration file containing containing information on the [content types](#content-type) 
and on the [headers](#headers) to apply to file responses.

The service will use the `SERVICE_CONFIG_PATH` [environment variable](#environment-variables) to locate the configuration
file, which should contain an object with the following structure:

```typescript
interface Config {
  contentTypeMap?: Record<string, string | string[]>
  publicHeadersMap?: Record<string, Record<string, string | (string | string[])[]>>
}
```

### Content Type

By default, Middleware returns a file with the following content types (depending on the file extension).

| Extension |  Content-Type header   |
| :-------: | :--------------------: |
|   .cjs    | application/javascript |
|   .css    |        text/css        |
|   .html   |       text/html        |
|    .js    | application/javascript |
|   .json   |    application/json    |
|   .mjs    | application/javascript |
|   .yaml   |       text/yaml        |
|   .yml    |        text/yam        |

Any extension not listed will trigger a default `Content-Type` equal to `text/plain`.

These settings can be overridden using with the `contentTypeMap` property of the service configuration, which should be
a map linking extensions to Content-Type header signatures. Keys must be either a single extension or a comma separated
list of extensions while values must be strings or array of strings which will be joint with a semicolon as separator.

For example, the following `contentTypeMap`

```json
{
  ".mjs,.js": ["text/javascript", "charset=utf8"],
  ".xml": "application/xml"
}
```

which will force Middleware to return on `.mjs` and `.js` the equivalent `text/javascript; charset=utf8` Content-Type header and
`application/xml` on XML files.

:::caution
Any extension listed in the `CONTENT_TYPE_MAP` will override its previous default value allowing even to change
`Content-Type` for JSON and YAML files which might create problems on <micro-lc></micro-lc> web component configuration dump.
:::

### Headers

The `publicHeadersMap` property of the configuration allows you to specify additional headers to include in
[static files](#serving-from-file-system) responses (i.e., files exposed under `/public`).

The property should be a map linking file pathnames to headers definitions. Keys must be valid pathname strings
(e.g., `/public/index.html`), while values must be maps linking [HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
names to valid values. Values can be directly a _string_, an _array of string_ (which will be joined with a comma), or
an _array of arrays of string_ (which will be joined with a semicolon at inner lever and with a comma at external level).

:::tip
`Content-Type` headers specified here will win over the ones defined in
[`contentTypeMap`](#content-type) configuration.
:::

:::tip
Middleware applies [nonce injection](#nonce-injection) on additional headers.
:::

For example, the following `publicHeadersMap`

```json
{
  "/public/index.html": {
    "content-security-policy": [
      [
        "script-src 'nonce-**CSP_NONCE**'",
        "style-src 'self'"
      ]
    ],
    "link": "</micro-lc-configurations/config.json>; rel=preload; as=fetch"
  }
}
```

causes a request to `/public/index.html` to have the following headers:

```txt
content-security-policy: script-src 'nonce-KMxEW8oQKCm12+XocTYib9u6++'; style-src 'self'
link: </micro-lc-configurations/config.json>; rel=preload; as=fetch
```

## Serving from file system

Configuration files and regular files served by Middleware are loaded from file system.

**Static files** are sourced from the directory specified with the `PUBLIC_DIRECTORY_PATH` 
[environment variable](#environment-variables) and are exposed under `/public` prefix. **Configuration files** are
searched in the directory specified with the `RESOURCES_DIRECTORY_PATH` [environment variable](#environment-variables)
and are exposed under `/configurations` prefix.

:::tip
Calling `/public`, `/public/` or a non-existing file under public (e.g., `/public/unknown-file.js`) will result in
Middleware responding with the root `index.html` file, if existing.
:::

For example, given a file system with the following structure:

```text
├── public
|   └── index.html
|   └── assets
|       └── style.css
|
├── configurations
    └── config.json
    └── lib
        └── index.js
```

Middleware will expose the following routes:

```text
GET - /public (redirecting to /public/index.html)
GET - /public/ (redirecting to /public/index.html)
GET - /public/index.html
GET - /public/assets/style.css

GET - /configurations/config.json
GET - /configurations/lib/index.js
```

### Static files manipulation

If a required **static** file is an HTML resource (i.e., a file exposed under `/public` ending with `.html`), before
returning the file, Middleware applies some parsing logics to its content.

#### Nonce injection

Middleware allows you to inject a server-generated [nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce)
in HTML files. In particular, it will find any occurrence of the of the expression `**CSP_NONCE**` and replace it with
the actual value.

For example, the following HTML file

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <link 
    rel="stylesheet"
    nonce="**CSP_NONCE**"
    href="./assets/style.css" />
</head>

</html>
```

will be serve as

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <link 
    rel="stylesheet"
    nonce="KMxEW8oQKCm12+XocTYib9u6++"
    href="./assets/style.css" />
</head>

</html>
```

### Configuration files manipulation

If a required **configuration** file is a JSON or YAML resource (i.e., a file exposed under `/configurations` ending with
`.json`, `.yaml` or `.yml`), before returning the file, Middleware applies some parsing logics to its content.

#### ACL application

Middleware allows you to implement **access control limit** on served files, removing sections of configurations based on
certain properties of the caller. Namely, Middleware considers caller's **groups** and **permissions**.

Caller's **groups** are extracted from request headers, particularly from the header the key of which is specified through
`GROUPS_HEADER_KEY` [environment variable](#environment-variables). The value of the header should be a comma-separated
list of groups (e.g., `"admin,user"`).

Caller's **permissions** are extracted from request headers too. Middleware takes the header the key of which is specified
through `USER_PROPERTIES_HEADER_KEY` [environment variable](#environment-variables) and expects a stringified JSON
object containing a comma-separated list of permissions under the key `permissions` (e.g.,
`"{\"permissions\":"api.users.get,api.users.post"}"`).

ACL expressions can be specified anywhere in configuration using the special key `aclExpression` having as value a
**stringified boolean expression** based on caller's groups and permissions (e.g., 
`groups.admin || permissions.api.users.get`).

:::tip
You can use any combination of groups, permissions and JavaScript operators in you ACL expressions.

For example, the following expressions are all valid:
* `groups.admin && permissions.api.users.get`
* `!groups.developer`
* `permissions.api.users.get || permissions.api.users.post`
* `(groups.admin && !permissions.api.users.post) || permissions.api.users.count.get`
* `(groups.admin === true && permissions.api.users.post === true)`
:::

Middleware evaluates each ACL expression against caller's properties and, if the expression results in a `falsy value`, it
removes from the configuration the **whole object** which the expression is a property of. It then proceeds to remove
any `aclExpression` key left over to not leak server-side logic into the client.

##### Example

Let's consider the following configuration file served under `GET - /middleware/config.json`.

```json
{
  "content": {
    "tag": "div",
    "properties": {
      // highlight-next-line
      "aclExpression": "groups.admin",
      "adminName": "John Doe"
    },
    "content": [
      {
        // highlight-next-line
        "aclExpression": "groups.superadmin || permissions.api.users.get",
        "tag": "button"
      }
    ]
  }
}
```

The response of the following request

```shell
curl 'https://*********/middleware/config.json' \
  -H 'user-groups: user' \
  -H 'user-properties: { "permissions": "api.users.get" }'
```

will be

```json
{
  "content": {
    "tag": "div",
    "content": [
      {
        "tag": "button"
      }
    ]
  }
}
```

#### References resolution

In order to avoid writing repeating values multiple times in your configurations, Middleware supports references resolutions
following [JSON schema specification](https://json-schema.org/understanding-json-schema/structuring.html#ref). In
particular, if you need to repeat the same value in various places of your configuration, you can **define it once** in
the dedicated top-level key `definitions`, and then **references it** wherever you like using the keyword `$ref` (e.g.,
`{ "dataSchema": { "$ref": "#/definitions/dataSchema" }}`).

Middleware will resolve references in files and will remove the key `definitions` (if any) before serving them. Keep in mind
that Middleware **will throw** if some references cannot be resolved.

##### Example

Let's consider the following configuration file served under `GET - /middleware/config.json`.

```json
{
  "definitions": {
    "clientKey": "some-client-key"
  },
  "content": {
    "tag": "div",
    "properties": {
      "clientKey": {
        // highlight-next-line
        "$ref": "#/definitions/clientKey"
      }
    },
    "content": [
      {
        "tag": "button",
        "properties": {
          "clientKey": {
            // highlight-next-line
            "$ref": "#/definitions/clientKey"
          }
        }
      }
    ]
  }
}
```

The response of the following request

```shell
curl 'https://*********/middleware/config.json'
```

will be

```json
{
  "definitions": {
    "clientKey": "some-client-key"
  },
  "content": {
    "tag": "div",
    "properties": {
      // highlight-next-line
      "clientKey": "some-client-key"
    },
    "content": [
      {
        "tag": "button",
        "properties": {
          // highlight-next-line
          "clientKey": "some-client-key"
        }
      }
    ]
  }
}
```

## SDK

The logic under [ACL application](#acl-application) and [references resolution](#references-resolution) is conveniently
shipped in a standalone SDK to ease the implementation of alternative backend solutions.

### Usage

You can install the SDK from NPM

```mdx-code-block
<Tabs groupId="pkg-manager">
<TabItem value="npm" label="npm" default>
```
```shell
npm install @micro-lc/middleware/sdk
```
```mdx-code-block
</TabItem>
<TabItem value="yarn" label="yarn">
```
```shell
yarn add @micro-lc/middleware/sdk
```
```mdx-code-block
</TabItem>
</Tabs>
```

and import it in your files

```mdx-code-block
<Tabs groupId="module">
<TabItem value="common-js" label="CommonJS" default>
```
```javascript
const middlewareSdk = require('@micro-lc/middleware/sdk')
```
```mdx-code-block
</TabItem>
<TabItem value="modules" label="ECMAScript modules">
```
```javascript
import * as middlewareSdk from '@micro-lc/middleware/sdk'
```
```mdx-code-block
</TabItem>
</Tabs>
```

### Methods

#### `evaluateAcl(json, userGroups, userPermissions)`

```javascript
const result = resolveReferences(json, userGroups, userPermissions)
```

This method [evaluates](#acl-application) `aclExpression` keys in input JSON. It does not modify the input object.

**Parameters**

* `json: string | number | boolean | object | unknown[] | null`
  <br/>
  Input JSON with ACL rules to be evaluated.
* `userGroups: string[]`
  <br/>
  List of caller's groups.
* `userPermissions: string[]`
  <br/>
  List of caller's permissions.

**Return value**

* `Promise<string | number | boolean | object | unknown[] | null>`
  <br/>
  JSON with ACL rules evaluated.

#### `resolveReferences(json)`

```javascript
const result = await resolveReferences(json)
```

This method [resolves](#references-resolution) the references in a JSON object. It does not modify the input object.

The method **throws** if a reference cannot be found.

**Parameters**

* `json: string | number | boolean | object | unknown[] | null`
<br/>
Input JSON with references to be resolved.

**Return value**

* `Promise<string | number | boolean | object | unknown[] | null>`
<br/>
JSON with references resolved.
