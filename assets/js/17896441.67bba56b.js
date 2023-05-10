"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7918],{81075:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n(76687),r=n(64948),l=n(46387),o=a.createContext(null);function c(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(o.Provider,{value:n},t)}function s(){var e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function i(){var e,t=s(),n=t.metadata,l=t.frontMatter,o=t.assets;return a.createElement(r.d,{title:n.title,description:n.description,keywords:l.keywords,image:null!=(e=o.image)?e:l.image})}var d=n(64923),m=n(88173),u=n(48792),v=n(96902),b=n(96493);function f(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(b.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(b.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){var e=s().metadata;return a.createElement(f,{previous:e.previous,next:e.next})}var h=n(71084),E=n(29139),g=n(48444),w=n(40324),L=n(11305),N=n(12548);var C={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){var t=C[e.versionMetadata.banner];return a.createElement(t,e)}function Z(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(E.Z,{to:n,onClick:r},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function k(e){var t,n=e.className,r=e.versionMetadata,l=(0,h.Z)().siteConfig.title,o=(0,g.gA)({failfast:!0}).pluginId,c=(0,L.J)(o).savePreferredVersionName,s=(0,g.Jo)(o),i=s.latestDocSuggestion,m=s.latestVersionSuggestion,u=null!=i?i:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,d.Z)(n,w.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(_,{siteTitle:l,versionMetadata:r})),a.createElement("div",{className:"margin-top--md"},a.createElement(Z,{versionLabel:m.label,to:u.path,onClick:function(){return c(m.name)}})))}function x(e){var t=e.className,n=(0,N.E)();return n.banner?a.createElement(k,{className:t,versionMetadata:n}):null}function y(e){var t=e.className,n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,w.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function H(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function T(e){var t=e.lastUpdatedBy;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function U(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:w.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(H,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(T,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var A=n(6100),M=n(50414);const I={lastUpdated:"lastUpdated_x5_v"};function B(e){return a.createElement("div",{className:(0,d.Z)(w.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M.Z,e)))}function O(e){var t=e.editUrl,n=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,d.Z)(w.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",I.lastUpdated)},(n||r)&&a.createElement(U,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function S(){var e=s().metadata,t=e.editUrl,n=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,o=e.tags,c=o.length>0,i=!!(t||n||l);return c||i?a.createElement("footer",{className:(0,d.Z)(w.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(B,{tags:o}),i&&a.createElement(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var P=n(94378),D=n(33034),V=n(91219);const R={tocCollapsibleButton:"tocCollapsibleButton_GKEj",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_O7yt"};var j=["collapsed"];function F(e){var t=e.collapsed,n=(0,V.Z)(e,j);return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",R.tocCollapsibleButton,!t&&R.tocCollapsibleButtonExpanded,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const z={tocCollapsible:"tocCollapsible_uGd3",tocCollapsibleContent:"tocCollapsibleContent__MmG",tocCollapsibleExpanded:"tocCollapsibleExpanded_CUIK"};function G(e){var t=e.toc,n=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,o=(0,P.u)({initialState:!0}),c=o.collapsed,s=o.toggleCollapsed;return a.createElement("div",{className:(0,d.Z)(z.tocCollapsible,!c&&z.tocCollapsibleExpanded,n)},a.createElement(F,{collapsed:c,onClick:s}),a.createElement(P.z,{lazy:!0,className:z.tocCollapsibleContent,collapsed:c},a.createElement(D.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}const K={tocMobile:"tocMobile_ASy2"};function W(){var e=s(),t=e.toc,n=e.frontMatter;return a.createElement(G,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,d.Z)(w.k.docs.docTocMobile,K.tocMobile)})}var J=n(6985);function Y(){var e=s(),t=e.toc,n=e.frontMatter;return a.createElement(J.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:w.k.docs.docTocDesktop})}var q=n(74469),Q=n(76685);function X(e){var t,n,r,l,o=e.children,c=(t=s(),n=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:n.title);return a.createElement("div",{className:(0,d.Z)(w.k.docs.docMarkdown,"markdown")},c&&a.createElement("header",null,a.createElement(q.Z,{as:"h1"},c)),a.createElement(Q.Z,null,o))}var $=n(76529),ee=n(75862),te=n(20940);function ne(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_O0xZ"};function re(){var e=(0,te.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(E.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ne,{className:ae.breadcrumbHomeIcon})))}const le={breadcrumbsContainer:"breadcrumbsContainer_ciJh"};function oe(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(E.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function ce(e){var t=e.children,n=e.active,r=e.index,l=e.addMicrodata;return a.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function se(){var e=(0,$.s1)(),t=(0,ee.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(w.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(re,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(ce,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(oe,{href:t.href,isLast:r},t.label))})))):null}const ie={docItemContainer:"docItemContainer_livn",docItemCol:"docItemCol_b1_K"};function de(e){var t,n,r,l,o,c,i=e.children,u=(t=s(),n=t.frontMatter,r=t.toc,l=(0,m.i)(),o=n.hide_table_of_contents,c=!o&&r.length>0,{hidden:o,mobile:c?a.createElement(W,null):void 0,desktop:!c||"desktop"!==l&&"ssr"!==l?void 0:a.createElement(Y,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!u.hidden&&ie.docItemCol)},a.createElement(x,null),a.createElement("div",{className:ie.docItemContainer},a.createElement("article",null,a.createElement(se,null),a.createElement(y,null),u.mobile,a.createElement(X,null,i),a.createElement(S,null)),a.createElement(p,null))),u.desktop&&a.createElement("div",{className:"col col--3"},u.desktop))}function me(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(c,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(i,null),a.createElement(de,null,a.createElement(n,null))))}},6985:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(48792),r=n(91219),l=n(76687),o=n(64923),c=n(33034);const s={tableOfContents:"tableOfContents_ppYy",docItemContainer:"docItemContainer_M8tE"};var i=["className"],d="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function u(e){var t=e.className,n=(0,r.Z)(e,i);return l.createElement("div",{className:(0,o.Z)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(c.Z,(0,a.Z)({},n,{linkClassName:d,linkActiveClassName:m})))}},33034:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(48792),r=n(91219),l=n(76687),o=n(19759),c=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,c);n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,l.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=u();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=m(c,{anchorTopOffset:n.current}),i=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function b(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(b,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}const f=l.memo(b);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,b=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,r.Z)(e,p),w=(0,o.L)(),L=null!=h?h:w.tableOfContents.minHeadingLevel,N=null!=E?E:w.tableOfContents.maxHeadingLevel,C=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return i({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:L,maxHeadingLevel:N});return v((0,l.useMemo)((function(){if(m&&b)return{linkClassName:m,linkActiveClassName:b,minHeadingLevel:L,maxHeadingLevel:N}}),[m,b,L,N])),l.createElement(f,(0,a.Z)({toc:C,className:c,linkClassName:m},g))}},32927:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(20940),r=n(64923),l=n(76687);const o={"browser-window":"browser-window_tmbm","browser-window-header":"browser-window-header_K85o",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze","browser-window-address-bar":"browser-window-address-bar_pYY_",dot:"dot_giz1","browser-window-menu-icon":"browser-window-menu-icon_sffi",bar:"bar_rrRL","browser-window-body":"browser-window-body_Vexb"};function c(e){var t=e.children,n=e.height,a=void 0===n?"700px":n,c=e.url,s=void 0===c?"http://localhost:3000":c;return l.createElement("div",{className:o["browser-window"],style:{height:a}},l.createElement("div",{className:o["browser-window-header"]},l.createElement("div",{className:o.buttons},l.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),l.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),l.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,r.Z)(o["browser-window-address-bar"],"text--truncate")},s),l.createElement("div",{className:o["browser-window-menu-icon"]},l.createElement("div",null,l.createElement("span",{className:o.bar}),l.createElement("span",{className:o.bar}),l.createElement("span",{className:o.bar})))),l.createElement("div",{className:o["browser-window-body"]},t))}var s=n(85459);function i(e){var t=e.base,n=e.filePath,a=(0,l.useState)(""),r=a[0],o=a[1];(0,l.useEffect)((function(){var e=[t,n].join(""),a=new AbortController;return fetch(e,{signal:a.signal}).then((function(e){return e.ok?e.text():Promise.reject(new TypeError("Cannot retrieve source code"))})).then((function(e){return o(e)})).catch((function(e){e instanceof DOMException&&"AbortError"===e.name||console.error(e)})),function(){a.abort()}}),[t,n]);var c=n.slice(2+(n.lastIndexOf(".")-1>>>0));return l.createElement(s.Z,{language:c},r)}var d=n(79693),m=n(51948);function u(e){var t=e.base,n=e.tabs,a=(0,l.useMemo)((function(){return n.map((function(e,n){var a=e.isDefault,r=e.filePath,o=e.label,c=null!=o?o:r.substring(r.lastIndexOf("/")+1);return l.createElement(d.Z,{default:a,key:n,label:c,value:n},l.createElement(i,{base:t,filePath:r}))}))}),[t,n]);return l.createElement(m.Z,null,a)}var v=n(99610);const b="micro_j8I5",f="lc_Z5FW";const p="error_G822";var h=n(67888);const E=Object.assign({},h.Z,{"example-frame":function(e){var t=e.base,n=e.height,r=e.showSource,o=void 0===r||r,s=e.sourceTabs,d=e.src,m=e.title,b=(0,l.useRef)(),f=(0,l.useState)(!0),p=f[0],h=f[1],E=(0,l.useState)(void 0),g=E[0],w=E[1],L=(0,a.Z)("/img/loading.svg");return(0,l.useEffect)((function(){var e,t,n,a,r,l,o;b.current&&(e=b.current,t=function(e){return w(e)},r=function(n){var r,l;void 0===n&&(n=null==(l=e.contentWindow)?void 0:l.location.href);var o=null!=(r=n)?r:"";if(o!==a)return a=o,t(o)},l=function(){setTimeout(r)},o=function(){var t,n;null==(t=e.contentWindow)||t.removeEventListener("unload",l),null==(n=e.contentWindow)||n.addEventListener("unload",l)},e.addEventListener("load",(function(){o(),r()})),null==(n=e.contentWindow)||n.addEventListener("popstate",(function(e){var t,n=null!=(t=e.target)?t:window;r(n.location.href)})),o())}),[b,b.current]),l.createElement(l.Fragment,null,l.createElement(c,{height:n,url:g},p&&l.createElement("div",{style:{background:"#ffffff",height:"40px",left:"calc(50% - 20px)",position:"absolute",top:"calc(50% - 20px)",width:"40px"}},l.createElement("img",{alt:"Loading...",src:L})),l.createElement("iframe",{onLoad:function(){return h(!1)},ref:function(e){b.current=e},src:[t,d].join(""),style:{height:"100%",width:"100%"},title:m})),o&&l.createElement(v.Z,{summary:l.createElement("summary",null,"Source code")},s?l.createElement(u,{base:t,tabs:s}):l.createElement(i,{base:t,filePath:d})))},"source-tabs":u,"micro-lc":function(){return l.createElement(l.Fragment,null,l.createElement("span",{className:b},"micro"),l.createElement("span",{className:f},"-lc"))},"console-error-line":function(e){var t=e.children;return l.createElement("p",{className:p},t)}})}}]);