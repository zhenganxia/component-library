(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{494:function(t,e,a){"use strict";a.r(e);var n={methods:{gotoPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n={pageSize:e,pageIndex:a};axios.get(n).then((function(a){if(a.success){var n=a.data,o=n.total,s=n.pageNum;Object.assign(t.page,{total:o,pageIndex:s,pageSize:e})}}))},rest:function(){this.listQuery={}}}},o=a(33),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SlListView",{ref:"listView",attrs:{paginationParams:t.page},on:{gotoPage:t.gotoPage,reset:t.reset},scopedSlots:t._u([{key:"search",fn:function(){return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery,expression:"listQuery"}],domProps:{value:t.listQuery},on:{input:function(e){e.target.composing||(t.listQuery=e.target.value)}}})]},proxy:!0},{key:"operationBtn",fn:function(){return[a("div",{staticClass:"batch"},[a("el-button",{attrs:{type:"danger"}},[t._v("批量拒绝")])],1)]},proxy:!0}])},[t._v(" "),t._v(" "),a("SlTableInfo",{attrs:{columns:t.columns,tableData:t.tableData}},[[a("el-button",[t._v("通过")])]],2)],1)}),[],!1,null,null,null);e.default=s.exports}}]);