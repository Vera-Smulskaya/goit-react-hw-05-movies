"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{155:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(87),a=n(689),c={movieList:"MoviesList_movieList__8BnEE",movieItem:"MoviesList_movieItem__p4FQU"},i=n(184);function u(t){var e=t.movies,n=(0,a.TH)();return(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:c.movieList,children:e?e.map((function(t){return(0,i.jsx)(r.OL,{state:{from:n},className:c.movieItem,to:"/movies/".concat(t.id),children:(0,i.jsx)("li",{children:(0,i.jsx)("img",{className:c.movieImage,alt:t.title,title:t.title,src:t.poster_path?"https://image.tmdb.org/t/p/w400".concat(t.poster_path):"no-image"})},t.id)},t.id)})):null})})}},936:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(393),i=n(155),u=n(390),s={},o=n(184);function f(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],f=e[1],l=(0,a.useState)(null),p=(0,r.Z)(l,2),d=p[0],m=p[1],v=(0,a.useState)(!1),h=(0,r.Z)(v,2),_=h[0],g=h[1];return(0,a.useEffect)((function(){g(!0),(0,u.rQ)().then((function(t){return f(t)})).catch(m).finally(g(!1))}),[]),(0,o.jsxs)("div",{className:s.homeContainer,children:[(0,o.jsx)("h1",{className:s.homeTitle,children:"Trending today"}),_&&(0,o.jsx)(c.Z,{}),!d&&(0,o.jsx)(i.Z,{movies:n})]})}},390:function(t,e,n){n.d(e,{Hx:function(){return d},Y5:function(){return l},rQ:function(){return f},uV:function(){return p}});var r=n(861),a=n(757),c=n.n(a),i=n(294),u="7e63573e5f6a11223e01d9dfd6333e93",s="https://api.themoviedb.org/3/",o={method:"GET",headers:{accept:"application/json"}},f=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"trending/all/day?api_key=").concat(u),o);case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"),o);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(u,"&include_adult=false&language=en-US"),o);case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(u,"&include_adult=false&language=en-US"),o);case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.f1287a4c.chunk.js.map