(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4c9"],{"0113":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"end",gutter:16}},[a("Col",{attrs:{span:"3"}},[a("Input",{attrs:{icon:"search",placeholder:"请输入用户电话..."},model:{value:t.searchForm.phone,callback:function(e){t.$set(t.searchForm,"phone",e)},expression:"searchForm.phone"}})],1),a("Col",{attrs:{span:"2"}},[a("Select",{attrs:{placeholder:"状态"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.status,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{span:"2"}},[a("Select",{attrs:{placeholder:"消息类型"},model:{value:t.searchForm.type,callback:function(e){t.$set(t.searchForm,"type",e)},expression:"searchForm.type"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.type,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(e){t.getTableDataExcute(t.feeds.current_page)}}},[t._v("Search")])],1),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(e){t.addBtn()}}},[t._v("发消息")])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e(),a("Table",{attrs:{border:"",columns:t.columns,data:t.feeds.data},on:{"on-sort-change":t.onSortChange}}),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{staticClass:"paging",attrs:{total:t.feeds.total,current:t.feeds.current_page,"page-size":t.feeds.per_page,"show-elevator":"","show-total":"","show-sizer":""},on:{"on-change":t.handleOnPageChange,"on-page-size-change":t.onPageSizeChange}})],1)])],1),!0===t.addModal.show?a("add-component",{attrs:{"message-type":t.tableStatus.type},on:{"on-add-modal-success":function(e){t.getTableDataExcute(t.feeds.current_page)},"on-add-modal-hide":t.addModalHide}}):t._e(),!0===t.showInfoModal.show?a("show-info",{attrs:{info:t.showInfoModal.info},on:{"show-modal-close":t.showModalClose}}):t._e()],1)},s=[],n=(a("7f7f"),a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("发消息")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"标题：",prop:"title"}},[a("Input",{attrs:{placeholder:"请输消息标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"消息内容：",prop:"content"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入消息内容"},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),a("FormItem",{attrs:{label:"消息类型："}},[a("Select",{attrs:{placeholder:"消息类型"},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},t._l(t.messageType,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])}))],1),a("FormItem",{attrs:{label:"是否在首页提示："}},[a("Select",{attrs:{placeholder:"是否在首页提示"},model:{value:t.formData.is_alert_at_home,callback:function(e){t.$set(t.formData,"is_alert_at_home",e)},expression:"formData.is_alert_at_home"}},[a("Option",{attrs:{value:"T"}},[t._v("是")]),a("Option",{attrs:{value:"F"}},[t._v("否")])],1)],1),a("FormItem",{attrs:{label:"消息接收人："}},[a("Select",{attrs:{multiple:"",filterable:"",remote:"","remote-method":t.getUserListExcute,loading:t.searchLoading,placeholder:"请输入手机号搜索"},model:{value:t.formData.users,callback:function(e){t.$set(t.formData,"users",e)},expression:"formData.users"}},t._l(t.userList,function(e,o){return a("Option",{attrs:{value:e.id}},[t._v(t._s(e.name)+"("+t._s(e.phone)+")")])})),a("input-helper",{attrs:{text:"不选将发送给所有人","style-class":"input-helper-error"}})],1),a("FormItem",{attrs:{label:"跳转 url："}},[a("Input",{attrs:{placeholder:"跳转 url"},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.publishApiMessageExcute}},[t._v("发送 ")])],1)],1)],1)}),r=[],l=a("66df"),i=function(t,e,a){return l["a"].request({url:"/api/admin/api_messages",params:{page:t,per_page:e,search_data:JSON.stringify(a)},method:"get"})},c=function(t){return l["a"].request({url:"/api/admin/api_messages",data:t,method:"post"})},u=function(t){return l["a"].request({url:"/api/admin/api_messages/user_search/"+t,method:"get"})},d=a("9f69"),p={components:{InputHelper:d["a"]},props:{messageType:{default:[]}},data:function(){return{modalShow:!0,userList:[],searchLoading:!1,saveLoading:!1,formData:{title:"",type:"",url:"",users:"",content:"",is_alert_at_home:"F"},rules:{title:[{required:!0,message:"请填写消息标题",trigger:"blur"}],content:[{required:!0,message:"请填写消息内容",trigger:"blur"}],type:[{required:!0,message:"请选择消息类型",trigger:"blur"}]}}},methods:{getUserListExcute:function(t){var e=this,a=this;if(t.length<3)return!1;a.searchLoading=!0,u(t).then(function(t){e.userList=t.data,a.searchLoading=!1})},publishApiMessageExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,c(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")},uploadChange:function(t,e){}}},f=p,h=a("66b7"),m=Object(h["a"])(f,n,r,!1,null,null,null);m.options.__file="publish-message.vue";var g=m.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Drawer",{attrs:{closable:!1,width:"640",title:"消息详情"},on:{"on-close":t.closed},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("p",{staticClass:"drawer-title"},[t._v("基本资料：")]),a("div",{staticClass:"drawer-profile"},[a("Row",[a("Col",{attrs:{span:"12"}},[t._v(" 消息标题： "+t._s(t.info.title)+" ")]),t.info.user?a("Col",{attrs:{span:"12"}},[t._v(" 接收人："+t._s(t.info.user.name)+" ("+t._s(t.info.user.phone)+") ")]):t._e()],1),a("Divider"),a("p",{staticClass:"drawer-title"},[t._v("消息内容：")]),a("div",{domProps:{innerHTML:t._s(t.info.content)}})],1)])],1)},v=[],b={props:{info:{type:Object,default:""}},data:function(){return{show:!0,agreement:""}},methods:{closed:function(){this.show=!1,this.$emit("show-modal-close")}}},w=b,y=Object(h["a"])(w,_,v,!1,null,null,null);y.options.__file="show-info.vue";var x=y.exports,D=a("2934"),S={components:{AddComponent:g,ShowInfo:x},data:function(){var t=this;return{searchForm:{order_by:"id,desc"},showInfoModal:{show:!1,info:""},tableStatus:{type:"",status:""},tableLoading:!1,feeds:{data:[],total:0,current_page:1,per_page:10},addModal:{show:!1},editModal:{show:!1,id:0},columns:[{title:"ID",key:"id",sortable:"customer",width:100},{title:"标题",key:"title"},{title:"类型",render:function(e,a){return e("div",t.tableStatus.type[a.row.type])}},{title:"用户",render:function(t,e){return t("div",e.row.user.name+" ("+e.row.user.phone+")")}},{title:"状态",width:150,render:function(t,e){var a=e.row,o="R"===a.status?"green":"red",s="R"===a.status?"已读":"未读";return t("div",[t("Tag",{props:{color:o}},s)])}},{title:"创建时间",key:"created_at",sortable:"customer"},{title:"操作",render:function(e,a){return e("div",[e("Button",{style:{margin:"0 5px"},props:{type:"success",size:"small"},on:{click:function(){t.showInfoModal.show=!0,t.showInfoModal.info=a.row}}},"详细")])}}]}},mounted:function(){var t=this;t.getTableStatusExcute("api_messages"),t.getTableDataExcute(t.feeds.current_page)},methods:{getTableStatusExcute:function(t){var e=this;Object(D["b"])(t).then(function(t){e.tableStatus.status=t.data.status,e.tableStatus.type=t.data.type})},handleOnPageChange:function(t){this.getTableDataExcute(t)},onPageSizeChange:function(t){this.feeds.per_page=t,this.getTableDataExcute(this.feeds.current_page)},getTableDataExcute:function(t){var e=this;e.tableLoading=!0,e.feeds.current_page=t,i(t,e.feeds.per_page,e.searchForm).then(function(t){e.feeds.data=t.data,e.feeds.total=t.meta.total,e.tableLoading=!1},function(t){e.tableLoading=!1})},onSortChange:function(t){var e=t.column.key+","+t.order;this.searchForm.order_by=e,this.getTableDataExcute(this.feeds.current_page)},deleteTagExcute:function(t,e){var a=this;deleteTag(t).then(function(t){a.feeds.data.splice(e,1),a.$Notice.success({title:t.message})})},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},showModalClose:function(){this.showInfoModal.show=!1}}},k=S,C=Object(h["a"])(k,o,s,!1,null,null,null);C.options.__file="list.vue";e["default"]=C.exports},2934:function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return r});var o=a("66df"),s=function(t){return o["a"].request({url:"/api/common_get_table_status/"+t,method:"get"})},n=function(t,e,a){return o["a"].request({url:"/api/common_switch_enable",data:{id:t,table:e,value:a},method:"post"})},r=function(t){return o["a"].request({url:"/api/admin/attachments/"+t+"/force_destroy",method:"delete"})}},"9f69":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("Icon",{attrs:{type:t.type}}),a("span",{class:t.styleClass},[t._v(t._s(t.text))])],1)},s=[],n={props:{styleClass:{type:String,default:"color-light-gray"},type:{type:String,default:"md-information"},text:{type:String,default:"温馨提示..."}}},r=n,l=a("66b7"),i=Object(l["a"])(r,o,s,!1,null,null,null);i.options.__file="input-helper.vue";e["a"]=i.exports}}]);