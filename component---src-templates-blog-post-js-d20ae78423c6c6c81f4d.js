(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6Gk8":function(e,t,n){"use strict";n("f3/d");var r=n("pgm3"),a=n("q1tI"),o=n.n(a),i=n("hayY"),s=n.n(i),l=n("Ix0k"),c=n.n(l),u=n("p3AD"),f=n("NO0K");t.a=function(){var e=o.a.useState(!1),t=e[0],n=e[1],a=r.data.site.siteMetadata.author;return o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"column",marginBottom:Object(u.a)(1)},className:"bio"},o.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:t?"row-reverse":"row",fontSize:15,width:"100%"}},o.a.createElement("img",{onClick:function(){return n((function(e){return!e}))},src:t?c.a:s.a,alt:a.name,width:"70",height:"70",style:{width:Object(u.a)(2.5),height:Object(u.a)(2.5),marginRight:t?0:20,marginLeft:t?20:0},className:"bio-image"}),o.a.createElement("div",{style:{width:"calc(100% - 90px)"}},o.a.createElement("p",{style:{marginBottom:0}},"I'm Oganisyan Vrezh, a software engineer, lecturer, and rebel. Here I write about education, management, and the art of non-conformity."),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"telegram-channel",href:"https://t.me/oganisyancom"},o.a.createElement("small",null,"Subscribe to the telegram channel to stay tuned.")))),o.a.createElement("div",{className:"social-wrapper",style:{width:"100%"}},o.a.createElement(f.a,null)))}},"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n("UZsz"),a=n("Bp/N"),o=n("HhXV");t.CommentCount=r.CommentCount,t.CommentEmbed=a.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(n("q1tI")),o=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=t.CommentEmbed=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(a.default.Component);c.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},c.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HhXV:function(e,t,n){"use strict";n("8+KV"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n("q1tI")),i=l(n("17x9")),s=n("ZMnY");function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(t.DiscussionEmbed=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,f.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return o.default.createElement("div",r({},this.props,{id:"disqus_thread"}))}}]),t}(o.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string,preData:i.default.func,preInit:i.default.func,onInit:i.default.func,onReady:i.default.func,afterRender:i.default.func,preReset:i.default.func,onIdentify:i.default.func,beforeComment:i.default.func,onNewComment:i.default.func,onPaginate:i.default.func}).isRequired}},Ix0k:function(e,t,n){e.exports=n.p+"static/profile-pic-blue-c9c54f6a630a9a33cccf7bc7b7b1d200.jpg"},NO0K:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("p3AD"),i=n("10BB");t.a=function(){return a.a.createElement("div",{style:{display:"flex",textAlign:"center",fontSize:""+Object(o.a)(1.3),color:"#555",overflowX:"auto",marginTop:"10px",overflowY:"hidden"},className:"social"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"telegram",className:"link",href:"https://t.me/oganisyancom"},a.a.createElement(i.j,{width:"25",className:"icon"})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"twitter",className:"link",href:"https://twitter.com/vre2h"},a.a.createElement(i.k,{width:"25",className:"icon"})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"github",className:"link",href:"https://github.com/vre2h"},a.a.createElement(i.c,{width:"25",className:"icon"})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"stack",className:"link",href:"https://stackoverflow.com/users/10396289/vre2h"},a.a.createElement(i.i,{width:"25",className:"icon"}))," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"linkedin",className:"link",href:"https://linkedin.com/in/vre2h"},a.a.createElement(i.f,{width:"25",className:"icon"}))," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"mail",className:"link",href:"mailto:hovanisyan.vrezh@gmail.com"},a.a.createElement(i.d,{width:"25",className:"icon"}))," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"fb",className:"link",href:"https://facebook.com/vre2h"},a.a.createElement(i.b,{width:"25",className:"icon"})))}},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n("q1tI")),o=s(n("17x9")),i=n("ZMnY");function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(t.CommentCount=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,i.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(a.default.Component)).propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var a=this,o=arguments,i=function(){r=null,n||e.apply(a,o)},s=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),s&&e.apply(a,o)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,a=!1,o=void 0;try{for(var s,l=n[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var c=s.value;if(e[c]!==t[c]&&!i(e[c]))return!0}}catch(u){a=!0,o=u}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return!1};var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},hayY:function(e,t,n){e.exports=n.p+"static/profile-pic-bd1bd5fc18e2a7203687442c674e037a.jpg"},pgm3:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"name":"Oganisyan Vrezh","summary":"Software Engineer and Lecturer with a keen interest in design, management and education."},"social":{"twitter":"vre2h"}}}}}')},qyO6:function(e,t,n){e.exports=n.p+"static/prince-jump-3e6965f69d2aa112c88e22422e42b9ba.png"},xPuQ:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://oganisyan.com"}}}}')},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),o=n("LZWt"),i=n("Xbzi"),s=n("apmT"),l=n("eeVq"),c=n("kJMx").f,u=n("EemH").f,f=n("hswa").f,m=n("qncB").trim,d=r.Number,p=d,h=d.prototype,b="Number"==o(n("Kuth")(h)),w="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=w?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,l=t.slice(2),c=0,u=l.length;c<u;c++)if((i=l.charCodeAt(c))<48||i>a)return NaN;return parseInt(l,r)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(b?l((function(){h.valueOf.call(n)})):"Number"!=o(n))?i(new p(y(t)),n,d):y(t)};for(var g,v=n("nh4g")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;v.length>E;E++)a(p,g=v[E])&&!a(d,g)&&f(d,g,u(p,g));d.prototype=h,h.constructor=d,n("KroJ")(r,"Number",d)}},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return w}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("7evw"),s=n("LvDl"),l=n("6Gk8"),c=n("Bl7J"),u=n("vrFN"),f=n("p3AD"),m=n("qyO6"),d=n.n(m),p=n("xPuQ"),h=n("10BB"),b=function(e){var t=e.pageUrl,n=e.title,r=e.style,o=p.data.site.siteMetadata.siteUrl;return a.a.createElement("div",{style:r},a.a.createElement("nav",{style:{display:"flex",textAlign:"center",fontSize:""+Object(f.a)(1.3),color:"#555",overflowX:"auto",overflowY:"hidden"},className:"social"},a.a.createElement("a",{href:"http://www.facebook.com/sharer/sharer.php?u="+o+t,title:"share to FB",className:"link",rel:"noopener noreferrer",target:"_blank"},a.a.createElement(h.b,{width:"25",classNameName:"icon"})),a.a.createElement("a",{href:"https://vk.com/share.php?url="+o+t,title:"share to VK",className:"link",rel:"noopener noreferrer",target:"_blank"},a.a.createElement(h.l,{width:"25",classNameName:"icon"})),a.a.createElement("a",{href:"https://twitter.com/share?url="+o+t+"&amp;text="+n+" on",title:"share to Twitter",className:"link",rel:"noopener noreferrer",target:"_blank"},a.a.createElement(h.k,{width:"25",classNameName:"icon"})),a.a.createElement("a",{href:"https://www.linkedin.com/cws/share?url="+o+t,title:"share to LinkedIn",className:"link",rel:"noopener noreferrer",target:"_blank"},a.a.createElement(h.f,{width:"25",classNameName:"icon"}))))},w=(t.default=function(e){var t,n,m,p=e.data,h=e.pageContext,w=e.location,y=p.markdownRemark,g=p.site.siteMetadata.title,v=h.previous,E=h.next,k=(t=Object(r.useState)(!1),n=t[0],m=t[1],Object(r.useEffect)((function(){var e=function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?m(!0):m(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),[n,function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}]),_=k[0],I=k[1],N=Object(s.get)(y,"frontmatter.featuredImage.childImageSharp.fluid");Object(r.useEffect)((function(){var e=document.querySelector(".gatsby-resp-image-wrapper");e&&(e.style["max-width"]="initial")}),[]);var S={shortname:"oganisyan",config:{identifier:w.pathname,title:y.frontmatter.title}};return a.a.createElement(c.a,{location:w,title:g},a.a.createElement(u.a,{title:y.frontmatter.title,description:y.frontmatter.description||y.excerpt,postImage:N}),a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("h1",{style:{marginTop:Object(f.a)(1),marginBottom:0}},y.frontmatter.title),a.a.createElement("p",{style:{display:"block",marginBottom:0}},a.a.createElement("small",{style:{color:"#a0a0a0"}},y.frontmatter.date," ",a.a.createElement("span",{style:{color:"var(--main-color)",fontSize:Object(f.a)(.5)}},"•")," ",y.timeToRead," min")),a.a.createElement(b,{title:y.frontmatter.title,pageUrl:w.pathname,style:{marginBottom:20}})),a.a.createElement("section",{dangerouslySetInnerHTML:{__html:y.html}}),a.a.createElement("hr",{style:{marginTop:Object(f.a)(2),marginBottom:Object(f.a)(2)}}),a.a.createElement("footer",null,a.a.createElement(l.a,null))),a.a.createElement("nav",null,a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,v&&a.a.createElement(o.Link,{to:"blog/"+v.fields.slug,rel:"prev"},"← ",v.frontmatter.title)),a.a.createElement("li",null,E&&a.a.createElement(o.Link,{to:"blog/"+E.fields.slug,rel:"next"},E.frontmatter.title," →")))),a.a.createElement(i.DiscussionEmbed,S),a.a.createElement("img",{onClick:I,src:d.a,alt:"^",style:{position:"fixed",right:"30px",bottom:0,display:_?"block":"none",width:"50px",cursor:"pointer"}}))},"3407681203")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d20ae78423c6c6c81f4d.js.map