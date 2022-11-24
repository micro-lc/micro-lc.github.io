"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8569],{5858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(6428),i=n(8920),a=n(6687),o=n(5858),s=["components"],l={title:"iFrames",description:"Nested browsing contexts",sidebar_label:"iFrames",sidebar_position:10},c=void 0,p={unversionedId:"docs/guides/applications/iframes",id:"docs/guides/applications/iframes",title:"iFrames",description:"Nested browsing contexts",source:"@site/docs/docs/guides/applications/iframes.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/iframes",permalink:"/documentation/docs/guides/applications/iframes",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/iframes.md",tags:[],version:"current",lastUpdatedBy:"Edoardo Pessina",sidebarPosition:10,frontMatter:{title:"iFrames",description:"Nested browsing contexts",sidebar_label:"iFrames",sidebar_position:10},sidebar:"docs",previous:{title:"Applications",permalink:"/documentation/docs/guides/applications/"},next:{title:"Compose",permalink:"/documentation/docs/guides/applications/compose"}},d={},m=[{value:"Usage",id:"usage",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When an ",(0,o.kt)("strong",{parentName:"p"},"iframe integrated")," application is configured, its context is rendered inside the ",(0,o.kt)("micro-lc",null)," mount\npoint as an ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"iframe tag"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be mindful that a website ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"},"cannot")," be embedded\nas an iFrame if it served with any ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," header and ",(0,o.kt)("micro-lc",null)," is not ",(0,o.kt)("inlineCode",{parentName:"p"},"SAMEORIGIN")," of the\nembedded iFrame. Attempting to do so will result in a console error like:"),(0,o.kt)("console-error-line",null,'The loading of "https://www.google.com/" in a frame is denied by "X-Frame-Options" directive set to "SAMEORIGIN"'),(0,o.kt)("p",{parentName:"admonition"},"When a website responds with a ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," header, the iFrame does not emit an ",(0,o.kt)("inlineCode",{parentName:"p"},"onerror")," event, hence\n",(0,o.kt)("micro-lc",null)," cannot redirect to an error page. The view then depends on the browser used to run the application.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Declare an application with integration mode ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," in ",(0,o.kt)("micro-lc",null)," configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'interface IFrameApplication {\n  integrationMode: "iframe"\n  src: string // iFrame src attribute value\n  route: string // Path on which the iFrame will be rendered\n  attributes?: Record<string, unknown> // Valid attributes of iframe HTML element\n}\n')),(0,o.kt)(a.Fragment,null),(0,o.kt)("example-frame",{base:"../../../frames/guides/applications/iframes",height:"550px",sourceTabs:[{filePath:"/index.html"},{filePath:"/config.yaml",isDefault:!0}],src:"/",title:"iFrame integration"}),(0,o.kt)("p",null,"By default, the style of an iFrame application is set to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"iframe {\n  width: inherit;\n  height: inherit;\n  border: none;\n}\n")),(0,o.kt)("p",null,"and can be overridden easily by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," attribute."))}f.isMDXComponent=!0}}]);