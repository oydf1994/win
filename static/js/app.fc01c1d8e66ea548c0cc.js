webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},EJb4:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(t){n("EJb4")},null,null).exports,r=n("/ocq"),s={data:function(){return{list:[],flag:!1,initial:0}},methods:{Judge:function(t,e){t.win=!1;var n=t.number-0+1>=10?"0":"00";if(e){var i={number:n+(t.number-0+1),lottery:this.win(),chip:this.initial,profit:this.initial*(t.number-0+1),win:!0,text:""};this.list.push(i),t.text="赢"}else{var a={number:n+(t.number-0+1),lottery:this.win(),chip:2*t.chip-0+(this.initial-0),win:!0,text:"",profit:this.initial*(t.number-0+1)};this.list.push(a),t.text="输"}},win:function(){var t=Math.floor(10*Math.random()+1),e=Math.floor(10*Math.random()+1)%2;return t<10&&(t="0"+t),t+(e=e?"单":"双")},open:function(){var t=this;this.$prompt("请输入基数",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(e){var n=e.value;if(null==n)return t.$message({type:"info",message:"请重新输入"}),t.open(),!1;t.flag=!0,t.initial=n;var i={number:"001",lottery:t.win(),chip:n,profit:n,win:!0,text:""};t.list.push(i),t.$message({type:"success",message:"你的基数是: "+n})}).catch(function(){t.$message({type:"info",message:"取消输入"}),t.open()})}},mounted:function(){this.open()}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"win"}},[i("table",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"table table-striped"},[t._m(0),t._v(" "),i("tbody",t._l(t.list,function(e){return i("tr",{key:e.number},[i("td",[t._v(t._s(e.number))]),t._v(" "),i("td",[i("img",{staticClass:"car",attrs:{src:n("pucQ"),alt:""}}),t._v(t._s(e.lottery))]),t._v(" "),i("td",{staticClass:"win"},[t._v("￥"+t._s(e.chip))]),t._v(" "),i("td",[t._v(t._s(e.profit))]),t._v(" "),i("td",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.win,expression:"item.win"}]},[i("el-button",{attrs:{type:"primary"},on:{click:function(n){t.Judge(e,!0)}}},[t._v("赢")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:function(n){t.Judge(e,!1)}}},[t._v("输")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.win,expression:"!item.win"}],class:"赢"==e.text?"wins":"errs"},[t._v("\n           "+t._s(e.text)+"\n          ")])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("序号")]),t._v(" "),n("th",[t._v("号码")]),t._v(" "),n("th",[t._v("押注")]),t._v(" "),n("th",[t._v("盈利")]),t._v(" "),n("th",[t._v("胜利")])])])}]};var c=n("VU/8")(s,u,!1,function(t){n("wfWK")},"data-v-63ec8372",null).exports;i.default.use(r.a);var v=new r.a({routes:[{path:"/",name:"WIN",component:c}]}),A=n("zL8q"),f=n.n(A),E=(n("tvR6"),n("e6fC"));n("Jmt5"),n("9M+g");i.default.use(E.a),i.default.config.productionTip=!1,i.default.use(f.a),new i.default({el:"#app",router:v,components:{App:o},template:"<App/>"})},pucQ:function(t,e){t.exports="data:image/png;base64,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"},tvR6:function(t,e){},wfWK:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fc01c1d8e66ea548c0cc.js.map