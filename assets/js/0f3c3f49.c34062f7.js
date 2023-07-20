"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6945],{55858:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(76687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(855),i=n(55659),o=(n(76687),n(55858)),r=["components"],l={title:"Routing",description:"micro-lc approach to routing",sidebar_label:"Routing",sidebar_position:30},p=void 0,c={unversionedId:"docs/guides/routing",id:"docs/guides/routing",title:"Routing",description:"micro-lc approach to routing",source:"@site/docs/docs/guides/routing.md",sourceDirName:"docs/guides",slug:"/docs/guides/routing",permalink:"/docs/guides/routing",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/routing.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",sidebarPosition:30,frontMatter:{title:"Routing",description:"micro-lc approach to routing",sidebar_label:"Routing",sidebar_position:30},sidebar:"docs",previous:{title:"Layout",permalink:"/docs/guides/layout"},next:{title:"Applications",permalink:"/docs/guides/applications/"}},s={},u=[{value:"Pattern matching",id:"pattern-matching",level:2}],m={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Routing refers to the logic ",(0,o.kt)("micro-lc",null)," applies when choosing which micro-frontend should be loaded in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/separation-of-concerns"},"dynamic section")," of the application based on the current URL."),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"./applications"},"registered application")," has to ",(0,o.kt)("strong",{parentName:"p"},"declare its route"),", which must be a valid URL pathname\nor an URL in combination with parametric values prepended with a colon (:) like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/home"),(0,o.kt)("li",{parentName:"ul"},"/home/accessible/"),(0,o.kt)("li",{parentName:"ul"},"/my-awesome-application/"),(0,o.kt)("li",{parentName:"ul"},"./application"),(0,o.kt)("li",{parentName:"ul"},"./:user/profile"),(0,o.kt)("li",{parentName:"ul"},"./application/:id/details/"),(0,o.kt)("li",{parentName:"ul"},"./react-application/about")),(0,o.kt)("p",null,"Parametric values must start with a colon and must contain only letters (uppercase or lowercase)\nwith no whitespaces. Upon pattern matching evaluation will match any valid pathname part (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"/\\/([^/#?]+)/"),")"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Absolute paths do not interact with any ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"},(0,o.kt)("em",{parentName:"a"},"base")," tag"),"\nprovided into your main HTML page, while relative paths do.")),(0,o.kt)("h2",{id:"pattern-matching"},"Pattern matching"),(0,o.kt)("p",null,"When browsing, ",(0,o.kt)("micro-lc",null)," router attempts to match the current\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/href"},"URL ",(0,o.kt)("inlineCode",{parentName:"a"},"href"))," with any given registered application. The\nmatching returns at most three possible outcomes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the ",(0,o.kt)("strong",{parentName:"li"},"exact match"),", if any, which is the longest regexp match found amongst applications ",(0,o.kt)("inlineCode",{parentName:"li"},"route")," property,"),(0,o.kt)("li",{parentName:"ol"},"the ",(0,o.kt)("strong",{parentName:"li"},"exact match with a trailing slash"),", if any, which is the same as before with a trailing slash,"),(0,o.kt)("li",{parentName:"ol"},"the ",(0,o.kt)("strong",{parentName:"li"},"default match"),", as a fallback, if any, that enters the game only if URL is requesting the base path and a\ndefault was specified with configuration key ",(0,o.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#defaulturl"},(0,o.kt)("inlineCode",{parentName:"a"},"settings.defaultUrl")),".")),(0,o.kt)("p",null,"The list displays the matching priority: the first who matches will be rendered, otherwise a ",(0,o.kt)("strong",{parentName:"p"},"404 error page")," will be\nshown."),(0,o.kt)("p",null,"To better understand the algorithm, consider, the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},"settings:\n  defaultUrl: /home\n\napplications:\n  home:\n    # ...rest of the application config\n    route: /home,\n\n  about:\n    # ...rest of the application config\n    route: /about,\n\n  about-details:\n    # ...rest of the application config\n    route: /about/details,\n\n  router-app:\n    # ...rest of the application config\n    route: /application/,\n")),(0,o.kt)("p",null,"Browsing to ",(0,o.kt)("inlineCode",{parentName:"p"},"/home")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/")," produces the same result: rendering the ",(0,o.kt)("inlineCode",{parentName:"p"},"home")," application.\nMoving to ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," \u2013 or equivalently to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.location.origin")," \u2013 will still render ",(0,o.kt)("inlineCode",{parentName:"p"},"home"),", since no match could be\nfound and ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.defaultUrl")," is declared to be ",(0,o.kt)("inlineCode",{parentName:"p"},"/home"),"."),(0,o.kt)("p",null,"When the client requires ",(0,o.kt)("inlineCode",{parentName:"p"},"/about/details"),", the longest match is given by the ",(0,o.kt)("inlineCode",{parentName:"p"},"about-details")," application, despite ",(0,o.kt)("inlineCode",{parentName:"p"},"/about"),"\nbeing also available (and this behaviour is the one enabling the ",(0,o.kt)("strong",{parentName:"p"},"construction of entire SPA-like applications")," using\n",(0,o.kt)("micro-lc",null)," router)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Due to their own dynamic nature, parametric values will not be included in the match length evaluation\nsince it would force the configuration to rely on parametric values which must have the same length")),(0,o.kt)("p",null,"Finally, when a router application is called, like browsing to ",(0,o.kt)("inlineCode",{parentName:"p"},"/application/")," the internal router of the application\nkicks in. If the browser navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"/application"),", no exact match is found, but a trailing slash is found on\n",(0,o.kt)("inlineCode",{parentName:"p"},"router-app")," matching ",(0,o.kt)("inlineCode",{parentName:"p"},"/application/"),". In this case ",(0,o.kt)("micro-lc",null)," replaces the history state with the previous\nroute and an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," at the end and routing resumes as before."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The user is responsible for creating a list of routes that do not overlap.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Trailing slash on URL path names is not mandatory. It makes sense that an application could be served without a trailing\nslash, like a ",(0,o.kt)("inlineCode",{parentName:"p"},"/home")," page or a ",(0,o.kt)("inlineCode",{parentName:"p"},"/about")," page. We do recommend to explicitly include the trailing slash on sub-applications\nthat carry a router, like a React application which might enjoy the slashed pathname like ",(0,o.kt)("inlineCode",{parentName:"p"},"/react-application/"),".")),(0,o.kt)("p",null,"This chain of matching allows to both ",(0,o.kt)("strong",{parentName:"p"},"replicate on the frontend the logic of a static server")," (first it tries the uri,\nthen the uri with an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"/index.html"),", then 404 error page), and to ",(0,o.kt)("strong",{parentName:"p"},"build an application with subpages"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The presence of a ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," tag on ",(0,o.kt)("micro-lc",null)," HTML page, with ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," attribute different from ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", must be taken\ninto account when designing application ",(0,o.kt)("inlineCode",{parentName:"p"},"route")," properties. Namely, making all application ",(0,o.kt)("inlineCode",{parentName:"p"},"route"),"s relative with an\ninitial ",(0,o.kt)("inlineCode",{parentName:"p"},"./")," should be enough to ensure routing."),(0,o.kt)("p",{parentName:"admonition"},"Routes do not depend on the current URL ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," of the browser but are computed once and for all according to the document\n",(0,o.kt)("inlineCode",{parentName:"p"},"baseURI")," when the configuration is passed to ",(0,o.kt)("micro-lc",null),". Keep in mind that ",(0,o.kt)("inlineCode",{parentName:"p"},"baseURI")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," of a\n",(0,o.kt)("inlineCode",{parentName:"p"},"base")," tag, if any, or the current window location.")))}h.isMDXComponent=!0}}]);