"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16716],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={slug:"/moralisweb3/common-evm-utils/gettokenmetadatarequest",title:"Interface: GetTokenMetadataRequest",sidebar_label:"GetTokenMetadataRequest"},i=void 0,s={unversionedId:"api/moralisweb3/common-evm-utils/gettokenmetadatarequest",id:"api/moralisweb3/common-evm-utils/gettokenmetadatarequest",title:"Interface: GetTokenMetadataRequest",description:"moralis-monorepo / @moralisweb3/common-evm-utils / GetTokenMetadataRequest",source:"@site/docs/api/moralisweb3/common-evm-utils/gettokenmetadatarequest.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/gettokenmetadatarequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/gettokenmetadatarequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/gettokenmetadatarequest",title:"Interface: GetTokenMetadataRequest",sidebar_label:"GetTokenMetadataRequest"},sidebar:"sidebar",previous:{title:"GetTokenMetadataBySymbolResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/gettokenmetadatabysymbolresponseadapter"},next:{title:"GetTokenMetadataResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/gettokenmetadataresponseadapter"}},l={},m=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"addresses",id:"addresses",level:3},{value:"chain",id:"chain",level:3}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / GetTokenMetadataRequest"),(0,n.kt)("h1",{id:"interface-gettokenmetadatarequest"},"Interface: GetTokenMetadataRequest"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".GetTokenMetadataRequest"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Camelize"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"RequestParams"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"chain"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"addresses"'),">",">"),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"GetTokenMetadataRequest"))))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/gettokenmetadatarequest#addresses"},"addresses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/gettokenmetadatarequest#chain"},"chain"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"addresses"},"addresses"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"addresses"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddressish")),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"chain"},"chain"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"chain"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmchainish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmChainish"))))}u.isMDXComponent=!0}}]);