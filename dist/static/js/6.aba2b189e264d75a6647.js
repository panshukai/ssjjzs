webpackJsonp([6],{"7GWR":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("KOga"),o={data:function(){return{items:[]}},mounted:function(){console.log(this.$route.params.id),this.getContentStyle(),this.getNovelList()},methods:{getNovelList:function(){var t=this;Object(i.a)("GET","novelList/"+this.$route.params.id).then(function(e){t.items=e.data.data}).catch(function(t){console.log(t)})},getContentStyle:function(){document.querySelector(".novelList").style.minHeight=window.innerHeight-document.querySelector(".footer").getBoundingClientRect().height-document.querySelector("h1").getBoundingClientRect().height-document.querySelector(".zixun_tab").getBoundingClientRect().height+"px"},gotoAddress:function(t,e){this.$router.push(t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"novelList"},[t._m(0),t._v(" "),t._l(t.items,function(e){return n("dd",[n("a",{on:{click:function(n){return t.gotoAddress({path:"/novel/"+t.$route.params.id+"/"+e.id+"/detail"})}}},[t._v("第"+t._s(e.id)+"章 "+t._s(e.title))]),t._v(" "),n("p",{class:{active:1==e.isRead}},[t._v(t._s(e.isRead?"已看":"未读"))])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("h1",[this._v("目录")]),this._v(" "),e("p",[this._v("共"),e("span",[this._v("300")]),this._v("章")])])}]};var r=n("Mz/3")(o,s,!1,function(t){n("Ey9k")},"data-v-8601e330",null);e.default=r.exports},Ey9k:function(t,e){}});
//# sourceMappingURL=6.aba2b189e264d75a6647.js.map