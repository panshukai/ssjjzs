webpackJsonp([6],{"6Vs7":function(t,e){},gORT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),s=n.n(o),i=n("x6Ga"),a={name:"HelloWorld",data:function(){return{msg:"欢迎来到生死狙击小助手开源项目",time:4}},mounted:function(){this.showFootFuc(),this.timeLoad(),t&&clearTimeout(t);var t=setTimeout(this.gotoIndex,4e3)},methods:s()({},Object(i.b)(["SHOWFOOT"]),{gotoIndex:function(){this.$router.push("/zixun"),this.SHOWFOOT(!0)},showFootFuc:function(){this.SHOWFOOT(!1)},timeLoad:function(){var t=this;e&&clearInterval(e);var e=setInterval(function(){t.time--},1e3)}})},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg)+" ("),n("span",[t._v(t._s(t.time))]),t._v("s)"),n("br"),n("router-link",{staticClass:"go",attrs:{to:"/zixun"}},[t._v("跳过=>")])],1)])},staticRenderFns:[]};var u=n("VU/8")(a,r,!1,function(t){n("6Vs7")},"data-v-e5df0c4e",null);e.default=u.exports}});
//# sourceMappingURL=6.13b2da4c1752b074e7cd.js.map