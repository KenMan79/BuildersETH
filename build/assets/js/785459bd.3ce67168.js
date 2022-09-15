"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[4523],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return p}});var o=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(i),p=r,y=h["".concat(l,".").concat(p)]||h[p]||d[p]||n;return i?o.createElement(y,a(a({ref:t},u),{},{components:i})):o.createElement(y,a({ref:t},u))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<n;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},9521:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=i(7462),r=i(3366),n=(i(7294),i(3905)),a=["components"],s={sidebar_position:3},l="Solidity Basics Overview",c={unversionedId:"solidity-101/course-introduction/solidity-basics-overview",id:"solidity-101/course-introduction/solidity-basics-overview",title:"Solidity Basics Overview",description:"What is Solidity",source:"@site/docs/solidity-101/1-course-introduction/4-solidity-basics-overview.mdx",sourceDirName:"solidity-101/1-course-introduction",slug:"/solidity-101/course-introduction/solidity-basics-overview",permalink:"/docs/solidity-101/course-introduction/solidity-basics-overview",draft:!1,editUrl:"https://github.com/tesla809/BuildersETH/issues/docs/solidity-101/1-course-introduction/4-solidity-basics-overview.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Course Prerequisites",permalink:"/docs/solidity-101/course-introduction/module-overview"},next:{title:"Getting Started: Installation",permalink:"/docs/solidity-101/course-introduction/getting-started"}},u={},d=[{value:"What is Solidity",id:"what-is-solidity",level:2},{value:"Why is Solidity neccessary",id:"why-is-solidity-neccessary",level:2},{value:"Who should learn Solidity",id:"who-should-learn-solidity",level:2},{value:"Why should I learn Solidity over X Language",id:"why-should-i-learn-solidity-over-x-language",level:2}],h={toc:d};function p(e){var t=e.components,i=(0,r.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"solidity-basics-overview"},"Solidity Basics Overview"),(0,n.kt)("h2",{id:"what-is-solidity"},"What is Solidity"),(0,n.kt)("p",null,'Solidity is a object oriented langauge designed to create scripts, called "smart contracts", on the Ethereum Virtual Machine which runs on the Ethereum Blockchain.'),(0,n.kt)("p",null,"That is a mouthful."),(0,n.kt)("h2",{id:"why-is-solidity-neccessary"},"Why is Solidity neccessary"),(0,n.kt)("p",null,"Ethereum is a programmable blockchain. Blockchains allow us to model scarcity with computers. This means we can do all sorts of things related to coordination around scarce resources like assets, methods of governance, and more.\nThe programmability derives from the Ethereum Virtual Machine. This Virtual Machine operates using EVM byte code, which allows it to execute arbitrary logic."),(0,n.kt)("p",null,"Solidity is the most popular language which can compile into EVM bytecode.\nUsing Solidity, we can create scripts that run on the Ethereum Blockchain to create any program. Due to the blockchain's properties, programs that focus on scarcity, social coordination, ownership, or finance are popular use cases."),(0,n.kt)("h2",{id:"who-should-learn-solidity"},"Who should learn Solidity"),(0,n.kt)("p",null,"Those that are interested in web3 decentralized application (DApp) development. If you wish to explore this new field of human coordination through computer networks, Solidity is a great place to start. Web2 focuses on optimized algorithms to deliver results. Web3 focuses on mechanisms to deliver results. With Solidity, developers can create entities that rely on networks to produce goods and services instead of top-down approaches or decentralization."),(0,n.kt)("p",null,"Algorithms are a finite process or set of rules to be followed in problem-solving operations, usually by a computer. A familar algorithm is PageRank, which allows the internet to be searched and organized through links between pages."),(0,n.kt)("p",null,"Mechanisms are economic incentives to achieve goals in a strategic setting where participants act rationally. They can be applied to social computing aimed at alignment and organization for a pre-determined desired output. An auction market is a familiar mechanism where an asset can yield the greatest return through social interactions. Another is the bitcoin miner rewards which incentives participants to secure the network."),(0,n.kt)("h2",{id:"why-should-i-learn-solidity-over-x-language"},"Why should I learn Solidity over X Language"),(0,n.kt)("p",null,"There are also non-EVM-based blockchains that use Rust. However, given the popularity, tooling, amount of capital, and security invested into Ethereum-based machines, it's best to start with EVM-based blockchains."),(0,n.kt)("p",null,"Also, there are other languages for Ethereum-based blockchains like Vyper. Python heavily inspires Vyper. However, given the greater maturity and documentation around Solidity, it is advised to first start with Solidity."),(0,n.kt)("p",null,"Later, once your grasp of blockchains and DApp development is sufficiently deep, you could venture into other chains and languages."))}p.isMDXComponent=!0}}]);