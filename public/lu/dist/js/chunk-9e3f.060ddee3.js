(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e3f"],{"0a35":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xs:3,lg:4}},[a("Select",{attrs:{placeholder:"请选择使用状态"},model:{value:t.searchForm.use_status,callback:function(e){t.$set(t.searchForm,"use_status",e)},expression:"searchForm.use_status"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.use_status,function(e,n){return a("Option",{key:n,attrs:{value:n}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{xs:3,lg:4}},[a("Select",{attrs:{placeholder:"请选择状态"},model:{value:t.searchForm.enable,callback:function(e){t.$set(t.searchForm,"enable",e)},expression:"searchForm.enable"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.enable,function(e,n){return a("Option",{key:n,attrs:{value:n}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{xs:3,lg:4}},[a("Select",{attrs:{placeholder:"请选择附件类型"},model:{value:t.searchForm.type,callback:function(e){t.$set(t.searchForm,"type",e)},expression:"searchForm.type"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.type,function(e,n){return a("Option",{key:n,attrs:{value:n}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{xs:3,lg:4}},[a("Select",{attrs:{placeholder:"请选择存储位置"},model:{value:t.searchForm.storage_position,callback:function(e){t.$set(t.searchForm,"storage_position",e)},expression:"searchForm.storage_position"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.storage_position,function(e,n){return a("Option",{key:n,attrs:{value:n}},[t._v(t._s(e)+" ")])})],2)],1),a("Col",{attrs:{xs:1,lg:2}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(e){t.getTableDataExcute(t.feeds.current_page)}}},[t._v("Search")])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e(),a("Table",{attrs:{border:"",columns:t.columns,data:t.feeds.data},on:{"on-sort-change":t.onSortChange}}),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{staticClass:"paging",attrs:{total:t.feeds.total,current:t.feeds.current_page,"page-size":t.feeds.per_page,"show-elevator":"","show-total":"","show-sizer":""},on:{"on-change":t.handleOnPageChange,"on-page-size-change":t.onPageSizeChange}})],1)])],1),!0===t.showInfoModal.show?a("show-info",{attrs:{info:t.showInfoModal.info,scrollable:!0},on:{"show-modal-close":t.showModalClose}}):t._e()],1)},s=[],o=(a("7f7f"),a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Drawer",{attrs:{closable:!0,title:"用户信息：","class-name":"show-info-drawer"},on:{"on-close":t.closed},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("p",{staticClass:"drawer-title"},[t._v("基本资料:")]),a("div",{staticClass:"drawer-profile"},[a("Row",[a("Col",{attrs:{span:"12"}},[t._v(" 绝对路径： "+t._s(t.info.storage_path)+"/"+t._s(t.info.storage_name)+" ")])],1)],1),a("Divider"),a("p",{staticClass:"drawer-title"},[t._v("附件信息：")]),a("div",{staticClass:"drawer-profile"},[t.attachmentIsImage?a("img",{attrs:{src:t.getAttachmentUrl,alt:"tp"}}):a("div",[a("span",{staticClass:"expand-key expand-title"},[t._v("访问 url:  ")]),a("a",{attrs:{href:t.getAttachmentUrl}},[t._v("下载附件")])])])],1)],1)}),r=[],i={props:{info:{type:Object,default:""}},data:function(){return{show:!0,agreement:"",spinLoading:!0}},created:function(){},methods:{closed:function(){this.show=!1,this.$emit("show-modal-close")}},computed:{getAttachmentUrl:function(){return this.info.domain+"/"+this.info.link_path+"/"+this.info.storage_name},attachmentIsImage:function(){return-1!==this.info.mime_type.indexOf("image")}}},l=i,c=a("66b7"),u=Object(c["a"])(l,o,r,!1,null,null,null);u.options.__file="show-info.vue";var d=u.exports,h=a("2934"),p=a("66df"),f=function(t,e,a){return p["a"].request({url:"/api/admin/attachments",params:{page:t,per_page:e,search_data:JSON.stringify(a)},method:"get"})},m=function(t){return p["a"].request({url:"/api/admin/attachments/"+t,method:"delete"})},g={components:{ShowInfo:d},data:function(){var t=this;return{showInfoModal:{show:!1,info:""},searchForm:{order_by:"id,desc"},tableLoading:!1,tableStatus:{enable:[],use_status:[],type:[],storage_position:[]},feeds:{data:[],total:0,current_page:1,per_page:10},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:50},{title:"附件名称",key:"original_name",minWidth:100},{title:"上传者",minWidth:200,render:function(t,e){return t("div",e.row.user.name)}},{title:"使用状态",minWidth:150,render:function(t,e){var a=e.row,n="T"===a.use_status?"green":"default",s="T"===a.use_status?"使用中":"未使用";return t("div",[t("Tag",{props:{color:n}},s)])}},{title:"附件类型",minWidth:100,render:function(e,a){return e("div",t.tableStatus.type[a.row.type])}},{title:"MIME 类型",key:"mime_type",minWidth:100},{title:"存储位置",key:"storage_position",minWidth:100},{title:"大小/kb",key:"size",sortable:"customer",minWidth:100},{title:"启用状态",key:"enable",minWidth:100,render:function(e,a){return e("i-switch",{props:{slot:"open",type:"primary",value:"T"===a.row.enable},on:{"on-change":function(e){t.switchEnableExcute(a.index)}}})}},{title:"创建时间",key:"created_at",sortable:"customer",minWidth:150},{title:"操作",minWidth:150,render:function(e,a){var n=t;return e("div",[e("Button",{style:{margin:"0 5px"},props:{type:"primary",size:"small"},on:{click:function(){t.showInfoModal.show=!0,t.showInfoModal.info=a.row}}},"详细"),e("Poptip",{props:{confirm:!0,title:"您确定要删除「"+a.row.original_name+"」？",transfer:!0},on:{"on-ok":function(){"T"===a.row.enable?n.$Notice.warning({title:"出错了",desc:"启用状态的附件无法删除"}):n.deleteAttachmentExcute(a.row.id,a.index)}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",size:"small",placement:"top"}},"删除")])])}}]}},mounted:function(){var t=this;t.getTableStatusExcute("attachments"),t.getTableDataExcute(t.feeds.current_page)},methods:{handleOnPageChange:function(t){this.getTableDataExcute(t)},onPageSizeChange:function(t){this.feeds.per_page=t,this.getTableDataExcute(this.feeds.current_page)},getTableStatusExcute:function(t){var e=this;Object(h["b"])(t).then(function(t){var a=t.data;e.tableStatus.enable=a.enable,e.tableStatus.use_status=a.use_status,e.tableStatus.type=a.type,e.tableStatus.storage_position=a.storage_position})},getTableDataExcute:function(t){var e=this;e.tableLoading=!0,e.feeds.current_page=t,f(t,e.feeds.per_page,e.searchForm).then(function(t){e.feeds.data=t.data,e.feeds.total=t.meta.total,e.tableLoading=!1},function(t){e.tableLoading=!1})},onSortChange:function(t){var e=t.column.key+","+t.order;this.searchForm.order_by=e,this.getTableDataExcute(this.feeds.current_page)},switchEnableExcute:function(t){var e=this,a="T";"T"===e.feeds.data[t].enable&&(a="F"),Object(h["c"])(e.feeds.data[t].id,"attachments",a).then(function(n){e.feeds.data[t].enable=a,e.$Notice.success({title:n.message})})},deleteAttachmentExcute:function(t,e){var a=this;m(t).then(function(t){a.feeds.data.splice(e,1),a.$Notice.success({title:t.message})})},showModalClose:function(){this.showInfoModal.show=!1}}},_=g,b=Object(c["a"])(_,n,s,!1,null,null,null);b.options.__file="list.vue";e["default"]=b.exports},2934:function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return r});var n=a("66df"),s=function(t){return n["a"].request({url:"/api/common_get_table_status/"+t,method:"get"})},o=function(t,e,a){return n["a"].request({url:"/api/common_switch_enable",data:{id:t,table:e,value:a},method:"post"})},r=function(t){return n["a"].request({url:"/api/admin/attachments/"+t+"/force_destroy",method:"delete"})}}}]);