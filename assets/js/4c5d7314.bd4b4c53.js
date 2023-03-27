"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput",title:"Interface: AptosMultiAgentSignatureRequestInput",sidebar_label:"AptosMultiAgentSignatureRequestInput"},o=void 0,i={unversionedId:"api/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput",id:"api/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput",title:"Interface: AptosMultiAgentSignatureRequestInput",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosMultiAgentSignatureRequestInput",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput",title:"Interface: AptosMultiAgentSignatureRequestInput",sidebar_label:"AptosMultiAgentSignatureRequestInput"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"secondarySignerAddresses",id:"secondarysigneraddresses",level:3},{value:"secondarySigners",id:"secondarysigners",level:3},{value:"sender",id:"sender",level:3},{value:"type",id:"type",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosMultiAgentSignatureRequestInput"),(0,a.kt)("h1",{id:"interface-aptosmultiagentsignaturerequestinput"},"Interface: AptosMultiAgentSignatureRequestInput"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosMultiAgentSignatureRequestInput"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput#secondarysigneraddresses"},"secondarySignerAddresses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput#secondarysigners"},"secondarySigners")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput#sender"},"sender")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosmultiagentsignaturerequestinput#type"},"type"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"secondarysigneraddresses"},"secondarySignerAddresses"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"secondarySignerAddresses"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"secondarysigners"},"secondarySigners"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"secondarySigners"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosmultiagentsignaturerequestsecondarysignersinput"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosMultiAgentSignatureRequestSecondarySignersInput"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosmultiagentsignaturerequestsecondarysignersvalue"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosMultiAgentSignatureRequestSecondarySignersValue"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sender"},"sender"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"sender"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosaddressinput"},(0,a.kt)("inlineCode",{parentName:"a"},"AptosAddressInput"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")))}m.isMDXComponent=!0}}]);