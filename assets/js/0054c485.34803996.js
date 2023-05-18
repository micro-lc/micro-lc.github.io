"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8569],{55858:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var i=n(48792),r=n(91219),a=n(76687),o=n(55858),s=["components"],l={title:"iFrames",description:"Nested browsing contexts",sidebar_label:"iFrames",sidebar_position:10},p=void 0,c={unversionedId:"docs/guides/applications/iframes",id:"docs/guides/applications/iframes",title:"iFrames",description:"Nested browsing contexts",source:"@site/docs/docs/guides/applications/iframes.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/iframes",permalink:"/docs/guides/applications/iframes",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/iframes.md",tags:[],version:"current",lastUpdatedBy:"epessina",sidebarPosition:10,frontMatter:{title:"iFrames",description:"Nested browsing contexts",sidebar_label:"iFrames",sidebar_position:10},sidebar:"docs",previous:{title:"Applications",permalink:"/docs/guides/applications/"},next:{title:"Compose",permalink:"/docs/guides/applications/compose"}},d={},m=[{value:"Usage",id:"usage",level:2}],u={toc:m},f="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(f,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When an ",(0,o.kt)("strong",{parentName:"p"},"iframe integrated")," application is configured, its context is rendered inside the ",(0,o.kt)("micro-lc",null)," mount\npoint as an ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"iframe tag"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be mindful that a website ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"},"cannot")," be embedded\nas an iFrame if it served with any ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," header and ",(0,o.kt)("micro-lc",null)," is not ",(0,o.kt)("inlineCode",{parentName:"p"},"SAMEORIGIN")," of the\nembedded iFrame. Attempting to do so will result in a console error like:"),(0,o.kt)("console-error-line",null,'The loading of "https://www.google.com/" in a frame is denied by "X-Frame-Options" directive set to "SAMEORIGIN"'),(0,o.kt)("p",{parentName:"admonition"},"When a website responds with a ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," header, the iFrame does not emit an ",(0,o.kt)("inlineCode",{parentName:"p"},"onerror")," event, hence\n",(0,o.kt)("micro-lc",null)," cannot redirect to an error page. The view then depends on the browser used to run the application.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Declare an application with integration mode ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," in ",(0,o.kt)("micro-lc",null)," configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'interface IFrameApplication {\n  integrationMode: "iframe"\n  route: string // Path on which the iFrame will be rendered\n  src?: string // iFrame src attribute value\n  srcdoc?: string // iFrame content\n  attributes?: Record<string, string> // Valid attributes of iframe HTML element\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"srcdoc")," are mirrors of the iframe attributes and will override any declaration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"attributes")," field.\nAnyway if unused, the declaration of ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"srcdoc")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"attributes")," is valid and will produce a working iframe."),(0,o.kt)(a.Fragment,null),(0,o.kt)("example-frame",{base:"/frames/guides/applications/iframes/standard",height:"550px",sourceTabs:[{filePath:"/index.html"},{filePath:"/config.json"},{filePath:"/config.yaml",isDefault:!0}],src:"/",title:"iFrame integration"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case of unknown embedding website, ",(0,o.kt)("inlineCode",{parentName:"p"},"srcdoc")," can be useful to inline your application html document")),(0,o.kt)(a.Fragment,null),(0,o.kt)("example-frame",{base:"/frames/guides/applications/iframes/inline",height:"550px",sourceTabs:[{filePath:"/index.html"},{filePath:"/config.json"},{filePath:"/config.yaml",isDefault:!0}],src:"/",title:"iFrame inline integration"}),(0,o.kt)("p",null,"By default, the style of an iFrame application is set to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"iframe {\n  width: inherit;\n  height: inherit;\n  border: none;\n}\n")),(0,o.kt)("p",null,"and can be overridden easily by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," attribute."))}g.isMDXComponent=!0}}]);