"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{155:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(87),a=r(689),s={movieList:"MoviesList_movieList__8BnEE",movieItem:"MoviesList_movieItem__p4FQU"},i=r(184);function o(e){var t=e.movies,r=(0,a.TH)();return(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:s.movieList,children:t?t.map((function(e){return(0,i.jsx)(n.OL,{state:{from:r},className:s.movieItem,to:"/movies/".concat(e.id),children:(0,i.jsx)("li",{children:(0,i.jsx)("img",{className:s.movieImage,alt:e.title,title:e.title,src:e.poster_path?"https://image.tmdb.org/t/p/w400".concat(e.poster_path):"no-image"})},e.id)},e.id)})):null})})}},881:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),s=r(757),i=r.n(s),o=r(791),u=r(87),c=r(294),l=r(686),m=r.n(l),f=r(393),v=r(155),h="Movies_formContainer__f2YGl",p="Movies_formInput__zmXM8",d="Movies_formButton__DQX-Z",_=r(184);function g(){var e=(0,u.lr)(),t=(0,a.Z)(e,2),r=t[0],s=t[1],l=(0,o.useState)(null),g=(0,a.Z)(l,2),x=g[0],j=g[1],y=(0,o.useState)(!1),b=(0,a.Z)(y,2),Z=b[0],k=b[1],w=(0,o.useState)(null),N=(0,a.Z)(w,2),L=N[0],M=N[1],S=r.get("query");return(0,o.useEffect)((function(){if(S){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("7e63573e5f6a11223e01d9dfd6333e93","&query=").concat(S,"&include_adult=false&language=en-US"));case 4:if(t=e.sent,r=t.data,j(r.results),0!==r.results.length){e.next=12;break}return s(),j(""),m().Notify.failure("There are no films. Please try again."),e.abrupt("return");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),M(e.t0.message);case 17:return e.prev=17,k(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})));return function(){return e.apply(this,arguments)}}();e()}}),[S,s]),(0,_.jsxs)("div",{className:h,children:[(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchKey.value;s({query:t})},children:[(0,_.jsx)("label",{children:(0,_.jsx)("input",{type:"text",name:"searchKey",className:p,required:!0,placeholder:"what movie are you looking for?"})}),(0,_.jsx)("button",{className:d,type:"submit",children:"Search"})]}),Z&&(0,_.jsx)(f.Z,{}),!L&&(0,_.jsx)(v.Z,{movies:x})]})}}}]);
//# sourceMappingURL=881.9d2b7780.chunk.js.map