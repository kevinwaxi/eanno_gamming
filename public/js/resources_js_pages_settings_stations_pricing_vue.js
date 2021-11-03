"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_stations_pricing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/pricing.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/pricing.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {},
      prices: {},
      roles: {},
      total: 20,
      search: '',
      selected: '',
      checked: [],
      selectPage: false,
      selectAll: false,
      sort_direction: 'desc',
      sort_field: 'created_at',
      url: ''
    };
  },
  watch: {
    total: function total(value) {
      this.getPriceList();
    },
    search: function search(value) {
      this.getPriceList();
    },
    selected: function selected(value) {
      this.getPriceList();
    },
    selectPage: function selectPage(value) {
      var _this = this;

      this.checked = [];

      if (value) {
        this.prices.data.forEach(function (price) {
          _this.checked.push(price.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function checked(value) {
      this.url = '/api/v1/price/export/' + this.checked;
    }
  },
  mounted: function mounted() {
    this.getPriceList();
  },
  methods: {
    closeModal: function closeModal() {
      $('#modal-default').modal('hide');
      this.restForm();
    },
    restForm: function restForm() {
      this.form = {};
    },
    createModal: function createModal() {
      $('#modal-default').modal('show');
      this.editMode = false;
    },
    editModal: function editModal(price) {
      var obj = {
        id: price.id,
        package_name: price["package"],
        details: price.details,
        price: price.price,
        number_of_players: price.players,
        is_available: price.is_available
      };
      $('#modal-default').modal('show');
      this.editMode = true;
      this.form = obj;
    },
    showDeleteModal: function showDeleteModal(price) {
      this.form = price;
      this.deleteModal = true;
    },
    showMassDeleteModal: function showMassDeleteModal(checked) {
      this.checked = checked;
      this.massDeleteModal = true;
    },
    change_sort: function change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc';
      } else {
        this.sort_field = field;
      }

      this.getPriceList();
    },
    isChecked: function isChecked(price_id) {
      return this.checked.includes(price_id);
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
                return _this2.callApi('get', '/api/v1/prices/all/');

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
    getPriceList: function getPriceList() {
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
                return _this3.callApi('get', "/api/v1/prices?page=".concat(page, "\n        &total=").concat(_this3.total, "\n        &q=").concat(_this3.search, "\n        &select=").concat(_this3.selected, "\n        &sort_direction=").concat(_this3.sort_direction, "\n        &sort_field=").concat(_this3.sort_field));

              case 3:
                res = _context2.sent;

                if (res.status === 200) {
                  _this3.prices = res.data;
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
    createPrice: function createPrice() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.processing = true;
                _context3.next = 3;
                return _this4.callApi('post', '/api/v1/prices', _this4.form);

              case 3:
                res = _context3.sent;

                if (res.status === 201) {
                  _this4.s('Price created successfully');

                  _this4.closeModal();

                  _this4.getPriceList();

                  _this4.processing = false;
                } else {
                  if (res.status === 422) {
                    for (i in res.data.errors) {
                      _this4.e(res.data.errors[i][0]);
                    }

                    _this4.processing = false;
                  } else {
                    _this4.swr();

                    _this4.processing = false;
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
    updatePrice: function updatePrice(price_id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.processing = true;
                _context4.next = 3;
                return _this5.callApi('put', "/api/v1/prices/".concat(price_id), _this5.form);

              case 3:
                res = _context4.sent;

                if (res.status === 200) {
                  _this5.closeModal();

                  _this5.getPriceList();

                  _this5.s('Successfully updated price list');

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
    deletePrice: function deletePrice(price_id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.isDeleting = true;
                _context5.next = 3;
                return _this6.callApi('delete', "/api/v1/prices/".concat(price_id));

              case 3:
                res = _context5.sent;

                if (res.status == 204) {
                  _this6.w('Price deleted');

                  _this6.checked = _this6.checked.filter(function (id) {
                    return id != price_id;
                  });
                  _this6.isDeleting = false;
                  _this6.deleteModal = false;

                  _this6.getPriceList();
                } else {
                  if (res.status !== 422) {
                    for (i in res.data.errors) {
                      _this6.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this6.swr();
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
    deleteRecords: function deleteRecords(checked) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this7.callApi('delete', "/api/v1/prices/massDestroy/".concat(checked));

              case 2:
                res = _context6.sent;

                if (res.status == 204) {
                  _this7.s('Price deleted successfully');

                  _this7.massDeleteModal = false;

                  _this7.getPriceList();
                } else {
                  if (res.status !== 422) {
                    for (i in res.data.errors) {
                      _this7.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this7.swr();
                  }
                }

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/stations/pricing.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/settings/stations/pricing.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pricing_vue_vue_type_template_id_dcffa46e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing.vue?vue&type=template&id=dcffa46e& */ "./resources/js/pages/settings/stations/pricing.vue?vue&type=template&id=dcffa46e&");
/* harmony import */ var _pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/stations/pricing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pricing_vue_vue_type_template_id_dcffa46e___WEBPACK_IMPORTED_MODULE_0__.render,
  _pricing_vue_vue_type_template_id_dcffa46e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/stations/pricing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/stations/pricing.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/settings/stations/pricing.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pricing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/pricing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/stations/pricing.vue?vue&type=template&id=dcffa46e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/settings/stations/pricing.vue?vue&type=template&id=dcffa46e& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_template_id_dcffa46e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_template_id_dcffa46e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_template_id_dcffa46e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pricing.vue?vue&type=template&id=dcffa46e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/pricing.vue?vue&type=template&id=dcffa46e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/pricing.vue?vue&type=template&id=dcffa46e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/pricing.vue?vue&type=template&id=dcffa46e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-8 col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4 col-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "card card-background card-background-mask-info h-100 tilt",
                staticStyle: {
                  "will-change": "transform",
                  transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                },
                attrs: { "data-tilt": "" },
              },
              [
                _c("div", {
                  staticClass: "full-background",
                  staticStyle: {
                    "background-image":
                      "url('/assets/img/curved-images/white-curved.jpeg')",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body pt-4 text-center" }, [
                  _c("h2", { staticClass: "text-white mb-0 mt-2 up" }, [
                    _vm._v("Earnings"),
                  ]),
                  _vm._v(" "),
                  _c("h1", { staticClass: "text-white mb-0 up" }, [
                    _vm._v("$15,800"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "badge badge-lg d-block bg-gradient-dark mb-2 up",
                    },
                    [
                      _vm._v(
                        "\n                +15% since last week\n              "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-outline-white mb-2 px-5 up",
                      attrs: { href: "javascript:;" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.createModal.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("\n                Create Price\n              ")]
                  ),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(2),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row mt-lg-4 mt-2" },
      _vm._l(_vm.prices.data, function (price, i) {
        return _c("div", { key: i, staticClass: "col-lg-4 col-md-6 mb-4" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body p-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _vm._m(3, true),
                _vm._v(" "),
                _c("div", { staticClass: "ms-3 my-auto" }, [
                  _c("h6", [_vm._v(_vm._s(price.package))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ms-auto" }, [
                  _c("div", { staticClass: "dropdown" }, [
                    _vm._m(4, true),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "dropdown-menu dropdown-menu-end me-sm-n4 me-n3",
                        attrs: { "aria-labelledby": "navbarDropdownMenuLink" },
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.editModal(price)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    Edit Package\n                  "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "javascript:;" },
                          },
                          [
                            _vm._v(
                              "\n                    Delete action\n                  "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "javascript:;" },
                          },
                          [
                            _vm._v(
                              "\n                    Totally Delete\n                  "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-sm mt-3" }, [
                _vm._v(
                  "\n            " + _vm._s(price.details) + "\n          "
                ),
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "horizontal dark" }),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c("h6", { staticClass: "text-sm mb-0" }, [
                    _vm._v(_vm._s(price.players)),
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "text-secondary text-sm font-weight-bold mb-0",
                    },
                    [_vm._v("\n                Participants\n              ")]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 text-end" }, [
                  _c("h6", { staticClass: "text-sm mb-0" }, [
                    price.days.i < 2 && price.days.d < 1
                      ? _c("span", [
                          _vm._v(
                            "\n                  a few seconds\n                "
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    price.days.i > 1 && price.days.h < 1 && price.days.d < 1
                      ? _c("span", [
                          _vm._v(
                            "\n                  " +
                              _vm._s(price.days.i) +
                              " minutes\n                "
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    price.days.i > 1 && price.days.h >= 1 && price.days.d < 1
                      ? _c("span", [
                          _vm._v(
                            "\n                  " +
                              _vm._s(price.days.h) +
                              " hour\n                "
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    price.days.d >= 1
                      ? _c("span", [
                          _vm._v(" " + _vm._s(price.days.d) + " day "),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    price.days.d > 1
                      ? _c("span", [
                          _vm._v(" " + _vm._s(price.days.d) + " days "),
                        ])
                      : _vm._e(),
                    _vm._v("\n                ago\n              "),
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "text-secondary text-sm font-weight-bold mb-0",
                    },
                    [_vm._v("\n                last updated\n              ")]
                  ),
                ]),
              ]),
            ]),
          ]),
        ])
      }),
      0
    ),
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
                      _vm._v("Create Price"),
                    ])
                  : _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Edit Price"),
                    ]),
                _vm._v(" "),
                _vm._m(5),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("FormulateInput", {
                        attrs: {
                          type: "text",
                          required: "",
                          label: "Package Name",
                          validation: "required",
                        },
                        model: {
                          value: _vm.form.package_name,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "package_name", $$v)
                          },
                          expression: "form.package_name",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("FormulateInput", {
                        attrs: {
                          type: "number",
                          required: "",
                          label: "Price",
                          validation: "required|number|between:50,500",
                          min: "50",
                          max: "500",
                          "error-behavior": "submit",
                        },
                        model: {
                          value: _vm.form.price,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "price", $$v)
                          },
                          expression: "form.price",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("FormulateInput", {
                        attrs: {
                          type: "textarea",
                          label: "Enter a details about your pricing",
                          validation: "required|max:100,length",
                          "validation-name": "details",
                          "error-behavior": "live",
                        },
                        model: {
                          value: _vm.form.details,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "details", $$v)
                          },
                          expression: "form.details",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-6" },
                    [
                      _c("FormulateInput", {
                        attrs: {
                          type: "number",
                          required: "",
                          label: "Number of Players",
                          validation: "required|number|between:0,5",
                          min: "0",
                          max: "5",
                          "error-behavior": "submit",
                        },
                        model: {
                          value: _vm.form.number_of_players,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "number_of_players", $$v)
                          },
                          expression: "form.number_of_players",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-check form-switch my-auto" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.is_available,
                              expression: "form.is_available",
                            },
                          ],
                          staticClass: "form-check-input",
                          attrs: {
                            checked: "",
                            type: "checkbox",
                            id: "flexSwitchCheckDefault1",
                          },
                          domProps: {
                            checked: Array.isArray(_vm.form.is_available)
                              ? _vm._i(_vm.form.is_available, null) > -1
                              : _vm.form.is_available,
                          },
                          on: {
                            change: function ($event) {
                              var $$a = _vm.form.is_available,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.form,
                                      "is_available",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.form,
                                      "is_available",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.form, "is_available", $$c)
                              }
                            },
                          },
                        }),
                      ]
                    ),
                  ]),
                ]),
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
                _vm.editMode
                  ? _c(
                      "button",
                      {
                        staticClass: "btn bg-gradient-primary",
                        attrs: { type: "button", disabled: _vm.processing },
                        on: {
                          click: function ($event) {
                            return _vm.updatePrice(_vm.form.id)
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
                            return _vm.createPrice()
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.processing ? "Creating ..." : "Create") +
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
    return _c("div", { staticClass: "col-lg-4 col-md-6 col-12 mt-4 mt-lg-0" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body p-3" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "\n                      icon icon-shape\n                      bg-gradient-dark\n                      text-center\n                      border-radius-md\n                    ",
                },
                [
                  _c("i", {
                    staticClass: "ni ni-money-coins text-lg opacity-10",
                    attrs: { "aria-hidden": "true" },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-3" }, [
              _c("div", { staticClass: "numbers" }, [
                _c(
                  "p",
                  {
                    staticClass:
                      "text-sm mb-0 text-capitalize font-weight-bold",
                  },
                  [
                    _vm._v(
                      "\n                      Today's Money\n                    "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                  _vm._v("$53,000"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mt-4" }, [
        _c("div", { staticClass: "card-body p-3" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "\n                      icon icon-shape\n                      bg-gradient-dark\n                      text-center\n                      border-radius-md\n                    ",
                },
                [
                  _c("i", {
                    staticClass: "ni ni-planet text-lg opacity-10",
                    attrs: { "aria-hidden": "true" },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-3" }, [
              _c("div", { staticClass: "numbers" }, [
                _c(
                  "p",
                  {
                    staticClass:
                      "text-sm mb-0 text-capitalize font-weight-bold",
                  },
                  [
                    _vm._v(
                      "\n                      Sessions\n                    "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                  _vm._v(
                    "\n                      9,600\n                      "
                  ),
                  _c(
                    "span",
                    { staticClass: "text-success text-sm font-weight-bolder" },
                    [_vm._v("+15%")]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4 col-md-6 col-12 mt-4 mt-lg-0" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body p-3" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "\n                      icon icon-shape\n                      bg-gradient-dark\n                      text-center\n                      border-radius-md\n                    ",
                },
                [
                  _c("i", {
                    staticClass: "ni ni-world text-lg opacity-10",
                    attrs: { "aria-hidden": "true" },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-3" }, [
              _c("div", { staticClass: "numbers" }, [
                _c(
                  "p",
                  {
                    staticClass:
                      "text-sm mb-0 text-capitalize font-weight-bold",
                  },
                  [
                    _vm._v(
                      "\n                      Today's Users\n                    "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                  _vm._v(
                    "\n                      2,300\n                      "
                  ),
                  _c(
                    "span",
                    { staticClass: "text-success text-sm font-weight-bolder" },
                    [
                      _vm._v(
                        "\n                        +3%\n                      "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mt-4" }, [
        _c("div", { staticClass: "card-body p-3" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "\n                      icon icon-shape\n                      bg-gradient-dark\n                      text-center\n                      border-radius-md\n                    ",
                },
                [
                  _c("i", {
                    staticClass: "ni ni-shop text-lg opacity-10",
                    attrs: { "aria-hidden": "true" },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-3" }, [
              _c("div", { staticClass: "numbers" }, [
                _c(
                  "p",
                  {
                    staticClass:
                      "text-sm mb-0 text-capitalize font-weight-bold",
                  },
                  [
                    _vm._v(
                      "\n                      Sign-ups\n                    "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                  _vm._v("\n                      348\n                      "),
                  _c(
                    "span",
                    { staticClass: "text-success text-sm font-weight-bolder" },
                    [_vm._v("+12%")]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4 col-12 mt-4 mt-lg-0" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header p-3 pb-0" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-8 d-flex" }, [
              _c("div", [
                _c("img", {
                  staticClass: "avatar avatar-sm me-2",
                  attrs: { src: "/assets/img/team-3.jpg", alt: "avatar image" },
                }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-column justify-content-center" },
                [
                  _c("h6", { staticClass: "mb-0 text-sm" }, [
                    _vm._v("Lucas Prila"),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-xs" }, [_vm._v("2h ago")]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4" }, [
              _c(
                "span",
                { staticClass: "badge bg-gradient-info ms-auto float-end" },
                [_vm._v("Recommendation")]
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-3 pt-1" }, [
          _c("h6", [_vm._v("I need a Ruby developer for my new website.")]),
          _vm._v(" "),
          _c("p", { staticClass: "text-sm" }, [
            _vm._v(
              "\n            The website was initially built in PHP, I need a professional ruby\n            programmer to shift it.\n          "
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex bg-gray-100 border-radius-lg p-3" },
            [
              _c("h4", { staticClass: "my-auto" }, [
                _c("span", { staticClass: "text-secondary text-sm me-1" }, [
                  _vm._v("$"),
                ]),
                _vm._v("3,000"),
                _c("span", { staticClass: "text-secondary text-sm ms-1" }, [
                  _vm._v("/ month\n              "),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-outline-dark mb-0 ms-auto",
                  attrs: { href: "javascript:;" },
                },
                [_vm._v("Apply")]
              ),
            ]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "avatar avatar-xl bg-gradient-dark border-radius-md p-2" },
      [
        _c("img", {
          attrs: {
            src: "/assets/img/small-logos/logo-slack.svg",
            alt: "slack_logo",
          },
        }),
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
        staticClass: "btn btn-link text-secondary ps-0 pe-2",
        attrs: {
          id: "navbarDropdownMenuLink",
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [
        _c("i", {
          staticClass: "fa fa-ellipsis-v text-lg",
          attrs: { "aria-hidden": "true" },
        }),
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