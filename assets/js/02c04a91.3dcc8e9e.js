"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5464],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(g,a(a({ref:t},l),{},{components:n})):o.createElement(g,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var o=n(665),r=n(151),i=(n(9496),n(9613)),a=["components"],s={},c=void 0,p={unversionedId:"sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse",id:"sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse",title:"LogtoCore.OidcConfigResponse",description:"STRUCT",source:"@site/docs/sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse.md",sourceDirName:"sdk/Swift/Logto/Structs",slug:"/sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse",permalink:"/sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoCore.CodeTokenResponse",permalink:"/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse"},next:{title:"LogtoCore.RefreshTokenTokenResponse",permalink:"/sdk/Swift/Logto/Structs/LogtoCore.RefreshTokenTokenResponse"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>authorizationEndpoint</code>",id:"authorizationendpoint",level:3},{value:"<code>tokenEndpoint</code>",id:"tokenendpoint",level:3},{value:"<code>endSessionEndpoint</code>",id:"endsessionendpoint",level:3},{value:"<code>revocationEndpoint</code>",id:"revocationendpoint",level:3},{value:"<code>userinfoEndpoint</code>",id:"userinfoendpoint",level:3},{value:"<code>jwksUri</code>",id:"jwksuri",level:3},{value:"<code>issuer</code>",id:"issuer",level:3}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STRUCT")),(0,i.kt)("h1",{id:"logtocoreoidcconfigresponse"},(0,i.kt)("inlineCode",{parentName:"h1"},"LogtoCore.OidcConfigResponse")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct OidcConfigResponse: Codable, Equatable\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"authorizationendpoint"},(0,i.kt)("inlineCode",{parentName:"h3"},"authorizationEndpoint")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let authorizationEndpoint: String\n")),(0,i.kt)("h3",{id:"tokenendpoint"},(0,i.kt)("inlineCode",{parentName:"h3"},"tokenEndpoint")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let tokenEndpoint: String\n")),(0,i.kt)("h3",{id:"endsessionendpoint"},(0,i.kt)("inlineCode",{parentName:"h3"},"endSessionEndpoint")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let endSessionEndpoint: String\n")),(0,i.kt)("h3",{id:"revocationendpoint"},(0,i.kt)("inlineCode",{parentName:"h3"},"revocationEndpoint")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let revocationEndpoint: String\n")),(0,i.kt)("h3",{id:"userinfoendpoint"},(0,i.kt)("inlineCode",{parentName:"h3"},"userinfoEndpoint")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let userinfoEndpoint: String\n")),(0,i.kt)("h3",{id:"jwksuri"},(0,i.kt)("inlineCode",{parentName:"h3"},"jwksUri")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let jwksUri: String\n")),(0,i.kt)("h3",{id:"issuer"},(0,i.kt)("inlineCode",{parentName:"h3"},"issuer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let issuer: String\n")))}f.isMDXComponent=!0}}]);