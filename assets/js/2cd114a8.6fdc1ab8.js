"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6606],{55858:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79693:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(76687),r=n(64923);const l={tabItem:"tabItem_ZBuY"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},51948:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(48792),r=n(76687),l=n(64923),i=n(69031),o=n(65722),s=n(30),c=n(10792),u=n(12735);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function y(e){var t,n,a,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,c=e.groupId,d=p(e),y=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),g=y[0],f=y[1],b=h({queryString:s,groupId:c}),v=b[0],k=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=w[0],S=w[1],T=function(){var e=null!=v?v:N;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);f(e),k(e),S(e)}),[k,S,d]),tabValues:d}}var g=n(50221);const f={tabList:"tabList_VS4l",tabItem:"tabItem_fBsV"};function b(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==o&&(d(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var l,i=u.indexOf(e.currentTarget)-1;n=null!=(l=u[i])?l:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=y(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},7269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=n(48792),r=n(91219),l=(n(76687),n(55858)),i=n(51948),o=n(79693),s=["components"],c={title:"Style",description:"Application styling and theming",sidebar_label:"Style",sidebar_position:50},u=void 0,d={unversionedId:"docs/guides/style",id:"docs/guides/style",title:"Style",description:"Application styling and theming",source:"@site/docs/docs/guides/style.md",sourceDirName:"docs/guides",slug:"/docs/guides/style",permalink:"/docs/guides/style",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/style.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",sidebarPosition:50,frontMatter:{title:"Style",description:"Application styling and theming",sidebar_label:"Style",sidebar_position:50},sidebar:"docs",previous:{title:"Error pages",permalink:"/docs/guides/applications/error-pages"},next:{title:"Reuse third party libraries",permalink:"/docs/guides/reuse-third-party-libraries"}},p={},m=[{value:"Styling applications",id:"styling-applications",level:2},{value:"Style declarations",id:"style-declarations",level:3},{value:"<code>style</code> attribute",id:"style-attribute",level:4},{value:"Style information elements",id:"style-information-elements",level:4},{value:"External stylesheets",id:"external-stylesheets",level:4},{value:"Style injection",id:"style-injection",level:3},{value:"Global style",id:"global-style",level:4},{value:"Nodes styling",id:"nodes-styling",level:4}],h={toc:m},y="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)(y,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When developing frontend applications, it is crucial to create a sense of ",(0,l.kt)("strong",{parentName:"p"},"stylistic unity")," and ",(0,l.kt)("strong",{parentName:"p"},"cohesion")," that gives\nusers a better, smoother experience. Achieving this goal can be tricky in the micro-frontend world, where all the moving\nparts are not built together and often cannot rely on the same stylistic definitions."),(0,l.kt)("p",null,(0,l.kt)("micro-lc",null)," helps you make sure that all orchestrated pieces ",(0,l.kt)("strong",{parentName:"p"},"feel alike")," supporting various means of style\ndeclaration and offering some out-of-the-box utilities."),(0,l.kt)("h2",{id:"styling-applications"},"Styling applications"),(0,l.kt)("p",null,"When styling ",(0,l.kt)("micro-lc",null)," applications, one key factor to consider is whether ",(0,l.kt)("strong",{parentName:"p"},"Shadow DOM")," is\n",(0,l.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#properties--attributes"},"enabled or not"),"."),(0,l.kt)("p",null,"If Shadow DOM is enabled, the application ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout")," is put inside of ",(0,l.kt)("micro-lc",null)," shadow root, while\nthe ",(0,l.kt)("a",{parentName:"p",href:"./applications"},"content")," is not, meaning that their respective styles are ",(0,l.kt)("strong",{parentName:"p"},"encapsulated"),' and cannot affect one\nanother. Furthermore, "global" document styles (e.g., style tags in document head) do not influence layout \u2013 or any\nother node in a shadow root, even if it is placed in content \u2013.'),(0,l.kt)("p",null,"On the other hand, if ",(0,l.kt)("micro-lc",null)," Shadow DOM is disabled, both layout and content are placed in regular DOM\nand are always affected by the same styling rules."),(0,l.kt)("h3",{id:"style-declarations"},"Style declarations"),(0,l.kt)("h4",{id:"style-attribute"},(0,l.kt)("inlineCode",{parentName:"h4"},"style")," attribute"),(0,l.kt)("div",{style:{paddingLeft:"1em"}},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style"},(0,l.kt)("inlineCode",{parentName:"a"},"style")," attribute")," is available to all\nHTML elements and enable fine-grained, encapsulating styling. It can be used when\n",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#component-representation"},"composing")," resources declaring it alongside other attributes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},'layout:\n  content: |\n    # highlight-next-line\n    <div style="color: red;">This will be red</div>\n\napplications:\n  home:\n    integrationMode: compose\n    route: ./\n    config:\n    content:\n      - tag: div\n        attributes:\n          # highlight-next-line\n          style: "color: orange;"\n        content: This will be orange\n')),(0,l.kt)("p",null,"Since it affects only the element to which it belongs and its children, the ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," attribute works the same with or\nwithout Shadow DOM enabled.")),(0,l.kt)("h4",{id:"style-information-elements"},"Style information elements"),(0,l.kt)("div",{style:{paddingLeft:"1em"}},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style"},(0,l.kt)("inlineCode",{parentName:"a"},"<style>")," HTML element")," can be used to style a\ndocument without recurring to external sources."),(0,l.kt)("p",null,"If a ",(0,l.kt)("inlineCode",{parentName:"p"},"<style>")," tag is placed outside a shadow-root, it effects all the elements rendered in the regular DOM. If it\nis places inside a shadow-root, it effects only the elements ",(0,l.kt)("strong",{parentName:"p"},"in the same shadow-root"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"<style>")," tags can be either\ndeclared in the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," or constructed when ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#component-representation"},"composing")," components."),(0,l.kt)(i.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"0",label:"index.html",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <title>Style information elements</title>\n\n  \x3c!-- highlight-start --\x3e\n  <style>\n    div {\n      background: red;\n    }\n  </style>\n  \x3c!-- highlight-end --\x3e\n  \n  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"><\/script>\n</head>\n<body>\n  <micro-lc config-src="./config.yaml"></micro-lc>\n</body>\n</html>\n'))),(0,l.kt)(o.Z,{value:"1",label:"micro-lc.config.yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'layout:\n  content:\n    # highlight-start\n    - tag: style\n      content: "div: { color: orange; }"\n    # highlight-end\n    - tag: div\n      content: This will be orange and WILL NOT have a red background\n\napplications:\n  home:\n    integrationMode: compose\n    route: ./\n    config:\n    content:\n      # highlight-start\n      - tag: style\n        content: "div: { color: green; }"\n      # highlight-end\n      - tag: div\n        content: This will be green and WILL have a red background\n'))))),(0,l.kt)("h4",{id:"external-stylesheets"},"External stylesheets"),(0,l.kt)("div",{style:{paddingLeft:"1em"}},(0,l.kt)("p",null,"External stylesheets are referenced through\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"},(0,l.kt)("inlineCode",{parentName:"a"},"<link>")," HTML elements"),". They behave the same way as\n",(0,l.kt)("a",{parentName:"p",href:"#style-information-elements"},"style information elements"),": they effect only elements in the same DOM and can be\ndeclared in the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," or constructed when ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#component-representation"},"composing"),"\ncomponents."),(0,l.kt)(i.Z,{groupId:"configuration",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"0",label:"index.html",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <title>Style information elements</title>\n\n  \x3c!-- highlight-next-line --\x3e\n  <link rel="stylesheet" href="./my-stylesheet-1.css">\n  \n  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"><\/script>\n</head>\n<body>\n  <micro-lc config-src="./config.yaml"></micro-lc>\n</body>\n</html>\n'))),(0,l.kt)(o.Z,{value:"1",label:"micro-lc.config.yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'layout:\n  content:\n    # highlight-start\n    - tag: link\n      attributes:\n        rel: stylesheet\n        href: ./my-stylesheet-2.css\n    # highlight-end\n    - tag: div\n      content: This will be effected by "my-stylesheet-2.css" and NOT by "my-stylesheet-1.css"\n\napplications:\n  home:\n    integrationMode: compose\n    route: ./\n    config:\n    content:\n      # highlight-start\n      - tag: link\n        attributes:\n          rel: stylesheet\n          href: ./my-stylesheet-3.css\n      # highlight-end\n      - tag: div\n        content: This will be effected by "my-stylesheet-3.css" AND by "my-stylesheet-1.css"\n'))))),(0,l.kt)("h3",{id:"style-injection"},"Style injection"),(0,l.kt)("p",null,(0,l.kt)("micro-lc",null)," API provides to a way to inject style at runtime with the\n",(0,l.kt)("a",{parentName:"p",href:"/api/micro-lc-api/extensions#csssetstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"setStyle")," method"),", implementing the following interface:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type SetStyle = (styles: CSSConfig) => void\n\ninterface CSSConfig {\n  global?: Record<string, string | number>\n  nodes?: Record<string, Record<string, string | number>>\n}\n")),(0,l.kt)("h4",{id:"global-style"},"Global style"),(0,l.kt)("div",{style:{paddingLeft:"1em"}},(0,l.kt)("p",null,"Global style is injected in the uppermost selector, which is ",(0,l.kt)("inlineCode",{parentName:"p"},":host")," if ",(0,l.kt)("micro-lc",null)," is in Shadow DOM mode and\n",(0,l.kt)("inlineCode",{parentName:"p"},":root")," (which in most cases is ",(0,l.kt)("inlineCode",{parentName:"p"},"head"),") if it is not. This behaviour is useful to set global\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables")," that can be used to enforce\na consistent theme thought the whole application."),(0,l.kt)("p",null,"For example, after an application or a component has made this call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"microlcApi.getExtensions().css.setStyle({\n  global: { \n    '--my-application-color': 'red'\n  } \n})\n")),(0,l.kt)("p",null,"each node parented by ",(0,l.kt)("micro-lc",null)," can use ",(0,l.kt)("inlineCode",{parentName:"p"},"var(--my-application-color)")," to access the global variable in its\nown CSS, whether it is in a shadow-root or not.")),(0,l.kt)("h4",{id:"nodes-styling"},"Nodes styling"),(0,l.kt)("div",{style:{paddingLeft:"1em"}},(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"node")," property of ",(0,l.kt)("inlineCode",{parentName:"p"},"setStyle")," argument, specific CSS selectors can be constructed and injected in DOM. These\nselectors are effected by Shadow DOM, meaning they apply only on elements in the same DOM (just like\n",(0,l.kt)("a",{parentName:"p",href:"#style-information-elements"},"style information elements"),")."),(0,l.kt)("p",null,"For example, after an application or a component has made this call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"microlcApi.getExtensions().css.setStyle({\n  nodes: { \n    p: {\n      color: 'red'\n    }\n  } \n})\n")),(0,l.kt)("p",null,"all ",(0,l.kt)("inlineCode",{parentName:"p"},"<p>")," elements in the same DOM of the call will be red.")))}g.isMDXComponent=!0}}]);