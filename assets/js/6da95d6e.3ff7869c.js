"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5245],{55858:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(76687);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,k=s["".concat(d,".").concat(m)]||s[m]||c[m]||a;return n?i.createElement(k,r(r({ref:t},u),{},{components:n})):i.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var i=n(557),l=n(61551),a=(n(76687),n(55858)),r=["components"],o={},d="CHANGELOG",p={unversionedId:"docs/CHANGELOG",id:"docs/CHANGELOG",title:"CHANGELOG",description:"All notable changes to this project will be documented in this file.",source:"@site/docs/docs/CHANGELOG.md",sourceDirName:"docs",slug:"/docs/CHANGELOG",permalink:"/docs/CHANGELOG",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/CHANGELOG.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",frontMatter:{},sidebar:"docs",previous:{title:"Migrating from V1",permalink:"/docs/migrating-from-v1"}},u={},s=[{value:"Fixed",id:"fixed",level:3},{value:"2.0.6 - 2023-03-28",id:"206---2023-03-28",level:2},{value:"Fixed",id:"fixed-1",level:3},{value:"Versioning",id:"versioning",level:3},{value:"2.0.5 - 2023-03-09",id:"205---2023-03-09",level:2},{value:"Fixed",id:"fixed-2",level:3},{value:"2.0.4 - 2023-03-07",id:"204---2023-03-07",level:2},{value:"Versioning",id:"versioning-1",level:3},{value:"Fixed",id:"fixed-3",level:3},{value:"2.0.3 - 2023-03-07",id:"203---2023-03-07",level:2},{value:"Fixed",id:"fixed-4",level:3},{value:"Versioning",id:"versioning-2",level:3},{value:"Added",id:"added",level:3},{value:"2.0.2 - 2023-02-09",id:"202---2023-02-09",level:2},{value:"Fixed",id:"fixed-5",level:3},{value:"2.0.1 - 2023-01-24",id:"201---2023-01-24",level:2},{value:"Added",id:"added-1",level:3},{value:"Fixed",id:"fixed-6",level:3},{value:"Versioning",id:"versioning-3",level:3},{value:"2.0.0 - 2022-12-12",id:"200---2022-12-12",level:2},{value:"0.3.0 - 2022-11-28",id:"030---2022-11-28",level:2},{value:"Added",id:"added-2",level:3},{value:"Versioning",id:"versioning-4",level:3},{value:"0.2.5 - 2022-11-26",id:"025---2022-11-26",level:2},{value:"Added",id:"added-3",level:3},{value:"Versioning",id:"versioning-5",level:3},{value:"0.2.4 - 2022-11-11",id:"024---2022-11-11",level:2}],c={toc:s},m="wrapper";function k(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"CHANGELOG"),(0,a.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,a.kt)("p",null,"The format is based on ",(0,a.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),",\nand this project adheres to ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),"."),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parcel")," application can be set using the ",(0,a.kt)("inlineCode",{parentName:"li"},'{"html": "<path>"}')," construct")),(0,a.kt)("h2",{id:"206---2023-03-28"},"[2.0.6]"," - 2023-03-28"),(0,a.kt)("h3",{id:"fixed-1"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fix to ",(0,a.kt)("inlineCode",{parentName:"li"},"cve-2022-3970")," in docker container by updating ",(0,a.kt)("inlineCode",{parentName:"li"},"tiff")," dependency")),(0,a.kt)("h3",{id:"versioning"},"Versioning"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Development dependencies updated"),(0,a.kt)("li",{parentName:"ul"},"Typescript set to ",(0,a.kt)("inlineCode",{parentName:"li"},"^5.0.2")," with yarn ",(0,a.kt)("inlineCode",{parentName:"li"},"3.5.0"))),(0,a.kt)("h2",{id:"205---2023-03-09"},"[2.0.5]"," - 2023-03-09"),(0,a.kt)("h3",{id:"fixed-2"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shared")," properties and microlcApi extensions are persisted in ",(0,a.kt)("inlineCode",{parentName:"li"},"compose")," applications across mount and unmount cycles")),(0,a.kt)("h2",{id:"204---2023-03-07"},"[2.0.4]"," - 2023-03-07"),(0,a.kt)("h3",{id:"versioning-1"},"Versioning"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nginx")," alpine bumped to v1.23.3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"devel-kit")," bumped to v0.3.2")),(0,a.kt)("h3",{id:"fixed-3"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"qiankun")," is not bundled as its own chunk, to prevent faulty behavior on resources loading"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"libcurl")," CVEs mitigation")),(0,a.kt)("h2",{id:"203---2023-03-07"},"[2.0.3]"," - 2023-03-07"),(0,a.kt)("h3",{id:"fixed-4"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"assets naming do not include a hash")),(0,a.kt)("h3",{id:"versioning-2"},"Versioning"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Development dependencies updated"),(0,a.kt)("li",{parentName:"ul"},"Typescript set to ",(0,a.kt)("inlineCode",{parentName:"li"},"^4.9.5")," with yarn ",(0,a.kt)("inlineCode",{parentName:"li"},"3.4.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"qiankun")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"^2.9.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"qiankun")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"^2.9.1"))),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onload")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"micro-lc")," is called after a successful reroute")),(0,a.kt)("h2",{id:"202---2023-02-09"},"[2.0.2]"," - 2023-02-09"),(0,a.kt)("h3",{id:"fixed-5"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"compose")," applications live in a body made by a ",(0,a.kt)("inlineCode",{parentName:"li"},"div")," tag with CSS class ",(0,a.kt)("inlineCode",{parentName:"li"},"composer-body"))),(0,a.kt)("h2",{id:"201---2023-01-24"},"[2.0.1]"," - 2023-01-24"),(0,a.kt)("h3",{id:"added-1"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"compose")," integration mode is scoped to allow the presence of a ",(0,a.kt)("inlineCode",{parentName:"li"},"qiankun-head")," tag"),(0,a.kt)("li",{parentName:"ul"},"applications ",(0,a.kt)("inlineCode",{parentName:"li"},"route")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," fields, when representing URLs, are computed wrt ",(0,a.kt)("inlineCode",{parentName:"li"},"document.baseURI"))),(0,a.kt)("h3",{id:"fixed-6"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fixed bug on route matching"),(0,a.kt)("li",{parentName:"ul"},"assets renaming removed hash for error pages (401, 404, and 500) + composer application bundle")),(0,a.kt)("h3",{id:"versioning-3"},"Versioning"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Development dependencies updated"),(0,a.kt)("li",{parentName:"ul"},"Typescript set to ",(0,a.kt)("inlineCode",{parentName:"li"},"^4.9.4")," with yarn ",(0,a.kt)("inlineCode",{parentName:"li"},"3.3.1")),(0,a.kt)("li",{parentName:"ul"},"Typescript is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"4.9.3")," due to yarn berry temporary incompatibility"),(0,a.kt)("li",{parentName:"ul"},"Direct dependencies ",(0,a.kt)("inlineCode",{parentName:"li"},"rxjs")," was updated")),(0,a.kt)("h2",{id:"200---2022-12-12"},"[2.0.0]"," - 2022-12-12"),(0,a.kt)("h2",{id:"030---2022-11-28"},"[0.3.0]"," - 2022-11-28"),(0,a.kt)("h3",{id:"added-2"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"url pattern matching extended to parametric values"),(0,a.kt)("li",{parentName:"ul"},"layout sidebar accepts multiple applications per item to mock a SPA folder structure")),(0,a.kt)("h3",{id:"versioning-4"},"Versioning"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Development dependencies version bumps")),(0,a.kt)("h2",{id:"025---2022-11-26"},"[0.2.5]"," - 2022-11-26"),(0,a.kt)("h3",{id:"added-3"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for ",(0,a.kt)("inlineCode",{parentName:"li"},"srcdoc")," attributes on iframes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playground")," has an example of direct use of composer in browser"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playground")," has an example of programmatic use of ",(0,a.kt)("inlineCode",{parentName:"li"},"micro-lc")," tag mount as the result of a composition")),(0,a.kt)("h3",{id:"versioning-5"},"Versioning"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Development dependencies version bumps")),(0,a.kt)("h2",{id:"024---2022-11-11"},"[0.2.4]"," - 2022-11-11"))}k.isMDXComponent=!0}}]);