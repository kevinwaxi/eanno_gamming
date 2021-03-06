"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_users_admin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/users/admin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/users/admin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      banModal: false,
      banConfirmationModal: false,
      massDeleteModal: false,
      isProcessing: false,
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {},
      users: {},
      roles: {},
      total: 20,
      search: '',
      selected: '1',
      checked: [],
      selectPage: false,
      selectAll: false,
      sort_direction: 'desc',
      sort_field: 'created_at',
      url: '',
      option1: {
        disabledDate: function disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      }
    };
  },
  watch: {
    total: function total(value) {
      this.getUsers();
    },
    search: function search(value) {
      this.getUsers();
    },
    selected: function selected(value) {
      this.getUsers();
    },
    selectPage: function selectPage(value) {
      var _this = this;

      this.checked = [];

      if (value) {
        this.users.data.forEach(function (user) {
          _this.checked.push(user.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function checked(value) {
      this.url = '/api/v1/users/export/' + this.checked;
    }
  },
  mounted: function mounted() {
    this.getUsers();
    this.getRoles();
  },
  methods: {
    closeModal: function closeModal() {
      $('#modal-default').modal('hide');
      this.restForm();
    },
    restForm: function restForm() {
      this.form.name = '';
    },
    createModal: function createModal() {
      $('#modal-default').modal('show');
      this.editMode = false;
    },
    editModal: function editModal(user) {
      var obj = {
        id: user.id,
        name: user.name
      };
      $('#modal-default').modal('show');
      this.editMode = true;
      this.form = obj;
    },
    showBanModal: function showBanModal(user) {
      var obj = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        banned_until: user.banned_until
      };
      $('#modal-default').modal('show');
      this.form = obj;
    },
    showMassDeleteModal: function showMassDeleteModal(checked) {
      this.checked = checkedbanPermission;
      this.massDeleteModal = true;
    },
    change_sort: function change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc';
      } else {
        this.sort_field = field;
      }

      this.getUsers();
    },
    isChecked: function isChecked(user_id) {
      return this.checked.includes(user_id);
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
                return _this2.callApi('get', '/api/v1/users/all/');

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
    getUsers: function getUsers() {
      var _arguments = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var page, res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context2.next = 3;
                return _this3.callApi('get', "/api/v1/users?page=".concat(page, "\n        &total=").concat(_this3.total, "\n        &q=").concat(_this3.search, "\n        &select=").concat(_this3.selected, "\n        &sort_direction=").concat(_this3.sort_direction, "\n        &sort_field=").concat(_this3.sort_field));

              case 3:
                res = _context2.sent;

                if (res.status === 200) {
                  _this3.users = res.data;
                } else {
                  if (res.status === 401 || res.status === 422) {
                    for (i in res.data.errors) {
                      _this3.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this3.swr();
                  }
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getRoles: function getRoles() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.callApi('get', '/api/v1/roles');

              case 2:
                res = _context3.sent;

                if (res.status === 200) {
                  _this4.roles = res.data;
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    createUser: function createUser() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.processing = true;
                _context4.next = 3;
                return _this5.callApi('post', '/api/v1/users', _this5.form);

              case 3:
                res = _context4.sent;

                if (res.status === 201) {
                  _this5.s('User created successfully');

                  _this5.closeModal();

                  _this5.getUsers();

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
    updateUser: function updateUser(user_id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.processing = true;
                _context5.next = 3;
                return _this6.callApi('put', "/api/v1/users/".concat(user_id), _this6.form);

              case 3:
                res = _context5.sent;

                if (res.status == 200) {
                  _this6.closeModal();

                  _this6.getUsers();

                  _this6.s('Successfully updated user');

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
    banUser: function banUser(user) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.processing = true;
                _context6.next = 3;
                return _this7.callApi('put', "/api/v1/users/ban/".concat(user.id), _this7.form);

              case 3:
                res = _context6.sent;

                if (res.status === 200) {
                  _this7.closeModal();

                  _this7.getUsers();

                  _this7.w('Banned user: ' + user.username);

                  _this7.processing = false;
                } else {
                  if (res.status == 422) {
                    for (i in res.data.errors) {
                      _this7.e(res.data.errors[i][0]);
                    }

                    _this7.processing = false;
                  } else {
                    _this7.swr();

                    _this7.processing = false;
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
    restoreUser: function restoreUser(user_id) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this8.callApi('put', "/api/v1/users/restore/".concat(user_id), _this8.form);

              case 2:
                res = _context7.sent;

                if (res.status === 200) {
                  _this8.getUsers();

                  _this8.s('Successfully restored user');
                }

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    deleteUser: function deleteUser(user_id) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this9.isDeleting = true;
                _context8.next = 3;
                return _this9.callApi('delete', "/api/v1/users/".concat(user_id));

              case 3:
                res = _context8.sent;

                if (res.status == 204) {
                  _this9.w('User deleted');

                  _this9.checked = _this9.checked.filter(function (id) {
                    return id != user_id;
                  });
                  _this9.isDeleting = false;
                  _this9.deleteModal = false;

                  _this9.getUsers();
                } else {
                  if (res.status !== 422) {
                    for (i in res.data.errors) {
                      _this9.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this9.swr();
                  }
                }

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    deleteRecords: function deleteRecords(checked) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this10.callApi('delete', "/api/v1/users/massDestroy/".concat(checked));

              case 2:
                res = _context9.sent;

                if (res.status == 204) {
                  _this10.s('User deleted successfully');

                  _this10.massDeleteModal = false;

                  _this10.getUsers();
                } else {
                  if (res.status !== 422) {
                    for (i in res.data.errors) {
                      _this10.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this10.swr();
                  }
                }

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/users/admin.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/settings/users/admin.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_vue_vue_type_template_id_2b1c8385___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.vue?vue&type=template&id=2b1c8385& */ "./resources/js/pages/settings/users/admin.vue?vue&type=template&id=2b1c8385&");
/* harmony import */ var _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/users/admin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_vue_vue_type_template_id_2b1c8385___WEBPACK_IMPORTED_MODULE_0__.render,
  _admin_vue_vue_type_template_id_2b1c8385___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/users/admin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/users/admin.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/settings/users/admin.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/users/admin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/users/admin.vue?vue&type=template&id=2b1c8385&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/settings/users/admin.vue?vue&type=template&id=2b1c8385& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_2b1c8385___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_2b1c8385___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_2b1c8385___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin.vue?vue&type=template&id=2b1c8385& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/users/admin.vue?vue&type=template&id=2b1c8385&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/users/admin.vue?vue&type=template&id=2b1c8385&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/users/admin.vue?vue&type=template&id=2b1c8385& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container-fluid py-4" },
    [
      _c("div", { staticClass: "row my-4" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header pb-0 p-3" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-3 flex" }, [
                  _c("label", { attrs: { for: "search" } }, [
                    _vm._v(" Search "),
                  ]),
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
                        placeholder: "User Name or details",
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
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table align-items-center mb-0" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "border-bottom" }, [
                      _c("div", { staticClass: "form-check dashboard-check" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectPage,
                              expression: "selectPage",
                            },
                          ],
                          staticClass: "form-check-input",
                          attrs: {
                            type: "checkbox",
                            value: "",
                            id: "checkAllRecords",
                          },
                          domProps: {
                            checked: Array.isArray(_vm.selectPage)
                              ? _vm._i(_vm.selectPage, "") > -1
                              : _vm.selectPage,
                          },
                          on: {
                            change: function ($event) {
                              var $$a = _vm.selectPage,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.selectPage = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.selectPage = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.selectPage = $$c
                              }
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", {
                          staticClass: "form-check-label",
                          attrs: { for: "checkAllRecords" },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "\n                    text-uppercase text-secondary text-xxs\n                    font-weight-bolder\n                    opacity-7\n                  ",
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "text-gray-900",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.change_sort("name")
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    Name\n                  "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _vm.sort_direction == "desc" && _vm.sort_field == "name"
                          ? _c("span", [
                              _vm._v(
                                "\n                    ???\n                  "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.sort_direction == "asc" && _vm.sort_field == "name"
                          ? _c("span", [
                              _vm._v(
                                "\n                    ???\n                  "
                              ),
                            ])
                          : _vm._e(),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "\n                    text-uppercase text-secondary text-xxs\n                    font-weight-bolder\n                    opacity-7\n                    ps-2\n                  ",
                      },
                      [_vm._v("\n                  Roles\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "\n                    text-uppercase text-secondary text-xxs\n                    font-weight-bolder\n                    opacity-7\n                    ps-2\n                  ",
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "text-gray-900",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.change_sort("phone")
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    Phone\n                  "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _vm.sort_direction == "desc" &&
                        _vm.sort_field == "phone"
                          ? _c("span", [
                              _vm._v(
                                "\n                    ???\n                  "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.sort_direction == "asc" && _vm.sort_field == "phone"
                          ? _c("span", [
                              _vm._v(
                                "\n                    ???\n                  "
                              ),
                            ])
                          : _vm._e(),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "\n                    text-uppercase text-secondary text-xxs\n                    font-weight-bolder\n                    opacity-7\n                    ps-2\n                  ",
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "text-gray-900",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.change_sort("username")
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    username\n                  "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _vm.sort_direction == "desc" &&
                        _vm.sort_field == "username"
                          ? _c("span", [
                              _vm._v(
                                "\n                    ???\n                  "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.sort_direction == "asc" &&
                        _vm.sort_field == "username"
                          ? _c("span", [
                              _vm._v(
                                "\n                    ???\n                  "
                              ),
                            ])
                          : _vm._e(),
                      ]
                    ),
                    _vm._v(" "),
                    _c("th"),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "\n                    text-uppercase text-secondary text-xxs\n                    font-weight-bolder\n                    opacity-7\n                  ",
                      },
                      [_vm._v("\n                  Action\n                ")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.users.data, function (user, i) {
                    return _c(
                      "tr",
                      {
                        key: i,
                        class: _vm.isChecked(user.id) ? "table-secondary" : "",
                      },
                      [
                        _c("td", [
                          _c(
                            "div",
                            { staticClass: "form-check dashboard-check" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.checked,
                                    expression: "checked",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "checkbox", id: "userCheck1" },
                                domProps: {
                                  value: user.id,
                                  checked: Array.isArray(_vm.checked)
                                    ? _vm._i(_vm.checked, user.id) > -1
                                    : _vm.checked,
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.checked,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = user.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.checked = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.checked = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.checked = $$c
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", {
                                staticClass: "form-check-label",
                                attrs: { for: "userCheck1" },
                              }),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", { staticClass: "d-flex px-3 py-1" }, [
                            _vm._m(1, true),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-column justify-content-center",
                              },
                              [
                                _c("h6", { staticClass: "mb-0 text-sm" }, [
                                  _vm._v(_vm._s(user.name)),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-sm font-weight-bold text-secondary mb-0",
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(user.email) +
                                        "\n                      "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "p",
                            { staticClass: "text-sm text-secondary mb-0" },
                            [_vm._v(_vm._s(user.role))]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "badge badge-dot me-4" }, [
                            _c("i", { staticClass: "bg-info" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-dark text-xs" }, [
                              _vm._v(_vm._s(user.phone)),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "align-middle text-center text-sm" },
                          [
                            _c(
                              "p",
                              { staticClass: "text-secondary mb-0 text-sm" },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(user.username) +
                                    "\n                  "
                                ),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-middle text-center" }, [
                          _c(
                            "span",
                            { staticClass: "text-secondary text-sm" },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(user.member) +
                                  "\n                  "
                              ),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", { staticClass: "ms-auto text-end" }, [
                            user.banned_until === null
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-link text-danger text-gradient px-3 mb-0",
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function ($event) {
                                        $event.preventDefault()
                                        return _vm.showBanModal(user)
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "far fa-trash-alt me-2",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                    _vm._v(
                                      "\n                      Ban\n                    "
                                    ),
                                  ]
                                )
                              : _c(
                                  "a",
                                  {
                                    staticClass:
                                      "\n                        btn btn-link\n                        text-warning text-gradient\n                        px-3\n                        mb-0\n                      ",
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function ($event) {
                                        $event.preventDefault()
                                        return _vm.restoreUser(user.id)
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-trash-restore me-2",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                    _vm._v(
                                      "\n                      Restore\n                    "
                                    ),
                                  ]
                                ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-link text-dark px-3 mb-0",
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.editUser(user)
                                  },
                                },
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fas fa-pencil-alt text-dark me-2",
                                  attrs: { "aria-hidden": "true" },
                                }),
                                _vm._v(
                                  "\n                      Edit\n                    "
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
              ]),
            ]),
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
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("Ban " + _vm._s(_vm.form.name)),
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", [
                    _c("h4", { staticClass: "h2 text-black-50" }, [
                      _vm._v("Banning " + _vm._s(_vm.form.name)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("DatePicker", {
                        staticStyle: { width: "200px" },
                        attrs: {
                          type: "date",
                          options: _vm.option1,
                          placeholder: "Select date",
                        },
                        model: {
                          value: _vm.form.banned_until,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "banned_until", $$v)
                          },
                          expression: "form.banned_until",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
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
                          return _vm.banUser(_vm.form)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.processing ? "Banning ..." : "Ban User") +
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
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { width: "400" },
          model: {
            value: _vm.banConfirmationModal,
            callback: function ($$v) {
              _vm.banConfirmationModal = $$v
            },
            expression: "banConfirmationModal",
          },
        },
        [
          _c(
            "p",
            {
              staticStyle: { "'color": "#f60", "text-align": "center" },
              attrs: { slot: "header" },
              slot: "header",
            },
            [
              _c("Icon", { attrs: { type: "ios-information-circle" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Ban Confirmation")]),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("p", [_vm._v("Are you sure you would like to ban this user ?")]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: {
                    type: "error",
                    size: "large",
                    long: "",
                    loading: _vm.processing,
                    disabled: _vm.processing,
                  },
                  on: {
                    click: function ($event) {
                      return _vm.banUser(_vm.form.id)
                    },
                  },
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.processing ? "Please wait ..." : "Ban") +
                      "\n      "
                  ),
                ]
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-8 d-flex" }, [
        _c("h6", { staticClass: "mb-0" }, [_vm._v("Admins List")]),
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
        attrs: { src: "/assets/img/team-4.jpg", alt: "image" },
      }),
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
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("??")])]
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