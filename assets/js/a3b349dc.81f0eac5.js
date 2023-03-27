"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76427],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),l=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,s=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=l(a),h=o,k=u["".concat(p,".").concat(h)]||u[h]||m[h]||s;return a?n.createElement(k,r(r({ref:e},c),{},{components:a})):n.createElement(k,r({ref:e},c))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,r[1]=i;for(var l=2;l<s;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26449:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const s={slug:"/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput",title:"Interface: AptosStateCheckpointTransactionInput",sidebar_label:"AptosStateCheckpointTransactionInput"},r=void 0,i={unversionedId:"api/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput",id:"api/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput",title:"Interface: AptosStateCheckpointTransactionInput",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosStateCheckpointTransactionInput",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput",title:"Interface: AptosStateCheckpointTransactionInput",sidebar_label:"AptosStateCheckpointTransactionInput"}},p={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"accumulatorRootHash",id:"accumulatorroothash",level:3},{value:"changes",id:"changes",level:3},{value:"eventRootHash",id:"eventroothash",level:3},{value:"gasUsed",id:"gasused",level:3},{value:"hash",id:"hash",level:3},{value:"stateChangeHash",id:"statechangehash",level:3},{value:"stateCheckpointHash",id:"statecheckpointhash",level:3},{value:"success",id:"success",level:3},{value:"timestamp",id:"timestamp",level:3},{value:"type",id:"type",level:3},{value:"version",id:"version",level:3},{value:"vmStatus",id:"vmstatus",level:3}],c={toc:l};function m(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosStateCheckpointTransactionInput"),(0,o.kt)("h1",{id:"interface-aptosstatecheckpointtransactioninput"},"Interface: AptosStateCheckpointTransactionInput"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosStateCheckpointTransactionInput"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#accumulatorroothash"},"accumulatorRootHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#changes"},"changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#eventroothash"},"eventRootHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#gasused"},"gasUsed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#hash"},"hash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#statechangehash"},"stateChangeHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#statecheckpointhash"},"stateCheckpointHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#success"},"success")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#timestamp"},"timestamp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#type"},"type")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#version"},"version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosstatecheckpointtransactioninput#vmstatus"},"vmStatus"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"accumulatorroothash"},"accumulatorRootHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"accumulatorRootHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"changes"},"changes"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"changes"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosstatecheckpointtransactionchangesiteminput"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosStateCheckpointTransactionChangesItemInput")),"[] ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosstatecheckpointtransactionchangesitemvalue"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosStateCheckpointTransactionChangesItemValue")),"[]"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"eventroothash"},"eventRootHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"eventRootHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"gasused"},"gasUsed"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"gasUsed"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"hash"},"hash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"hash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"statechangehash"},"stateChangeHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"stateChangeHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"statecheckpointhash"},"stateCheckpointHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"stateCheckpointHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"success"},"success"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"success"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"timestamp"},"timestamp"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"version"},"version"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"version"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vmstatus"},"vmStatus"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"vmStatus"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")))}m.isMDXComponent=!0}}]);