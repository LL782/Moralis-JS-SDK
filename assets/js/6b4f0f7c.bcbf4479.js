"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=o,_=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(_,l(l({ref:t},m),{},{components:a})):n.createElement(_,l({ref:t},m))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={slug:"/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson",title:"Interface: AptosNFTTokenResponseJSON",sidebar_label:"AptosNFTTokenResponseJSON"},l=void 0,i={unversionedId:"api/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson",id:"api/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson",title:"Interface: AptosNFTTokenResponseJSON",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosNFTTokenResponseJSON",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson",title:"Interface: AptosNFTTokenResponseJSON",sidebar_label:"AptosNFTTokenResponseJSON"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"collection_data_id_hash",id:"collection_data_id_hash",level:3},{value:"collection_name",id:"collection_name",level:3},{value:"creator_address",id:"creator_address",level:3},{value:"default_properties",id:"default_properties",level:3},{value:"description",id:"description",level:3},{value:"description_mutable",id:"description_mutable",level:3},{value:"largest_property_version",id:"largest_property_version",level:3},{value:"last_transaction_timestamp",id:"last_transaction_timestamp",level:3},{value:"last_transaction_version",id:"last_transaction_version",level:3},{value:"maximum",id:"maximum",level:3},{value:"maximum_mutable",id:"maximum_mutable",level:3},{value:"metadata_uri",id:"metadata_uri",level:3},{value:"name",id:"name",level:3},{value:"payee_address",id:"payee_address",level:3},{value:"properties_mutable",id:"properties_mutable",level:3},{value:"royalty_mutable",id:"royalty_mutable",level:3},{value:"royalty_points_denominator",id:"royalty_points_denominator",level:3},{value:"royalty_points_numerator",id:"royalty_points_numerator",level:3},{value:"supply",id:"supply",level:3},{value:"token_data_id_hash",id:"token_data_id_hash",level:3},{value:"uri_mutable",id:"uri_mutable",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosNFTTokenResponseJSON"),(0,o.kt)("h1",{id:"interface-aptosnfttokenresponsejson"},"Interface: AptosNFTTokenResponseJSON"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosNFTTokenResponseJSON"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#collection_data_id_hash"},"collection","_","data","_","id","_","hash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#collection_name"},"collection","_","name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#creator_address"},"creator","_","address")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#default_properties"},"default","_","properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#description"},"description")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#description_mutable"},"description","_","mutable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#largest_property_version"},"largest","_","property","_","version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#last_transaction_timestamp"},"last","_","transaction","_","timestamp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#last_transaction_version"},"last","_","transaction","_","version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#maximum"},"maximum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#maximum_mutable"},"maximum","_","mutable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#metadata_uri"},"metadata","_","uri")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#name"},"name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#payee_address"},"payee","_","address")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#properties_mutable"},"properties","_","mutable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#royalty_mutable"},"royalty","_","mutable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#royalty_points_denominator"},"royalty","_","points","_","denominator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#royalty_points_numerator"},"royalty","_","points","_","numerator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#supply"},"supply")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#token_data_id_hash"},"token","_","data","_","id","_","hash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson#uri_mutable"},"uri","_","mutable"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"collection_data_id_hash"},"collection","_","data","_","id","_","hash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"collection","_","data","_","id","_","hash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"collection_name"},"collection","_","name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"collection","_","name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"creator_address"},"creator","_","address"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"creator","_","address"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"default_properties"},"default","_","properties"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"default","_","properties"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"description"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"description_mutable"},"description","_","mutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"description","_","mutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"largest_property_version"},"largest","_","property","_","version"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"largest","_","property","_","version"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"last_transaction_timestamp"},"last","_","transaction","_","timestamp"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"last","_","transaction","_","timestamp"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"last_transaction_version"},"last","_","transaction","_","version"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"last","_","transaction","_","version"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maximum"},"maximum"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"maximum"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maximum_mutable"},"maximum","_","mutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"maximum","_","mutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"metadata_uri"},"metadata","_","uri"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"metadata","_","uri"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"payee_address"},"payee","_","address"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"payee","_","address"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"properties_mutable"},"properties","_","mutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"properties","_","mutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"royalty_mutable"},"royalty","_","mutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"royalty","_","mutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"royalty_points_denominator"},"royalty","_","points","_","denominator"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"royalty","_","points","_","denominator"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"royalty_points_numerator"},"royalty","_","points","_","numerator"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"royalty","_","points","_","numerator"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"supply"},"supply"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"supply"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"token_data_id_hash"},"token","_","data","_","id","_","hash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"token","_","data","_","id","_","hash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"uri_mutable"},"uri","_","mutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"uri","_","mutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")))}u.isMDXComponent=!0}}]);