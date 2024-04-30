"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(b,s(s({ref:t},p),{},{components:n})):o.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var o=n(87462),r=n(63366),a=n(67294),s=n(3905),i=["components"],c={title:"Step 2: Compose Less By Reusing",description:"tutorial step to introduce webcomponents as mfe fine graining",sidebar_label:"Step 2: Compose Less By Reusing",sidebar_position:20},l=void 0,p={unversionedId:"docs/compose-your-frontend/compose-less-by-reusing",id:"docs/compose-your-frontend/compose-less-by-reusing",title:"Step 2: Compose Less By Reusing",description:"tutorial step to introduce webcomponents as mfe fine graining",source:"@site/docs/docs/compose-your-frontend/02-compose-less-by-reusing.md",sourceDirName:"docs/compose-your-frontend",slug:"/docs/compose-your-frontend/compose-less-by-reusing",permalink:"/docs/compose-your-frontend/compose-less-by-reusing",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/compose-your-frontend/02-compose-less-by-reusing.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:20,frontMatter:{title:"Step 2: Compose Less By Reusing",description:"tutorial step to introduce webcomponents as mfe fine graining",sidebar_label:"Step 2: Compose Less By Reusing",sidebar_position:20},sidebar:"docs",previous:{title:"Step 1: How To Compose",permalink:"/docs/compose-your-frontend/how-to-compose"},next:{title:"Step 3: Layout",permalink:"/docs/compose-your-frontend/layout"}},u={},m=[{value:"Web Components",id:"web-components",level:2},{value:"Properties",id:"properties",level:2},{value:"Libraries",id:"libraries",level:2}],d={toc:m},b="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)(b,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Let's talk about webcomponents."),(0,s.kt)("h2",{id:"web-components"},"Web Components"),(0,s.kt)("p",null,"Think of web components as:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"webcomponent = fragment of HTML + JavaScript business logic")),(0,s.kt)("p",null,"Interestingly, neither of the two elements is obligatory."),(0,s.kt)("p",null,"Most of the time, web components manifest as an IIFE (Immediately Invoked Function Expression) JavaScript file or result from the side effects of a JavaScript script file. Once defined, they empower the browser with custom HTML tags."),(0,s.kt)("p",null,"To begin, let's create one and integrate it into ",(0,s.kt)("micro-lc",null),". Draft a file named custom-button.js:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=custom-button.js",title:"custom-button.js"},"class CustomButton extends HTMLElement {\n  connectedCallback() {\n    const shadowDom = this.attachShadow({mode: 'open'})\n    const slot = this.ownerDocument.createElement('slot')\n    const button = this.ownerDocument.createElement('button')\n\n    button.onclick = () => window.open('https://micro-lc.io/', {target: '_blank'})\n\n    button.appendChild(slot)\n    shadowDom.appendChild(button)\n  }\n}\n\ncustomElements.define('custom-button', CustomButton)\n")),(0,s.kt)("p",null,"Next, convert the script to a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs"},"data protocol")," version:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'echo "data:text/javascript;base64,$(base64 -w 0 custom-button.js)"\n')),(0,s.kt)("p",null,"Then, incorporate this script into our composition context:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 2,\n  "applications": {\n    "home": {\n      "integrationMode": "compose",\n      "route": "/",\n      "config": {\n        "content": {...},\n        "sources": [\n          \ud83d\udc48 paste the string here\n        ]\n      }\n    }\n  }\n}\n')),(0,s.kt)("p",null,"After clicking ",(0,s.kt)("inlineCode",{parentName:"p"},"Apply"),", there might not be any noticeable changes. However, the custom-button tag is now recognized by the browser."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"To verify, run the following in your browser's console:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"console.assert(typeof customElements.get('custom-button') !== undefined)\n"))),(0,s.kt)("p",null,"Now, replace the anchor tag we've previously used in the composition context:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tag": "div",\n  "attributes": {...},\n  "content": [\n    {\n      ... \ud83d\udc48 img tag\n    },\n    {\n      "tag": "custom-button",\n      "content": "Go to official documentation"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"A tangible button with the label ",(0,s.kt)("inlineCode",{parentName:"p"},"Go to official documentation")," will appear, embedded with logic to open a new tab directed to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://micro-lc.io/"),"."),(0,s.kt)(a.Fragment,null),(0,s.kt)("tutorial-frame",{configuration:{version:2,applications:{home:{integrationMode:"compose",route:"/",config:{content:{tag:"div",attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px; font-family: Arial;"},content:[{tag:"img",attributes:{alt:"logo",src:"https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"}},{tag:"custom-button",content:"Go to official documentation"}]},sources:["data:text/javascript;base64,Y2xhc3MgQ3VzdG9tQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQgewogIGNvbm5lY3RlZENhbGxiYWNrKCkgewogICAgY29uc3Qgc2hhZG93RG9tID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSkKICAgIGNvbnN0IHNsb3QgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpCiAgICBjb25zdCBidXR0b24gPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykKCiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL21pY3JvLWxjLmlvLycsIHsgdGFyZ2V0OiAnX2JsYW5rJyB9KQoKICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzbG90KQogICAgc2hhZG93RG9tLmFwcGVuZENoaWxkKGJ1dHRvbikKICB9Cn0KCmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY3VzdG9tLWJ1dHRvbicsIEN1c3RvbUJ1dHRvbikK"]}}}}}),(0,s.kt)("p",null,"To enhance the reusability of our component, make minor tweaks to custom-button.js:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=custom-button.js",title:"custom-button.js"},"class CustomButton extends HTMLElement {\n  connectedCallback() {\n    const shadowDom = this.attachShadow({mode: 'open'})\n    const slot = this.ownerDocument.createElement('slot')\n    const button = this.ownerDocument.createElement('button')\n\n    // \ud83d\udc47 here\n    button.onclick = () => this.url && window.open(this.url, {target: '_blank'})\n\n    button.appendChild(slot)\n    shadowDom.appendChild(button)\n  }\n}\n\ncustomElements.define('custom-button', CustomButton)\n")),(0,s.kt)("p",null,"After re-encoding:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'echo "data:text/javascript;base64,$(base64 -w 0 custom-button.js)"\n')),(0,s.kt)("p",null,"Replace the preceding string in the sources field. After clicking ",(0,s.kt)("inlineCode",{parentName:"p"},"Apply"),", you'll notice that the button no longer functions as ",(0,s.kt)("inlineCode",{parentName:"p"},"this.url")," remains undefined."),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("p",null,"Until now, our composition has permitted defining tags, attributes, and content/children. It does more than a mere HTML-to-JSON translation; it also supports JavaScript property injection:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tag": "div",\n  "attributes": {...},\n  "content": [\n    {\n      ... \ud83d\udc48 img tag\n    },\n    {\n      "tag": "custom-button",\n      "properties": {\n        "url": "https://micro-lc.io/"\n      },\n      "content": "Go to official documentation"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Clicking on the button now will lead you to ",(0,s.kt)("a",{parentName:"p",href:"https://micro-lc.io/"},"https://micro-lc.io/"),". Success!"),(0,s.kt)("h2",{id:"libraries"},"Libraries"),(0,s.kt)("p",null,"The data protocol serves us well, especially in contexts lacking a web server. However, in real-world scenarios where you're serving your ",(0,s.kt)("micro-lc",null)," infused webpage, it might be more practical to bundle and package ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/reuse-third-party-libraries"},"libraries")," with tools like ",(0,s.kt)("a",{parentName:"p",href:"https://vitejs.dev"},"vite")," or ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),". The sources field can handle any valid URL, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"/assets/my-webcomponent-library.js"),"."),(0,s.kt)("p",null,"For instance, there's an online web component library:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-url"},"https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js\n")),(0,s.kt)("p",null,"Among its several components, the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.mia-platform.eu/docs/business_suite/backoffice/components/buttons"},(0,s.kt)("inlineCode",{parentName:"a"},"bk-button"))," seems tailor-made for our needs."),(0,s.kt)("p",null,"Make the necessary replacements and then utilize bk-button instead of custom-button:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "tag": "div",\n    "content": [\n      {\n        ... \ud83d\udc48 img tag\n      },\n      {\n        "tag": "bk-button",\n        "properties": {\n          "content": "Go to official documentation",\n          "action": {\n            "type": "href",\n            "config": {\n              "href": "https://micro-lc.io/",\n              "target": "_blank"\n            }\n          }\n        }\n      }\n    ]\n  },\n  "sources": [\n    // \ud83d\udc47 here\n    "https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js"\n  ]\n}\n')),(0,s.kt)(a.Fragment,null),(0,s.kt)("tutorial-frame",{configuration:{version:2,applications:{home:{integrationMode:"compose",route:"/",config:{content:{tag:"div",attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px; font-family: Arial;"},content:[{tag:"img",attributes:{alt:"logo",src:"https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"}},{tag:"bk-button",properties:{content:"Go to official documentation",action:{type:"href",config:{href:"https://micro-lc.io/",target:"_blank"}}}}]},sources:["https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js"]}}}}}),(0,s.kt)("p",null,"As we wrap up this tutorial, let's venture into crafting an engaging website layout..."))}g.isMDXComponent=!0}}]);