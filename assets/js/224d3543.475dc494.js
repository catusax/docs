"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9654],{9613:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(9496);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(a),k=o,u=m["".concat(d,".").concat(k)]||m[k]||c[k]||i;return a?n.createElement(u,r(r({ref:e},p),{},{components:a})):n.createElement(u,r({ref:e},p))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},427:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(665),o=a(151),i=(a(9496),a(9613)),r=["components"],l={},d="AlipaySocialSession",s={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/index",id:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/index",title:"AlipaySocialSession",description:"class AlipaySocialSession(val context String, val callbackUri Completion&lt;SocialException, String&gt;) : SocialSession",source:"@site/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session",slug:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.android.auth.social.alipay",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/"},next:{title:"Companion",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/-companion/"}},p={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Types",id:"types",level:2},{value:"Functions",id:"functions",level:2},{value:"Properties",id:"properties",level:2}],m={toc:c};function k(t){var e=t.components,a=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alipaysocialsession"},"AlipaySocialSession"),(0,i.kt)("p",null,"class AlipaySocialSession(val context: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", val redirectTo: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val callbackUri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val completion: ",(0,i.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,i.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",") : ",(0,i.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session/"},"SocialSession")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AlipaySocialSession"),(0,i.kt)("td",{parentName:"tr",align:null},"fun AlipaySocialSession(context: ",(0,i.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", redirectTo: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", callbackUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",")")))),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/-companion/"},"Companion")),(0,i.kt)("td",{parentName:"tr",align:null},"object ",(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/-alipay-social-session/-companion/"},"Companion"))))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"start"),(0,i.kt)("td",{parentName:"tr",align:null},"open override fun start()")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callbackUri"),(0,i.kt)("td",{parentName:"tr",align:null},"open override val callbackUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"completion"),(0,i.kt)("td",{parentName:"tr",align:null},"open override val completion: ",(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,i.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"open override val context: ",(0,i.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirectTo"),(0,i.kt)("td",{parentName:"tr",align:null},"open override val redirectTo: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}k.isMDXComponent=!0}}]);