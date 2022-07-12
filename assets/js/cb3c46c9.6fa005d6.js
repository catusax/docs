"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1748],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(665),o=n(151),i=(n(9496),n(9613)),s=["components"],a={},c=void 0,p={unversionedId:"sdk/Swift/LogtoClient/Structs/LogtoConfig",id:"sdk/Swift/LogtoClient/Structs/LogtoConfig",title:"LogtoConfig",description:"STRUCT",source:"@site/docs/sdk/Swift/LogtoClient/Structs/LogtoConfig.md",sourceDirName:"sdk/Swift/LogtoClient/Structs",slug:"/sdk/Swift/LogtoClient/Structs/LogtoConfig",permalink:"/sdk/Swift/LogtoClient/Structs/LogtoConfig",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/LogtoClient/Structs/LogtoConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoClient.NotificationObject",permalink:"/sdk/Swift/LogtoClient/Structs/LogtoClient.NotificationObject"},next:{title:"LogtoError",permalink:"/sdk/Swift/LogtoClient/Structs/LogtoError"}},l={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>endpoint</code>",id:"endpoint",level:3},{value:"<code>appId</code>",id:"appid",level:3},{value:"<code>resources</code>",id:"resources",level:3},{value:"<code>usingPersistStorage</code>",id:"usingpersiststorage",level:3},{value:"<code>scopes</code>",id:"scopes",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>init(endpoint:appId:scopes:resources:usingPersistStorage:)</code>",id:"initendpointappidscopesresourcesusingpersiststorage",level:3}],d={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STRUCT")),(0,i.kt)("h1",{id:"logtoconfig"},(0,i.kt)("inlineCode",{parentName:"h1"},"LogtoConfig")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public struct LogtoConfig\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"endpoint"},(0,i.kt)("inlineCode",{parentName:"h3"},"endpoint")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let endpoint: URL\n")),(0,i.kt)("h3",{id:"appid"},(0,i.kt)("inlineCode",{parentName:"h3"},"appId")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let appId: String\n")),(0,i.kt)("h3",{id:"resources"},(0,i.kt)("inlineCode",{parentName:"h3"},"resources")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let resources: [String]\n")),(0,i.kt)("h3",{id:"usingpersiststorage"},(0,i.kt)("inlineCode",{parentName:"h3"},"usingPersistStorage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let usingPersistStorage: Bool\n")),(0,i.kt)("h3",{id:"scopes"},(0,i.kt)("inlineCode",{parentName:"h3"},"scopes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public var scopes: [String]\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"initendpointappidscopesresourcesusingpersiststorage"},(0,i.kt)("inlineCode",{parentName:"h3"},"init(endpoint:appId:scopes:resources:usingPersistStorage:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public init(\n    endpoint: String,\n    appId: String,\n    scopes: [String] = [],\n    resources: [String] = [],\n    usingPersistStorage: Bool = true\n) throws\n")))}g.isMDXComponent=!0}}]);