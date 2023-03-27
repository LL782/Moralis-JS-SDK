"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),v=l,k=u["".concat(m,".").concat(v)]||u[v]||c[v]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={slug:"/moralisweb3/common-evm-utils/evmsimpleblockinput",title:"Interface: EvmSimpleBlockInput",sidebar_label:"EvmSimpleBlockInput"},i=void 0,o={unversionedId:"api/moralisweb3/common-evm-utils/evmsimpleblockinput",id:"api/moralisweb3/common-evm-utils/evmsimpleblockinput",title:"Interface: EvmSimpleBlockInput",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmSimpleBlockInput",source:"@site/docs/api/moralisweb3/common-evm-utils/evmsimpleblockinput.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmsimpleblockinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmsimpleblockinput",title:"Interface: EvmSimpleBlockInput",sidebar_label:"EvmSimpleBlockInput"},sidebar:"sidebar",previous:{title:"EvmSimpleBlockData",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockdata"},next:{title:"EvmTransaction",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtransaction"}},m={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"chain",id:"chain",level:3},{value:"hash",id:"hash",level:3},{value:"number",id:"number",level:3},{value:"timestamp",id:"timestamp",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmSimpleBlockInput"),(0,l.kt)("h1",{id:"interface-evmsimpleblockinput"},"Interface: EvmSimpleBlockInput"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmSimpleBlockInput"),(0,l.kt)("p",null,"This can be any object with valid block data."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const input = {\n   chain: 1,\n   hash: '0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171',\n   number: '12386788',\n   timestamp: '2021-05-07T11:08:35.000Z',\n }\n")),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"EvmSimpleBlockInput"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockinput"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmBlockInput"))))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput#chain"},"chain")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput#hash"},"hash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput#number"},"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput#timestamp"},"timestamp"))),(0,l.kt)("h2",{id:"properties-1"},"Properties"),(0,l.kt)("h3",{id:"chain"},"chain"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"chain"),": ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmchainish"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmChainish"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hash"},"hash"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"hash"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"number"},"number"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"number"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumberish")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"timestamp"},"timestamp"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"DateInput")))}c.isMDXComponent=!0}}]);