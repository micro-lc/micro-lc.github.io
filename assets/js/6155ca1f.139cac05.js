"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2385],{55858:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(76687);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(r),d=c,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:c,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66448:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(76687),c=r(64923),o=r(48145),i=r(29139),a=r(67387),s=r(96902);const l={cardContainer:"cardContainer__MZX",cardTitle:"cardTitle_c_ZQ",cardDescription:"cardDescription_CYPu"};function p(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",l.cardContainer)},r)}function m(e){var t=e.href,r=e.icon,o=e.title,i=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:i},i))}function u(e){var t,r=e.item,c=(0,o.Wl)(r);return c?n.createElement(m,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function d(e){var t,r,c=e.item,i=(0,a.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(m,{href:c.href,icon:i,title:c.label,description:null!=(r=c.description)?r:null==s?void 0:s.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var i=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}},90662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(557),c=r(61551),o=(r(76687),r(55858)),i=r(66448),a=["components"],s={title:"Concepts",description:"Learn more about the most important micro-lc concepts"},l=void 0,p={unversionedId:"docs/concepts/index",id:"docs/concepts/index",title:"Concepts",description:"Learn more about the most important micro-lc concepts",source:"@site/docs/docs/concepts/index.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/",permalink:"/docs/concepts/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/concepts/index.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",frontMatter:{title:"Concepts",description:"Learn more about the most important micro-lc concepts"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Separation of concerns",permalink:"/docs/concepts/separation-of-concerns"}},m={},u=[],d={toc:u},f="wrapper";function y(e){var t=e.components,r=(0,c.Z)(e,a);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Learn more about the most important ",(0,o.kt)("micro-lc",null)," concepts!"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);