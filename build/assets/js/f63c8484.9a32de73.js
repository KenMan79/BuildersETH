"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[7689],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),i=n(2389),o=n(7392),l=n(7094),s=n(2466),c=n(6010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,i,d=e.lazy,m=e.block,h=e.defaultValue,f=e.values,k=e.groupId,g=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=y[0])?void 0:i.props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),C=N.tabGroupChoices,S=N.setTabGroupChoices,T=(0,r.useState)(w),D=T[0],x=T[1],j=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=C[k];null!=I&&I!==D&&v.some((function(e){return e.value===I}))&&x(I)}var O=function(e){var t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==D&&(E(t),x(a),null!=k&&S(k,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,c.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:O,onClick:O},i,{className:(0,c.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(y.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),l=n(2360),s=["components"],c={sidebar_position:5},u="Introduction to Solidity Smart Contracts",p={unversionedId:"solidity-101/course-introduction/Intro-to-smart-contracts",id:"solidity-101/course-introduction/Intro-to-smart-contracts",title:"Introduction to Solidity Smart Contracts",description:"Smart Contract History",source:"@site/docs/solidity-101/1-course-introduction/5-Intro-to-smart-contracts.mdx",sourceDirName:"solidity-101/1-course-introduction",slug:"/solidity-101/course-introduction/Intro-to-smart-contracts",permalink:"/docs/solidity-101/course-introduction/Intro-to-smart-contracts",draft:!1,editUrl:"https://github.com/tesla809/BuildersETH/issues/docs/solidity-101/1-course-introduction/5-Intro-to-smart-contracts.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Getting Started: Installation",permalink:"/docs/solidity-101/course-introduction/getting-started"},next:{title:"Introduction",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/introduction-variable-and-data-types"}},d={},m=[{value:"Smart Contract History",id:"smart-contract-history",level:2},{value:"Simple Description of Code",id:"simple-description-of-code",level:2},{value:"License",id:"license",level:2},{value:"Pragma - Define The Solidity Compiler Type",id:"pragma---define-the-solidity-compiler-type",level:2},{value:"Contract Keyword",id:"contract-keyword",level:2},{value:"Public Variables",id:"public-variables",level:2},{value:"Storage and costs",id:"storage-and-costs",level:3},{value:"Data types",id:"data-types",level:3},{value:"Functions",id:"functions",level:2},{value:"set",id:"set",level:3},{value:"get",id:"get",level:3},{value:"Setting Up Development Enivronment",id:"setting-up-development-enivronment",level:2},{value:"Directory Description",id:"directory-description",level:3},{value:"Contracts",id:"contracts",level:4},{value:"Migrations",id:"migrations",level:4},{value:"Test",id:"test",level:4},{value:"truffle.config.js",id:"truffleconfigjs",level:4}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-solidity-smart-contracts"},"Introduction to Solidity Smart Contracts"),(0,i.kt)("h2",{id:"smart-contract-history"},"Smart Contract History"),(0,i.kt)("p",null,"Smart contracts are scripts that run on programmable blockchains. For Ethereum based blockchains, the primary language is called Solidity."),(0,i.kt)("p",null,"Think of smart contracts, or contracts for short, as classes in another object oriented language. However, why are they called contracts?"),(0,i.kt)("p",null,"The idea of ",(0,i.kt)("a",{parentName:"p",href:"https://nakamotoinstitute.org/the-idea-of-smart-contracts/"},"smart contracts came from Nick Szabo")," in 1997. ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=3FA3UjA0igY"},"Szabo")," strived to combine law and computation to advance the goals of the ",(0,i.kt)("a",{parentName:"p",href:"https://www.wired.com/1993/02/crypto-rebels/"},"cypherpunks"),", a movement of computer enthsaists who aimed to leverage ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"public key cryptography")," to advance human freedoms. This will be covered in a future blog post."),(0,i.kt)("h2",{id:"simple-description-of-code"},"Simple Description of Code"),(0,i.kt)("p",null,"Below, we see a sample smart contract. Its function is simple: it stores a number."),(0,i.kt)("p",null,"There are two functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"get() - returns the value stored in the program."),(0,i.kt)("li",{parentName:"ul"},"set() - updates the value stored in the program.")),(0,i.kt)("p",null,"Let's explore each line further."),(0,i.kt)("p",null,"For reference, here is the logic for the same code in JavaScript and Python."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-3.0\npragma solidity 0.8.13;\n\ncontract SimpleStorage {\n    uint storedData;\n\n    function set(uint x) public {\n        storedData = x;\n    }\n\n    function get() public view returns (uint) {\n        return storedData;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class SimpleStorage {\n    let storedData;\n\n    // Setter function takes and stores x input\n    function set(x) {\n        storedData = x;\n    }\n\n    // Getter function returns storedData\n    function get() {\n        return storedData;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"py",label:"Python 3.6",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'// 2 spaces for indentation\n\nclass simple_storage:\n    storedData;\n\n    """Setter function takes and stores x input"""\n    def set(x):\n      storedData = x;\n\n    """Getter function returns storedData"""\n    function get():\n      return storedData;\n')))),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-3.0\n")),(0,i.kt)("p",null,"Every contract needs to specify the license which supports it."),(0,i.kt)("p",null,"Licensing is essential because it stipulates how you can use a piece of code. Much of the open source software movement is based on legal innovations on very permissive licenses like ",(0,i.kt)("a",{parentName:"p",href:"https://choosealicense.com/licenses/mit/"},"MIT License")," and ",(0,i.kt)("a",{parentName:"p",href:"https://choosealicense.com/licenses/gpl-3.0/"},"GPL-3.0"),'.\nLicenses can help direct the project toward the creator\'s aims, like the freedom to remix, but only if the base code is open-sourced. Or a more accessible approach like "do what you want." Licensing is essential because, if used appropriately, it can limit the liability of the develper should something go wrong with the code.'),(0,i.kt)("p",null,"Most licenses in the crypto start are entirely open source. This allows for the reduction of headaches when dealing with code. If it is easy to deal with your code, more money may flow into it. This will be covered in another place, like a blog post.\nFor now, know that licenses are essential, and when in doubt, use GPL-3.0."),(0,i.kt)("p",null,"What if someone copies my code? We will cover this in another post. Remember that network effects, liquidity, and branding are defensible moats to your project."),(0,i.kt)("h2",{id:"pragma---define-the-solidity-compiler-type"},"Pragma - Define The Solidity Compiler Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity 0.8.13;\n")),(0,i.kt)("p",null,"Like all programming languages, Solidity is an evolving language. Over time there are updates, bugs fixes, and improvements that make the languages easier and safer to use. Thus, it is essential to specify the version of the language used. The language is compiled into EVM byte code which is then ran on the Etheruem Virtual Machine. Knowing which compiler to use allows this process to occur."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity >=0.4.16 <0.9.0;\n")),(0,i.kt)("p",null,"Such a broad scope for the compiler can result in errors and uncaught bugs since such a wide range eliminates the ability to use the correct compiler predictable across development environments. For example, one developer may have ",(0,i.kt)("inlineCode",{parentName:"p"},"0.8.10"),", while another may have ",(0,i.kt)("inlineCode",{parentName:"p"},"0.5.5"),"."),(0,i.kt)("h2",{id:"contract-keyword"},"Contract Keyword"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract SimpleStorage { ... }\n")),(0,i.kt)("p",null,"Solidity is an object oriented language. This means that it uses something like classes to structure information. You can think of the key word ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract")," to be similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," keyword in other programming languages like C, Java or JavaScript."),(0,i.kt)("h2",{id:"public-variables"},"Public Variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"...\n\ncontract SimpleStorage {\n    uint storedData; // < Public variable accessible in state.\n    ...\n}\n")),(0,i.kt)("h3",{id:"storage-and-costs"},"Storage and costs"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"uint storedData")," is a public variable. Because its declared in the top level scope, its added to storage."),(0,i.kt)("p",null,"In Solidity, storage of data happens in the contract itself. It also costs money to store data. Why? The Ethereum blockchain is copied in many places. To deter spamming, any storage will inevitable incur a cost."),(0,i.kt)("h3",{id:"data-types"},"Data types"),(0,i.kt)("p",null,"Notice that the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"storedData")," is of datatype ",(0,i.kt)("inlineCode",{parentName:"p"},"uint")," (",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned integer"),"). ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned integers")," are positive whole numbers. ",(0,i.kt)("inlineCode",{parentName:"p"},"signed integers")," allow for negative numbers to exists.\nWe will cover data type in a later module."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("p",null,"Functions in Solidity are similar to Java. The function signature is comprised of the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"function keyword: ",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"function name: ",(0,i.kt)("inlineCode",{parentName:"li"},"set")),(0,i.kt)("li",{parentName:"ul"},"variable name and type: ",(0,i.kt)("inlineCode",{parentName:"li"},"uint x")),(0,i.kt)("li",{parentName:"ul"},"function modifier: ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"view")),(0,i.kt)("li",{parentName:"ul"},"optional return value type: ",(0,i.kt)("inlineCode",{parentName:"li"},"returns (uint)")," like in",(0,i.kt)("inlineCode",{parentName:"li"},"get()"))),(0,i.kt)("h3",{id:"set"},"set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract SimpleStorage {\n    ...\n    function set(uint x) public {\n        storedData = x;\n    }\n    ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set()")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," function that takes in a parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"uint x"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," functions can be accessed by anyone. Inside the function braces ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," we have the piece of code that runs once ",(0,i.kt)("inlineCode",{parentName:"p"},"set()")," is called.\nHere ",(0,i.kt)("inlineCode",{parentName:"p"},"storedData")," is set to the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and updates our storage."),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract SimpleStorage {\n    ...\n    function get() public view returns (uint) {\n        return storedData;\n    }\n    ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get()")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," function that returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"uint")," (unsigned integer). ",(0,i.kt)("inlineCode",{parentName:"p"},"returns (uint)")," assures that this is the case and will expect an ",(0,i.kt)("inlineCode",{parentName:"p"},"uint")," to be returned, else an error is thrown and the code will not compile."),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"storedData")," is set to the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and updates our storage."),(0,i.kt)("h2",{id:"setting-up-development-enivronment"},"Setting Up Development Enivronment"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Split into new file - Your first smart contract")),(0,i.kt)("p",null,"First, let's create a new directory. Navigate to where you want to place your code and create a new directory, aka folder."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mkdir web3CryptoDev"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"1-storageContract")),(0,i.kt)("p",null,"Now lets create the project scaffold:\n",(0,i.kt)("inlineCode",{parentName:"p"},"truffle init")),(0,i.kt)("p",null,"Inside our newly created project we find a few files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 contracts\n\u2502\xa0\xa0 \u2514\u2500\u2500 Migrations.sol\n\u251c\u2500\u2500 migrations\n\u2502\xa0\xa0 \u2514\u2500\u2500 1_initial_migration.js\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 truffle-config.js\n")),(0,i.kt)("h3",{id:"directory-description"},"Directory Description"),(0,i.kt)("h4",{id:"contracts"},"Contracts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"contracts")," directory is where your smart contracts are stored."),(0,i.kt)("p",null,"The default file is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Migratons.sol"),", which keeps a history of previously run migrations that is recorded on-chain."),(0,i.kt)("h4",{id:"migrations"},"Migrations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"migrations")," directory files that helps you help you deploy contracts to the Ethereum network. Migration files are simply a set of managed deployment scripts. All the migrations located in this will run in the order listed, from 1 to N."),(0,i.kt)("p",null,"The first script is ",(0,i.kt)("inlineCode",{parentName:"p"},"1_initial_migration.js")," and is for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Migration.sol"),". In truffle, contract usually has its own migration script."),(0,i.kt)("p",null,"So, ",(0,i.kt)("inlineCode",{parentName:"p"},"Apple.sol")," would have ",(0,i.kt)("inlineCode",{parentName:"p"},"n-apple.sol")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," being the order you'd like to deploy it."),(0,i.kt)("p",null,"We will learn more about migrations later."),(0,i.kt)("h4",{id:"test"},"Test"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test")," folder holds our tests. Testing is EXTREMELY important in smart contract development, because they are technically immutable and can hold large sums of value. Along with testing ",(0,i.kt)("a",{parentName:"p",href:"https://consensys.net/diligence/scribble/"},(0,i.kt)("strong",{parentName:"a"},"fuzzing"))," is also a best practice."),(0,i.kt)("p",null,"We will cover these topics later."),(0,i.kt)("h4",{id:"truffleconfigjs"},"truffle.config.js"),(0,i.kt)("p",null,"This holds the configuration for our project. Here we can customize the networks, network providers, and other things."),(0,i.kt)("p",null,"You can learn more about ",(0,i.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/truffle/reference/configuration/"},"truffle.config.js here"),". We will be covering this later."))}f.isMDXComponent=!0}}]);