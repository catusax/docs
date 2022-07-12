"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9999],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3479:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(9496),r="container_WYEs",i=function(e){var t=e.columns,n=e.justifyContent,i=void 0===n?"flex-start":n;return o.createElement("div",{className:r,style:{justifyContent:i}},t.map((function(e){var t=e.title,n=e.items;return o.createElement("div",{key:t},o.createElement("h4",null,t),o.createElement("ul",null,n.map((function(e){var t,n=e.key,r=e.node,i=e.link;return o.createElement("li",{key:n},null!=(t=null!=r?r:i&&o.createElement("a",{href:i,target:"_blank",rel:"noreferrer"},n))?t:n)}))))})))}},254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var o=n(665),r=n(151),i=(n(9496),n(9613)),a=n(3479),c=n(4024),s=n(5047),l=["components"],u={sidebar_position:4},p="Enable SMS or email passcode sign-in",d={unversionedId:"docs/tutorials/get-started/enable-passcode-sign-in",id:"docs/tutorials/get-started/enable-passcode-sign-in",title:"Enable SMS or email passcode sign-in",description:'In the "Get Started" tab, click the "Enable" button on the right, and the browser will redirect to the "Connectors" -> "SMS and email connectors" tab.',source:"@site/docs/docs/tutorials/get-started/enable-passcode-sign-in.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/enable-passcode-sign-in",permalink:"/docs/tutorials/get-started/enable-passcode-sign-in",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/enable-passcode-sign-in.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Customize sign-in experience",permalink:"/docs/tutorials/get-started/customize-sign-in-experience"},next:{title:"Enable social sign-in",permalink:"/docs/tutorials/get-started/enable-social-sign-in"}},m={},h=[{value:"Choose a connector",id:"choose-a-connector",level:2},{value:"Configure connector and test",id:"configure-connector-and-test",level:2},{value:"Enable connector in sign-in experience",id:"enable-connector-in-sign-in-experience",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],g={toc:h};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enable-sms-or-email-passcode-sign-in"},"Enable SMS or email passcode sign-in"),(0,i.kt)("p",null,'In the "Get Started" tab, click the "Enable" button on the right, and the browser will redirect to the "Connectors" -> "SMS and email connectors" tab.'),(0,i.kt)("p",null,"The enabling process for SMS and email are very close, so we combine them into one tutorial."),(0,i.kt)(c.ZP,{mdxType:"ConnectorsIntro"}),(0,i.kt)("h2",{id:"choose-a-connector"},"Choose a connector"),(0,i.kt)("p",null,'Depending on what kind of connector you want to enable, click the "Set Up" button on the left of the Type column. The opening modal will ask you the specific connector you want to set up.'),(0,i.kt)("p",null,"Logto has some built-in connectors which allows out-of-box usage:"),(0,i.kt)(a.Z,{columns:[{title:"SMS connectors",items:[{key:"Twilio SMS",link:"https://github.com/logto-io/logto/tree/master/packages/connector-twilio-sms"},{key:"Aliyun SMS",link:"https://github.com/logto-io/logto/tree/master/packages/connector-aliyun-sms"}]},{title:"Email connectors",items:[{key:"SendGrid Mail",link:"https://github.com/logto-io/logto/tree/master/packages/connector-sendgrid-mail"},{key:"Aliyun DM",link:"https://github.com/logto-io/logto/tree/master/packages/connector-aliyun-dm"},{key:"SMTP",link:"https://github.com/logto-io/logto/tree/master/packages/connector-smtp"}]}],mdxType:"Columns"}),(0,i.kt)("p",null,'Choose the one that suits you, and click "Next" to continue.'),(0,i.kt)(s.ZP,{mdxType:"ConnectorsWip"}),(0,i.kt)("h2",{id:"configure-connector-and-test"},"Configure connector and test"),(0,i.kt)("p",null,"A full-screen page will guide you through setting things up correctly. Follow the steps below to finish the setup:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go through the README doc on the left, then follow the instructions inside."),(0,i.kt)("li",{parentName:"ol"},"Fill out the JSON that the connector needs in the editor on the right."),(0,i.kt)("li",{parentName:"ol"},'Click "Next", and in step 2, test if the connector works as expected.'),(0,i.kt)("li",{parentName:"ol"},'Click "Done" to finish.')),(0,i.kt)("h2",{id:"enable-connector-in-sign-in-experience"},"Enable connector in sign-in experience"),(0,i.kt)("p",null,'Switch to the "Sign-in Experience" tab by clicking the link in the very left section of the page, then click the "Sign-in Methods" tab.'),(0,i.kt)("p",null,'If you didn\'t add any other sign-in methods before, "Enable secondary sign-in" should be off. Turn it on, and check "Phone number sign-in" or "Email sign-in" based on which connector you just set up.'),(0,i.kt)("p",null,'Now you should see the text "Sign in with Phone number" or "Sign in with Email" under the big "Sign In" button in the preview.'),(0,i.kt)("p",null,'Click "Save changes" to push the changes to go live.'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Open the demo app again to try out the new sign-in method.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/configure-sign-in-methods"},"Configure sign-in methods")," for a complete picture of sign-in methods combinations.")),(0,i.kt)("h2",{id:"whats-next"},"What's next"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-social-sign-in"},"Enable social sign-in")," (in case you haven't tried)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/further-readings"},"Further readings"))))}f.isMDXComponent=!0},4024:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),r=n(151),i=(n(9496),n(9613)),a=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"About connectors",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Connectors are the bridges between Logto and third-party services. We have three connector types: SMS, email, and social.",(0,i.kt)("br",null),"\nWhile Logto provides some built-in connectors, you can also implement your own. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/connectors/"},"Connectors")," to learn more.")))}s.isMDXComponent=!0},5047:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),r=n(151),i=(n(9496),n(9613)),a=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on more connectors! If you don't see the connector you want, follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/create-your-connector/"},"Create your connector")," to extend or file a ",(0,i.kt)("a",{parentName:"p",href:"#"},"Feature Request")," on GitHub.")))}s.isMDXComponent=!0}}]);