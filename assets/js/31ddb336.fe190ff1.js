"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=o,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest",title:"Interface: GetNFTByOwnersOperationRequest",sidebar_label:"GetNFTByOwnersOperationRequest"},l=void 0,i={unversionedId:"api/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest",id:"api/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest",title:"Interface: GetNFTByOwnersOperationRequest",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / GetNFTByOwnersOperationRequest",source:"@site/docs/api/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest",title:"Interface: GetNFTByOwnersOperationRequest",sidebar_label:"GetNFTByOwnersOperationRequest"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"collectionBlacklist",id:"collectionblacklist",level:3},{value:"collectionWhitelist",id:"collectionwhitelist",level:3},{value:"cursor",id:"cursor",level:3},{value:"limit",id:"limit",level:3},{value:"network",id:"network",level:3},{value:"offset",id:"offset",level:3},{value:"ownerAddresses",id:"owneraddresses",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / GetNFTByOwnersOperationRequest"),(0,o.kt)("h1",{id:"interface-getnftbyownersoperationrequest"},"Interface: GetNFTByOwnersOperationRequest"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".GetNFTByOwnersOperationRequest"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest#collectionblacklist"},"collectionBlacklist")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest#collectionwhitelist"},"collectionWhitelist")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest#cursor"},"cursor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest#limit"},"limit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest#network"},"network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest#offset"},"offset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/getnftbyownersoperationrequest#owneraddresses"},"ownerAddresses"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"collectionblacklist"},"collectionBlacklist"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"collectionBlacklist"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The collection data id hashes of the collections to whitelist"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"collectionwhitelist"},"collectionWhitelist"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"collectionWhitelist"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The collection data id hashes of the collections to whitelist"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"cursor"},"cursor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"cursor"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The cursor to use for getting the next page"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"limit"},"limit"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"limit"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The number of results to return"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"network"},"network"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"network"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosnetworkinput"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNetworkInput"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The network of query. Defaults to mainnet."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"offset"},"offset"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"offset"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The number of results to skip"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"owneraddresses"},"ownerAddresses"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"ownerAddresses"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosaddressinput"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosAddressInput")),"[] ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosAddress")),"[]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The addresses of the owners to get tokens for"))}u.isMDXComponent=!0}}]);