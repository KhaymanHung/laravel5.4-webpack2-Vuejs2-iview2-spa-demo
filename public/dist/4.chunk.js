webpackJsonp([4],{

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(54)
	__vue_template__ = __webpack_require__(57)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/qt-dev/learn/php/laravel5.4-iview1.0-blog/build-src/components/async-table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(55);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <i-table :columns="columns"
	//              :data="tableData"
	//              :size="size"
	//              :width="width"
	//              :height="height"
	//              :stripe="stripe"
	//              :border="border"
	//              :show-header="showHeader"
	//              :highlight-row="highlightRow"
	//              :row-class-name="rowClassName"
	//              :content="content"
	//              :no-data-text="noDataText"
	//              :no-filtered-data-text="noFilteredDataText"
	//              @on-sort-change="sort"
	//              v-ref:table></i-table>
	//     <div class="layout-page">
	//         <Page :total="pageTotal" :current="page" :page-size="pageSize" @on-change="changePage" @on-page-size-change="changePageSize" size="small" show-elevator show-sizer show-total></Page>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            tableData: [],
	            pageTotal: 0,
	            page: 1,
	            pageSize: 10,
	            sortBy: {}
	        };
	    },
	
	    props: {
	        dataUrl: {
	            type: String
	        },
	        columns: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        size: {},
	        width: {
	            type: [Number, String]
	        },
	        height: {
	            type: [Number, String]
	        },
	        stripe: {
	            type: Boolean,
	            default: false
	        },
	        border: {
	            type: Boolean,
	            default: false
	        },
	        showHeader: {
	            type: Boolean,
	            default: true
	        },
	        highlightRow: {
	            type: Boolean,
	            default: false
	        },
	        rowClassName: {
	            type: Function
	        },
	        content: {
	            type: Object
	        },
	        noDataText: {
	            type: String
	        },
	        filter: {
	            type: Object
	        },
	        noFilteredDataText: {
	            type: String
	        }
	    },
	    created: function created() {
	        this.fetchData();
	    },
	
	    methods: {
	        fetchData: function fetchData(page, pageSize, sortBy, filter) {
	            var _this = this;
	
	            page = page || this.page;
	            pageSize = pageSize || this.pageSize;
	            var sortByStr = (0, _stringify2.default)(sortBy || this.sortBy);
	            var filterStr = (0, _stringify2.default)(filter || this.filter);
	            var url = this.dataUrl + '?page=' + page + '&pageSize=' + pageSize + '&sort=' + sortByStr + '&filter=' + filterStr;
	            url = encodeURI(url);
	            this.$http.get(url).then(function (response) {
	                var data = response.body.data;
	                _this.pageTotal = data.total;
	                _this.tableData = data.data;
	            });
	        },
	        sort: function sort(column) {
	            if (column.order === 'normal') {
	                this.sortBy = {};
	            } else {
	                var field = column.key;
	                this.sortBy[field] = column.order;
	            }
	            this.fetchData();
	        },
	        changePage: function changePage(page) {
	            this.page = page;
	            this.fetchData();
	        },
	        changePageSize: function changePageSize(pageSize) {
	            this.pageSize = pageSize;
	            this.fetchData();
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(19);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },

/***/ 57:
/***/ function(module, exports) {

	module.exports = "\n    <i-table :columns=\"columns\"\n             :data=\"tableData\"\n             :size=\"size\"\n             :width=\"width\"\n             :height=\"height\"\n             :stripe=\"stripe\"\n             :border=\"border\"\n             :show-header=\"showHeader\"\n             :highlight-row=\"highlightRow\"\n             :row-class-name=\"rowClassName\"\n             :content=\"content\"\n             :no-data-text=\"noDataText\"\n             :no-filtered-data-text=\"noFilteredDataText\"\n             @on-sort-change=\"sort\"\n             v-ref:table></i-table>\n    <div class=\"layout-page\">\n        <Page :total=\"pageTotal\" :current=\"page\" :page-size=\"pageSize\" @on-change=\"changePage\" @on-page-size-change=\"changePageSize\" size=\"small\" show-elevator show-sizer show-total></Page>\n    </div>\n";

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(64)
	__vue_script__ = __webpack_require__(65)
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/qt-dev/learn/php/laravel5.4-iview1.0-blog/build-src/views/admin/user/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 64:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _asyncTable = __webpack_require__(53);
	
	var _asyncTable2 = _interopRequireDefault(_asyncTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: { asyncTable: _asyncTable2.default },
	    data: function data() {
	        return {
	            columns: [{ "title": "编号", "key": "id", "width": 80, "sortable": true, fixed: 'left' }, { "title": "用户名", "key": "username", "width": 120 }, { "title": "昵称", "key": "nickname", 'width': 150 }, { "title": "邮箱地址", "key": "email", 'width': 180 }, { "title": "牛x的话", "key": "powerful_words", width: 250 }, { "title": "注册时间", "key": "created_at", "width": 150, "sortable": true }, { "title": "最近更新时间", "key": "updated_at", "width": 150, "sortable": true }, { "title": "状态", "key": "status", "width": 100, "sortable": true,
	                render: function render(row, column, index) {
	                    if (row.status == 1) {
	                        return '禁用';
	                    } else if (row.status == 2) {
	                        return '正常';
	                    }
	                }
	            }, { "title": "操作", "key": "operations", "width": 120, fixed: 'right',
	                "render": function render(row, column, index) {
	                    var btns = '';
	                    if (row.status == 2) {
	                        btns += '<i-button type="warning" size="small" @click="this.$parent.forbiddenItem(' + row.id + ')">' + '<span v-if="!loading">禁用</span><span v-else></span>' + '</i-button>';
	                    } else if (row.status == 1) {
	                        btns += ' <i-button type="primary" size="small" @click="this.$parent.recoverItem(' + row.id + ')">' + '<span v-if="!loading">恢复</span><span v-else></span>' + '</i-button> ';
	                    }
	                    btns += ' <i-button type="error" size="small" @click="this.$parent.delItem(' + row.id + ')">' + '<span v-if="!loading">删除</span><span v-else></span>' + '</i-button>';
	                    return btns;
	                }
	            }],
	            formSearch: {
	                id: '',
	                username: '',
	                nickname: '',
	                email: '',
	                status: '',
	                created_at: '',
	                updated_at: ''
	            }
	        };
	    },
	    created: function created() {},
	
	    methods: {
	        refreshData: function refreshData() {
	            this.$refs.table.fetchData();
	        },
	        handleSearch: function handleSearch(name) {
	            this.refreshData();
	        },
	        handleReset: function handleReset(name) {
	            this.$refs[name].resetFields();
	            this.refreshData();
	        },
	        forbiddenItem: function forbiddenItem(id) {
	            var _this = this;
	
	            this.$Modal.confirm({
	                title: '确认操作',
	                content: '你确认要禁用该用户？',
	                onOk: function onOk() {
	                    _this.loading = true;
	                    _this.$http.post('/api/admin/user/' + id + '/forbidden').then(function (response) {
	                        _this.$Message.success('操作成功');
	                        _this.refreshData();
	                        _this.loading = false;
	                    }, function (response) {
	                        _this.loading = false;
	                    });
	                }
	            });
	        },
	        recoverItem: function recoverItem(id) {
	            var _this2 = this;
	
	            this.$Modal.confirm({
	                title: '确认操作',
	                content: '你确认要恢复该用户？',
	                onOk: function onOk() {
	                    _this2.loading = true;
	                    _this2.$http.post('/api/admin/user/' + id + '/recover').then(function (response) {
	                        _this2.$Message.success('操作成功');
	                        _this2.refreshData();
	                        _this2.loading = false;
	                    }, function (response) {
	                        _this2.loading = false;
	                    });
	                }
	            });
	        },
	        delItem: function delItem(id) {
	            var _this3 = this;
	
	            this.$Modal.confirm({
	                title: '确认操作',
	                content: '你确认要删除该用户？',
	                onOk: function onOk() {
	                    _this3.loading = true;
	                    _this3.$http.delete('/api/admin/user/' + id).then(function (response) {
	                        _this3.$Message.success('操作成功');
	                        _this3.refreshData();
	                        _this3.loading = false;
	                    }, function (response) {
	                        _this3.loading = false;
	                    });
	                }
	            });
	        }
	    }
	};
	// </script>
	//
	/* generated by vue-loader */
	// <style scoped>
	// </style>
	// <template>
	//     <div class="layout-breadcrumb">
	//         <Breadcrumb>
	//             <Breadcrumb-item v-link="{ path: '/' }">首页</Breadcrumb-item>
	//             <Breadcrumb-item v-link="{ name: 'user-index' }">用户管理</Breadcrumb-item>
	//         </Breadcrumb>
	//     </div>
	//     <!--<div class="layout-btn-group">-->
	//     <!--<i-button type="primary" v-link="{name: 'user-create'}"> 添加 </i-button>-->
	//     <!--</div>-->
	//     <div class="layout-content">
	//         <div class="layout-table">
	//             <async-table :columns="columns" data-url="/api/admin/user" :filter="formSearch" @on-sort-change="sort" size="small" v-ref:table></async-table>
	//         </div>
	//         <div class="layout-search">
	//             <Card :bordered="false" dis-hover>
	//                 <p slot="title"> 搜索条件 </p>
	//                 <i-form v-ref:form-search :model="formSearch" label-position="top">
	//                     <Form-item label="编号" prop="id">
	//                         <i-input :value.sync="formSearch.id"></i-input>
	//                     </Form-item>
	//                     <Form-item label="用户名" prop="username">
	//                         <i-input :value.sync="formSearch.username"></i-input>
	//                     </Form-item>
	//                     <Form-item label="昵称" prop="nickname">
	//                         <i-input :value.sync="formSearch.nickname"></i-input>
	//                     </Form-item>
	//                     <Form-item label="邮箱地址" prop="email">
	//                         <i-input :value.sync="formSearch.email"></i-input>
	//                     </Form-item>
	//                     <Form-item label="状态" prop="status">
	//                         <i-select :model.sync="formSearch.status" clearable>
	//                             <i-option value="1">禁用</i-option>
	//                             <i-option value="2">正常</i-option>
	//                         </i-select>
	//                     </Form-item>
	//                     <Form-item label="创建时间" prop="created_at">
	//                         <Date-picker type="datetimerange" placement="left-start" :value.sync="formSearch.created_at" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间"></Date-picker>
	//                     </Form-item>
	//                     <Form-item label="更新时间" prop="updated_at">
	//                         <Date-picker type="datetimerange" placement="left-start" :value.sync="formSearch.updated_at" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间"></Date-picker>
	//                     </Form-item>
	//                     <Form-item style="text-align: center">
	//                         <i-button type="primary" @click="handleSearch('formSearch')"> 搜索 </i-button>
	//                         <i-button type="ghost" @click="handleReset('formSearch')" style="margin-left: 8px"> 重置 </i-button>
	//                     </Form-item>
	//                 </i-form>
	//             </Card>
	//         </div>
	//     </div>
	// </template>
	// <script>

/***/ },

/***/ 66:
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"layout-breadcrumb\" _v-8d601c4a=\"\">\n        <breadcrumb _v-8d601c4a=\"\">\n            <breadcrumb-item v-link=\"{ path: '/' }\" _v-8d601c4a=\"\">首页</breadcrumb-item>\n            <breadcrumb-item v-link=\"{ name: 'user-index' }\" _v-8d601c4a=\"\">用户管理</breadcrumb-item>\n        </breadcrumb>\n    </div>\n    <!--<div class=\"layout-btn-group\">-->\n    <!--<i-button type=\"primary\" v-link=\"{name: 'user-create'}\"> 添加 </i-button>-->\n    <!--</div>-->\n    <div class=\"layout-content\" _v-8d601c4a=\"\">\n        <div class=\"layout-table\" _v-8d601c4a=\"\">\n            <async-table :columns=\"columns\" data-url=\"/api/admin/user\" :filter=\"formSearch\" @on-sort-change=\"sort\" size=\"small\" v-ref:table=\"\" _v-8d601c4a=\"\"></async-table>\n        </div>\n        <div class=\"layout-search\" _v-8d601c4a=\"\">\n            <card :bordered=\"false\" dis-hover=\"\" _v-8d601c4a=\"\">\n                <p slot=\"title\" _v-8d601c4a=\"\"> 搜索条件 </p>\n                <i-form v-ref:form-search=\"\" :model=\"formSearch\" label-position=\"top\" _v-8d601c4a=\"\">\n                    <form-item label=\"编号\" prop=\"id\" _v-8d601c4a=\"\">\n                        <i-input :value.sync=\"formSearch.id\" _v-8d601c4a=\"\"></i-input>\n                    </form-item>\n                    <form-item label=\"用户名\" prop=\"username\" _v-8d601c4a=\"\">\n                        <i-input :value.sync=\"formSearch.username\" _v-8d601c4a=\"\"></i-input>\n                    </form-item>\n                    <form-item label=\"昵称\" prop=\"nickname\" _v-8d601c4a=\"\">\n                        <i-input :value.sync=\"formSearch.nickname\" _v-8d601c4a=\"\"></i-input>\n                    </form-item>\n                    <form-item label=\"邮箱地址\" prop=\"email\" _v-8d601c4a=\"\">\n                        <i-input :value.sync=\"formSearch.email\" _v-8d601c4a=\"\"></i-input>\n                    </form-item>\n                    <form-item label=\"状态\" prop=\"status\" _v-8d601c4a=\"\">\n                        <i-select :model.sync=\"formSearch.status\" clearable=\"\" _v-8d601c4a=\"\">\n                            <i-option value=\"1\" _v-8d601c4a=\"\">禁用</i-option>\n                            <i-option value=\"2\" _v-8d601c4a=\"\">正常</i-option>\n                        </i-select>\n                    </form-item>\n                    <form-item label=\"创建时间\" prop=\"created_at\" _v-8d601c4a=\"\">\n                        <date-picker type=\"datetimerange\" placement=\"left-start\" :value.sync=\"formSearch.created_at\" format=\"yyyy-MM-dd HH:mm\" placeholder=\"选择日期和时间\" _v-8d601c4a=\"\"></date-picker>\n                    </form-item>\n                    <form-item label=\"更新时间\" prop=\"updated_at\" _v-8d601c4a=\"\">\n                        <date-picker type=\"datetimerange\" placement=\"left-start\" :value.sync=\"formSearch.updated_at\" format=\"yyyy-MM-dd HH:mm\" placeholder=\"选择日期和时间\" _v-8d601c4a=\"\"></date-picker>\n                    </form-item>\n                    <form-item style=\"text-align: center\" _v-8d601c4a=\"\">\n                        <i-button type=\"primary\" @click=\"handleSearch('formSearch')\" _v-8d601c4a=\"\"> 搜索 </i-button>\n                        <i-button type=\"ghost\" @click=\"handleReset('formSearch')\" style=\"margin-left: 8px\" _v-8d601c4a=\"\"> 重置 </i-button>\n                    </form-item>\n                </i-form>\n            </card>\n        </div>\n    </div>\n";

/***/ }

});
//# sourceMappingURL=4.chunk.js.map