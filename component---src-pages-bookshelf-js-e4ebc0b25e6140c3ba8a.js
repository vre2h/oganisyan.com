(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6Gk8":function(e,t,a){"use strict";a("f3/d");var r=a("pgm3"),n=a("q1tI"),i=a.n(n),l=a("hayY"),o=a.n(l),c=a("Ix0k"),s=a.n(c),m=a("p3AD"),f=a("NO0K");t.a=function(){var e=i.a.useState(!1),t=e[0],a=e[1],n=r.data.site.siteMetadata.author;return i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"column",marginBottom:Object(m.a)(1)},className:"bio"},i.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:t?"row-reverse":"row",fontSize:15,width:"100%"}},i.a.createElement("img",{onClick:function(){return a((function(e){return!e}))},src:t?s.a:o.a,alt:n.name,width:"70",height:"70",style:{width:Object(m.a)(2.5),height:Object(m.a)(2.5),marginRight:t?0:20,marginLeft:t?20:0},className:"bio-image"}),i.a.createElement("div",{style:{width:"calc(100% - 90px)"}},i.a.createElement("p",{style:{marginBottom:0}},"I'm Oganisyan Vrezh, a software engineer, lecturer, and rebel. Here I write about education, management, and the art of non-conformity."),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"telegram-channel",href:"https://t.me/oganisyancom"},i.a.createElement("small",null,"Subscribe to the telegram channel to stay tuned.")))),i.a.createElement("div",{className:"social-wrapper",style:{width:"100%"}},i.a.createElement(f.a,null)))}},Ix0k:function(e,t,a){e.exports=a.p+"static/profile-pic-blue-c9c54f6a630a9a33cccf7bc7b7b1d200.jpg"},NO0K:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("p3AD"),l=a("10BB");t.a=function(){return n.a.createElement("div",{style:{display:"flex",textAlign:"center",fontSize:""+Object(i.a)(1.3),color:"#555",overflowX:"auto",marginTop:"10px",overflowY:"hidden"},className:"social"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"telegram",className:"link",href:"https://t.me/oganisyancom"},n.a.createElement(l.j,{width:"25",className:"icon"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"twitter",className:"link",href:"https://twitter.com/vre2h"},n.a.createElement(l.k,{width:"25",className:"icon"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"github",className:"link",href:"https://github.com/vre2h"},n.a.createElement(l.c,{width:"25",className:"icon"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"stack",className:"link",href:"https://stackoverflow.com/users/10396289/vre2h"},n.a.createElement(l.i,{width:"25",className:"icon"}))," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"linkedin",className:"link",href:"https://linkedin.com/in/vre2h"},n.a.createElement(l.f,{width:"25",className:"icon"}))," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"mail",className:"link",href:"mailto:hovanisyan.vrezh@gmail.com"},n.a.createElement(l.d,{width:"25",className:"icon"}))," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"fb",className:"link",href:"https://facebook.com/vre2h"},n.a.createElement(l.b,{width:"25",className:"icon"})))}},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),l=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},UXb8:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return h}));a("xfY5"),a("bHtr"),a("tUrg");var r=a("q1tI"),n=a.n(r),i=a("vrFN"),l=a("Bl7J"),o=a("6Gk8"),c=a("HEen"),s=a("p3AD"),m=a("10BB"),f=function(e){var t=e.title,a=e.author,r=e.review,i=e.link,l=new Array(Number(r)).fill(n.a.createElement("span",{style:{position:"relative",top:"-1px",marginLeft:"7px",color:"var(--main-color)"}},"★"));return n.a.createElement(c.a,{flexDirection:"row",style:{marginBottom:Object(s.a)(1)}},n.a.createElement("div",{style:{display:"flex",width:"100%"}},n.a.createElement("div",null,n.a.createElement(m.a,{width:"25",style:{marginRight:"10px",alignSelf:"flex-start",cursor:"pointer",fill:"var(--main-color)"}})),n.a.createElement("div",null,n.a.createElement(c.a,null,n.a.createElement("h4",{style:{margin:0,lineHeight:1.4}},t,l)),n.a.createElement(c.a,{flexDirection:"column"},n.a.createElement("small",{style:{fontStyle:"italic",color:"#a5a5a5"}},"by ",a," "),n.a.createElement("small",null,i&&n.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Find book here"))))))},u=function(e){var t=e.books,a=e.title;return n.a.createElement("section",null,n.a.createElement("h4",null,a),t.map((function(e){var t=e.title,a=e.author,r=e.review,i=e.link;return n.a.createElement(f,{key:t,title:t,author:a,review:r,link:i})})))};t.default=function(e){var t=e.data,a=e.location,r=t.site.siteMetadata.title,c=t.site.siteMetadata.books;return n.a.createElement(l.a,{location:a,title:r},n.a.createElement(i.a,{title:"All posts"}),n.a.createElement(o.a,null),n.a.createElement("h1",{style:{margin:Object(s.a)(.5)+" 0 "+Object(s.a)(2)+" 0"}},"Bookshelf"),n.a.createElement("main",{style:{marginTop:Object(s.a)(1)}},c.map((function(e){var t=e.title,a=e.books;return n.a.createElement(u,{title:t,books:a})}))))};var h="417370076"},hayY:function(e,t,a){e.exports=a.p+"static/profile-pic-bd1bd5fc18e2a7203687442c674e037a.jpg"},pgm3:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"name":"Oganisyan Vrezh","summary":"Software Engineer and Lecturer with a keen interest in design, management and education."},"social":{"twitter":"@vre2h"}}}}}')},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},xfY5:function(e,t,a){"use strict";var r=a("dyZX"),n=a("aagx"),i=a("LZWt"),l=a("Xbzi"),o=a("apmT"),c=a("eeVq"),s=a("kJMx").f,m=a("EemH").f,f=a("hswa").f,u=a("qncB").trim,h=r.Number,p=h,d=h.prototype,g="Number"==i(a("Kuth")(d)),E="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,r,n,i=(t=E?t.trim():u(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var l,c=t.slice(2),s=0,m=c.length;s<m;s++)if((l=c.charCodeAt(s))<48||l>n)return NaN;return parseInt(c,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(g?c((function(){d.valueOf.call(a)})):"Number"!=i(a))?l(new p(b(t)),a,h):b(t)};for(var v,N=a("nh4g")?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;N.length>k;k++)n(p,v=N[k])&&!n(h,v)&&f(h,v,m(p,v));h.prototype=d,d.constructor=h,a("KroJ")(r,"Number",h)}}}]);