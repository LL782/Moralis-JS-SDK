"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,m=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(r),k=o,d=p["".concat(m,".").concat(k)]||p[k]||u[k]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=p;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={slug:"/moralisweb3/common-evm-utils/getblockrequest",title:"Interface: GetBlockRequest",sidebar_label:"GetBlockRequest"},i=void 0,a={unversionedId:"api/moralisweb3/common-evm-utils/getblockrequest",id:"api/moralisweb3/common-evm-utils/getblockrequest",title:"Interface: GetBlockRequest",description:"moralis-monorepo / @moralisweb3/common-evm-utils / GetBlockRequest",source:"@site/docs/api/moralisweb3/common-evm-utils/getblockrequest.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/getblockrequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/getblockrequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/getblockrequest",title:"Interface: GetBlockRequest",sidebar_label:"GetBlockRequest"},sidebar:"sidebar",previous:{title:"EvmTransactionVerboseInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtransactionverboseinput"},next:{title:"GetBlockResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/getblockresponseadapter"}},m={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blockNumberOrHash",id:"blocknumberorhash",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"chain",id:"chain",level:3},{value:"include",id:"include",level:3},{value:"Inherited from",id:"inherited-from-1",level:4}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / GetBlockRequest"),(0,o.kt)("h1",{id:"interface-getblockrequest"},"Interface: GetBlockRequest"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".GetBlockRequest"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Camelize"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"RequestParams"),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"chain"'),">",">"),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"GetBlockRequest"))))),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/getblockrequest#blocknumberorhash"},"blockNumberOrHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/getblockrequest#chain"},"chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/getblockrequest#include"},"include"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"blocknumberorhash"},"blockNumberOrHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"blockNumberOrHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,"Camelize.blockNumberOrHash"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"chain"},"chain"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"chain"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmchainish"},(0,o.kt)("inlineCode",{parentName:"a"},"EvmChainish"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"include"},"include"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"include"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},'"internal_transactions"')),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,"Camelize.include"))}u.isMDXComponent=!0}}]);