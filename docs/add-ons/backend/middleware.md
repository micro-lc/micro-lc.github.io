---
title: 🛠 Middleware
description: Configurations service station
sidebar_label: 🛠 Middleware
sidebar_position: 10
---

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import CodeBlock from '@theme-original/CodeBlock'
```

:::caution
The following documentation refers to **version 3.x.x** of the service.
:::

**Middleware** is a backend service responsible for [serving](#serving-from-file-system) <micro-lc></micro-lc> static and
configuration files, while applying some useful manipulation logic before returning their content. This logic is also
distributed through an [SDK](#sdk) to ease the process of building custom configurations servers.

## Getting started

An easy way to deploy locally Middleware is using [Docker Compose](https://docs.docker.com/compose/) to spin up a full-stack
application which serves <micro-lc></micro-lc> through a [reverse proxy](https://www.nginx.com/).

To set thing up just copy the following files, all in the same directory taking care to keep the same naming you see
below.

<!--- cspell:disable -->
```mdx-code-block
<details>
<summary>Middleware application setup</summary>
<div>
<Tabs groupId="files">
<TabItem value="0" label="docker-compose.yml" default>
```
```yml
version: '3'

services:
  reverse-proxy:
    depends_on:
      middleware:
        condition: service_started
    image: nginx:${NGINX_VERSION:-1.24.0}-alpine
    networks:
      - internal
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    ports:
      - 8080:8080
  
  middleware:
    image: microlc/middleware:${MIDDLEWARE_VERSION:-latest}
    environment:
      - LOG_LEVEL=debug
      - HTTP_PORT=3000
      - MICROSERVICE_GATEWAY_SERVICE_NAME=microservice-gateway
      - USERID_HEADER_KEY=miauserid
      - GROUPS_HEADER_KEY=miausergroups
      - CLIENTTYPE_HEADER_KEY=client-type
      - BACKOFFICE_HEADER_KEY=isbackoffice
      - USER_PROPERTIES_HEADER_KEY=miauserproperties
    volumes:
      - ./index.html:/usr/static/public/index.html
      - ./config.json:/usr/static/configurations/config.json
    networks:
      - internal

networks:
  internal:
```
```mdx-code-block
</TabItem>
<TabItem value="2" label="index.html">
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <base href="/" target="_blank" />

  <title>micro-lc</title>

  <link rel="icon" type="image/png" href="https://www.micro-lc.io/img/favicon.png" />
  
  <style>
    html,
    body {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
  </style>

  <script type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-loading-animation.js"></script>
  <script type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"></script>
</head>

<body>
  <bk-loading-animation primary-color="#1890ff">
    <micro-lc config-src="/configurations/config.json"></micro-lc>
  </bk-loading-animation>
</body>

</html>

```
```mdx-code-block
</TabItem>
<TabItem value="3" label="config.json">
```
```json
{
  "version": 2,
  "applications": {
    "home": {
      "integrationMode": "iframe",
      "src": "https://example.com",
      "route": "./"
    }
  }
}

```
```mdx-code-block
</TabItem>
<TabItem value="4" label="nginx.conf">
```
```nginx
worker_processes                1;

error_log                       /var/log/nginx/error.log warn;
pid                             /tmp/nginx.pid;
worker_rlimit_nofile            8192;

events {
  worker_connections            1024;
}

http {
  include                       /etc/nginx/mime.types;
  index                         index.html;

  server {
    listen                      8080;
    
    location /configurations {
      proxy_pass                http://middleware:3000;
    }

    location / {
      proxy_pass                http://middleware:3000;
      rewrite                   /(.*) /public/$1 break;
    }
  }
}
```
```mdx-code-block
</TabItem>
</Tabs>
</div>
</details>
```
<!--- cspell:enable -->

Now run `docker compose up -d` inside the directory, and you will have <micro-lc></micro-lc> hosted on 
[http://localhost:8080/](http://localhost:8080). To drop the environment, run `docker compose down` in the same directory.


## Usage

Middleware is available as a Docker image on [Dockerhub](https://hub.docker.com/r/microlc/middleware).

### Environment variables

Middleware it built using Mia-Platform's [custom-plugin-lib](https://github.com/mia-platform/custom-plugin-lib), hence it
needs the environment variables outlined in the 
[library documentation](https://github.com/mia-platform/custom-plugin-lib#environment-variables-configuration).

On top of those, Middleware accepts the following environment variables:

|            Name            |   Type   |                    Default                   | Description                                                                                                 |
| :------------------------: | :------: | :------------------------------------------: | ----------------------------------------------------------------------------------------------------------- |
| `ACL_CONTEXT_BUILDER_PATH` | `string` | `/usr/src/app/config/acl-context-builder.js` | Absolute path of the [ACL context builder](#custom-extraction) file                                         |
| `LANGUAGES_DIRECTORY_PATH` | `string` |            `/usr/static/languages`           | Absolute path of the [directory](#language-translation) containing language files                           |
|  `PUBLIC_DIRECTORY_PATH`   | `string` |         `/usr/static/configurations`         | Absolute path of the [directory](#serving-from-file-system) containing static files to be served            |
| `RESOURCES_DIRECTORY_PATH` | `string` |             `/usr/static/public`             | Absolute path of the [directory](#serving-from-file-system) containing configuration resources to be served |
|   `SERVICE_CONFIG_PATH`    | `string` |       `/usr/src/app/config/config.json`      | Absolute path of the [service configuration](#service-configuration) file                                   |

## Service configuration

The service accepts a JSON configuration file containing information on the [content types](#content-type) 
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
certain properties of the caller. These properties can be extracted in a [default](#default-extraction) or a 
[custom](#custom-extraction) way.

ACL expressions can be specified anywhere in configuration using the special key `aclExpression` having as value a
**stringified boolean expression** based on caller's properties.

:::tip
You can use any combination of properties and JavaScript operators in you ACL expressions.

For example, the following expressions are all valid:
* `groups.admin && permissions.api.users.get`
* `!groups.developer`
* `api.users.get || api.users.post`
* `(admin && !permissions.api.users.post) || permissions.api.users.count.get`
* `(groups.admin === true && api.users.post === true)`
:::

Middleware evaluates each ACL expression against caller's properties and, if the expression results in a `falsy` value, it
removes from the configuration the **whole object** which the expression is a property of. It then proceeds to remove
any `aclExpression` key left over to not leak server-side logic into the client.

##### Default extraction

Middleware considers caller's **groups** and **permissions** as properties.

Caller's **groups** are extracted from request headers, particularly from the header the key of which is specified through
`GROUPS_HEADER_KEY` [environment variable](#environment-variables). The value of the header should be a comma-separated
list of groups (e.g., `"admin,user"`).

Caller's **permissions** are extracted from request headers too. Middleware takes the header the key of which is specified
through `USER_PROPERTIES_HEADER_KEY` [environment variable](#environment-variables) and expects a stringified JSON
object containing a comma-separated list of permissions under the key `permissions` (e.g.,
`"{\"permissions\":"api.users.get,api.users.post"}"`).

:::info
In this scenario groups and permissions are respectively placed within `groups` and `permissions` objects. Thus,
ACL expressions should be defined as `groups.<group-name>` and `permissions.<permissions-name>`.
:::

###### Example

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

##### Custom extraction

Middleware considers the result of a custom function as caller's **properties**.

Caller's **properties** are extracted by a user-defined custom function that Middleware reads from the path specified
through `ACL_CONTEXT_BUILDER_PATH` [environment variable](#environment-variables). The function must return an array of
strings and has only one input argument which is a JSON object with the following schema:

```json
{
  "headers": {
    "header-1": "value",
  },
  "method": "GET",
  "pathParams": {
    "*": "/file.json"
  },
  "queryParams": {
    "foo": "bar"
  },
  "url": "/configurations/file.json"
}
```

:::info
In this scenario properties are placed at root level. Thus, ACL expressions should be simply defined as `<property-name>`.
:::

:::caution
The user-defined custom function cannot access the default **global** object.
:::

###### Example

Let's consider the following configuration file served under `GET - /middleware/config.json`.

```json
{
  "content": {
    "tag": "div",
    "properties": {
      // highlight-next-line
      "aclExpression": "property-1",
      "adminName": "John Doe"
    },
    "content": [
      {
        // highlight-next-line
        "aclExpression": "prop.resource.get || api.users.get",
        "tag": "button"
      }
    ]
  }
}
```

Then let's consider the following custom ACL context builder.

```js
export default ({ headers, method, pathParams, queryParams, url }) => {
  const property = headers['my-custom-header']
  return [property]
}
```

The response of the following request

```shell
curl 'https://*********/middleware/config.json' \
  -H 'my-custom-header: prop.resource.get'
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

#### Language translation

Middleware implements a [Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) mechanism
in order to serve configuration files translated according to the most suitable language representation for the client.

In order to provide this feature, you have to add JSON language configuration files in the directory defined by the environment
variable `LANGUAGES_DIRECTORY_PATH`: one for each language you want to support. The name of these files should reflect the
language-tag format as formally defined in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) followed by the JSON
extension (e.g. `en-US.json`). The translation values defined in these language files are resolved by the 
[lodash get](https://lodash.com/docs/4.17.15#get) function.

##### Example

Let's consider the following configuration file:

```json
{
  "property": "value",
  "textProperty": "main.text"
}
```

language configuration files can adhere to one of the following structures and produce the same translated JSON:

```json title="en-US.json"
{
  "main.text": "translated!"
}
```

```json title="en-US.json"
{
  "main": {
    "text": "translated!"
  }
}
```

The resulting JSON is:

```json
{
  "property": "value",
  "textProperty": "translated!"
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
npm install @micro-lc/middleware
```
```mdx-code-block
</TabItem>
<TabItem value="yarn" label="yarn">
```
```shell
yarn add @micro-lc/middleware
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
