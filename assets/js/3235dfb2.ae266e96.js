"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,f=u["".concat(d,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(34334),o=n(53791),i=n(39960),c=n(13919),d=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function u(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(s,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){var t,n=e.item,a=(0,o.Wl)(n);return a?r.createElement(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function p(e){var t,n,a=e.item,i=(0,c.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",d=(0,o.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(u,{href:a.href,icon:i,title:a.label,description:null!=(n=a.description)?n:null==d?void 0:d.description})}function f(e){var t=e.item;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(y,e);var i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e}))})))}},467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(52991),c=["components"],d={title:"Backend solutions",description:"Backend middlewares for configurations serving"},l=void 0,s={unversionedId:"add-ons/backend/index",id:"add-ons/backend/index",title:"Backend solutions",description:"Backend middlewares for configurations serving",source:"@site/docs/add-ons/backend/index.md",sourceDirName:"add-ons/backend",slug:"/add-ons/backend/",permalink:"/add-ons/backend/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/add-ons/backend/index.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",frontMatter:{title:"Backend solutions",description:"Backend middlewares for configurations serving"},sidebar:"add-ons",previous:{title:"\ud83d\uddbc mlc-antd-theme-manager",permalink:"/add-ons/components/mlc-antd-theme-manager"},next:{title:"\ud83d\udee0 Middleware",permalink:"/add-ons/backend/middleware"}},u={},m=[],p={toc:m},f="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A curated catalogue of ready-to-use web backend solutions and middlewares to serve and manipulate configurations."),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);