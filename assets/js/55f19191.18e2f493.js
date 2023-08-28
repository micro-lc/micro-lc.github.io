"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),o=n(34334),a=n(53791),c=n(39960),i=n(13919),l=n(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){var t=e.href,n=e.children;return r.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},n)}function m(e){var t=e.href,n=e.icon,a=e.title,c=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},n," ",a),c&&r.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:c},c))}function p(e){var t,n=e.item,o=(0,a.Wl)(n);return o?r.createElement(m,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function u(e){var t,n,o=e.item,c=(0,i.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=o.docId)?t:void 0);return r.createElement(m,{href:o.href,icon:c,title:o.label,description:null!=(n=o.description)?n:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,n=(0,a.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){var t=e.items,n=e.className;if(!t)return r.createElement(y,e);var c=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e}))})))}},36803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=n(52991),i=["components"],l={title:"Components",description:"Web components catalogue"},s=void 0,d={unversionedId:"add-ons/components/index",id:"add-ons/components/index",title:"Components",description:"Web components catalogue",source:"@site/docs/add-ons/components/index.md",sourceDirName:"add-ons/components",slug:"/add-ons/components/",permalink:"/add-ons/components/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/add-ons/components/index.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",frontMatter:{title:"Components",description:"Web components catalogue"},sidebar:"add-ons",next:{title:"\ud83d\uddbc microfrontend-loader",permalink:"/add-ons/components/microfrontend-loader"}},m={},p=[],u={toc:p},f="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A curated catalogue of ready-to-use web components for your ",(0,a.kt)("micro-lc",null)," ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"composable applications"),"."),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);