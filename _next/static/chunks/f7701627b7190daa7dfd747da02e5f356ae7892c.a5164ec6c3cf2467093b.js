(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=o(a("q1tI")),r=a("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,o=e.hybrid,n=void 0!==o&&o,r=e.hasQuery;return a||n&&(void 0!==r&&r)}t.isInAmpMode=i,t.useAmp=function(){return i(n.default.useContext(r.AmpStateContext))}},"8Kt/":function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=o(a("q1tI")),r=o(a("Xuae")),i=a("lwAK"),p=a("FYa8"),l=a("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var a=n.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,o={};return function(n){var r=!0;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){var i=n.key.slice(n.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(n.type){case"title":case"base":t.has(n.type)?r=!1:t.add(n.type);break;case"meta":for(var p=0,l=d.length;p<l;p++){var c=d[p];if(n.props.hasOwnProperty(c))if("charSet"===c)a.has(c)?r=!1:a.add(c);else{var u=n.props[c],h=o[c]||new Set;h.has(u)?r=!1:(h.add(u),o[c]=h)}}}return r}}()).reverse().map((function(e,t){var a=e.key||t;return n.default.cloneElement(e,{key:a})}))}var s=r.default();function m(e){var t=e.children;return n.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return n.default.createElement(p.HeadManagerContext.Consumer,null,(function(a){return n.default.createElement(s,{reduceComponentsToState:h,handleStateChange:a,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=s.rewind,t.default=m},"9ixD":function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return s}));var o=a("8Kt/"),n=a.n(o),r=a("q1tI"),i=a.n(r);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},u=function(e,t,a){void 0===t&&(t=[]);var o=void 0===a?{}:a,n=o.defaultWidth,r=o.defaultHeight;return t.reduce((function(t,a,o){return t.push(i.a.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:a.url})),a.alt&&t.push(i.a.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:a.alt})),a.secureUrl&&t.push(i.a.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:a.secureUrl.toString()})),a.type&&t.push(i.a.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:a.type.toString()})),a.width?t.push(i.a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:a.width.toString()})):n&&t.push(i.a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.toString()})),a.height?t.push(i.a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:a.height.toString()})):r&&t.push(i.a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:r.toString()})),t}),[])},d=function(e){var t,a,o,n=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var r="";e.title?(r=e.title,c.templateTitle&&(r=c.templateTitle.replace(/%s/g,(function(){return r})))):e.defaultTitle&&(r=e.defaultTitle),r&&n.push(i.a.createElement("title",{key:"title"},r));var l,d,h=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,s=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow,m=e.disableGooglebot||c.disableGooglebot||e.dangerouslyDisableGooglebot,f="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,v=g.maxSnippet,G=g.maxImagePreview,b=g.maxVideoPreview,k=g.noarchive,w=g.noimageindex,E=g.notranslate,_=g.unavailableAfter;f=(y?",nosnippet":"")+(v?",max-snippet:"+v:"")+(G?",max-image-preview:"+G:"")+(k?",noarchive":"")+(_?",unavailable_after:"+_:"")+(w?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(E?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(c.disableGooglebot=!0),h||s?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),n.push(i.a.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(s?"nofollow":"follow")+f})),m||n.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(h?"noindex":"index")+","+(s?"nofollow":"follow")+f}))):(n.push(i.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),m||n.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+f}))),e.description&&n.push(i.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&n.push(i.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){n.push(i.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&n.push(i.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&n.push(i.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&n.push(i.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&n.push(i.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&n.push(i.a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(l=e.openGraph)?void 0:l.title)||r}));(null!=(a=e.openGraph)&&a.description||e.description)&&n.push(i.a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(d=e.openGraph)?void 0:d.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&n.push(i.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var O=e.openGraph.type.toLowerCase();n.push(i.a.createElement("meta",{key:"og:type",property:"og:type",content:O})),"profile"===O&&e.openGraph.profile?(e.openGraph.profile.firstName&&n.push(i.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&n.push(i.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&n.push(i.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&n.push(i.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===O&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&n.push(i.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&n.push(i.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===O&&e.openGraph.article?(e.openGraph.article.publishedTime&&n.push(i.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&n.push(i.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&n.push(i.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&n.push(i.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==O&&"video.episode"!==O&&"video.tv_show"!==O&&"video.other"!==O||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&n.push(i.a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&n.push(i.a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&n.push(i.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&n.push(i.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&n.push(i.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&n.push.apply(n,u("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&n.push.apply(n,u("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.locale&&n.push(i.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&n.push(i.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&n.push(i.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,a,o;n.push(i.a.createElement("meta",p({key:"meta:"+(null!=(t=null!=(a=null!=(o=e.keyOverride)?o:e.name)?a:e.property)?t:e.httpEquiv)},e)))})),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach((function(e){var t;n.push(i.a.createElement("link",p({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),n},h=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.titleTemplate,o=e.defaultTitle,r=e.dangerouslyDisableGooglebot,p=void 0!==r&&r,l=e.dangerouslySetAllPagesToNoIndex,c=void 0!==l&&l,u=e.dangerouslySetAllPagesToNoFollow,h=void 0!==u&&u,s=e.description,m=e.canonical,f=e.facebook,g=e.openGraph,y=e.additionalMetaTags,v=e.twitter,G=e.defaultOpenGraphImageWidth,b=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,w=e.defaultOpenGraphVideoHeight,E=e.mobileAlternate,_=e.languageAlternates,O=e.additionalLinkTags;return i.a.createElement(n.a,null,d({title:t,titleTemplate:a,defaultTitle:o,dangerouslySetAllPagesToNoIndex:c,dangerouslySetAllPagesToNoFollow:h,description:s,canonical:m,facebook:f,openGraph:g,additionalMetaTags:y,twitter:v,defaultOpenGraphImageWidth:G,defaultOpenGraphImageHeight:b,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:w,mobileAlternate:E,languageAlternates:_,additionalLinkTags:O,dangerouslyDisableGooglebot:p}))},t}(r.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.noindex,o=void 0!==a&&a,r=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,u=e.openGraph,h=e.facebook,s=e.twitter,m=e.additionalMetaTags,f=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags,G=e.disableGooglebot;return i.a.createElement(n.a,null,d({title:t,noindex:o,nofollow:r,robotsProps:p,description:l,canonical:c,facebook:h,openGraph:u,additionalMetaTags:m,twitter:s,titleTemplate:f,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v,disableGooglebot:G}))},t}(r.Component)},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,a){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=o(a("q1tI"));t.HeadManagerContext=n.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},RIqP:function(e,t,a){var o=a("Ijbi"),n=a("EbDI"),r=a("Bnag");e.exports=function(e){return o(e)||n(e)||r()}},Xuae:function(e,t,a){"use strict";var o=a("lwsE"),n=a("a1gu"),r=a("Nsbk"),i=a("PJYZ"),p=a("W8MJ"),l=a("7W2i"),c=a("RIqP");Object.defineProperty(t,"__esModule",{value:!0});var u=a("q1tI"),d=!1;t.default=function(){var e,t=new Set;function a(a){e=a.props.reduceComponentsToState(c(t),a.props),a.props.handleStateChange&&a.props.handleStateChange(e)}return function(c){function u(e){var p;return o(this,u),p=n(this,r(u).call(this,e)),d&&(t.add(i(p)),a(i(p))),p}return l(u,c),p(u,null,[{key:"rewind",value:function(){var a=e;return e=void 0,t.clear(),a}}]),p(u,[{key:"componentDidMount",value:function(){t.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),a(this)}},{key:"render",value:function(){return null}}]),u}(u.Component)}},lwAK:function(e,t,a){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=o(a("q1tI"));t.AmpStateContext=n.createContext({})}}]);