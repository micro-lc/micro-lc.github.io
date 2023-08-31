"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(34334),i=n(12466),l=n(16550),s=n(91980),p=n(67392),c=n(50012);function u(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function b(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,u=m(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:u})})),h=b[0],g=b[1],v=f({queryString:s,groupId:p}),k=v[0],y=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],T=N[1],C=function(){var e=null!=k?k:w;return d({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){C&&g(C)}),[C]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),T(e)}),[y,T,u]),tabValues:u}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,c=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==l&&(u(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},25885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>f});var a=n(87462),r=n(63366),o=n(67294),i=n(3905),l=n(74866),s=n(85162),p=["components"],c={title:"Composition",description:"DOM composition from markup language content",sidebar_label:"Composition",sidebar_position:20},u=void 0,m={unversionedId:"docs/concepts/composition",id:"docs/concepts/composition",title:"Composition",description:"DOM composition from markup language content",source:"@site/docs/docs/concepts/composition.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/composition",permalink:"/docs/concepts/composition",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/concepts/composition.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",sidebarPosition:20,frontMatter:{title:"Composition",description:"DOM composition from markup language content",sidebar_label:"Composition",sidebar_position:20},sidebar:"docs",previous:{title:"Separation of concerns",permalink:"/docs/concepts/separation-of-concerns"},next:{title:"Communication",permalink:"/docs/concepts/communication"}},d={},f=[{value:"How it works",id:"how-it-works",level:2},{value:"The complete process",id:"the-complete-process",level:3}],b={toc:f},h="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)(h,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The key of ",(0,i.kt)("micro-lc",null)," flexibility lies \u2013 among others \u2013 in the built-in capacity of ",(0,i.kt)("strong",{parentName:"p"},"transforming")," a string or\na serialization markup language content, as JSON or YAML, into a valid, appendable DOM. "),(0,i.kt)("p",null,"This behaviour enables the possibility to dynamically instruct ",(0,i.kt)("micro-lc",null)," on the shape of a page by writing a\nconfiguration file to be loaded at runtime, and can be applied both on ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout")," and content\nwhen using ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"compose integration")," strategy."),(0,i.kt)("p",null,"Let us take a look at a working example. The frame below shows a simple use case where the page is divided into layout\nand content and both are constructed dynamically from a textual configuration."),(0,i.kt)(o.Fragment,null),(0,i.kt)("example-frame",{base:"/frames/concepts/composition",height:"550px",sourceTabs:[{filePath:"/index.html"},{filePath:"/config.json"},{filePath:"/config.yaml",isDefault:!0}],src:"/",title:"Composition"}),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The composition functionality is exposed though ",(0,i.kt)("micro-lc",null)," ",(0,i.kt)("a",{parentName:"p",href:"/api/composer-api"},"composer API"),".")),(0,i.kt)("p",null,"At height level, this feature is achieved by leveraging\n",(0,i.kt)("a",{parentName:"p",href:"https://lit.dev/docs/libraries/standalone-templates/"},"lit-html library")," APIs combined with a\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lexical_analysis"},"lexer")," and a ",(0,i.kt)("em",{parentName:"p"},"non-eval")," interpolation library."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"One of the main feature of ",(0,i.kt)("micro-lc",null)," composition is, actually, that it does not exploit any kind of unsafe\nruntime evaluation (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Function"),") which are strongly discouraged on websites and mitigated via\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions"},"omission in ",(0,i.kt)("inlineCode",{parentName:"a"},"Content-Security-Policy")),".")),(0,i.kt)("p",null,"Almost any HTML element can be seen, from the point of view of the DOM, as the combination of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a tag (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"<div>"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<header>"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<aside>"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<img>"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<micro-lc>"),"),"),(0,i.kt)("li",{parentName:"ul"},"a list of attributes (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},'style="margin: 10px;"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'class="my-css-class"'),"),"),(0,i.kt)("li",{parentName:"ul"},"a list of boolean attributes (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"hidden"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),"),"),(0,i.kt)("li",{parentName:"ul"},"a list of properties injected by JavaScript on the DOM counterpart of the given element,"),(0,i.kt)("li",{parentName:"ul"},"a content inside of the tag, (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Hello, World!"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<p>My Paragraph</p>"),").")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML element"',title:'"HTML','element"':!0},"<p \u2b05 Tag\n  id=\"my-awesome-paragraph\" \u2b05 Attribute\n  disabled \u2b05 Boolean attribute\n>\n  Hello, World! \u2b05 Content\n</p>\n\n<script>\n  const element = document.getElementById('my-awesome-paragraph')\n  element.className = 'my-custom-dynamic-class' \u2b05 Property\n<\/script>\n")),(0,i.kt)("p",null,"HTML elements can be full represented in JavaScript with the help of ",(0,i.kt)("inlineCode",{parentName:"p"},"lit-html")," ES6\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"},"tagged templates"),",\nthat evaluate attributes, boolean attributes and properties. The example above would translate in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Lit HTML element rappresentation"',title:'"Lit',HTML:!0,element:!0,'rappresentation"':!0},"import {html} from 'lit-html'\n\nconst customClassName = 'my-custom-dynamic-class'\n\nconst template = html`\n  <p \u2b05 Tag\n    id=\"my-awesome-paragraph\" \u2b05 Attribute\n    disabled=\"\" \u2b05 Boolean attribute\n    .className=${customClassName} \u2b05 Property\n  >\n    Hello, World! \u2b05 Content\n  </p>\n`\n")),(0,i.kt)("p",null,"Now that the desired HTML tree is described in JavaScript, a ",(0,i.kt)("strong",{parentName:"p"},"render function")," attaches the template to a provided\ncontainer (i.e., another HTML element) by interpreting non-dotted keys (e.g, ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled"),") as attributes, and dotted\nkeys (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"className"),") as JavaScript properties."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In ",(0,i.kt)("micro-lc",null)," composition api, properties can be any combination of numbers, strings, arrays or JSON\nequivalent objects.")),(0,i.kt)("p",null,"Before doing this, however, we need to address the fact that we do not know the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"customClassName")," at compile\ntime, and we would like to inject it at runtime (without using ",(0,i.kt)("inlineCode",{parentName:"p"},"eval"),", of course!). To solve this issue,\n",(0,i.kt)("micro-lc",null)," provides a ",(0,i.kt)("strong",{parentName:"p"},"lexer")," and an ",(0,i.kt)("strong",{parentName:"p"},"interpolation API")," to plug a\n",(0,i.kt)("a",{parentName:"p",href:"https://lit.dev/docs/templates/expressions/#well-formed-html"},"fully compliant")," template literal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lit-html"),"\nlibrary."),(0,i.kt)("p",null,"Together, these tools make the ",(0,i.kt)("a",{parentName:"p",href:"/api/composer-api"},"composition API"),", the flow of which is fully visualized in the\nexample below."),(0,i.kt)("h3",{id:"the-complete-process"},"The complete process"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"0",label:"Starting point",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Let us consider the following JSON file describing what we would like out DOM to be."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON DOM description"',title:'"JSON',DOM:!0,'description"':!0},'{\n  "tag": "div",\n  "attributes": {\n    "style": "margin: 10px;"\n  },\n  "content": [\n    {\n      "tag": "p",\n      "content": "Some Text"\n    },\n    {\n      "tag": "button",\n      "booleanAttributes": ["disabled"],\n      "properties": {\n        "myProp": { "foo": "bar" },\n        "special": "special.[0]"\n      },\n      "content": "Click Me!"\n    }\n  ]\n}\n'))),(0,i.kt)(s.Z,{value:"1",label:"First step",mdxType:"TabItem"},(0,i.kt)("p",null,"The first step consists in parsing the JSON file into JavaScript object (and \u2013 ",(0,i.kt)("em",{parentName:"p"},"if in development mode")," \u2013 checking it\nagainst a provided ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON schema"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript parsed object"',title:'"JavaScript',parsed:!0,'object"':!0},"const obj = {\n  tag: 'div',\n  attributes: {\n    style: 'margin: 10px;'\n  },\n  content: [\n    {\n      tag: 'p',\n      content: 'Some Text',\n    },\n    {\n      tag: 'button',\n      booleanAttributes: ['disabled'],\n      properties: {\n        myProp: { foo: 'bar' },\n        special: 'special.[0]'\n      },\n      content: 'Click Me!'\n    },\n  ],\n}\n"))),(0,i.kt)(s.Z,{value:"2",label:"Second step",mdxType:"TabItem"},(0,i.kt)("p",null,"The second step consists in transforming the JavaScript object into a template literal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Template literal"',title:'"Template','literal"':!0},"const literals = [\n  '<div style=\"margin: 10px;\"><p>Some Text</p><button disabled .myProp=',\n  ' .special=',\n  '>Click Me!</button></div>'\n]\n\nconst values = [\"{\\\"foo\\\":\\\"bar\\\"}\", 'special.[0]']\n"))),(0,i.kt)(s.Z,{value:"3",label:"Third step",mdxType:"TabItem"},(0,i.kt)("p",null,"The third step consists in parsing values associated with properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Template literal with parsed values"',title:'"Template',literal:!0,with:!0,parsed:!0,'values"':!0},"const literals = [\n  '<div style=\"margin: 10px;\"><p>Some Text</p><button disabled .myProp=',\n  ' .special=',\n  '>Click Me!</button></div>'\n]\n\nconst values = [{ foo: 'bar' }, 'special.[0]']\n"))),(0,i.kt)(s.Z,{value:"4",label:"Fourth step",mdxType:"TabItem"},(0,i.kt)("p",null,"The fourth step consists in interpolating values with any previously provided context (similar to\n",(0,i.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/"},"handlebars"),", without the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"eval"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Interpolated context"',title:'"Interpolated','context"':!0},"const context = { special: [1, 'string'] }\ninterpolate(values, context)\n\n// Output: [{ foo: 'bar' }, 1]\n"))),(0,i.kt)(s.Z,{value:"5",label:"Final result",mdxType:"TabItem"},(0,i.kt)("p",null,"Finally, the result is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"lit-html")," render."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Final HTML result"',title:'"Final',HTML:!0,'result"':!0},"<div style=\"margin: 10px;\">\n  <p>Some Text</p>\n  <button disabled>\n    Click Me!\n  </button>\n</div>\n\n<script>\n  const buttonElement = document.querySelector('button')\n  \n  console.log(buttonElement.myProp, button.special)\n  // Output: { foo: 'bar' }, 1\n<\/script>\n")))))}g.isMDXComponent=!0}}]);