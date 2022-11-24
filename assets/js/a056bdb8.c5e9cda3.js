"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3688],{5858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(6428),r=n(8920),i=(n(6687),n(5858)),l=["components"],o={title:"Getting started",description:"Start using micro-lc",sidebar_label:"Getting started",sidebar_position:20},c=void 0,s={unversionedId:"docs/getting-started",id:"docs/getting-started",title:"Getting started",description:"Start using micro-lc",source:"@site/docs/docs/getting-started.md",sourceDirName:"docs",slug:"/docs/getting-started",permalink:"/documentation/docs/getting-started",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Edoardo Pessina",sidebarPosition:20,frontMatter:{title:"Getting started",description:"Start using micro-lc",sidebar_label:"Getting started",sidebar_position:20},sidebar:"docs",previous:{title:"Introduction",permalink:"/documentation/docs"},next:{title:"Concepts",permalink:"/documentation/docs/concepts/"}},p={},d=[{value:"Import from CDN",id:"import-from-cdn",level:2},{value:"Deploy Docker container",id:"deploy-docker-container",level:2},{value:"Web Page Index File",id:"web-page-index-file",level:3},{value:"Web Server",id:"web-server",level:3},{value:"Customization",id:"customization",level:3},{value:"Building from source",id:"building-from-source",level:2},{value:"Playground",id:"playground",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," is shipped as an ES module ",(0,i.kt)("a",{parentName:"p",href:"#import-from-cdn"},"CDN bundle")," and can be imported in any HTML page.\nMoreover, a ",(0,i.kt)("a",{parentName:"p",href:"#deploy-docker-container"},"dockerized webserver")," is available on Docker Hub."),(0,i.kt)("h2",{id:"import-from-cdn"},"Import from CDN"),(0,i.kt)("p",null,"Create a blank ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file and paste the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>micro-lc</title>\n  <link rel="icon" href="https://avatars.githubusercontent.com/u/92730708?s=200&v=4" />\n\n  \x3c!-- \ud83d\udc47 CDN link to download micro-lc --\x3e\n  <script async type="module" src="https://unpkg.com/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"><\/script>\n</head>\n<body>\n  \x3c!-- \ud83d\udc47 micro-lc tag with config reference --\x3e\n  <micro-lc config-src="./config.yaml"></micro-lc>\n</body>\n</html>\n')),(0,i.kt)("p",null,"Let's start with adjusting the page style. We recommend you add some style in the ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," of the Document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"html, body {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To enhance the security of your websites you can add ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"CSP rules"),"\neither on your web server response header (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://content-security-policy.com/examples/nginx/"},"nginx"),"), or as a\n",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," tag on the ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," of your Document:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<meta\n  http-equiv=\"Content-Security-Policy\"\n  content=\"\n    default-src 'self' https: http:;\n    script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data:;\n  \"\n/>\n"))),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," works even without a configuration file, however a 404 error page is all you will see. It's time\nto write our first configuration file. You can choose either JSON or YAML (we suggest YAML for development, and JSON for\nproduction). A YAML to JSON converter is available in the ",(0,i.kt)("a",{href:"../playground",target:"_blank"},"Playground section"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"# \ud83d\udc47 Configuration writing process gets easier if your file is validated against the schema below\n$schema: https://cdn.jsdelivr.net/npm/@micro-lc/interfaces@latest/schemas/v2/config.schema.json\n\n# \ud83d\udc47 Version of micro-lc\nversion: 2\n\n# \ud83d\udc47 Lets start with a simple iFrame application\napplications:\n  home:\n    integrationMode: iframe\n    src: https://wikipedia.org\n    route: ./\n")),(0,i.kt)("p",null,"You can now serve the application with your static server of choice, like\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/http.server.html"},"Python http.server")," by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"python -m http.server 8000\n")),(0,i.kt)("p",null,"Read the documentation to know more about what ",(0,i.kt)("micro-lc",null)," can do, and use the live ",(0,i.kt)("a",{href:"../playground",target:"_blank"},"Playground section"),"\nto test your configurations."),(0,i.kt)("h2",{id:"deploy-docker-container"},"Deploy Docker container"),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," static assets are also embedded in a pre-built Docker container available on\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/microlc/micro-lc"},"Docker Hub"),". The container is a nginx web server that comes with some useful\nset-up."),(0,i.kt)("p",null,"To deploy it locally, ensure your localhost ",(0,i.kt)("em",{parentName:"p"},"8080")," port is available, and run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 8080:8080 microlc/micro-lc:latest\n")),(0,i.kt)("p",null,"This container has the following runtime environment variables."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"BASE_PATH")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"/")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"index.html")," ",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#attr-href"},"base tag href"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"MODE")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"development ","|"," production")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"production")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("micro-lc",null)," bundle.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"CONFIG_SRC")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"./config.json")),(0,i.kt)("td",{parentName:"tr",align:null},"URL to ",(0,i.kt)("micro-lc",null)," config.")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BASE_PATH")," is useful if your ",(0,i.kt)("micro-lc",null)," app must be served on a sub path. Be aware that any ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," declared\nin the configuration file under ",(0,i.kt)("inlineCode",{parentName:"p"},"applications"),", when relative, are computed with respect to ",(0,i.kt)("inlineCode",{parentName:"p"},"BASE_PATH"),"."),(0,i.kt)("h3",{id:"web-page-index-file"},"Web Page Index File"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("micro-lc",null)," landing page is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/static/index.html")," and enforces no CSP security\nrules. Moreover it comes with 3 variables that the upstream ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," web server ",(0,i.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter"},"filters out and substitute"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**MICRO_LC_BASE_PATH**")," becomes the container environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"BASE_PATH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**CSP_NONCE**")," is substituted once per request and provides a valid 32 bytes random nonce"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**MICRO_LC_MODE**")," becomes the container environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"MODE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**MICRO_LC_CONFIG_SRC**")," becomes the container environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"CONFIG_SRC"))),(0,i.kt)("p",null,"Due to the presence of the ",(0,i.kt)("inlineCode",{parentName:"p"},"**CSP_NONCE**")," variable, ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," attempts multiple substitutions on any\nresource it serves (",(0,i.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter_once"},(0,i.kt)("inlineCode",{parentName:"a"},"sub_filter_once"))," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"off"),").\n",(0,i.kt)("micro-lc",null)," code is aware of that, but be careful in case you embed static files in this container that they will be filtered\nusing such rules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html",title:"index.html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  \x3c!-- HEAD section --\x3e\n</head>\n<body>\n  <micro-lc config-src="**MICRO_LC_CONFIG_SRC**"></micro-lc>\n</body>\n</html>\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," element provides specifications for ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," tag, icon and title. CSP\nare also declared"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html/head",title:"index.html/head"},"<head>\n  <base href=\"**MICRO_LC_BASE_PATH**\" target=\"_blank\" />\n  <title>Microlc</title>\n  <link rel=\"icon\" type=\"image/png\" href=\"./favicon.png\" />\n  <meta\n    http-equiv=\"Content-Security-Policy\" content=\"\n      default-src 'self' https: http:;\n      script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:;\n      object-src 'none';\n      style-src 'self' 'unsafe-inline';\n      img-src 'self' data: https: http:;\n      font-src 'self';\n      worker-src 'self' blob:;\n      base-uri 'self';\"\n    />\n  <style>\n    html, body {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      padding: 0;\n      overflow: hidden;\n    }\n    micro-lc {\n      display: inline-block;\n      position: relative;\n      height: inherit;\n      width: inherit;\n    }\n  </style>\n  <script async type=\"module\" src=\"./micro-lc.**MICRO_LC_MODE**.js\"><\/script>\n</head>\n")),(0,i.kt)("h3",{id:"web-server"},"Web Server"),(0,i.kt)("p",null,"The ",(0,i.kt)("micro-lc",null)," container is effectively an ",(0,i.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"nginx")," web server, currently on version\n",(0,i.kt)("inlineCode",{parentName:"p"},"1.23.2"),". It is preset to rewrite any route according to your ",(0,i.kt)("inlineCode",{parentName:"p"},"BASE_PATH")," choice. Moreover, it does per-call\n",(0,i.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_sub_module.html#sub_filter"},"sub filtering")," of special variables. This feature is\nuseful to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inject runtime variables to ",(0,i.kt)("micro-lc",null)," web component, and "),(0,i.kt)("li",{parentName:"ul"},"inject a ",(0,i.kt)("a",{parentName:"li",href:"https://content-security-policy.com/nonce/"},"CSP nonce")," on scripts and style tags.")),(0,i.kt)("p",null,"Which basically sums up to the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"http {\n  server {\n    # ...\n    location ~ (^/|^${BASE_PATH}) {\n      set_secure_random_alphanum      $cspNonce 32;\n\n      rewrite                         ^${BASE_PATH}$ /index.html break;\n      rewrite                         ^${BASE_PATH}/?(.*) /$1 break;\n\n      sub_filter_once                 off;\n      sub_filter                      '**MICRO_LC_BASE_PATH**' '${BASE_PATH}';\n      sub_filter                      '**MICRO_LC_MODE**' '${MODE}';\n      sub_filter                      '**MICRO_LC_CONFIG_SRC**' '${CONFIG_SRC}';\n      sub_filter                      '**CSP_NONCE**' $cspNonce;\n\n      expires                         -1;\n      try_files                       $uri $uri/index.html /index.html =404;\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Notice that the algorithm ",(0,i.kt)("inlineCode",{parentName:"p"},"set_secure_random_alphanum")," is provided by an ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," external\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openresty/set-misc-nginx-module"},"module")," and generates 32 bytes of random hash on each endpoint call\nreplacing the variable `",(0,i.kt)("strong",{parentName:"p"},"CSP_NONCE"),"."),(0,i.kt)("h3",{id:"customization"},"Customization"),(0,i.kt)("p",null,"To override default configurations with your own, you can use ",(0,i.kt)("strong",{parentName:"p"},"volumes"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," is mounted at ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/static/index.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.json")," is mounted at ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/static/config.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default.conf")," is mounted at ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/nginx/conf.d/default.conf"))),(0,i.kt)("h2",{id:"building-from-source"},"Building from source"),(0,i.kt)("p",null,"If you would like to contribute or simply run ",(0,i.kt)("micro-lc",null)," from source code, checkout locally the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/micro-lc/micro-lc"},"official repository"),". "),(0,i.kt)("p",null,"Be aware that it needs ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," ",(0,i.kt)("inlineCode",{parentName:"p"},"16+")," and ","."," These requirements can be met installing a node version manager\nlike ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},(0,i.kt)("inlineCode",{parentName:"a"},"nvm"))," and then running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nvm install lts/gallium\ncorepack enable\n")),(0,i.kt)("p",null,"Once your ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," is up and running, issue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\nyarn initialize\n")),(0,i.kt)("p",null,"and the source code of ",(0,i.kt)("micro-lc",null)," will be located at ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/orchestrator/dist"),". "),(0,i.kt)("p",null,"Locally a playground is available but requires Docker and Docker Compose to run. After running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn playground\n")),(0,i.kt)("p",null,"the playground will be available on ",(0,i.kt)("a",{parentName:"p",href:"http://localhost"},"http://localhost/"),"."),(0,i.kt)("h2",{id:"playground"},"Playground"),(0,i.kt)("p",null,"An online playground is ",(0,i.kt)("a",{href:"../playground/",target:"_blank"},"available")," on this documentation website. Refer to our\nguides to try ",(0,i.kt)("micro-lc",null)," out on the playground setup."))}u.isMDXComponent=!0}}]);