(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87c2"],{"1e5d":function(t,e,a){},2934:function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return l});var o=a("66df"),i=function(t){return o["a"].request({url:"/api/common_get_table_status/"+t,method:"get"})},n=function(t,e,a){return o["a"].request({url:"/api/common_switch_enable",data:{id:t,table:e,value:a},method:"post"})},l=function(t){return o["a"].request({url:"/api/admin/attachments/"+t+"/force_destroy",method:"delete"})}},"6a8f":function(t,e,a){"use strict";var o=a("1e5d"),i=a.n(o);i.a},"9f69":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("Icon",{attrs:{type:t.type}}),a("span",{class:t.styleClass},[t._v(t._s(t.text))])],1)},i=[],n={props:{styleClass:{type:String,default:"color-light-gray"},type:{type:String,default:"md-information"},text:{type:String,default:"温馨提示..."}}},l=n,s=a("66b7"),r=Object(s["a"])(l,o,i,!1,null,null,null);r.options.__file="input-helper.vue";e["a"]=r.exports},ad6a:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xs:8,lg:3}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(e){t.addBtn()}}},[t._v("Add")])],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:6,lg:4}},[a("Input",{attrs:{icon:"searchForm",placeholder:"请输入配置标识..."},model:{value:t.searchForm.flag,callback:function(e){t.$set(t.searchForm,"flag",e)},expression:"searchForm.flag"}})],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:0,lg:4}},[a("Input",{attrs:{icon:"searchForm",placeholder:"请输入配置标题..."},model:{value:t.searchForm.title,callback:function(e){t.$set(t.searchForm,"title",e)},expression:"searchForm.title"}})],1),a("Col",{attrs:{xs:3,lg:4}},[a("Select",{attrs:{placeholder:"请选择状态"},model:{value:t.searchForm.enable,callback:function(e){t.$set(t.searchForm,"enable",e)},expression:"searchForm.enable"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.enable,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{xs:3,lg:4}},[a("Select",{attrs:{placeholder:"请选择配置分组"},model:{value:t.searchForm.group,callback:function(e){t.$set(t.searchForm,"group",e)},expression:"searchForm.group"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.system_config_group,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e.title))])})],2)],1),a("Col",{attrs:{xs:1,lg:2}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(e){t.getTableDataExcute()}}},[t._v("Search")])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e(),a("Table",{attrs:{border:"",columns:t.columns,data:t.dataList},on:{"on-sort-change":t.onSortChange}})],1),t.addModal.show?a("add-component",{attrs:{"config-type":t.tableStatus.system_config_type,"config-group":t.tableStatus.system_config_group},on:{"on-add-modal-success":function(e){t.getTableDataExcute()},"on-add-modal-hide":t.addModalHide}}):t._e(),t.editModal.show?a("edit-component",{attrs:{"modal-id":t.editModal.id,"config-type":t.tableStatus.system_config_type,"config-group":t.tableStatus.system_config_group},on:{"on-edit-modal-success":function(e){t.getTableDataExcute()},"on-edit-modal-hide":t.editModalHide}}):t._e()],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("添加配置项")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"配置标识：",prop:"flag"}},[a("Input",{attrs:{placeholder:"请输入配置标识"},model:{value:t.formData.flag,callback:function(e){t.$set(t.formData,"flag",e)},expression:"formData.flag"}}),a("input-helper",{attrs:{text:"英文字母与下划线组成"}})],1),a("FormItem",{attrs:{label:"配置标题：",prop:"title"}},[a("Input",{attrs:{placeholder:"请输入配置标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"分组：",prop:"system_config_group"}},[a("Select",{attrs:{filterable:"",placeholder:"请选择配置分组"},model:{value:t.formData.system_config_group,callback:function(e){t.$set(t.formData,"system_config_group",e)},expression:"formData.system_config_group"}},t._l(t.configGroup,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e.title)+" ")])}))],1),a("FormItem",{attrs:{label:"配置值："}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入配置值"},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("FormItem",{attrs:{label:"是否启用："}},[a("RadioGroup",{model:{value:t.formData.enable,callback:function(e){t.$set(t.formData,"enable",e)},expression:"formData.enable"}},[a("Radio",{attrs:{label:"F"}},[t._v("禁用")]),a("Radio",{attrs:{label:"T"}},[t._v("启用")])],1)],1),a("FormItem",{attrs:{label:"描述："}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addSystemConfigExcute}},[t._v("保存 ")])],1)],1)],1)},l=[],s=a("66df"),r=function(t){return s["a"].request({url:"/api/admin/system_configs",params:{search_data:JSON.stringify(t)},method:"get"})},c=function(){return s["a"].request({url:"/api/admin/system_configs/get_group",method:"get"})},u=function(t){return s["a"].request({url:"/api/admin/system_configs/"+t,method:"delete"})},d=function(t){return s["a"].request({url:"/api/admin/system_configs",data:t,method:"post"})},m=function(t,e){return s["a"].request({url:"/api/admin/system_configs/"+t,data:e,method:"patch"})},f=function(t){return s["a"].request({url:"api/admin/system_configs/"+t,method:"get"})},p=a("c13c"),h=a("9f69"),g={components:{Upload:p["a"],InputHelper:h["a"]},props:{configType:{type:Object,value:[]},configGroup:{type:Object,value:[]}},data:function(){return{modalShow:!0,saveLoading:!1,formData:{flag:"",title:"",system_config_group:"",value:"",description:"",enable:"T"},rules:{flag:[{required:!0,message:"请填写配置标识",trigger:"blur"}],title:[{required:!0,message:"请填写配置标题",trigger:"blur"}],system_config_group:[{required:!0,message:"请选择配置分组",trigger:"blur"}]}}},methods:{addSystemConfigExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,d(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")},uploadChange:function(t,e){}}},_=g,v=a("66b7"),b=Object(v["a"])(_,n,l,!1,null,null,null);b.options.__file="add-config-item.vue";var y=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("修改配置项")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"配置标识：",prop:"flag"}},[a("Input",{attrs:{placeholder:"请输入配置标识"},model:{value:t.formData.flag,callback:function(e){t.$set(t.formData,"flag",e)},expression:"formData.flag"}}),a("input-helper",{attrs:{text:"英文字母与下划线组成"}})],1),a("FormItem",{attrs:{label:"配置标题：",prop:"title"}},[a("Input",{attrs:{placeholder:"请输入配置标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"分组：",prop:"system_config_group"}},[a("Select",{attrs:{filterable:"",placeholder:"请选择配置分组"},model:{value:t.formData.system_config_group,callback:function(e){t.$set(t.formData,"system_config_group",e)},expression:"formData.system_config_group"}},t._l(t.configGroup,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e.title)+" ")])}))],1),a("FormItem",{attrs:{label:"配置值："}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入配置值"},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("FormItem",{attrs:{label:"是否启用："}},[a("RadioGroup",{model:{value:t.formData.enable,callback:function(e){t.$set(t.formData,"enable",e)},expression:"formData.enable"}},[a("Radio",{attrs:{label:"F"}},[t._v("禁用")]),a("Radio",{attrs:{label:"T"}},[t._v("启用")])],1)],1),a("FormItem",{attrs:{label:"描述："}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.editSystemConfigExcute}},[t._v("保存 ")])],1),!0===t.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e()],1)],1)},D=[],w=(a("c5f6"),{components:{Upload:p["a"],InputHelper:h["a"]},props:{configType:{type:Object,value:[]},configGroup:{type:Object,value:[]},modalId:{type:Number,default:0}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{flag:"",title:"",system_config_group:"",value:"",description:"",enable:"T"},formdataFinished:!1,rules:{flag:[{required:!0,message:"请填写配置标识",trigger:"blur"}],title:[{required:!0,message:"请填写配置标题",trigger:"blur"}],system_config_group:[{required:!0,message:"请选择配置分组",trigger:"blur"}]}}},mounted:function(){this.getSystemConfigInfoByIdExcute()},methods:{getSystemConfigInfoByIdExcute:function(){var t=this;f(t.modalId).then(function(e){var a=e.data;t.formData={flag:a.flag,title:a.title,system_config_group:a.system_config_group,value:a.value,enable:a.enable,description:a.description},t.formdataFinished=!0,t.spinLoading=!1})},editSystemConfigExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,m(t.modalId,t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")},uploadChange:function(t,e){}}}),k=w,S=Object(v["a"])(k,x,D,!1,null,null,null);S.options.__file="edit-config-item.vue";var F=S.exports,$=a("2934"),C={components:{AddComponent:y,EditComponent:F},data:function(){var t=this;return{searchForm:{enable:"",falg:"",title:"",group:"",order_by:"id,desc"},tableLoading:!1,dataList:[],tableStatus:{system_config_group:[],system_config_type:[],enable:[]},addModal:{show:!1},editModal:{show:!1,id:0},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:50},{title:"标题",key:"title",minWidth:100},{title:"标识",key:"description",minWidth:100},{title:"配置值",key:"value",minWidth:100},{title:"启用状态",key:"enable",minWidth:100,render:function(e,a){return e("i-switch",{props:{slot:"open",type:"primary",value:"T"===a.row.enable},on:{"on-change":function(e){t.switchEnableExcute(a.index)}}})}},{title:"描述",key:"flag",minWidth:100},{title:"创建时间",key:"created_at",sortable:"customer",minWidth:100},{title:"更新时间",key:"created_at",minWidth:100},{title:"操作",minWidth:150,render:function(e,a){var o=t;return e("div",[e("Button",{props:{type:"success",size:"small"},on:{click:function(){t.editModal.show=!0,t.editModal.id=a.row.id}}},"Edit"),e("Poptip",{props:{confirm:!0,title:"您确定要删除「"+a.row.title+"」？",transfer:!0},on:{"on-ok":function(){o.deleteSystemConfigExcute(a.row.id,a.index)}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",size:"small",placement:"top"}},"删除")])])}}]}},created:function(){var t=this;t.getGroupExcute(),t.getTableDataExcute()},methods:{getGroupExcute:function(t){var e=this;c(e.searchForm).then(function(t){var a=t.data;e.tableStatus.system_config_type=a.type,e.tableStatus.system_config_group=a.group,e.tableStatus.enable=a.enable},function(t){})},getTableDataExcute:function(){var t=this;t.tableLoading=!0,r(t.searchForm).then(function(e){var a=e.data;t.dataList=a,t.tableLoading=!1},function(e){t.tableLoading=!1})},onSortChange:function(t){var e=t.column.key+","+t.order;this.searchForm.order_by=e,this.getTableDataExcute()},deleteSystemConfigExcute:function(t,e){var a=this;u(t).then(function(t){a.dataList.splice(e,1),a.$Notice.success({title:t.message})})},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1},switchEnableExcute:function(t){var e=this,a="T";"T"===e.dataList[t].enable&&(a="F"),Object($["c"])(e.dataList[t].id,"system_configs",a).then(function(o){e.dataList[t].enable=a,e.$Notice.success({title:o.message})})}}},L=C,I=Object(v["a"])(L,o,i,!1,null,null,null);I.options.__file="config-item-list.vue";e["default"]=I.exports},c13c:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.uploadList,function(e){return a("div",{staticClass:"demo-upload-list"},["finished"===e.status?[a("img",{attrs:{src:e.url}}),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(a){t.handleRemove(e)}}})],1)]:[e.showProgress?a("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()]],2)}),a("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":t.uploadConfig.default_list,"on-success":t.handleSuccess,headers:t.uploadConfig.headers,format:t.uploadConfig.format,"max-size":t.uploadConfig.max_size,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:t.uploadConfig.multiple,name:t.uploadConfig.file_name,type:"drag",action:t.uploadConfig.upload_url}},[a("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[a("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),t.formatFileList.length>0?a("Collapse",[a("Panel",{attrs:{name:"1"}},[t._v("\n      预览\n      "),a("p",{attrs:{slot:"content"},slot:"content"},t._l(t.formatFileList,function(t,e){return a("img",{staticStyle:{width:"100%"},attrs:{src:t.url,alt:t.name}})}))])],1):t._e()],2)},i=[],n=(a("7f7f"),a("ac6a"),a("2934")),l={props:{isDelete:{type:Boolean,default:!0},uploadConfig:{type:Object,default:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadTmp,file_name:"file",multiple:!1,file_num:0,default_list:[{name:"",attachment_id:0,url:""},{name:"",attachment_id:0,url:""}]}}},data:function(){return{imgName:"",visible:!1,uploadList:[],formatFileList:[]}},methods:{handleRemove:function(t){var e=this,a=this.$refs.upload.fileList;t.attachment_id>0&&!0===this.isDelete&&Object(n["a"])(t.attachment_id).then(function(t){e.$Notice.success({title:"操作成功",desc:"文件删除成功"})}),this.$refs.upload.fileList.splice(a.indexOf(t),1);var o=this.fomatFile();this.$emit("input",o),this.$emit("on-upload-change",this.uploadList,o)},handleSuccess:function(t,e){e.url=t.data.url,e.name=t.data.original_name,e.attachment_id=t.data.attachment_id;var a=this.fomatFile();this.$emit("input",a),this.$emit("on-upload-change",this.uploadList,a)},fomatFile:function(){var t=[];return this.uploadList.forEach(function(e,a,o){t.push({attachment_id:e.attachment_id,url:e.url})}),this.formatFileList=t,1===this.uploadConfig.file_num&&(t=t[0]),t},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 "+this.uploadConfig.max_size+"kb"})},handleBeforeUpload:function(){var t=this.uploadList.length<this.uploadConfig.file_num;return t||this.$Notice.warning({title:"数量限制",desc:"最多只能上传"+this.uploadConfig.file_num+"个文件"}),t}},mounted:function(){this.uploadList=this.$refs.upload.fileList;var t=this.fomatFile();"undefined"!=t&&(this.$emit("input",t),this.$emit("on-upload-change",this.uploadList,t))}},s=l,r=(a("6a8f"),a("66b7")),c=Object(r["a"])(s,o,i,!1,null,null,null);c.options.__file="upload.vue";e["a"]=c.exports}}]);