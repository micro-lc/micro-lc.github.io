"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9514,3895],{8376:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Te});var a=n(6687),l=n(4923),r=n(4768),o=n(3949),i=n(339),c=n(6967),s=n(939),d=n(2868),m=n(3011),u=n(9586),b=n(3107),p=n(5439);const h="backToTopButton_w5vn",v="backToTopButtonShow_pZB0";function E(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),l=n[0],r=n[1],o=(0,a.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,s=i.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,l=null==n?void 0:n.scrollY;l&&(o.current?o.current=!1:a>=l?(s(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,r(!1))})),{shown:l,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,t&&v),type:"button",onClick:n})}var f=n(2455),g=n(9273),k=n(9824),_=n(4822),C=n(6428);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_ZuT3",Z="collapseSidebarButtonIcon__Hqw";function S(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(I,{className:Z}))}var x=n(8585),T=n(8920),y=n(2738),L=Symbol("EmptyContext"),w=a.createContext(L);function A(e){var t=e.children,n=(0,a.useState)(null),l=n[0],r=n[1],o=(0,a.useMemo)((function(){return{expandedItem:l,setExpandedItem:r}}),[l]);return a.createElement(w.Provider,{value:o},t)}var B=n(8431),M=n(2885),F=n(7899),P=n(3634),H=["item","onItemClick","activePath","level","index"];function W(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function R(e){var t=e.item,n=e.onItemClick,r=e.activePath,i=e.level,s=e.index,d=(0,T.Z)(e,H),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,k.L)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,P.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),f=(0,c._F)(t,r),g=(0,M.Mg)(h,r),_=(0,B.u)({initialState:function(){return!!b&&(!f&&t.collapsed)}}),I=_.collapsed,N=_.setCollapsed,Z=function(){var e=(0,a.useContext)(w);if(e===L)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=Z.expandedItem,x=Z.setExpandedItem,A=function(e){void 0===e&&(e=!I),x(e?null:s),N(e)};return function(e){var t=e.isActive,n=e.collapsed,l=e.updateCollapsed,r=(0,y.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:f,collapsed:I,updateCollapsed:A}),(0,a.useEffect)((function(){b&&null!=S&&S!==s&&v&&N(!0)}),[b,S,s,N,v]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(F.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?function(e){null==n||n(t),h?A(!1):(e.preventDefault(),A())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=E?E:"#":E},d),u),h&&b&&a.createElement(W,{categoryLabel:u,onClick:function(e){e.preventDefault(),A()}})),a.createElement(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(Q,{items:m,tabIndex:I?-1:0,onItemClick:n,activePath:r,level:i+1})))}var D=n(6752),U=n(2037);const Y="menuExternalLink_B0Ys";var z=["item","onItemClick","activePath","level","index"];function q(e){var t=e.item,n=e.onItemClick,r=e.activePath,i=e.level,s=(e.index,(0,T.Z)(e,z)),d=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,r),h=(0,D.Z)(d);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},a.createElement(F.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!h&&Y,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d},h&&{onClick:n?function(){return n(t)}:void 0},s),m,!h&&a.createElement(U.Z,null)))}const O="menuHtmlItem_Mu4s";function V(e){var t=e.item,n=e.level,r=e.index,i=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[O,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}var G=["item"];function J(e){var t=e.item,n=(0,T.Z)(e,G);switch(t.type){case"category":return a.createElement(R,(0,C.Z)({item:t},n));case"html":return a.createElement(V,(0,C.Z)({item:t},n));default:return a.createElement(q,(0,C.Z)({item:t},n))}}var j=["items"];function K(e){var t=e.items,n=(0,T.Z)(e,j);return a.createElement(A,null,t.map((function(e,t){return a.createElement(J,(0,C.Z)({key:t,item:e,index:t},n))})))}const Q=(0,a.memo)(K),X="menu_tkWg",$="menuWithAnnouncementBar_Z6hU";function ee(e){var t=e.path,n=e.sidebar,r=e.className,i=function(){var e=(0,x.nT)().isActive,t=(0,a.useState)(e),n=t[0],l=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&l(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",X,i&&$,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:n,activePath:t,level:1})))}const te="sidebar_bBho",ne="sidebarWithHideableNavbar_xhNs",ae="sidebarHidden_yJ6q",le="sidebarLogo_LOg4";function re(e){var t=e.path,n=e.sidebar,r=e.onCollapse,o=e.isHidden,i=(0,k.L)(),c=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,l.Z)(te,c&&ne,o&&ae)},c&&a.createElement(_.Z,{tabIndex:-1,className:le}),a.createElement(ee,{path:t,sidebar:n}),s&&a.createElement(S,{onClick:r}))}const oe=a.memo(re);var ie=n(846),ce=n(3397),se=function(e){var t=e.sidebar,n=e.path,r=(0,ce.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function de(e){return a.createElement(ie.Zo,{component:se,props:e})}const me=a.memo(de);function ue(e){var t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(oe,e),l&&a.createElement(me,e))}const be="expandButton_NSp1",pe="expandButtonIcon_fnc1";function he(e){var t=e.toggleSidebar;return a.createElement("div",{className:be,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:pe}))}const ve="docSidebarContainer_oIge",Ee="docSidebarContainerHidden_uJjd";function fe(e){var t,n=e.children,l=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function ge(e){var t=e.sidebar,n=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,i=(0,f.TH)().pathname,c=(0,a.useState)(!1),s=c[0],d=c[1],m=(0,a.useCallback)((function(){s&&d(!1),r((function(e){return!e}))}),[r,s]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,ve,n&&Ee),onTransitionEnd:function(e){e.currentTarget.classList.contains(ve)&&n&&d(!0)}},a.createElement(fe,null,a.createElement(ue,{sidebar:t,path:i,onCollapse:m,isHidden:s})),s&&a.createElement(he,{toggleSidebar:m}))}const ke={docMainContainer:"docMainContainer_rFYD",docMainContainerEnhanced:"docMainContainerEnhanced_UUPP",docItemWrapperEnhanced:"docItemWrapperEnhanced_YMkI"};function _e(e){var t=e.hiddenSidebarContainer,n=e.children,r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(ke.docMainContainer,(t||!r)&&ke.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ke.docItemWrapper,t&&ke.docItemWrapperEnhanced)},n))}const Ce="docPage_sx6R",Ie="docsWrapper_GOu_";function Ne(e){var t=e.children,n=(0,d.V)(),l=(0,a.useState)(!1),r=l[0],o=l[1];return a.createElement(m.Z,{wrapperClassName:Ie},a.createElement(E,null),a.createElement("div",{className:Ce},n&&a.createElement(ge,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),a.createElement(_e,{hiddenSidebarContainer:r},t)))}var Ze=n(3895),Se=n(2494);function xe(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Se.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Te(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(Ze.default,null);var i=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(xe,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(Ne,null,i)))))}},3895:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(6687),l=n(9586),r=n(4768),o=n(3011);function i(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);