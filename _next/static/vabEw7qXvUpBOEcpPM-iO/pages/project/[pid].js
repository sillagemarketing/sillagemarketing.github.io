(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"8vVM":function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a).a.createElement;t.a=function(e){var t=e.src,n=void 0===t?"":t,a=n.substr(0,n.lastIndexOf("."))+".webp";return c("picture",null,c("source",{srcSet:a,type:"image/webp"}),c("img",e))}},K3yP:function(e,t,n){var a=n("q1tI");function c(e){return a.createElement("svg",e,a.createElement("text",{x:"0",y:"15",letterSpacing:"-2"},"SM"))}c.defaultProps={id:"brand-logo",width:"100%",height:"100%",viewBox:"0 0 24 17",fill:"none"},e.exports=c,c.default=c},K7qp:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("1OyB"),c=n("vuIU"),r=n("md7G"),o=n("foSv"),s=n("JX7q"),i=n("Ji7U"),l=n("rePB"),u=n("q1tI"),d=n.n(u),m=n("nOHt"),p=n.n(m),f=n("K3yP"),v=n.n(f),j=d.a.createElement,w=function(e){function t(){var e,n;Object(a.a)(this,t);for(var c=arguments.length,i=new Array(c),u=0;u<c;u++)i[u]=arguments[u];return n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i))),Object(l.a)(Object(s.a)(n),"onClickHandler",(function(e){p.a.push("/")})),n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.style,a=void 0===n?{}:n,c=e.disabled;return j("span",{className:"Brand".concat(t?" ".concat(t):"").concat(c?"":" clickable"),style:a,onClick:c?null:this.onClickHandler},j(v.a,null))}}]),t}(u.Component);w.defaultProps={}},TNge:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[pid]",function(){return n("z4so")}])},z4so:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return h}));var a=n("q1tI"),c=n.n(a),r=n("nOHt"),o=n("YFqc"),s=n.n(o),i=n("PGlZ"),l=n("wOhW"),u=n("zfzq"),d=n("9cA8"),m=n("K7qp"),p=n("lZCG"),f=n("HAnp"),v=n("8vVM"),j=c.a.createElement,w=u.default.ASSET_PATH+"images/projects/",h=!0;t.default=function(){var e=!1,t=Object(a.useRef)(),n=Object(r.useRouter)(),c=Object(a.useState)(!1),o=c[0],h=c[1],y=n.query.pid,b=d.projects.find((function(e){return e.url===(y||"").toLowerCase()})),N=d.projects.findIndex((function(e){return e.url===(y||"").toLowerCase()})),g=d.projects.map((function(e,t){return"undefined"!==typeof e.case?t:null})).filter((function(e){return null!==e})),O=g.find((function(e){return e>N}))||g[0],E=Object(a.useState)(!1),k=E[0],S=E[1];Object(a.useEffect)((function(){!k&&t.current&&t.current.analytics&&(t.current.analytics.pageview(window.location.pathname+window.location.search),S(!0))}));var I=function(){var e=window.innerWidth<767;e!==o&&h(e)};return u.default.isServer()||window.addEventListener("resize",I),Object(a.useEffect)((function(){return I(),function(){window.removeEventListener("resize",I)}})),b?j(l.a,{id:"page-projects-pid",brandColor:"primary",ref:t},j("div",{className:"project-container"},j("div",{className:"project-header"},j("div",{className:"d-none d-md-inline",style:{position:"absolute",top:"5vh",right:"3%",width:"60vw"}},j(m.a,{color:"fill-none",size:"match-parent"})),j("div",{className:"container"},j("div",{className:"row offset-md-1"},j("div",{className:"col-md-5 p-md-0 project-nav"},j(p.b,{animation:p.a.SLIDE_RIGHT,delay:.3},j("p",{className:"project-index"},N+1+"/"+g.length)),j(s.a,{href:"/project/[pid]",as:"/project/".concat(d.projects[O].url)},j("a",{className:"next-project"},"next")))),j("div",{className:"row offset-md-1"},j("div",{className:"col-11 col-md-5 p-md-0"},j(p.b,{animation:p.a.SLIDE_UP,delay:.3},j("h2",{className:"project-name"},b.name)))),j("div",{className:"row offset-md-1"},j("div",{className:"col-11 col-md-3 p-md-0"},b.services.map((function(e,t){return j("p",{className:"project-service",key:t},j(p.b,{animation:p.a.SLIDE_RIGHT,delay:.3},e))}))),j(i.a,null,(function(t){var n=t.inView,a=t.ref;t.entry;return n&&(e=!0),j("div",{className:"offset-md-1 col-md-8 project-thumbnail-container",ref:a},!o&&e&&j(v.a,{src:"".concat(w).concat(b.thumbnail),alt:"".concat(b.name," Thumbnail"),className:"project-thumbnail ".concat(e?"animate":"")}))})))),j(i.a,null,(function(t){var n=t.inView,a=t.ref;t.entry;return n&&(e=!0),j("div",{className:"project-thumbnail-container mt-5",ref:a},o&&e&&j(v.a,{src:"".concat(w).concat(b.thumbnail),alt:"".concat(b.name," Thumbnail"),className:"project-thumbnail ".concat(e?"animate":"")}))}))),j("div",{className:"project-body"},b.case&&b.case.map((function(e,t){var n="",a="",c="";switch(e.element){case"h4":c+="col-md-8",n=j("h4",{style:e.style},e.content);break;case"p":c+="col-md-8",n=j("p",{style:e.style},e.content);break;case"img":c+="col-md-10",a=o?"w-100 p-0":"",n=j(v.a,{src:"".concat(w).concat(e.content.src),alt:e.content.alt||"",className:"project-body-image",style:e.style});break;case"ul":c+="col-md-8",n=j("ul",{style:e.style},e.content.map((function(e,t){return j("li",{key:t},e)})))}return e.style,j("div",{className:"container ".concat(a),key:t},j("div",{className:"row"},j("div",{className:"offset-md-1 ".concat(c)},n)))})),j("div",{className:"container"},j("div",{className:"row"},j("div",{className:"offset-md-1 col-md-10",style:{marginTop:75}},j("h4",null,"Interested in working with us? "),j(f.a,{text:"get in touch",href:"/contact",src:"/project/".concat(b.url),dest:"/contact",analytics:t.current?t.current.analytics:{}}),j("span",{className:"float-right"},j(f.a,{text:"next case study",href:"/project/".concat(d.projects[O].url),src:"/project/".concat(b.url),dest:"/project/".concat(d.projects[O].url),analytics:t.current?t.current.analytics:{}})))))))):"Loading project"}}},[["TNge",0,2,4,5,1,3,6,8,9]]]);