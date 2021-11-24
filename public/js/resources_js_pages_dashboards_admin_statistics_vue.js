"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_dashboards_admin_statistics_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/statistics.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/statistics.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      processing: false,
      editMode: false,
      users: [],
      income: [],
      requests: [],
      bookings: [],
      stations: [],
      allBookings: {},
      form: {},
      selected: 'Approved',
      total: 20,
      search: '',
      checked: [],
      selectPage: false,
      selectAll: false,
      sort_direction: 'desc',
      sort_field: 'created_at',
      url: '',
      fromToday: {
        disabledDate: function disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      }
    };
  },
  watch: {
    total: function total(value) {
      this.getAllBookings();
    },
    search: function search(value) {
      this.getAllBookings();
    },
    selected: function selected(value) {
      this.getAllBookings();
    },
    selectPage: function selectPage(value) {
      var _this = this;

      this.checked = [];

      if (value) {
        this.allBookings.data.forEach(function (booking) {
          _this.checked.push(booking.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function checked(value) {
      this.url = '/api/v1/bookings/export/' + this.checked;
    }
  },
  mounted: function mounted() {
    this.getAllRequests();
    this.getAllUsers();
    this.getTodaysBookings();
    this.getAllBookings();
    this.getAllStations();
  },
  methods: {
    closeModal: function closeModal() {
      $('#modal-default').modal('hide');
      this.restForm();
    },
    restForm: function restForm() {
      this.form.name = '';
    },
    approveBookingModal: function approveBookingModal(booking) {
      var obj = {
        id: booking.id,
        user: booking.user.name,
        start: booking.start,
        end: booking.end,
        status: booking.status,
        date: booking.date
      };
      this.form = obj;
      $('#modal-default').modal('show');
      this.editMode = false;
    },
    editModal: function editModal(permission) {
      var obj = {
        id: permission.id,
        name: permission.name
      };
      $('#modal-default').modal('show');
      this.editMode = true;
      this.form = obj;
    },
    getAllRequests: function getAllRequests() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.callApi('get', '/api/v1/invitations/pending');

              case 2:
                res = _context.sent;

                if (res.status === 200) {
                  _this2.requests = res.data;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAllUsers: function getAllUsers() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.callApi('get', '/api/v1/users/all');

              case 2:
                res = _context2.sent;

                if (res.status === 200) {
                  _this3.users = res.data;
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getTodaysBookings: function getTodaysBookings() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.callApi('get', '/api/v1/bookings/today');

              case 2:
                res = _context3.sent;

                if (res.status === 200) {
                  _this4.bookings = res.data;
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getAllBookings: function getAllBookings() {
      var _arguments = arguments,
          _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var page, res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context4.next = 3;
                return _this5.callApi('get', "/api/v1/bookings?page=".concat(page, "\n        &total=").concat(_this5.total, "\n        &q=").concat(_this5.search, "\n        &select=").concat(_this5.selected, "\n        &sort_direction=").concat(_this5.sort_direction, "\n        &sort_field=").concat(_this5.sort_field));

              case 3:
                res = _context4.sent;

                if (res.status === 200) {
                  _this5.allBookings = res.data;
                } else {
                  if (res.status === 401 || res.status === 422) {
                    for (i in res.data.errors) {
                      _this5.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this5.swr();
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
    getAllStations: function getAllStations() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this6.callApi('get', '/api/v1/stations');

              case 2:
                res = _context5.sent;

                if (res.status === 200) {
                  _this6.stations = res.data.data;
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/dashboards/admin/statistics.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/dashboards/admin/statistics.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _statistics_vue_vue_type_template_id_c386858c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.vue?vue&type=template&id=c386858c& */ "./resources/js/pages/dashboards/admin/statistics.vue?vue&type=template&id=c386858c&");
/* harmony import */ var _statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboards/admin/statistics.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _statistics_vue_vue_type_template_id_c386858c___WEBPACK_IMPORTED_MODULE_0__.render,
  _statistics_vue_vue_type_template_id_c386858c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboards/admin/statistics.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboards/admin/statistics.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/dashboards/admin/statistics.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./statistics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/statistics.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboards/admin/statistics.vue?vue&type=template&id=c386858c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/dashboards/admin/statistics.vue?vue&type=template&id=c386858c& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_template_id_c386858c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_template_id_c386858c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_template_id_c386858c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./statistics.vue?vue&type=template&id=c386858c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/statistics.vue?vue&type=template&id=c386858c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/statistics.vue?vue&type=template&id=c386858c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/statistics.vue?vue&type=template&id=c386858c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-lg-7 position-relative z-index-2" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-5 col-sm-5" }, [
            _c("div", { staticClass: "card mb-4" }, [
              _c("div", { staticClass: "card-body p-3" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-8" }, [
                    _c("div", { staticClass: "numbers" }, [
                      _c(
                        "p",
                        {
                          staticClass:
                            "text-sm mb-0 text-capitalize font-weight-bold",
                        },
                        [
                          _vm._v(
                            "\n                      Today's Bookings\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.bookings.length) +
                            "\n                      "
                        ),
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-success text-sm font-weight-bolder",
                          },
                          [
                            _vm._v(
                              "\n                        +55%\n                      "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body p-3" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-8" }, [
                    _c("div", { staticClass: "numbers" }, [
                      _c(
                        "p",
                        {
                          staticClass:
                            "text-sm mb-0 text-capitalize font-weight-bold",
                        },
                        [
                          _vm._v(
                            "\n                      All Users\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.users.length) +
                            "\n                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-4 text-end" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "all_users" } } },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "\n                        icon icon-shape\n                        bg-gradient-primary\n                        shadow\n                        text-center\n                        border-radius-md\n                      ",
                            },
                            [
                              _c("i", {
                                staticClass: "ni ni-world text-lg opacity-10",
                              }),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-5 col-sm-5 mt-sm-0 mt-4" }, [
            _c("div", { staticClass: "card mb-4" }, [
              _c("div", { staticClass: "card-body p-3" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-8" }, [
                    _c("div", { staticClass: "numbers" }, [
                      _c(
                        "p",
                        {
                          staticClass:
                            "text-sm mb-0 text-capitalize font-weight-bold",
                        },
                        [
                          _vm._v(
                            "\n                      New Requests\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.requests.length) +
                            "\n                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-4 text-end" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "all_requests" } } },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "\n                        icon icon-shape\n                        bg-gradient-primary\n                        shadow\n                        text-center\n                        border-radius-md\n                      ",
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "ni ni-paper-diploma text-lg opacity-10",
                              }),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(2),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-4" }, [
          _c("div", { staticClass: "col-12 col-md-10" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table align-items-center" }, [
                  _c(
                    "tbody",
                    _vm._l(_vm.allBookings.data, function (booking, i) {
                      return _c("tr", { key: i }, [
                        _c("td", { staticClass: "w-30" }, [
                          _c(
                            "div",
                            { staticClass: "px-2 py-1 align-items-center" },
                            [
                              _c("div", { staticClass: "ms-4" }, [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-xs font-weight-bold mb-0",
                                  },
                                  [_vm._v("name:")]
                                ),
                                _vm._v(" "),
                                _c("h6", { staticClass: "text-sm mb-0" }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(booking.user.name) +
                                      "\n                          "
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", { staticClass: "text-center" }, [
                            _c(
                              "p",
                              { staticClass: "text-xs font-weight-bold mb-0" },
                              [_vm._v("date:")]
                            ),
                            _vm._v(" "),
                            _c("h6", { staticClass: "text-sm mb-0" }, [
                              _vm._v(
                                "\n                          " +
                                  _vm._s(booking.booking_date) +
                                  "\n                        "
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._m(4, true),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-middle text-sm" }, [
                          _c("div", { staticClass: "col text-center" }, [
                            _c(
                              "p",
                              { staticClass: "text-xs font-weight-bold mb-0" },
                              [_vm._v("status:")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "ms-auto text-end" }, [
                              booking.status === "Pending"
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "\n                              btn btn-link\n                              text-success text-gradient\n                              px-3\n                              mb-0\n                            ",
                                      attrs: { href: "javascript:;" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.approveBookingModal(
                                            booking
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-trash-alt me-2",
                                        attrs: { "aria-hidden": "true" },
                                      }),
                                      _vm._v(
                                        "\n                            Approve\n                          "
                                      ),
                                    ]
                                  )
                                : _c(
                                    "a",
                                    {
                                      staticClass:
                                        "\n                              btn btn-link\n                              text-success text-gradient\n                              px-3\n                              mb-0\n                            ",
                                      attrs: { href: "javascript:;" },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-trash-alt me-2",
                                        attrs: { "aria-hidden": "true" },
                                      }),
                                      _vm._v(
                                        "\n                            Change time\n                          "
                                      ),
                                    ]
                                  ),
                              _vm._v(" "),
                              _vm._m(5, true),
                            ]),
                          ]),
                        ]),
                      ])
                    }),
                    0
                  ),
                ]),
              ]),
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
                !_vm.editMode
                  ? _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Accept Booking"),
                    ])
                  : _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Edit Booking"),
                    ]),
                _vm._v(" "),
                _vm._m(6),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _vm._v("Current Booking"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-9" }, [
                    _c("div", { staticClass: "card h-100" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body p-3" }, [
                        _c("hr", { staticClass: "horizontal gray-light my-4" }),
                        _vm._v(" "),
                        _c("ul", { staticClass: "list-group" }, [
                          _c(
                            "li",
                            {
                              staticClass:
                                "list-group-item border-0 ps-0 pt-0 text-sm",
                            },
                            [
                              _c("strong", { staticClass: "text-dark" }, [
                                _vm._v("Full Name:"),
                              ]),
                              _vm._v(
                                "  \n                      " +
                                  _vm._s(_vm.form.user) +
                                  "\n                    "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass:
                                "list-group-item border-0 ps-0 text-sm",
                            },
                            [
                              _c("strong", { staticClass: "text-dark" }, [
                                _vm._v("Status:"),
                              ]),
                              _vm._v("  \n                      "),
                              _c("Tag", { attrs: { color: "red" } }, [
                                _vm._v(_vm._s(_vm.form.status)),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass:
                                "list-group-item border-0 ps-0 text-sm",
                            },
                            [
                              _c("strong", { staticClass: "text-dark" }, [
                                _vm._v("Date:"),
                              ]),
                              _vm._v(
                                "  \n                      " +
                                  _vm._s(_vm.form.date) +
                                  "\n                    "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass:
                                "list-group-item border-0 ps-0 text-sm",
                            },
                            [
                              _c("strong", { staticClass: "text-dark" }, [
                                _vm._v("Start time:"),
                              ]),
                              _vm._v(
                                "  \n                      " +
                                  _vm._s(_vm.form.start) +
                                  "\n                    "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass:
                                "list-group-item border-0 ps-0 text-sm",
                            },
                            [
                              _c("strong", { staticClass: "text-dark" }, [
                                _vm._v("End time:"),
                              ]),
                              _vm._v(
                                "  \n                      " +
                                  _vm._s(_vm.form.end) +
                                  "\n                    "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass:
                                "list-group-item border-0 ps-0 text-sm",
                            },
                            [
                              _c("strong", { staticClass: "text-dark" }, [
                                _vm._v("Station:"),
                              ]),
                              _vm._v("  \n                      "),
                              _c("Tag", { attrs: { color: "blue" } }, [
                                _vm._v(_vm._s(_vm.form.station)),
                              ]),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c(
                      "Col",
                      { attrs: { span: "12" } },
                      [
                        _c("Label", [_vm._v("Date")]),
                        _vm._v(" "),
                        _c("DatePicker", {
                          attrs: {
                            type: "date",
                            options: _vm.fromToday,
                            placeholder: "Select date",
                          },
                          model: {
                            value: _vm.form.date,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "date", $$v)
                            },
                            expression: "form.date",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-6" },
                    [
                      _c("Label", [_vm._v("Station")]),
                      _vm._v(" "),
                      _c(
                        "Select",
                        {
                          model: {
                            value: _vm.form.station_id,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "station_id", $$v)
                            },
                            expression: "form.station_id",
                          },
                        },
                        _vm._l(_vm.stations, function (station, i) {
                          return _c(
                            "Option",
                            {
                              key: i,
                              attrs: {
                                value: station.id,
                                clearable: "",
                                filterable: "",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(station.name) +
                                  "\n                "
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
                !_vm.editMode
                  ? _c(
                      "button",
                      {
                        staticClass: "btn bg-gradient-primary",
                        attrs: { type: "button", disabled: _vm.processing },
                        on: {
                          click: function ($event) {
                            return _vm.updateBooking(_vm.form.id)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.processing ? "Saving ..." : "Approve Booking"
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
                            return _vm.createPermission()
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
    return _c("div", { staticClass: "card card-plain mb-4" }, [
      _c("div", { staticClass: "card-body p-3" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6" }, [
            _c("div", { staticClass: "d-flex flex-column h-100" }, [
              _c("h2", { staticClass: "font-weight-bolder mb-0" }, [
                _vm._v("General Statistics"),
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
    return _c("div", { staticClass: "col-4 text-end" }, [
      _c(
        "div",
        {
          staticClass:
            "\n                      icon icon-shape\n                      bg-gradient-primary\n                      shadow\n                      text-center\n                      border-radius-md\n                    ",
        },
        [_c("i", { staticClass: "ni ni-money-coins text-lg opacity-10" })]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body p-3" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-8" }, [
            _c("div", { staticClass: "numbers" }, [
              _c(
                "p",
                {
                  staticClass: "text-sm mb-0 text-capitalize font-weight-bold",
                },
                [_vm._v("\n                      Sales\n                    ")]
              ),
              _vm._v(" "),
              _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                _vm._v(
                  "\n                      $103,430\n                      "
                ),
                _c(
                  "span",
                  { staticClass: "text-success text-sm font-weight-bolder" },
                  [_vm._v("+5%")]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4 text-end" }, [
            _c(
              "div",
              {
                staticClass:
                  "\n                      icon icon-shape\n                      bg-gradient-primary\n                      shadow\n                      text-center\n                      border-radius-md\n                    ",
              },
              [_c("i", { staticClass: "ni ni-cart text-lg opacity-10" })]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header pb-0 p-3" }, [
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c("h6", { staticClass: "mb-2" }, [_vm._v("Todays bookings")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "text-center" }, [
        _c("p", { staticClass: "text-xs font-weight-bold mb-0" }, [
          _vm._v("time:"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "text-sm mb-0" }, [_vm._v("$230,900")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-link text-danger px-3 mb-0",
        attrs: { href: "javascript:;" },
      },
      [
        _c("i", {
          staticClass: "fas fa-pencil-alt text-danger me-2",
          attrs: { "aria-hidden": "true" },
        }),
        _vm._v(
          "\n                            Deny\n                          "
        ),
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header pb-0 p-3" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8 d-flex align-items-center" }, [
          _c("h6", { staticClass: "mb-0" }, [_vm._v("Booking Information")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 text-end" }, [
          _c("a", { attrs: { href: "javascript:;" } }, [
            _c("i", {
              staticClass: "fas fa-user-edit text-secondary text-sm",
              attrs: {
                "data-bs-toggle": "tooltip",
                "data-bs-placement": "top",
                title: "",
                "data-bs-original-title": "Edit Profile",
                "aria-label": "Edit Profile",
              },
            }),
          ]),
        ]),
      ]),
    ])
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