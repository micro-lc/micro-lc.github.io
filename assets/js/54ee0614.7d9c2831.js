"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5945],{5858:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2886:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(6687),o=n(4923);const a="tabItem_EP2U";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},406:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(6428),o=n(6687),a=n(4923),i=n(3634),l=n(6844),p=n(3667),s=n(3107);const c="tabList_jxcF",u="tabItem_Lqs7";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,f=e.values,h=e.groupId,k=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,p.U)(),N=C.tabGroupChoices,w=C.setTabGroupChoices,x=(0,o.useState)(y),O=x[0],P=x[1],T=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=N[h];null!=I&&I!==O&&g.some((function(e){return e.value===I}))&&P(I)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==O&&(E(t),P(r),null!=h&&w(h,String(r)))},A=function(e){var t,n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":var r,o=T.indexOf(e.currentTarget)+1;n=null!=(r=T[o])?r:T[0];break;case"ArrowLeft":var a,i=T.indexOf(e.currentTarget)-1;n=null!=(a=T[i])?a:T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},k)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onClick:j},i,{className:(0,a.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,i.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},2308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(6428),o=n(8920),a=(n(6687),n(5858)),i=n(406),l=n(2886),p=["components"],s={title:"Composer API",description:"micro-lc composer API",sidebar_label:"Composer API",sidebar_position:30},c=void 0,u={unversionedId:"api/composer-api",id:"api/composer-api",title:"Composer API",description:"micro-lc composer API",source:"@site/docs/api/composer-api.md",sourceDirName:"api",slug:"/api/composer-api",permalink:"/documentation/api/composer-api",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/api/composer-api.md",tags:[],version:"current",lastUpdatedBy:"amountainram",sidebarPosition:30,frontMatter:{title:"Composer API",description:"micro-lc composer API",sidebar_label:"Composer API",sidebar_position:30},sidebar:"api",previous:{title:"Extensions",permalink:"/documentation/api/micro-lc-api/extensions"}},m={},d=[{value:"<code>premount</code>",id:"premount",level:3},{value:"<code>createComposerContext</code>",id:"createcomposercontext",level:3},{value:"<code>render</code>",id:"render",level:3},{value:"Standalone usage",id:"standalone-usage",level:2}],f={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Any HTML element mounted in ",(0,a.kt)("micro-lc",null)," via ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/guides/layout"},"layout")," or\n",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/guides/layout#mount-point"},"mount point"),", or any\n",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/guides/applications/compose"},"composable application")," is provided with the property ",(0,a.kt)("inlineCode",{parentName:"p"},"composerApi"),", which\nprovides the same dynamic capability for ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/concepts/composition"},"mounting HTML subtrees")," ",(0,a.kt)("micro-lc",null),"\nitself uses under the hood."),(0,a.kt)("p",null,"The composer API is an object with two methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"premount")," which flattens polymorphic configurations and injects import maps, and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createComposerContext")," which builds an appender that can be called by assigning a root HTML DOM appending the\ndynamically configured HTML DOM as subtree of the root."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"render")," wraps ",(0,a.kt)("inlineCode",{parentName:"li"},"lit-html")," ",(0,a.kt)("inlineCode",{parentName:"li"},"render")," method and injects a ",(0,a.kt)("a",{parentName:"li",href:"/documentation/docs/guides/applications/compose#properties-injection"},"context"))),(0,a.kt)("h3",{id:"premount"},(0,a.kt)("inlineCode",{parentName:"h3"},"premount")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ComposerApi {\n  // ... rest of the API\n  premount: (config: PluginConfiguration, proxyWindow?: ImportShimContext) => Promise<ResolvedConfig>\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"premount")," allows to reduce the\n",(0,a.kt)("a",{parentName:"p",href:"localhost:3000/docs/guides/applications/compose#plugin-configuration"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginConfiguration")," type")," to the following\n",(0,a.kt)("inlineCode",{parentName:"p"},"ResolvedConfig")," type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ResolvedConfig {\n  content: Content\n  sources: {\n    importmap?: ImportMap\n    uris: string[]\n  }\n}\n")),(0,a.kt)("p",null,"the optional ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyWindow")," which defaults to the current ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," must implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"importShim")," interface, allows\nto override the importmap features, namely to set a no-op behaviour or select an iframe window. Notice that the\ninterface is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ImportShimContext {\n  importShim<D, E extends Record<string, unknown>>(\n    uri: string, parentUrl?: string\n  ): Promise<{ default: D } & E>\n}\n")),(0,a.kt)("p",null,"After being called, ",(0,a.kt)("inlineCode",{parentName:"p"},"premount")," ensures all import maps declared are available and ",(0,a.kt)("inlineCode",{parentName:"p"},"uris")," sources have been fetched and\ntheir code run. If there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"sources")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginConfiguration"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"premount")," is a no-operation."),(0,a.kt)("h3",{id:"createcomposercontext"},(0,a.kt)("inlineCode",{parentName:"h3"},"createComposerContext")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ComposerApi {\n  // ... rest of the API\n  createComposerContext: (\n    content: Content,\n    options: ComposerOptions\n  ) => Promise<ComposerContextAppender>\n}\n")),(0,a.kt)("p",null,"Once ",(0,a.kt)("inlineCode",{parentName:"p"},"premount")," has been run, if needed, ",(0,a.kt)("inlineCode",{parentName:"p"},"createComposerContext")," provides a callback for appending the DOM\nconfigured in ",(0,a.kt)("inlineCode",{parentName:"p"},"content"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type ComposerContextAppender = (container: HTMLElement | DocumentFragment, options?: RenderOptions) => void\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," is the root element that will be used to append the composed subtree and ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\nrefer to optional features provided by the ",(0,a.kt)("a",{parentName:"p",href:"https://lit.dev/docs/api/templates/#render"},(0,a.kt)("inlineCode",{parentName:"a"},"lit-html")," ",(0,a.kt)("inlineCode",{parentName:"a"},"render")," method"),"."),(0,a.kt)("p",null,"Finally, ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"createComposerContext")," is the object to interact with when the compiler needs to be\ninstructed to recognize some properties as special context. This feature allows to inject JS context avoiding eval and\nworks according to the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/guides/applications/compose#interpolated-properties"},"composability principles"),"."),(0,a.kt)("h3",{id:"render"},(0,a.kt)("inlineCode",{parentName:"h3"},"render")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ComposerApi {\n  // ... rest of the API\n  render: (\n    config: ResolvedConfig,\n    container: HTMLElement,\n    context: Record<string, unknown> = {}\n  ) => Promise<ComposerContextAppender>\n}\n")),(0,a.kt)("p",null,"Alternatively, if the use case requires to append a ",(0,a.kt)("inlineCode",{parentName:"p"},"ResolvedConfig")," to a ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," html element\nand inject a ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," of properties, ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," provides a useful shortcut."),(0,a.kt)("h2",{id:"standalone-usage"},"Standalone usage"),(0,a.kt)("p",null,"The composer API can be directly injected in your browser as a module by adding a script import from CDN source\nor in your code as a ",(0,a.kt)("inlineCode",{parentName:"p"},"dependency"),"."),(0,a.kt)("p",null,"To add it to your codebase: "),(0,a.kt)(i.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @micro-lc/composer\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @micro-lc/composer\n")))),(0,a.kt)("p",null,"Otherwise, add to your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," the following script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'  <script type="importmap">\n    {\n      "imports": {\n        "@micro-lc/composer": "https://cdn.jsdelivr.net/npm/@micro-lc/composer@latest/dist/bundle/index.min.js"\n      }\n    }\n  <\/script>\n')),(0,a.kt)("p",null,"and then use it in your scripts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="root"></div>\n  <script type="module">\n    import {render} from \'@micro-lc/composer\'\n\n    (async function () {\n      const root = document.getElementById(\'root\')\n\n      render({content: "Hello \ud83d\udc4b"}, root)\n    })()\n  <\/script>\n</body>\n')),(0,a.kt)("p",null,"in case your browser does not support modules we recommend to add ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/guybedford/es-module-shims"},"es-module-shims"),"."))}h.isMDXComponent=!0}}]);