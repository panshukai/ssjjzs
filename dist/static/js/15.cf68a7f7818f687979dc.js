webpackJsonp([15],{"+Zxc":function(t,a){},aQts:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("KOga"),n={data:function(){return{items:[]}},mounted:function(){var t=this;Object(i.a)("GET","battleTeam").then(function(a){console.log(a.data.data),t.items=a.data.data})},methods:{gotoDetail:function(t){this.$router.push({path:"/saishi/battle_team/"+t})}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"teamList"},[e("ul",t._l(t.items,function(a){return e("li",[e("div",{staticClass:"img"},[e("img",{attrs:{src:a.image,alt:""}})]),t._v(" "),e("div",{staticClass:"text"},[e("h3",[t._v(t._s(a.name))]),t._v(" "),e("p",[t._v(t._s(a.sentence))])]),t._v(" "),e("div",{staticClass:"info"},[e("h6",[t._v("胜率:"+t._s(a.percent)+"%")]),t._v(" "),e("a",{staticClass:"iconfont icon-detail",on:{click:function(e){t.gotoDetail(a.id)}}})])])}),0)])},staticRenderFns:[]};var c=e("F6Qa")(n,s,!1,function(t){e("+Zxc")},"data-v-703dc85e",null);a.default=c.exports}});
//# sourceMappingURL=15.cf68a7f7818f687979dc.js.map