"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6606],{55858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75001:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(76687),r=n(64923);const o={tabItem:"tabItem_TSm8"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},99614:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(855),r=n(76687),o=n(64923),l=n(41236),i=n(74498),s=n(64890),c=n(14992),p=n(44279);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,c=e.groupId,d=u(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:d})})),f=g[0],y=g[1],b=h({queryString:s,groupId:c}),k=b[0],v=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,p.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],S=w[1],T=function(){var e=null!=k?k:N;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){T&&y(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);y(e),v(e),S(e)}),[v,S,d]),tabValues:d}}var f=n(49920);const y={tabList:"tabList_rQqy",tabItem:"tabItem_dHrw"};function b(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,c=e.tabValues,p=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(d(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var o,l=p.indexOf(e.currentTarget)-1;n=null!=(o=p[l])?o:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:u},l,{className:(0,o.Z)("tabs__item",y.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function v(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},58655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=n(855),r=n(55659),o=(n(76687),n(55858)),l=n(99614),i=n(75001),s=["components"],c={title:"Style",description:"Application styling and theming",sidebar_label:"Style",sidebar_position:50},p=void 0,d={unversionedId:"docs/guides/style",id:"docs/guides/style",title:"Style",description:"Application styling and theming",source:"@site/docs/docs/guides/style.md",sourceDirName:"docs/guides",slug:"/docs/guides/style",permalink:"/docs/guides/style",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/style.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:50,frontMatter:{title:"Style",description:"Application styling and theming",sidebar_label:"Style",sidebar_position:50},sidebar:"docs",previous:{title:"Error pages",permalink:"/docs/guides/applications/error-pages"},next:{title:"Reuse third party libraries",permalink:"/docs/guides/reuse-third-party-libraries"}},u={},m=[{value:"Styling applications",id:"styling-applications",level:2},{value:"Style declarations",id:"style-declarations",level:3},{value:"<code>style</code> attribute",id:"style-attribute",level:4},{value:"Style information elements",id:"style-information-elements",level:4},{value:"External stylesheets",id:"external-stylesheets",level:4},{value:"Style injection",id:"style-injection",level:3},{value:"Global style",id:"global-style",level:4},{value:"Nodes styling",id:"nodes-styling",level:4},{value:"Dark mode",id:"dark-mode",level:2}],h={toc:m},g="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When developing frontend applications, it is crucial to create a sense of ",(0,o.kt)("strong",{parentName:"p"},"stylistic unity")," and ",(0,o.kt)("strong",{parentName:"p"},"cohesion")," that gives\nusers a better, smoother experience. Achieving this goal can be tricky in the micro-frontend world, where all the moving\nparts are not built together and often cannot rely on the same stylistic definitions."),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," helps you make sure that all orchestrated pieces ",(0,o.kt)("strong",{parentName:"p"},"feel alike")," supporting various means of style\ndeclaration and offering some out-of-the-box utilities."),(0,o.kt)("h2",{id:"styling-applications"},"Styling applications"),(0,o.kt)("p",null,"When styling ",(0,o.kt)("micro-lc",null)," applications, one key factor to consider is whether ",(0,o.kt)("strong",{parentName:"p"},"Shadow DOM")," is\n",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#properties--attributes"},"enabled or not"),"."),(0,o.kt)("p",null,"If Shadow DOM is enabled, the application ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout")," is put inside of ",(0,o.kt)("micro-lc",null)," shadow root, while\nthe ",(0,o.kt)("a",{parentName:"p",href:"./applications"},"content")," is not, meaning that their respective styles are ",(0,o.kt)("strong",{parentName:"p"},"encapsulated"),' and cannot affect one\nanother. Furthermore, "global" document styles (e.g., style tags in document head) do not influence layout \u2013 or any\nother node in a shadow root, even if it is placed in content \u2013.'),(0,o.kt)("p",null,"On the other hand, if ",(0,o.kt)("micro-lc",null)," Shadow DOM is disabled, both layout and content are placed in regular DOM\nand are always affected by the same styling rules."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Although partially supported in ",(0,o.kt)("a",{parentName:"p",href:"https://micro-lc.io/1.x/docs/introduction/#dark-mode"},"micro-lc v1"),",\nv2 does operate a complete ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/separation-of-concerns"},"separation of concerns")," between layout,\nrouting, and UI components. ",(0,o.kt)("inlineCode",{parentName:"p"},"dark mode")," features are completely delegated to layout and micro-lc API application\ninteractions."),(0,o.kt)("p",{parentName:"admonition"},"Sample ",(0,o.kt)("a",{parentName:"p",href:"/add-ons/components/"},"micro-lc components")," do not support dark mode")),(0,o.kt)("h3",{id:"style-declarations"},"Style declarations"),(0,o.kt)("h4",{id:"style-attribute"},(0,o.kt)("inlineCode",{parentName:"h4"},"style")," attribute"),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style"},(0,o.kt)("inlineCode",{parentName:"a"},"style")," attribute")," is available to all\nHTML elements and enable fine-grained, encapsulating styling. It can be used when\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#component-representation"},"composing")," resources declaring it alongside other attributes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},'layout:\n  content: |\n    # highlight-next-line\n    <div style="color: red;">This will be red</div>\n\napplications:\n  home:\n    integrationMode: compose\n    route: ./\n    config:\n    content:\n      - tag: div\n        attributes:\n          # highlight-next-line\n          style: "color: orange;"\n        content: This will be orange\n')),(0,o.kt)("p",null,"Since it affects only the element to which it belongs and its children, the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," attribute works the same with or\nwithout Shadow DOM enabled.")),(0,o.kt)("h4",{id:"style-information-elements"},"Style information elements"),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style"},(0,o.kt)("inlineCode",{parentName:"a"},"<style>")," HTML element")," can be used to style a\ndocument without recurring to external sources."),(0,o.kt)("p",null,"If a ",(0,o.kt)("inlineCode",{parentName:"p"},"<style>")," tag is placed outside a shadow-root, it effects all the elements rendered in the regular DOM. If it\nis places inside a shadow-root, it effects only the elements ",(0,o.kt)("strong",{parentName:"p"},"in the same shadow-root"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"<style>")," tags can be either\ndeclared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," or constructed when ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#component-representation"},"composing")," components."),(0,o.kt)(l.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"0",label:"index.html",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <title>Style information elements</title>\n\n  \x3c!-- highlight-start --\x3e\n  <style>\n    div {\n      background: red;\n    }\n  </style>\n  \x3c!-- highlight-end --\x3e\n  \n  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"><\/script>\n</head>\n<body>\n  <micro-lc config-src="./config.yaml"></micro-lc>\n</body>\n</html>\n'))),(0,o.kt)(i.Z,{value:"1",label:"micro-lc.config.yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'layout:\n  content:\n    # highlight-start\n    - tag: style\n      content: "div: { color: orange; }"\n    # highlight-end\n    - tag: div\n      content: This will be orange and WILL NOT have a red background\n\napplications:\n  home:\n    integrationMode: compose\n    route: ./\n    config:\n    content:\n      # highlight-start\n      - tag: style\n        content: "div: { color: green; }"\n      # highlight-end\n      - tag: div\n        content: This will be green and WILL have a red background\n'))))),(0,o.kt)("h4",{id:"external-stylesheets"},"External stylesheets"),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("p",null,"External stylesheets are referenced through\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"},(0,o.kt)("inlineCode",{parentName:"a"},"<link>")," HTML elements"),". They behave the same way as\n",(0,o.kt)("a",{parentName:"p",href:"#style-information-elements"},"style information elements"),": they effect only elements in the same DOM and can be\ndeclared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," or constructed when ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#component-representation"},"composing"),"\ncomponents."),(0,o.kt)(l.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"0",label:"index.html",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <title>Style information elements</title>\n\n  \x3c!-- highlight-next-line --\x3e\n  <link rel="stylesheet" href="./my-stylesheet-1.css">\n  \n  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"><\/script>\n</head>\n<body>\n  <micro-lc config-src="./config.yaml"></micro-lc>\n</body>\n</html>\n'))),(0,o.kt)(i.Z,{value:"1",label:"micro-lc.config.yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'layout:\n  content:\n    # highlight-start\n    - tag: link\n      attributes:\n        rel: stylesheet\n        href: ./my-stylesheet-2.css\n    # highlight-end\n    - tag: div\n      content: This will be effected by "my-stylesheet-2.css" and NOT by "my-stylesheet-1.css"\n\napplications:\n  home:\n    integrationMode: compose\n    route: ./\n    config:\n    content:\n      # highlight-start\n      - tag: link\n        attributes:\n          rel: stylesheet\n          href: ./my-stylesheet-3.css\n      # highlight-end\n      - tag: div\n        content: This will be effected by "my-stylesheet-3.css" AND by "my-stylesheet-1.css"\n'))))),(0,o.kt)("h3",{id:"style-injection"},"Style injection"),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," API provides to a way to inject style at runtime with the\n",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-api/extensions#csssetstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"setStyle")," method"),", implementing the following interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type SetStyle = (styles: CSSConfig) => void\n\ninterface CSSConfig {\n  global?: Record<string, string | number>\n  nodes?: Record<string, Record<string, string | number>>\n}\n")),(0,o.kt)("h4",{id:"global-style"},"Global style"),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("p",null,"Global style is injected in the uppermost selector, which is ",(0,o.kt)("inlineCode",{parentName:"p"},":host")," if ",(0,o.kt)("micro-lc",null)," is in Shadow DOM mode and\n",(0,o.kt)("inlineCode",{parentName:"p"},":root")," (which in most cases is ",(0,o.kt)("inlineCode",{parentName:"p"},"head"),") if it is not. This behaviour is useful to set global\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables")," that can be used to enforce\na consistent theme thought the whole application."),(0,o.kt)("p",null,"For example, after an application or a component has made this call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"microlcApi.getExtensions().css.setStyle({\n  global: { \n    '--my-application-color': 'red'\n  } \n})\n")),(0,o.kt)("p",null,"each node parented by ",(0,o.kt)("micro-lc",null)," can use ",(0,o.kt)("inlineCode",{parentName:"p"},"var(--my-application-color)")," to access the global variable in its\nown CSS, whether it is in a shadow-root or not.")),(0,o.kt)("h4",{id:"nodes-styling"},"Nodes styling"),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"setStyle")," argument, specific CSS selectors can be constructed and injected in DOM. These\nselectors are effected by Shadow DOM, meaning they apply only on elements in the same DOM (just like\n",(0,o.kt)("a",{parentName:"p",href:"#style-information-elements"},"style information elements"),")."),(0,o.kt)("p",null,"For example, after an application or a component has made this call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"microlcApi.getExtensions().css.setStyle({\n  nodes: { \n    p: {\n      color: 'red'\n    }\n  } \n})\n")),(0,o.kt)("p",null,"all ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>")," elements in the same DOM of the call will be red.")),(0,o.kt)("h2",{id:"dark-mode"},"Dark mode"),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," is agnostic in terms of dark-mode support, meaning that since it\ncontrols only page layout, any kind of dark-mode support must be enabled via web-components\ncomposing the layout and parcels/compose applications. Notice that the iframe integration mode\nwill not be able to support any kind of style injection due its complete sandboxing and encapsulation."),(0,o.kt)("p",null,"A good reference for implementing dark mode in your components can be found with the ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/theming/dark-mode"},"ionic framework"),":"),(0,o.kt)("p",null,"We briefly remind here that UA compatibility can be ensured by using ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," tags in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," of your ",(0,o.kt)("micro-lc",null),"\norchestrated application like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="color-scheme" content="dark light" />\n')),(0,o.kt)("p",null,"this is recommended by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification"},"HTML specification"),"\nand has fairly good ",(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/mdn-html_elements_meta_name_color-scheme"},"browser support"),"."),(0,o.kt)("p",null,"In order to use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"},"OS-provided color scheme preferences"),", it can be helpful the ",(0,o.kt)("inlineCode",{parentName:"p"},"media")," query construct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@media (prefers-color-scheme: light) {\n  body {\n    --text-color: #eee;\n    --bkg-color: #121212;\n  }\n}\n")),(0,o.kt)("p",null,"which works inside web-components: even within their shadow-dom by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia"},"evaluating")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.matchMedia('(prefers-color-scheme: light)')\n")),(0,o.kt)("p",null,"which has fairly good ",(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/prefers-color-scheme"},"browser support"),"."),(0,o.kt)("p",null,"In order to build theme switch buttons, we recommend using ",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-api/extensions"},"micro-lc api"),"\nby, for instance, setting CSS variables when using webcomponents with shadow-dom or CSS classes for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," tag or attribute of ",(0,o.kt)("inlineCode",{parentName:"p"},"html"),", which though\nwill not work inside a shadow-dom of a web-component."))}f.isMDXComponent=!0}}]);