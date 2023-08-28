"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),r=n(67294),o=n(34334),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,c=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),b=h[0],v=h[1],g=f({queryString:s,groupId:c}),y=g[0],w=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),O=k[0],N=k[1],E=function(){var e=null!=y?y:O;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),N(e)}),[w,N,p]),tabValues:p}}var b=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},52602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(63366),o=n(67294),i=n(3905),l=(n(74866),n(85162),["components"]),s={title:"Separation of concerns",description:"micro-lc viewport and DOM management",sidebar_label:"Separation of concerns",sidebar_position:10},c=void 0,u={unversionedId:"docs/concepts/separation-of-concerns",id:"docs/concepts/separation-of-concerns",title:"Separation of concerns",description:"micro-lc viewport and DOM management",source:"@site/docs/docs/concepts/separation-of-concerns.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/separation-of-concerns",permalink:"/docs/concepts/separation-of-concerns",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/concepts/separation-of-concerns.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:10,frontMatter:{title:"Separation of concerns",description:"micro-lc viewport and DOM management",sidebar_label:"Separation of concerns",sidebar_position:10},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/concepts/"},next:{title:"Composition",permalink:"/docs/concepts/composition"}},p={},d=[{value:"DOM management",id:"dom-management",level:2}],m={toc:d},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," is a web-component meant to be embedded in any web page. Within its context, it splits the viewport\nin two parts, ",(0,i.kt)("strong",{parentName:"p"},"layout")," and ",(0,i.kt)("strong",{parentName:"p"},"content"),", which are technically independent of one another, but can\n",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/communication"},"communicate")," to fill the functional need of cohesion."),(0,i.kt)(o.Fragment,null),(0,i.kt)("example-frame",{base:"/frames/concepts/separation-of-concerns",height:"550px",showSource:!1,src:"/",title:"Viewport separation"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The example above shows an application featuring a classic top bar/sidebar layout. Sometimes this might be neither the\ncase nor the best option, and that's why ",(0,i.kt)("micro-lc",null)," does not limit the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"shape and size of layout")," in any way.")),(0,i.kt)("p",null,"The main difference between layout and content is that layout is ",(0,i.kt)("strong",{parentName:"p"},"static"),", independent of the current window history\nstate (i.e., it does not refresh on URL changes), while content is ",(0,i.kt)("strong",{parentName:"p"},"dynamic"),", updating in response to useragent-driven\nURL changes."),(0,i.kt)("p",null,"This dual nature of ",(0,i.kt)("micro-lc",null)," is well-reflected on its\n",(0,i.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#configuration"},"configuration"),", since there is no overlap between layout and content\ncomposition."),(0,i.kt)("h2",{id:"dom-management"},"DOM management"),(0,i.kt)("p",null,"Being ",(0,i.kt)("micro-lc",null)," a web component, it has access to the\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"Shadow DOM API"),", which\n",(0,i.kt)("a",{parentName:"p",href:"#disabling-shadow-dom"},"can be used")," to encapsulate the layout."),(0,i.kt)("p",null,"This behaviour enables a complete separation between content and layout ",(0,i.kt)("strong",{parentName:"p"},"business logic"),". Separation which gains\nimportance considering the static and unmoving nature of layout with respect to the dynamism of content: layout should\nbehave the same way regardless of the current state of content and should not leak any internal logic besides the ones\nelected as touch points. Moreover, Shadow DOM brings a complete ",(0,i.kt)("strong",{parentName:"p"},"style segregation")," and the possibility to use\n",(0,i.kt)("strong",{parentName:"p"},"slots")," in the layout, which greatly enhance its flexibility and re-usability."),(0,i.kt)("p",null,"Even if it brings all the benefits detailed above, there may be some use cases for which ",(0,i.kt)("micro-lc",null)," Shadow\nDOM is not suitable and should be ",(0,i.kt)("strong",{parentName:"p"},"turned off"),"."),(0,i.kt)("p",null,"Examples may include the need to use in layout components with listeners attached to ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," firing\n",(0,i.kt)("a",{parentName:"p",href:"https://pm.dartus.fr/blog/a-complete-guide-on-shadow-dom-and-event-propagation/"},"not ",(0,i.kt)("inlineCode",{parentName:"a"},"composed")," events"),", global theming\nissues where CSS styles has to be accessible by both layout and content, desire to control the entire HTML in a single\nplace configuring both layout and content in the mount point."),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," offers the possibility to disable Shadow DOM, rendering content and layout in a single root, with\n",(0,i.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#properties--attributes"},(0,i.kt)("inlineCode",{parentName:"a"},"disableShadowDom"))," property (or mirrored boolean attribute\n",(0,i.kt)("inlineCode",{parentName:"p"},"disable-shadow-dom"),")."),(0,i.kt)("p",null,"For an in-depth explanation on ",(0,i.kt)("micro-lc",null)," DOM management, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout section"),"."))}h.isMDXComponent=!0}}]);