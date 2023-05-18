"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8524],{55858:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var i=t(76687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?i.createElement(g,o(o({ref:n},s),{},{components:t})):i.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var i=t(48792),a=t(91219),r=(t(76687),t(55858)),o=["components"],l={id:"plugin_configuration",title:"Plugin configuration",sidebar_label:"Plugin configuration"},p=void 0,u={unversionedId:"docs/plugin_configuration",id:"version-1.0.0/docs/plugin_configuration",title:"Plugin configuration",description:"This section will explain the different kind of integration modes, and how to make them work.",source:"@site/versioned_docs/version-1.0.0/docs/plugin_configuration.md",sourceDirName:"docs",slug:"/docs/plugin_configuration",permalink:"/1.0.0/docs/plugin_configuration",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/plugin_configuration.md",tags:[],version:"1.0.0",lastUpdatedBy:"epessina",frontMatter:{id:"plugin_configuration",title:"Plugin configuration",sidebar_label:"Plugin configuration"},sidebar:"docs",previous:{title:"General configuration",permalink:"/1.0.0/docs/general_configuration"},next:{title:"Core plugins",permalink:"/1.0.0/docs/core_plugins"}},s={},c=[{value:"href plugin",id:"href-plugin",level:2},{value:"Iframe plugin",id:"iframe-plugin",level:2},{value:"Qiankun plugin",id:"qiankun-plugin",level:2},{value:"Plugin communication",id:"plugin-communication",level:3}],m={toc:c},d="wrapper";function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)(d,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section will explain the different kind of integration modes, and how to make them work."),(0,r.kt)("p",null,"If you don't know where to place them, we suggest reading ",(0,r.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_configuration"},"Core configuration")," first."),(0,r.kt)("h2",{id:"href-plugin"},"href plugin"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," plugin doesn't require any kind of adjustment to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"micro-lc"),"."),(0,r.kt)("p",null,"This is the simplest plugin that ",(0,r.kt)("inlineCode",{parentName:"p"},"micro-lc")," supports. It allows you to redirect the user to another page,\nusing the same window or a different one, thanks to the ",(0,r.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_configuration#samewindow"},"sameWindow")," property."),(0,r.kt)("h2",{id:"iframe-plugin"},"Iframe plugin"),(0,r.kt)("p",null,"To work properly, ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," needs the\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"},(0,r.kt)("inlineCode",{parentName:"a"},"X-Frame-Options"))," header:\nthis must be configured on the web server in which the frontend application is exposed."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For security reasons, we suggest configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"ALLOW-FROM"),", instead of using a wildcard.")),(0,r.kt)("p",null,"This kind of plugin allows you to include a website ",(0,r.kt)("strong",{parentName:"p"},"without changing its implementation"),".\nHowever, there are also has some limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"iframe")," ",(0,r.kt)("strong",{parentName:"li"},"can't")," access the ",(0,r.kt)("inlineCode",{parentName:"li"},"css variables")," provided by ",(0,r.kt)("inlineCode",{parentName:"li"},"micro-lc"),";"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"iframe")," ",(0,r.kt)("strong",{parentName:"li"},"doesn't")," support the properties injected by ",(0,r.kt)("inlineCode",{parentName:"li"},"micro-lc"),";"),(0,r.kt)("li",{parentName:"ul"},"inside an ",(0,r.kt)("inlineCode",{parentName:"li"},"iframe"),", it ",(0,r.kt)("strong",{parentName:"li"},"isn't")," possible to control the ",(0,r.kt)("inlineCode",{parentName:"li"},"micro-lc")," navigation flow.")),(0,r.kt)("p",null,"If you own the website to integrate, we advise you to use a ",(0,r.kt)("a",{parentName:"p",href:"#qiankun-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"Qiankun plugin")),"."),(0,r.kt)("h2",{id:"qiankun-plugin"},"Qiankun plugin"),(0,r.kt)("p",null,"To integrate this kind of plugins we rely on the ",(0,r.kt)("a",{parentName:"p",href:"https://qiankun.umijs.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"qiankun"))," solution,\nthat requires most attention on the developer side."),(0,r.kt)("p",null,"To integrate a ",(0,r.kt)("inlineCode",{parentName:"p"},"qiankun")," plugin with ",(0,r.kt)("inlineCode",{parentName:"p"},"micro-lc"),", you must adapt your web application following the steps described\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/umijs/qiankun/blob/master/docs/guide/tutorial.md#micro-app"},"here"),":\nthe right procedure depends on the framework used to build the website."),(0,r.kt)("p",null,"If you want to create ",(0,r.kt)("strong",{parentName:"p"},"a plugin from scratch using ",(0,r.kt)("inlineCode",{parentName:"strong"},"React")),", consider to use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mia-platform-marketplace/microlc-plugin-template"},"our template"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Depending on where you expose your plugin, you should configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," header."),(0,r.kt)("p",{parentName:"admonition"},"For security reasons, we discourage the use of a wildcard.")),(0,r.kt)("h3",{id:"plugin-communication"},"Plugin communication"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"qiankun")," plugin is able to ",(0,r.kt)("em",{parentName:"p"},"communicate")," with other ",(0,r.kt)("inlineCode",{parentName:"p"},"qiankun")," plugins, and to ",(0,r.kt)("em",{parentName:"p"},"navigate")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"qiankun")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," plugins just using\nthe standard ",(0,r.kt)("inlineCode",{parentName:"p"},"window.history.push")," functionality: the parameters between plugins can be shared using the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.location.search"),"."),(0,r.kt)("p",null,"An implementation example is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/micro-lc/blob/main/example/src/App.jsx#L24"},"GitHub"),",\nas you can see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let searchParams = new URLSearchParams(window.location.search);\n")),(0,r.kt)("p",null,"is used to parse the received parameters, while:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.history.pushState({}, `/${pluginRoute}`, `/${pluginRoute}?from=${from}`)\n")),(0,r.kt)("p",null,"is used to navigate to another plugin while it is passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," parameter."))}g.isMDXComponent=!0}}]);