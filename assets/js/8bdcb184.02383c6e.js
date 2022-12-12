"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4102],{5858:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2886:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(6687),o=n(4923);const a="tabItem_EP2U";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},406:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(6428),o=n(6687),a=n(4923),i=n(3634),s=n(6844),l=n(3667),p=n(3107);const c="tabList_jxcF",m="tabItem_Lqs7";function u(e){var t,n,i=e.lazy,u=e.block,d=e.defaultValue,h=e.values,b=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),x=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,o.useState)(k),j=T[0],E=T[1],O=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=x[b];null!=C&&C!==j&&y.some((function(e){return e.value===C}))&&E(C)}var M=function(e){var t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==j&&(I(t),E(r),null!=b&&N(b,String(r)))},A=function(e){var t,n=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":var r,o=O.indexOf(e.currentTarget)+1;n=null!=(r=O[o])?r:O[0];break;case"ArrowLeft":var a,i=O.indexOf(e.currentTarget)-1;n=null!=(a=O[i])?a:O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":u},f)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return O.push(e)},onKeyDown:A,onClick:M},i,{className:(0,a.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,i.Z)();return o.createElement(u,(0,r.Z)({key:String(t)},e))}},4377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var r=n(6428),o=n(8920),a=(n(6687),n(5858)),i=n(406),s=n(2886),l=["components"],p={title:"Reuse third party libraries",description:"Dependency sharing",sidebar_label:"Reuse third party libraries",sidebar_position:60},c=void 0,m={unversionedId:"docs/guides/reuse-third-party-libraries",id:"docs/guides/reuse-third-party-libraries",title:"Reuse third party libraries",description:"Dependency sharing",source:"@site/docs/docs/guides/reuse-third-party-libraries.md",sourceDirName:"docs/guides",slug:"/docs/guides/reuse-third-party-libraries",permalink:"/docs/guides/reuse-third-party-libraries",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/reuse-third-party-libraries.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:60,frontMatter:{title:"Reuse third party libraries",description:"Dependency sharing",sidebar_label:"Reuse third party libraries",sidebar_position:60},sidebar:"docs",previous:{title:"Style",permalink:"/docs/guides/style"},next:{title:"Migrating from V1",permalink:"/docs/migrating-from-v1"}},u={},d=[{value:"Import maps",id:"import-maps",level:2},{value:"Usage",id:"usage",level:3}],h={toc:d};function b(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Disclaimer",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For the time being, this feature is applicable ",(0,a.kt)("strong",{parentName:"p"},"only to web components")," (i.e., ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout")," and application of\ntype ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"compose"),"). In the future it will be extended also to ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"parcels"),".")),(0,a.kt)("p",null,"Encapsulation and complete separation among components/applications may lead to bundle same third-party dependencies\nmultiple times. For instance, you might use the same framework to build your reusable components, and then compose your\npages with components that belongs to different libraries."),(0,a.kt)("h2",{id:"import-maps"},"Import maps"),(0,a.kt)("p",null,"To mitigate this issue, ",(0,a.kt)("micro-lc",null)," ships with native support for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps"},"import maps"),"."),(0,a.kt)("p",null,"Since at present time neither Firefox nor Safari ",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/import-maps"},"support")," import maps, ",(0,a.kt)("micro-lc",null),"\nembeds the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/guybedford/es-module-shims"},"es-module-shims")," import maps polyfill. Any composable content\nof ",(0,a.kt)("micro-lc",null)," can leverage the import maps technique utility."),(0,a.kt)("p",null,"Suppose you want to use two web components form two different libraries, both having a direct dependency from\n",(0,a.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"RxJS"),"."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"library-1",label:"Library 1",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="my-awesome-web-component-1.ts"',title:'"my-awesome-web-component-1.ts"'},"import type { MicrolcApi } from '@micro-lc/orchestrator'\n// highlight-next-line\nimport { filter } from 'rxjs'\n\nclass MyAwesomeWebComponent extends HTMLElement {\n  microlcApi?: MicrolcApi\n\n  connectedCallback () {\n    this.microlcApi?.currentApplication$\n      .pipe(filter(id => id === 'home'))\n      .subscribe(() => console.log('We are at home!'))\n  }\n}\n\ncustomElements.define('my-awesome-web-component', MyAwesomeWebComponent)\n"))),(0,a.kt)(s.Z,{value:"library-2",label:"Library 2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="my-awesome-web-component-2.ts"',title:'"my-awesome-web-component-2.ts"'},"import type { MicrolcApi } from '@micro-lc/orchestrator'\n// highlight-next-line\nimport { filter } from 'rxjs'\n\nclass MyAwesomeWebComponent extends HTMLElement {\n  microlcApi?: MicrolcApi\n\n  connectedCallback () {\n    this.microlcApi?.currentApplication$\n      .pipe(filter(id => id !== 'home'))\n      .subscribe(() => console.log('We are not at home!'))\n  }\n}\n\ncustomElements.define('my-other-awesome-web-component', MyAwesomeWebComponent)\n"))),(0,a.kt)(s.Z,{value:"micro-lc",label:"micro-lc config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},'applications:\n  home:\n    integrationMode: compose\n    route: "/",\n    config:\n      sources:\n        - "https://my-static-server/library-1.js"\n        - "https://my-static-server/library-2.js"\n      content:\n        # highlight-next-line\n        - tag: "my-awesome-web-component"\n        # highlight-next-line\n        - tag: "my-other-awesome-web-component"\n')))),(0,a.kt)("p",null,"If you bundle the dependency in the libraries, RxJS will be downloaded twice when visiting a page using both the\ncomponents. However, if you bundle a version of the libraries leaving the import as a\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps#bare-specifiers-for-javascript-modules"},"bare module import")," (i.e., without including\nit in the final bundle), you can leverage import maps functionality to download the shared dependency just once."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Excluding modules at compile time while crafting your bundle is an option available to most JavaScript bundlers\n(e.g., ",(0,a.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/#external"},"Rollup"),"). When employed, it requires the browser who runs it to properly\ninterpret the import as a bare ES6 module import."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="A bare module import"',title:'"A',bare:!0,module:!0,'import"':!0},"import { filter } from 'rxjs'\n")),(0,a.kt)("p",{parentName:"admonition"},"Otherwise, the browser will fire an error like:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("console-error-line",null,"Error: Unable to resolve specifier 'rxjs'")),(0,a.kt)("p",{parentName:"admonition"},"To learn more about the topic, visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/guybedford/es-module-shims#es-module-shims"},"ES Module Shims repository"),".")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Import maps can be declared in different sections of ",(0,a.kt)("micro-lc",null)," configuration depending on their scope."),(0,a.kt)("p",null,"If you want them to be accessible by the whole application (i.e., both layout and all mounted micro-frontends), you can\nuse top-level ",(0,a.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#importmap"},(0,a.kt)("inlineCode",{parentName:"a"},"importmap")," configuration key"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("div",null,(0,a.kt)(i.Z,{groupId:"configuration",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"importmap:\n  imports:\n    react: https://esm.sh/react@next\n    react-dom: https://esm.sh/react-dom@next\n  scopes:\n    https://esm.sh/react-dom@next:\n      /client: https://esm.sh/react-dom@next/client\n"))),(0,a.kt)(s.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "importmap": {\n    "imports": {\n      "react": "https://esm.sh/react@next",\n      "react-dom": "https://esm.sh/react-dom@next"\n    },\n    "scopes": {\n      "https://esm.sh/react-dom@next": {\n        "/client": "https://esm.sh/react-dom@next/client"\n      }\n    }\n  }\n}\n')))))),(0,a.kt)("p",null,"On the contrary, if you want to narrow their scope, you need to use key\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#plugin-configuration"},(0,a.kt)("inlineCode",{parentName:"a"},"sources.importmap"))," when defining the configuration of a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout"),", a ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"composable application")," or a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#custom-error-pages"},"custom composable error page"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("div",null,(0,a.kt)(i.Z,{groupId:"configuration",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"# \ud83d\udc47 Custom error pages\nsettings:\n  4xx:\n    404:\n      integrationMode: compose\n      config:\n        sources:\n          uris: https://my-static-server/my-web-component.js\n        importmap:\n          imports:\n            react: https://esm.sh/react@next\n            react-dom: https://esm.sh/react-dom@next\n          scopes:\n            https://esm.sh/react-dom@next:\n              /client: https://esm.sh/react-dom@next/client\n        content:\n          tag: my-web-component\n\n# \ud83d\udc47 Layout\nlayout:\n  sources:\n    uris: https://my-static-server/my-web-component.js\n  importmap:\n    imports:\n      react: https://esm.sh/react@next\n      react-dom: https://esm.sh/react-dom@next\n    scopes:\n      https://esm.sh/react-dom@next:\n        /client: https://esm.sh/react-dom@next/client\n  content:\n    tag: my-web-component\n\n# \ud83d\udc47 Composable applications\napplications:\n  - compose:\n      integrationMode: compose\n      route: ./compose\n      config:\n        sources:\n          uris: https://my-static-server/my-web-component.js\n        importmap:\n          imports:\n            react: https://esm.sh/react@next\n            react-dom: https://esm.sh/react-dom@next\n          scopes:\n            https://esm.sh/react-dom@next:\n              /client: https://esm.sh/react-dom@next/client\n        content:\n          tag: my-web-component\n"))),(0,a.kt)(s.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "4xx": {\n      "404": {\n        "integrationMode": "compose",\n        "config": {\n          "sources": {\n            "uris": "https://my-static-server/my-web-component.js"\n          },\n          "importmap": {\n            "imports": {\n              "react": "https://esm.sh/react@next",\n              "react-dom": "https://esm.sh/react-dom@next"\n            },\n            "scopes": {\n              "https://esm.sh/react-dom@next": {\n                "/client": "https://esm.sh/react-dom@next/client"\n              }\n            }\n          },\n          "content": {\n            "tag": "my-web-component"\n          }\n        }\n      }\n    }\n  },\n  "layout": {\n    "sources": {\n      "uris": "https://my-static-server/my-web-component.js"\n    },\n    "importmap": {\n      "imports": {\n        "react": "https://esm.sh/react@next",\n        "react-dom": "https://esm.sh/react-dom@next"\n      },\n      "scopes": {\n        "https://esm.sh/react-dom@next": {\n          "/client": "https://esm.sh/react-dom@next/client"\n        }\n      }\n    },\n    "content": {\n      "tag": "my-web-component"\n    }\n  },\n  "applications": [\n    {\n      "compose": {\n        "integrationMode": "compose",\n        "route": "./compose",\n        "config": {\n          "sources": {\n            "uris": "https://my-static-server/my-web-component.js"\n          },\n          "importmap": {\n            "imports": {\n              "react": "https://esm.sh/react@next",\n              "react-dom": "https://esm.sh/react-dom@next"\n            },\n            "scopes": {\n              "https://esm.sh/react-dom@next": {\n                "/client": "https://esm.sh/react-dom@next/client"\n              }\n            }\n          },\n          "content": {\n            "tag": "my-web-component"\n          }\n        }\n      }\n    }\n  ]\n}\n')))))),(0,a.kt)("p",null,"Regardless of where import maps are declared, their configuration is an object of the following shape:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ImportMap {\n  imports?: Record<string, string>\n  scopes?: Record<string, Record<string, string>>\n}\n")),(0,a.kt)("p",null,"Key ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," allows control over what URLs get fetched by JavaScript import statements and import() expressions. It is\nan object mapping modules to URLs from which they can be fetched."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"importmap:\n  imports:\n    react: https://esm.sh/react@next\n")),(0,a.kt)("p",null,"It is often the case that you want to use the same import specifier to refer to multiple versions of a single library,\ndepending on who is importing them. This encapsulates the versions of each dependency in use, and avoids dependency hell.\nThis use case is supported through key ",(0,a.kt)("inlineCode",{parentName:"p"},"scopes")," which allows you to change the meaning of a specifier within a given\nscope."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scopes:\n  https://esm.sh/react-dom@next:\n    /client: https://esm.sh/react-dom@next/client\n")))}b.isMDXComponent=!0}}]);