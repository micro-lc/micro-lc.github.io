"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7998],{68582:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var r,o=n(76687),i=n(56989),a=n(50566),s=n(31103),c=n(98613),l=n(45025),u=new URL("https://cdn.mia-platform.eu/micro-lc/preview/0.5.1/website/index.html"),d=function(e,t){return function(n){var r=n.data;if("object"==typeof r&&"type"in r&&"string"==typeof r.type&&"content"in r){var o=r.type,i=r.content;switch(o){case"mousemove":case"mousedown":var a=t.getBoundingClientRect(),s=i;t.dispatchEvent(new MouseEvent(o,Object.assign({},s,{clientX:s.clientX+a.left,clientY:s.clientY+a.right})));break;case"updated":!function(e,t){e.dispatchEvent(new CustomEvent("preview-updated",{detail:{instance:t}}))}(e,this.instance)}}}},f=function(e,t,n){return function(r){var o=r.currentTarget,i=o.contentWindow;if(null!==i){var f=new s.w0,m=new a.ZP(d(e,o),window,(0,a.nr)(i,{targetOrigin:t}),{log:function(t){if("debug"===e.__MICRO_LC_PREVIEW_LOG_LEVEL__){var n={background:this.colors.bg,color:this.colors.fg};console.groupCollapsed("%c Msg from "+e.origin+" (top) ",Object.entries(n).map((function(e){return e[0]+": "+e[1]})).join("; ")),console.info("window '"+e.origin+"' is sending a message of type %c "+t.type+" ","background: lightgreen; color: darkgreen"),console.log({content:t.content,instance:this.instance}),console.groupEnd()}}});m.send({content:{disableOverlay:!0,redirectTo:"/",run:!0},type:"options"});var g=n.pipe((0,c.q)(1)),p=n.pipe((0,l.T)(1));f.add(g.subscribe((function(e){var t;m.send((t={content:e,type:"new-configuration"},Object.assign({},t,{content:Object.assign({},t.content,{configuration:{content:{attributes:{style:"display: flex; flex-direction: column; height: 100%; width: 100%; gap: 0.5px"},content:[{attributes:{matcher:u.origin,origin:"https://my-domain",style:"\n                  position: sticky;\n                  top: 0;\n                  padding: 10px;\n                  background-color: #de1f9210;\n                  border-bottom: 1px solid #de1f92;\n                "},tag:"mlc-url"},{attributes:{style:"width: 100%; height: 100%; position: relative; overflow: hidden;"},content:{attributes:{"primary-color":"#de1f92",style:"width: 100%; height: 100%;"},content:{attributes:{style:"width: 100%; height: 100%; overflow: auto;"},properties:{config:t.content.configuration},tag:"micro-lc"},tag:"mlc-loading-animation"},tag:"div"}],tag:"div"},sources:["https://cdn.mia-platform.eu/micro-lc/layout/2.1.0/dist/mlc-iconic.js","https://cdn.mia-platform.eu/micro-lc/layout/2.1.0/dist/mlc-url.js","https://cdn.mia-platform.eu/micro-lc/layout/2.1.0/dist/mlc-loading-animation.js","https://cdn.mia-platform.eu/micro-lc/orchestrator/2.2.0/dist/micro-lc.production.js"]}})})))}))),f.add(p.subscribe((function(){f.unsubscribe(),m.disconnect(),function(e){e.src=String(e.src)}(o)})))}}},m=n(855),g=n(55659),p=n(20866),h=n(13858),v=n(40778),y=n(52788),w=n(87477),b=n(63053),E=n(20069),C=n(90002),x=n(14729),M=n(86261),k=n(9786),j=n(33625),S=n(7063),L=n(81595),Z=n(82696),O={applications:{about:{config:{content:{attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px"},content:[{content:"About \ud83d\udcef",tag:"span"},{attributes:{href:"https://mia-platform.eu/",target:"_blank"},content:"Check out what we do at Mia-Platform!",tag:"a"}],tag:"div"}},integrationMode:"compose",route:"/about"},angular:{entry:"https://raw.githubusercontent.com/micro-lc/micro-lc.github.io/gh-pages/applications/angular13/index.html",injectBase:"override",integrationMode:"parcel",route:"/angular/"},home:{config:{content:{attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px"},content:[{content:"Welcome to the micro-lc playground! \ud83d\udc4b",tag:"span"},{attributes:{href:"https://micro-lc.io/",target:"_blank"},content:"Get started with the official documentation!",tag:"a"}],tag:"div"}},integrationMode:"compose",route:"/home"},react:{entry:"https://raw.githubusercontent.com/micro-lc/micro-lc.github.io/gh-pages/applications/react-browser-router/index.html",injectBase:!0,integrationMode:"parcel",route:"/react/"}},layout:{content:[{properties:{logo:{url:"https://avatars.githubusercontent.com/u/92730708?s=200&v=4"},menuItems:[{icon:{library:"@ant-design/icons-svg",selector:"HomeOutlined"},id:"home",label:"Home",type:"application"},{icon:{library:"@ant-design/icons-svg",selector:"ContactsOutlined"},id:"about",label:"About",type:"application"},{icon:{library:"@fortawesome/free-brands-svg-icons",selector:"faReact"},id:"react",label:"React",type:"application"},{icon:{library:"@fortawesome/free-brands-svg-icons",selector:"faAngular"},id:"angular",label:"Angular",type:"application"}],mode:"fixedSideBar"},tag:"mlc-layout"}],sources:"https://cdn.jsdelivr.net/npm/@micro-lc/layout@2.1.0/dist/mlc-layout.js"},settings:{defaultUrl:"/home"},version:2},R=n(773),N=n(30546),P=(n(53717),n(19378),n(70840),n(3681),n(95806),n(91687),n(31459),n(12965),n(49827),n(2135),n(63041),n(91042),n(98042),n(49391),n(12255),n(30033),n(6411),n(86753),n(59876),n(46997),n(25225),n(68753),n(29816),n(62258),n(96739),n(4843),n(4094),n(5497),n(67345),n(22097),n(2265),n(63788),n(86274),n(19523),n(15877),n(74089),n(13595),n(25999),n(80421),n(19160),n(28034),n(35483),n(86138),n(18515),n(44106),n(43661),n(42476),n(12661),n(61170),n(84730),n(84797),n(96458),n(32377),n(13001),n(65939),n(44498),n(90763),n(81206),n(74541),n(24960),n(37323),"json"),A="yaml",I={"*.config":{uri:"https://raw.githubusercontent.com/micro-lc/micro-lc/main/packages/interfaces/schemas/v2/config.schema.json#"}},W=function(e,t,n){return""+new URL(window.location.pathname.replace(/\/$/,""),window.location.href).href+t.replace("*",null!=e?e:"")+"."+n},_=Object.entries(I).reduce((function(e,t){var n,r=t[0],o=t[1];return e[r]=Object.assign({},o,{fileMatch:(n=r,["**/"+n+"."+P,"**/"+n+"."+A])}),e}),{});r={default:function(){return new Worker(new URL(n.p+n.u(4065),n.b))},json:function(){return new Worker(new URL(n.p+n.u(7111),n.b))},yaml:function(){return new Worker(new URL(n.p+n.u(944),n.b))}},window.MonacoEnvironment={getWorker:function(e,t){return(0,x.Z)((0,C.Z)().mark((function e(){return(0,C.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("json"!==t&&"yaml"!==t){e.next=2;break}return e.abrupt("return",Promise.resolve(r[t]()));case 2:return e.abrupt("return",Promise.resolve(r.default()));case 3:case"end":return e.stop()}}),e)})))()}},R.languages.json.jsonDefaults.setDiagnosticsOptions({allowComments:!0,enableSchemaRequest:!0,schemas:[_["*.config"]],validate:!0}),(0,N.iV)({enableSchemaRequest:!0,schemas:[_["*.config"]]});var H=function(){var e=(0,x.Z)((0,C.Z)().mark((function e(t){var n,r;return(0,C.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(n=window.MonacoEnvironment)||!n.getWorker){e.next=4;break}return"then"in(r=window.MonacoEnvironment.getWorker("",t))||(r=Promise.resolve(r)),e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=n(48532),D=n(79758);function V(e){var t=this;return{to:function(n){if(e===n)return{error:!1,messages:[],value:"json"===n?(0,D.Z)(t,{whitespace:!1}).trim():t};var r,o,i;try{if("jsonyaml"===""+e+n)i=t,r=J.ZP.dump(JSON.parse((0,D.Z)(i,{whitespace:!1}).trim()),{schema:J.ZP.JSON_SCHEMA});else o=t,r=JSON.stringify(J.ZP.load(o,{json:!0,schema:J.ZP.JSON_SCHEMA}));return{error:!1,messages:[],value:r}}catch(a){return{error:!0,messages:a instanceof Error?[a.message]:[],value:void 0}}}}}var K=function(e){return{from:V.bind(e)}},F={automaticLayout:!0,insertSpaces:!0,minimap:{autohide:!0},model:null,renderWhitespace:"boundary",scrollBeyondLastLine:!1,tabSize:2},U=function(){},z=function(e,t,n){return Promise.resolve(!0)};var B=function(){var e=(0,x.Z)((0,C.Z)().mark((function e(t,n,r){return(0,C.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",H(n).then((function(e){var n,o=new Promise((function(e){n=e})),i=t.onDidChangeModelContent((function(){i.dispose(),null==n||n(e)}));return t.setValue(r),o}),(function(){return t.setValue(r)})).then((function(e){return e?new Promise((function(e,n){var r=setTimeout((function(){var o;null==(o=t.getAction("editor.action.formatDocument"))||o.run().then((function(){var e;return null==(e=t.getAction("editor.foldAll"))?void 0:e.run()})).then((function(){var e;return null==(e=t.getAction("editor.unfold"))?void 0:e.run()})).then(e).catch(n).finally((function(){return clearTimeout(r)}))}),500)})):Promise.reject(new TypeError("Could not react worker for model "+n))})).catch(U));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(e,t,n,r){var o,i=t[n],a=R.editor,s=e.getModel(),c=null!=(o=i&&(a.getModel(i)||a.createModel(r,n,i)))?o:null,l=Promise.resolve();if(s!==c){var u=e.onDidChangeModel((function(){l=B(e,n,r),u.dispose()}));e.setModel(c)}else l=B(e,n,r);return l},X="@microlc:_content",G=function(e){return function(e,t){var n=(void 0===t?{}:t).lintErrorIsError,r=e.getModel();if(null!==r){var o=r.uri,i=R.editor,a=R.MarkerSeverity,s=i.getModelMarkers({resource:o}).reduce((function(e,t){var r=t.severity,o=t.message;return r===a.Error?(e.ok=!1,e.errors.push(o)):r===a.Warning&&(n&&(e.ok=!1),e.warnings.push(o)),e}),{errors:[],ok:!0,warnings:[]}),c=s.ok,l=s.warnings,u=s.errors,d=r.getLanguageId();if("json"!==d&&"yaml"!==d)return{error:!0,messages:["No available language"],value:void 0};if(!c)return{error:!0,messages:[].concat(u,n?l:[]),value:void 0};var f=K(e.getValue()).from(d).to("json");return Object.assign({},f,{messages:[].concat(l,f.messages)})}}(e)};function Y(e,t,n){var r=(0,o.useRef)(),a=(0,o.useMemo)((function(){return new M.X(!0)}),[]),c=(0,o.useCallback)((function(){return a.next(!0)}),[a]),l=(0,o.useCallback)((function(){return a.next(!1)}),[a]);(0,o.useEffect)((function(){var e=a.subscribe((function(e){return n.loading(e)}));return function(){return e.unsubscribe()}}),[a,n]);var u=(0,o.useMemo)((function(){return{json:R.Uri.parse(W(void 0,"*.config",P)),yaml:R.Uri.parse(W(void 0,"*.config",A))}}),[]),d=(0,o.useState)(),f=d[0],m=d[1];(0,o.useEffect)((function(){var e=r.current;if(e){var t,n=R.editor.create(e,F);if(null!==e.parentElement){var o=0;e.parentElement.childNodes.forEach((function(t){t!==e&&"clientHeight"in t&&"number"==typeof t.clientHeight&&(o+=t.clientHeight)})),n.layout({height:e.parentElement.clientHeight-o,width:e.parentElement.clientWidth});var i=e.parentElement,a=new ResizeObserver((function(t){var r=t[0].contentRect,o=0;i.childNodes.forEach((function(t){t!==e&&"clientHeight"in t&&"number"==typeof t.clientHeight&&(o+=t.clientHeight)})),n.layout({height:r.height-o,width:r.width})}));a.observe(i),t=function(){return a.disconnect()}}return function(e,t){t.addCommand(R.KeyMod.CtrlCmd|R.KeyCode.Enter,(function(){null==e||e.dispatchEvent(new KeyboardEvent("keypress",{ctrlKey:!0,key:"Enter"}))}))}(e.parentElement,n),function(e,t){t.addCommand(R.KeyMod.CtrlCmd|R.KeyCode.Space,(function(){var t;null==e||null==(t=e.ownerDocument.defaultView)||t.dispatchEvent(new KeyboardEvent("keydown",{ctrlKey:!0,key:" "}))}))}(e.parentElement,n),function(e){var t=e.getContribution("editor.linkDetector");t&&(t.openerService._defaultExternalOpener.openExternal=z)}(n),m(n),function(){return null==t?void 0:t()}}}),[r]);var g=(0,o.useState)(U),p=g[0],h=g[1],v=(0,o.useState)(U),y=v[0],w=v[1];(0,o.useEffect)((function(){var o=r.current;if(f&&o){var a=new s.w0,d=new i.t(1);d.pipe((0,k.O)(function(e){var t;return null!=(t=e.localStorage.getItem(X))?t:JSON.stringify(O)}(window))).subscribe((function(r){c();var o=O;try{o=JSON.parse(r)}catch(s){console.error("local storage was corrupted")}var i,a=(i=o,{to:function(e){try{return{error:!1,messages:[],value:"yaml"===e?J.ZP.dump(i,{schema:J.ZP.JSON_SCHEMA}):JSON.stringify(i)}}catch(t){return{error:!0,messages:t instanceof Error?[t.message]:[],value:void 0}}}}).to(t);if(a.error)return n.errorMessage(a),l();T(f,u,t,a.value).finally((function(){e.next({configuration:JSON.parse(r),contexts:new Map,tags:[]}),l()}))}));var m=o.parentElement?(0,j.R)(o.parentElement,"keypress"):S.C,g=function(t){var r;if(void 0!==t)d.next(t),r={error:!1,messages:[],value:t};else if(!(r=G(f))||r.error)return void(r&&n.errorMessage(Object.assign({},r,{messages:["components.editor.error"]})));!function(e,t){e.localStorage.setItem(X,t)}(window,r.value),e.next({configuration:JSON.parse(r.value),contexts:new Map,tags:[]}),n.errorMessage(0===r.messages.length?"":Object.assign({},r,{messages:["components.editor.warning"]}))};return a.add(m.pipe((0,L.h)((function(e){return"Enter"===e.key&&e.ctrlKey})),(0,Z.b)((function(e){e.stopPropagation()}))).subscribe((function(){return g()}))),h((function(){return function(){return g()}})),w((function(){return function(){return g(JSON.stringify(O))}})),function(){var e,t;null==(e=(t={dispose:void 0}).dispose)||e.call(t),a.unsubscribe()}}}),[r,f,c,l,n,e]);var b=(0,o.useCallback)((function(e){if(c(),!f)return l(),!1;var t=G(f);if(!t)return l(),!1;var r=t.error,o=t.value;if(r)return n.errorMessage({error:!0,messages:["components.editor.error.conversion"],value:void 0}),l(),!1;var i=K(o).from("json").to(e),a=i.error,s=i.value,d=i.messages;return a?(n.errorMessage({error:a,messages:["components.editor.error.conversion"],value:s}),l(),!1):(T(f,u,e,s).finally((function(){n.errorMessage(0===d.length?"":{error:a,messages:["components.editor.warning"],value:s}),l()})),!0)}),[f,c,l,n]);return{dispatchReset:y,dispatchSubmit:p,editorRef:r,handleChangeModel:b}}var q=["id","onClick"],$={errorFilled:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.42646 8.38289C9.13416 8.18039 8.73002 8.20932 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L10.9395 12L8.46967 14.4697L8.38289 14.5735C8.18039 14.8658 8.20932 15.27 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L12 13.0605L14.4697 15.5303L14.5735 15.6171C14.8658 15.8196 15.27 15.7907 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L13.0605 12L15.5303 9.53033L15.6171 9.42646C15.8196 9.13416 15.7907 8.73002 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L12 10.9395L9.53033 8.46967L9.42646 8.38289Z",successFilled:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM17.0668 8.5088C16.7955 8.19579 16.3218 8.16195 16.0088 8.43323L9.576 14.007L7.99092 12.6348L7.88109 12.5557C7.57501 12.3747 7.17399 12.4325 6.93299 12.7109C6.66186 13.024 6.69593 13.4977 7.00908 13.7688L9.08601 15.567L9.19759 15.6471C9.47038 15.8072 9.82155 15.7805 10.0681 15.5668L16.9912 9.56677L17.0852 9.46934C17.308 9.19221 17.3079 8.78704 17.0668 8.5088Z",warningFilled:"M21.997 12.2337C21.997 17.7552 17.5209 22.2312 11.9995 22.2312C6.47799 22.2312 2.00195 17.7552 2.00195 12.2337C2.00195 6.71224 6.47799 2.23621 11.9995 2.23621C17.5209 2.23621 21.997 6.71224 21.997 12.2337ZM11.9995 16.9116C12.5173 16.9116 12.937 16.4918 12.937 15.9741C12.937 15.4563 12.5173 15.0366 11.9995 15.0366C11.4817 15.0366 11.062 15.4563 11.062 15.9741C11.062 16.4918 11.4817 16.9116 11.9995 16.9116ZM11.7495 7.55597C11.4734 7.55597 11.2495 7.77983 11.2495 8.05597V12.5552C11.2495 12.8313 11.4734 13.0552 11.7495 13.0552H12.2495C12.5257 13.0552 12.7495 12.8313 12.7495 12.5552V8.05597C12.7495 7.77983 12.5257 7.55597 12.2495 7.55597H11.7495Z"};function Q(e){var t=e.id,n=e.onClick,r=(0,g.Z)(e,q);return o.createElement("svg",(0,m.Z)({onClick:n,role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r),o.createElement("path",{d:$[t],fill:"currentColor",fillRule:"evenodd"}))}var ee=["style","render"],te=p.Z,ne="@microlc:editorFormat",re={"components.editor.error":"Error while applying changes","components.editor.error.conversion":"Error while converting the model","components.editor.warning":"Configuration does not comply"},oe=(0,h.Z)({palette:{primary:{dark:"#c81c83",light:"#e3349d",main:"#de1f92"}}});const ie=function(e){var t=e.style,n=e.render,r=(0,g.Z)(e,ee),i=(0,o.useMemo)((function(){return function(e){var t,n=e.sessionStorage.getItem(ne);return"string"==typeof(t=n)&&["json","yaml"].includes(t)?n:"json"}(window)}),[]),a=(0,o.useState)(i),s=a[0],c=a[1],l=(0,o.useState)(!0),u=l[0],d=l[1],f=(0,o.useState)(""),p=f[0],h=f[1],C=Y(n,i,(0,o.useMemo)((function(){return{errorMessage:h,loading:d}}),[])),x=C.editorRef,M=C.dispatchSubmit,k=C.dispatchReset,j=C.handleChangeModel;return o.createElement("div",(0,m.Z)({},r,{style:Object.assign({display:"flex",flexDirection:"column"},t)}),o.createElement(v.Z,{theme:oe},o.createElement(y.Z,{alignItems:"center",display:u?"flex":"none",flexDirection:"column",flexGrow:"1",justifyContent:"center",width:"100%"},o.createElement(w.Z,null)),o.createElement("div",{ref:function(e){x.current=e},style:{boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",display:u?"none":"flex",height:"100%",width:"100%"}}),o.createElement("div",{style:{alignItems:"baseline",display:"flex",gap:"16px",padding:"16px 24px",textAlign:"center"}},o.createElement(te,{onChange:function(e){var t=e.target.value;j(t)&&(!function(e,t){e.sessionStorage.setItem(ne,t)}(window,t),c(t))},size:"small",value:s},o.createElement(b.Z,{value:"json"},"JSON"),o.createElement(b.Z,{value:"yaml"},"YAML")),o.createElement("div",{style:{flexGrow:1}}),o.createElement("div",{style:{alignItems:"center",display:"flex",gap:"10px"}},function(e){if(e)return"string"==typeof e?e:e.error?o.createElement(o.Fragment,null,o.createElement(Q,{color:"var(--playground-color-red)",height:12,id:"errorFilled",width:12}),o.createElement("span",null,re[e.messages.join("\n")])):0!==e.messages.length?o.createElement(o.Fragment,null,o.createElement(Q,{color:"var(--playground-color-orange)",height:12,id:"warningFilled",width:12}),o.createElement("span",null,re[e.messages.join("\n")])):void 0}(p)),o.createElement(E.Z,{onClick:M,variant:"contained"},"Apply"),o.createElement(E.Z,{onClick:k,variant:"contained"},"Reset"))))};var ae=["children","tag","border","borderStyle"];function se(e){var t=e.clientX-this.x;this.left.style.width=this.width+t+"px"}function ce(e){var t=this.parent.ownerDocument.defaultView;if(t){var n=this.parent.getBoundingClientRect().x,r=t.getComputedStyle(this.left),o=t.getComputedStyle(this.right),i=parseInt(r.borderRightWidth,10)+parseInt(o.borderLeftWidth,10);this.x=e.clientX,this.width=parseInt(r.width,10);var a=Math.abs(e.clientX-n-this.width),s=se.bind(this);a<i&&(t.addEventListener("mousemove",s),t.addEventListener("mouseup",(function(){t.removeEventListener("mousemove",s)})))}}var le=function(e,t){var n=ce.bind(t);return e.addEventListener("mousedown",n),function(){e.removeEventListener("mousedown",n)}};const ue=function(e){var t=e.children,n=e.tag,r=e.border,i=void 0===r?"both":r,a=e.borderStyle,s=(0,g.Z)(e,ae),c=(0,o.useRef)(null);return(0,o.useEffect)((function(){if(c.current){var e=Array.from(c.current.childNodes).filter((function(e){return"style"in e})),t=e[0],n=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach((function(e){e.style.resize="horizontal",e.style.flexDirection="column"}))}(t,n),"right"!==i&&function(e,t){e.style.borderRight=null!=t?t:"6px solid rgba(0, 0, 0, 0.05)",e.style.cursor="col-resize",e.childNodes.forEach((function(e){return"style"in e&&(e.style.cursor="default")}))}(t,a),"left"!==i&&function(e,t){e.style.borderLeft=null!=t?t:"6px solid rgba(0, 0, 0, 0.05)",e.style.cursor="col-resize",e.childNodes.forEach((function(e){return"style"in e&&(e.style.cursor="default")}))}(n,a),le(c.current,{left:t,parent:c.current,right:n,width:parseInt(t.style.width,10),x:0})}}),[i,a,c]),(0,o.createElement)(null!=n?n:"div",Object.assign({ref:function(e){e&&(c.current=e)}},s),t)};const de=function(){var e=(0,o.useMemo)((function(){return new i.t(1)}),[]),t=(0,o.useMemo)((function(){return f(window,u.origin,e.asObservable())}),[e]);return o.createElement(ue,{border:"left",borderStyle:"12px solid var(--playground-color-grey)",className:"playground grow-first",tag:"main"},o.createElement(ie,{render:e,style:{minWidth:"400px",width:"40%"}}),o.createElement("div",{style:{display:"flex",flexGrow:1}},o.createElement("iframe",{onLoad:t,src:u.href,style:{border:"none",height:"100%",width:"100%"},title:"preview"},o.createElement("p",null,"Your browser does not support iframes"))))}},55952:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(98080),o=n(15982),i=n(76687);function a(){return i.createElement(o.Z,{title:"Playground",wrapperClassName:"playground container"},i.createElement(r.Z,null,(function(){var e=n(68582).default;return i.createElement(e,null)})))}}}]);