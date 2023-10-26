"use strict";(self.webpackChunksqarp_docs=self.webpackChunksqarp_docs||[]).push([[86],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(a),c=n,h=p["".concat(o,".").concat(c)]||p[c]||m[c]||i;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:n,l[1]=u;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2726:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:7},l="Attributes",u={unversionedId:"data-editing/attributes",id:"data-editing/attributes",title:"Attributes",description:"Module Overview",source:"@site/docs/data-editing/attributes.md",sourceDirName:"data-editing",slug:"/data-editing/attributes",permalink:"/data-editing/attributes",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Virtual content",permalink:"/data-editing/virtual_content"},next:{title:"Supplier data",permalink:"/data-editing/supplier_data"}},o={},s=[{value:"Module Overview",id:"module-overview",level:3},{value:"Data &amp; definitions",id:"data--definitions",level:2},{value:"Unverified attributes (kvs)",id:"unverified-attributes-kvs",level:3},{value:"Sqarp verified attributes",id:"sqarp-verified-attributes",level:3},{value:"How to use the editing template",id:"how-to-use-the-editing-template",level:3}],d={toc:s},p="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"attributes"},"Attributes"),(0,n.kt)("h3",{id:"module-overview"},"Module Overview"),(0,n.kt)("p",null,"In this module, we manage attributes. Attributes is an umbrella term for Unverified Attributes and SQARP Verified Attributes. All attributes are on the product level. Attributes is tabulated product information."),(0,n.kt)("h2",{id:"data--definitions"},"Data & definitions"),(0,n.kt)("p",null,"The attributes module is divided into two sheets:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KVS: This is where Unverified Attributes are managed"),(0,n.kt)("li",{parentName:"ul"},"Basic attributes: This is where SQARP Verified Attributes are managed.")),(0,n.kt)("h3",{id:"unverified-attributes-kvs"},"Unverified attributes (kvs)"),(0,n.kt)("p",null,"The unverified attributes template only contains the manufacturer article number as a pre-defined field. All remaining inputs are free."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Headers"),": Headers are \u201ctable headers\u201d, or groupings of attributes. Headers are set on the first row in the template. Several attribute keys can share the same header. Sharing the same header means the attribute keys will be grouped in the same table in the platform. Examples of headers are \u201cTechnical specifications\u201d, \u201cLighting specifications\u201d and \u201cDesign specifications\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Keys"),": Keys are the attribute keys that define the corresponding values. Keys are set on the second row in the template. All keys must be unique across the template. Examples of keys include \u201cColour\u201d, \u201cWidth\u201d and \u201cMaterial\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Values"),": Values are the attribute values corresponding to the respective keys. Values are set in the grid defined by the products and the keys.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This is how the data looks in the SQARP-platform:"),"\n",(0,n.kt)("img",{alt:"SQARP Platform Kvs screenshot",src:a(3279).Z,width:"3998",height:"1047"})),(0,n.kt)("p",null,"This sheet is language dependent. Additional languages can be added by including multiple sheets where each language is indicated in the sheets name."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"),(0,n.kt)("th",{parentName:"tr",align:null},"Rules & validation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manufacturer_article_number"),(0,n.kt)("td",{parentName:"tr",align:null},"The manufacturers unique identifier for the product."),(0,n.kt)("td",{parentName:"tr",align:null},"Article number must exist in SQARP.")))),(0,n.kt)("h3",{id:"sqarp-verified-attributes"},"Sqarp verified attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"),(0,n.kt)("th",{parentName:"tr",align:null},"Rules & validation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manufacturer_article_number"),(0,n.kt)("td",{parentName:"tr",align:null},"The manufacturers unique identifier for the product."),(0,n.kt)("td",{parentName:"tr",align:null},"Article number must exist in SQARP.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ba_length_mm"),(0,n.kt)("td",{parentName:"tr",align:null},"The net length of the product"),(0,n.kt)("td",{parentName:"tr",align:null},'Can be numeric value AND/OR range of numeric values separated by \u201c-\u201c AND/OR multiple numeric values separated by "',"|",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ba_height_mm"),(0,n.kt)("td",{parentName:"tr",align:null},"The net height of the product"),(0,n.kt)("td",{parentName:"tr",align:null},'Can be numeric value AND/OR range of numeric values separated by \u201c-\u201c AND/OR multiple numeric values separated by "',"|",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ba_width_mm"),(0,n.kt)("td",{parentName:"tr",align:null},"The net width of the product"),(0,n.kt)("td",{parentName:"tr",align:null},'Can be numeric value AND/OR range of numeric values separated by \u201c-\u201c AND/OR multiple numeric values separated by "',"|",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ba_depth_mm"),(0,n.kt)("td",{parentName:"tr",align:null},"The net depth of the product"),(0,n.kt)("td",{parentName:"tr",align:null},'Can be numeric value AND/OR range of numeric values separated by \u201c-\u201c AND/OR multiple numeric values separated by "',"|",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ba_diameter_mm"),(0,n.kt)("td",{parentName:"tr",align:null},"The net diameter of the product"),(0,n.kt)("td",{parentName:"tr",align:null},'Can be numeric value AND/OR range of numeric values separated by \u201c-\u201c AND/OR multiple numeric values separated by "',"|",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ba_weight_kg"),(0,n.kt)("td",{parentName:"tr",align:null},"The net weight of the product"),(0,n.kt)("td",{parentName:"tr",align:null},'Can be numeric value AND/OR range of numeric values separated by \u201c-\u201c AND/OR multiple numeric values separated by "',"|",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ba_colour"),(0,n.kt)("td",{parentName:"tr",align:null},"The colour of the product"),(0,n.kt)("td",{parentName:"tr",align:null},'Must be a defined colour. Multiple colours separated by "',"|",'". The full list of defined colours can be found here.')))),(0,n.kt)("h3",{id:"how-to-use-the-editing-template"},"How to use the editing template"),(0,n.kt)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/VCrlB_vVORM?si=Y2od0uvA6tD5URX3",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("admonition",{title:"SQARP GOLD STANDARD",type:"caution"},(0,n.kt)("h3",{parentName:"admonition",id:"unverified-attributes-kvs-1"},"Unverified attributes (kvs)"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Include units in values rather than keys."),(0,n.kt)("li",{parentName:"ul"},"Keep attribute values short, longer values fit better in description blocks."),(0,n.kt)("li",{parentName:"ul"},"Avoid Boolean key-values.",(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can solve this by rewriting. For example: ",(0,n.kt)("em",{parentName:"p"},"With heating"),": ",(0,n.kt)("em",{parentName:"p"},"Yes")," -> ",(0,n.kt)("em",{parentName:"p"},"Heating"),": ",(0,n.kt)("em",{parentName:"p"},"With heating")," "))),(0,n.kt)("li",{parentName:"ul"},"Make sure keys and values are consistent across the assortment."),(0,n.kt)("li",{parentName:"ul"},"Make sure both keys and values are designed to be read by humans.")),(0,n.kt)("h3",{parentName:"admonition",id:"sqarp-verified-attributes-1"},"Sqarp verified attributes"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"A single product should have maximum three values populated out of height, width, depth, length."),(0,n.kt)("li",{parentName:"ul"},"A single product that has a diameter should not have width or depth."))))}m.isMDXComponent=!0},3279:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/kvs-8913f76442c2bb9d38b99b8a25ded1fc.png"}}]);