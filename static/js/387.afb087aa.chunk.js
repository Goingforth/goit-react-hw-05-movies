"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,c,u=e(439),i=e(689),o=e(791),a=e(833),s=e(799),h=e(168),f=e(686),l=f.Z.div(r||(r=(0,h.Z)(["\n  margin-top: 12px;\n  margin-left: 36px;\n"]))),d=f.Z.ul(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  margin-bottom: 20px;\n"]))),p=e(184),m=function(){var n=(0,i.UO)().movieId,t=(0,o.useState)([]),e=(0,u.Z)(t,2),r=e[0],c=e[1];return(0,o.useEffect)((function(){(0,a.Z)((0,s.S5)(n)).then((function(n){return n.results})).then((function(n){return n.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).then((function(n){return c(n)}))}),[n]),(0,p.jsx)(l,{children:r.length>0?(0,p.jsx)("div",{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,p.jsxs)(d,{children:[(0,p.jsx)("li",{children:(0,p.jsxs)("h4",{children:["Author: ",e]})}),(0,p.jsx)("li",{children:r})]},t)}))}):(0,p.jsx)("div",{children:(0,p.jsx)("h2",{children:"We don't have reviews for this movie."})})})}},833:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(861),c=e(687),u=e.n(c),i=e(243);function o(n){return a.apply(this,arguments)}function a(){return(a=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.request(t).then((function(n){return n.data}));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},799:function(n,t,e){e.d(t,{S5:function(){return h},_J:function(){return i},ij:function(){return a},oW:function(){return s},uD:function(){return o}});var r=e(413),c="https://api.themoviedb.org/3",u={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc0YjdkOTk5OTdiNWYzYzQ0MGY3YTgxMzBmZGE1NCIsInN1YiI6IjY0NmYwODk2MTdjNDQzMDBhOWVkYWQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtyRL4EwN0GuyLC3DZJht20wxfHDS1peFCSQYFLhH6Q"}},i=(0,r.Z)((0,r.Z)({},u),{},{url:"".concat(c,"/trending/movie/day")}),o=function(n){return(0,r.Z)((0,r.Z)({},u),{},{url:"".concat(c,"/movie/").concat(n)})},a=function(n){return(0,r.Z)((0,r.Z)({},u),{},{url:"".concat(c,"/search/movie"),params:{query:"".concat(n),page:"1",language:"en-US"}})},s=function(n){return(0,r.Z)((0,r.Z)({},u),{},{url:"".concat(c,"/movie/").concat(n,"/credits")})},h=function(n){return(0,r.Z)((0,r.Z)({},u),{},{url:"".concat(c,"/movie/").concat(n,"/reviews"),params:{language:"en-US",page:"1"}})}}}]);
//# sourceMappingURL=387.afb087aa.chunk.js.map