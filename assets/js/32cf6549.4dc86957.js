"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3713],{9613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),m=p(n),u=o,d=m["".concat(s,".").concat(u)]||m[u]||k[u]||i;return n?r.createElement(d,l(l({ref:e},c),{},{components:n})):r.createElement(d,l({ref:e},c))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1035:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return k}});var r=n(665),o=n(151),i=(n(9496),n(9613)),l=["components"],a={},s="makeRequest",p={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.http/make-request",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.http/make-request",title:"makeRequest",description:"fun makeRequest(uri RequestBody?, headers HttpRawStringCompletion)",source:"@site/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.http/make-request.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.http",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/make-request",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/make-request",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.http/make-request.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"httpPost",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/http-post"},next:{title:"io.logto.sdk.core.type",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/"}},c={},k=[],m={toc:k};function u(t){var e=t.components,n=(0,o.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"makerequest"},"makeRequest"),(0,i.kt)("p",null,"fun makeRequest(uri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", body: RequestBody?, headers: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, completion: ",(0,i.kt)("a",{parentName:"p",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/#1273102375%2FClasslikes%2F-470698881"},"HttpRawStringCompletion"),")"),(0,i.kt)("p",null,"fun makeRequest(uri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", body: RequestBody?, headers: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, completion: ",(0,i.kt)("a",{parentName:"p",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-empty-completion/"},"HttpEmptyCompletion"),")"),(0,i.kt)("p",null,"fun makeRequest(uri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", body: RequestBody?, headers: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, responseCallback: Callback)"))}u.isMDXComponent=!0}}]);