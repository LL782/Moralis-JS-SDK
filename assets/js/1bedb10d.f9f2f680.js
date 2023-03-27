"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44960],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(a),k=o,d=u["".concat(s,".").concat(k)]||u[k]||c[k]||r;return a?n.createElement(d,i(i({ref:e},m),{},{components:a})):n.createElement(d,i({ref:e},m))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99423:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={slug:"/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput",title:"Interface: AptosBlockMetadataTransactionInput",sidebar_label:"AptosBlockMetadataTransactionInput"},i=void 0,l={unversionedId:"api/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput",id:"api/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput",title:"Interface: AptosBlockMetadataTransactionInput",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosBlockMetadataTransactionInput",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput",title:"Interface: AptosBlockMetadataTransactionInput",sidebar_label:"AptosBlockMetadataTransactionInput"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"accumulatorRootHash",id:"accumulatorroothash",level:3},{value:"changes",id:"changes",level:3},{value:"epoch",id:"epoch",level:3},{value:"eventRootHash",id:"eventroothash",level:3},{value:"events",id:"events",level:3},{value:"failedProposerIndices",id:"failedproposerindices",level:3},{value:"gasUsed",id:"gasused",level:3},{value:"hash",id:"hash",level:3},{value:"id",id:"id",level:3},{value:"previousBlockVotesBitvec",id:"previousblockvotesbitvec",level:3},{value:"proposer",id:"proposer",level:3},{value:"round",id:"round",level:3},{value:"stateChangeHash",id:"statechangehash",level:3},{value:"stateCheckpointHash",id:"statecheckpointhash",level:3},{value:"success",id:"success",level:3},{value:"timestamp",id:"timestamp",level:3},{value:"type",id:"type",level:3},{value:"version",id:"version",level:3},{value:"vmStatus",id:"vmstatus",level:3}],m={toc:p};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosBlockMetadataTransactionInput"),(0,o.kt)("h1",{id:"interface-aptosblockmetadatatransactioninput"},"Interface: AptosBlockMetadataTransactionInput"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosBlockMetadataTransactionInput"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#accumulatorroothash"},"accumulatorRootHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#changes"},"changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#epoch"},"epoch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#eventroothash"},"eventRootHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#events"},"events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#failedproposerindices"},"failedProposerIndices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#gasused"},"gasUsed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#hash"},"hash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#id"},"id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#previousblockvotesbitvec"},"previousBlockVotesBitvec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#proposer"},"proposer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#round"},"round")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#statechangehash"},"stateChangeHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#statecheckpointhash"},"stateCheckpointHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#success"},"success")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#timestamp"},"timestamp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#type"},"type")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#version"},"version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput#vmstatus"},"vmStatus"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"accumulatorroothash"},"accumulatorRootHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"accumulatorRootHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"changes"},"changes"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"changes"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosblockmetadatatransactionchangesiteminput"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosBlockMetadataTransactionChangesItemInput")),"[] ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosblockmetadatatransactionchangesitemvalue"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosBlockMetadataTransactionChangesItemValue")),"[]"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"epoch"},"epoch"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"epoch"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"eventroothash"},"eventRootHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"eventRootHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"events"},"events"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"events"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptostransactioneventinput"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosTransactionEventInput")),"[] ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptostransactionevent"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosTransactionEvent")),"[]"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"failedproposerindices"},"failedProposerIndices"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"failedProposerIndices"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"gasused"},"gasUsed"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"gasUsed"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"hash"},"hash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"hash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"id"},"id"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"id"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"previousblockvotesbitvec"},"previousBlockVotesBitvec"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"previousBlockVotesBitvec"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"proposer"},"proposer"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"proposer"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosaddressinput"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosAddressInput"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"round"},"round"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"round"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"statechangehash"},"stateChangeHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"stateChangeHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"statecheckpointhash"},"stateCheckpointHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"stateCheckpointHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"success"},"success"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"success"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"timestamp"},"timestamp"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"version"},"version"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"version"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vmstatus"},"vmStatus"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"vmStatus"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")))}c.isMDXComponent=!0}}]);