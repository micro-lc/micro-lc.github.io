"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4102],{55858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75001:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(76687),a=n(64923);const o={tabItem:"tabItem_TSm8"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},99614:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(855),a=n(76687),o=n(64923),i=n(41236),s=n(74498),l=n(64890),c=n(14992),p=n(44279);function m(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,r,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,m=u(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),b=f[0],g=f[1],y=h({queryString:l,groupId:c}),v=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,p.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=w[0],N=w[1],T=function(){var e=null!=v?v:x;return d({value:e,tabValues:m})?e:null}();return(0,a.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),N(e)}),[k,N,m]),tabValues:m}}var b=n(49920);const g={tabList:"tabList_rQqy",tabItem:"tabItem_dHrw"};function y(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,p=[],m=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==s&&(m(t),l(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;n=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var o,i=p.indexOf(e.currentTarget)-1;n=null!=(o=p[i])?o:p[p.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:u},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},91556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var r=n(855),a=n(55659),o=(n(76687),n(55858)),i=n(99614),s=n(75001),l=["components"],c={title:"Reuse third party libraries",description:"Dependency sharing",sidebar_label:"Reuse third party libraries",sidebar_position:60},p=void 0,m={unversionedId:"docs/guides/reuse-third-party-libraries",id:"docs/guides/reuse-third-party-libraries",title:"Reuse third party libraries",description:"Dependency sharing",source:"@site/docs/docs/guides/reuse-third-party-libraries.md",sourceDirName:"docs/guides",slug:"/docs/guides/reuse-third-party-libraries",permalink:"/docs/guides/reuse-third-party-libraries",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/reuse-third-party-libraries.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",sidebarPosition:60,frontMatter:{title:"Reuse third party libraries",description:"Dependency sharing",sidebar_label:"Reuse third party libraries",sidebar_position:60},sidebar:"docs",previous:{title:"Style",permalink:"/docs/guides/style"},next:{title:"Migrating from V1",permalink:"/docs/migrating-from-v1"}},u={},d=[{value:"Import maps",id:"import-maps",level:2},{value:"Usage",id:"usage",level:3}],h={toc:d},f="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Disclaimer",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For the time being, this feature is applicable ",(0,o.kt)("strong",{parentName:"p"},"only to web components")," (i.e., ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout")," and application of\ntype ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"compose"),"). In the future it will be extended also to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"parcels"),".")),(0,o.kt)("p",null,"Encapsulation and complete separation among components/applications may lead to bundle same third-party dependencies\nmultiple times. For instance, you might use the same framework to build your reusable components, and then compose your\npages with components that belongs to different libraries."),(0,o.kt)("h2",{id:"import-maps"},"Import maps"),(0,o.kt)("p",null,"To mitigate this issue, ",(0,o.kt)("micro-lc",null)," ships with native support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps"},"import maps"),"."),(0,o.kt)("p",null,"Since at present time neither Firefox nor Safari ",(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/import-maps"},"support")," import maps, ",(0,o.kt)("micro-lc",null),"\nembeds the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/guybedford/es-module-shims"},"es-module-shims")," import maps polyfill. Any composable content\nof ",(0,o.kt)("micro-lc",null)," can leverage the import maps technique utility."),(0,o.kt)("p",null,"Suppose you want to use two web components form two different libraries, both having a direct dependency from\n",(0,o.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"RxJS"),"."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"library-1",label:"Library 1",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="my-awesome-web-component-1.ts"',title:'"my-awesome-web-component-1.ts"'},"import type { MicrolcApi } from '@micro-lc/orchestrator'\n// highlight-next-line\nimport { filter } from 'rxjs'\n\nclass MyAwesomeWebComponent extends HTMLElement {\n  microlcApi?: MicrolcApi\n\n  connectedCallback () {\n    this.microlcApi?.currentApplication$\n      .pipe(filter(id => id === 'home'))\n      .subscribe(() => console.log('We are at home!'))\n  }\n}\n\ncustomElements.define('my-awesome-web-component', MyAwesomeWebComponent)\n"))),(0,o.kt)(s.Z,{value:"library-2",label:"Library 2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="my-awesome-web-component-2.ts"',title:'"my-awesome-web-component-2.ts"'},"import type { MicrolcApi } from '@micro-lc/orchestrator'\n// highlight-next-line\nimport { filter } from 'rxjs'\n\nclass MyAwesomeWebComponent extends HTMLElement {\n  microlcApi?: MicrolcApi\n\n  connectedCallback () {\n    this.microlcApi?.currentApplication$\n      .pipe(filter(id => id !== 'home'))\n      .subscribe(() => console.log('We are not at home!'))\n  }\n}\n\ncustomElements.define('my-other-awesome-web-component', MyAwesomeWebComponent)\n"))),(0,o.kt)(s.Z,{value:"micro-lc",label:"micro-lc config",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},'applications:\n  home:\n    integrationMode: compose\n    route: "/",\n    config:\n      sources:\n        - "https://my-static-server/library-1.js"\n        - "https://my-static-server/library-2.js"\n      content:\n        # highlight-next-line\n        - tag: "my-awesome-web-component"\n        # highlight-next-line\n        - tag: "my-other-awesome-web-component"\n')))),(0,o.kt)("p",null,"If you bundle the dependency in the libraries, RxJS will be downloaded twice when visiting a page using both the\ncomponents. However, if you bundle a version of the libraries leaving the import as a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps#bare-specifiers-for-javascript-modules"},"bare module import")," (i.e., without including\nit in the final bundle), you can leverage import maps functionality to download the shared dependency just once."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Excluding modules at compile time while crafting your bundle is an option available to most JavaScript bundlers\n(e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/#external"},"Rollup"),"). When employed, it requires the browser who runs it to properly\ninterpret the import as a bare ES6 module import."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="A bare module import"',title:'"A',bare:!0,module:!0,'import"':!0},"import { filter } from 'rxjs'\n")),(0,o.kt)("p",{parentName:"admonition"},"Otherwise, the browser will fire an error like:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("console-error-line",null,"Error: Unable to resolve specifier 'rxjs'")),(0,o.kt)("p",{parentName:"admonition"},"To learn more about the topic, visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/guybedford/es-module-shims#es-module-shims"},"ES Module Shims repository"),".")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Import maps can be declared in different sections of ",(0,o.kt)("micro-lc",null)," configuration depending on their scope."),(0,o.kt)("p",null,"If you want them to be accessible by the whole application (i.e., both layout and all mounted micro-frontends), you can\nuse top-level ",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#importmap"},(0,o.kt)("inlineCode",{parentName:"a"},"importmap")," configuration key"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("div",null,(0,o.kt)(i.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"importmap:\n  imports:\n    react: https://esm.sh/react@next\n    react-dom: https://esm.sh/react-dom@next\n  scopes:\n    https://esm.sh/react-dom@next:\n      /client: https://esm.sh/react-dom@next/client\n"))),(0,o.kt)(s.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "importmap": {\n    "imports": {\n      "react": "https://esm.sh/react@next",\n      "react-dom": "https://esm.sh/react-dom@next"\n    },\n    "scopes": {\n      "https://esm.sh/react-dom@next": {\n        "/client": "https://esm.sh/react-dom@next/client"\n      }\n    }\n  }\n}\n')))))),(0,o.kt)("p",null,"On the contrary, if you want to narrow their scope, you need to use key\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#plugin-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"sources.importmap"))," when defining the configuration of a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout"),", a ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"composable application")," or a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#custom-error-pages"},"custom composable error page"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("div",null,(0,o.kt)(i.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"# \ud83d\udc47 Custom error pages\nsettings:\n  4xx:\n    404:\n      integrationMode: compose\n      config:\n        sources:\n          uris: https://my-static-server/my-web-component.js\n        importmap:\n          imports:\n            react: https://esm.sh/react@next\n            react-dom: https://esm.sh/react-dom@next\n          scopes:\n            https://esm.sh/react-dom@next:\n              /client: https://esm.sh/react-dom@next/client\n        content:\n          tag: my-web-component\n\n# \ud83d\udc47 Layout\nlayout:\n  sources:\n    uris: https://my-static-server/my-web-component.js\n  importmap:\n    imports:\n      react: https://esm.sh/react@next\n      react-dom: https://esm.sh/react-dom@next\n    scopes:\n      https://esm.sh/react-dom@next:\n        /client: https://esm.sh/react-dom@next/client\n  content:\n    tag: my-web-component\n\n# \ud83d\udc47 Composable applications\napplications:\n  - compose:\n      integrationMode: compose\n      route: ./compose\n      config:\n        sources:\n          uris: https://my-static-server/my-web-component.js\n        importmap:\n          imports:\n            react: https://esm.sh/react@next\n            react-dom: https://esm.sh/react-dom@next\n          scopes:\n            https://esm.sh/react-dom@next:\n              /client: https://esm.sh/react-dom@next/client\n        content:\n          tag: my-web-component\n"))),(0,o.kt)(s.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "4xx": {\n      "404": {\n        "integrationMode": "compose",\n        "config": {\n          "sources": {\n            "uris": "https://my-static-server/my-web-component.js"\n          },\n          "importmap": {\n            "imports": {\n              "react": "https://esm.sh/react@next",\n              "react-dom": "https://esm.sh/react-dom@next"\n            },\n            "scopes": {\n              "https://esm.sh/react-dom@next": {\n                "/client": "https://esm.sh/react-dom@next/client"\n              }\n            }\n          },\n          "content": {\n            "tag": "my-web-component"\n          }\n        }\n      }\n    }\n  },\n  "layout": {\n    "sources": {\n      "uris": "https://my-static-server/my-web-component.js"\n    },\n    "importmap": {\n      "imports": {\n        "react": "https://esm.sh/react@next",\n        "react-dom": "https://esm.sh/react-dom@next"\n      },\n      "scopes": {\n        "https://esm.sh/react-dom@next": {\n          "/client": "https://esm.sh/react-dom@next/client"\n        }\n      }\n    },\n    "content": {\n      "tag": "my-web-component"\n    }\n  },\n  "applications": [\n    {\n      "compose": {\n        "integrationMode": "compose",\n        "route": "./compose",\n        "config": {\n          "sources": {\n            "uris": "https://my-static-server/my-web-component.js"\n          },\n          "importmap": {\n            "imports": {\n              "react": "https://esm.sh/react@next",\n              "react-dom": "https://esm.sh/react-dom@next"\n            },\n            "scopes": {\n              "https://esm.sh/react-dom@next": {\n                "/client": "https://esm.sh/react-dom@next/client"\n              }\n            }\n          },\n          "content": {\n            "tag": "my-web-component"\n          }\n        }\n      }\n    }\n  ]\n}\n')))))),(0,o.kt)("p",null,"Regardless of where import maps are declared, their configuration is an object of the following shape:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ImportMap {\n  imports?: Record<string, string>\n  scopes?: Record<string, Record<string, string>>\n}\n")),(0,o.kt)("p",null,"Key ",(0,o.kt)("inlineCode",{parentName:"p"},"imports")," allows control over what URLs get fetched by JavaScript import statements and import() expressions. It is\nan object mapping modules to URLs from which they can be fetched."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"importmap:\n  imports:\n    react: https://esm.sh/react@next\n")),(0,o.kt)("p",null,"It is often the case that you want to use the same import specifier to refer to multiple versions of a single library,\ndepending on who is importing them. This encapsulates the versions of each dependency in use, and avoids dependency hell.\nThis use case is supported through key ",(0,o.kt)("inlineCode",{parentName:"p"},"scopes")," which allows you to change the meaning of a specifier within a given\nscope."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"scopes:\n  https://esm.sh/react-dom@next:\n    /client: https://esm.sh/react-dom@next/client\n")))}b.isMDXComponent=!0}}]);