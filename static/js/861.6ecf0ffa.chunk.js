"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[861],{719:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(439),r=n(791),s=n(689),i=n(87),c=n(393),o=n(390),u="MovieDetails_containerPageMovieDetails__EA-Fv",l="MovieDetails_linkGoBack__wojGA",v="MovieDetails_containerMovieDetails__7Q5RO",d="MovieDetails_containerInfoMovieDetails__OfNJe",h="MovieDetails_titleMovieDetails__oHpet",f="MovieDetails_textMovieDetails__+t6Kj",p="MovieDetails_listMovieDetailsGenres__Gt7E4",_="MovieDetails_subtitleMovieDetails__zV9g0",x="MovieDetails_blockCastReviews__XAhxD",m="MovieDetails_linkCastReviews__7wNta",j=n(861),w=n(757),g=n.n(w),k={listCast:"MovieCast_listCast__1fR4A",textCast:"MovieCast_textCast__xLLgr",blockTextCast:"MovieCast_blockTextCast__QbYlc"},M=n.p+"static/media/noPhoto.ff7f621e277411408e05.png",N=n(184);function b(){var e=(0,s.UO)().movieId,t=(0,r.useState)([]),n=(0,a.Z)(t,2),i=n[0],c=n[1];return(0,r.useEffect)((function(){var t=function(){var t=(0,j.Z)(g().mark((function t(){var n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.uV)(e);case 3:n=t.sent,c(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,N.jsx)("ul",{className:k.listCast,children:i.map((function(e){var t=e.id,n=e.profile_path,a=e.original_name,r=e.character;return(0,N.jsxs)("li",{children:[(0,N.jsx)("img",{width:200,height:280,src:n?"https://image.tmdb.org/t/p/w200".concat(n):M,alt:a}),(0,N.jsxs)("div",{className:k.blockTextCast,children:[(0,N.jsx)("p",{className:k.textCast,children:a}),(0,N.jsx)("p",{className:k.characterCast,children:r})]})]},t)}))})}var Z="MovieReviews_textReviews__QLA3Y";function C(){var e=(0,s.UO)().movieId,t=(0,r.useState)([]),n=(0,a.Z)(t,2),i=n[0],c=n[1];return(0,r.useEffect)((function(){(0,o.Hx)(e).then((function(e){return c(e)})).catch((function(e){return console.error(e)}))}),[e]),(0,N.jsx)("ul",{children:i?i.map((function(e){return(0,N.jsxs)("li",{children:[(0,N.jsx)("h2",{children:e.author}),(0,N.jsx)("p",{className:Z,children:e.content})]},e.id)})):"there are no reviews"})}function D(){var e,t,n=(0,s.UO)().movieId,j=(0,r.useState)(""),w=(0,a.Z)(j,2),g=w[0],k=w[1],M=(0,r.useState)(null),Z=(0,a.Z)(M,2),D=Z[0],y=Z[1],S=(0,r.useState)(null),R=(0,a.Z)(S,2),U=R[0],O=R[1],A=(0,s.TH)(),G=(0,r.useRef)(null!==(e=null===(t=A.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),E=(0,s.s0)();return(0,r.useEffect)((function(){n&&(y(!0),(0,o.Y5)(n).then((function(e){k(e)})).catch((function(e){E("/404"),O(e)})).finally(y(!1)))}),[n,E]),(0,N.jsxs)("div",{className:u,children:[(0,N.jsx)(i.rU,{className:l,to:G.current,children:"Go back"}),D&&(0,N.jsx)(c.Z,{}),!U&&(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:v,children:[(0,N.jsx)("img",{width:300,height:450,alt:g.title?g.title:g.name,title:g.title?g.title:g.name,src:g.poster_path?"https://image.tmdb.org/t/p/w300".concat(g.poster_path):"No poster found"}),(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("h1",{className:h,children:g.title?g.title:g.name}),(0,N.jsxs)("p",{className:f,children:["User Score: ",Math.round(10*g.vote_average),"%"]}),(0,N.jsx)("h2",{className:_,children:"Overview:"}),(0,N.jsx)("p",{className:f,children:g.overview}),(0,N.jsx)("h2",{className:_,children:"Genres:"}),(0,N.jsx)("ul",{className:p,children:g&&g.genres.map((function(e){return(0,N.jsx)("li",{className:f,children:e.name},e.id)}))})]})]}),(0,N.jsx)("div",{children:(0,N.jsxs)("div",{className:x,children:[(0,N.jsx)(i.OL,{className:m,to:"cast",children:"Cast"}),(0,N.jsx)(i.OL,{className:m,to:"reviews",children:"Reviews"})]})}),(0,N.jsx)("div",{children:(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(c.Z,{}),children:(0,N.jsxs)(s.Z5,{children:[(0,N.jsx)(s.AW,{path:"cast",element:(0,N.jsx)(b,{})}),(0,N.jsx)(s.AW,{path:"reviews",element:(0,N.jsx)(C,{})})]})})})]})]})}},390:function(e,t,n){n.d(t,{Hx:function(){return h},Rn:function(){return f},Y5:function(){return v},rQ:function(){return l},uV:function(){return d}});var a=n(861),r=n(757),s=n.n(r),i=n(294),c="7e63573e5f6a11223e01d9dfd6333e93",o="https://api.themoviedb.org/3/",u={method:"GET",headers:{accept:"application/json"}},l=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"trending/all/day?api_key=").concat(c),u);case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US"),u);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(c,"&include_adult=false&language=en-US"),u);case 2:return n=e.sent,a=n.data,e.abrupt("return",a.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(c,"&include_adult=false&language=en-US"),u);case 2:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"search/movie?api_key=").concat(c,"&query=").concat(t,"&include_adult=false&language=en-US"),u);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=861.6ecf0ffa.chunk.js.map