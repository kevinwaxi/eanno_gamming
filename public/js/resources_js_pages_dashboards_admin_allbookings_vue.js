"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_dashboards_admin_allbookings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Errors/notfound.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Errors/notfound.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    goHome: function goHome() {
      this.$router.push('my_bookings');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Errors_notfound_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/Errors/notfound.vue */ "./resources/js/pages/Errors/notfound.vue");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Notfound: _pages_Errors_notfound_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isProcessing: false,
      processing: false,
      deletingItem: null,
      form: {},
      bookings: {},
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
        this.bookings.data.forEach(function (bookings) {
          _this.checked.push(bookings.id);
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
  },
  methods: {
    approveModal: function approveModal(booking) {
      var obj = {
        name: booking.user.name,
        created_at: booking.created_at,
        time: booking.booking_date,
        game: booking.game.name,
        status: booking.status
      };
      this.form = obj;
      $('#modal-default').modal('show');
    },
    getBookings: function getBookings() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var page, res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context.next = 3;
                return _this2.callApi('get', "/api/v1/bookings?page=".concat(page, "\n        &total=").concat(_this2.total, "\n        &q=").concat(_this2.search, "\n        &select=").concat(_this2.selected, "\n        &sort_direction=").concat(_this2.sort_direction, "\n        &sort_field=").concat(_this2.sort_field));

              case 3:
                res = _context.sent;

                if (res.status === 200) {
                  _this2.bookings = res.data;
                } else {
                  if (res.status === 401 || res.status === 422) {
                    for (i in res.data.errors) {
                      _this2.e(res.data.errors[i][0]);
                    }
                  } else {
                    _this2.swr();
                  }
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    approveRequest: function approveRequest(booking_id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.isProcessing = true;
                _context2.next = 3;
                return _this3.callApi('get', "/api/v1/bookings/approve/".concat(booking_id));

              case 3:
                res = _context2.sent;

                if (res.status === 200) {
                  _this3.approveModal = false;
                  _this3.isProcessing = false;

                  _this3.s('Sent booking link');

                  _this3.getBookings();
                } else {
                  if (res.status !== 422) {
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
    onCopy: function onCopy(e) {
      this.s('You just copied: ' + e.text);
    },
    onError: function onError(e) {
      this.e('Failed to copy texts');
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Errors/notfound.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/Errors/notfound.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notfound_vue_vue_type_template_id_0fbe0a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notfound.vue?vue&type=template&id=0fbe0a8c& */ "./resources/js/pages/Errors/notfound.vue?vue&type=template&id=0fbe0a8c&");
/* harmony import */ var _notfound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notfound.vue?vue&type=script&lang=js& */ "./resources/js/pages/Errors/notfound.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notfound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notfound_vue_vue_type_template_id_0fbe0a8c___WEBPACK_IMPORTED_MODULE_0__.render,
  _notfound_vue_vue_type_template_id_0fbe0a8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Errors/notfound.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboards/admin/allbookings.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/dashboards/admin/allbookings.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _allbookings_vue_vue_type_template_id_290755d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allbookings.vue?vue&type=template&id=290755d4& */ "./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=template&id=290755d4&");
/* harmony import */ var _allbookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allbookings.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _allbookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _allbookings_vue_vue_type_template_id_290755d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _allbookings_vue_vue_type_template_id_290755d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboards/admin/allbookings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Errors/notfound.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Errors/notfound.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notfound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notfound.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Errors/notfound.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notfound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allbookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./allbookings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allbookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Errors/notfound.vue?vue&type=template&id=0fbe0a8c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Errors/notfound.vue?vue&type=template&id=0fbe0a8c& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notfound_vue_vue_type_template_id_0fbe0a8c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notfound_vue_vue_type_template_id_0fbe0a8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notfound_vue_vue_type_template_id_0fbe0a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notfound.vue?vue&type=template&id=0fbe0a8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Errors/notfound.vue?vue&type=template&id=0fbe0a8c&");


/***/ }),

/***/ "./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=template&id=290755d4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=template&id=290755d4& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allbookings_vue_vue_type_template_id_290755d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allbookings_vue_vue_type_template_id_290755d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allbookings_vue_vue_type_template_id_290755d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./allbookings.vue?vue&type=template&id=290755d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=template&id=290755d4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Errors/notfound.vue?vue&type=template&id=0fbe0a8c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Errors/notfound.vue?vue&type=template&id=0fbe0a8c& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("main", { staticClass: "main-content mt-0" }, [
      _c("section", { staticClass: "my-10" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6 my-auto" }, [
              _c(
                "h1",
                {
                  staticClass:
                    "display-1 text-bolder text-gradient text-danger",
                },
                [_vm._v("\n              Error 404\n            ")]
              ),
              _vm._v(" "),
              _c("h2", [_vm._v("Erm. Page not found")]),
              _vm._v(" "),
              _c("p", { staticClass: "lead" }, [
                _vm._v(
                  "\n              We suggest you to go to the homepage while we solve this issue.\n            "
                ),
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn bg-gradient-dark mt-4",
                  attrs: { href: "#", type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.goHome()
                    },
                  },
                },
                [_vm._v("\n              Go to Homepage\n            ")]
              ),
            ]),
            _vm._v(" "),
            _vm._m(0),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 my-auto position-relative" }, [
      _c("img", {
        staticClass: "w-100 position-relative",
        attrs: {
          src: "/assets/img/illustrations/error-404.png",
          alt: "404-error",
        },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=template&id=290755d4&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboards/admin/allbookings.vue?vue&type=template&id=290755d4& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _vm.$auth.isAdmin() || _vm.$auth.isCashier()
      ? _c("div", [
          _c("div", { staticClass: "container-fluid py-4" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "mt-4" }, [
                _c("div", { staticClass: "card h-100 mb-4" }, [
                  _c("div", { staticClass: "card-header pb-0 px-3" }, [
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
                                rawName: "v-model",
                                value: _vm.search,
                                expression: "search",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "search",
                              type: "text",
                              placeholder: "Search email or phone",
                            },
                            domProps: { value: _vm.search },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
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
                            staticClass:
                              "form-select fmxw-200 d-none d-md-inline",
                            attrs: { "aria-label": "Filter by status" },
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
                            _c(
                              "option",
                              {
                                attrs: {
                                  selected: "selected",
                                  value: "Registered",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                      Verified\n                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: {
                                  selected: "selected",
                                  value: "Pending",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                      Pending\n                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: { selected: "selected", value: "Sent" },
                              },
                              [_vm._v("Rejected")]
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
                        _c("label", { attrs: { for: "select" } }, [
                          _vm._v("Show:"),
                        ]),
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
                            staticClass:
                              "form-select fmxw-200 d-none d-md-inline",
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
                            _c("option", { attrs: { value: "10" } }, [
                              _vm._v("10"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "20" } }, [
                              _vm._v("20"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "30" } }, [
                              _vm._v("30"),
                            ]),
                            _vm._v(" "),
                            _vm.bookings.data
                              ? _c(
                                  "option",
                                  {
                                    domProps: {
                                      value: _vm.bookings.meta.total,
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                      All " +
                                        _vm._s(_vm.bookings.meta.total) +
                                        "\n                    "
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
                  _c("div", { staticClass: "card-body pt-4 p-3" }, [
                    _c(
                      "ul",
                      { staticClass: "list-group" },
                      _vm._l(_vm.bookings.data, function (booking) {
                        return _c(
                          "li",
                          {
                            key: booking.id,
                            staticClass:
                              "\n                    list-group-item\n                    border-0\n                    bg-gray-100\n                    d-flex\n                    justify-content-between\n                    ps-0\n                    mb-2\n                    border-radius-lg\n                  ",
                          },
                          [
                            _c("div", { staticClass: "col-md-7 col-6" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "\n                        border-dashed\n                        border-1\n                        border-secondary\n                        border-radius-md\n                        p-3\n                      ",
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "d-flex flex-column" },
                                    [
                                      _c(
                                        "h6",
                                        { staticClass: "mb-3 text-sm" },
                                        [_vm._v(_vm._s(booking.user.name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "mb-2 text-xs" },
                                        [
                                          _vm._v(
                                            "\n                          Game:\n                          "
                                          ),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-dark font-weight-bold ms-2",
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(booking.game.name) +
                                                  "\n                          "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "mb-2 text-xs" },
                                        [
                                          _vm._v(
                                            "\n                          Date:\n                          "
                                          ),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-dark ms-2 font-weight-bold",
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(booking.date) +
                                                  " from " +
                                                  _vm._s(booking.start) +
                                                  " to\n                            " +
                                                  _vm._s(booking.end) +
                                                  " for approx\n                            "
                                              ),
                                              _c("i", [
                                                _vm._v(
                                                  _vm._s(booking.time.h) +
                                                    " hours"
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(1, true),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "mb-2 text-xs" },
                                        [
                                          _vm._v(
                                            "\n                          Approx Charges:\n                          "
                                          ),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-dark ms-2 font-weight-bold",
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(booking.time.h) +
                                                  " * 250/=.\n                          "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            booking.status === "Pending"
                              ? _c("div", { staticClass: "ms-auto text-end" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "\n                        btn btn-link\n                        text-success text-gradient\n                        px-3\n                        mb-0\n                      ",
                                      attrs: { href: "javascript:;" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.approveModal(booking)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-trash-alt me-2",
                                        attrs: { "aria-hidden": "true" },
                                      }),
                                      _vm._v(
                                        "\n                      Approved\n                    "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(2, true),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            booking.status == "Sent"
                              ? _c("div", { staticClass: "ms-auto text-end" }, [
                                  _vm._m(3, true),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            booking.status == "Registered"
                              ? _c("div", { staticClass: "ms-auto text-end" }, [
                                  _vm._m(4, true),
                                ])
                              : _vm._e(),
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
                  staticClass:
                    "modal-dialog modal- modal-dialog-centered modal-",
                  attrs: { role: "document" },
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-header p-3 pb-0" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-8 d-flex" }, [
                              _vm._m(6),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-column justify-content-center",
                                },
                                [
                                  _c("h6", { staticClass: "mb-0 text-sm" }, [
                                    _vm._v(_vm._s(_vm.form.name)),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-xs" }, [
                                    _vm._v(_vm._s(_vm.form.created_at)),
                                  ]),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _vm._m(7),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body p-3 pt-1" }, [
                          _c("h6", [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.form.name) +
                                " would like to play " +
                                _vm._s(_vm.form.game) +
                                " at\n                  " +
                                _vm._s(_vm.form.time) +
                                " for " +
                                _vm._s(_vm.form.time) +
                                ".\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-sm" }, [
                            _vm._v(
                              "\n                  Please recommend suitable time and date else accept the\n                  request\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(8),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(9),
                  ]),
                ]
              ),
            ]
          ),
        ])
      : _c("div", [_c("Notfound")], 1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h6", { staticClass: "mb-0" }, [_vm._v("Requested Bookings")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "\n                    col-md-6\n                    d-flex\n                    justify-content-end\n                    align-items-center\n                  ",
        },
        [
          _c("i", { staticClass: "far fa-calendar-alt me-2" }),
          _vm._v(" "),
          _c("small", [_vm._v("23 - 30 March 2020")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mb-2 text-xs" }, [
      _vm._v(
        "\n                          Recommendation:\n                          "
      ),
      _c("span", { staticClass: "text-dark ms-2 font-weight-bold" }, [
        _vm._v(
          "\n                            Please suggest the best time and which station to\n                            play on.\n                          "
        ),
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
        _vm._v("\n                      Edit\n                    "),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "\n                        btn btn-link\n                        text-success text-gradient\n                        px-3\n                        mb-0\n                      ",
        attrs: { href: "javascript:;" },
      },
      [
        _c("i", {
          staticClass: "fa fa-plane me-2",
          attrs: { "aria-hidden": "true" },
        }),
        _vm._v("\n                      Sent\n                    "),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-link text-info text-gradient px-3 mb-0",
        attrs: { href: "javascript:;" },
      },
      [
        _c("i", {
          staticClass: "fa fa-check me-2",
          attrs: { "aria-hidden": "true" },
        }),
        _vm._v("\n                      Registered\n                    "),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h6",
        { staticClass: "modal-title", attrs: { id: "modal-title-default" } },
        [_vm._v("\n              Type your modal title\n            ")]
      ),
      _vm._v(" "),
      _c(
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
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticClass: "avatar avatar-sm me-2",
        attrs: { src: "/assets/img/team-3.jpg", alt: "avatar image" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-4" }, [
      _c("span", { staticClass: "badge bg-gradient-info ms-auto float-end" }, [
        _vm._v("\n                      Recommendation\n                    "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex bg-gray-100 border-radius-lg p-3" },
      [
        _c("h4", { staticClass: "my-auto" }, [
          _c("span", { staticClass: "text-secondary text-sm me-1" }, [
            _vm._v("$"),
          ]),
          _vm._v("\n                    3,000\n                    "),
          _c("span", { staticClass: "text-secondary text-sm ms-1" }, [
            _vm._v(" / month "),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-outline-dark mb-0 ms-auto",
            attrs: { href: "javascript:;" },
          },
          [_vm._v("\n                    Apply\n                  ")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        { staticClass: "btn bg-gradient-primary", attrs: { type: "button" } },
        [_vm._v("\n              Save changes\n            ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-link ml-auto",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_vm._v("\n              Close\n            ")]
      ),
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