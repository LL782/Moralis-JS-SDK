"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2884],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,c=u["".concat(i,".").concat(k)]||u[k]||m[k]||s;return a?r.createElement(c,l(l({ref:t},d),{},{components:a})):r.createElement(c,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const s={slug:"/moralisweb3/common-aptos-utils/aptosaddress",title:"Class: AptosAddress",sidebar_label:"AptosAddress"},l=void 0,o={unversionedId:"api/moralisweb3/common-aptos-utils/aptosaddress",id:"api/moralisweb3/common-aptos-utils/aptosaddress",title:"Class: AptosAddress",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosAddress",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosaddress.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosaddress",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosaddress",title:"Class: AptosAddress",sidebar_label:"AptosAddress"}},i={},p=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"equals",id:"equals-1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"format",id:"format",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-4",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-3",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosAddress"),(0,n.kt)("h1",{id:"class-aptosaddress"},"Class: AptosAddress"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosAddress"),(0,n.kt)("p",null,"A representation of an address on the Aptos network."),(0,n.kt)("p",null,"Use this class any time you work with an address."),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MoralisData"))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress#create"},"create")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress#equals"},"equals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress#equals-1"},"equals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress#format"},"format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress#tojson"},"toJSON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress#tostring"},"toString"))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress#address"},"address"))),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress#constructor"},"constructor"))),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"create"},"create"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"create"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"AptosAddress"))),(0,n.kt)("p",null,"Create a new instance of AptosAddress from any valid address input."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'const address = AptosAddress.create("0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c")')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"an error when a passed address is invalid."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"address")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"AptosAddressish")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"AptosAddress"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"equals"},"equals"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"equals"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"addressA"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"addressB"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Check the equality between two Aptos addresses"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'AptosAddress.equals("0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c", "0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c")')),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"addressA")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"AptosAddressish")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"addressB")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"AptosAddressish")))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"equals-1"},"equals"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"equals"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Checks the equality of the current address with another Aptos address."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'address.equals("0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c")')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'address.equals(AptosAddress.create("0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c"))')),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"address")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"AptosAddressish")))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,n.kt)("p",null,"MoralisData.equals"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"format"},"format"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"format"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"MoralisDataFormatted")),(0,n.kt)("p",null,"Formats the address to hex format.\nCurrently returns a string representing the address."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'address.format(); // "0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c"\n')),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"MoralisDataFormatted")),(0,n.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,n.kt)("p",null,"MoralisData.format"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tojson"},"toJSON"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'address.toJSON(); // "0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c"\n')),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a string representing the address."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tostring"},"toString"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'address.toString(); // "0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c"\n')),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a string representing the address."),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"address"},"address"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"address"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new AptosAddress"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"address"),")"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"address")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))))}m.isMDXComponent=!0}}]);