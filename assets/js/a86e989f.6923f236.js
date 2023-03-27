"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/moralisweb3/common-evm-utils/searchnftsrequest",title:"Interface: SearchNFTsRequest",sidebar_label:"SearchNFTsRequest"},l=void 0,o={unversionedId:"api/moralisweb3/common-evm-utils/searchnftsrequest",id:"api/moralisweb3/common-evm-utils/searchnftsrequest",title:"Interface: SearchNFTsRequest",description:"moralis-monorepo / @moralisweb3/common-evm-utils / SearchNFTsRequest",source:"@site/docs/api/moralisweb3/common-evm-utils/searchnftsrequest.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/searchnftsrequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/searchnftsrequest",title:"Interface: SearchNFTsRequest",sidebar_label:"SearchNFTsRequest"},sidebar:"sidebar",previous:{title:"RunContractFunctionResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/runcontractfunctionresponseadapter"},next:{title:"SearchNFTsResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsresponseadapter"}},m={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"addresses",id:"addresses",level:3},{value:"chain",id:"chain",level:3},{value:"cursor",id:"cursor",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"disableTotal",id:"disabletotal",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"filter",id:"filter",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"format",id:"format",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"fromBlock",id:"fromblock",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"fromDate",id:"fromdate",level:3},{value:"limit",id:"limit",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"q",id:"q",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"toBlock",id:"toblock",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"toDate",id:"todate",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / SearchNFTsRequest"),(0,a.kt)("h1",{id:"interface-searchnftsrequest"},"Interface: SearchNFTsRequest"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".SearchNFTsRequest"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Camelize"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"RequestParams"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"chain"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"addresses"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"from_date"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"to_date"'),">",">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"SearchNFTsRequest"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#addresses"},"addresses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#chain"},"chain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#cursor"},"cursor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#disabletotal"},"disableTotal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#filter"},"filter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#format"},"format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#fromblock"},"fromBlock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#fromdate"},"fromDate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#limit"},"limit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#q"},"q")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#toblock"},"toBlock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/searchnftsrequest#todate"},"toDate"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"addresses"},"addresses"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"addresses"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressish"},(0,a.kt)("inlineCode",{parentName:"a"},"EvmAddressish")),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chain"},"chain"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"chain"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmchainish"},(0,a.kt)("inlineCode",{parentName:"a"},"EvmChainish"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cursor"},"cursor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"cursor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"Camelize.cursor"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"disabletotal"},"disableTotal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"disableTotal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"Camelize.disableTotal"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filter"},"filter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"filter"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"name"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"description"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"attributes"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"global"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"name,description"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"name,attributes"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"description,attributes"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"name,description,attributes"')),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"Camelize.filter"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"format"},"format"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"format"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"hex"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"decimal"')),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,"Camelize.format"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromblock"},"fromBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fromBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,"Camelize.fromBlock"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromdate"},"fromDate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"fromDate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"DateInput")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"limit"},"limit"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"limit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,"Camelize.limit"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"q"},"q"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"q"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,"Camelize.q"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"toblock"},"toBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"toBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.kt)("p",null,"Camelize.toBlock"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"todate"},"toDate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"toDate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"DateInput")))}u.isMDXComponent=!0}}]);