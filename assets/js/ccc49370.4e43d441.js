"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6103],{29095:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(76687),r=n(64923),o=n(64948),l=n(40324),i=n(64280),c=n(20672),s=n(99455),u=n(48792),m=n(96902),d=n(96493);function f(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,u.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,u.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function v(){var e,t=(0,i.C)(),n=t.assets,r=t.metadata,l=r.title,c=r.description,s=r.date,u=r.tags,m=r.authors,d=r.frontMatter,f=d.keywords,v=null!=(e=n.image)?e:d.image;return a.createElement(o.d,{title:l,description:c,keywords:f,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),u.length>0&&a.createElement("meta",{property:"article:tag",content:u.map((function(e){return e.label})).join(",")}))}var b=n(6985);function g(e){var t=e.sidebar,n=e.children,r=(0,i.C)(),o=r.metadata,l=r.toc,u=o.nextItem,m=o.prevItem,d=o.frontMatter,v=d.hide_table_of_contents,g=d.toc_min_heading_level,h=d.toc_max_heading_level;return a.createElement(c.Z,{sidebar:t,toc:!v&&l.length>0?a.createElement(b.Z,{toc:l,minHeadingLevel:g,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(u||m)&&a.createElement(f,{nextItem:u,prevItem:m}))}function h(e){var t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},a.createElement(v,null),a.createElement(g,{sidebar:e.sidebar},a.createElement(t,null))))}},6985:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(48792),r=n(91219),o=n(76687),l=n(64923),i=n(33034);const c={tableOfContents:"tableOfContents_ppYy",docItemContainer:"docItemContainer_M8tE"};var s=["className"],u="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function d(e){var t=e.className,n=(0,r.Z)(e,s);return o.createElement("div",{className:(0,l.Z)(c.tableOfContents,"thin-scrollbar",t)},o.createElement(i.Z,(0,a.Z)({},n,{linkClassName:u,linkActiveClassName:m})))}},33034:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(48792),r=n(91219),o=n(76687),l=n(19759),i=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,o=(0,r.Z)(e,i);n>=0?t[n].children.push(o):a.push(o)})),a}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,o=e.find((function(e){return u(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(o))?o:null!=(a=e[e.indexOf(o)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,o.useRef)(0),t=(0,l.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,o.useRef)(void 0),n=d();(0,o.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),c=m(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function v(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?o.createElement("ul",{className:r?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(v,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}const b=o.memo(v);var g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,v=void 0===d?void 0:d,h=e.minHeadingLevel,p=e.maxHeadingLevel,E=(0,r.Z)(e,g),w=(0,l.L)(),L=null!=h?h:w.tableOfContents.minHeadingLevel,N=null!=p?p:w.tableOfContents.maxHeadingLevel,x=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,o.useMemo)((function(){return s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:L,maxHeadingLevel:N});return f((0,o.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:N}}),[m,v,L,N])),o.createElement(b,(0,a.Z)({toc:x,className:i,linkClassName:m},E))}},32927:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(20940),r=n(64923),o=n(76687);const l={"browser-window":"browser-window_tmbm","browser-window-header":"browser-window-header_K85o",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze","browser-window-address-bar":"browser-window-address-bar_pYY_",dot:"dot_giz1","browser-window-menu-icon":"browser-window-menu-icon_sffi",bar:"bar_rrRL","browser-window-body":"browser-window-body_Vexb"};function i(e){var t=e.children,n=e.height,a=void 0===n?"700px":n,i=e.url,c=void 0===i?"http://localhost:3000":i;return o.createElement("div",{className:l["browser-window"],style:{height:a}},o.createElement("div",{className:l["browser-window-header"]},o.createElement("div",{className:l.buttons},o.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),o.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),o.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,r.Z)(l["browser-window-address-bar"],"text--truncate")},c),o.createElement("div",{className:l["browser-window-menu-icon"]},o.createElement("div",null,o.createElement("span",{className:l.bar}),o.createElement("span",{className:l.bar}),o.createElement("span",{className:l.bar})))),o.createElement("div",{className:l["browser-window-body"]},t))}var c=n(85459);function s(e){var t=e.base,n=e.filePath,a=(0,o.useState)(""),r=a[0],l=a[1];(0,o.useEffect)((function(){var e=[t,n].join(""),a=new AbortController;return fetch(e,{signal:a.signal}).then((function(e){return e.ok?e.text():Promise.reject(new TypeError("Cannot retrieve source code"))})).then((function(e){return l(e)})).catch((function(e){e instanceof DOMException&&"AbortError"===e.name||console.error(e)})),function(){a.abort()}}),[t,n]);var i=n.slice(2+(n.lastIndexOf(".")-1>>>0));return o.createElement(c.Z,{language:i},r)}var u=n(79693),m=n(51948);function d(e){var t=e.base,n=e.tabs,a=(0,o.useMemo)((function(){return n.map((function(e,n){var a=e.isDefault,r=e.filePath,l=e.label,i=null!=l?l:r.substring(r.lastIndexOf("/")+1);return o.createElement(u.Z,{default:a,key:n,label:i,value:n},o.createElement(s,{base:t,filePath:r}))}))}),[t,n]);return o.createElement(m.Z,null,a)}var f=n(99610);const v="micro_j8I5",b="lc_Z5FW";const g="error_G822";var h=n(67888);const p=Object.assign({},h.Z,{"example-frame":function(e){var t=e.base,n=e.height,r=e.showSource,l=void 0===r||r,c=e.sourceTabs,u=e.src,m=e.title,v=(0,o.useRef)(),b=(0,o.useState)(!0),g=b[0],h=b[1],p=(0,o.useState)(void 0),E=p[0],w=p[1],L=(0,a.Z)("/img/loading.svg");return(0,o.useEffect)((function(){var e,t,n,a,r,o,l;v.current&&(e=v.current,t=function(e){return w(e)},r=function(n){var r,o;void 0===n&&(n=null==(o=e.contentWindow)?void 0:o.location.href);var l=null!=(r=n)?r:"";if(l!==a)return a=l,t(l)},o=function(){setTimeout(r)},l=function(){var t,n;null==(t=e.contentWindow)||t.removeEventListener("unload",o),null==(n=e.contentWindow)||n.addEventListener("unload",o)},e.addEventListener("load",(function(){l(),r()})),null==(n=e.contentWindow)||n.addEventListener("popstate",(function(e){var t,n=null!=(t=e.target)?t:window;r(n.location.href)})),l())}),[v,v.current]),o.createElement(o.Fragment,null,o.createElement(i,{height:n,url:E},g&&o.createElement("div",{style:{background:"#ffffff",height:"40px",left:"calc(50% - 20px)",position:"absolute",top:"calc(50% - 20px)",width:"40px"}},o.createElement("img",{alt:"Loading...",src:L})),o.createElement("iframe",{onLoad:function(){return h(!1)},ref:function(e){v.current=e},src:[t,u].join(""),style:{height:"100%",width:"100%"},title:m})),l&&o.createElement(f.Z,{summary:o.createElement("summary",null,"Source code")},c?o.createElement(d,{base:t,tabs:c}):o.createElement(s,{base:t,filePath:u})))},"source-tabs":d,"micro-lc":function(){return o.createElement(o.Fragment,null,o.createElement("span",{className:v},"micro"),o.createElement("span",{className:b},"-lc"))},"console-error-line":function(e){var t=e.children;return o.createElement("p",{className:g},t)}})}}]);