webpackJsonp([0xd792c681b6a0,0x8dc7eb5d7b47],{72:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(59),l=a(1),r=a(16);t.default=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return l.createElement(r.Menu,{pagination:!0},n.times(e.pageCount,function(a){var n=(a+1).toString(),u=e.pageCount<10?5:3,o=+n-u<+t&&+n+u>+t,i=+n===e.pageCount,c=1===+n;return o||c||i?l.createElement(r.Menu.Item,{key:n,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+n+"/",name:n,active:t===n}):+n===e.pageCount-1||2===+n?l.createElement(r.Menu.Item,{key:n,disabled:!0},"..."):null}))}},73:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),l=a(16);t.default=function(e){return n.createElement(l.Card,null,n.createElement(l.Card.Content,null,n.createElement(l.Card.Header,null,"Tags")),n.createElement(l.Card.Content,null,n.createElement(l.List,null,e.tags.map(function(t){var a=t.fieldValue===e.tag,r={fontWeight:"700"},u=a?"/blog":"/blog/tags/"+t.fieldValue+"/";return n.createElement(l.List.Item,{as:"span",key:t.fieldValue},n.createElement(l.List.Icon,{name:"tag",color:a?"blue":null}),n.createElement(l.List.Content,{style:a?r:null},n.createElement(e.Link,{to:u},t.fieldValue," (",t.totalCount,")")))}))))}},74:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(86),l=a(59),r=a(1),u=a(16),o=a(72),i=a(97),c=a(73);t.default=function(e){var t=e.data.tags.group,a=e.data.posts.edges,m=e.location.pathname,d=Math.ceil(e.data.posts.totalCount/10),s=r.createElement(u.Container,null,a.map(function(e){var t=e.node,a=t.frontmatter,o=t.timeToRead,i=t.fields.slug,c=t.excerpt,m=a.author.avatar.children[0],d=l.get(a,"image.children.0.responsiveResolution",{}),s=r.createElement(u.Comment.Group,null,r.createElement(u.Comment,null,r.createElement(u.Comment.Avatar,{src:m.responsiveResolution.src,srcSet:m.responsiveResolution.srcSet}),r.createElement(u.Comment.Content,null,r.createElement(u.Comment.Author,{style:{fontWeight:400}},a.author.id),r.createElement(u.Comment.Metadata,{style:{margin:0}},a.updatedDate," - ",o," min read")))),p=r.createElement(u.Card.Description,null,c,r.createElement("br",null),r.createElement(n.default,{to:i},"Read more…"));return r.createElement(u.Card,{key:i,fluid:!0,image:d,header:a.title,extra:s,description:p})}));return r.createElement(u.Container,null,r.createElement(i.default,null),r.createElement(u.Segment,{vertical:!0},r.createElement(u.Grid,{padded:!0,style:{justifyContent:"space-around"}},r.createElement("div",{style:{maxWidth:600}},s,r.createElement(u.Segment,{vertical:!0,textAlign:"center"},r.createElement(o.default,{Link:n.default,pathname:m,pageCount:d}))),r.createElement("div",null,r.createElement(c.default,{Link:n.default,tags:t,tag:e.pathContext.tag})))))},t.pageQuery="** extracted graphql fragment **"},468:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(74);t.default=n.default,t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tags-page-tsx-089632b292d14982ee12.js.map