"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_profile_account_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/profile/account.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/profile/account.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: {}
    };
  },
  mounted: function mounted() {
    this.getProfile();
  },
  methods: {
    getProfile: function getProfile() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.callApi('get', '/api/v1/users/profile');

              case 2:
                res = _context.sent;

                if (res.status === 200) {
                  _this.form = res.data;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editProfile: function editProfile() {
      this.$router.push({
        name: 'edit_my_account'
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/profile/account.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/settings/profile/account.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _account_vue_vue_type_template_id_78780e78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.vue?vue&type=template&id=78780e78& */ "./resources/js/pages/settings/profile/account.vue?vue&type=template&id=78780e78&");
/* harmony import */ var _account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/profile/account.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _account_vue_vue_type_template_id_78780e78___WEBPACK_IMPORTED_MODULE_0__.render,
  _account_vue_vue_type_template_id_78780e78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/profile/account.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/profile/account.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/settings/profile/account.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/profile/account.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/profile/account.vue?vue&type=template&id=78780e78&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/settings/profile/account.vue?vue&type=template&id=78780e78& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_template_id_78780e78___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_template_id_78780e78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_template_id_78780e78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./account.vue?vue&type=template&id=78780e78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/profile/account.vue?vue&type=template&id=78780e78&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/profile/account.vue?vue&type=template&id=78780e78&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/profile/account.vue?vue&type=template&id=78780e78& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden",
        },
        [
          _c("div", { staticClass: "row gx-4" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "col-auto my-auto" }, [
              _c("div", { staticClass: "h-100" }, [
                _c("h5", { staticClass: "mb-1" }, [
                  _vm._v(_vm._s(_vm.form.name)),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-0 font-weight-bold text-sm" }, [
                  _vm._v("CEO / Co-Founder"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3",
              },
              [
                _c(
                  "div",
                  { staticClass: "nav-wrapper position-relative end-0" },
                  [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "nav nav-pills nav-fill p-1 bg-transparent",
                        attrs: { role: "tablist" },
                      },
                      [
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link mb-0 px-0 py-1 active",
                              attrs: {
                                "data-bs-toggle": "tab",
                                href: "javascript:;",
                                role: "tab",
                                "aria-selected": "true",
                              },
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "text-dark",
                                  attrs: {
                                    width: "16px",
                                    height: "16px",
                                    viewBox: "0 0 42 42",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink":
                                      "http://www.w3.org/1999/xlink",
                                  },
                                },
                                [
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        stroke: "none",
                                        "stroke-width": "1",
                                        fill: "none",
                                        "fill-rule": "evenodd",
                                      },
                                    },
                                    [
                                      _c(
                                        "g",
                                        {
                                          attrs: {
                                            transform:
                                              "translate(-2319.000000, -291.000000)",
                                            fill: "#FFFFFF",
                                            "fill-rule": "nonzero",
                                          },
                                        },
                                        [
                                          _c(
                                            "g",
                                            {
                                              attrs: {
                                                transform:
                                                  "translate(1716.000000, 291.000000)",
                                              },
                                            },
                                            [
                                              _c(
                                                "g",
                                                {
                                                  attrs: {
                                                    transform:
                                                      "translate(603.000000, 0.000000)",
                                                  },
                                                },
                                                [
                                                  _c("path", {
                                                    staticClass:
                                                      "color-background",
                                                    attrs: {
                                                      d: "M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    staticClass:
                                                      "color-background",
                                                    attrs: {
                                                      d: "M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z",
                                                      opacity: "0.7",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    staticClass:
                                                      "color-background",
                                                    attrs: {
                                                      d: "M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z",
                                                      opacity: "0.7",
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "ms-1" }, [
                                _vm._v("App"),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link mb-0 px-0 py-1",
                              attrs: {
                                "data-bs-toggle": "tab",
                                href: "javascript:;",
                                role: "tab",
                                "aria-selected": "false",
                              },
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "text-dark",
                                  attrs: {
                                    width: "16px",
                                    height: "16px",
                                    viewBox: "0 0 40 44",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink":
                                      "http://www.w3.org/1999/xlink",
                                  },
                                },
                                [
                                  _c("title", [_vm._v("document")]),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        stroke: "none",
                                        "stroke-width": "1",
                                        fill: "none",
                                        "fill-rule": "evenodd",
                                      },
                                    },
                                    [
                                      _c(
                                        "g",
                                        {
                                          attrs: {
                                            transform:
                                              "translate(-1870.000000, -591.000000)",
                                            fill: "#FFFFFF",
                                            "fill-rule": "nonzero",
                                          },
                                        },
                                        [
                                          _c(
                                            "g",
                                            {
                                              attrs: {
                                                transform:
                                                  "translate(1716.000000, 291.000000)",
                                              },
                                            },
                                            [
                                              _c(
                                                "g",
                                                {
                                                  attrs: {
                                                    transform:
                                                      "translate(154.000000, 300.000000)",
                                                  },
                                                },
                                                [
                                                  _c("path", {
                                                    staticClass:
                                                      "color-background",
                                                    attrs: {
                                                      d: "M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z",
                                                      opacity: "0.603585379",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    staticClass:
                                                      "color-background",
                                                    attrs: {
                                                      d: "M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "ms-1" }, [
                                _vm._v("Messages"),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link mb-0 px-0 py-1",
                              attrs: {
                                "data-bs-toggle": "tab",
                                href: "javascript:;",
                                role: "tab",
                                "aria-selected": "false",
                              },
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "text-dark",
                                  attrs: {
                                    width: "16px",
                                    height: "16px",
                                    viewBox: "0 0 40 40",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink":
                                      "http://www.w3.org/1999/xlink",
                                  },
                                },
                                [
                                  _c("title", [_vm._v("settings")]),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        stroke: "none",
                                        "stroke-width": "1",
                                        fill: "none",
                                        "fill-rule": "evenodd",
                                      },
                                    },
                                    [
                                      _c(
                                        "g",
                                        {
                                          attrs: {
                                            transform:
                                              "translate(-2020.000000, -442.000000)",
                                            fill: "#FFFFFF",
                                            "fill-rule": "nonzero",
                                          },
                                        },
                                        [
                                          _c(
                                            "g",
                                            {
                                              attrs: {
                                                transform:
                                                  "translate(1716.000000, 291.000000)",
                                              },
                                            },
                                            [
                                              _c(
                                                "g",
                                                {
                                                  attrs: {
                                                    transform:
                                                      "translate(304.000000, 151.000000)",
                                                  },
                                                },
                                                [
                                                  _c("polygon", {
                                                    staticClass:
                                                      "color-background",
                                                    attrs: {
                                                      opacity: "0.596981957",
                                                      points:
                                                        "18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    staticClass:
                                                      "color-background",
                                                    attrs: {
                                                      d: "M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z",
                                                      opacity: "0.596981957",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    staticClass:
                                                      "color-background",
                                                    attrs: {
                                                      d: "M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "ms-1" }, [
                                _vm._v("Settings"),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _vm._m(2),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid py-4" }, [
      _c("div", { staticClass: "row mt-3" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-6 col-xl-4 mt-md-0 mt-4" }, [
          _c("div", { staticClass: "card h-100" }, [
            _c("div", { staticClass: "card-header pb-0 p-3" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 text-end" }, [
                  _c(
                    "a",
                    {
                      attrs: { href: "javascript:;" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.editProfile()
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fas fa-user-edit text-secondary text-sm",
                        attrs: {
                          "data-bs-toggle": "tooltip",
                          "data-bs-placement": "top",
                          title: "",
                          "aria-hidden": "true",
                          "data-bs-original-title": "Edit Profile",
                          "aria-label": "Edit Profile",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Edit Profile"),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-3" }, [
              _c("p", { staticClass: "text-sm" }, [
                _vm._v(
                  "\n              Hi, I’m " +
                    _vm._s(_vm.form.name) +
                    ", Decisions: If you can’t decide, the\n              answer is no. If two equally difficult paths, choose the one\n              more painful in the short term (pain avoidance is creating an\n              illusion of equality).\n            "
                ),
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "horizontal gray-light my-4" }),
              _vm._v(" "),
              _c("ul", { staticClass: "list-group" }, [
                _c(
                  "li",
                  { staticClass: "list-group-item border-0 ps-0 pt-0 text-sm" },
                  [
                    _c("strong", { staticClass: "text-dark" }, [
                      _vm._v("Full Name:"),
                    ]),
                    _vm._v(
                      "  \n                " +
                        _vm._s(_vm.form.name) +
                        "\n              "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "list-group-item border-0 ps-0 text-sm" },
                  [
                    _c("strong", { staticClass: "text-dark" }, [
                      _vm._v("Mobile:"),
                    ]),
                    _vm._v(
                      "  \n                " +
                        _vm._s(_vm.form.phone) +
                        "\n              "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "list-group-item border-0 ps-0 text-sm" },
                  [
                    _c("strong", { staticClass: "text-dark" }, [
                      _vm._v("Email:"),
                    ]),
                    _vm._v(
                      "  \n                " +
                        _vm._s(_vm.form.email) +
                        "\n              "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "list-group-item border-0 ps-0 text-sm" },
                  [
                    _c("strong", { staticClass: "text-dark" }, [
                      _vm._v("Username:"),
                    ]),
                    _vm._v(
                      "  \n                " +
                        _vm._s(_vm.form.username) +
                        "\n              "
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(5),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "page-header min-height-300 border-radius-xl mt-4",
        staticStyle: {
          "background-image": "url('/assets/img/curved-images/curved0.jpg')",
          "background-position-y": "50%",
        },
      },
      [_c("span", { staticClass: "mask bg-gradient-primary opacity-6" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("div", { staticClass: "avatar avatar-xl position-relative" }, [
        _c("img", {
          staticClass: "w-100 border-radius-lg shadow-sm",
          attrs: { src: "/assets/img/bruce-mars.jpg", alt: "profile_image" },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "moving-tab position-absolute nav-link",
        staticStyle: {
          padding: "0px",
          transition: "all 0.5s ease 0s",
          transform: "translate3d(0px, 0px, 0px)",
          width: "113px",
        },
      },
      [
        _c(
          "a",
          {
            staticClass: "nav-link mb-0 px-0 py-1 active",
            attrs: {
              "data-bs-toggle": "tab",
              href: "javascript:;",
              role: "tab",
              "aria-selected": "true",
            },
          },
          [_vm._v("-")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-md-6 col-xl-4" }, [
      _c("div", { staticClass: "card h-100" }, [
        _c("div", { staticClass: "card-header pb-0 p-3" }, [
          _c("h6", { staticClass: "mb-0" }, [_vm._v("Platform Settings")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-3" }, [
          _c(
            "h6",
            {
              staticClass:
                "text-uppercase text-body text-xs font-weight-bolder",
            },
            [_vm._v("\n              Account\n            ")]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "list-group" }, [
            _c("li", { staticClass: "list-group-item border-0 px-0" }, [
              _c("div", { staticClass: "form-check form-switch ps-0" }, [
                _c("input", {
                  staticClass: "form-check-input ms-auto",
                  attrs: {
                    type: "checkbox",
                    id: "flexSwitchCheckDefault",
                    checked: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass:
                      "\n                      form-check-label\n                      text-body\n                      ms-3\n                      text-truncate\n                      w-80\n                      mb-0\n                    ",
                    attrs: { for: "flexSwitchCheckDefault" },
                  },
                  [_vm._v("Email me when someone follows me")]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item border-0 px-0" }, [
              _c("div", { staticClass: "form-check form-switch ps-0" }, [
                _c("input", {
                  staticClass: "form-check-input ms-auto",
                  attrs: { type: "checkbox", id: "flexSwitchCheckDefault1" },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass:
                      "\n                      form-check-label\n                      text-body\n                      ms-3\n                      text-truncate\n                      w-80\n                      mb-0\n                    ",
                    attrs: { for: "flexSwitchCheckDefault1" },
                  },
                  [_vm._v("Email me when someone answers on my post")]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item border-0 px-0" }, [
              _c("div", { staticClass: "form-check form-switch ps-0" }, [
                _c("input", {
                  staticClass: "form-check-input ms-auto",
                  attrs: {
                    type: "checkbox",
                    id: "flexSwitchCheckDefault2",
                    checked: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass:
                      "\n                      form-check-label\n                      text-body\n                      ms-3\n                      text-truncate\n                      w-80\n                      mb-0\n                    ",
                    attrs: { for: "flexSwitchCheckDefault2" },
                  },
                  [_vm._v("Email me when someone mentions me")]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "h6",
            {
              staticClass:
                "text-uppercase text-body text-xs font-weight-bolder mt-4",
            },
            [_vm._v("\n              Application\n            ")]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "list-group" }, [
            _c("li", { staticClass: "list-group-item border-0 px-0" }, [
              _c("div", { staticClass: "form-check form-switch ps-0" }, [
                _c("input", {
                  staticClass: "form-check-input ms-auto",
                  attrs: { type: "checkbox", id: "flexSwitchCheckDefault3" },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass:
                      "\n                      form-check-label\n                      text-body\n                      ms-3\n                      text-truncate\n                      w-80\n                      mb-0\n                    ",
                    attrs: { for: "flexSwitchCheckDefault3" },
                  },
                  [_vm._v("New launches and projects")]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item border-0 px-0" }, [
              _c("div", { staticClass: "form-check form-switch ps-0" }, [
                _c("input", {
                  staticClass: "form-check-input ms-auto",
                  attrs: {
                    type: "checkbox",
                    id: "flexSwitchCheckDefault4",
                    checked: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass:
                      "\n                      form-check-label\n                      text-body\n                      ms-3\n                      text-truncate\n                      w-80\n                      mb-0\n                    ",
                    attrs: { for: "flexSwitchCheckDefault4" },
                  },
                  [_vm._v("Monthly product updates")]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item border-0 px-0 pb-0" }, [
              _c("div", { staticClass: "form-check form-switch ps-0" }, [
                _c("input", {
                  staticClass: "form-check-input ms-auto",
                  attrs: { type: "checkbox", id: "flexSwitchCheckDefault5" },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass:
                      "\n                      form-check-label\n                      text-body\n                      ms-3\n                      text-truncate\n                      w-80\n                      mb-0\n                    ",
                    attrs: { for: "flexSwitchCheckDefault5" },
                  },
                  [_vm._v("Subscribe to newsletter")]
                ),
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
    return _c("div", { staticClass: "col-md-8 d-flex align-items-center" }, [
      _c("h6", { staticClass: "mb-0" }, [_vm._v("Profile Information")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-xl-4 mt-xl-0 mt-4" }, [
      _c("div", { staticClass: "card h-100" }, [
        _c("div", { staticClass: "card-header pb-0 p-3" }, [
          _c("h6", { staticClass: "mb-0" }, [_vm._v("Conversations")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-3" }, [
          _c("ul", { staticClass: "list-group" }, [
            _c(
              "li",
              {
                staticClass:
                  "\n                  list-group-item\n                  border-0\n                  d-flex\n                  align-items-center\n                  px-0\n                  mb-2\n                ",
              },
              [
                _c("div", { staticClass: "avatar me-3" }, [
                  _c("img", {
                    staticClass: "border-radius-lg shadow",
                    attrs: {
                      src: "/assets/img/kal-visuals-square.jpg",
                      alt: "kal",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "\n                    d-flex\n                    align-items-start\n                    flex-column\n                    justify-content-center\n                  ",
                  },
                  [
                    _c("h6", { staticClass: "mb-0 text-sm" }, [
                      _vm._v("Sophie B."),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0 text-xs" }, [
                      _vm._v("Hi! I need more information.."),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-link pe-3 ps-0 mb-0 ms-auto",
                    attrs: { href: "javascript:;" },
                  },
                  [_vm._v("Reply")]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "\n                  list-group-item\n                  border-0\n                  d-flex\n                  align-items-center\n                  px-0\n                  mb-2\n                ",
              },
              [
                _c("div", { staticClass: "avatar me-3" }, [
                  _c("img", {
                    staticClass: "border-radius-lg shadow",
                    attrs: { src: "/assets/img/marie.jpg", alt: "kal" },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "\n                    d-flex\n                    align-items-start\n                    flex-column\n                    justify-content-center\n                  ",
                  },
                  [
                    _c("h6", { staticClass: "mb-0 text-sm" }, [
                      _vm._v("Anne Marie"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0 text-xs" }, [
                      _vm._v("Awesome work, can you.."),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-link pe-3 ps-0 mb-0 ms-auto",
                    attrs: { href: "javascript:;" },
                  },
                  [_vm._v("Reply")]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "\n                  list-group-item\n                  border-0\n                  d-flex\n                  align-items-center\n                  px-0\n                  mb-2\n                ",
              },
              [
                _c("div", { staticClass: "avatar me-3" }, [
                  _c("img", {
                    staticClass: "border-radius-lg shadow",
                    attrs: { src: "/assets/img/ivana-square.jpg", alt: "kal" },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "\n                    d-flex\n                    align-items-start\n                    flex-column\n                    justify-content-center\n                  ",
                  },
                  [
                    _c("h6", { staticClass: "mb-0 text-sm" }, [
                      _vm._v("Ivanna"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0 text-xs" }, [
                      _vm._v("About files I can.."),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-link pe-3 ps-0 mb-0 ms-auto",
                    attrs: { href: "javascript:;" },
                  },
                  [_vm._v("Reply")]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "\n                  list-group-item\n                  border-0\n                  d-flex\n                  align-items-center\n                  px-0\n                  mb-2\n                ",
              },
              [
                _c("div", { staticClass: "avatar me-3" }, [
                  _c("img", {
                    staticClass: "border-radius-lg shadow",
                    attrs: { src: "/assets/img/team-4.jpg", alt: "kal" },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "\n                    d-flex\n                    align-items-start\n                    flex-column\n                    justify-content-center\n                  ",
                  },
                  [
                    _c("h6", { staticClass: "mb-0 text-sm" }, [
                      _vm._v("Peterson"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0 text-xs" }, [
                      _vm._v("Have a great afternoon.."),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-link pe-3 ps-0 mb-0 ms-auto",
                    attrs: { href: "javascript:;" },
                  },
                  [_vm._v("Reply")]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "\n                  list-group-item\n                  border-0\n                  d-flex\n                  align-items-center\n                  px-0\n                ",
              },
              [
                _c("div", { staticClass: "avatar me-3" }, [
                  _c("img", {
                    staticClass: "border-radius-lg shadow",
                    attrs: { src: "/assets/img/team-3.jpg", alt: "kal" },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "\n                    d-flex\n                    align-items-start\n                    flex-column\n                    justify-content-center\n                  ",
                  },
                  [
                    _c("h6", { staticClass: "mb-0 text-sm" }, [
                      _vm._v("Nick Daniel"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0 text-xs" }, [
                      _vm._v("Hi! I need more information.."),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-link pe-3 ps-0 mb-0 ms-auto",
                    attrs: { href: "javascript:;" },
                  },
                  [_vm._v("\n                  Reply\n                ")]
                ),
              ]
            ),
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