"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13266],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>k});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(o),k=a,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return o?n.createElement(d,s(s({ref:t},m),{},{components:o})):n.createElement(d,s({ref:t},m))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<r;i++)s[i]=o[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},96576:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=o(87462),a=(o(67294),o(3905));const r={slug:"/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse",title:"Class: AptosNFTTokensByCollectionResponse",sidebar_label:"AptosNFTTokensByCollectionResponse"},s=void 0,l={unversionedId:"api/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse",id:"api/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse",title:"Class: AptosNFTTokensByCollectionResponse",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosNFTTokensByCollectionResponse",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse",title:"Class: AptosNFTTokensByCollectionResponse",sidebar_label:"AptosNFTTokensByCollectionResponse"}},p={},i=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"fromJSON",id:"fromjson",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Properties",id:"properties-1",level:2},{value:"cursor",id:"cursor",level:3},{value:"hasNextPage",id:"hasnextpage",level:3},{value:"result",id:"result",level:3}],m={toc:i};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosNFTTokensByCollectionResponse"),(0,a.kt)("h1",{id:"class-aptosnfttokensbycollectionresponse"},"Class: AptosNFTTokensByCollectionResponse"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosNFTTokensByCollectionResponse"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse#create"},"create")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse#fromjson"},"fromJSON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse#tojson"},"toJSON"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse#cursor"},"cursor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse#hasnextpage"},"hasNextPage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse#result"},"result"))),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"create"},"create"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"create"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponse"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"input")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponseinput"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponseInput"))," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponse")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponse"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromjson"},"fromJSON"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"fromJSON"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"): ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponse"))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"json")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponsejson"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponseJSON")))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponse"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tojson"},"toJSON"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponsejson"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponseJSON"))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokensbycollectionresponsejson"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokensByCollectionResponseJSON"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"cursor"},"cursor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"cursor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,a.kt)("p",null,"The cursor to use for the next page of results. (Cursor is null on last page)"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hasnextpage"},"hasNextPage"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"hasNextPage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,a.kt)("p",null,"Indicates if there is a next page of results"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"result"},"result"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"result"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponse")),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,a.kt)("p",null,"The tokens for the given collection"))}c.isMDXComponent=!0}}]);