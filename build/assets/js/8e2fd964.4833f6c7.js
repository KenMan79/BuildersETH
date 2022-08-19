"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[5156],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8819:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),s=["components"],a={sidebar_position:1},l="Module Overview",c={unversionedId:"solidity-basics/module-overview",id:"solidity-basics/module-overview",title:"Module Overview",description:"Version 0.8.13",source:"@site/docs/solidity-basics/module-overview.mdx",sourceDirName:"solidity-basics",slug:"/solidity-basics/module-overview",permalink:"/docs/solidity-basics/module-overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/solidity-basics/module-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/intro"},next:{title:"Solidity Basics Overview",permalink:"/docs/solidity-basics/solidity-basics-overview"}},u={},p=[{value:"Version 0.8.13",id:"version-0813",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Resources For Aspiring Devs",id:"resources-for-aspiring-devs",level:3},{value:"Resources for Aspiring Web3 Devs",id:"resources-for-aspiring-web3-devs",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"module-overview"},"Module Overview"),(0,o.kt)("h2",{id:"version-0813"},"Version 0.8.13"),(0,o.kt)("p",null,"We will be covering version Solidity 0.8.13. The latest update has been on Tuesday May 24th, 2022."),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,"The author will assume that your have prior programming expereince. It is likely that you understand or have written JavaScript. So, Solidity is not your first programming language."),(0,o.kt)("p",null,"That being said, we are not going to handwave away basic topics."),(0,o.kt)("h3",{id:"resources-for-aspiring-devs"},"Resources For Aspiring Devs"),(0,o.kt)("p",null,"For those without programming experience, you can check out the following resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/"},"FreeCodeCamp.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://courses.consensys.net/courses/bootcamp-basic-training"},"ConsenSys Academy Basic Training")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.codecademy.com/"},"Codecademy"))),(0,o.kt)("h3",{id:"resources-for-aspiring-web3-devs"},"Resources for Aspiring Web3 Devs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cryptozombies.io/"},"Cryptozombies.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://solidity-by-example.org/"},"Solidity-by-example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.scaffoldeth.io/scaffold-eth/"},"Scaffold-ETH"))))}m.isMDXComponent=!0}}]);