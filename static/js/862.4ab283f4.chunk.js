"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[862],{862:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(439),a=n(791),c=n(689),s=n(87),i=n(393),u=n(390),o={},l=n(861),d=n(757),h=n.n(d),p=n(184);function f(){var e=(0,c.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),s=n[0],i=n[1];return(0,a.useEffect)((function(){var t=function(){var t=(0,l.Z)(h().mark((function t(){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.uV)(e);case 3:n=t.sent,i(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,p.jsx)("ul",{children:s.map((function(e){var t=e.id,n=e.profile_path,r=e.original_name,a=e.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{width:200,src:n?"https://image.tmdb.org/t/p/w200".concat(n):"No photo found",alt:r}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{children:r}),(0,p.jsx)("p",{children:a})]})]},t)}))})}function v(){var e=(0,c.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),s=n[0],i=n[1];return(0,a.useEffect)((function(){(0,u.Hx)(e).then((function(e){return i(e)})).catch((function(e){return console.error(e)}))}),[e]),(0,p.jsx)("ul",{children:s?s.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("h2",{children:e.author}),(0,p.jsx)("p",{children:e.content})]},e.id)})):"there are no reviews"})}function x(){var e,t,n=(0,c.UO)().movieId,l=(0,a.useState)(""),d=(0,r.Z)(l,2),h=d[0],x=d[1],j=(0,a.useState)(null),m=(0,r.Z)(j,2),w=m[0],g=m[1],_=(0,a.useState)(null),Z=(0,r.Z)(_,2),k=Z[0],b=Z[1],y=(0,c.TH)(),S=(0,a.useRef)(null!==(e=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,a.useEffect)((function(){n&&(g(!0),(0,u.Y5)(n).then((function(e){console.log("data",e),x(e)})).catch(b).finally(g(!1)))}),[n]),(0,p.jsxs)("div",{children:[(0,p.jsx)(s.rU,{to:S.current,children:"Go back"}),w&&(0,p.jsx)(i.Z,{}),!k&&(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{width:300,alt:h.title?h.title:h.name,title:h.title?h.title:h.name,src:h.poster_path?"https://image.tmdb.org/t/p/w300".concat(h.poster_path):"No poster found"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:h.title?h.title:h.name}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*h.vote_average),"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:h.overview}),(0,p.jsx)("h2",{children:"Genres"})]}),(0,p.jsx)("div",{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(s.OL,{to:"cast",children:"Cast"}),(0,p.jsx)(s.OL,{to:"reviews",children:"Reviews"})]})}),(0,p.jsx)("div",{className:o.cast,children:(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(i.Z,{}),children:(0,p.jsxs)(c.Z5,{children:[(0,p.jsx)(c.AW,{path:"cast",element:(0,p.jsx)(f,{})}),(0,p.jsx)(c.AW,{path:"reviews",element:(0,p.jsx)(v,{})})]})})})]})]})}},390:function(e,t,n){n.d(t,{Hx:function(){return p},Y5:function(){return d},rQ:function(){return l},uV:function(){return h}});var r=n(861),a=n(757),c=n.n(a),s=n(294),i="7e63573e5f6a11223e01d9dfd6333e93",u="https://api.themoviedb.org/3/",o={method:"GET",headers:{accept:"application/json"}},l=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"trending/all/day?api_key=").concat(i),o);case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"),o);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&include_adult=false&language=en-US"),o);case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&include_adult=false&language=en-US"),o);case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=862.4ab283f4.chunk.js.map