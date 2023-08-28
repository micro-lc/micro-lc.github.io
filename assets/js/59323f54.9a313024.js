"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),i=r(34334),c=r(53791),a=r(39960),o=r(13919),l=r(95999);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",p.cardContainer)},r)}function m(e){var t=e.href,r=e.icon,c=e.title,a=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",p.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",p.cardDescription),title:a},a))}function u(e){var t,r=e.item,i=(0,c.Wl)(r);return i?n.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function d(e){var t,r,i=e.item,a=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(m,{href:i.href,icon:a,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}},61030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),i=r(63366),c=(r(67294),r(3905)),a=r(52991),o=["components"],l={title:"micro-lc API",description:"micro-lc API"},p=void 0,s={unversionedId:"api/micro-lc-api/index",id:"api/micro-lc-api/index",title:"micro-lc API",description:"micro-lc API",source:"@site/docs/api/micro-lc-api/index.md",sourceDirName:"api/micro-lc-api",slug:"/api/micro-lc-api/",permalink:"/api/micro-lc-api/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/api/micro-lc-api/index.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",frontMatter:{title:"micro-lc API",description:"micro-lc API"},sidebar:"api",previous:{title:"micro-lc web component",permalink:"/api/micro-lc-web-component"},next:{title:"Application state",permalink:"/api/micro-lc-api/application-state"}},m={},u=[],d={toc:u},f="wrapper";function y(e){var t=e.components,r=(0,i.Z)(e,o);return(0,c.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("micro-lc",null)," injects an API into each element composing the layout and as property of all applications rendered as content\n(you can read a detailed explanation ",(0,c.kt)("a",{parentName:"p",href:"/docs/concepts/communication#micro-lc-api"},"in the dedicated section"),")."),(0,c.kt)("p",null,"The API can be logically clustered into the following sections."),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);