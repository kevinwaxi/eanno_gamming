"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_stations_stations_console_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      deleteModal: false,
      isDeleting: false,
      isCreating: false,
      editMode: false,
      editStatus: false,
      newCover: false,
      processing: false,
      deletingItem: null,
      form: {},
      consoles: {},
      conditions: [],
      token: '',
      total: 20,
      search: '',
      selected: '',
      checked: [],
      selectPage: false,
      selectAll: false,
      sort_direction: 'desc',
      sort_field: 'created_at',
      url: '',
      type: [{
        name: 'Play Station 5',
        value: 'ps5'
      }, {
        name: 'Play Station 4',
        value: 'ps4'
      }, {
        name: 'Play Station 3',
        value: 'ps3'
      }, {
        name: 'Play Station 2',
        value: 'ps2'
      }, {
        name: 'X-Box 360',
        value: 'xbox360'
      }],
      gen: [{
        name: 'First Generation',
        value: 'First'
      }, {
        name: 'Second Generation',
        value: 'Second'
      }, {
        name: 'Third Generation',
        value: 'Third'
      }],
      storage: [{
        name: 'Solid State Disk',
        value: 'SSD'
      }, {
        name: 'Hard Disk',
        value: 'HDD'
      }]
    };
  },
  watch: {
    total: function total(value) {
      this.getConsoles();
    },
    search: function search(value) {
      this.getConsoles();
    },
    selected: function selected(value) {
      this.getConsoles();
    },
    selectPage: function selectPage(value) {
      var _this = this;

      this.checked = [];

      if (value) {
        this.consoles.data.forEach(function (console) {
          _this.checked.push(console.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function checked(value) {
      this.url = '/api/v1/consoles/export/' + this.checked;
    }
  },
  mounted: function mounted() {
    this.getConsoles();
    this.getCondition();
  },
  methods: {
    closeModal: function closeModal() {
      $('#modal-default').modal('hide');
      this.restForm();
    },
    restForm: function restForm() {
      this.form.serial_number = '';
      this.form.type = '';
      this.form.gen = '';
      this.form.storage = '';
      this.form.storage_size = '';
      this.form.condition_id = '';
    },
    createModal: function createModal() {
      $('#modal-default').modal('show');
      this.editStatus = false, this.editMode = false;
    },
    editModal: function editModal(console) {
      var obj = {
        id: console.id,
        serial_number: console.serial_number,
        type: console.type,
        gen: console.generation,
        storage: console.storage,
        storage_size: console.storage_size,
        condition_id: console.condition.id
      };
      $('#modal-default').modal('show');
      this.editMode = true;
      this.editStatus = false;
      this.form = obj;
    },
    changeStatusModal: function changeStatusModal(console) {
      var obj = {
        id: console.id,
        serial_number: console.serial_number,
        type: console.type,
        gen: console.generation,
        storage: console.storage,
        storage_size: console.storage_size,
        condition_id: console.condition.id
      };
      $('#modal-default').modal('show');
      this.editMode = false, this.editStatus = true, this.form = obj;
    },
    showDeleteModal: function showDeleteModal(console) {
      this.form = console;
      this.deleteModal = true;
    },
    change_sort: function change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc';
      } else {
        this.sort_field = field;
      }

      this.getConsoles();
    },
    isChecked: function isChecked(console_id) {
      return this.checked.includes(console_id);
    },
    selectAllRecords: function selectAllRecords() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.callApi('get', '/api/v1/consoles/all/');

              case 2:
                res = _context.sent;

                if (res.status === 200) {
                  _this2.checked = res.data;
                  _this2.selectAll = true;
                  console.log(_this2.selectAll);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCondition: function getCondition() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.callApi('get', '/api/v1/conditions');

              case 2:
                res = _context2.sent;

                if (res.status === 200) {
                  _this3.conditions = res.data;
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getConsoles: function getConsoles() {
      var _arguments = arguments,
          _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var page, res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context3.next = 3;
                return _this4.callApi('get', "/api/v1/consoles?page=".concat(page, "\n        &total=").concat(_this4.total, "\n        &q=").concat(_this4.search, "\n        &select=").concat(_this4.selected, "\n        &sort_direction=").concat(_this4.sort_direction, "\n        &sort_field=").concat(_this4.sort_field));

              case 3:
                res = _context3.sent;

                if (res.status === 200) {
                  _this4.consoles = res.data;
                } else {
                  if (res.status === 401 || res.status === 422) {
                    for (i in res.data.errors) {
                      _this4.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this4.swr();
                  }
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    createConsole: function createConsole() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.processing = true;
                _context4.next = 3;
                return _this5.callApi('post', '/api/v1/consoles', _this5.form);

              case 3:
                res = _context4.sent;

                if (res.status === 200) {
                  _this5.s('Console created successfully');

                  _this5.closeModal();

                  _this5.getConsoles();

                  _this5.processing = false;
                } else {
                  if (res.status === 422) {
                    for (i in res.data.errors) {
                      _this5.e(res.data.errors[i][0]);
                    }

                    _this5.processing = false;
                  } else {
                    _this5.swr();

                    _this5.processing = false;
                  }
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    updateConsole: function updateConsole(console_id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.processing = true;
                _context5.next = 3;
                return _this6.callApi('put', "/api/v1/consoles/".concat(console_id), _this6.form);

              case 3:
                res = _context5.sent;

                if (res.status == 200) {
                  _this6.closeModal();

                  _this6.getConsoles();

                  _this6.s('Successfully updated console');

                  _this6.processing = false;
                } else {
                  if (res.status == 422) {
                    for (i in res.data.errors) {
                      _this6.e(res.data.errors[i][0]);
                    }

                    _this6.processing = false;
                  } else {
                    _this6.swr();

                    _this6.processing = false;
                  }
                }

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    deleteConsole: function deleteConsole(console_id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.isDeleting = true;
                _context6.next = 3;
                return _this7.callApi('delete', "/api/v1/consoles/".concat(console_id));

              case 3:
                res = _context6.sent;

                if (res.status == 204) {
                  _this7.w('Console deleted');

                  _this7.checked = _this7.checked.filter(function (id) {
                    return id != console_id;
                  });
                  _this7.isDeleting = false;
                  _this7.deleteModal = false;

                  _this7.getConsoles();
                } else {
                  if (res.status !== 422) {
                    for (i in res.data.errors) {
                      _this7.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this7.swr();
                  }
                }

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    deleteImage: function deleteImage() {
      var _arguments2 = arguments,
          _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var editMode, image, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                editMode = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : false;

                if (editMode) {
                  // for editing
                  _this8.newCover = true;
                  image = _this8.form.cover_photo;
                  _this8.form.cover_photo = '';

                  _this8.$refs.uploads.clearFiles();
                } else {
                  image = _this8.form.cover_photo;
                  _this8.form.cover_photo = '';

                  _this8.$refs.uploads.clearFiles();
                }

                _context7.next = 4;
                return _this8.callApi('post', '/api/v1/consoles/deleteCover', {
                  image_name: image
                });

              case 4:
                res = _context7.sent;

                if (res.status !== 200) {
                  _this8.form.cover_photo = image;

                  _this8.swr();
                }

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    handleSuccess: function handleSuccess(res, file) {
      if (this.isEditingItem) {
        return this.form.cover_photo = "/uploads/games/console/".concat(res);
      }

      res = "/uploads/games/console/".concat(res);
      this.form.cover_photo = res;
    },
    handleError: function handleError(res) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: "".concat(file.errors.file.length ? file.errors.file[0] : 'Something went wrong')
      });
    },
    handleFormatError: function handleFormatError(file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      });
    },
    handleMaxSize: function handleMaxSize(file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.demo-upload-list {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.demo-upload-list img {\n  width: 100%;\n  height: 100%;\n}\n.demo-upload-list-cover {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover {\n  display: block;\n}\n.demo-upload-list-cover i {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./console.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/settings/stations/stations/console.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/settings/stations/stations/console.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _console_vue_vue_type_template_id_2c14ca14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console.vue?vue&type=template&id=2c14ca14& */ "./resources/js/pages/settings/stations/stations/console.vue?vue&type=template&id=2c14ca14&");
/* harmony import */ var _console_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./console.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/stations/stations/console.vue?vue&type=script&lang=js&");
/* harmony import */ var _console_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _console_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _console_vue_vue_type_template_id_2c14ca14___WEBPACK_IMPORTED_MODULE_0__.render,
  _console_vue_vue_type_template_id_2c14ca14___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/stations/stations/console.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/stations/stations/console.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/settings/stations/stations/console.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./console.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./console.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/pages/settings/stations/stations/console.vue?vue&type=template&id=2c14ca14&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/settings/stations/stations/console.vue?vue&type=template&id=2c14ca14& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_template_id_2c14ca14___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_template_id_2c14ca14___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_console_vue_vue_type_template_id_2c14ca14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./console.vue?vue&type=template&id=2c14ca14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=template&id=2c14ca14&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=template&id=2c14ca14&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/stations/console.vue?vue&type=template&id=2c14ca14& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card mb-4" }, [
          _c("div", { staticClass: "card-header pb-0" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-4" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.createModal()
                      },
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "badge bg-gradient-info ms-auto float-end",
                      },
                      [
                        _vm._v(
                          "\n                  Create Console\n                "
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-3 flex" }, [
                _c("label", { attrs: { for: "search" } }, [_vm._v(" Search ")]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: _vm.search,
                        expression: "search",
                        modifiers: { lazy: true },
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "search",
                      type: "text",
                      placeholder: "Console",
                    },
                    domProps: { value: _vm.search },
                    on: {
                      change: function ($event) {
                        _vm.search = $event.target.value
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c("label", { attrs: { for: "select" } }, [
                  _vm._v("Select by:"),
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selected,
                        expression: "selected",
                      },
                    ],
                    staticClass: "form-select fmxw-200 d-none d-md-inline",
                    attrs: { "aria-label": "Fillter by role" },
                    on: {
                      change: function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.selected = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                    },
                  },
                  [
                    _c(
                      "option",
                      { attrs: { selected: "selected", value: "" } },
                      [_vm._v("Show All")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.conditions, function (condition, i) {
                      return _c(
                        "option",
                        { key: i, domProps: { value: condition.id } },
                        [
                          _vm._v(
                            "\n                  " +
                              _vm._s(condition.name) +
                              "\n                "
                          ),
                        ]
                      )
                    }),
                  ],
                  2
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-2" }, [
                _c("label", { attrs: { for: "select" } }, [_vm._v("Show:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.total,
                        expression: "total",
                      },
                    ],
                    staticClass: "form-select fmxw-200 d-none d-md-inline",
                    attrs: { "aria-label": "show" },
                    on: {
                      change: function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.total = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "5" } }, [_vm._v("5")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
                    _vm._v(" "),
                    _vm.consoles.data
                      ? _c(
                          "option",
                          { domProps: { value: _vm.consoles.meta.total } },
                          [
                            _vm._v(
                              "\n                  All " +
                                _vm._s(_vm.consoles.meta.total) +
                                "\n                "
                            ),
                          ]
                        )
                      : _vm._e(),
                  ]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm.consoles.data
            ? _c("div", { staticClass: "card-body px-0 pt-0 pb-2" }, [
                _vm.consoles.data.length <= 0
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "alert alert-dark alert-dismissible fade show",
                        attrs: { role: "alert" },
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _vm._m(3),
                      ]
                    )
                  : _c("div", { staticClass: "table-responsive p-0" }, [
                      _c(
                        "table",
                        { staticClass: "table align-items-center mb-0" },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.consoles.data, function (console, i) {
                              return _c("tr", { key: i }, [
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "d-flex px-3 py-1" },
                                    [
                                      _vm._m(5, true),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex flex-column justify-content-center",
                                        },
                                        [
                                          _c(
                                            "h6",
                                            { staticClass: "mb-0 text-sm" },
                                            [
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    console.serial_number
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._m(6, true),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "text-sm font-weight-bold mb-0",
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(console.storage_size) +
                                          "\n                    "
                                      ),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "align-middle text-center text-sm",
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-sm font-weight-bold mb-0",
                                      },
                                      [
                                        _c(
                                          "Tag",
                                          {
                                            attrs: {
                                              color: console.condition.color,
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(console.condition.name) +
                                                "\n                      "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "align-middle text-end" },
                                  [
                                    _c("div", { staticClass: "btn-group" }, [
                                      _vm._m(7, true),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "dropdown-menu py-0" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "dropdown-item text-default rounded-top",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function ($event) {
                                                  $event.preventDefault()
                                                  return _vm.changeStatusModal(
                                                    console
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("span", {
                                                staticClass:
                                                  "fas fa-chart-line me-2",
                                                attrs: {
                                                  "aria-hidden": "true",
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          Change Status\n                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: { href: "javacript:;" },
                                              on: {
                                                click: function ($event) {
                                                  $event.preventDefault()
                                                  return _vm.editModal(console)
                                                },
                                              },
                                            },
                                            [
                                              _c("span", {
                                                staticClass: "fas fa-edit me-2",
                                              }),
                                              _vm._v(
                                                "\n                          Edit Console\n                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._m(8, true),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ])
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-footer pt-0 p-3 d-flex align-items-center" },
            [
              _c("div", { staticClass: "w-60" }, [
                _vm.consoles.data
                  ? _c("p", { staticClass: "text-sm" }, [
                      _vm._v("\n              Showing\n              "),
                      _c("b", [_vm._v(_vm._s(_vm.consoles.meta.from))]),
                      _vm._v(" to\n              "),
                      _c("b", [_vm._v(_vm._s(_vm.consoles.meta.to))]),
                      _vm._v(" out of\n              "),
                      _c("b", [_vm._v(_vm._s(_vm.consoles.meta.total))]),
                      _vm._v(" entries\n            "),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-40 text-end" },
                [
                  _c("pagination", {
                    staticClass: "pagination mb-0 pagination-sm",
                    attrs: { data: _vm.consoles },
                    on: { "pagination-change-page": _vm.getConsoles },
                  }),
                ],
                1
              ),
            ]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modal-default",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modal-default",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                !_vm.editMode
                  ? _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Create Console"),
                    ])
                  : _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Edit Console"),
                    ]),
                _vm._v(" "),
                _vm._m(9),
              ]),
              _vm._v(" "),
              !_vm.editStatus
                ? _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("FormulateInput", {
                          attrs: {
                            type: "text",
                            required: "",
                            label: "Serial Number",
                            validation: "required",
                          },
                          model: {
                            value: _vm.form.serial_number,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "serial_number", $$v)
                            },
                            expression: "form.serial_number",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-6" },
                        [
                          _c("Label", [_vm._v("Console Type")]),
                          _vm._v(" "),
                          _c(
                            "Select",
                            {
                              model: {
                                value: _vm.form.type,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "type", $$v)
                                },
                                expression: "form.type",
                              },
                            },
                            _vm._l(_vm.type, function (item) {
                              return _c(
                                "Option",
                                {
                                  key: item.value,
                                  attrs: {
                                    value: item.value,
                                    clearable: "",
                                    filterable: "",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                  " + _vm._s(item.name)
                                  ),
                                ]
                              )
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-6" },
                        [
                          _c("Label", [_vm._v("Console Generation")]),
                          _vm._v(" "),
                          _c(
                            "Select",
                            {
                              model: {
                                value: _vm.form.gen,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "gen", $$v)
                                },
                                expression: "form.gen",
                              },
                            },
                            _vm._l(_vm.gen, function (item) {
                              return _c(
                                "Option",
                                {
                                  key: item.value,
                                  attrs: {
                                    value: item.value,
                                    clearable: "",
                                    filterable: "",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                  " + _vm._s(item.name)
                                  ),
                                ]
                              )
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-3" }, [
                      _c(
                        "div",
                        { staticClass: "col-12" },
                        [
                          _c("Label", [_vm._v("Storage Type")]),
                          _vm._v(" "),
                          _c(
                            "Select",
                            {
                              model: {
                                value: _vm.form.storage,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "storage", $$v)
                                },
                                expression: "form.storage",
                              },
                            },
                            _vm._l(_vm.storage, function (item) {
                              return _c(
                                "Option",
                                {
                                  key: item.value,
                                  attrs: {
                                    value: item.value,
                                    clearable: "",
                                    filterable: "",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                  " + _vm._s(item.name)
                                  ),
                                ]
                              )
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row mt-3" },
                      [
                        _c("FormulateInput", {
                          attrs: {
                            type: "number",
                            required: "",
                            validation: "required",
                            label: "Storage Size in GB",
                          },
                          model: {
                            value: _vm.form.storage_size,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "storage_size", $$v)
                            },
                            expression: "form.storage_size",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row mt-3" },
                      [
                        _c("Label", [_vm._v("Status / Condition")]),
                        _vm._v(" "),
                        _c(
                          "Select",
                          {
                            model: {
                              value: _vm.form.condition_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "condition_id", $$v)
                              },
                              expression: "form.condition_id",
                            },
                          },
                          _vm._l(_vm.conditions, function (condition, i) {
                            return _c(
                              "Option",
                              {
                                key: i,
                                attrs: {
                                  value: condition.id,
                                  clearable: "",
                                  filterable: "",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(condition.name) +
                                    "\n              "
                                ),
                              ]
                            )
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.editStatus
                ? _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      { staticClass: "row mt-3" },
                      [
                        _c("Label", [_vm._v("Status / Condition")]),
                        _vm._v(" "),
                        _c(
                          "Select",
                          {
                            model: {
                              value: _vm.form.condition_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "condition_id", $$v)
                              },
                              expression: "form.condition_id",
                            },
                          },
                          _vm._l(_vm.conditions, function (condition, i) {
                            return _c(
                              "Option",
                              {
                                key: i,
                                attrs: {
                                  value: condition.id,
                                  clearable: "",
                                  filterable: "",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(condition.name) +
                                    "\n              "
                                ),
                              ]
                            )
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.editStatus
                ? _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-gradient-secondary",
                        attrs: { type: "button", "data-bs-dismiss": "modal" },
                        on: { click: _vm.closeModal },
                      },
                      [_vm._v("\n            Close\n          ")]
                    ),
                    _vm._v(" "),
                    _vm.editMode
                      ? _c(
                          "button",
                          {
                            staticClass: "btn bg-gradient-primary",
                            attrs: { type: "button", disabled: _vm.processing },
                            on: {
                              click: function ($event) {
                                return _vm.updateConsole(_vm.form.id)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm.processing ? "Saving ..." : "Save Changes"
                                ) +
                                "\n          "
                            ),
                          ]
                        )
                      : _c(
                          "button",
                          {
                            staticClass: "btn bg-gradient-primary",
                            attrs: { type: "button", disabled: _vm.processing },
                            on: {
                              click: function ($event) {
                                return _vm.createConsole()
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm.processing ? "Creating ..." : "Create"
                                ) +
                                "\n          "
                            ),
                          ]
                        ),
                  ])
                : _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-gradient-secondary",
                        attrs: { type: "button", "data-bs-dismiss": "modal" },
                        on: { click: _vm.closeModal },
                      },
                      [_vm._v("\n            Close\n          ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-gradient-primary",
                        attrs: { type: "button", disabled: _vm.processing },
                        on: {
                          click: function ($event) {
                            return _vm.updateConsole(_vm.form.id)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.processing ? "Saving ..." : "Save Changes"
                            ) +
                            "\n          "
                        ),
                      ]
                    ),
                  ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h5", { staticClass: "mb-2 col-8" }, [_vm._v("Game Consoles")]),
      _vm._v(" "),
      _c("p", { staticClass: "mb-0" }, [
        _vm._v(
          "\n                Create game consoles and assign then to stations\n              "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "alert-icon" }, [
      _c("i", { staticClass: "ni ni-like-2" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "alert-text text-white" }, [
      _c("strong", [_vm._v("Not Found!")]),
      _vm._v("\n              There are no consoles avilable!\n            "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "alert",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "\n                      text-uppercase text-secondary text-xxs\n                      font-weight-bolder\n                      opacity-7\n                    ",
          },
          [_vm._v("\n                    Serial Number\n                  ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "\n                      text-uppercase text-secondary text-xxs\n                      font-weight-bolder\n                      opacity-7\n                      ps-2\n                    ",
          },
          [_vm._v("\n                    Size\n                  ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "\n                      text-center text-uppercase text-secondary text-xxs\n                      font-weight-bolder\n                      opacity-7\n                    ",
          },
          [_vm._v("\n                    Status\n                  ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "\n                      text-center text-uppercase text-secondary text-xxs\n                      font-weight-bolder\n                      opacity-7\n                    ",
          },
          [_vm._v("\n                    Actions\n                  ")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticClass: "avatar me-3",
        attrs: {
          src: "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg",
          alt: "image",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "text-sm font-weight-bold text-secondary mb-0" },
      [
        _c("span", { staticClass: "text-success" }, [_vm._v("8.232")]),
        _vm._v(" orders\n                        "),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "\n                          btn btn-link\n                          text-dark\n                          dropdown-toggle dropdown-toggle-split\n                          m-0\n                          p-0\n                        ",
        attrs: {
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [
        _c("span", { staticClass: "icon icon-sm" }, [
          _c("span", { staticClass: "fas fa-ellipsis-h icon-secondary" }),
        ]),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle Dropdown")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item rounded-bottom" }, [
      _c("span", { staticClass: "fas fa-trash-alt me-2" }),
      _vm._v("\n                          Delete\n                        "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);