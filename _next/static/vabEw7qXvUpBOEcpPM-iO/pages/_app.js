(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1OyB":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},"1TCz":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=(n("HY8x"),n("9ixD")),o=n("8Kt/"),s=n.n(o),l=n("1OyB"),c=n("vuIU"),u=n("md7G"),f=n("foSv"),p=n("JX7q"),d=n("Ji7U"),y=n("rePB"),h=n("nOHt"),m=n.n(h),g=n("pc+1"),v=n("zfzq"),b=n("K7qp"),O=n("pUzf"),x=i.a.createElement,k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={visible:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.checkVisibility()}},{key:"componentDidUpdate",value:function(){this.checkVisibility()}},{key:"checkVisibility",value:function(){var e=!0;"/"===m.a.router.pathname&&(e=!1),e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){return this.state.visible&&x("div",{className:"BackgroundPattern-container d-none d-lg-flex"},x("div",{className:"BackgroundPattern container"},x("div",{className:"offset-1 col-1"}),x("div",{className:"offset-3 offset-xl-2 col-1"}),x("div",{className:"offset-5 col-1"})))}}]),t}(a.Component),w=i.a.createElement,T=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(u.a)(this,Object(f.a)(t).call(this,e)),Object(y.a)(Object(p.a)(n),"onPopState",(function(){n.state.collapsed||n.toggleMenu("close")})),Object(y.a)(Object(p.a)(n),"toggleMenu",(function(e,t){if(!n.animOn){n.tl=new g.e({paused:!0,onComplete:function(){n.state.collapsed||(document.body.style.overflow="auto"),n.animOn=!1,n.setState({collapsed:!n.state.collapsed})}});var a=n.MenuBtn?n.MenuBtn.children:[];n.animOn=!0;var i=n.state.collapsed;e&&(i="open"===e),i?(document.body.style.overflow="hidden",n.subcontainer.style.display="block",n.tl.set(n.Menu,{overflow:"hidden"}),n.tl.set(n.linkContainer,{autoAlpha:1,display:"block"}),n.tl.to(a[1],.35*.7,{strokeDashoffset:68}),n.tl.to([a[0],a[2]],.35*.7,{strokeDashoffset:0,delay:-.35}),n.tl.to(a[0],.35*.7,{y:20}),n.tl.to(a[2],.35*.7,{y:-20,delay:.7*-.35}),n.tl.to(n.Menu,.35,{height:"100vh",backgroundColor:v.default.colors.secondary,ease:g.a.easeOut,delay:-.35}),n.tl.to(a[0],.35,{rotationZ:"-45deg",transformOrigin:"center center",ease:g.a.easeOut}),n.tl.to(a[2],.35,{rotationZ:"45deg",transformOrigin:"center center",ease:g.a.easeOut,delay:-.35}),n.tl.staggerFromTo(n.linkContainer.children,.35,{autoAlpha:0,y:-20},{autoAlpha:1,y:0,ease:g.a.easeOut},.1),n.tl.set(n.Menu,{overflow:"auto"})):(n.tl.set(n.Menu,{overflow:"hidden"}),n.tl.to([a[0],a[2]],.35,{rotationZ:"0deg",transformOrigin:"center center",ease:g.a.easeIn,delay:-.35}),n.tl.staggerTo(n.linkContainer.children,.35,{autoAlpha:0,y:-10,ease:g.a.easeOut,delay:-.35},.1),n.tl.to(n.Menu,.35,{height:n.menuHeight||n.MENU_HEIGHT,ease:g.a.easeOut,delay:-.35}),n.tl.to(a[0],.35,{y:-1,delay:-.35}),n.tl.to(a[2],.35,{y:1}),n.tl.to(n.Menu,.35,{backgroundColor:"transparent",ease:g.a.easeOut}),n.tl.to(a[2],.35,{strokeDashoffset:20,ease:g.c.easeInOut,delay:1.5*-.35}),n.tl.to(a[1],.35,{strokeDashoffset:35,ease:g.c.easeInOut,delay:-.175}),n.tl.to(a[0],.35,{x:70,ease:g.c.easeIn,delay:-.7}),n.tl.set(a[0],{x:-70}),n.tl.to(a[0],.35,{x:0,ease:g.c.easeOut,onComplete:function(){n.tl.set(n.linkContainer,{autoAlpha:0,display:"none"}),n.subcontainer.style.display="none"}}),document.body.style.overflow="auto"),n.tl.play(),"function"==typeof t&&t()}})),Object(y.a)(Object(p.a)(n),"goTo",(function(e,t){e.preventDefault(),n.toggleMenu("close",(function(){return m.a.push(t)}))})),Object(y.a)(Object(p.a)(n),"getLink",(function(e,t){if(e){var a=e.path,i=e.desc,r=a.replace(/\-/g," "),o="/".concat("home"===a?"":a);!v.default.isServer()&&m.a.pathname.substr(1);return w("a",{className:"menu-link",href:o,onMouseOver:n.addClass.bind(Object(p.a)(n),n.subcontainer,"hover"),onMouseOut:n.removeClass.bind(Object(p.a)(n),n.subcontainer,"hover"),onClick:function(e){return n.goTo(e,o)}},w(O.b,{animation:O.a.TOP_BOTTOM},w("span",{className:"nav-link-content","data-title":r},r)),w("p",null,i))}})),Object(y.a)(Object(p.a)(n),"addClass",(function(e,t){e&&t&&(e.className.match(t)||(e.className+=" "+t))})),Object(y.a)(Object(p.a)(n),"removeClass",(function(e,t){e&&t&&e.className.match(t)&&(e.className=e.className.replace(" "+t,""))})),n.state={collapsed:!0,visible:!0},n.MIN_SCREEN_WIDTH=575,n.links=[],n.MENU_HEIGHT=85,n.menuHeight=0,n.animOn=!1,n.pages=[{path:"services",desc:"what we do"},{path:"projects",desc:"what we make"},{path:"contact",desc:"how to reach us"}],n.tl=new g.e,n.ASSET_PATH=v.default.ASSET_PATH+"images/",n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("popstate",this.onPopState)}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.collapsed,n=e.visible;e.page;n&&t&&(this.menuHeight=this.Menu.getBoundingClientRect().height)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("popstate",this.onPopState)}},{key:"render",value:function(){var e=this,t=this.state,n=t.visible,a=t.collapsed,i="".concat(a?"collapsed":"expanded").concat(this.animOn?" animating":"");return this.links=[],n&&w("nav",{id:"Menu",className:"navbar sticky-top",ref:function(t){return e.Menu=t}},!a&&w(k,null),w("div",{className:"custom-width"},w("span",{onClick:function(){return e.toggleMenu("close")}},w(b.a,{ref:function(t){return e.Logo=t},disabled:!1})),w("svg",{viewBox:"0 0 70 50",id:"hamburger-menu",className:i,ref:function(t){return e.MenuBtn=t},onClick:function(){return e.toggleMenu()}},w("line",{x1:69,y1:5,x2:1,y2:5}),w("line",{x1:69,y1:25,x2:1,y2:25}),w("line",{x1:69,y1:45,x2:1,y2:45}))),w("div",{className:"container subcontainer",ref:function(t){return e.subcontainer=t}},w("div",{className:"col-12 offset-lg-1 col-lg-10",ref:function(t){return e.linkContainer=t},style:{display:"none"}},this.pages.map((function(t,n){return w("div",{className:"row",key:n},e.getLink(t,n))})))))}}]),t}(a.Component);T.defaultProps={device:"desktop"};var S=T,E=n("z/o8"),P=n("6ppI"),C=n("6TKP"),M=n("yjZJ"),j=i.a.createElement;E.b.registerPlugin(C.CSSRulePlugin,M.ScrollToPlugin,P.ExpoScaleEase,P.RoughEase,P.SlowMo);t.default=function(e){var t=e.Component,n=e.pageProps;return j(a.Fragment,null,j(r.a,{titleTemplate:"Sillage Marketing %s",title:" ",description:"We are a full-service creative agency specializing in branding and web development.",additionalMetaTags:[{property:"image",content:"https://www.sillagemarketing.com/assets/images/seo/brand.png"},{property:"og:image:secure_url",content:"https://www.sillagemarketing.com/assets/images/seo/brand.png"}],openGraph:{description:"We are a full-service creative agency specializing in branding and web development.",type:"website",locale:"en_IE",url:v.default.host,site_name:"Sillage Marketing",images:[{url:"https://www.sillagemarketing.com/assets/images/seo/brand.png",alt:"Sillage Marketing",height:1200,width:1200}]},twitter:{cardType:"summary_large_image"}}),j(s.a,null,j("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/assets/images/favicon/apple-icon-57x57.png"}),j("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/assets/images/favicon/apple-icon-60x60.png"}),j("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/assets/images/favicon/apple-icon-72x72.png"}),j("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/assets/images/favicon/apple-icon-76x76.png"}),j("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/assets/images/favicon/apple-icon-114x114.png"}),j("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/assets/images/favicon/apple-icon-120x120.png"}),j("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/assets/images/favicon/apple-icon-144x144.png"}),j("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/assets/images/favicon/apple-icon-152x152.png"}),j("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/images/favicon/apple-icon-180x180.png"}),j("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/assets/images/favicon/android-icon-192x192.png"}),j("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/images/favicon/favicon-32x32.png"}),j("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/assets/images/favicon/favicon-96x96.png"}),j("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/images/favicon/favicon-16x16.png"}),j("link",{rel:"manifest",href:"/assets/images/favicon/manifest.json"}),j("meta",{name:"msapplication-TileColor",content:"#A8B3A2"}),j("meta",{name:"msapplication-TileImage",content:"/assets/images/favicon/ms-icon-144x144.png"}),j("meta",{name:"theme-color",content:"#A8B3A2"}),j("meta",{name:"facebook-domain-verification",content:"eunc81bfvpbnu5t9qx41ay5ffn7ha2"})),j(k,null),j(S,null),j(t,n))}},"6TKP":function(e,t,n){!function(e){"use strict";var t,n,a,i,r=function(){return"undefined"!==typeof window},o=function(){return t||r()&&(t=window.gsap)&&t.registerPlugin&&t},s=function(){return n||(l(),i||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),n},l=function(e){t=e||o(),r()&&(a=document),t&&(i=t.plugins.css)&&(n=1)},c={version:"3.11.3",name:"cssRule",init:function(e,t,n,r,o){if(!s()||"undefined"===typeof e.cssText)return!1;var l=e._gsProxy=e._gsProxy||a.createElement("div");this.ss=e,this.style=l.style,l.style.cssText=e.cssText,i.prototype.init.call(this,l,t,n,r,o)},render:function(e,t){for(var n,a=t._pt,i=t.style,r=t.ss;a;)a.r(e,a.d),a=a.next;for(n=i.length;--n>-1;)r[i[n]]=i[i[n]]},getRule:function(e){s();var t,n,i,r,o=a.all?"rules":"cssRules",l=a.styleSheets,c=l.length,u=":"===e.charAt(0);for(e=(u?"":",")+e.split("::").join(":").toLowerCase()+",",u&&(r=[]);c--;){try{if(!(n=l[c][o]))continue;t=n.length}catch(f){console.warn(f);continue}for(;--t>-1;)if((i=n[t]).selectorText&&-1!==(","+i.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)){if(!u)return i.style;r.push(i.style)}}return r},register:l};o()&&t.registerPlugin(c),e.CSSRulePlugin=c,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},"6ppI":function(e,t,n){!function(e){"use strict";var t,n,a=function(){return t||"undefined"!==typeof window&&(t=window.gsap)&&t.registerPlugin&&t},i=function(e,t){return!!("undefined"===typeof e?t:e&&!~(e+"").indexOf("false"))},r=function(e){if(t=e||a()){n=t.registerEase;var i,r=t.parseEase(),o=function(e){return function(t){var n=.5+t/2;e.config=function(t){return e(2*(1-t)*t*n+t*t)}}};for(i in r)r[i].config||o(r[i]);for(i in n("slow",u),n("expoScale",f),n("rough",p),d)"version"!==i&&t.core.globals(i,d[i])}},o=function(e,t,n){var a=(e=Math.min(1,e||.7))<1?t||0===t?t:.7:0,r=(1-e)/2,o=r+e,s=i(n);return function(e){var t=e+(.5-e)*a;return e<r?s?1-(e=1-e/r)*e:t-(e=1-e/r)*e*e*e*t:e>o?s?1===e?0:1-(e=(e-o)/r)*e:t+(e-t)*(e=(e-o)/r)*e*e*e:s?1:t}},s=function(e,n,a){var i=Math.log(n/e),r=n-e;return a&&(a=t.parseEase(a)),function(t){return(e*Math.exp(i*(a?a(t):t))-e)/r}},l=function(e,t,n){this.t=e,this.v=t,n&&(this.next=n,n.prev=this,this.c=n.v-t,this.gap=n.t-e)},c=function(e){"object"!==typeof e&&(e={points:+e||20});for(var n,a,r,o,s,c,u,f=e.taper||"none",p=[],d=0,y=0|(+e.points||20),h=y,m=i(e.randomize,!0),g=i(e.clamp),v=t?t.parseEase(e.template):0,b=.4*(+e.strength||1);--h>-1;)n=m?Math.random():1/y*h,a=v?v(n):n,r="none"===f?b:"out"===f?(o=1-n)*o*b:"in"===f?n*n*b:n<.5?(o=2*n)*o*.5*b:(o=2*(1-n))*o*.5*b,m?a+=Math.random()*r-.5*r:h%2?a+=.5*r:a-=.5*r,g&&(a>1?a=1:a<0&&(a=0)),p[d++]={x:n,y:a};for(p.sort((function(e,t){return e.x-t.x})),c=new l(1,1,null),h=y;h--;)s=p[h],c=new l(s.x,s.y,c);return u=new l(0,0,c.t?c:c.next),function(e){var t=u;if(e>t.t){for(;t.next&&e>=t.t;)t=t.next;t=t.prev}else for(;t.prev&&e<=t.t;)t=t.prev;return u=t,t.v+(e-t.t)/t.gap*t.c}},u=o(.7);u.ease=u,u.config=o;var f=s(1,2);f.config=s;var p=c();p.ease=p,p.config=c;var d={SlowMo:u,RoughEase:p,ExpoScaleEase:f};for(var y in d)d[y].register=r,d[y].version="3.11.3";a()&&t.registerPlugin(u),e.EasePack=d,e.ExpoScaleEase=f,e.RoughEase=p,e.SlowMo=u,e.default=d,Object.defineProperty(e,"__esModule",{value:!0})}(t)},G6VD:function(e,t,n){var a=n("q1tI");function i(e){return a.createElement("svg",e,a.createElement("defs",null,[a.createElement("filter",{id:"line-filter-1",key:0},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"1",result:"warp",key:0}),a.createElement("feOffset",{dx:"-90",result:"warpOffset",key:1}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"30",in:"SourceGraphic",in2:"warpOffset",key:2})]),a.createElement("filter",{id:"line-filter-2",key:1},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"10",result:"warp",key:0}),a.createElement("feOffset",{dx:"-90",result:"warpOffset",key:1}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"60",in:"SourceGraphic",in2:"warpOffset",key:2})]),a.createElement("filter",{id:"line-filter-3",key:2},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.15 0.02",numOctaves:"3",result:"warp",key:0}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"0",in:"SourceGraphic",in2:"warp",key:1})]),a.createElement("filter",{id:"line-filter-4",key:3},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"5",result:"warp",key:0}),a.createElement("feOffset",{dx:"-90",result:"warpOffset",key:1}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"35",in:"SourceGraphic",in2:"warpOffset",key:2})]),a.createElement("filter",{id:"line-filter-5",key:4},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.01 0.7",numOctaves:"5",result:"warp",key:0}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"0",in:"SourceGraphic",in2:"warp",key:1})]),a.createElement("filter",{id:"line-filter-6",key:5},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.01 0.07",numOctaves:"5",seed:"2",result:"noise",key:0}),a.createElement("feDisplacementMap",{in:"SourceGraphic",in2:"warp",scale:"0",xChannelSelector:"R",yChannelSelector:"B",key:1})]),a.createElement("filter",{id:"line-filter-7",key:6},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"5",result:"warp",key:0}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"90",in:"SourceGraphic",in2:"warp",key:1})])]))}i.defaultProps={style:{visibility:"hidden",display:"none"}},e.exports=i,i.default=i},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return n("1TCz")}])},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},Ji7U:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return i}))},K3yP:function(e,t,n){var a=n("q1tI");function i(e){return a.createElement("svg",e,a.createElement("text",{x:"0",y:"15",letterSpacing:"-2"},"SM"))}i.defaultProps={id:"brand-logo",width:"100%",height:"100%",viewBox:"0 0 24 17",fill:"none"},e.exports=i,i.default=i},K7qp:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("1OyB"),i=n("vuIU"),r=n("md7G"),o=n("foSv"),s=n("JX7q"),l=n("Ji7U"),c=n("rePB"),u=n("q1tI"),f=n.n(u),p=n("nOHt"),d=n.n(p),y=n("K3yP"),h=n.n(y),m=f.a.createElement,g=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l))),Object(c.a)(Object(s.a)(n),"onClickHandler",(function(e){d.a.push("/")})),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.style,a=void 0===n?{}:n,i=e.disabled;return m("span",{className:"Brand".concat(t?" ".concat(t):"").concat(i?"":" clickable"),style:a,onClick:i?null:this.onClickHandler},m(h.a,null))}}]),t}(u.Component);g.defaultProps={}},foSv:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},md7G:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}n.d(t,"a",(function(){return o}));var r=n("JX7q");function o(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?Object(r.a)(e):t}},pUzf:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var a=n("1OyB"),i=n("vuIU"),r=n("md7G"),o=n("foSv"),s=n("JX7q"),l=n("Ji7U"),c=n("rePB"),u=n("q1tI"),f=n.n(u),p=n("pc+1"),d=n("G6VD"),y=n.n(d),h=f.a.createElement,m={TOP_BOTTOM:"TOP_BOTTOM",LEFT:"LEFT",BOTTOM:"BOTTOM"},g=function(e){function t(e){var n;return Object(a.a)(this,t),n=Object(r.a)(this,Object(o.a)(t).call(this,e)),Object(c.a)(Object(s.a)(n),"createTimeline",(function(){var e=new p.e({paused:!0,onStart:function(){n.LineDeco.forEach((function(e){e.style.filter="url(".concat("#line-filter-1",")")}))},onComplete:function(){n.LineDeco.forEach((function(e){e.style.filter="none"}))}}),t=document.querySelector("".concat("#line-filter-1"," > feTurbulence")),a={turbulence:0};return e.eventCallback("onUpdate",(function(){return t.setAttribute("baseFrequency",a.turbulence)})),e.to(a,{duration:.4,startAt:{turbulence:.09},turbulence:0}),e})),n.LineDeco=[],n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.tl=this.createTimeline(),this.LineFX.addEventListener("mouseenter",(function(){return e.tl.restart()})),this.LineFX.addEventListener("mouseleave",(function(){e.tl.progress(1),e.tl.kill()}))}},{key:"componentWillUnmount",value:function(){var e=this;this.LineFX.removeEventListener("mouseenter",(function(){return e.tl.restart()})),this.LineFX.removeEventListener("mouseleave",(function(){e.tl.progress(1),e.tl.kill()}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.alwaysOn,a=t.animation,i=t.children;this.LineDeco=[];var r="";switch(a){case m.TOP_BOTTOM:r=h(u.Fragment,null,h("svg",{ref:function(t){return e.LineDeco[0]=t},className:"LineFX--line-deco TOP"},h("line",{x1:"0",x2:"220",strokeWidth:"2"})),h("svg",{ref:function(t){return e.LineDeco[1]=t},className:"LineFX--line-deco BOTTOM"},h("line",{x1:"0",x2:"220",strokeWidth:"2"})));break;case m.LEFT:case m.BOTTOM:r=h("svg",{ref:function(t){return e.LineDeco[0]=t},className:"LineFX--line-deco ".concat(a)},h("line",{x1:"0",x2:"200",strokeWidth:"2"}))}return h(u.Fragment,null,h(y.a,null),h("span",{className:"LineFX ".concat(a," ").concat(n?"alwaysOn":""),ref:function(t){return e.LineFX=t}},h("span",{className:"LineFX--content"},i),r))}}]),t}(u.Component);g.defaultProps={alwaysOn:!1}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vuIU:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return i}))},yjZJ:function(e,t,n){!function(e){"use strict";var t,n,a,i,r,o,s,l=function(){return"undefined"!==typeof window},c=function(){return t||l()&&(t=window.gsap)&&t.registerPlugin&&t},u=function(e){return"string"===typeof e},f=function(e){return"function"===typeof e},p=function(e,t){var n="x"===t?"Width":"Height",o="scroll"+n,s="client"+n;return e===a||e===i||e===r?Math.max(i[o],r[o])-(a["inner"+n]||i[s]||r[s]):e[o]-e["offset"+n]},d=function(e,t){var n="scroll"+("x"===t?"Left":"Top");return e===a&&(null!=e.pageXOffset?n="page"+t.toUpperCase()+"Offset":e=null!=i[n]?i:r),function(){return e[n]}},y=function(e,t){if(!(e=o(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),s=!t||t===a||t===r,l=s?{top:i.clientTop-(a.pageYOffset||i.scrollTop||r.scrollTop||0),left:i.clientLeft-(a.pageXOffset||i.scrollLeft||r.scrollLeft||0)}:t.getBoundingClientRect(),c={x:n.left-l.left,y:n.top-l.top};return!s&&t&&(c.x+=d(t,"x")(),c.y+=d(t,"y")()),c},h=function(e,t,n,a,i){return isNaN(e)||"object"===typeof e?u(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+a-i:"max"===e?p(t,n)-i:Math.min(p(t,n),y(e,t)[n]-i):parseFloat(e)-i},m=function(){t=c(),l()&&t&&document.body&&(a=window,r=document.body,i=document.documentElement,o=t.utils.toArray,t.config({autoKillThreshold:7}),s=t.config(),n=1)},g={version:"3.11.3",name:"scrollTo",rawVars:1,register:function(e){t=e,m()},init:function(e,i,r,o,s){n||m();var l=t.getProperty(e,"scrollSnapType");this.isWin=e===a,this.target=e,this.tween=r,i=function(e,t,n,a){if(f(e)&&(e=e(t,n,a)),"object"!==typeof e)return u(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var i,r={};for(i in e)r[i]="onAutoKill"!==i&&f(e[i])?e[i](t,n,a):e[i];return r}(i,o,e,s),this.vars=i,this.autoKill=!!i.autoKill,this.getX=d(e,"x"),this.getY=d(e,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),"smooth"===t.getProperty(e,"scrollBehavior")&&t.set(e,{scrollBehavior:"auto"}),l&&"none"!==l&&(this.snap=1,this.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=i.x?(this.add(this,"x",this.x,h(i.x,e,"x",this.x,i.offsetX||0),o,s),this._props.push("scrollTo_x")):this.skipX=1,null!=i.y?(this.add(this,"y",this.y,h(i.y,e,"y",this.y,i.offsetY||0),o,s),this._props.push("scrollTo_y")):this.skipY=1},render:function(e,t){for(var n,i,r,o,l,c=t._pt,u=t.target,f=t.tween,d=t.autoKill,y=t.xPrev,h=t.yPrev,m=t.isWin,g=t.snap,v=t.snapInline;c;)c.r(e,c.d),c=c.next;n=m||!t.skipX?t.getX():y,r=(i=m||!t.skipY?t.getY():h)-h,o=n-y,l=s.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),d&&(!t.skipX&&(o>l||o<-l)&&n<p(u,"x")&&(t.skipX=1),!t.skipY&&(r>l||r<-l)&&i<p(u,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(f.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(f,t.vars.onAutoKillParams||[]))),m?a.scrollTo(t.skipX?n:t.x,t.skipY?i:t.y):(t.skipY||(u.scrollTop=t.y),t.skipX||(u.scrollLeft=t.x)),!g||1!==e&&0!==e||(i=u.scrollTop,n=u.scrollLeft,v?u.style.scrollSnapType=v:u.style.removeProperty("scroll-snap-type"),u.scrollTop=i+1,u.scrollLeft=n+1,u.scrollTop=i,u.scrollLeft=n),t.xPrev=t.x,t.yPrev=t.y},kill:function(e){var t="scrollTo"===e;(t||"scrollTo_x"===e)&&(this.skipX=1),(t||"scrollTo_y"===e)&&(this.skipY=1)}};g.max=p,g.getOffset=y,g.buildGetter=d,c()&&t.registerPlugin(g),e.ScrollToPlugin=g,e.default=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)},zfzq:function(e,t,n){"use strict";n.r(t);var a={isLocal:!1,isDev:!1,isStaging:!1,isProduction:!0,ASSET_PATH:"/assets/",GACode:"UA-120823644-4",isServer:function(){return!window.document},colors:{primary:"#A8B3A2",primaryDark:"#5C7051",secondary:"#F2F2F2",textPrimary:"#858585",textDark:"#5C7051",textLight:"#A8B3A2"},googleReCaptchaKey:"GOOGLE_RECAPTCHA_KEY",host:"https://www.sillagemarketing.com/",shade:function(e,t){var n=parseInt(e.slice(1),16),a=t<0?0:255,i=t<0?-1*t:t,r=n>>16,o=n>>8&255,s=255&n;return"#"+(16777216+65536*(Math.round((a-r)*i)+r)+256*(Math.round((a-o)*i)+o)+(Math.round((a-s)*i)+s)).toString(16).slice(1)}};t.default=a}},[[0,0,2,5,11,1,6,7,25]]]);