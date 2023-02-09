"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2766],{55858:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(76687);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76080:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(76687),a=t(64923);const o="tabItem_EvUg";function i(e){var r=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},r)}},74404:(e,r,t)=>{t.d(r,{Z:()=>w});var n=t(7375),a=t(76687),o=t(64923),i=t(74840),l=t(18775),s=t(87233),u=t(78550),c=t(20242);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function d(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:p(t);return function(e){var r=(0,u.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function m(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function f(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId,o=(0,l.k6)(),i=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((function(e){if(i){var r=new URLSearchParams(o.location.search);r.set(i,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[i,o])]}function g(e){var r,t,n,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),g=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),h=g[0],v=g[1],b=f({queryString:s,groupId:u}),y=b[0],k=b[1],N=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Nk)(r),n=t[0],o=t[1],[n,(0,a.useCallback)((function(e){r&&o.set(e)}),[r,o])]),w=N[0],E=N[1],x=function(){var e=null!=y?y:w;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){x&&v(x)}),[x]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var h=t(8643);const v="tabList_zrX3",b="tabItem_td0b";function y(e){var r=e.className,t=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,t=c.indexOf(r),n=u[t].value;n!==l&&(p(r),s(n))},m=function(e){var r,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;t=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;t=null!=(o=c[i])?o:c[c.length-1]}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},u.map((function(e){var r=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,key:r,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===r})}),null!=t?t:r)})))}function k(e){var r=e.lazy,t=e.children,n=e.selectedValue;if(t=Array.isArray(t)?t:[t],r){var o=t.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function N(e){var r=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(y,(0,n.Z)({},e,r)),a.createElement(k,(0,n.Z)({},e,r)))}function w(e){var r=(0,h.Z)();return a.createElement(N,(0,n.Z)({key:String(r)},e))}},64442:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var n=t(7375),a=t(38374),o=t(76687),i=t(55858),l=t(74404),s=t(76080),u=["components"],c={title:"Error pages",description:"Applications to cover for errors",sidebar_label:"Error pages",sidebar_position:40},p=void 0,d={unversionedId:"docs/guides/applications/error-pages",id:"docs/guides/applications/error-pages",title:"Error pages",description:"Applications to cover for errors",source:"@site/docs/docs/guides/applications/error-pages.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/error-pages",permalink:"/docs/guides/applications/error-pages",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/error-pages.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:40,frontMatter:{title:"Error pages",description:"Applications to cover for errors",sidebar_label:"Error pages",sidebar_position:40},sidebar:"docs",previous:{title:"Parcels",permalink:"/docs/guides/applications/parcels"},next:{title:"Style",permalink:"/docs/guides/style"}},m={},f=[{value:"Default error pages",id:"default-error-pages",level:2},{value:"Custom error pages",id:"custom-error-pages",level:2},{value:"Lifecycle",id:"lifecycle",level:3}],g={toc:f};function h(e){var r=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Error pages are applications without a ",(0,i.kt)("strong",{parentName:"p"},"route"),", meaning that they will be mounted when something goes wrong ",(0,i.kt)("strong",{parentName:"p"},"fetching\nthe required application assets"),", when the requested application is ",(0,i.kt)("strong",{parentName:"p"},"not available or configured"),", or in response to\n",(0,i.kt)("strong",{parentName:"p"},"internal server errors"),"."),(0,i.kt)("h2",{id:"default-error-pages"},"Default error pages"),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," provides three default error pages matching errors ",(0,i.kt)("inlineCode",{parentName:"p"},"401"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"404"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"500"),". It displays ",(0,i.kt)("inlineCode",{parentName:"p"},"404")," when\nthe required route does not match a configured application, while ",(0,i.kt)("inlineCode",{parentName:"p"},"401")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"500")," are triggered on assets fetch errors\ncorresponding to ",(0,i.kt)("em",{parentName:"p"},"Unauthorized")," and ",(0,i.kt)("em",{parentName:"p"},"Internal Server Error")," respectively."),(0,i.kt)("admonition",{title:"Important Takeaway",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Unauthorized status must be fully managed by your Backend interface.")),(0,i.kt)(o.Fragment,null),(0,i.kt)("example-frame",{base:"../../../frames/guides/applications/error-pages",height:"550px",showSource:!1,src:"/",title:"404 error"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Default error pages primary color can be set by the ",(0,i.kt)("inlineCode",{parentName:"p"},"--micro-lc-primary-color")," global variable.")),(0,i.kt)("h2",{id:"custom-error-pages"},"Custom error pages"),(0,i.kt)("p",null,"To override default error pages, a ",(0,i.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#settings"},"dedicated section")," of\n",(0,i.kt)("micro-lc",null)," configuration is available. Under ",(0,i.kt)("inlineCode",{parentName:"p"},"settings"),", errors are divided into client errors (key ",(0,i.kt)("inlineCode",{parentName:"p"},"4xx"),")\nand server errors (key ",(0,i.kt)("inlineCode",{parentName:"p"},"5xx"),"). "),(0,i.kt)("p",null,"Error pages are then just regular applications without route, meaning that you can have ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels"},"parcels"),",\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"composed applications"),", and even ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/iframes"},"iFrames")," rendered in response to errors."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Displaying error pages can be triggered by ",(0,i.kt)("a",{parentName:"p",href:"/api/micro-lc-api/routing#gotoerrorpage"},(0,i.kt)("micro-lc",null)," API"),".")),(0,i.kt)(l.Z,{groupId:"configuration",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},"settings:\n  4xx:\n    401:\n      integrationMode: parcel\n      entry: https://my-static-server/custom-401-error-page.html\n    404:\n      integrationMode: iframe\n      src: https://my-website.com/\n  \n  5xx:\n    500:\n      integrationMode: compose\n      config:\n        tag: div\n        content: Ops, an error occurred!\n"))),(0,i.kt)(s.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "settings": {\n    "4xx": {\n      "401": {\n        "integrationMode": "parcel",\n        "entry": "https://my-static-server/custom-401-error-page.html"\n      },\n      "404": {\n        "integrationMode": "iframe",\n        "src": "https://my-website.com/"\n      }\n    },\n    "5xx": {\n      "500": {\n        "integrationMode": "compose",\n        "config": {\n          "tag": "div",\n          "content": "Ops, an error occurred!"\n        }\n      }\n    }\n  }\n}\n')))),(0,i.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,i.kt)("p",null,"When error pages are parcel applications, they have access to a slightly different version of\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels#lifecycle-methods"},"parcels lifecycle methods"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels#bootstrap"},(0,i.kt)("inlineCode",{parentName:"a"},"bootstrap")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels#mount"},(0,i.kt)("inlineCode",{parentName:"a"},"mount")),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels#unmount"},(0,i.kt)("inlineCode",{parentName:"a"},"unmount"))," methods\nhave arguments implementing the following interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ErrorPageLifecycleProps extends LifecycleProps {\n  message?: string\n  reason?: string\n}\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," is the primary error message, and ",(0,i.kt)("inlineCode",{parentName:"p"},"reason")," is the cause of the error."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use those extra properties for user feedback.")),(0,i.kt)("p",null,"On top of that, error pages have an extra ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels#update"},"update")," method, which is called when the page is already\nmounted but properties have changed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function update(props: { message?: string; reason?: string }): Promise<null> {\n  /* This is where you do updates */\n}\n")))}h.isMDXComponent=!0}}]);