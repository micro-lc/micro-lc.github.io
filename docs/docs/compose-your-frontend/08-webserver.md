---
title: 'Step 8: Webserver'
description: tutorial step to feed sources to micro-lc via backend
sidebar_label: 'Step 8: Webserver'
sidebar_position: 60
---

So far we've been up to the task without using any backend or webserver services.

Parcel applications rarely come in the form of a data protocol uri and their static might be
available on your backend somewhere.

If you'd like to serve your custom sources for applications and webcomponent libraries, integrate
with APIs, authentication, or backend services, frontend is not enough.

Let's briefly touch here on how you could get started configuring your frontend, orchestrated
with <micro-lc></micro-lc> and integrated with a reverse proxy.

To serve <micro-lc></micro-lc> we can use [middleware](../../add-ons/backend/middleware.md) which is a
simple webserver that parses configurations and helps configuring advanced features like Content-Security-Policy
headers or preload links.

Let's add a service to a new `docker compose` configuration.

First we need some environment variables. Create a new folder, move into it and create an `.env` file:

<!--- cspell:disable -->

```env title=.env
LOG_LEVEL=debug
HTTP_PORT=3000
MICROSERVICE_GATEWAY_SERVICE_NAME=microservice-gateway
USERID_HEADER_KEY=miauserid
GROUPS_HEADER_KEY=miausergroups
CLIENTTYPE_HEADER_KEY=client-type
BACKOFFICE_HEADER_KEY=isbackoffice
USER_PROPERTIES_HEADER_KEY=miauserproperties
```

<!--- cspell:enable -->

Then let's write down the entry point for our frontend in an `index.html` file in the same folder:

```html title=index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>micro-lc :: Tutorial</title>
  <link rel="icon" href="https://avatars.githubusercontent.com/u/92730708?s=200&v=4" />
  <link href="/assets/style.css" rel="stylesheet" />

  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/micro-lc.production.js"></script>
</head>
<body>
  <mlc-loading-animation primary-color="#cd1c8c">
    <micro-lc config-src="/configurations/config.json"></micro-lc>
  </mlc-loading-animation>
</body>
</html>
```

and then the latest config we wrote at step 7 can be copy/pasted in a `config.json` file in the same folder:

```json title=config.json
{
  "version": 2,
  "applications": {
    "home": ...,
    ...
  },
  ...
}
```

Middleware has a public directory for serving static files at `/usr/static/public/`
and a special folder `/usr/static/configurations/` to serve JSON files. Let's mount
these files on a `docker-compose.yml` file in the same folder:

```yaml title=docker-compose.yml
version: '3'

services:
  micro-lc:
    image: microlc/middleware
    env_file:
      - .env
    ports:
      - 3000:3000
    networks:
      - internal
    volumes:
      - ./index.html:/usr/static/public/index.html
      - ./style.css:/usr/static/public/assets/style.css
      - ./config.json:/usr/static/configurations/config.json

networks:
  internal:
```

Let's momentarely expose the `3000` port for testing and fire up `docker` via:

```shell
docker compose up -d
```

Now reaching your [localhost:3000](http://localhost:3000/public/) you should
notice 2 weird things:

1. <micro-lc></micro-lc> auto pushed the URL to `/`
2. there's no `/assets/style.css` (indeed is under `/public/assets/style.css`)

## Reverse Proxying

We need to reverse proxy our frontend. Let's use `nginx`. We can
create a minimal config file which reverses `/public/` over `/`

```nginx title=nginx.conf
worker_processes 1;

events {
  worker_connections 2048;
}

http {
  server {
    location /configurations {
      proxy_pass                      http://micro-lc:3000;
    }

    location / {
      rewrite                         ^/?(.*) /public/$1 break;
      proxy_pass                      http://micro-lc:3000;
    }
  }
}
```

and then we can create another service

```yaml title=docker-compose.yml
version: '3'

services:
  micro-lc:
    # .... middleware setup

  reverse-proxy:
    image: nginx
    ports:
      - 80:80
    networks:
      - internal
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf

networks:
  internal:
```

Notice you could remove the `ports` directive on the `micro-lc` service. Again run

```shell
docker compose up -d
```

to apply changes.

Now reaching [localhost](http://localhost) should
provide <micro-lc></micro-lc> on the `/` Url. Moreover the CSS has been correctly
downloaded.

Let's use the menu to navigate to the `Browser` application. On entry the Url changes to `/browser/`. This should break our frontend the next time we force refresh with `F5`, or `Ctrl+R`, or on Mac `Cmd+R`, but it does not. <micro-lc></micro-lc> is still effectively
loaded on `/browser/` despite nothing is there on the `middleware` instance. This is due to the rewrite rule on `/`:

1. Anything starting `/` (not matching `/configurations`) is prepended with `/public/`.
2. Then on the `middleware` service a file onto `/public/browser/` cannot be found.
3. Then a file on `/public/browser/index.html` cannot be found.
4. Finally `middleware` returns `/public/index.html`, which is <micro-lc></micro-lc> entry point.

## Integrating With An API

Now let's add a basic API on `GET /api/`. We could employ a
[rest API packed in a docker container](https://github.com/thomaspoignant/hello-world-rest-json)

```yaml title=docker-compose.yml
version: '3'

services:
  micro-lc:
    # .... middleware setup

  reverse-proxy:
    # .... nginx setup
  
  api:
    image: thomaspoignant/hello-world-rest-json
    networks:
      - internal

networks:
  internal:
```

and again reverse it on localhost

```nginx title=nginx.conf
# rest of the config

http {
  server {
    location /api {
      rewrite                         ^/api/?(.*) /$1 break;
      proxy_pass                      http://api:8080;
    }

    # .... rest of the config
  }
}
```

Run

```shell
docker compose up -d
```

to apply changes and test via `curl`

```shell
curl localhost/api # should reply {"message":"HelloWorld"}
```

Let's create a client for this API as webcomponent

```javascript title=client.js
customElements.define(
  'hello-world-client',
  class extends HTMLElement {
    connectedCallback() {
      Object.assign(this.style, {
        width: 'inherit',
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      })

      const div = window.document.createElement('div')
      Object.assign(div.style, {
        textAlign: 'center'
      })
      this.appendChild(div)

      fetch('/api/')
        .then((res) => res.ok ? res : Promise.reject('Oops! Something went wrong'))
        .then((res) => res.json())
        .then(({message}) => {div.textContent = message})
    }
  }
)
```

This time we can serve it without the data protocol uri trick. Let's just
add this file to the `middleware` volumes

```yaml title=docker-compose.yml
version: '3'

services:
  micro-lc:
    image: microlc/middleware
    env_file:
      - .env
    networks:
      - internal
    volumes:
      - ./index.html:/usr/static/public/index.html
      - ./style.css:/usr/static/public/assets/style.css
      - ./config.json:/usr/static/configurations/config.json
      - ./client.js:/usr/static/public/assets/client.js # 👈 here

  reverse-proxy:
    # .... nginx setup

  api:
    # .... api setup

networks:
  internal:
```

before to restart the environment let's add a new compose application in the
`config.json` file

```json title=config.json
{
  "version": 2,
  "applications": {
    ...,
    "hello": {
      "integrationMode": "compose",
      "route": "/hello",
      "config": {
        "sources": [
          "/assets/client.js"
        ],
        "content": {
          "tag": "hello-world-client"
        }
      }
    }
  },
  "layout": {
    ...
  }
}
```

and an entry in the menu

```json title=config.json
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
          ...,
          {
            "icon": {
              "library": "@fortawesome/free-solid-svg-icons",
              "selector": "faHandPeace"
            },
            "id": "hello",
            "label": "Hello",
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

Run

```shell
docker compose up -d
```

to update the service and refresh the browser tab.

That's all folks. For now! 👍
