"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2385],{5858:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||c;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},212:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(6687),o=n(4923),c=n(6967),a=n(7899),i=n(6752),s=n(9586);const l="cardContainer_GGLh",m="cardTitle_gVTD",p="cardDescription_JGLR";function u(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function d(e){var t=e.href,n=e.icon,c=e.title,a=e.description;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:c},n," ",c),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",p),title:a},a))}function f(e){var t=e.item,n=(0,c.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,o=(0,i.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(d,{href:n.href,icon:o,title:n.label,description:null==a?void 0:a.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.className,n=(0,c.jA)();return r.createElement(v,{items:n.items,className:t})}function v(e){var t=e.items,n=e.className;if(!t)return r.createElement(h,e);var a=(0,c.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e}))})))}},8843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var r=n(6428),o=n(8920),c=(n(6687),n(5858)),a=n(212),i=["components"],s={title:"Concepts",description:"Learn more about the most important micro-lc concepts"},l=void 0,m={unversionedId:"docs/concepts/index",id:"docs/concepts/index",title:"Concepts",description:"Learn more about the most important micro-lc concepts",source:"@site/docs/docs/concepts/index.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/",permalink:"/documentation/docs/concepts/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/concepts/index.md",tags:[],version:"current",lastUpdatedBy:"Edoardo Pessina",frontMatter:{title:"Concepts",description:"Learn more about the most important micro-lc concepts"},sidebar:"docs",previous:{title:"Getting started",permalink:"/documentation/docs/getting-started"},next:{title:"Separation of concerns",permalink:"/documentation/docs/concepts/separation-of-concerns"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Learn more about the most important ",(0,c.kt)("micro-lc",null)," concepts!"),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);