"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8523],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||l[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4988:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(665),i=n(151),a=(n(9496),n(9613)),o=["components"],c={},p=void 0,s={unversionedId:"sdk/JavaScript/js/functions/fetchOidcConfig",id:"sdk/JavaScript/js/functions/fetchOidcConfig",title:"fetchOidcConfig",description:"fetchOidcConfig(endpoint, requester): Promise\\>",source:"@site/docs/sdk/JavaScript/js/functions/fetchOidcConfig.md",sourceDirName:"sdk/JavaScript/js/functions",slug:"/sdk/JavaScript/js/functions/fetchOidcConfig",permalink:"/zh-cn/sdk/JavaScript/js/functions/fetchOidcConfig",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/JavaScript/js/functions/fetchOidcConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"decodeIdToken",permalink:"/zh-cn/sdk/JavaScript/js/functions/decodeIdToken"},next:{title:"fetchTokenByAuthorizationCode",permalink:"/zh-cn/sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode"}},d={},l=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"fetchOidcConfig"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"requester"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"KeysToCamelCase"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"OidcConfigSnakeCaseResponse"),">",">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"requester")),(0,a.kt)("td",{parentName:"tr",align:"left"},"<T",">","(...",(0,a.kt)("inlineCode",{parentName:"td"},"args"),": ","[input: RequestInfo, init?: RequestInit]",") => ",(0,a.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"KeysToCamelCase"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"OidcConfigSnakeCaseResponse"),">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/5254dee/packages/js/src/core/oidc-config.ts#L20"},"packages/js/src/core/oidc-config.ts:20")))}f.isMDXComponent=!0}}]);