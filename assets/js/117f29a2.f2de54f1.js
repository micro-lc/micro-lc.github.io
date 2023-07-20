"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8892],{55858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75001:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(76687),r=n(64923);const i={tabItem:"tabItem_TSm8"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},99614:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(855),r=n(76687),i=n(64923),o=n(41236),l=n(74498),s=n(64890),c=n(14992),p=n(44279);function u(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,c=e.groupId,u=m(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:u})})),k=f[0],g=f[1],b=h({queryString:s,groupId:c}),y=b[0],v=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,p.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],j=w[1],T=function(){var e=null!=y?y:N;return d({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);g(e),v(e),j(e)}),[v,j,u]),tabValues:u}}var k=n(49920);const g={tabList:"tabList_rQqy",tabItem:"tabItem_dHrw"};function b(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,c=e.tabValues,p=[],u=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(u(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var i,o=p.indexOf(e.currentTarget)-1;n=null!=(i=p[o])?i:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function v(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},89487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var a=n(855),r=n(55659),i=n(76687),o=n(55858),l=n(99614),s=n(75001),c=["components"],p={title:"Parcels",description:"micro-frontend loaded using parcels",sidebar_label:"Parcels",sidebar_position:30},u=void 0,m={unversionedId:"docs/guides/applications/parcels",id:"docs/guides/applications/parcels",title:"Parcels",description:"micro-frontend loaded using parcels",source:"@site/docs/docs/guides/applications/parcels.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/parcels",permalink:"/docs/guides/applications/parcels",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/parcels.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",sidebarPosition:30,frontMatter:{title:"Parcels",description:"micro-frontend loaded using parcels",sidebar_label:"Parcels",sidebar_position:30},sidebar:"docs",previous:{title:"Compose",permalink:"/docs/guides/applications/compose"},next:{title:"Error pages",permalink:"/docs/guides/applications/error-pages"}},d={},h=[{value:"Usage",id:"usage",level:2},{value:"Lifecycle methods",id:"lifecycle-methods",level:2},{value:"Bootstrap",id:"bootstrap",level:3},{value:"Mount",id:"mount",level:3},{value:"Unmount",id:"unmount",level:3},{value:"Update",id:"update",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>injectBase</code>",id:"injectbase",level:3},{value:"<code>microlcApi</code>",id:"microlcapi",level:3}],f={toc:h},k="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)(k,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most common integration mode, recommended to embed SPAs. This kind of applications are directly managed by the\norchestrator, which needs to be supplied with the assets entry point."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Up to now, only JavaScript ",(0,o.kt)("strong",{parentName:"p"},"UMD scripts")," can be used as parcel application assets.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A single-spa parcel is a framework-agnostic component. It is a chunk of functionality meant to be mounted manually by an\napplication, without having to worry about which framework was used to implement the parcel or application. A parcel can\nbe as large as an application or as small as a component and written in any language as long as it exports the correct\n",(0,o.kt)("a",{parentName:"p",href:"#lifecycle-methods"},"lifecycle events"),"."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/parcels-overview/#parcel-lifecycles"},"single-spa documentation"))),(0,o.kt)("p",null,"We provide an extensive list of templates to build your own parcel application using your favourite framework:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/micro-lc/react-template"},"React"),","),(0,o.kt)("li",{parentName:"ul"},"Angular ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/micro-lc/angular12-template"},"12"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/micro-lc/angular13-template"},"13"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/micro-lc/angular14-template"},"14"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/micro-lc/vue3-template"},"Vue"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are using ",(0,o.kt)("strong",{parentName:"p"},"Angular")," parcels, remember that the framework needs\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/tree/main/packages/zone.js"},"zone.js")," to work, which is not bundled in ",(0,o.kt)("micro-lc",null),"."),(0,o.kt)("p",{parentName:"admonition"},"Therefore, you need to import it as a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," in you micro-lc entrypoint before any micro-lc related module. For\nexample:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\n  [...]\n\n  \x3c!-- highlight-next-line --\x3e\n  <script\n    \x3c!-- highlight-next-line --\x3e\n    type="module"\n    \x3c!-- highlight-next-line --\x3e\n    src="https://cdn.jsdelivr.net/npm/zone.js@0.13.0/dist/zone.min.js"\n    \x3c!-- highlight-next-line --\x3e\n  ><\/script>\n\n  <script \n    type="module" \n    src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"\n  ><\/script>\n</head>\n\n[...]\n\n</html>\n'))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"For what concerns ",(0,o.kt)("micro-lc",null)," configuration, a parcel is an object with keys ",(0,o.kt)("inlineCode",{parentName:"p"},"html"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"styles"),"\n(at least one between ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," is mandatory). By polymorphism, we allow entry to be a string which will be\ninterpreted as an HTML asset entry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ParcelApplication {\n  integrationMode: "parcel"\n  entry:\n    // Shorthand syntax\n    | string\n    // Normal syntax\n    | (\n        | {\n            scripts: string | [string, ...string[]]\n            styles?: string | string[]\n            html?: string\n          }\n        | {\n            scripts?: string | string[]\n            styles?: string | string[]\n            html: string\n          }\n      )\n  route: string // Path on which the parcel will be rendered\n  properties?: Record<string, unknown> // Data passed to the parcel\n  injectBase?: boolean // See explanation below\n}\n')),(0,o.kt)(i.Fragment,null),(0,o.kt)("example-frame",{base:"/frames/guides/applications/parcels",height:"550px",sourceTabs:[{filePath:"/index.html"},{filePath:"/config.json"},{filePath:"/config.yaml",isDefault:!0}],src:"/",title:"Base injection"}),(0,o.kt)("h2",{id:"lifecycle-methods"},"Lifecycle methods"),(0,o.kt)("p",null,"A parcel application has to provide a standard set of lifecycle methods. Those methods must be located either in an\ninline script in the application HTML asset, or as UMD script export within one of the application scrip assets."),(0,o.kt)("p",null,"The simplest form of a parcel application is shown in following example."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"0",label:"index.html",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Lifecycle methods</title>\n\n  <script src="lifecycle.js"><\/script>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>\n'))),(0,o.kt)(s.Z,{value:"1",label:"lifecycle.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function registerLifecycle(self) {\n  Object.assign(\n    self,\n    {\n      bootstrap: () => Promise.resolve(null),\n      mount: () => Promise.resolve(null),\n      unmount: () => Promise.resolve(null),\n      update: () => Promise.resolve(null),\n    }\n  )\n}\n\n// \ud83d\udc47 https://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html\n(function register(self, factory) {\n  self.__MY_PARCEL = {}\n  factory(self.__MICRO_LC_ERROR, self)\n}(window, registerLifecycle))\n")))),(0,o.kt)("p",null,"Lifecycle methods are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#bootstrap"},(0,o.kt)("inlineCode",{parentName:"a"},"bootstrap"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mount"},(0,o.kt)("inlineCode",{parentName:"a"},"mount"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#unmount"},(0,o.kt)("inlineCode",{parentName:"a"},"unmount"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#update"},(0,o.kt)("inlineCode",{parentName:"a"},"update")))),(0,o.kt)("p",null,"They all return ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<null>"),". Update is not mandatory and is available only for ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#lifecycle"},"error pages"),".\nThe others take as argument an object with the following interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface LifecycleProps {\n  name: string\n  container: HTMLElement\n  entry: {\n    html: string\n    scripts: string[]\n    styles: string[]\n  }\n  props: {\n    injectBase: boolean\n    microlcApi?: Partial<MicrolcApi>\n    [key: string]: unknown\n  }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," is the application unique identifier as per ",(0,o.kt)("micro-lc",null)," configuration key\n",(0,o.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#applications"},"applications"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"container")," is the application mount point which is provided by ",(0,o.kt)("micro-lc",null)," configuration key\n",(0,o.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#mountpointselector"},"mountPointSelector"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entry")," is the application assets object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"props")," is an object including application custom properties and ",(0,o.kt)("micro-lc",null)," injected properties. See\n",(0,o.kt)("a",{parentName:"li",href:"#properties"},"dedicated section")," for a detailed description.")),(0,o.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,o.kt)("p",null,"This lifecycle function will be called once, right before the parcel is mounted for the first time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function bootstrap(props: LifecycleProps): Promise<null> {\n  /* This is where you do one-time initialization */\n}\n")),(0,o.kt)("h3",{id:"mount"},"Mount"),(0,o.kt)("p",null,"This lifecycle function is called when the router selects the parcel for rendering."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function mount(props: LifecycleProps): Promise<null> {\n  /* This is where you tell a framework (e.g., React) to render some UI to the DOM */\n}\n")),(0,o.kt)("h3",{id:"unmount"},"Unmount"),(0,o.kt)("p",null,"When redirecting to another application, the parcel is unmounted."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When called, this function should clean up all DOM elements, DOM event listeners, leaked memory, globals, observable\nsubscriptions, etc. that were created at any point when the parcel was mounted.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function unmount(props: LifecycleProps): Promise<null> {\n  /* This is where you tell a framework (e.g., React) to un-render some ui from the DOM */\n}\n")),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("p",null,"This lifecycle method is only available for ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages#lifecycle"},"error pages"),"."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," injects two default properties, which can be extended in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on a per-application basis with the ",(0,o.kt)("inlineCode",{parentName:"li"},"properties")," key on the application configuration, and"),(0,o.kt)("li",{parentName:"ul"},"with configuration key ",(0,o.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#shared"},"shared")," for properties common to all applications\nand ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/applications/compose"},"composed")," DOM nodes (the content of ",(0,o.kt)("inlineCode",{parentName:"li"},"shared.properties")," will be spread on first level).")),(0,o.kt)("h3",{id:"injectbase"},(0,o.kt)("inlineCode",{parentName:"h3"},"injectBase")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If your application ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," already has a ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," tag, this property ",(0,o.kt)("strong",{parentName:"p"},"will not")," override it. ",(0,o.kt)("micro-lc",null),"\nwill consider this plugin to have been built with prior knowledge of its configuration and deploy route."),(0,o.kt)("p",{parentName:"admonition"},"From ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," version 2.1.0, the ",(0,o.kt)("inlineCode",{parentName:"p"},"injectBase")," property accepts also the value ",(0,o.kt)("inlineCode",{parentName:"p"},"override")," which discards\nincoming bundled ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," tags and injects its own according with the ",(0,o.kt)("inlineCode",{parentName:"p"},"parcel")," route settings.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"'override'")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Instructs ",(0,o.kt)("micro-lc",null)," on whether to inject a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"},"base tag")," to\nallow application internal routing to behave as if it was deployed on the bundle selected root, or any root that was\nselected at build time."),(0,o.kt)("p",null,"This property is meaningful if set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"'override'")," only on applications that ",(0,o.kt)("strong",{parentName:"p"},"do not have a hash router"),". On applications without\ninternal routing, this property does provide any feature."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For better compatibility, we recommend to choose ",(0,o.kt)("inlineCode",{parentName:"p"},"./")," as build time public URL.")),(0,o.kt)("p",null,"The example below is a showcase of two minimal React applications, one with a browser router and one with a hash router.\nThe correct usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"injectBase")," enables both of them to work correctly (and to coexist undisturbed)."),(0,o.kt)(i.Fragment,null),(0,o.kt)("example-frame",{base:"/frames/guides/applications/parcels/inject-base",height:"550px",sourceTabs:[{filePath:"/config.json"},{filePath:"/config.yaml",isDefault:!0},{filePath:"/browser-parcel.jsx"},{filePath:"/hash-parcel.jsx"}],src:"/",title:"Base injection"}),(0,o.kt)("h3",{id:"microlcapi"},(0,o.kt)("inlineCode",{parentName:"h3"},"microlcApi")),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," injects some useful utils to each application in order to share state, events, and styles. Read\n",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-api/"},"the full reference")," for a detailed description of this property."))}g.isMDXComponent=!0}}]);