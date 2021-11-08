"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_stations_games_all_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=script&lang=js& ***!
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      detailMode: false,
      newCover: false,
      processing: false,
      deletingItem: null,
      form: {
        cover_image: '',
        category_id: [],
        category: []
      },
      data: {
        cover_image: '',
        category_id: [],
        category: []
      },
      games: {},
      categories: {},
      category: [],
      token: '',
      total: 10,
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
      this.getGames();
    },
    search: function search(value) {
      this.getGames();
    },
    selected: function selected(value) {
      this.getGames();
    },
    selectPage: function selectPage(value) {
      var _this = this;

      this.checked = [];

      if (value) {
        this.games.data.forEach(function (game) {
          _this.checked.push(game.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function checked(value) {
      this.url = '/api/v1/games/export/' + this.checked;
    }
  },
  mounted: function mounted() {
    this.token = window.Laravel.csrfToken;
    this.getGames();
    this.getCategories();
  },
  methods: {
    closeModals: function closeModals() {
      $('#modal-default').modal('hide');
      this.resetForm();
    },
    closeModal: function closeModal() {
      $('#modal-default').modal('hide');
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.form.name = '';
      this.form.about_game = '';
      this.form.cover_image = '';
      this.form.release_date = '';
      this.form.players = '';
      this.form.category_id = [];
    },
    createModal: function createModal() {
      $('#modal-default').modal('show');
      this.editMode = false;
      this.detailMode = false;
    },
    showEditModal: function showEditModal(form) {
      this.editMode = true;
      this.detailMode = false;

      var _iterator = _createForOfIteratorHelper(form.categories),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          this.category.push(c.id);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var obj = {
        id: form.id,
        name: form.name,
        about_game: form.about_game,
        cover_image: form.cover_image,
        release_date: form.release_date,
        players: form.players,
        category_id: this.category
      };
      this.form = obj;
    },
    showDeleteModal: function showDeleteModal(game) {
      this.form = game;
      this.deleteModal = true;
    },
    showGameModal: function showGameModal(game) {
      this.data = game;
      $('#modal-default').modal('show');
      this.detailMode = true;
      this.editMode = false;
    },
    change_sort: function change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == 'asc' ? 'desc' : 'asc';
      } else {
        this.sort_field = field;
      }

      this.getGames();
    },
    isChecked: function isChecked(game_id) {
      return this.checked.includes(game_id);
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
                return _this2.callApi('get', '/api/v1/games/all/');

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
    getGames: function getGames() {
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
                return _this3.callApi('get', "/api/v1/games?page=".concat(page, "\n        &total=").concat(_this3.total, "\n        &q=").concat(_this3.search, "\n        &select=").concat(_this3.selected, "\n        &sort_direction=").concat(_this3.sort_direction, "\n        &sort_field=").concat(_this3.sort_field));

              case 3:
                res = _context2.sent;

                if (res.status === 200) {
                  _this3.games = res.data;
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
    getCategories: function getCategories() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.callApi('get', '/api/v1/categories');

              case 2:
                res = _context3.sent;

                if (res.status === 200) {
                  _this4.categories = res.data;
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    createGame: function createGame() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.processing = true;
                _context4.next = 3;
                return _this5.callApi('post', '/api/v1/games', _this5.form);

              case 3:
                res = _context4.sent;

                if (res.status === 200) {
                  _this5.s('Game created successfully');

                  _this5.closeModal();

                  _this5.getGames();

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
    updateGame: function updateGame(game_id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.processing = true;
                _context5.next = 3;
                return _this6.callApi('put', "/api/v1/games/".concat(game_id), _this6.form);

              case 3:
                res = _context5.sent;

                if (res.status == 200) {
                  _this6.closeModal();

                  _this6.getGames();

                  _this6.s('Successfully updated game');

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
    deleteGame: function deleteGame(game_id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.isDeleting = true;
                _context6.next = 3;
                return _this7.callApi('delete', "/api/v1/games/".concat(game_id));

              case 3:
                res = _context6.sent;

                if (res.status == 204) {
                  _this7.w('Game deleted');

                  _this7.checked = _this7.checked.filter(function (id) {
                    return id != game_id;
                  });
                  _this7.isDeleting = false;
                  _this7.deleteModal = false;

                  _this7.getGames();
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
                  image = _this8.form.cover_image;
                  _this8.form.cover_image = '';

                  _this8.$refs.uploads.clearFiles();
                } else {
                  image = _this8.form.cover_image;
                  _this8.form.cover_image = '';

                  _this8.$refs.uploads.clearFiles();
                }

                _context7.next = 4;
                return _this8.callApi('post', '/api/v1/games/deleteCover', {
                  image_name: image
                });

              case 4:
                res = _context7.sent;

                if (res.status !== 200) {
                  _this8.form.cover_image = image;

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
        return this.form.cover_image = "/uploads/games/all_games/".concat(res);
      }

      res = "/uploads/games/all_games/".concat(res);
      this.form.cover_image = res;
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./all.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/settings/stations/games/all.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/settings/stations/games/all.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _all_vue_vue_type_template_id_22325bd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all.vue?vue&type=template&id=22325bd4& */ "./resources/js/pages/settings/stations/games/all.vue?vue&type=template&id=22325bd4&");
/* harmony import */ var _all_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/stations/games/all.vue?vue&type=script&lang=js&");
/* harmony import */ var _all_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _all_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _all_vue_vue_type_template_id_22325bd4___WEBPACK_IMPORTED_MODULE_0__.render,
  _all_vue_vue_type_template_id_22325bd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/stations/games/all.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/stations/games/all.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/settings/stations/games/all.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./all.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./all.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/pages/settings/stations/games/all.vue?vue&type=template&id=22325bd4&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/settings/stations/games/all.vue?vue&type=template&id=22325bd4& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_template_id_22325bd4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_template_id_22325bd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_vue_vue_type_template_id_22325bd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./all.vue?vue&type=template&id=22325bd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=template&id=22325bd4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=template&id=22325bd4&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/stations/games/all.vue?vue&type=template&id=22325bd4& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header p-4" }, [
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
                    { staticClass: "badge bg-gradient-info ms-auto float-end" },
                    [_vm._v("\n                Create Game\n              ")]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-4" }, [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.games.data, function (game, i) {
              return _c("div", { key: i, staticClass: "col-md-4 mt-3 h-25" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.showGameModal(game)
                      },
                    },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "card card-background move-on-hover" },
                      [
                        _c("div", {
                          staticClass: "full-background",
                          style: {
                            backgroundImage: "url(" + game.cover_image + ")",
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body pt-12" }, [
                          _c("h4", { staticClass: "text-white" }, [
                            _vm._v(_vm._s(game.name)),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(game.about_game))]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-3" },
                            _vm._l(game.categories, function (c, i) {
                              return _c(
                                "span",
                                { key: i, staticClass: "fw-normal text-gray" },
                                [
                                  _c("Tag", { attrs: { color: c.color } }, [
                                    _vm._v(_vm._s(c.name)),
                                  ]),
                                ],
                                1
                              )
                            }),
                            0
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ])
            }),
            0
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
                      _vm._v("Create game"),
                    ])
                  : _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Edit game"),
                    ]),
                _vm._v(" "),
                _vm._m(1),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.detailMode,
                      expression: "!detailMode",
                    },
                  ],
                  staticClass: "modal-body",
                },
                [
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c("FormulateInput", {
                        attrs: {
                          type: "text",
                          required: "",
                          label: "Game Name",
                          validation: "required",
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-3" }, [
                    _c(
                      "div",
                      { staticClass: "col-8" },
                      [
                        _c("Label", [_vm._v("Choose Categories")]),
                        _vm._v(" "),
                        _c(
                          "Select",
                          {
                            attrs: { multiple: "", "max-tag-count": 2 },
                            model: {
                              value: _vm.form.category_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "category_id", $$v)
                              },
                              expression: "form.category_id",
                            },
                          },
                          _vm._l(_vm.categories.data, function (category, i) {
                            return _c(
                              "Option",
                              { key: i, attrs: { value: category.id } },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(category.name) +
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
                    { staticClass: "row mt-3" },
                    [
                      _c("FormulateInput", {
                        attrs: {
                          type: "textarea",
                          required: "",
                          validation: "required|max:100,length",
                          label: "Game Details",
                        },
                        model: {
                          value: _vm.form.about_game,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "about_game", $$v)
                          },
                          expression: "form.about_game",
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
                      _c("Label", [_vm._v("Upload Cover Image")]),
                      _vm._v(" "),
                      _c(
                        "Upload",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.editMode || _vm.newCover,
                              expression: "!editMode || newCover",
                            },
                          ],
                          ref: "uploads",
                          attrs: {
                            type: "drag",
                            action: "/api/v1/games/upload",
                            headers: {
                              "x-csrf-token": _vm.token,
                              "X-Requested-With": "XMLHttpRequest",
                            },
                            "on-success": _vm.handleSuccess,
                            "on-error": _vm.handleError,
                            format: ["jpg", "jpeg", "png"],
                            "max-size": 2048,
                            "on-format-error": _vm.handleFormatError,
                            "on-exceeded-size": _vm.handleMaxSize,
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticStyle: { padding: "20px 0" } },
                            [
                              _c("Icon", {
                                staticStyle: { color: "#3399ff" },
                                attrs: { type: "ios-cloud-upload", size: "52" },
                              }),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v("Click or drag files here to upload"),
                              ]),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.form.cover_image
                        ? _c("div", { staticClass: "demo-upload-list" }, [
                            _c("img", {
                              attrs: {
                                src: "" + _vm.form.cover_image,
                                alt: "",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "demo-upload-list-cover" },
                              [
                                _vm.editMode
                                  ? _c("Icon", {
                                      attrs: { type: "ios-trash-outline" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.deleteImage(true)
                                        },
                                      },
                                    })
                                  : _c("Icon", {
                                      attrs: { type: "ios-trash-outline" },
                                      on: { click: _vm.deleteImage },
                                    }),
                              ],
                              1
                            ),
                          ])
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-3" }, [
                    _c(
                      "div",
                      { staticClass: "col-6" },
                      [
                        _c("Label", [_vm._v("Release Date")]),
                        _vm._v(" "),
                        _c("DatePicker", {
                          attrs: { type: "date", placeholder: "Select date" },
                          model: {
                            value: _vm.form.release_date,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "release_date", $$v)
                            },
                            expression: "form.release_date",
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
                        _c("FormulateInput", {
                          attrs: {
                            type: "number",
                            required: "",
                            validation: "required",
                            label: "Game Number Of players",
                          },
                          model: {
                            value: _vm.form.players,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "players", $$v)
                            },
                            expression: "form.players",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.detailMode,
                      expression: "detailMode",
                    },
                  ],
                  staticClass: "modal-body",
                },
                [
                  _c("div", { staticClass: "card" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "card-header p-0 mx-3 mt-3 position-relative z-index-1",
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "d-block",
                            attrs: { href: "javascript:;" },
                          },
                          [
                            _c("img", {
                              staticClass: "img-fluid border-radius-lg",
                              attrs: { src: _vm.data.cover_image },
                            }),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "card-body pt-2" },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "card-title h5 d-block text-darker",
                            attrs: { href: "javascript:;" },
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.data.name) +
                                "\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.data.categories, function (c, i) {
                          return _c(
                            "span",
                            { key: i, staticClass: "fw-normal text-gray" },
                            [
                              _c("Tag", { attrs: { color: c.color } }, [
                                _vm._v(_vm._s(c.name)),
                              ]),
                            ],
                            1
                          )
                        }),
                        _vm._v(" "),
                        _c("p", { staticClass: "card-description mb-4" }, [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.data.about) +
                              "\n              "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "author align-items-center" },
                          [
                            _c("img", {
                              staticClass: "avatar shadow",
                              attrs: {
                                src: "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg",
                                alt: "...",
                              },
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "name ps-3" }, [
                              _c("span", [_vm._v("Mathew Glock")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "stats" }, [
                                _c("small", [
                                  _vm._v(_vm._s(_vm.data.created_at)),
                                ]),
                              ]),
                            ]),
                          ]
                        ),
                      ],
                      2
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.detailMode,
                      expression: "!detailMode",
                    },
                  ],
                  staticClass: "modal-footer",
                },
                [
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
                              return _vm.updateGame(_vm.form.id)
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
                              return _vm.createGame()
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
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.detailMode,
                      expression: "detailMode",
                    },
                  ],
                  staticClass: "modal-footer",
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn bg-gradient-secondary",
                      attrs: { type: "button", "data-bs-dismiss": "modal" },
                      on: { click: _vm.closeModals },
                    },
                    [_vm._v("\n            Close\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn bg-gradient-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.showEditModal(_vm.data)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.processing ? "Saving ..." : "Edit Game") +
                          "\n          "
                      ),
                    ]
                  ),
                ]
              ),
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
      _c("h5", { staticClass: "mb-2 col-8" }, [_vm._v("All Games")]),
      _vm._v(" "),
      _c("p", { staticClass: "mb-0" }, [_vm._v("List of all games")]),
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