"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,g=s["".concat(c,".").concat(d)]||s[d]||u[d]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),l=n(34334),o=n(12466),i=n(16550),c=n(91980),p=n(67392),m=n(50012);function s(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function k(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,c=void 0!==i&&i,p=e.groupId,s=u(e),k=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:s})})),f=k[0],h=k[1],b=g({queryString:c,groupId:p}),y=b[0],N=b[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,m.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),x=v[0],T=v[1],w=function(){var e=null!=y?y:x;return d({value:e,tabValues:s})?e:null}();return(0,r.useLayoutEffect)((function(){w&&h(w)}),[w]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);h(e),N(e),T(e)}),[N,T,s]),tabValues:s}}var f=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,i=e.selectedValue,c=e.selectValue,p=e.tabValues,m=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=m.indexOf(t),a=p[n].value;a!==i&&(s(t),c(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=m.indexOf(e.currentTarget)+1;n=null!=(a=m[r])?a:m[0];break;case"ArrowLeft":var l,o=m.indexOf(e.currentTarget)-1;n=null!=(l=m[o])?l:m[m.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return m.push(e)},onKeyDown:d,onClick:u},o,{className:(0,l.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){var t=(0,f.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},7543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(74866),i=n(85162),c=["components"],p={sidebar_label:"micro-lc web component",description:"micro-lc web component and configuration",title:"micro-lc web component",sidebar_position:10},m=void 0,s={unversionedId:"api/micro-lc-web-component",id:"api/micro-lc-web-component",title:"micro-lc web component",description:"micro-lc web component and configuration",source:"@site/docs/api/micro-lc-web-component.md",sourceDirName:"api",slug:"/api/micro-lc-web-component",permalink:"/api/micro-lc-web-component",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/api/micro-lc-web-component.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:10,frontMatter:{sidebar_label:"micro-lc web component",description:"micro-lc web component and configuration",title:"micro-lc web component",sidebar_position:10},sidebar:"api",next:{title:"micro-lc API",permalink:"/api/micro-lc-api/"}},u={},d=[{value:"Web component",id:"web-component",level:2},{value:"Development and production mode",id:"development-and-production-mode",level:3},{value:"Properties &amp; attributes",id:"properties--attributes",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Default configuration",id:"default-configuration",level:3},{value:"<code>settings</code>",id:"settings",level:3},{value:"<code>4xx</code>",id:"4xx",level:4},{value:"<code>5xx</code>",id:"5xx",level:4},{value:"<code>composerUri</code>",id:"composeruri",level:4},{value:"<code>mountPoint</code>",id:"mountpoint",level:4},{value:"<code>mountPointSelector</code>",id:"mountpointselector",level:4},{value:"<code>defaultUrl</code>",id:"defaulturl",level:4},{value:"<code>shared</code>",id:"shared",level:3},{value:"<code>importmap</code>",id:"importmap",level:3},{value:"<code>layout</code>",id:"layout",level:3},{value:"<code>applications</code>",id:"applications",level:3}],g={toc:d},k="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)(k,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"web-component"},"Web component"),(0,l.kt)("p",null,(0,l.kt)("micro-lc",null)," in itself is a web component, registered with tag ",(0,l.kt)("inlineCode",{parentName:"p"},"micro-lc"),". It can be\n",(0,l.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/@micro-lc/orchestrator"},"sourced from CDN"),", or installed as a\n",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@micro-lc/orchestrator"},"npm package"),"."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"CDN",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>CDN example</title>\n\n  \x3c!-- highlight-next-line --\x3e\n  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"><\/script>\n</head>\n<body>\n    \x3c!-- highlight-next-line --\x3e\n    <micro-lc></micro-lc>\n</body>\n</html>\n'))),(0,l.kt)(i.Z,{value:"1",label:"npm package",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="App.tsx"',title:'"App.tsx"'},"import React from 'react'\n\n// highlight-next-line\nimport MicroLc from '@micro-lc/orchestrator'\n\nfunction App() {\n  // highlight-next-line\n  return (<micro-lc></micro-lc>)\n}\n\n// highlight-next-line\ncustomElements.define('micro-lc', MicroLc)\n\nexport default App\n")))),(0,l.kt)("h3",{id:"development-and-production-mode"},"Development and production mode"),(0,l.kt)("p",null,(0,l.kt)("micro-lc",null)," web component comes in two flavors: ",(0,l.kt)("em",{parentName:"p"},"development")," and ",(0,l.kt)("em",{parentName:"p"},"production"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Development")," variant is injected into the\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry"},(0,l.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry"))," with a larger bundle\nsize (~700 KB) since it includes an instance of the ",(0,l.kt)("a",{parentName:"p",href:"https://ajv.js.org/"},"Ajv JSON schema validator")," to check if\nconfigurations provided to the web components are valid. ",(0,l.kt)("em",{parentName:"p"},"Development")," variant also provides feedback on errors via\nbrowser ",(0,l.kt)("inlineCode",{parentName:"p"},"console"),"."),(0,l.kt)("p",null,"To reduce the bundle size, ",(0,l.kt)("em",{parentName:"p"},"production")," variant lacks all previously mentioned features and shrinks down to ~180 KB."),(0,l.kt)("h3",{id:"properties--attributes"},"Properties & attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"config")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("code",null,(0,l.kt)("a",{href:"#configuration"},"Configuration"))),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("code",null,(0,l.kt)("a",{href:"#default-configuration"},"Default configuration"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("micro-lc",null)," configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"configSrc")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"config-src")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"URL from which configuration can be fetched.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"disable-shadow-dom")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether ",(0,l.kt)("micro-lc",null)," should be in Shadow DOM.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"root-id")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"__micro_lc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/guides/layout#mount-point"},"Mount point")," ",(0,l.kt)("inlineCode",{parentName:"td"},"<div>")," id.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"disable-styling")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Disable ",(0,l.kt)("a",{parentName:"td",href:"/docs/guides/layout#mount-point"},"mount point")," preset styling.")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Attributes ",(0,l.kt)("inlineCode",{parentName:"p"},"disable-shadow-dom"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"root-id"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"disable-styling")," are ",(0,l.kt)("strong",{parentName:"p"},"not observed"),", meaning their initial value is\nthe only one that matters and no changes are listened to.")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Everything concerning the structure of your application \u2013 from layout to content, from general settings to global\nimports \u2013 is contained in ",(0,l.kt)("micro-lc",null)," configuration."),(0,l.kt)("p",null,"This configuration can be ",(0,l.kt)("strong",{parentName:"p"},"directly supplied")," to ",(0,l.kt)("micro-lc",null)," web component through property ",(0,l.kt)("inlineCode",{parentName:"p"},"config"),",\n",(0,l.kt)("strong",{parentName:"p"},"programmatically set")," with API method ",(0,l.kt)("a",{parentName:"p",href:"/api/micro-lc-api/application-state#setcurrentconfig"},(0,l.kt)("inlineCode",{parentName:"a"},"setcurrentconfig")),", or\n",(0,l.kt)("strong",{parentName:"p"},"sourced")," through property ",(0,l.kt)("inlineCode",{parentName:"p"},"configSrc")," (or mirrored attribute ",(0,l.kt)("inlineCode",{parentName:"p"},"config-src"),") in JSON or YAML format."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"YAML is clearer and easier to read and write, but bring a computational and bundle size (~38 KB) overhead, since it\nrequires an extra step to be compiled back to JSON."),(0,l.kt)("p",{parentName:"admonition"},"For this reason, we recommend YAML for development and JSON for production. A YAML to JSON converter is available in\nthe ",(0,l.kt)("a",{href:"../playground",target:"_blank"},"Playground section"),".")),(0,l.kt)("p",null,"Practically speaking, ",(0,l.kt)("micro-lc",null)," configuration is an object with the following structure (each key is\nexplained in details below):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Config {\n  $schema?: string \n  version?: 2\n  settings?: Settings\n  shared?: Shared\n  importmap?: Importmap\n  layout?: Layout\n  applications?: Applications\n}\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Key ",(0,l.kt)("inlineCode",{parentName:"p"},"$schema")," can be used to reference ",(0,l.kt)("micro-lc",null)," configuration\n",(0,l.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/@micro-lc/interfaces@latest/schemas/v2/config.schema.json"},"JSON schema")," to greatly ease\nthe writing process by constantly validating the JSON or YAML content against it. ")),(0,l.kt)("h3",{id:"default-configuration"},"Default configuration"),(0,l.kt)("p",null,"If no configuration is provided ",(0,l.kt)("micro-lc",null)," uses the following default configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},"version: 2\n\nsettings:\n  defaultUrl: ./\n\nlayout:\n  content:\n    tag: slot\n")),(0,l.kt)("h3",{id:"settings"},(0,l.kt)("inlineCode",{parentName:"h3"},"settings")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("p",null,"Global ",(0,l.kt)("micro-lc",null)," settings."),(0,l.kt)("h4",{id:"4xx"},(0,l.kt)("inlineCode",{parentName:"h4"},"4xx")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")),(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Configuration for ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#custom-error-pages"},"custom error pages")," linked to ",(0,l.kt)("strong",{parentName:"p"},"client\nerrors"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"settings:\n  4xx:\n    401:\n      integrationMode: parcel\n      entry: https://my-static-server/custom-401-error-page.html\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "4xx": {\n      "401": {\n        "integrationMode": "parcel",\n        "entry": "https://my-static-server/custom-401-error-page.html"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("h4",{id:"5xx"},(0,l.kt)("inlineCode",{parentName:"h4"},"5xx")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")),(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Configuration for ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#custom-error-pages"},"custom error pages")," linked to ",(0,l.kt)("strong",{parentName:"p"},"server\nerrors"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"settings:\n  5xx:\n    502:\n      integrationMode: parcel\n      entry: https://my-static-server/custom-502-error-page.html\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "5xx": {\n      "502": {\n        "integrationMode": "parcel",\n        "entry": "https://my-static-server/custom-502-error-page.html"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("h4",{id:"composeruri"},(0,l.kt)("inlineCode",{parentName:"h4"},"composerUri")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"URI from which composer can be sourced, if a different implementation from default ",(0,l.kt)("micro-lc",null)," one is needed."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"settings:\n  composerUri: https://my-static-server/my-custom-composer.js\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "composerUri": "https://my-static-server/my-custom-composer.js"\n  }\n}\n')))),(0,l.kt)("h4",{id:"mountpoint"},(0,l.kt)("inlineCode",{parentName:"h4"},"mountPoint")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")),(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Custom application ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/layout#mount-point"},"mount point")," configuration."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"settings:\n  mountPoint:\n    tag: div\n    attributes:\n      id: custom-mount-point\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "mountPoint": {\n      "tag": "div",\n      "attributes": {\n        "id": "custom-mount-point"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("h4",{id:"mountpointselector"},(0,l.kt)("inlineCode",{parentName:"h4"},"mountPointSelector")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Query selector to plugins mounting DOM element."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},'settings:\n  mountPointSelector: "#custom-mount-point"\n'))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "mountPointSelector": "#custom-mount-point"\n  }\n}\n')))),(0,l.kt)("h4",{id:"defaulturl"},(0,l.kt)("inlineCode",{parentName:"h4"},"defaultUrl")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"./"))),(0,l.kt)("p",null,"Landing URL. If it ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/routing"},"does not correspond")," to any configured application, ",(0,l.kt)("strong",{parentName:"p"},"404 error page"),"\nwill be rendered."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"settings:\n  defaultUrl: ./home\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "defaultUrl": "./home"\n  }\n}\n')))),(0,l.kt)("h3",{id:"shared"},(0,l.kt)("inlineCode",{parentName:"h3"},"shared")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Shared {\n  properties?: Record<string, unknown>\n} \n")))),(0,l.kt)("p",null,"Properties injected by ",(0,l.kt)("micro-lc",null)," into all registered ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels"},"parcels"),",\n",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#custom-error-pages"},"custom error pages"),", and\n",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#interpolated-properties"},"composed DOM elements"),"."),(0,l.kt)("p",null,"Parcel applications and custom error pages of type parcel can access shared properties in\n",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels#properties"},"lifecycle methods"),". Web components of composed applications, error\npages of type compose, and constructed layout will find shared properties as\n",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#interpolated-properties"},"interpolated properties"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"shared:\n  properties:\n    client-key: some_client_key\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "shared": {\n    "properties": {\n      "client-key": "some_client_key"\n  }\n}\n')))),(0,l.kt)("h3",{id:"importmap"},(0,l.kt)("inlineCode",{parentName:"h3"},"importmap")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("p",null,"Global ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/reuse-third-party-libraries"},"import map"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"importmap:\n  imports:\n    react: https://esm.sh/react@next\n    react-dom: https://esm.sh/react-dom@next\n  scopes:\n    https://esm.sh/react-dom@next:\n      /client: https://esm.sh/react-dom@next/client\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "importmap": {\n    "imports": {\n      "react": "https://esm.sh/react@next",\n      "react-dom": "https://esm.sh/react-dom@next"\n    },\n    "scopes": {\n      "https://esm.sh/react-dom@next": {\n        "/client": "https://esm.sh/react-dom@next/client"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("h3",{id:"layout"},(0,l.kt)("inlineCode",{parentName:"h3"},"layout")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")),(0,l.kt)("li",{parentName:"ul"},"Default:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"layout:\n  content:\n    tag: slot\n")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"Application layout")," DOM configuration."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"layout:\n  content:\n    - tag: div\n      attributes:\n        class: layout-container\n        content:\n          - tag: div\n            attributes:\n              class: side-bar\n          - tag: slot\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "layout": {\n    "content": [\n      {\n        "tag": "div",\n        "attributes": {\n          "class": "layout-container",\n          "content": [\n            {\n              "tag": "div",\n              "attributes": {\n                "class": "side-bar"\n              }\n            },\n            {\n              "tag": "slot"\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n')))),(0,l.kt)("h3",{id:"applications"},(0,l.kt)("inlineCode",{parentName:"h3"},"applications")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("p",null,"Map of ",(0,l.kt)("a",{parentName:"p",href:"../docs/guides/applications"},"mounted applications"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"applications:\n  home:\n    integrationMode: parcel\n    entry: https://my-static-server/home-parcel.html\n    route: ./home\n"))),(0,l.kt)(i.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "applications": {\n    "home": {\n      "integrationMode": "parcel",\n      "entry": "https://my-static-server/home-parcel.html",\n      "route": "./home"\n    }\n  }\n}\n')))))}f.isMDXComponent=!0}}]);