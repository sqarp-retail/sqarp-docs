"use strict";(self.webpackChunksqarp_docs=self.webpackChunksqarp_docs||[]).push([[629],{3905:(t,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),d=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},o=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=d(r),c=a,g=s["".concat(u,".").concat(c)]||s[c]||m[c]||i;return r?n.createElement(g,l(l({ref:e},o),{},{components:r})):n.createElement(g,l({ref:e},o))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[s]="string"==typeof t?t:a,l[1]=p;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5129:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:8},l="Supplier data",p={unversionedId:"data-editing/supplier_data",id:"data-editing/supplier_data",title:"Supplier data",description:"Module overview",source:"@site/docs/data-editing/supplier_data.md",sourceDirName:"data-editing",slug:"/data-editing/supplier_data",permalink:"/sqarp-docs/data-editing/supplier_data",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/sqarp-docs/data-editing/attributes"}},u={},d=[{value:"Module overview",id:"module-overview",level:3},{value:"Data &amp; definitions",id:"data--definitions",level:3}],o={toc:d},s="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supplier-data"},"Supplier data"),(0,a.kt)("h3",{id:"module-overview"},"Module overview"),(0,a.kt)("p",null,"In this module, we manage supplier data for products. One product can have several sets of supplier data. This module is one sheet and is lan"),(0,a.kt)("h3",{id:"data--definitions"},"Data & definitions"),(0,a.kt)("p",null,"The product relations module is divided into two different templates: Product Relations and Addon Categories."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"),(0,a.kt)("th",{parentName:"tr",align:null},"Rules & validation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"organisation","_","slug"),(0,a.kt)("td",{parentName:"tr",align:null},"Identifier for the organisation that owns the product."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be an active organisation in SQARP.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"manufacturer","_","article","_","number"),(0,a.kt)("td",{parentName:"tr",align:null},"The manufacturers unique identifier for the product."),(0,a.kt)("td",{parentName:"tr",align:null},"Article number must exist in SQARP.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"market","_","slug"),(0,a.kt)("td",{parentName:"tr",align:null},"Identifier for the market the supplier data refers to"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be ISO Alpha-3 code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","article","_","number"),(0,a.kt)("td",{parentName:"tr",align:null},"The suppliers unique identifier for the product"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","product","_","url"),(0,a.kt)("td",{parentName:"tr",align:null},"URL to the corresponding product page on the suppliers website"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be valid URL. Validated for 200 response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","product","_","title","_","[lang]"),(0,a.kt)("td",{parentName:"tr",align:null},"The suppliers name for the product in the specified language"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","partner","_","pricing","_","unit","_","slug"),(0,a.kt)("td",{parentName:"tr",align:null},"The unit in which the product is priced"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be valid unit. List of available units can be found here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","partner","_","packaging","_","unit","_","slug"),(0,a.kt)("td",{parentName:"tr",align:null},"The unit in which the product is packaged"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be valid unit. List of available units can be found here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","partner","_","pricing","_","multiple"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of pricing units per packaging unit."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be positive numeric value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","minimum","_","order","_","quantity"),(0,a.kt)("td",{parentName:"tr",align:null},"The minimum number of pricing units that must be purchased in a single order."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be positive numeric value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","max","_","delivery","_","time"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum delivery time of the product in business days."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be positive integer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","delivery","_","notes","_","[lang]"),(0,a.kt)("td",{parentName:"tr",align:null},"Delivery notes for the product in the specified language."),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","recommended","_","price","_","unit","_","slug"),(0,a.kt)("td",{parentName:"tr",align:null},"The unit corresponding to the recommended retail price of the product."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be valid unit. List of available units can be found here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier","_","recommended","_","price","_","currency","_","slug"),(0,a.kt)("td",{parentName:"tr",align:null},"The currency corresponding to the recommended retail price of the product."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"The products current status."),(0,a.kt)("td",{parentName:"tr",align:null},"Allowed values are \u201cACTIVE\u201d, \u201cINACTIVE\u201d, \u201cDISCONTINUED\u201d, \u201cUNRELEASED\u201d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"release","_","date"),(0,a.kt)("td",{parentName:"tr",align:null},"The planned release date for the product"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be on the format YYYY-MM-DD")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"discontinued","_","date"),(0,a.kt)("td",{parentName:"tr",align:null},"The planned discontinuation date for the product"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be on the format YYYY-MM-DD")))))}m.isMDXComponent=!0}}]);