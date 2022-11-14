"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[679],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98867:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,o.kt)("a",{href:"/docs/tutorials/get-started/create-and-integrate-the-first-app"},"read this")," before continuing.")))}p.isMDXComponent=!0},30365:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the user's authorization status, a ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," format ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," will be granted and issued by Logto, specifically for the requested API resource. Encrypted and audience-restricted with an expiration time. The token carries all the necessary info to represent the authority of this request."),(0,o.kt)("p",null,"Append the token to your request's Authorization header as the Bearer token:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Bearer token's integration flow may vary based on the framework or requester you are using. Choose your own way to apply the request Authorization header.")),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://logto.dev/api/users\n\n--header Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek\n\n")))}p.isMDXComponent=!0},3691:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,o.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,o.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}p.isMDXComponent=!0},28684:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logto SDK helps you fetch the user information from the OIDC ",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint"),"."),(0,o.kt)("p",null,"You can get the user information by calling ",(0,o.kt)("code",null,n.apiCodeFragment)," after signing in."),(0,o.kt)("p",null,"The user information response will vary based on the scopes used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogtoConfig")," while initializing the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogtoClient"),"; and the following table lists the relations between user information and scopes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required Scope"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sub"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"openid")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"openid")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"username"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"picture"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"role_names"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string[]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"email"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"email")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"email_verified"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"email")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"phone")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"phone_number_verified"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"phone")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"custom_data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"custom_data")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"identities"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"identities")),(0,o.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},32897:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Customize sign-in experience")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-passcode-sign-in"},"Enable SMS or email passcode sign-in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-social-sign-in"},"Enable social sign-in"))))}p.isMDXComponent=!0},94880:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logto also helps you apply authorization to your backend APIs . Please check our ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"Protect your API")," see how to integrate Logto with your backend applications."),(0,o.kt)("p",null,"You can claim an authorization token for a protected API resource request easily through Logto SDK."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In order to grant an audience restricted authorization token for your request, make sure the requested API resource is ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console"},"registered in the Logto Admin Console"),".")))}p.isMDXComponent=!0},18737:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",null,"Before calling ",(0,o.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}p.isMDXComponent=!0},93644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return A}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=n(98867),l=n(30365),p=n(3691),d=n(28684),s=n(32897),u=n(94880),c=n(18737),g=["components"],m={sidebar_label:"iOS"},k="iOS: Integrate Logto Swift SDK",f={unversionedId:"docs/recipes/integrate-logto/ios",id:"docs/recipes/integrate-logto/ios",title:"iOS: Integrate Logto Swift SDK",description:"Add Logto SDK as a dependency",source:"@site/docs/docs/recipes/integrate-logto/ios.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/ios",permalink:"/docs/recipes/integrate-logto/ios",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/ios.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"iOS"},sidebar:"docsSidebar",previous:{title:"Go Web",permalink:"/docs/recipes/integrate-logto/go-web"},next:{title:"Machine to Machine",permalink:"/docs/recipes/integrate-logto/machine-to-machine"}},h={},A=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init <code>LogtoClient</code>",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in with browser",id:"sign-in-with-browser",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Fetch user information",id:"fetch-user-information",level:2},{value:"Backend API Authorization",id:"backend-api-authorization",level:2},{value:"Further readings",id:"further-readings",level:2}],N={toc:A};function y(e){var t=e.components,n=(0,r.Z)(e,g);return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ios-integrate-logto-swift-sdk"},"iOS: Integrate Logto Swift SDK"),(0,o.kt)(i.ZP,{type:"Native App",mdxType:"AppNote"}),(0,o.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,o.kt)("p",null,"Use the following URL to add Logto SDK as a dependency in Swift Package Manager."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/logto-io/swift.git\n")),(0,o.kt)("p",null,"Since Xcode 11, you can ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app"},"directly import a Swift package")," w/o any additional tool."),(0,o.kt)("p",null,"We do not support ",(0,o.kt)("strong",{parentName:"p"},"Carthage")," and ",(0,o.kt)("strong",{parentName:"p"},"CocoaPods")," at the time due to some technical issues."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Carthage"),(0,o.kt)("p",null,"Carthage ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Carthage/Carthage/issues/1226#issuecomment-290931385"},"needs a ",(0,o.kt)("inlineCode",{parentName:"a"},"xcodeproj")," file to build"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"swift package generate-xcodeproj")," will report a failure since we are using binary targets\nfor native social plugins. We will try to find a workaround later.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"CocoaPods"),(0,o.kt)("p",null,"CocoaPods ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CocoaPods/CocoaPods/issues/3276"},"does not support local dependency")," and monorepo, thus it","'","s hard to create a ",(0,o.kt)("inlineCode",{parentName:"p"},".podspec")," for this repo.")),(0,o.kt)("h2",{id:"init-logtoclient"},"Init ",(0,o.kt)("inlineCode",{parentName:"h2"},"LogtoClient")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>"\n)\nlet client = LogtoClient(useConfig: config)\n')),(0,o.kt)("p",null,"By default, we store credentials like ID Token and Refresh Token in the Keychain. Thus the user doesn't need to sign in again when he returns."),(0,o.kt)("p",null,"To turn off this behavior, set ",(0,o.kt)("inlineCode",{parentName:"p"},"usingPersistStorage")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let config = try? LogtoConfig(\n  // ...\n  usingPersistStorage: false\n)\n")),(0,o.kt)("h2",{id:"sign-in"},"Sign in"),(0,o.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,o.kt)(p.ZP,{figureSrc:"data:image/png;base64,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",redirectUri:"io.logto://callback",mdxType:"ConfigureRedirectUri"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Redirect URI in iOS SDK is only for internal use. There's ",(0,o.kt)("em",{parentName:"p"},"NO NEED")," to add a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app"},"Custom URL Scheme")," until a connector asks.")),(0,o.kt)("h3",{id:"sign-in-with-browser"},"Sign in with browser"),(0,o.kt)(c.ZP,{calling:".signInWithBrowser(redirectUri:)",mdxType:"SignInNote"}),(0,o.kt)("p",null,"Go back to Xcode, use the following code to implement sign-in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'do {\n  try await client.signInWithBrowser(redirectUri: "io.logto://callback")\n  print(client.isAuthenticated) // true\n} catch let error as LogtoClientErrors.SignIn {\n  // error occured during sign in\n}\n')),(0,o.kt)("h2",{id:"sign-out"},"Sign out"),(0,o.kt)("p",null,"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},".signOut()")," will clean all the Logto data in Keychain, if it has."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"await client.signOut()\n")),(0,o.kt)("h2",{id:"fetch-user-information"},"Fetch user information"),(0,o.kt)(d.ZP,{apiCodeFragment:"logtoClient.fetchUserInfo()",mdxType:"FetchUserInformation"}),(0,o.kt)("h2",{id:"backend-api-authorization"},"Backend API Authorization"),(0,o.kt)(u.ZP,{mdxType:"GetAuthorizationToken"}),(0,o.kt)("p",null,"Add your API resource indicators to the Logto SDK configs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>",\n  resources: ["<your-resource-indicators>"]\n)\nlet client = LogtoClient(useConfig: config)\n')),(0,o.kt)("p",null,"Claim an authorization token from Logto before making your API request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'  let accessToken = try await client.getAccessToken(for: "<your-target-api-resource>")\n  // custom logic\n')),(0,o.kt)(l.ZP,{mdxType:"ApplyAuthorizationToken"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'await LogtoRequest.get(\n  useSession: session,\n  endpoint: userInfoEndpoint,\n  headers: ["Authorization": "Bearer \\(accessToken)"]\n)\n')),(0,o.kt)("h2",{id:"further-readings"},"Further readings"),(0,o.kt)(s.ZP,{mdxType:"FurtherReadings"}))}y.isMDXComponent=!0}}]);