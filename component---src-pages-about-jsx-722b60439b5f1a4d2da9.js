(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,a){},109:function(e,t,a){"use strict";var n=a(97),r=a(0),i=a.n(r),o=a(5),u=a.n(o),c=a(122),l=a.n(c),s=a(84),d=a(426),p=a(430),m=a(425),f=(a(54),a(427)),h=function(e){var t=e.title,a=e.pathname,n=e.secondary,r=[{pathname:"/",label:t},{pathname:"/about",label:"About"}];return i.a.createElement(f.a,{fixed:"top",inverted:!0,pointing:!0,secondary:n,size:"large"},i.a.createElement(m.a,null,r.map(function(e){return i.a.createElement(f.a.Item,{key:e.pathname,as:s.Link,to:e.pathname,active:e.pathname===a},e.label)})))},y=(a(140),a(106),(new Date).getFullYear()),g=function(e){var t=e.children,a=e.location,r=e.secondaryHeader;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(d.a,{minWidth:d.a.onlyTablet.minWidth},i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(h,{title:e.site.siteMetadata.title,pathname:a?a.pathname:null,secondary:r}),i.a.createElement(p.a,{style:{border:0,padding:0,margin:0}},t),i.a.createElement(p.a,{inverted:!0,vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}},i.a.createElement(m.a,{textAlign:"center"},i.a.createElement("p",null,"Copyright ",y," ",e.site.siteMetadata.title))))},data:n})};g.propTypes={children:u.a.node.isRequired};t.a=g},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(84),o=a(109);t.default=function(e){var t=e.location;return r.a.createElement(o.a,{location:t},r.a.createElement("h1",null,"About"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},84:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(5),o=a.n(i),u=a(77),c=a.n(u);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var l=a(28);a.d(t,"waitForRouteChange",function(){return l.c});var s=a(89),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var p=a(39);a.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},89:function(e,t,a){var n;e.exports=(n=a(98))&&n.default||n},97:function(e){e.exports={data:{site:{siteMetadata:{title:"Housewolf Studio"}}}}},98:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),u=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-about-jsx-722b60439b5f1a4d2da9.js.map