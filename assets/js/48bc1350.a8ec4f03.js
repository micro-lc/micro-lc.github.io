"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7365],{86126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=t(74866),o=t(85162),s=(t(60614),["components"]),p={title:"\ud83d\udee0 Middleware",description:"Configurations service station",sidebar_label:"\ud83d\udee0 Middleware",sidebar_position:10},d=void 0,m={unversionedId:"add-ons/backend/middleware",id:"add-ons/backend/middleware",title:"\ud83d\udee0 Middleware",description:"Configurations service station",source:"@site/docs/add-ons/backend/middleware.md",sourceDirName:"add-ons/backend",slug:"/add-ons/backend/middleware",permalink:"/add-ons/backend/middleware",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/add-ons/backend/middleware.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:10,frontMatter:{title:"\ud83d\udee0 Middleware",description:"Configurations service station",sidebar_label:"\ud83d\udee0 Middleware",sidebar_position:10},sidebar:"add-ons",previous:{title:"Backend solutions",permalink:"/add-ons/backend/"}},c={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Usage",id:"usage",level:2},{value:"Environment variables",id:"environment-variables",level:3},{value:"Service configuration",id:"service-configuration",level:2},{value:"Content Type",id:"content-type",level:3},{value:"Headers",id:"headers",level:3},{value:"Serving from file system",id:"serving-from-file-system",level:2},{value:"Static files manipulation",id:"static-files-manipulation",level:3},{value:"Nonce injection",id:"nonce-injection",level:4},{value:"Configuration files manipulation",id:"configuration-files-manipulation",level:3},{value:"ACL application",id:"acl-application",level:4},{value:"Example",id:"example",level:5},{value:"References resolution",id:"references-resolution",level:4},{value:"Example",id:"example-1",level:5},{value:"SDK",id:"sdk",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Methods",id:"methods",level:3},{value:"<code>evaluateAcl(json, userGroups, userPermissions)</code>",id:"evaluateacljson-usergroups-userpermissions",level:4},{value:"<code>resolveReferences(json)</code>",id:"resolvereferencesjson",level:4}],k={toc:u},g="wrapper";function h(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)(g,(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The following documentation refers to ",(0,r.kt)("strong",{parentName:"p"},"version 3.x.x")," of the service.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Middleware")," is a backend service responsible for ",(0,r.kt)("a",{parentName:"p",href:"#serving-from-file-system"},"serving")," ",(0,r.kt)("micro-lc",null)," static and\nconfiguration files, while applying some useful manipulation logic before returning their content. This logic is also\ndistributed through an ",(0,r.kt)("a",{parentName:"p",href:"#sdk"},"SDK")," to ease the process of building custom configurations servers."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"An easy way to deploy locally Middleware is using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," to spin up a full-stack\napplication which serves ",(0,r.kt)("micro-lc",null)," through a ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"reverse proxy"),"."),(0,r.kt)("p",null,"To set thing up just copy the following files, all in the same directory taking care to keep the same naming you see\nbelow."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Middleware application setup"),(0,r.kt)("div",null,(0,r.kt)(l.Z,{groupId:"files",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"0",label:"docker-compose.yml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3'\n\nservices:\n  reverse-proxy:\n    depends_on:\n      middleware:\n        condition: service_started\n    image: nginx:${NGINX_VERSION:-1.24.0}-alpine\n    networks:\n      - internal\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf\n    ports:\n      - 8080:8080\n  \n  middleware:\n    image: microlc/middleware:${MIDDLEWARE_VERSION:-latest}\n    environment:\n      - LOG_LEVEL=debug\n      - HTTP_PORT=3000\n      - MICROSERVICE_GATEWAY_SERVICE_NAME=microservice-gateway\n      - USERID_HEADER_KEY=miauserid\n      - GROUPS_HEADER_KEY=miausergroups\n      - CLIENTTYPE_HEADER_KEY=client-type\n      - BACKOFFICE_HEADER_KEY=isbackoffice\n      - USER_PROPERTIES_HEADER_KEY=miauserproperties\n    volumes:\n      - ./index.html:/usr/static/public/index.html\n      - ./config.json:/usr/static/configurations/config.json\n    networks:\n      - internal\n\nnetworks:\n  internal:\n"))),(0,r.kt)(o.Z,{value:"2",label:"index.html",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <base href="/" target="_blank" />\n\n  <title>micro-lc</title>\n\n  <link rel="icon" type="image/png" href="https://www.micro-lc.io/img/favicon.png" />\n  \n  <style>\n    html,\n    body {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n    }\n  </style>\n\n  <script type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-loading-animation.js"><\/script>\n  <script type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"><\/script>\n</head>\n\n<body>\n  <bk-loading-animation primary-color="#1890ff">\n    <micro-lc config-src="/configurations/config.json"></micro-lc>\n  </bk-loading-animation>\n</body>\n\n</html>\n\n'))),(0,r.kt)(o.Z,{value:"3",label:"config.json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 2,\n  "applications": {\n    "home": {\n      "integrationMode": "iframe",\n      "src": "https://example.com",\n      "route": "./"\n    }\n  }\n}\n\n'))),(0,r.kt)(o.Z,{value:"4",label:"nginx.conf",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"worker_processes                1;\n\nerror_log                       /var/log/nginx/error.log warn;\npid                             /tmp/nginx.pid;\nworker_rlimit_nofile            8192;\n\nevents {\n  worker_connections            1024;\n}\n\nhttp {\n  include                       /etc/nginx/mime.types;\n  index                         index.html;\n\n  server {\n    listen                      8080;\n    \n    location /configurations {\n      proxy_pass                http://middleware:3000;\n    }\n\n    location / {\n      proxy_pass                http://middleware:3000;\n      rewrite                   /(.*) /public/$1 break;\n    }\n  }\n}\n")))))),(0,r.kt)("p",null,"Now run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up -d")," inside the directory, and you will have ",(0,r.kt)("micro-lc",null)," hosted on\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080/"),". To drop the environment, run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose down")," in the same directory."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Middleware is available as a Docker image on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/microlc/middleware"},"Dockerhub"),"."),(0,r.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"Middleware it built using Mia-Platform's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/custom-plugin-lib"},"custom-plugin-lib"),", hence it\nneeds the environment variables outlined in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/custom-plugin-lib#environment-variables-configuration"},"library documentation"),"."),(0,r.kt)("p",null,"On top of those, Middleware accepts the following environment variables:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"PUBLIC_DIRECTORY_PATH")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"/usr/static/configurations")),(0,r.kt)("td",{parentName:"tr",align:null},"Absolute path of the ",(0,r.kt)("a",{parentName:"td",href:"#serving-from-file-system"},"directory")," containing static files to be served")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"RESOURCES_DIRECTORY_PATH")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"/usr/static/public")),(0,r.kt)("td",{parentName:"tr",align:null},"Absolute path of the ",(0,r.kt)("a",{parentName:"td",href:"#serving-from-file-system"},"directory")," containing configuration resources to be served")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"SERVICE_CONFIG_PATH")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"/usr/src/app/config/config.json")),(0,r.kt)("td",{parentName:"tr",align:null},"Absolute path of the ",(0,r.kt)("a",{parentName:"td",href:"#service-configuration"},"service configuration")," file")))),(0,r.kt)("h2",{id:"service-configuration"},"Service configuration"),(0,r.kt)("p",null,"The service accepts a JSON configuration file containing information on the ",(0,r.kt)("a",{parentName:"p",href:"#content-type"},"content types"),"\nand on the ",(0,r.kt)("a",{parentName:"p",href:"#headers"},"headers")," to apply to file responses."),(0,r.kt)("p",null,"The service will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICE_CONFIG_PATH")," ",(0,r.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable")," to locate the configuration\nfile, which should contain an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Config {\n  contentTypeMap?: Record<string, string | string[]>\n  publicHeadersMap?: Record<string, Record<string, string | (string | string[])[]>>\n}\n")),(0,r.kt)("h3",{id:"content-type"},"Content Type"),(0,r.kt)("p",null,"By default, Middleware returns a file with the following content types (depending on the file extension)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Extension"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Content-Type header"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".cjs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"application/javascript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".css"),(0,r.kt)("td",{parentName:"tr",align:"center"},"text/css")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".html"),(0,r.kt)("td",{parentName:"tr",align:"center"},"text/html")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".js"),(0,r.kt)("td",{parentName:"tr",align:"center"},"application/javascript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".json"),(0,r.kt)("td",{parentName:"tr",align:"center"},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".mjs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"application/javascript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".yaml"),(0,r.kt)("td",{parentName:"tr",align:"center"},"text/yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".yml"),(0,r.kt)("td",{parentName:"tr",align:"center"},"text/yam")))),(0,r.kt)("p",null,"Any extension not listed will trigger a default ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"text/plain"),"."),(0,r.kt)("p",null,"These settings can be overridden using with the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentTypeMap")," property of the service configuration, which should be\na map linking extensions to Content-Type header signatures. Keys must be either a single extension or a comma separated\nlist of extensions while values must be strings or array of strings which will be joint with a semicolon as separator."),(0,r.kt)("p",null,"For example, the following ",(0,r.kt)("inlineCode",{parentName:"p"},"contentTypeMap")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ".mjs,.js": ["text/javascript", "charset=utf8"],\n  ".xml": "application/xml"\n}\n')),(0,r.kt)("p",null,"which will force Middleware to return on ",(0,r.kt)("inlineCode",{parentName:"p"},".mjs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," the equivalent ",(0,r.kt)("inlineCode",{parentName:"p"},"text/javascript; charset=utf8")," Content-Type header and\n",(0,r.kt)("inlineCode",{parentName:"p"},"application/xml")," on XML files."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Any extension listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTENT_TYPE_MAP")," will override its previous default value allowing even to change\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," for JSON and YAML files which might create problems on ",(0,r.kt)("micro-lc",null)," web component configuration dump.")),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"publicHeadersMap")," property of the configuration allows you to specify additional headers to include in\n",(0,r.kt)("a",{parentName:"p",href:"#serving-from-file-system"},"static files")," responses (i.e., files exposed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/public"),")."),(0,r.kt)("p",null,"The property should be a map linking file pathnames to headers definitions. Keys must be valid pathname strings\n(e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/index.html"),"), while values must be maps linking ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"},"HTTP header"),"\nnames to valid values. Values can be directly a ",(0,r.kt)("em",{parentName:"p"},"string"),", an ",(0,r.kt)("em",{parentName:"p"},"array of string")," (which will be joined with a comma), or\nan ",(0,r.kt)("em",{parentName:"p"},"array of arrays of string")," (which will be joined with a semicolon at inner lever and with a comma at external level)."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," headers specified here will win over the ones defined in\n",(0,r.kt)("a",{parentName:"p",href:"#content-type"},(0,r.kt)("inlineCode",{parentName:"a"},"contentTypeMap"))," configuration.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Middleware applies ",(0,r.kt)("a",{parentName:"p",href:"#nonce-injection"},"nonce injection")," on additional headers.")),(0,r.kt)("p",null,"For example, the following ",(0,r.kt)("inlineCode",{parentName:"p"},"publicHeadersMap")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "/public/index.html": {\n    "content-security-policy": [\n      [\n        "script-src \'nonce-**CSP_NONCE**\'",\n        "style-src \'self\'"\n      ]\n    ],\n    "link": "</micro-lc-configurations/config.json>; rel=preload; as=fetch"\n  }\n}\n')),(0,r.kt)("p",null,"causes a request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/index.html")," to have the following headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"content-security-policy: script-src 'nonce-KMxEW8oQKCm12+XocTYib9u6++'; style-src 'self'\nlink: </micro-lc-configurations/config.json>; rel=preload; as=fetch\n")),(0,r.kt)("h2",{id:"serving-from-file-system"},"Serving from file system"),(0,r.kt)("p",null,"Configuration files and regular files served by Middleware are loaded from file system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Static files")," are sourced from the directory specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC_DIRECTORY_PATH"),"\n",(0,r.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable")," and are exposed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/public")," prefix. ",(0,r.kt)("strong",{parentName:"p"},"Configuration files")," are\nsearched in the directory specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RESOURCES_DIRECTORY_PATH")," ",(0,r.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable"),"\nand are exposed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/configurations")," prefix."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"/public"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/")," or a non-existing file under public (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/unknown-file.js"),") will result in\nMiddleware responding with the root ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file, if existing.")),(0,r.kt)("p",null,"For example, given a file system with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 public\n|   \u2514\u2500\u2500 index.html\n|   \u2514\u2500\u2500 assets\n|       \u2514\u2500\u2500 style.css\n|\n\u251c\u2500\u2500 configurations\n    \u2514\u2500\u2500 config.json\n    \u2514\u2500\u2500 lib\n        \u2514\u2500\u2500 index.js\n")),(0,r.kt)("p",null,"Middleware will expose the following routes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"GET - /public (redirecting to /public/index.html)\nGET - /public/ (redirecting to /public/index.html)\nGET - /public/index.html\nGET - /public/assets/style.css\n\nGET - /configurations/config.json\nGET - /configurations/lib/index.js\n")),(0,r.kt)("h3",{id:"static-files-manipulation"},"Static files manipulation"),(0,r.kt)("p",null,"If a required ",(0,r.kt)("strong",{parentName:"p"},"static")," file is an HTML resource (i.e., a file exposed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/public")," ending with ",(0,r.kt)("inlineCode",{parentName:"p"},".html"),"), before\nreturning the file, Middleware applies some parsing logics to its content."),(0,r.kt)("h4",{id:"nonce-injection"},"Nonce injection"),(0,r.kt)("p",null,"Middleware allows you to inject a server-generated ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce"},"nonce"),"\nin HTML files. In particular, it will find any occurrence of the of the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"**CSP_NONCE**")," and replace it with\nthe actual value."),(0,r.kt)("p",null,"For example, the following HTML file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <link \n    rel="stylesheet"\n    nonce="**CSP_NONCE**"\n    href="./assets/style.css" />\n</head>\n\n</html>\n')),(0,r.kt)("p",null,"will be serve as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <link \n    rel="stylesheet"\n    nonce="KMxEW8oQKCm12+XocTYib9u6++"\n    href="./assets/style.css" />\n</head>\n\n</html>\n')),(0,r.kt)("h3",{id:"configuration-files-manipulation"},"Configuration files manipulation"),(0,r.kt)("p",null,"If a required ",(0,r.kt)("strong",{parentName:"p"},"configuration")," file is a JSON or YAML resource (i.e., a file exposed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/configurations")," ending with\n",(0,r.kt)("inlineCode",{parentName:"p"},".json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".yaml")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".yml"),"), before returning the file, Middleware applies some parsing logics to its content."),(0,r.kt)("h4",{id:"acl-application"},"ACL application"),(0,r.kt)("p",null,"Middleware allows you to implement ",(0,r.kt)("strong",{parentName:"p"},"access control limit")," on served files, removing sections of configurations based on\ncertain properties of the caller. Namely, Middleware considers caller's ",(0,r.kt)("strong",{parentName:"p"},"groups")," and ",(0,r.kt)("strong",{parentName:"p"},"permissions"),"."),(0,r.kt)("p",null,"Caller's ",(0,r.kt)("strong",{parentName:"p"},"groups")," are extracted from request headers, particularly from the header the key of which is specified through\n",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPS_HEADER_KEY")," ",(0,r.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable"),". The value of the header should be a comma-separated\nlist of groups (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"admin,user"'),")."),(0,r.kt)("p",null,"Caller's ",(0,r.kt)("strong",{parentName:"p"},"permissions")," are extracted from request headers too. Middleware takes the header the key of which is specified\nthrough ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_PROPERTIES_HEADER_KEY")," ",(0,r.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable")," and expects a stringified JSON\nobject containing a comma-separated list of permissions under the key ",(0,r.kt)("inlineCode",{parentName:"p"},"permissions")," (e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},'"{\\"permissions\\":"api.users.get,api.users.post"}"'),")."),(0,r.kt)("p",null,"ACL expressions can be specified anywhere in configuration using the special key ",(0,r.kt)("inlineCode",{parentName:"p"},"aclExpression")," having as value a\n",(0,r.kt)("strong",{parentName:"p"},"stringified boolean expression")," based on caller's groups and permissions (e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"groups.admin || permissions.api.users.get"),")."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use any combination of groups, permissions and JavaScript operators in you ACL expressions."),(0,r.kt)("p",{parentName:"admonition"},"For example, the following expressions are all valid:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"groups.admin && permissions.api.users.get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!groups.developer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"permissions.api.users.get || permissions.api.users.post")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(groups.admin && !permissions.api.users.post) || permissions.api.users.count.get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(groups.admin === true && permissions.api.users.post === true)")))),(0,r.kt)("p",null,"Middleware evaluates each ACL expression against caller's properties and, if the expression results in a ",(0,r.kt)("inlineCode",{parentName:"p"},"falsy value"),", it\nremoves from the configuration the ",(0,r.kt)("strong",{parentName:"p"},"whole object")," which the expression is a property of. It then proceeds to remove\nany ",(0,r.kt)("inlineCode",{parentName:"p"},"aclExpression")," key left over to not leak server-side logic into the client."),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's consider the following configuration file served under ",(0,r.kt)("inlineCode",{parentName:"p"},"GET - /middleware/config.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "tag": "div",\n    "properties": {\n      // highlight-next-line\n      "aclExpression": "groups.admin",\n      "adminName": "John Doe"\n    },\n    "content": [\n      {\n        // highlight-next-line\n        "aclExpression": "groups.superadmin || permissions.api.users.get",\n        "tag": "button"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"The response of the following request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'https://*********/middleware/config.json' \\\n  -H 'user-groups: user' \\\n  -H 'user-properties: { \"permissions\": \"api.users.get\" }'\n")),(0,r.kt)("p",null,"will be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "tag": "div",\n    "content": [\n      {\n        "tag": "button"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"references-resolution"},"References resolution"),(0,r.kt)("p",null,"In order to avoid writing repeating values multiple times in your configurations, Middleware supports references resolutions\nfollowing ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/structuring.html#ref"},"JSON schema specification"),". In\nparticular, if you need to repeat the same value in various places of your configuration, you can ",(0,r.kt)("strong",{parentName:"p"},"define it once")," in\nthe dedicated top-level key ",(0,r.kt)("inlineCode",{parentName:"p"},"definitions"),", and then ",(0,r.kt)("strong",{parentName:"p"},"references it")," wherever you like using the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," (e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},'{ "dataSchema": { "$ref": "#/definitions/dataSchema" }}'),")."),(0,r.kt)("p",null,"Middleware will resolve references in files and will remove the key ",(0,r.kt)("inlineCode",{parentName:"p"},"definitions")," (if any) before serving them. Keep in mind\nthat Middleware ",(0,r.kt)("strong",{parentName:"p"},"will throw")," if some references cannot be resolved."),(0,r.kt)("h5",{id:"example-1"},"Example"),(0,r.kt)("p",null,"Let's consider the following configuration file served under ",(0,r.kt)("inlineCode",{parentName:"p"},"GET - /middleware/config.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "definitions": {\n    "clientKey": "some-client-key"\n  },\n  "content": {\n    "tag": "div",\n    "properties": {\n      "clientKey": {\n        // highlight-next-line\n        "$ref": "#/definitions/clientKey"\n      }\n    },\n    "content": [\n      {\n        "tag": "button",\n        "properties": {\n          "clientKey": {\n            // highlight-next-line\n            "$ref": "#/definitions/clientKey"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"The response of the following request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'https://*********/middleware/config.json'\n")),(0,r.kt)("p",null,"will be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "definitions": {\n    "clientKey": "some-client-key"\n  },\n  "content": {\n    "tag": "div",\n    "properties": {\n      // highlight-next-line\n      "clientKey": "some-client-key"\n    },\n    "content": [\n      {\n        "tag": "button",\n        "properties": {\n          // highlight-next-line\n          "clientKey": "some-client-key"\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"sdk"},"SDK"),(0,r.kt)("p",null,"The logic under ",(0,r.kt)("a",{parentName:"p",href:"#acl-application"},"ACL application")," and ",(0,r.kt)("a",{parentName:"p",href:"#references-resolution"},"references resolution")," is conveniently\nshipped in a standalone SDK to ease the implementation of alternative backend solutions."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"You can install the SDK from NPM"),(0,r.kt)(l.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @micro-lc/middleware\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @micro-lc/middleware\n")))),(0,r.kt)("p",null,"and import it in your files"),(0,r.kt)(l.Z,{groupId:"module",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"common-js",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const middlewareSdk = require('@micro-lc/middleware/sdk')\n"))),(0,r.kt)(o.Z,{value:"modules",label:"ECMAScript modules",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as middlewareSdk from '@micro-lc/middleware/sdk'\n")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"evaluateacljson-usergroups-userpermissions"},(0,r.kt)("inlineCode",{parentName:"h4"},"evaluateAcl(json, userGroups, userPermissions)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = resolveReferences(json, userGroups, userPermissions)\n")),(0,r.kt)("p",null,"This method ",(0,r.kt)("a",{parentName:"p",href:"#acl-application"},"evaluates")," ",(0,r.kt)("inlineCode",{parentName:"p"},"aclExpression")," keys in input JSON. It does not modify the input object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json: string | number | boolean | object | unknown[] | null"),(0,r.kt)("br",null),"Input JSON with ACL rules to be evaluated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userGroups: string[]"),(0,r.kt)("br",null),"List of caller's groups."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userPermissions: string[]"),(0,r.kt)("br",null),"List of caller's permissions.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise<string | number | boolean | object | unknown[] | null>"),(0,r.kt)("br",null),"JSON with ACL rules evaluated.")),(0,r.kt)("h4",{id:"resolvereferencesjson"},(0,r.kt)("inlineCode",{parentName:"h4"},"resolveReferences(json)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await resolveReferences(json)\n")),(0,r.kt)("p",null,"This method ",(0,r.kt)("a",{parentName:"p",href:"#references-resolution"},"resolves")," the references in a JSON object. It does not modify the input object."),(0,r.kt)("p",null,"The method ",(0,r.kt)("strong",{parentName:"p"},"throws")," if a reference cannot be found."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json: string | number | boolean | object | unknown[] | null"),(0,r.kt)("br",null),"Input JSON with references to be resolved.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise<string | number | boolean | object | unknown[] | null>"),(0,r.kt)("br",null),"JSON with references resolved.")))}h.isMDXComponent=!0}}]);