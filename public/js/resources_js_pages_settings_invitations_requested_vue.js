"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_invitations_requested_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/invitations/requested.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/invitations/requested.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      approveModal: false,
      deleteModal: false,
      massDeleteModal: false,
      isProcessing: false,
      editMode: false,
      processing: false,
      deletingItem: null,
      form: {},
      invitations: {},
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
      this.getInvitations();
    },
    search: function search(value) {
      this.getInvitations();
    },
    selected: function selected(value) {
      this.getInvitations();
    },
    selectPage: function selectPage(value) {
      var _this = this;

      this.checked = [];

      if (value) {
        this.invitations.data.forEach(function (invitations) {
          _this.checked.push(invitations.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function checked(value) {
      this.url = '/api/v1/invitations/export/' + this.checked;
    }
  },
  mounted: function mounted() {
    this.getInvitations();
  },
  methods: {
    showApproveModal: function showApproveModal(invitation) {
      this.approveModal = true;
      this.form = invitation;
    },
    getInvitations: function getInvitations() {
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
                return _this2.callApi('get', "/api/v1/invitations?page=".concat(page, "\n        &total=").concat(_this2.total, "\n        &q=").concat(_this2.search, "\n        &select=").concat(_this2.selected, "\n        &sort_direction=").concat(_this2.sort_direction, "\n        &sort_field=").concat(_this2.sort_field));

              case 3:
                res = _context.sent;

                if (res.status === 200) {
                  _this2.invitations = res.data;
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
    approveRequest: function approveRequest(invitation_id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.isProcessing = true;
                _context2.next = 3;
                return _this3.callApi('get', "/api/v1/invitations/approve/".concat(invitation_id));

              case 3:
                res = _context2.sent;

                if (res.status === 200) {
                  _this3.approveModal = false;
                  _this3.isProcessing = false;

                  _this3.s('Sent invitation link');

                  _this3.getInvitations();
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

/***/ "./resources/js/pages/settings/invitations/requested.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/settings/invitations/requested.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _requested_vue_vue_type_template_id_8371e054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requested.vue?vue&type=template&id=8371e054& */ "./resources/js/pages/settings/invitations/requested.vue?vue&type=template&id=8371e054&");
/* harmony import */ var _requested_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requested.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/invitations/requested.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _requested_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _requested_vue_vue_type_template_id_8371e054___WEBPACK_IMPORTED_MODULE_0__.render,
  _requested_vue_vue_type_template_id_8371e054___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/invitations/requested.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/invitations/requested.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/settings/invitations/requested.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requested_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./requested.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/invitations/requested.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requested_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/invitations/requested.vue?vue&type=template&id=8371e054&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/settings/invitations/requested.vue?vue&type=template&id=8371e054& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_requested_vue_vue_type_template_id_8371e054___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_requested_vue_vue_type_template_id_8371e054___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_requested_vue_vue_type_template_id_8371e054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./requested.vue?vue&type=template&id=8371e054& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/invitations/requested.vue?vue&type=template&id=8371e054&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/invitations/requested.vue?vue&type=template&id=8371e054&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/invitations/requested.vue?vue&type=template&id=8371e054& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    [
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
                        _c(
                          "option",
                          {
                            attrs: {
                              selected: "selected",
                              value: "Registered",
                            },
                          },
                          [_vm._v("Registered")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { selected: "selected", value: "Pending" } },
                          [_vm._v("Pending")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { selected: "selected", value: "Sent" } },
                          [_vm._v("Sent")]
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
                        _vm.invitations.data
                          ? _c(
                              "option",
                              {
                                domProps: { value: _vm.invitations.meta.total },
                              },
                              [
                                _vm._v(
                                  "\n                    All " +
                                    _vm._s(_vm.invitations.meta.total) +
                                    "\n                  "
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
                  _vm._l(_vm.invitations.data, function (invitation, i) {
                    return _c(
                      "li",
                      {
                        key: i,
                        staticClass:
                          "\n                  list-group-item\n                  border-0\n                  bg-gray-100\n                  d-flex\n                  justify-content-between\n                  ps-0\n                  mb-2\n                  border-radius-lg\n                ",
                      },
                      [
                        _c("div", { staticClass: "col-md-7 col-6" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "\n                      border-dashed border-1 border-secondary border-radius-md\n                      p-3\n                    ",
                            },
                            [
                              _c("p", { staticClass: "text-xs mb-2" }, [
                                _vm._v(
                                  "\n                      Generated\n                      "
                                ),
                                _vm._v(" "),
                                invitation.days.i < 2 && invitation.days.d < 1
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                        a few seconds\n                      "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                invitation.days.i > 2 &&
                                invitation.days.d < 1 &&
                                invitation.days.h < 1
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(invitation.days.i) +
                                          " minuntes\n                      "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                invitation.days.h >= 1 && invitation.days.d < 1
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(invitation.days.h) +
                                          " hours\n                      "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                invitation.days.d >= 1
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(invitation.days.d) +
                                          " day\n                      "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                invitation.days.d > 1
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(invitation.days.d) +
                                          " days\n                      "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(
                                  "\n                      ago by\n                      "
                                ),
                                _c(
                                  "span",
                                  { staticClass: "font-weight-bolder" },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(invitation.email) +
                                        "\n                      "
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-xs mb-3" }, [
                                _c(
                                  "span",
                                  { staticClass: "font-weight-bolder" },
                                  [
                                    _vm._v(
                                      "\n                        (" +
                                        _vm._s(invitation.phone) +
                                        ")\n                      "
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "form-group w-70" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "input-group bg-gray-200",
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "form-control form-control-sm",
                                            attrs: {
                                              type: "text",
                                              disabled: "",
                                              onfocus: "focused(this)",
                                              onfocusout: "defocused(this)",
                                            },
                                            domProps: {
                                              value:
                                                invitation.invitation_token,
                                            },
                                          }),
                                          _vm._v(" "),
                                          _vm._m(1, true),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "clipboard",
                                          rawName: "v-clipboard:copy",
                                          value: invitation.invitation_token,
                                          expression:
                                            "invitation.invitation_token",
                                          arg: "copy",
                                        },
                                        {
                                          name: "clipboard",
                                          rawName: "v-clipboard:success",
                                          value: _vm.onCopy,
                                          expression: "onCopy",
                                          arg: "success",
                                        },
                                        {
                                          name: "clipboard",
                                          rawName: "v-clipboard:error",
                                          value: _vm.onError,
                                          expression: "onError",
                                          arg: "error",
                                        },
                                      ],
                                      staticClass:
                                        "btn btn-sm btn-outline-secondary ms-2 px-3",
                                      attrs: { href: "javascript:;" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                        Copy\n                      "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-xs mb-1" }, [
                                _vm._v("You cannot generate codes."),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        invitation.status == "Pending"
                          ? _c("div", { staticClass: "ms-auto text-end" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-link text-success text-gradient px-3 mb-0",
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.showApproveModal(invitation)
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "far fa-trash-alt me-2",
                                    attrs: { "aria-hidden": "true" },
                                  }),
                                  _vm._v(
                                    "\n                    Approve\n                  "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(2, true),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        invitation.status == "Sent"
                          ? _c("div", { staticClass: "ms-auto text-end" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-link text-success text-gradient px-3 mb-0",
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.showApproveModal(invitation)
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-plane me-2",
                                    attrs: { "aria-hidden": "true" },
                                  }),
                                  _vm._v(
                                    "\n                    Sent\n                  "
                                  ),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        invitation.status == "Registered"
                          ? _c("div", { staticClass: "ms-auto text-end" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-link text-info text-gradient px-3 mb-0",
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.showApproveModal(invitation)
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-check me-2",
                                    attrs: { "aria-hidden": "true" },
                                  }),
                                  _vm._v(
                                    "\n                    Registered\n                  "
                                  ),
                                ]
                              ),
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
        "Modal",
        {
          attrs: { width: "400" },
          model: {
            value: _vm.approveModal,
            callback: function ($$v) {
              _vm.approveModal = $$v
            },
            expression: "approveModal",
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
              _c("span", [_vm._v("Approve Confirmation")]),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c(
              "p",
              [
                _vm._v(
                  "\n        By accepting this, you are confirming\n        "
                ),
                _c("Tag", { attrs: { color: "blue" } }, [
                  _vm._v(_vm._s(_vm.form.email) + "'s "),
                ]),
                _vm._v("\n        request\n      "),
              ],
              1
            ),
            _vm._v(" "),
            _c("p", [_vm._v("This process is irriversible")]),
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
                    type: "info",
                    size: "large",
                    long: "",
                    loading: _vm.isProcessing,
                    disabled: _vm.isProcessing,
                  },
                  on: {
                    click: function ($event) {
                      return _vm.approveRequest(_vm.form.id)
                    },
                  },
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.isProcessing ? "Processing..." : "Accept") +
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
      _c("div", { staticClass: "col-md-6" }, [
        _c("h6", { staticClass: "mb-0" }, [_vm._v("Requested Accounts")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-6 d-flex justify-content-end align-items-center",
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
    return _c(
      "span",
      {
        staticClass: "input-group-text bg-transparent",
        attrs: {
          "data-bs-toggle": "tooltip",
          "data-bs-placement": "top",
          title: "",
          "data-bs-original-title": "Referral code expires in 24 hours",
          "aria-label": "Referral code expires in 24 hours",
        },
      },
      [_c("i", { staticClass: "ni ni-key-25" })]
    )
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
        _vm._v("\n                    Deny\n                  "),
      ]
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