"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8892],{5858:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2886:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(6687),r=n(4923);const i="tabItem_EP2U";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},406:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(6428),r=n(6687),i=n(4923),o=n(3634),l=n(6844),s=n(3667),p=n(3107);const c="tabList_jxcF",u="tabItem_Lqs7";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,P=(0,r.useState)(v),j=P[0],C=P[1],O=[],x=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=N[f];null!=E&&E!==j&&g.some((function(e){return e.value===E}))&&C(E)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==j&&(x(t),C(a),null!=f&&T(f,String(a)))},M=function(e){var t,n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var i,o=O.indexOf(e.currentTarget)-1;n=null!=(i=O[o])?i:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return O.push(e)},onKeyDown:M,onClick:D},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(6428),r=n(8920),i=n(6687),o=n(5858),l=n(406),s=n(2886),p=["components"],c={title:"Parcels",description:"micro-frontend loaded using parcels",sidebar_label:"Parcels",sidebar_position:30},u=void 0,d={unversionedId:"docs/guides/applications/parcels",id:"docs/guides/applications/parcels",title:"Parcels",description:"micro-frontend loaded using parcels",source:"@site/docs/docs/guides/applications/parcels.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/parcels",permalink:"/docs/guides/applications/parcels",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/parcels.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:30,frontMatter:{title:"Parcels",description:"micro-frontend loaded using parcels",sidebar_label:"Parcels",sidebar_position:30},sidebar:"docs",previous:{title:"Compose",permalink:"/docs/guides/applications/compose"},next:{title:"Error pages",permalink:"/docs/guides/applications/error-pages"}},m={},h=[{value:"Usage",id:"usage",level:2},{value:"Lifecycle methods",id:"lifecycle-methods",level:2},{value:"Bootstrap",id:"bootstrap",level:3},{value:"Mount",id:"mount",level:3},{value:"Unmount",id:"unmount",level:3},{value:"Update",id:"update",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>injectBase</code>",id:"injectbase",level:3},{value:"<code>microlcApi</code>",id:"microlcapi",level:3}],f={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most common integration mode, recommended to embed SPAs. This kind of applications are directly managed by the\norchestrator, which needs to be supplied with the assets entry point."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Up to now, only JavaScript ",(0,o.kt)("strong",{parentName:"p"},"UMD scripts")," can be used as parcel application assets.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A single-spa parcel is a framework-agnostic component. It is a chunk of functionality meant to be mounted manually by an\napplication, without having to worry about which framework was used to implement the parcel or application. A parcel can\nbe as large as an application or as small as a component and written in any language as long as it exports the correct\n",(0,o.kt)("a",{parentName:"p",href:"#lifecycle-methods"},"lifecycle events"),"."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/parcels-overview/#parcel-lifecycles"},"single-spa documentation"))),(0,o.kt)("p",null,"We provide an extensive list of templates to build your own parcel application using your favourite framework:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/micro-lc/react-template"},"React")),(0,o.kt)("li",{parentName:"ul"},"more are coming soon...")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"For what concerns ",(0,o.kt)("micro-lc",null)," configuration, a parcel is an object with keys ",(0,o.kt)("inlineCode",{parentName:"p"},"html"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"styles"),"\n(at least one between ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," is mandatory). By polymorphism, we allow entry to be a string which will be\ninterpreted as an HTML asset entry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ParcelApplication {\n  integrationMode: "parcel"\n  entry:\n    // Shorthand syntax\n    | string\n    // Normal syntax\n    | (\n        | {\n            scripts: string | [string, ...string[]]\n            styles?: string | string[]\n            html?: string\n          }\n        | {\n            scripts?: string | string[]\n            styles?: string | string[]\n            html: string\n          }\n      )\n  route: string // Path on which the parcel will be rendered\n  properties?: Record<string, unknown> // Data passed to the parcel\n  injectBase?: boolean // See explanation below\n}\n')),(0,o.kt)(i.Fragment,null),(0,o.kt)("example-frame",{base:"../../../frames/guides/applications/parcels",height:"550px",sourceTabs:[{filePath:"/index.html"},{filePath:"/config.yaml",isDefault:!0}],src:"/",title:"Base injection"}),(0,o.kt)("h2",{id:"lifecycle-methods"},"Lifecycle methods"),(0,o.kt)("p",null,"A parcel application has to provide a standard set of lifecycle methods. Those methods must be located either in an\ninline script in the application HTML asset, or as UMD script export within one of the application scrip assets."),(0,o.kt)("p",null,"The simplest form of a parcel application is shown in following example."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"0",label:"index.html",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Lifecycle methods</title>\n\n  <script src="lifecycle.js"><\/script>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>\n'))),(0,o.kt)(s.Z,{value:"1",label:"lifecycle.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function registerLifecycle(self) {\n  Object.assign(\n    self,\n    {\n      bootstrap: () => Promise.resolve(null),\n      mount: () => Promise.resolve(null),\n      unmount: () => Promise.resolve(null),\n      update: () => Promise.resolve(null),\n    }\n  )\n}\n\n// \ud83d\udc47 https://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html\n(function register(self, factory) {\n  self.__MY_PARCEL = {}\n  factory(self.__MICRO_LC_ERROR, self)\n}(window, registerLifecycle))\n")))),(0,o.kt)("p",null,"Lifecycle methods are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#bootstrap"},(0,o.kt)("inlineCode",{parentName:"a"},"bootstrap"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mount"},(0,o.kt)("inlineCode",{parentName:"a"},"mount"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#unmount"},(0,o.kt)("inlineCode",{parentName:"a"},"unmount"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#update"},(0,o.kt)("inlineCode",{parentName:"a"},"update")))),(0,o.kt)("p",null,"They all return ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<null>"),". Update is not mandatory and is available only for ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#lifecycle"},"error pages"),".\nThe others take as argument an object with the following interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface LifecycleProps {\n  name: string\n  container: HTMLElement\n  entry: {\n    html: string\n    scripts: string[]\n    styles: string[]\n  }\n  props: {\n    injectBase: boolean\n    microlcApi?: Partial<MicrolcApi>\n    [key: string]: unknown\n  }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," is the application unique identifier as per ",(0,o.kt)("micro-lc",null)," configuration key\n",(0,o.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#applications"},"applications"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"container")," is the application mount point which is provided by ",(0,o.kt)("micro-lc",null)," configuration key\n",(0,o.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#mountpointselector"},"mountPointSelector"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entry")," is the application assets object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"props")," is an object including application custom properties and ",(0,o.kt)("micro-lc",null)," injected properties. See\n",(0,o.kt)("a",{parentName:"li",href:"#properties"},"dedicated section")," for a detailed description.")),(0,o.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,o.kt)("p",null,"This lifecycle function will be called once, right before the parcel is mounted for the first time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function bootstrap(props: LifecycleProps): Promise<null> {\n  /* This is where you do one-time initialization */\n}\n")),(0,o.kt)("h3",{id:"mount"},"Mount"),(0,o.kt)("p",null,"This lifecycle function is called when the router selects the parcel for rendering."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function mount(props: LifecycleProps): Promise<null> {\n  /* This is where you tell a framework (e.g., React) to render some UI to the DOM */\n}\n")),(0,o.kt)("h3",{id:"unmount"},"Unmount"),(0,o.kt)("p",null,"When redirecting to another application, the parcel is unmounted."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When called, this function should clean up all DOM elements, DOM event listeners, leaked memory, globals, observable\nsubscriptions, etc. that were created at any point when the parcel was mounted.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function unmount(props: LifecycleProps): Promise<null> {\n  /* This is where you tell a framework (e.g., React) to un-render some ui from the DOM */\n}\n")),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("p",null,"This lifecycle method is only available for ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#lifecycle"},"error pages"),"."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," injects two default properties, which can be extended in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on a per-application basis with the ",(0,o.kt)("inlineCode",{parentName:"li"},"properties")," key on the application configuration, and"),(0,o.kt)("li",{parentName:"ul"},"with configuration key ",(0,o.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#shared"},"shared")," for properties common to all applications\nand ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/applications/compose"},"composed")," DOM nodes (the content of ",(0,o.kt)("inlineCode",{parentName:"li"},"shared.properties")," will be spread on first level).")),(0,o.kt)("h3",{id:"injectbase"},(0,o.kt)("inlineCode",{parentName:"h3"},"injectBase")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If your application ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," already has a ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," tag, this property ",(0,o.kt)("strong",{parentName:"p"},"will not")," override it. ",(0,o.kt)("micro-lc",null),"\nwill consider this plugin to have been built with prior knowledge of its configuration and deploy route.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Instructs ",(0,o.kt)("micro-lc",null)," on whether to inject a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"},"base tag")," to\nallow application internal routing to behave as if it was deployed on the bundle selected root, or any root that was\nselected at build time."),(0,o.kt)("p",null,"This property should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," only on applications that ",(0,o.kt)("strong",{parentName:"p"},"do not have a hash router"),". On applications without\ninternal routing, this property does not do anything."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For better compatibility, we recommend to choose ",(0,o.kt)("inlineCode",{parentName:"p"},"./")," as build time public URL.")),(0,o.kt)("p",null,"The example below is a showcase of two minimal React applications, one with a browser router and one with a hash router.\nThe correct usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"injectBase")," enables both of them to work correctly (and to coexist undisturbed)."),(0,o.kt)(i.Fragment,null),(0,o.kt)("example-frame",{base:"../../../frames/guides/applications/parcels/inject-base",height:"550px",sourceTabs:[{filePath:"/config.yaml"},{filePath:"/browser-parcel.jsx"},{filePath:"/hash-parcel.jsx"}],src:"/",title:"Base injection"}),(0,o.kt)("h3",{id:"microlcapi"},(0,o.kt)("inlineCode",{parentName:"h3"},"microlcApi")),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," injects some useful utils to each application in order to share state, events, and styles. Read\n",(0,o.kt)("a",{parentName:"p",href:"../../../api/micro-lc-api"},"the full reference")," for a detailed description of this property."))}k.isMDXComponent=!0}}]);