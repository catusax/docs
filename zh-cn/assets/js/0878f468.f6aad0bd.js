"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7543],{49613:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(k,i(i({ref:e},u),{},{components:r})):n.createElement(k,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},734:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var n=r(665),a=r(40151),o=(r(59496),r(49613)),i=r.p+"assets/images/create-api-resource-675e16a3a9b3e213c35d2149fb0d9966.png",l=["components"],p={sidebar_position:2},c="\u2694\ufe0f \u4fdd\u62a4\u4f60\u7684 API",u={unversionedId:"docs/recipes/protect-your-api/README",id:"docs/recipes/protect-your-api/README",title:"\u2694\ufe0f \u4fdd\u62a4\u4f60\u7684 API",description:"\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u6388\u6743\u670d\u52a1\uff0cLogto \u8fd8\u63d0\u4f9b\u4e86\u540e\u7aef API \u8d44\u6e90\u7684\u6743\u9650\u6821\u63a7\u5236\u7cfb\u7edf\uff0c\u4ece\u800c\u66f4\u597d\u7684\u4fdd\u62a4\u4f60\u7684 API \u8d44\u6e90\u514d\u53d7\u533f\u540d\u8eab\u4efd\u7684\u8bbf\u95ee\u548c\u4fb5\u5bb3\u3002\u8ba9\u6211\u4eec\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u4f7f\u7528 Logto \u6765\u4e3a\u4f60\u7684\u540e\u7aef\u5e94\u7528\u6dfb\u52a0\u6743\u9650\u6821\u9a8c\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/protect-your-api/README.mdx",sourceDirName:"docs/recipes/protect-your-api",slug:"/docs/recipes/protect-your-api/",permalink:"/zh-cn/docs/recipes/protect-your-api/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/protect-your-api/README.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Vue",permalink:"/zh-cn/docs/recipes/integrate-logto/vue"},next:{title:"Node(Express)",permalink:"/zh-cn/docs/recipes/protect-your-api/node"}},s={},d=[{value:"\u5728 Logto \u7ba1\u63a7\u5236\u53f0\u5185\u6ce8\u518c API \u8d44\u6e90",id:"\u5728-logto-\u7ba1\u63a7\u5236\u53f0\u5185\u6ce8\u518c-api-\u8d44\u6e90",level:2},{value:"\u89e3\u6790\u5e76\u9a8c\u8bc1 API \u8bf7\u6c42\u7684\u6743\u9650\u4ee4\u724c",id:"\u89e3\u6790\u5e76\u9a8c\u8bc1-api-\u8bf7\u6c42\u7684\u6743\u9650\u4ee4\u724c",level:2},{value:"\u4e86\u89e3 JWS \u4ee4\u724c",id:"\u4e86\u89e3-jws-\u4ee4\u724c",level:3},{value:"\u9a8c\u8bc1\u6388\u6743\u4ee4\u724c",id:"\u9a8c\u8bc1\u6388\u6743\u4ee4\u724c",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:d};function k(t){var e=t.components,p=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-\u4fdd\u62a4\u4f60\u7684-api"},"\u2694\ufe0f \u4fdd\u62a4\u4f60\u7684 API"),(0,o.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u6388\u6743\u670d\u52a1\uff0cLogto \u8fd8\u63d0\u4f9b\u4e86\u540e\u7aef ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/references/resources/"},"API \u8d44\u6e90"),"\u7684\u6743\u9650\u6821\u63a7\u5236\u7cfb\u7edf\uff0c\u4ece\u800c\u66f4\u597d\u7684\u4fdd\u62a4\u4f60\u7684 API \u8d44\u6e90\u514d\u53d7\u533f\u540d\u8eab\u4efd\u7684\u8bbf\u95ee\u548c\u4fb5\u5bb3\u3002\u8ba9\u6211\u4eec\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u4f7f\u7528 Logto \u6765\u4e3a\u4f60\u7684\u540e\u7aef\u5e94\u7528\u6dfb\u52a0\u6743\u9650\u6821\u9a8c\u3002"),(0,o.kt)("h2",{id:"\u5728-logto-\u7ba1\u63a7\u5236\u53f0\u5185\u6ce8\u518c-api-\u8d44\u6e90"},"\u5728 Logto \u7ba1\u63a7\u5236\u53f0\u5185\u6ce8\u518c API \u8d44\u6e90"),(0,o.kt)("p",null,"Logto \u670d\u52a1\u53ef\u4ee5\u4ece\u6bcf\u4e00\u4e2a\u6388\u6743\u8bf7\u6c42\u4e2d\u8bc6\u522b\u51fa\u6240\u7533\u8bf7\u7684\u76ee\u6807 ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/references/resources/"},"API \u8d44\u6e90"),"\uff0c\u5e76\u76f8\u5e94\u7684\u9881\u53d1\u5176\u4e13\u5c5e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," \u4ee4\u724c\u3002\u4e3a\u6b64\uff0c\u4f60\u9700\u8981\u5148\u524d\u5f80 Logto \u7684 \u7ba1\u7406\u63a7\u5236\u53f0\u6ce8\u518c\u4f60\u7684 ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/references/resources/"},"API \u8d44\u6e90"),"\u3002"),(0,o.kt)("p",null,"\u8bbf\u95ee Logto \u7ba1\u7406\u63a7\u5236\u53f0\u7684 ",(0,o.kt)("strong",{parentName:"p"},"API \u8d44\u6e90")," \u9875\u9762\u3002\u5728\u5217\u8868\u4e2d\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u62e5\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.logto.io")," \u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"API identifier")," \u7684\u5185\u7f6e API \u8d44\u6e90\u3002\u8be5\u8d44\u6e90\u4ee3\u8868\u4e86\u6240\u6709\u6ce8\u518c\u5728\u6b64\u8def\u7531\u5730\u5740\u4e0b\uff0cLogto \u670d\u52a1\u6240\u63d0\u4f9b\u7684\u7ba1\u7406 API\u3002\u5b83\u5c06\u4fdd\u8bc1\u6211\u4eec\u6240\u6709\u7684 API \u90fd\u8bbe\u7f6e\u4e86\u6743\u9650\u4fdd\u62a4\uff0c\u4ec5\u5177\u6709\u7ba1\u7406\u5458\u89d2\u8272\u7684 Logto \u6388\u6743\u7528\u6237\u624d\u53ef\u4ee5\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API \u8d44\u6e90",src:r(17427).Z,width:"1920",height:"964"})),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u70b9\u6309 ",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa API \u8d44\u6e90")," \u6309\u94ae\uff0c\u5e76\u8f93\u5165\u4e00\u4e0b\u4fe1\u606f\uff0c\u6765\u6ce8\u518c\u4e00\u4e2a\u4f60\u81ea\u5df1\u7684 API \u8d44\u6e90\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u53ef\u8bfb\u6027\u9ad8\u7684 ",(0,o.kt)("strong",{parentName:"li"},"API \u540d\u79f0"),"\uff0c\u4ee5\u66f4\u597d\u7684\u5e2e\u52a9\u4f60\u5728\u672a\u6765\u80fd\u591f\u5feb\u901f\u8bc6\u522b\u6b64 API \u8d44\u6e90"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684\uff0c ",(0,o.kt)("strong",{parentName:"li"},"URI")," \u683c\u5f0f\u7684\uff0c",(0,o.kt)("strong",{parentName:"li"},"API Identifier")," (\u53c8\u53ef\u79f0\u4e4b\u4e3a ",(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/references/resources/#resource-indicator"},"Resource Indicator"),")\u3002\u7528\u6765\u8bc6\u522b\u53d7\u4fdd\u62a4\u7684 API \u8d44\u6e90\u3002")),(0,o.kt)("img",{src:i,alt:"\u521b\u5efa API \u8d44\u6e90",width:"700px"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"API Identifier \u5c06\u88ab Logto \u7528\u4f5c\u5168\u5c40\u552f\u4e00\u7684 API \u8d44\u6e90\u6807\u8bc6\u7b26\u3002 \u4e00\u7ecf\u521b\u5efa",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u53ef"),"\u7f16\u8f91\u3002\u8bf7\u5c0f\u5fc3\u586b\u5199\u3002")),(0,o.kt)("p",null,"\u521b\u5efa\u540e\uff0c\u65b0\u7684 API \u8d44\u6e90\u5c06\u663e\u793a\u5728\u5217\u8868\u4e2d\u3002\u4f60\u53ef\u4ee5\u8fc7\u70b9\u6309\u8be5 API \u8d44\u6e90\uff0c \u5728 API \u8be6\u60c5\u9875\u9762\u5185\u5bf9\u5176\u8fdb\u884c\u7ba1\u7406\u6216\u5220\u9664\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API \u8d44\u6e90\u8be6\u60c5",src:r(32058).Z,width:"1920",height:"956"})),(0,o.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u7684 API \u8bbe\u7f6e\u5b9a\u4e49\uff0c\u8bf7\u53c2\u9605 ","[API \u8d44\u6e90\u6570\u636e\u683c\u5f0f]","(/zh-cn/docs/references/resources/#Logto API \u8d44\u6e90\u7684\u6570\u636e\u683c\u5f0f)\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6240\u6709\u5728 Logto \u7ba1\u7406\u63a7\u5236\u53f0\u5185\u6ce8\u518c\u7684 API \u8d44\u6e90\u4fe1\u606f\u53ef\u4ee5\u88ab\u6240\u6709\u7684\u5e94\u7528\u6240\u5171\u4eab\u3002")),(0,o.kt)("h2",{id:"\u89e3\u6790\u5e76\u9a8c\u8bc1-api-\u8bf7\u6c42\u7684\u6743\u9650\u4ee4\u724c"},"\u89e3\u6790\u5e76\u9a8c\u8bc1 API \u8bf7\u6c42\u7684\u6743\u9650\u4ee4\u724c"),(0,o.kt)("p",null,"Logto \u4e3a\u6bcf\u4e2a\u6388\u6743\u7684 API \u8bf7\u6c42\u9881\u53d1\u4e00\u4e2a\u6807\u51c6\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," \u683c\u5f0f\u6388\u6743\u4ee4\u724c\u3002\u8be5\u4ee4\u724c\u56de\u88ab\u52a0\u5bc6\u5e76\u7b7e\u540d\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7515"},"JWS")," \u4ee4\u724c\u3002"),(0,o.kt)("h3",{id:"\u4e86\u89e3-jws-\u4ee4\u724c"},"\u4e86\u89e3 JWS \u4ee4\u724c"),(0,o.kt)("p",null,"\u4e00\u4e2a\u7ecf\u8fc7\u7f16\u7801\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7515"},"JWS")," \u4ee4\u724c\u7531\u4e09\u90e8\u5206\u6784\u6210\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JOSE Header\uff1a\u58f0\u660e\u4ee4\u724c\u7c7b\u578b\u548c\u7f16\u7801\u7b97\u6cd5"),(0,o.kt)("li",{parentName:"ul"},"JWS Payload\uff1a\u5305\u542b\u6240\u6709\u4ee4\u724c\u7684\u5185\u90e8\u53c2\u6570"),(0,o.kt)("li",{parentName:"ul"},"JWS Signature\uff1a\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JWK")," \u52a0\u5bc6\u7684\u7b7e\u540d")),(0,o.kt)("p",null,"Logto \u9881\u53d1\u7684 JWS Payload \u6240\u5305\u542b\u7684\u53c2\u6570\u5b9a\u4e49\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jti"),(0,o.kt)("td",{parentName:"tr",align:null},"JWT \u552f\u4e00 ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sub"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61, \u4e00\u822c\u4e3a\u8bf7\u6c42\u7528\u6237\u7684 ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"iat"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ee3\u8868\u4ee4\u724c\u9881\u65f6\u95f4\u7684\u65f6\u95f4\u6233")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"exp"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ee3\u8868\u4ee4\u724c\u8fc7\u671f\u65f6\u95f4\u7684\u65f6\u95f4\u6233")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"client_id"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5e94\u7528 ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"iss"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ee4\u724c\u9881\u53d1\u65b9\u8eab\u4efd\u6807\u8bc6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aud"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ee4\u724c\u7684\u53d7\u4f17\u8d44\u6e90\u6807\u8bc6")))),(0,o.kt)("p",null,"\uff08\u6839\u636e\u4e0d\u540c\u7684 OIDC \u914d\u7f6e\uff0cJWS Payload \u4e2d\u4f60\u8fd8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u66f4\u591a\u7684\u6269\u5c55\u4fe1\u606f\uff09"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u60f3\u8981\u76f4\u89c2\u5730\u68c0\u67e5 JWT \u5185\u5bb9\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://jwt.io/"},"jwt.io")," \u6765\u89e3\u7801\u5e76\u68c0\u67e5\u4f60\u6240\u63a5\u6536\u5230\u7684\u4ee4\u724c\u3002\u8bf7\u5c0f\u5fc3\u4f7f\u7528\uff08\u6211\u4eec\u4e0d\u63a8\u8350\uff09\u4efb\u4f55\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u4ee4\u724c\uff0c\u56e0\u4e3a\u8be5\u670d\u52a1\u7531\u7b2c\u4e09\u65b9\u63d0\u4f9b\u7684\u516c\u5171\u5728\u7ebf\u670d\u52a1\uff0c\u4f60\u7684\u4ee4\u724c\u5b58\u5728\u88ab\u66b4\u9732\u4e86\u98ce\u9669\u3002")),(0,o.kt)("h3",{id:"\u9a8c\u8bc1\u6388\u6743\u4ee4\u724c"},"\u9a8c\u8bc1\u6388\u6743\u4ee4\u724c"),(0,o.kt)("p",null,"\u4e00\u4e2a\u6388\u6743\u4ee4\u724c\u7684\u9a8c\u8bc1\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2"},"\u9a8c\u8bc1 JWT \u4ee4\u724c\u683c\u5f0f")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7515#section-5.2"},"\u9a8c\u8bc1 JWS \u7b7e\u540d")),(0,o.kt)("li",{parentName:"ol"},"\u4ee4\u724c\u7684\u9881\u53d1\u8005\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<your-logto-domain>/oidc"),"\uff08\u7531 Logto \u670d\u52a1\u5668\u9881\u53d1\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u4ee4\u724c\u7684\u53d7\u4f17\u662f\u5f53\u524d\u63a5\u6536\u4ee4\u724c API \u63a5\u53e3\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"resource indicator"),"\uff08API \u4e13\u5c5e\u4ee4\u724c\uff0c \u5e94\u4e0e\u5728 Logto \u7ba1\u7406\u540e\u53f0\u4e2d\u6ce8\u518c API \u5bf9\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"resource indicator")," \u4e00\u81f4\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u4ee4\u724c\u5728\u6709\u6548\u671f\u5185")),(0,o.kt)("p",null,"\u6709\u5404\u79cd\u5f00\u6e90\u5e93\u548c\u5de5\u5177\u5305\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u8f7b\u677e\u9a8c\u8bc1\u548c\u89e3\u7801\u6807\u51c6\u7684 JWT \u6743\u9650\u4ee4\u724c\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u6240\u4f7f\u7528\u7684\u8bed\u8a00\u548c\u6846\u67b6\u9009\u62e9\u4e00\u4e2a\u5e76\u4e0e\u4e0d\u7684\u540e\u7aef\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210\u3002\u8bf7\u67e5\u770b\u6211\u4eec\u7684\u4e00\u4e9b\u793a\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./node"},"Node(Express)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./spring-boot"},"Spring Boot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./python"},"Python"))),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("p",null,"Logto \u4f7f\u7528\u57fa\u4e8e authorization code-based OAuth 2.0 \u6388\u6743\u534f\u8bae\u4f7f API \u8bf7\u6c42\u6d41\u7a0b\u53d8\u5f97\u66f4\u52a0\u5b89\u5168\u3002\u5982\u679c\u4f60\u5bf9\u5176\u80cc\u540e\u7684\u5b9e\u73b0\u611f\u5174\u8da3\uff0c\u8bf7\u53c2\u9605 OAuth 2.0 \u7684",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"},"\u5b98\u65b9\u6587\u6863")," \u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"))}k.isMDXComponent=!0},32058:function(t,e,r){e.Z=r.p+"assets/images/api-resource-details-7a925d2f429b7fbbb502f499662e8962.png"},17427:function(t,e,r){e.Z=r.p+"assets/images/api-resources-e0ecfee7b948b19e5340df7f694e0982.png"}}]);