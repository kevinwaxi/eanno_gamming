"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_dashboards_gamers_bookings_mybookings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
//
//
//
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
      disabledHours: [22, 23, 0, 1, 2, 3, 4, 5, 6, 7],
      deleteModal: false,
      massDeleteModal: false,
      isDeleting: false,
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {},
      bookings: {},
      stations: [],
      games: [],
      total: 7,
      search: '',
      selected: '',
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
      this.getBookings();
    },
    search: function search(value) {
      this.getBookings();
    },
    selected: function selected(value) {
      this.getBookings();
    },
    selectPage: function selectPage(value) {
      var _this = this;

      this.checked = [];

      if (value) {
        this.stations.data.forEach(function (station) {
          _this.checked.push(station.id);
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
    this.getBookings();
    this.getGames();
    this.getStations();
  },
  methods: {
    createModal: function createModal() {
      $('#modal-default').modal('show');
      this.editMode = false;
    },
    closeModal: function closeModal() {
      $('#modal-default').modal('hide');
      this.restForm();
    },
    restForm: function restForm() {
      this.form.station_id = '';
      this.form.game_id = '';
      this.start_time = '';
      this.end_time = '';
    },
    getStations: function getStations() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.callApi('get', '/api/v1/stations');

              case 2:
                res = _context.sent;

                if (res.status === 200) {
                  _this2.stations = res.data.data;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getGames: function getGames() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.callApi('get', '/api/v1/games');

              case 2:
                res = _context2.sent;

                if (res.status === 200) {
                  _this3.games = res.data.data;
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getBookings: function getBookings() {
      var _arguments = arguments,
          _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context3.next = 3;
                return _this4.callApi('get', "/api/v1/bookings?page=".concat(page, "\n        &total=").concat(_this4.total, "\n        &q=").concat(_this4.search, "\n        &select=").concat(_this4.selected, "\n        &sort_direction=").concat(_this4.sort_direction, "\n        &sort_field=").concat(_this4.sort_field));

              case 3:
                res = _context3.sent;

                if (res.status === 200) {
                  _this4.bookings = res.data;
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    createBooking: function createBooking() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.processing = true;
                _context4.next = 3;
                return _this5.callApi('post', '/api/v1/bookings', _this5.form);

              case 3:
                res = _context4.sent;

                if (res.status === 200) {
                  _this5.processing = false;

                  _this5.closeModal();

                  _this5.s('You have successfully made a resevation');

                  _this5.getBookings();
                } else {
                  if (res.status === 401 || res.status === 422) {
                    _this5.processing = false;

                    for (i in res.data.errors) {
                      _this5.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this5.processing = false;

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
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/dashboards/gamers/bookings/mybookings.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/dashboards/gamers/bookings/mybookings.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mybookings_vue_vue_type_template_id_b005cdd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mybookings.vue?vue&type=template&id=b005cdd4& */ "./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=template&id=b005cdd4&");
/* harmony import */ var _mybookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mybookings.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mybookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mybookings_vue_vue_type_template_id_b005cdd4___WEBPACK_IMPORTED_MODULE_0__.render,
  _mybookings_vue_vue_type_template_id_b005cdd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboards/gamers/bookings/mybookings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mybookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mybookings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mybookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=template&id=b005cdd4&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=template&id=b005cdd4& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mybookings_vue_vue_type_template_id_b005cdd4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mybookings_vue_vue_type_template_id_b005cdd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mybookings_vue_vue_type_template_id_b005cdd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mybookings.vue?vue&type=template&id=b005cdd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=template&id=b005cdd4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=template&id=b005cdd4&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/gamers/bookings/mybookings.vue?vue&type=template&id=b005cdd4& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4" }, [
        _c("div", { staticClass: "card h-100" }, [
          _c("div", { staticClass: "card-header pb-0 p-3" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 text-end" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary btn-sm mb-0",
                    on: { click: _vm.createModal },
                  },
                  [_vm._v("\n                Book Now\n              ")]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body p-3 pb-0" }, [
            _c(
              "ul",
              { staticClass: "list-group" },
              _vm._l(_vm.bookings.data, function (booking, i) {
                return _c(
                  "li",
                  {
                    key: i,
                    staticClass:
                      "\n                list-group-item\n                border-0\n                d-flex\n                justify-content-between\n                ps-0\n                mb-2\n                border-radius-lg\n              ",
                  },
                  [
                    _c("div", { staticClass: "d-flex flex-column" }, [
                      _c(
                        "h6",
                        {
                          staticClass:
                            "mb-1 text-dark font-weight-bold text-sm",
                        },
                        [
                          _vm._v(
                            "\n                  " +
                              _vm._s(booking.user.name) +
                              "\n                "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-xs" }, [
                        _vm._v(_vm._s(booking.date)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center text-sm" },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(booking.start) +
                            " - " +
                            _vm._s(booking.end) +
                            "\n                "
                        ),
                        _vm._m(2, true),
                      ]
                    ),
                  ]
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-8" }, [
      _c("div", { staticClass: "row mt-4" }, [
        _c("div", { staticClass: "col-12 col-md-10" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table align-items-center" }, [
                _c(
                  "tbody",
                  _vm._l(_vm.bookings.data, function (booking, i) {
                    return _c("tr", { key: i }, [
                      _c("td", [
                        _c("div", { staticClass: "text-center" }, [
                          _c(
                            "p",
                            { staticClass: "text-xs font-weight-bold mb-0" },
                            [_vm._v("Date:")]
                          ),
                          _vm._v(" "),
                          _c("h6", { staticClass: "text-sm mb-0" }, [
                            _vm._v(_vm._s(booking.date)),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "text-center" }, [
                          _c(
                            "p",
                            { staticClass: "text-xs font-weight-bold mb-0" },
                            [_vm._v("Station:")]
                          ),
                          _vm._v(" "),
                          _c("h6", { staticClass: "text-sm mb-0" }, [
                            _vm._v(_vm._s(booking.station.name)),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "text-center" }, [
                          _c(
                            "p",
                            { staticClass: "text-xs font-weight-bold mb-0" },
                            [_vm._v("Time:")]
                          ),
                          _vm._v(" "),
                          _c("h6", { staticClass: "text-sm mb-0" }, [
                            _vm._v(_vm._s(booking.time)),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm._m(4, true),
                      _vm._v(" "),
                      _vm._m(5, true),
                      _vm._v(" "),
                      _vm._m(6, true),
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
                      _vm._v("Booking"),
                    ])
                  : _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Edit Booking"),
                    ]),
                _vm._v(" "),
                _vm._m(7),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
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
                            value: _vm.form.booking_date,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "booking_date", $$v)
                            },
                            expression: "form.booking_date",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("Label", [_vm._v("Game")]),
                      _vm._v(" "),
                      _c(
                        "Select",
                        {
                          model: {
                            value: _vm.form.game_id,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "game_id", $$v)
                            },
                            expression: "form.game_id",
                          },
                        },
                        _vm._l(_vm.games, function (game, i) {
                          return _c(
                            "Option",
                            {
                              key: i,
                              attrs: {
                                value: game.id,
                                clearable: "",
                                filterable: "",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(game.name) +
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
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
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
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("Label", [_vm._v("Time")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-6" },
                        [
                          _c("Label", [_vm._v("Start Time")]),
                          _vm._v(" "),
                          _c("TimePicker", {
                            staticStyle: { width: "168px" },
                            attrs: {
                              "disabled-hours": _vm.disabledHours,
                              steps: [1, 30],
                              confirm: "",
                              format: "HH:mm",
                              placeholder: "Select start time",
                            },
                            model: {
                              value: _vm.form.start_time,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "start_time", $$v)
                              },
                              expression: "form.start_time",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-6" },
                        [
                          _c("Label", [_vm._v("End Time")]),
                          _vm._v(" "),
                          _c("TimePicker", {
                            staticStyle: { width: "168px" },
                            attrs: {
                              "disabled-hours": _vm.disabledHours,
                              steps: [1, 30],
                              confirm: "",
                              format: "HH:mm",
                              placeholder: "Select end time",
                            },
                            model: {
                              value: _vm.form.end_time,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "end_time", $$v)
                              },
                              expression: "form.end_time",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
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
                _vm.editMode
                  ? _c(
                      "button",
                      {
                        staticClass: "btn bg-gradient-primary",
                        attrs: { type: "button", disabled: _vm.processing },
                        on: {
                          click: function ($event) {
                            return _vm.updateCategory(_vm.form.id)
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
                            return _vm.createBooking()
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
    return _c("div", { staticClass: "col-lg-8" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-6 mb-xl-0 mb-4" }, [
          _c("div", { staticClass: "card bg-transparent shadow-xl" }, [
            _c(
              "div",
              {
                staticClass:
                  "overflow-hidden position-relative border-radius-xl",
                staticStyle: {
                  "background-image":
                    "url('/assets/img/curved-images/curved14.jpg')",
                },
              },
              [
                _c("span", { staticClass: "mask bg-gradient-dark" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body position-relative z-index-1 p-3" },
                  [
                    _c("i", {
                      staticClass: "fas fa-wifi text-white p-2",
                      attrs: { "aria-hidden": "true" },
                    }),
                    _vm._v(" "),
                    _c("h5", { staticClass: "text-white mt-4 mb-5 pb-2" }, [
                      _vm._v(
                        "\n                  0705   007723\n                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex" }, [
                      _c("div", { staticClass: "d-flex" }, [
                        _c("div", { staticClass: "me-4" }, [
                          _c(
                            "p",
                            {
                              staticClass: "text-white text-sm opacity-8 mb-0",
                            },
                            [
                              _vm._v(
                                "\n                        Card Holder\n                      "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("h6", { staticClass: "text-white mb-0" }, [
                            _vm._v("Jack Peterson"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "p",
                            {
                              staticClass: "text-white text-sm opacity-8 mb-0",
                            },
                            [_vm._v("Expires")]
                          ),
                          _vm._v(" "),
                          _c("h6", { staticClass: "text-white mb-0" }, [
                            _vm._v("11/22"),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "\n                      ms-auto\n                      w-20\n                      d-flex\n                      align-items-end\n                      justify-content-end\n                    ",
                        },
                        [
                          _c("img", {
                            staticClass: "w-60 mt-2",
                            attrs: {
                              src: "/assets/img/logos/mastercard.png",
                              alt: "logo",
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header mx-4 p-3 text-center" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                      icon icon-shape icon-lg\n                      bg-gradient-primary\n                      shadow\n                      text-center\n                      border-radius-lg\n                    ",
                    },
                    [
                      _c("i", {
                        staticClass: "fas fa-landmark opacity-10",
                        attrs: { "aria-hidden": "true" },
                      }),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body pt-0 p-3 text-center" }, [
                  _c("h6", { staticClass: "text-center mb-0" }, [
                    _vm._v("Salary"),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-xs" }, [
                    _vm._v("Belong Interactive"),
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "horizontal dark my-3" }),
                  _vm._v(" "),
                  _c("h5", { staticClass: "mb-0" }, [_vm._v("+$2000")]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 mt-md-0 mt-4" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header mx-4 p-3 text-center" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                      icon icon-shape icon-lg\n                      bg-gradient-primary\n                      shadow\n                      text-center\n                      border-radius-lg\n                    ",
                    },
                    [
                      _c("i", {
                        staticClass: "fab fa-paypal opacity-10",
                        attrs: { "aria-hidden": "true" },
                      }),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body pt-0 p-3 text-center" }, [
                  _c("h6", { staticClass: "text-center mb-0" }, [
                    _vm._v("Paypal"),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-xs" }, [
                    _vm._v("Freelance Payment"),
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "horizontal dark my-3" }),
                  _vm._v(" "),
                  _c("h5", { staticClass: "mb-0" }, [_vm._v("$455.00")]),
                ]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 mb-lg-0 mb-4" }, [
          _c("div", { staticClass: "card mt-4" }, [
            _c("div", { staticClass: "card-header pb-0 p-3" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6 d-flex align-items-center" }, [
                  _c("h6", { staticClass: "mb-0" }, [_vm._v("Payment Method")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 text-end" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn bg-gradient-dark mb-0",
                      attrs: { href: "javascript:;" },
                    },
                    [
                      _c("i", {
                        staticClass: "fas fa-plus",
                        attrs: { "aria-hidden": "true" },
                      }),
                      _vm._v("  Add New Card"),
                    ]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-3" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6 mb-md-0 mb-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                      card card-body\n                      border\n                      card-plain\n                      border-radius-lg\n                      d-flex\n                      align-items-center\n                      flex-row\n                    ",
                    },
                    [
                      _c("img", {
                        staticClass: "w-10 me-3 mb-0",
                        attrs: {
                          src: "/assets/img/logos/mastercard.png",
                          alt: "logo",
                        },
                      }),
                      _vm._v(" "),
                      _c("h6", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n                      ****   ****   ****   7852\n                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("i", {
                        staticClass:
                          "\n                        fas\n                        fa-pencil-alt\n                        ms-auto\n                        text-dark\n                        cursor-pointer\n                      ",
                        attrs: {
                          "data-bs-toggle": "tooltip",
                          "data-bs-placement": "top",
                          title: "",
                          "aria-hidden": "true",
                          "data-bs-original-title": "Edit Card",
                          "aria-label": "Edit Card",
                        },
                      }),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Edit Card"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                      card card-body\n                      border\n                      card-plain\n                      border-radius-lg\n                      d-flex\n                      align-items-center\n                      flex-row\n                    ",
                    },
                    [
                      _c("img", {
                        staticClass: "w-10 me-3 mb-0",
                        attrs: {
                          src: "/assets/img/logos/visa.png",
                          alt: "logo",
                        },
                      }),
                      _vm._v(" "),
                      _c("h6", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n                      ****   ****   ****   5248\n                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("i", {
                        staticClass:
                          "\n                        fas\n                        fa-pencil-alt\n                        ms-auto\n                        text-dark\n                        cursor-pointer\n                      ",
                        attrs: {
                          "data-bs-toggle": "tooltip",
                          "data-bs-placement": "top",
                          title: "",
                          "aria-hidden": "true",
                          "data-bs-original-title": "Edit Card",
                          "aria-label": "Edit Card",
                        },
                      }),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Edit Card"),
                      ]),
                    ]
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
    return _c("div", { staticClass: "col-6 d-flex align-items-center" }, [
      _c("h6", { staticClass: "mb-0" }, [_vm._v("Your Pending Bookings")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-link text-dark text-sm mb-0 px-0 ms-4" },
      [
        _c("i", {
          staticClass: "fas fa-file-pdf text-lg me-1",
          attrs: { "aria-hidden": "true" },
        }),
        _vm._v("\n                  PDF\n                "),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header pb-0 p-3" }, [
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c("h6", { staticClass: "mb-2" }, [_vm._v("Previous Bookings")]),
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
          _vm._v("Value:"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "text-sm mb-0" }, [_vm._v("Kes.600")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "align-middle text-sm" }, [
      _c("div", { staticClass: "col text-center" }, [
        _c("p", { staticClass: "text-xs font-weight-bold mb-0" }, [
          _vm._v("Status:"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "text-sm mb-0" }, [_vm._v("Paid/Canceled")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "align-middle text-sm" }, [
      _c("div", { staticClass: "col text-center" }, [
        _c("p", { staticClass: "text-xs font-weight-bold mb-0" }, [
          _vm._v("Actions:"),
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "text-sm mb-0" }, [_vm._v("Export")]),
      ]),
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