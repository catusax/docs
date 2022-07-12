"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1200],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(k,s(s({ref:t},p),{},{components:n})):o.createElement(k,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5702:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=n(665),r=n(151),i=(n(9496),n(9613)),s=["components"],a={},c=void 0,l={unversionedId:"sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",id:"sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",title:"LogtoCore.CodeTokenResponse",description:"STRUCT",source:"@site/docs/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse.md",sourceDirName:"sdk/Swift/Logto/Structs",slug:"/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",permalink:"/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"JwtHeader",permalink:"/sdk/Swift/Logto/Structs/JwtHeader"},next:{title:"LogtoCore.OidcConfigResponse",permalink:"/sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>accessToken</code>",id:"accesstoken",level:3},{value:"<code>refreshToken</code>",id:"refreshtoken",level:3},{value:"<code>idToken</code>",id:"idtoken",level:3},{value:"<code>scope</code>",id:"scope",level:3},{value:"<code>expiresIn</code>",id:"expiresin",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STRUCT")),(0,i.kt)("h1",{id:"logtocorecodetokenresponse"},(0,i.kt)("inlineCode",{parentName:"h1"},"LogtoCore.CodeTokenResponse")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct CodeTokenResponse: Codable, Equatable\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"accesstoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"accessToken")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let accessToken: String\n")),(0,i.kt)("h3",{id:"refreshtoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"refreshToken")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let refreshToken: String\n")),(0,i.kt)("h3",{id:"idtoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"idToken")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let idToken: String\n")),(0,i.kt)("h3",{id:"scope"},(0,i.kt)("inlineCode",{parentName:"h3"},"scope")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let scope: String\n")),(0,i.kt)("h3",{id:"expiresin"},(0,i.kt)("inlineCode",{parentName:"h3"},"expiresIn")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let expiresIn: Int64\n")))}f.isMDXComponent=!0}}]);