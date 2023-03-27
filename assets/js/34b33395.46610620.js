"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,c=u["".concat(p,".").concat(d)]||u[d]||k[d]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=n(87462),o=(n(67294),n(3905));const r={slug:"/moralisweb3/common-aptos-utils/aptosnfttokenresponse",title:"Class: AptosNFTTokenResponse",sidebar_label:"AptosNFTTokenResponse"},l=void 0,s={unversionedId:"api/moralisweb3/common-aptos-utils/aptosnfttokenresponse",id:"api/moralisweb3/common-aptos-utils/aptosnfttokenresponse",title:"Class: AptosNFTTokenResponse",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosNFTTokenResponse",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosnfttokenresponse.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosnfttokenresponse",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosnfttokenresponse",title:"Class: AptosNFTTokenResponse",sidebar_label:"AptosNFTTokenResponse"}},p={},i=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"fromJSON",id:"fromjson",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Properties",id:"properties-1",level:2},{value:"collectionDataIdHash",id:"collectiondataidhash",level:3},{value:"collectionName",id:"collectionname",level:3},{value:"creatorAddress",id:"creatoraddress",level:3},{value:"defaultProperties",id:"defaultproperties",level:3},{value:"description",id:"description",level:3},{value:"descriptionMutable",id:"descriptionmutable",level:3},{value:"largestPropertyVersion",id:"largestpropertyversion",level:3},{value:"lastTransactionTimestamp",id:"lasttransactiontimestamp",level:3},{value:"lastTransactionVersion",id:"lasttransactionversion",level:3},{value:"maximum",id:"maximum",level:3},{value:"maximumMutable",id:"maximummutable",level:3},{value:"metadataUri",id:"metadatauri",level:3},{value:"name",id:"name",level:3},{value:"payeeAddress",id:"payeeaddress",level:3},{value:"propertiesMutable",id:"propertiesmutable",level:3},{value:"royaltyMutable",id:"royaltymutable",level:3},{value:"royaltyPointsDenominator",id:"royaltypointsdenominator",level:3},{value:"royaltyPointsNumerator",id:"royaltypointsnumerator",level:3},{value:"supply",id:"supply",level:3},{value:"tokenDataIdHash",id:"tokendataidhash",level:3},{value:"uriMutable",id:"urimutable",level:3}],m={toc:i};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosNFTTokenResponse"),(0,o.kt)("h1",{id:"class-aptosnfttokenresponse"},"Class: AptosNFTTokenResponse"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosNFTTokenResponse"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#create"},"create")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#fromjson"},"fromJSON")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#tojson"},"toJSON"))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#collectiondataidhash"},"collectionDataIdHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#collectionname"},"collectionName")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#creatoraddress"},"creatorAddress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#defaultproperties"},"defaultProperties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#description"},"description")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#descriptionmutable"},"descriptionMutable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#largestpropertyversion"},"largestPropertyVersion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#lasttransactiontimestamp"},"lastTransactionTimestamp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#lasttransactionversion"},"lastTransactionVersion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#maximum"},"maximum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#maximummutable"},"maximumMutable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#metadatauri"},"metadataUri")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#name"},"name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#payeeaddress"},"payeeAddress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#propertiesmutable"},"propertiesMutable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#royaltymutable"},"royaltyMutable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#royaltypointsdenominator"},"royaltyPointsDenominator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#royaltypointsnumerator"},"royaltyPointsNumerator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#supply"},"supply")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#tokendataidhash"},"tokenDataIdHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse#urimutable"},"uriMutable"))),(0,o.kt)("h2",{id:"methods-1"},"Methods"),(0,o.kt)("h3",{id:"create"},"create"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("strong",{parentName:"p"},"create"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponse"))),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"input")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponseinput"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponseInput"))," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponse")))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponse"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fromjson"},"fromJSON"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("strong",{parentName:"p"},"fromJSON"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"json"),"): ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponse"))),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"json")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponseJSON")))))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponse"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponse"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tojson"},"toJSON"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponseJSON"))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttokenresponsejson"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosNFTTokenResponseJSON"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"collectiondataidhash"},"collectionDataIdHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"collectionDataIdHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The identifier of the collection"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"collectionname"},"collectionName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"collectionName"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The name of the collection"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"creatoraddress"},"creatorAddress"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"creatorAddress"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosAddress"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The address of the creator of the collection"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"defaultproperties"},"defaultProperties"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"defaultProperties"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The default properties of the token"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"description"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The description of the collection"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"descriptionmutable"},"descriptionMutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"descriptionMutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"Whether the description can be changed"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"largestpropertyversion"},"largestPropertyVersion"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"largestPropertyVersion"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"largest_property_version"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"lasttransactiontimestamp"},"lastTransactionTimestamp"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"lastTransactionTimestamp"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The timestamp of the last transaction"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"lasttransactionversion"},"lastTransactionVersion"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"lastTransactionVersion"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The version of the last transaction"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maximum"},"maximum"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"maximum"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The maximum number of tokens that can be minted"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maximummutable"},"maximumMutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"maximumMutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"Whether the maximum number of tokens can be changed"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"metadatauri"},"metadataUri"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"metadataUri"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The URI of the image of the token"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The name of the token"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"payeeaddress"},"payeeAddress"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"payeeAddress"),": ",(0,o.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress"},(0,o.kt)("inlineCode",{parentName:"a"},"AptosAddress"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The address that last payed for the token"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"propertiesmutable"},"propertiesMutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"propertiesMutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"Whether the properties of the token can be changed"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"royaltymutable"},"royaltyMutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"royaltyMutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"Whether the royalty of the token can be changed"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"royaltypointsdenominator"},"royaltyPointsDenominator"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"royaltyPointsDenominator"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The denominator for royalty points"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"royaltypointsnumerator"},"royaltyPointsNumerator"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"royaltyPointsNumerator"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The numerator for royalty points"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"supply"},"supply"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"supply"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The number of tokens minted"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tokendataidhash"},"tokenDataIdHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"tokenDataIdHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"The identifier of the token"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"urimutable"},"uriMutable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"uriMutable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,o.kt)("p",null,"Whether the URI of the image can be changed"))}k.isMDXComponent=!0}}]);