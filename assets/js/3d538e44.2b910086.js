"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(m,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"/moralisweb3/common-streams-utils/updatestreamevmrequest",title:"Interface: UpdateStreamEvmRequest",sidebar_label:"UpdateStreamEvmRequest"},l=void 0,o={unversionedId:"api/moralisweb3/common-streams-utils/updatestreamevmrequest",id:"api/moralisweb3/common-streams-utils/updatestreamevmrequest",title:"Interface: UpdateStreamEvmRequest",description:"moralis-monorepo / @moralisweb3/common-streams-utils / UpdateStreamEvmRequest",source:"@site/docs/api/moralisweb3/common-streams-utils/updatestreamevmrequest.md",sourceDirName:"api/moralisweb3/common-streams-utils",slug:"/moralisweb3/common-streams-utils/updatestreamevmrequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-streams-utils/updatestreamevmrequest",title:"Interface: UpdateStreamEvmRequest",sidebar_label:"UpdateStreamEvmRequest"},sidebar:"sidebar",previous:{title:"UpdateStreamAptosResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamaptosresponseadapter"},next:{title:"UpdateStreamEvmResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmresponseadapter"}},m={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"abi",id:"abi",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"advancedOptions",id:"advancedoptions",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"allAddresses",id:"alladdresses",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"chains",id:"chains",level:3},{value:"demo",id:"demo",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"getNativeBalances",id:"getnativebalances",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"includeContractLogs",id:"includecontractlogs",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"includeInternalTxs",id:"includeinternaltxs",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"includeNativeTxs",id:"includenativetxs",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"tag",id:"tag",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"topic0",id:"topic0",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"triggers",id:"triggers",level:3},{value:"webhookUrl",id:"webhookurl",level:3},{value:"Inherited from",id:"inherited-from-12",level:4}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils")," / UpdateStreamEvmRequest"),(0,r.kt)("h1",{id:"interface-updatestreamevmrequest"},"Interface: UpdateStreamEvmRequest"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils"),".UpdateStreamEvmRequest"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Camelize"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"RequestParams"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"chainIds"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"triggers"'),">",">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UpdateStreamEvmRequest"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#abi"},"abi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#advancedoptions"},"advancedOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#alladdresses"},"allAddresses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#chains"},"chains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#demo"},"demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#description"},"description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#getnativebalances"},"getNativeBalances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#id"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#includecontractlogs"},"includeContractLogs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#includeinternaltxs"},"includeInternalTxs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#includenativetxs"},"includeNativeTxs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#tag"},"tag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#topic0"},"topic0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#triggers"},"triggers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/updatestreamevmrequest#webhookurl"},"webhookUrl"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"abi"},"abi"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"abi"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymous?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"constant?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"gas?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs?"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"components?"),": { name: string; type: string; indexed?: boolean ","|"," undefined; components?: ...[] ","|"," undefined; internalType?: string ","|"," undefined; }[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"indexed?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"internalType?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"name?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs?"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"components?"),": { name: string; type: string; components?: ...[] ","|"," undefined; internalType?: string ","|"," undefined; }[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"internalType?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"payable?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"stateMutability?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }[]"),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,"Camelize.abi"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"advancedoptions"},"advancedOptions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"advancedOptions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"filter?"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),";  } ; ",(0,r.kt)("inlineCode",{parentName:"p"},"includeNativeTxs?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"topic0"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }[]"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,"Camelize.advancedOptions"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"alladdresses"},"allAddresses"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"allAddresses"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,"Camelize.allAddresses"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chains"},"chains"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"chains"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmChainish"),"[]"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"demo"},"demo"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"demo"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,"Camelize.demo"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,"Camelize.description"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getnativebalances"},"getNativeBalances"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getNativeBalances"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"selectors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"tx"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"log"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"erc20transfer"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"erc20approval"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"nfttransfer"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"internalTx"'),"  }[]"),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,"Camelize.getNativeBalances"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,"Camelize.id"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"includecontractlogs"},"includeContractLogs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"includeContractLogs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,"Camelize.includeContractLogs"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"includeinternaltxs"},"includeInternalTxs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"includeInternalTxs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,"Camelize.includeInternalTxs"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"includenativetxs"},"includeNativeTxs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"includeNativeTxs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,"Camelize.includeNativeTxs"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tag"},"tag"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"tag"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,"Camelize.tag"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"topic0"},"topic0"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"topic0"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.kt)("p",null,"Camelize.topic0"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"triggers"},"triggers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"triggers"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamtriggerish"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamTriggerish")),"[]"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"webhookurl"},"webhookUrl"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"webhookUrl"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,r.kt)("p",null,"Camelize.webhookUrl"))}d.isMDXComponent=!0}}]);