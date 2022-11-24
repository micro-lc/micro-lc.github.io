"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3089],{2130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(6687),r=n(4923),l=n(3704),o=n(4768),c=n(3949),i=n(8562),s=n(9586),u=n(97);function m(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(u.Z,{permalink:n,title:a.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&a.createElement(u.Z,{permalink:r,title:a.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var d=n(2494),f=n(1452),g=n(6700);function E(e){var t=e.items,n=e.component,r=void 0===n?g.Z:n;return a.createElement(a.Fragment,null,t.map((function(e){var t=e.content;return a.createElement(f.n,{key:t.metadata.permalink,content:t},a.createElement(r,null,a.createElement(t,null)))})))}function p(e){var t=e.metadata,n=(0,l.Z)().siteConfig.title,r=t.blogDescription,c=t.blogTitle,i="/"===t.permalink?n:c;return a.createElement(a.Fragment,null,a.createElement(o.d,{title:i,description:r}),a.createElement(d.Z,{tag:"blog_posts_list"}))}function b(e){var t=e.metadata,n=e.items,r=e.sidebar;return a.createElement(i.Z,{sidebar:r},a.createElement(E,{items:n}),a.createElement(m,{metadata:t}))}function v(e){return a.createElement(o.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogListPage)},a.createElement(p,e),a.createElement(b,e))}},4171:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(1646),r=n(4923),l=n(6687);const o="browser-window_tmbm",c="browser-window-header_K85o",i="buttons_uHc7",s="browser-window-address-bar_pYY_",u="dot_giz1",m="browser-window-menu-icon_sffi",d="bar_rrRL",f="browser-window-body_Vexb";function g(e){var t=e.children,n=e.height,a=void 0===n?"700px":n,g=e.url,E=void 0===g?"http://localhost:3000":g;return l.createElement("div",{className:o,style:{height:a}},l.createElement("div",{className:c},l.createElement("div",{className:i},l.createElement("span",{className:u,style:{background:"#f25f58"}}),l.createElement("span",{className:u,style:{background:"#fbbe3c"}}),l.createElement("span",{className:u,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,r.Z)(s,"text--truncate")},E),l.createElement("div",{className:m},l.createElement("div",null,l.createElement("span",{className:d}),l.createElement("span",{className:d}),l.createElement("span",{className:d})))),l.createElement("div",{className:f},t))}var E=n(1276);function p(e){var t=e.base,n=e.filePath,a=(0,l.useState)(""),r=a[0],o=a[1];(0,l.useEffect)((function(){var e=[t,n].join(""),a=new AbortController;return fetch(e,{signal:a.signal}).then((function(e){return e.ok?e.text():Promise.reject(new TypeError("Cannot retrieve source code"))})).then((function(e){return o(e)})).catch((function(e){e instanceof DOMException&&"AbortError"===e.name||console.error(e)})),function(){a.abort()}}),[t,n]);var c=n.slice(2+(n.lastIndexOf(".")-1>>>0));return l.createElement(E.Z,{language:c},r)}var b=n(2886),v=n(406);function h(e){var t=e.base,n=e.tabs,a=(0,l.useMemo)((function(){return n.map((function(e,n){var a=e.isDefault,r=e.filePath,o=e.label,c=null!=o?o:r.substring(r.lastIndexOf("/")+1);return l.createElement(b.Z,{default:a,key:n,label:c,value:n},l.createElement(p,{base:t,filePath:r}))}))}),[t,n]);return l.createElement(v.Z,null,a)}var w=n(8368);const N="micro_j8I5",Z="lc_Z5FW";const k="error_G822";var x=n(6754);const _=Object.assign({},x.Z,{"example-frame":function(e){var t=e.base,n=e.height,r=e.showSource,o=void 0===r||r,c=e.sourceTabs,i=e.src,s=e.title,u=(0,l.useRef)(),m=(0,l.useState)(!0),d=m[0],f=m[1],E=(0,l.useState)(void 0),b=E[0],v=E[1],N=(0,a.Z)("/img/loading.svg");return(0,l.useEffect)((function(){var e,t,n,a,r,l,o;u.current&&(e=u.current,t=function(e){return v(e)},r=function(n){var r,l;void 0===n&&(n=null==(l=e.contentWindow)?void 0:l.location.href);var o=null!=(r=n)?r:"";if(o!==a)return a=o,t(o)},l=function(){setTimeout(r)},o=function(){var t,n;null==(t=e.contentWindow)||t.removeEventListener("unload",l),null==(n=e.contentWindow)||n.addEventListener("unload",l)},e.addEventListener("load",(function(){o(),r()})),null==(n=e.contentWindow)||n.addEventListener("popstate",(function(e){var t,n=null!=(t=e.target)?t:window;console.log("popstate",n.location.href),r(n.location.href)})),o())}),[u,u.current]),l.createElement(l.Fragment,null,l.createElement(g,{height:n,url:b},d&&l.createElement("div",{style:{background:"#ffffff",height:"40px",left:"calc(50% - 20px)",position:"absolute",top:"calc(50% - 20px)",width:"40px"}},l.createElement("img",{alt:"Loading...",src:N})),l.createElement("iframe",{onLoad:function(){return f(!1)},ref:function(e){u.current=e},src:[t,i].join(""),style:{height:"100%",width:"100%"},title:s})),o&&l.createElement(w.Z,{summary:l.createElement("summary",null,"Source code")},c?l.createElement(h,{base:t,tabs:c}):l.createElement(p,{base:t,filePath:i})))},"source-tabs":h,"micro-lc":function(){return l.createElement(l.Fragment,null,l.createElement("span",{className:N},"micro"),l.createElement("span",{className:Z},"-lc"))},"console-error-line":function(e){var t=e.children;return l.createElement("p",{className:k},t)}})}}]);