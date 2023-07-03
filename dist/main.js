/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Oswald-Regular.ttf */ "./src/fonts/Oswald-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/save.svg */ "./src/images/save.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cancel.svg */ "./src/images/cancel.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#details-container {\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.filter-orange {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.project-action-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-edit-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%; \n}\n\n.project-edit-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.project-delete-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%;\n}\n\n.project-delete-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.proj-edit-hovered {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.proj-del-hovered {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,yCAAyC;AAC3C;;AAEA;EACE,qBAAqB;EACrB,2DAAqD;EACrD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb;;;iBAGe;AACjB;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;mCACiC;AACnC;;AAEA;EACE;AACF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE;AACF;;AAEA;EACE,yDAAwC;EACxC;iCAC+B;AACjC;;AAEA;EACE,yDAA0C;EAC1C;iCAC+B;AACjC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(\"./fonts/Oswald-Regular.ttf\"), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#details-container {\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/save.svg\");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/cancel.svg\");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/delete.svg\");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.filter-orange {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.project-action-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-edit-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%; \n}\n\n.project-edit-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.project-delete-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%;\n}\n\n.project-delete-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.proj-edit-hovered {\n  background-image: url(./images/edit.svg);\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.proj-del-hovered {\n  background-image: url(./images/delete.svg);\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsAndTasks": () => (/* binding */ projectsAndTasks)
/* harmony export */ });
// --- APP DATA ---

// PROJECTs AND TASKS STORAGE
const localStorage =  window.localStorage.getItem("projectsAndTasks");
const projectsAndTasks = (localStorage != null) ? JSON.parse(localStorage) : [
  { projectName: "My Tasks", currentTasks: [], completedTasks: [] }, { projectName: "Odin", currentTasks: [], completedTasks: [] }
];

// exports



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "currentTaskList": () => (/* binding */ currentTaskList)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
// --- DOM ELEMENTS ---










// main container for the app
const body = document.getElementById("content");

// top bar
const topBar = document.createElement("div");
topBar.id = "top-bar";

// top bar title
const topBarTitle = document.createElement("h1");
topBarTitle.textContent = "Mas To Do's";
topBarTitle.id = "title-bar";
topBar.appendChild(topBarTitle);

// PROJECTS

// left side bar
const leftSideBar = document.createElement("div");
leftSideBar.id = "left-side-bar";

// project section (goes in left side bar)
const projectsContainer = document.createElement("div");
projectsContainer.id = "projects-container";
leftSideBar.appendChild(projectsContainer);

// projects list
const projectsList = document.createElement("ul");
projectsList.id = "projects-ul";
projectsContainer.appendChild(projectsList);

// function to display projects on the dom
(0,_functions__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks, projectsList);

// function to change active selected project
projectsList.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.projectClicked);

// add project button
const addProjectButton = document.createElement("li");
addProjectButton.id = "add-project";
addProjectButton.textContent = "+ Add Project";
addProjectButton.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.projectCreator);
projectsList.appendChild(addProjectButton);

// project buttons container
const projectBtns = document.createElement("div");
projectBtns.id = "project-btns-container";

// edit project name button
const editProjectBtn = document.createElement("div");
editProjectBtn.className = "project-btns filter-white";
editProjectBtn.id = "edit-btn";
editProjectBtn.title = "Edit";

// delete project button
const deleteProjectBtn = document.createElement("div");
deleteProjectBtn.className = "project-btns filter-white";
deleteProjectBtn.id = "del-btn";
deleteProjectBtn.title = "Delete";

// project button container appendages
projectBtns.appendChild(editProjectBtn);
projectBtns.appendChild(deleteProjectBtn);

// TO DOS

// to do board container
const todoBoardsContainer = document.createElement("div");
todoBoardsContainer.id = "to-dos-container";
todoBoardsContainer.style.display = "flex";

// current tasks container
const currentTasksContainer = document.createElement("div");
currentTasksContainer.id = "current-tasks-container";
currentTasksContainer.style.display = "block";
todoBoardsContainer.appendChild(currentTasksContainer);

// current tasks title
const currentTasksTitle = document.createElement("h2");
currentTasksTitle.className = "active-pane-title";
currentTasksTitle.textContent = "Tasks";
currentTasksContainer.appendChild(currentTasksTitle);

// current tasklist
const currentTaskListContainer = document.createElement("div");
currentTaskListContainer.id = "current-task-list-container";
currentTasksContainer.appendChild(currentTaskListContainer);

// add tasks container
const addTaskContainer = document.createElement("div");
addTaskContainer.id = "add-taskbar";
currentTaskListContainer.appendChild(addTaskContainer);

// add tasks input bar
const addTasksInput = document.createElement("input");
addTasksInput.id = "task-input-bar";
addTasksInput.placeholder = "Add a task";
addTasksInput.addEventListener("keypress", function (e) {
  //if user presses enter on keyboard
  if (e.key === "Enter") {
    // run taskCreator and use value entered in above input element
    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.taskCreator)(addTasksInput.value);
    // clear addTasksInput
    addTasksInput.value = "";
  }
});

addTaskContainer.appendChild(addTasksInput);

// add tasks submit button
const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "+";
addTaskBtn.type = "submit";
addTaskBtn.id = "add-task-btn";
addTaskBtn.addEventListener("click", function (e) {
  // get input id for task-bar
  const input = document.getElementById("task-input-bar");
  // run taskCreator and use value entered in above input element
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.taskCreator)(input.value);
  // clear input
  input.value = "";
});

addTaskContainer.appendChild(addTaskBtn);

// current tasks unordered list
const currentTaskList = document.createElement("div");
currentTaskList.id = "current-tasks-ul";
currentTaskListContainer.appendChild(currentTaskList);

// current tasks list item
const addTaskListItem = document.createElement("li");
addTaskListItem.className = "add-task-li";

// display all tasks
(0,_functions__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(_functions__WEBPACK_IMPORTED_MODULE_1__.activeProject, _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks, currentTaskList);

// function to change active selected task
currentTaskList.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.taskClicked);

// DETAILS

// details board container
const detailsContainer = document.createElement("div");
detailsContainer.id = "details-container";
detailsContainer.style.display = "none";

// details title
const detailsTitle = document.createElement("h2");
detailsTitle.className = "active-pane-title";
detailsTitle.textContent = "Details";
detailsContainer.appendChild(detailsTitle);

// details pane
const details = document.createElement("div");
details.id = "details";
detailsContainer.appendChild(details);

// details project selector container
const projectSelectorContainer = document.createElement("div");
projectSelectorContainer.id = "project-selector";
details.appendChild(projectSelectorContainer);

// details project selector title
const selectProjectTitle = document.createElement("h3");
selectProjectTitle.textContent = "Project";
projectSelectorContainer.appendChild(selectProjectTitle);

// details project selector
const selectProject = document.createElement("select");
projectSelectorContainer.appendChild(selectProject);

// details task input container
const taskInputContainer = document.createElement("div");
taskInputContainer.id = "edit-task-name";
details.appendChild(taskInputContainer);

// details task title
const taskInputTitle = document.createElement("h3");
taskInputTitle.textContent = "Task";
taskInputContainer.appendChild(taskInputTitle);

// details task input
const taskInput = document.createElement("input");
taskInput.id = "task-input-detail";
taskInput.value = "Placeholder";
taskInputContainer.appendChild(taskInput);

// details date due container
const dateDueContainer = document.createElement("div");
dateDueContainer.id = "date-due";
details.appendChild(dateDueContainer);

// details date due selector title
const dateDueTitle = document.createElement("h3");
dateDueTitle.textContent = "Date Due";
dateDueContainer.appendChild(dateDueTitle);

// details date due input
const dateDueSelector = document.createElement("input");
dateDueSelector.type = "date";
dateDueContainer.appendChild(dateDueSelector);

// details time due container
const timeDueContainer = document.createElement("div");
timeDueContainer.id = "time-due";
details.appendChild(timeDueContainer);

// details time due selector title
const timeDueTitle = document.createElement("h3");
timeDueTitle.textContent = "Time Due";
timeDueContainer.appendChild(timeDueTitle);

// details time due input
const timeDueSelector = document.createElement("input");
timeDueSelector.type = "time";
timeDueContainer.appendChild(timeDueSelector);

// task priority container
const taskPriorityContainer = document.createElement("div");
taskPriorityContainer.id = "task-priority";
details.appendChild(taskPriorityContainer);

// task priority title
const taskPriorityTitle = document.createElement("h3");
taskPriorityTitle.textContent = "Task Priority";
taskPriorityContainer.appendChild(taskPriorityTitle);

// task priority selector
const taskPrioritySelector = document.createElement("select");
taskPriorityContainer.appendChild(taskPrioritySelector);

// none priority option
const noPriority = document.createElement("option");
noPriority.text = "None";
taskPrioritySelector.appendChild(noPriority);

// low priority option
const lowPriority = document.createElement("option");
lowPriority.text = "Low";
taskPrioritySelector.appendChild(lowPriority);

// medium priority option
const medPriority = document.createElement("option");
medPriority.text = "Medium";
taskPrioritySelector.appendChild(medPriority);

// high priority option
const highPriority = document.createElement("option");
highPriority.text = "High";
taskPrioritySelector.appendChild(highPriority);

// details description container
const taskDescriptionContainer = document.createElement("div");
taskDescriptionContainer.id = "task-description";
details.appendChild(taskDescriptionContainer);

// details description title
const taskDescriptionTitle = document.createElement("h3");
taskDescriptionTitle.textContent = "Description";
taskDescriptionContainer.appendChild(taskDescriptionTitle);

// details description textarea
const taskDescription = document.createElement("textarea");
taskDescription.id = "task-description-textarea";
taskDescription.placeholder = "Enter description of task (Maximum of 280 characters).";
taskDescription.maxLength = 280;
taskDescriptionContainer.appendChild(taskDescription);

// details buttons container
const detailsBtnContainer = document.createElement("div");
detailsBtnContainer.id = "details-btn-container";
details.appendChild(detailsBtnContainer);

// details save btn
const detailsSaveBtn = document.createElement("div");
detailsSaveBtn.id = "save-btn";
detailsSaveBtn.title = "Save Changes";
detailsBtnContainer.appendChild(detailsSaveBtn);

// details cancel btn
const detailsCancelBtn = document.createElement("div");
detailsCancelBtn.id = "cancel-btn";
detailsCancelBtn.title = "Cancel Changes";
detailsCancelBtn.addEventListener("click", function(){
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.cancelDetails)();
})
detailsBtnContainer.appendChild(detailsCancelBtn);

// details delete btn
const detailsDeleteBtn = document.createElement("div");
detailsDeleteBtn.id = "delete-btn";
detailsDeleteBtn.title = "Delete Task";
detailsBtnContainer.appendChild(detailsDeleteBtn);
todoBoardsContainer.appendChild(detailsContainer);

// dom #content appends
body.appendChild(topBar);
body.appendChild(leftSideBar);
body.appendChild(todoBoardsContainer);




/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "cancelDetails": () => (/* binding */ cancelDetails),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "prevProject": () => (/* binding */ prevProject),
/* harmony export */   "projectClicked": () => (/* binding */ projectClicked),
/* harmony export */   "projectCreator": () => (/* binding */ projectCreator),
/* harmony export */   "saveDetails": () => (/* binding */ saveDetails),
/* harmony export */   "taskClicked": () => (/* binding */ taskClicked),
/* harmony export */   "taskCreator": () => (/* binding */ taskCreator)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// --- APP FUNCTIONS ---



// date functions
// create newDate based on current date
function currentDate() {
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", {
    hour12: false,
    timeStyle: "short",
  });

  // function to add two digit padding
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  const currentYear = date.getFullYear();
  const currentMonth = padTo2Digits(date.getMonth() + 1);
  const currentDay = date.getDate();
  currentYear.toString();
  const yearMonthDay = `${currentYear}-${currentMonth}-${currentDay}`;
  return { yearMonthDay, time };
}

// automatically resizes select options and input elements
function resizeInput() {
  let input = document.querySelector("#task-input-detail"); // Get the input element with the id "task-input-detail"
  let textWidth = getTextWidth(input.value, getComputedStyle(input).font); // Get the width of the input value
  input.style.width = textWidth + "px"; // Set the width of the input element to the calculated text width
}

function getTextWidth(text, font) {
  let canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  let context = canvas.getContext("2d");
  context.font = font;
  let metrics = context.measureText(text);
  return metrics.width;
}

// find project index
function projectIndex(project) {
  const index = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex((e) => e.projectName === project);
  return index;
}

// creates projects in database
function projectCreator() {
  // prompt user for project name
  const projectName = prompt("Enter project name:");
  // take project name and check if project name is empty string or an existing project
  // .some() is used on array to search if projectName already exists
  if (
    projectName != null &&
    !_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.some((e) => e.projectName === projectName)
  ) {
    // now create a new object in the database with the new project name
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.push({
      projectName: projectName,
      currentTasks: [],
      completedTasks: [],
    });
    // save newly created project to localStorage
    localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
  } else {
    return;
  }
  // reload the document
  location.reload();
}

// function to rename projects
function renameProject(project) {
  // find the project index in the database
  const index = projectIndex(project);
  // grab list item that matches project name
  const listItem = document.querySelector(
    'li[data-project-name="' + project + '"]'
  );
  // set list item's textContent as a variable
  const itemText = listItem.textContent;
  // clear list item's textContent
  listItem.textContent = "";
  // create input element for user to rename project
  const input = document.createElement("input");
  input.className = "rename-project";
  input.type = "text";
  // set input's starting value to project name
  input.value = itemText;
  // listen for enter key press
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      // set new value for list item's textContent based on users input
      listItem.textContent = input.value;
      // update database through path to matched project name
      _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[index].projectName = listItem.textContent;
      // update localStorage
      localStorage.setItem(
        "projectsAndTasks",
        JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks)
      );
      // reload page
      location.reload();
    }
  });

  listItem.appendChild(input);
  input.focus();
}

// function to delete projects
function deleteProject(project) {
  // find index of projectName
  const index = projectIndex(project);
  // target location of project
  _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[index].projectName;
  // splice project out of database (confirm)
  let deleteConfirmation = prompt(
    `Are you sure you would like to delete project: ${_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[index].projectName}? This will delete all tasks within this project as well! (y/n)`
  );
  if (deleteConfirmation === "y") {
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.splice(index, 1);
    // update the localStorage
    localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
    // reload page
    location.reload();
  } else {
    return;
  }
}

// variable to select specific project
const activeProjectLocalStorage = window.localStorage.getItem("activeProject");
let prevProject = null;
let activeProject =
  activeProjectLocalStorage != null ? activeProjectLocalStorage : null;

// function to switch which project is active
const projectClicked = (e) => {
  // check to see if element clicked is a <li> (list item)
  if (e.target.nodeName === "LI") {
    // add .active class to element clicked
    e.target.classList.add("active-project");
    activeProject = e.target;
    localStorage.setItem("activeProject", activeProject.textContent);
    // check to see if there is a previous project that was active
    if (prevProject !== null) {
      // removes active class from the element
      prevProject.classList.remove("active-project");
    }
    // set prevProject as the clicked HTMLIElement
    prevProject = e.target;
  }
};

// displays projects onto the DOM
function displayProjects(arr, parentNode) {
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // create list item for project
    const addProject = document.createElement("li");
    // give it class used for added projects
    addProject.className = "added-projects";
    // set the text content to the project name found in this iteration
    addProject.textContent = arr[i].projectName;
    // set a data attribute for it
    addProject.dataset.projectName = arr[i].projectName;
    // create conditional to check if default task is matched
    if (arr[i].projectName === activeProject) {
      // set default project to active
      addProject.classList.add("active-project");
      // set variable that monitors active projects to default project
      prevProject = addProject;
    }
    // add event listener to include tasks for the project
    addProject.addEventListener("click", function (e) {
      // create variable to store project name clicked
      let project = e.target.textContent;
      // use above variable as arg for displayTasks()
      displayTasks(project, _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks, _dom__WEBPACK_IMPORTED_MODULE_1__.currentTaskList);
    });
    // project action button container
    const projectActionBtnContainer = document.createElement("div");
    projectActionBtnContainer.className = "project-action-btn-container";

    // project rename button
    const projectEditBtn = document.createElement("div");
    projectEditBtn.title = "Rename Project";
    projectEditBtn.className = "project-edit-btn";
    projectEditBtn.addEventListener("click", function (e) {
      const project = e.target.parentNode.parentNode.textContent;
      renameProject(project);
    });

    // project deletion button
    const projectDeleteBtn = document.createElement("div");
    projectDeleteBtn.title = "Delete Project";
    projectDeleteBtn.className = "project-delete-btn";
    projectDeleteBtn.addEventListener("click", function (e) {
      const project = e.target.parentNode.parentNode.textContent;
      deleteProject(project);
    });

    // append project action buttons
    projectActionBtnContainer.appendChild(projectEditBtn);
    projectActionBtnContainer.appendChild(projectDeleteBtn);
    addProject.appendChild(projectActionBtnContainer);

    // mouse in and out event listeners for hover color change status
    addProject.addEventListener("mouseenter", () => {
      projectEditBtn.classList.add("proj-edit-hovered");
      projectDeleteBtn.classList.add("proj-del-hovered");
    });
    addProject.addEventListener("mouseleave", () => {
      projectEditBtn.classList.remove("proj-edit-hovered");
      projectDeleteBtn.classList.remove("proj-del-hovered");
    });
    // append newly added project to specified node
    parentNode.appendChild(addProject);
  }
}

// creates tasks
function taskCreator(task) {
  // create variable to search database array for project that is currently active
  const projectExists = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.some(
    (e) => e.projectName === prevProject.textContent
  );
  // find index of project found in database
  const projectIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex(
    (e) => e.projectName === prevProject.textContent
  );

  // create newTask object to later push to projectsAndTasks array
  let newTask = {
    task: task,
    dateCreated: new Date(),
    dateDue: currentDate().yearMonthDay,
    timeDue: currentDate().time,
    priority: "High",
    desc: "",
  };
  // push newly created task to correct index of projectsAndTasks in the currentTasks property
  _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.push(newTask);
  // reload the document
  location.reload();
  // save to localStorage to keep data after page reloads
  return localStorage.setItem(
    "projectsAndTasks",
    JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks)
  );
}

// variable to select specific project
let prevTask = null; // declare prevTask at a higher scope level

const taskClicked = (e) => {
  // check to see if task clicked has active-task as a class name
  if (e.target.className == "task-list-item active-task") {
    // reload the page so new applications of editDetails() can run
    window.location.reload();
  }

  if (e.target.nodeName === "LI") {
    e.target.classList.add("active-task");
    if (prevTask !== null) {
      prevTask.classList.remove("active-task");
    }
    prevTask = e.target;
  }
  if (e.target.style.textDecoration != "line-through") {
    editDetails(e.target);
  }
};

function displayTasks(project, arr, parentNode) {
  // first find the project name in the array
  const projectIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex(
    (e) => e.projectName === project
  );
  // create empty array for current tasks
  const tasks = [];

  // extracts tasks from 'currentTasks' property of an object in the 'arr' array and pushes into the tasks array
  if (projectIndex != -1) {
    Object.values(arr[projectIndex].currentTasks).forEach(function (e) {
      if (arr[projectIndex].currentTasks != undefined) {
        // push new task into newly created array
        tasks.push(e.task);
      }
    });
    Object.values(arr[projectIndex].completedTasks).forEach(function (e) {
      if (arr[projectIndex].completedTasks != undefined) {
        // push new task into newly created array
        tasks.push(e.task);
      }
    });
  }

  // reset the contents of the parentNode argument
  parentNode.innerHTML = "";

  // for loop to create tasks, checkboxes and add classes
  for (let i = 0; i < tasks.length; i++) {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-list-item-container";

    const actionBtnContainer = document.createElement("div");
    actionBtnContainer.className = "task-action-btn-container";

    const listItem = document.createElement("li");
    listItem.className = "task-list-item";
    listItem.textContent = tasks[i];
    taskContainer.appendChild(listItem);

    const completeBtn = document.createElement("input");
    completeBtn.className = "task-complete-btn";
    completeBtn.type = "checkbox";
    completeBtn.title = "Complete Task";
    // loop through completed tasks and add strikethrough and checked box to tasks that match current task iteration
    for (
      let j = 0;
      j < _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.length;
      j++
    ) {
      if (
        _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks[j].task.includes(tasks[i])
      ) {
        listItem.style.textDecoration = "line-through";
        completeBtn.checked = true;
      }
    }
    // event listener for completion of task
    completeBtn.addEventListener("click", function (e) {
      const task = e.target.parentNode.parentNode;
      if (completeBtn.checked) {
        // manipulate the DOM element of task to include strikethrough of text
        task.style.textDecoration = "line-through";
        completeTask(task.textContent, projectIndex);
      } else {
        task.style.textDecoration = "";
        unCompleteTask(task.textContent, projectIndex);
      }
    });
    actionBtnContainer.appendChild(completeBtn);
    taskContainer.appendChild(actionBtnContainer);
    parentNode.appendChild(taskContainer);
  }
}

// complete task function
function completeTask(taskName, projectIndex) {
  const taskIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.findIndex(
    (e) => e.task === taskName
  );
  // find the current task in the database
  const completedTask = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[taskIndex];
  // move the current task into the completedTasks array of database
  _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.push(completedTask);
  // remove the task from current tasks
  _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.splice(
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.indexOf(completedTask),
    1
  );
  // update the localStorage
  localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
  // reload the page
  location.reload();
}

function unCompleteTask(taskName, projectIndex) {

  const taskIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.findIndex(
    (e) => e.task === taskName
  );
  // need to select the respective DOM element...
  // find the completed task in the database
  const unCompletedTask =
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks[taskIndex];
  // move the completed task into the currentTasks array of database
  _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.push(unCompletedTask);
  // remove the task from completed tasks
  _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.splice(
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.indexOf(unCompletedTask),
    1
  );
  // update the localStorage
  localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
  // reload the page
  location.reload();
}

function editDetails(str) {
  // Get the details container element and set it to flex
  const querySelected = document.getElementById("details-container");
  querySelected.style.display = "flex";

  // create variable to grab task with .active-task class name
  const showOrHide = document.getElementsByClassName("active-task");

  // If there is an active task, show the details panel
  if (showOrHide.length > 0) {
    const taskTitle = str.textContent;

    // find the object containing the task provided as an argument (need to have this search completed tasks as well)

    // create variable to search database for task
    let taskObject = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.flatMap((project) => project.currentTasks) // flatten the nested array of tasks
      .filter((task) => task.task === taskTitle); // filter the tasks by task name
    if (taskObject == "") {
      taskObject = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.flatMap((project) => project.completedTasks) // flatten the nested array of tasks
        .filter((task) => task.task === taskTitle);
    }
    const projectWithTask = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.map((project) => {
        // For each project, we are going to find a task that matches the taskTitle
        const task =
          project.currentTasks.find(
            (task) => task.task === taskTitle // Check if the task's title matches the taskTitle we are looking for
          ) || project.completedTasks.find((task) => task.task === taskTitle);
        // If we found a matching task, we create an object with the project name and the task
        // If we didn't find a matching task, we return null
        return task ? { projectName: project.projectName, task } : null;
      })
      // We filter out any null values from the array, keeping only the projects that have a matching task
      .filter((result) => result !== null);

    // Now, we check if we found any projects with a matching task
    // If we did, we take the project name of the first project in the array
    // If we didn't find any projects, we set the projectName to null
    const projectName =
      projectWithTask.length > 0 ? projectWithTask[0].projectName : null;

    //project
    // need to display all projects
    const projectsObject = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.flatMap(
      (project) => project.projectName
    );

    // Find the HTML element that represents the select element for project selection
    const projectSelector = document.querySelector(
      "#project-selector > select"
    );

    // check to see if projectSelector does not have options already filled in
    if (projectSelector.className != "filled") {
      // Loop through the projectsObject list to create options for the select element
      for (let i = 0; i < projectsObject.length; i++) {
        // Create a new option element
        const option = document.createElement("option");

        // Set the text of the option to the project name at the current index
        option.text = projectsObject[i];

        // Check if the text of the option matches the projectName we want to select
        if (option.text === projectName) {
          // If there is a match, set the option as selected
          option.selected = "selected";
        }
        projectSelector.classList.add("filled");
        // Append the option to the projectSelector select element
        projectSelector.appendChild(option);
      }
    }

    // options for priority select element
    let prioritySelect = document.querySelector("#task-priority > select");
    const priorityOptions = prioritySelect.options;
    for (let i = 0; i < priorityOptions.length; i++) {
      if (priorityOptions[i].textContent === taskObject[0].priority) {
        priorityOptions[i].selected = "selected";
      }
    }

    // OBJECT DATA

    // project
    const projectIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex(
      (e) => e.projectName === projectName
    );

    // task
    let task = document.querySelector("#task-input-detail");
    task.value = taskObject[0].task;
    resizeInput();
    const taskIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex]?.currentTasks?.findIndex(
      (e) => e.task === task.value
    );

    // dateCreated
    let dateCreated = taskObject[0].dateCreated;

    // dateDue
    let dateDue = document.querySelector("#date-due > input[type=date]");
    dateDue.value = taskObject[0].dateDue;

    // timeDue
    let timeDue = document.querySelector("#time-due > input[type=time]");
    timeDue.value = taskObject[0].timeDue;

    // priority
    let priority = document.querySelector("#task-priority > select");
    priority.value = taskObject[0].priority;

    // desc
    let desc = document.querySelector("#task-description-textarea");
    desc.value = taskObject[0].desc;

    // save button event listener
    let saveBtn = document.querySelector("#save-btn");
    saveBtn.addEventListener("click", function () {
      saveDetails(
        projectSelector.value,
        task.value,
        dateCreated,
        dateDue.value,
        timeDue.value,
        priority.value,
        desc.value,
        projectName,
        taskIndex
      );
    });

    // delete btn event listener
    let deleteBtn = document.querySelector("#delete-btn");
    deleteBtn.addEventListener("click", function () {
      deleteDetails(projectIndex, taskIndex);
    });
  } else if (showOrHide.length === 0) {
    querySelected.style.display = "none";
  }
}

function saveDetails(
  project,
  task,
  dateCreated,
  dateDue,
  timeDue,
  priority,
  desc,
  projectName,
  originalTaskIndex
) {
  // section for tasks that have not had their project changed
  if (project === projectName) {
    // find project in projectsAndTask array
    const projectIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex(
      (e) => e.projectName === project
    );

    // update the , date due, time due, priority, and description in the array
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[originalTaskIndex].task = task;
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[originalTaskIndex].dateDue =
      dateDue;
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[originalTaskIndex].timeDue =
      timeDue;
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[originalTaskIndex].priority =
      priority;
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[originalTaskIndex].desc = desc;

    // update the localStorage
    localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
  } else {
    // if project selected is different than task's original project...
    // make sure to get original project name index for later deletion
    const oldProjectIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex(
      (e) => e.projectName === projectName
    );

    // find out the index of the projectName in projectsAndTasks that matches `project` (the new project selected's name)
    const newProjectIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex(
      (e) => e.projectName === project
    );

    // create newTask object to later push to projectsAndTasks array
    let newTask = {
      task: task,
      dateCreated: new Date(),
      dateDue: dateDue,
      timeDue: timeDue,
      priority: priority,
      desc: desc,
    };
    // push newly created task to correct index of projectsAndTasks in the currentTasks property
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[newProjectIndex].currentTasks.push(newTask);

    // delete the old current task
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[oldProjectIndex].currentTasks.splice(originalTaskIndex, 1);

    // update the localStorage
    localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
  }

  // reload the page
  location.reload();
}

function cancelDetails() {
  const querySelected = document.getElementById("details-container");
  querySelected.style.display = "none";
}

function deleteDetails(projectIndex, taskIndex) {
  let task = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex]?.currentTasks[taskIndex]?.task;
  let deleteConfirmation = prompt(
    `Are you sure you would like to delete task: ${task}? (y/n)`
  );
  if (deleteConfirmation === "y") {
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.splice(taskIndex, 1);
    // update the localStorage
    localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
    location.reload();
  } else {
    return;
  }
}

// exports











/***/ }),

/***/ "./src/fonts/Oswald-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Oswald-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e815068d369177121fd8.ttf";

/***/ }),

/***/ "./src/images/cancel.svg":
/*!*******************************!*\
  !*** ./src/images/cancel.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4921acda7402550d70e.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3270f2c93c8c138fa6cc.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b4bbee2e91b8855115c.svg";

/***/ }),

/***/ "./src/images/save.svg":
/*!*****************************!*\
  !*** ./src/images/save.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60e32a3f51d4e174b563.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/data.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDRDQUE0QyxtSEFBc0M7QUFDbEYsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsZ0RBQWdELGNBQWMsZ0RBQWdELEdBQUcsZ0JBQWdCLDRCQUE0QiwwRUFBMEUsd0JBQXdCLHVCQUF1QixHQUFHLFFBQVEsY0FBYyxvQkFBb0IsR0FBRyxjQUFjLGtCQUFrQix5RkFBeUYsR0FBRyxjQUFjLGlCQUFpQix3Q0FBd0MsaUJBQWlCLGlCQUFpQixzQkFBc0IsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsb0JBQW9CLGlCQUFpQiw0QkFBNEIsaUJBQWlCLEdBQUcsdUJBQXVCLGlCQUFpQix1Q0FBdUMsaUJBQWlCLGtCQUFrQixtQ0FBbUMsR0FBRyw4QkFBOEIsWUFBWSxHQUFHLGtDQUFrQyw4QkFBOEIsaUJBQWlCLGVBQWUsR0FBRyxrQkFBa0Isa0JBQWtCLGtDQUFrQyxnQkFBZ0IsR0FBRyxxQkFBcUIsZUFBZSxHQUFHLHdCQUF3Qix3Q0FBd0MsaUJBQWlCLDJCQUEyQixZQUFZLEdBQUcsY0FBYyxvQ0FBb0MsaUJBQWlCLHVCQUF1QixrQkFBa0IsMkJBQTJCLG1CQUFtQixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxpQkFBaUIsaUJBQWlCLG1CQUFtQixHQUFHLHNDQUFzQyxpQkFBaUIsR0FBRyxrQ0FBa0Msa0JBQWtCLEdBQUcsY0FBYyxlQUFlLGtCQUFrQixpQkFBaUIsR0FBRyw0QkFBNEIsa0JBQWtCLHNCQUFzQixHQUFHLGVBQWUsaUJBQWlCLGdCQUFnQixzRUFBc0UsR0FBRyxpQkFBaUIsaUJBQWlCLGdCQUFnQixzRUFBc0UsR0FBRyxpQkFBaUIsaUJBQWlCLGdCQUFnQixzRUFBc0UsK0JBQStCLEdBQUcsbUNBQW1DLDBCQUEwQixpQkFBaUIscUJBQXFCLG9CQUFvQixrQkFBa0IsbUNBQW1DLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyx3QkFBd0IsaUJBQWlCLHVCQUF1QixtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0Isb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLG1CQUFtQix3R0FBd0csR0FBRyxvQkFBb0IseUdBQXlHLHFCQUFxQixtQkFBbUIsR0FBRyxtQ0FBbUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyx1QkFBdUIsaUJBQWlCLGdCQUFnQixnQ0FBZ0MsR0FBRyw2QkFBNkIseUdBQXlHLHlCQUF5QixpQkFBaUIsZ0JBQWdCLCtCQUErQixHQUFHLCtCQUErQix5R0FBeUcsd0JBQXdCLHNFQUFzRSxzR0FBc0csR0FBRyx1QkFBdUIsc0VBQXNFLHNHQUFzRyxHQUFHLCtCQUErQixvQkFBb0IscUJBQXFCLGtCQUFrQixtQ0FBbUMsR0FBRyxxQkFBcUIsMEJBQTBCLG9CQUFvQixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxnQ0FBZ0Msa0JBQWtCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGdDQUFnQyxjQUFjLGdEQUFnRCxHQUFHLGdCQUFnQiw0QkFBNEIsOERBQThELHdCQUF3Qix1QkFBdUIsR0FBRyxRQUFRLGNBQWMsb0JBQW9CLEdBQUcsY0FBYyxrQkFBa0IseUZBQXlGLEdBQUcsY0FBYyxpQkFBaUIsd0NBQXdDLGlCQUFpQixpQkFBaUIsc0JBQXNCLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLG9CQUFvQixpQkFBaUIsNEJBQTRCLGlCQUFpQixHQUFHLHVCQUF1QixpQkFBaUIsdUNBQXVDLGlCQUFpQixrQkFBa0IsbUNBQW1DLEdBQUcsOEJBQThCLFlBQVksR0FBRyxrQ0FBa0MsOEJBQThCLGlCQUFpQixlQUFlLEdBQUcsa0JBQWtCLGtCQUFrQixrQ0FBa0MsZ0JBQWdCLEdBQUcscUJBQXFCLGVBQWUsR0FBRyx3QkFBd0Isd0NBQXdDLGlCQUFpQiwyQkFBMkIsWUFBWSxHQUFHLGNBQWMsb0NBQW9DLGlCQUFpQix1QkFBdUIsa0JBQWtCLDJCQUEyQixtQkFBbUIsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsaUJBQWlCLGlCQUFpQixtQkFBbUIsR0FBRyxzQ0FBc0MsaUJBQWlCLEdBQUcsa0NBQWtDLGtCQUFrQixHQUFHLGNBQWMsZUFBZSxrQkFBa0IsaUJBQWlCLEdBQUcsNEJBQTRCLGtCQUFrQixzQkFBc0IsR0FBRyxlQUFlLGlCQUFpQixnQkFBZ0IsaURBQWlELEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsbURBQW1ELEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsbURBQW1ELCtCQUErQixHQUFHLG1DQUFtQywwQkFBMEIsaUJBQWlCLHFCQUFxQixvQkFBb0Isa0JBQWtCLG1DQUFtQyxHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcsd0JBQXdCLGlCQUFpQix1QkFBdUIsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLG9CQUFvQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxtQkFBbUIsd0dBQXdHLEdBQUcsb0JBQW9CLHlHQUF5RyxxQkFBcUIsbUJBQW1CLEdBQUcsbUNBQW1DLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsdUJBQXVCLGlCQUFpQixnQkFBZ0IsZ0NBQWdDLEdBQUcsNkJBQTZCLHlHQUF5Ryx5QkFBeUIsaUJBQWlCLGdCQUFnQiwrQkFBK0IsR0FBRywrQkFBK0IseUdBQXlHLHdCQUF3Qiw2Q0FBNkMsc0dBQXNHLEdBQUcsdUJBQXVCLCtDQUErQyxzR0FBc0csR0FBRywrQkFBK0Isb0JBQW9CLHFCQUFxQixrQkFBa0IsbUNBQW1DLEdBQUcscUJBQXFCLDBCQUEwQixvQkFBb0IsR0FBRywyQkFBMkIsc0JBQXNCLEdBQUcsZ0NBQWdDLGtCQUFrQixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxtQkFBbUI7QUFDMzZUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUErRCxJQUFJO0FBQ3ZFOztBQUVBO0FBQzRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUNUI7QUFDMEM7QUFDRztBQUNDO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Q7QUFDQTtBQUNFOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUFlLENBQUMsbURBQWdCOztBQUVoQztBQUNBLHVDQUF1QyxzREFBYzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0RBQWM7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFXO0FBQ2I7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQVksQ0FBQyxxREFBYSxFQUFFLG1EQUFnQjs7QUFFNUM7QUFDQSwwQ0FBMEMsbURBQVc7O0FBRXJEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFhO0FBQ2YsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFRoQjtBQUMwQztBQUNGOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWSxHQUFHLGFBQWEsR0FBRyxXQUFXO0FBQ3BFLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELDJFQUEyRTtBQUMzRSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsNkRBQTBCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssd0RBQXFCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLHdEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0REFBNEQsbURBQWdCO0FBQzVFLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtREFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBZ0I7QUFDbEI7QUFDQTtBQUNBLHNEQUFzRCxtREFBZ0Isb0JBQW9CO0FBQzFGO0FBQ0E7QUFDQSxJQUFJLDBEQUF1QjtBQUMzQjtBQUNBLDREQUE0RCxtREFBZ0I7QUFDNUU7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtREFBZ0IsRUFBRSxpREFBZTtBQUM3RCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZEQUEwQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBZ0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qiw2REFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1EQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixtREFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFnQjtBQUN4QztBQUNBLEVBQUUsbURBQWdCO0FBQ2xCO0FBQ0EsRUFBRSxtREFBZ0I7QUFDbEIsSUFBSSxtREFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsMERBQTBELG1EQUFnQjtBQUMxRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLG1EQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBZ0I7QUFDcEI7QUFDQSxFQUFFLG1EQUFnQjtBQUNsQjtBQUNBLEVBQUUsbURBQWdCO0FBQ2xCLElBQUksbURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxtREFBZ0I7QUFDMUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDJEQUNQO0FBQ2Qsa0RBQWtEO0FBQ2xEO0FBQ0EsbUJBQW1CLDJEQUNIO0FBQ2hCO0FBQ0E7QUFDQSw0QkFBNEIsdURBQ2xCO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUNBQXlDO0FBQ2pFLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwyREFBd0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCLDZEQUEwQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFnQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2REFBMEI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQWdCO0FBQ3BCLElBQUksbURBQWdCO0FBQ3BCO0FBQ0EsSUFBSSxtREFBZ0I7QUFDcEI7QUFDQSxJQUFJLG1EQUFnQjtBQUNwQjtBQUNBLElBQUksbURBQWdCOztBQUVwQjtBQUNBLDREQUE0RCxtREFBZ0I7QUFDNUUsSUFBSTtBQUNKO0FBQ0E7QUFDQSw0QkFBNEIsNkRBQTBCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsNkRBQTBCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFnQjs7QUFFcEI7QUFDQSxJQUFJLG1EQUFnQjs7QUFFcEI7QUFDQSw0REFBNEQsbURBQWdCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsbURBQWdCO0FBQzdCO0FBQ0EsbURBQW1ELEtBQUs7QUFDeEQ7QUFDQTtBQUNBLElBQUksbURBQWdCO0FBQ3BCO0FBQ0EsNERBQTRELG1EQUFnQjtBQUM1RTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDMEI7QUFDQztBQUNEO0FBQ0Q7QUFDRjtBQUNDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6bkJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQ2EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3N3YWxkLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc2F2ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYW5jZWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImEgYSBhIGEgYSBhIFxcXCJcXG4gICAgXFxcImIgYyBjIGMgYyBjXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiO1xcbn1cXG5cXG4jdG9wLWJhciB7XFxuICBncmlkLWFyZWE6IGE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA3MiwgMTg5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jdG9wLWJhciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxufVxcblxcbiNsZWZ0LXNpZGUtYmFyIHtcXG4gIGdyaWQtYXJlYTogYjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4jdG8tZG9zLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTg4LCAyNDApO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdGFza3MtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNjdXJyZW50LXRhc2stbGlzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY4ODtcXG4gIGhlaWdodDogNzV2aDtcXG4gIG1hcmdpbjogMiU7XFxufVxcblxcbiNhZGQtdGFza2JhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtYmFyIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiNkZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDE2NSwgMTczKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jZGV0YWlscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAwIDIlIDIlIDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RldGFpbHMgPiBkaXYge1xcbiAgZmxleC1zaHJpbms6IDE7XFxufVxcblxcbiNkZXRhaWxzIGgzIHtcXG4gIG1hcmdpbjogMC41JTtcXG4gIGNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4jZGV0YWlscyBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICBtYXJnaW46IDAuNSU7XFxufVxcblxcbiN0aW1lLWR1ZSA+IGlucHV0W3R5cGU9dGltZV0ge1xcbiAgd2lkdGg6IDYuNXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNkZXRhaWxzLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjUlO1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4jY2FuY2VsLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbiNkZWxldGUtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QsIC5hZGRlZC1wcm9qZWN0cyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZGVkLXByb2plY3RzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5hY3RpdmUtcGFuZS10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDIuNSU7XFxufVxcblxcbi5wcm9qZWN0LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdHMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5maWx0ZXItb3JhbmdlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZGI1ODtcXG59XFxuXFxuLnByb2plY3QtYWN0aW9uLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXFxufVxcblxcbi5wcm9qZWN0LWVkaXQtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg2NiUpIHNhdHVyYXRlKDcwMDUlKSBodWUtcm90YXRlKDMxNWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKVxcbn1cXG5cXG4ucHJvai1lZGl0LWhvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4ucHJvai1kZWwtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLnRhc2stYWN0aW9uLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFjdGl2ZS10YXNrIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiOzs7aUJBR2U7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLE9BQU87QUFDVDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNEM7QUFDOUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUE0QztFQUM1QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7bUNBQ2lDO0FBQ25DOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHlEQUF3QztFQUN4QztpQ0FDK0I7QUFDakM7O0FBRUE7RUFDRSx5REFBMEM7RUFDMUM7aUNBQytCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Pc3dhbGQtUmVndWxhci50dGZcXFwiKSwgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhIGEgYSBhIGEgYSBcXFwiXFxuICAgIFxcXCJiIGMgYyBjIGMgY1xcXCJcXG4gICAgXFxcImIgYyBjIGMgYyBjXFxcIjtcXG59XFxuXFxuI3RvcC1iYXIge1xcbiAgZ3JpZC1hcmVhOiBhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgNzIsIDE4OSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG59XFxuXFxuI3RvcC1iYXIgaDEge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xcbn1cXG5cXG4jbGVmdC1zaWRlLWJhciB7XFxuICBncmlkLWFyZWE6IGI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG4gIGhlaWdodDogOTB2aDtcXG59XFxuXFxuI3RvLWRvcy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE4OCwgMjQwKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjdXJyZW50LXRhc2tzLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jY3VycmVudC10YXNrLWxpc3QtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmODg7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBtYXJnaW46IDIlO1xcbn1cXG5cXG4jYWRkLXRhc2tiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbiN0YXNrLWlucHV0LWJhciB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAxNjUsIDE3Myk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2RldGFpbHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXR1cnF1b2lzZTtcXG4gIGhlaWdodDogNzV2aDtcXG4gIG1hcmdpbjogMCAyJSAyJSAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNkZXRhaWxzID4gZGl2IHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG5cXG4jZGV0YWlscyBoMyB7XFxuICBtYXJnaW46IDAuNSU7XFxuICBjb2xvcjogaG90cGluaztcXG59XFxuXFxuI2RldGFpbHMgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcbiAgbWFyZ2luOiAwLjUlO1xcbn1cXG5cXG4jdGltZS1kdWUgPiBpbnB1dFt0eXBlPXRpbWVdIHtcXG4gIHdpZHRoOiA2LjVyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4jZGV0YWlscy1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogMC41JTtcXG59XFxuXFxuI3NhdmUtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9zYXZlLnN2Z1xcXCIpO1xcbn1cXG5cXG4jY2FuY2VsLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvY2FuY2VsLnN2Z1xcXCIpO1xcbn1cXG5cXG4jZGVsZXRlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNhZGQtcHJvamVjdCwgLmFkZGVkLXByb2plY3RzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkZWQtcHJvamVjdHM6aG92ZXIge1xcbiAgY29sb3I6ICNmZmRiNTg7XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLmFjdGl2ZS1wYW5lLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5maWx0ZXItd2hpdGUge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLmZpbHRlci1vcmFuZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4ucHJvamVjdC1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1lZGl0LWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idG46aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5wcm9qLWVkaXQtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvZWRpdC5zdmcpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5wcm9qLWRlbC1ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9kZWxldGUuc3ZnKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4udGFzay1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAzJTtcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1saXN0LWl0ZW0ge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1saXN0LWl0ZW06aG92ZXIge1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblxcbi50YXNrLWFjdGlvbi1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hY3RpdmUtdGFzayB7XFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyAtLS0gQVBQIERBVEEgLS0tXG5cbi8vIFBST0pFQ1RzIEFORCBUQVNLUyBTVE9SQUdFXG5jb25zdCBsb2NhbFN0b3JhZ2UgPSAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiKTtcbmNvbnN0IHByb2plY3RzQW5kVGFza3MgPSAobG9jYWxTdG9yYWdlICE9IG51bGwpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UpIDogW1xuICB7IHByb2plY3ROYW1lOiBcIk15IFRhc2tzXCIsIGN1cnJlbnRUYXNrczogW10sIGNvbXBsZXRlZFRhc2tzOiBbXSB9LCB7IHByb2plY3ROYW1lOiBcIk9kaW5cIiwgY3VycmVudFRhc2tzOiBbXSwgY29tcGxldGVkVGFza3M6IFtdIH1cbl07XG5cbi8vIGV4cG9ydHNcbmV4cG9ydCB7IHByb2plY3RzQW5kVGFza3MgfTtcbiIsIi8vIC0tLSBET00gRUxFTUVOVFMgLS0tXG5pbXBvcnQgeyBwcm9qZWN0c0FuZFRhc2tzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgcHJvamVjdENyZWF0b3IgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgcHJvamVjdENsaWNrZWQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdGFza0NsaWNrZWQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHRhc2tDcmVhdG9yIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBjYW5jZWxEZXRhaWxzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbi8vIG1haW4gY29udGFpbmVyIGZvciB0aGUgYXBwXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4vLyB0b3AgYmFyXG5jb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9wQmFyLmlkID0gXCJ0b3AtYmFyXCI7XG5cbi8vIHRvcCBiYXIgdGl0bGVcbmNvbnN0IHRvcEJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudG9wQmFyVGl0bGUudGV4dENvbnRlbnQgPSBcIk1hcyBUbyBEbydzXCI7XG50b3BCYXJUaXRsZS5pZCA9IFwidGl0bGUtYmFyXCI7XG50b3BCYXIuYXBwZW5kQ2hpbGQodG9wQmFyVGl0bGUpO1xuXG4vLyBQUk9KRUNUU1xuXG4vLyBsZWZ0IHNpZGUgYmFyXG5jb25zdCBsZWZ0U2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZWZ0U2lkZUJhci5pZCA9IFwibGVmdC1zaWRlLWJhclwiO1xuXG4vLyBwcm9qZWN0IHNlY3Rpb24gKGdvZXMgaW4gbGVmdCBzaWRlIGJhcilcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3RzQ29udGFpbmVyLmlkID0gXCJwcm9qZWN0cy1jb250YWluZXJcIjtcbmxlZnRTaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcblxuLy8gcHJvamVjdHMgbGlzdFxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xucHJvamVjdHNMaXN0LmlkID0gXCJwcm9qZWN0cy11bFwiO1xucHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBwcm9qZWN0cyBvbiB0aGUgZG9tXG5kaXNwbGF5UHJvamVjdHMocHJvamVjdHNBbmRUYXNrcywgcHJvamVjdHNMaXN0KTtcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGFjdGl2ZSBzZWxlY3RlZCBwcm9qZWN0XG5wcm9qZWN0c0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDbGlja2VkKTtcblxuLy8gYWRkIHByb2plY3QgYnV0dG9uXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuYWRkUHJvamVjdEJ1dHRvbi5pZCA9IFwiYWRkLXByb2plY3RcIjtcbmFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFByb2plY3RcIjtcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDcmVhdG9yKTtcbnByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuLy8gcHJvamVjdCBidXR0b25zIGNvbnRhaW5lclxuY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdEJ0bnMuaWQgPSBcInByb2plY3QtYnRucy1jb250YWluZXJcIjtcblxuLy8gZWRpdCBwcm9qZWN0IG5hbWUgYnV0dG9uXG5jb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5lZGl0UHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtYnRucyBmaWx0ZXItd2hpdGVcIjtcbmVkaXRQcm9qZWN0QnRuLmlkID0gXCJlZGl0LWJ0blwiO1xuZWRpdFByb2plY3RCdG4udGl0bGUgPSBcIkVkaXRcIjtcblxuLy8gZGVsZXRlIHByb2plY3QgYnV0dG9uXG5jb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRlbGV0ZVByb2plY3RCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWJ0bnMgZmlsdGVyLXdoaXRlXCI7XG5kZWxldGVQcm9qZWN0QnRuLmlkID0gXCJkZWwtYnRuXCI7XG5kZWxldGVQcm9qZWN0QnRuLnRpdGxlID0gXCJEZWxldGVcIjtcblxuLy8gcHJvamVjdCBidXR0b24gY29udGFpbmVyIGFwcGVuZGFnZXNcbnByb2plY3RCdG5zLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnRuKTtcbnByb2plY3RCdG5zLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4vLyBUTyBET1NcblxuLy8gdG8gZG8gYm9hcmQgY29udGFpbmVyXG5jb25zdCB0b2RvQm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvZG9Cb2FyZHNDb250YWluZXIuaWQgPSBcInRvLWRvcy1jb250YWluZXJcIjtcbnRvZG9Cb2FyZHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4vLyBjdXJyZW50IHRhc2tzIGNvbnRhaW5lclxuY29uc3QgY3VycmVudFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmN1cnJlbnRUYXNrc0NvbnRhaW5lci5pZCA9IFwiY3VycmVudC10YXNrcy1jb250YWluZXJcIjtcbmN1cnJlbnRUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xudG9kb0JvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza3NDb250YWluZXIpO1xuXG4vLyBjdXJyZW50IHRhc2tzIHRpdGxlXG5jb25zdCBjdXJyZW50VGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmN1cnJlbnRUYXNrc1RpdGxlLmNsYXNzTmFtZSA9IFwiYWN0aXZlLXBhbmUtdGl0bGVcIjtcbmN1cnJlbnRUYXNrc1RpdGxlLnRleHRDb250ZW50ID0gXCJUYXNrc1wiO1xuY3VycmVudFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUYXNrc1RpdGxlKTtcblxuLy8gY3VycmVudCB0YXNrbGlzdFxuY29uc3QgY3VycmVudFRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmN1cnJlbnRUYXNrTGlzdENvbnRhaW5lci5pZCA9IFwiY3VycmVudC10YXNrLWxpc3QtY29udGFpbmVyXCI7XG5jdXJyZW50VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tMaXN0Q29udGFpbmVyKTtcblxuLy8gYWRkIHRhc2tzIGNvbnRhaW5lclxuY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hZGRUYXNrQ29udGFpbmVyLmlkID0gXCJhZGQtdGFza2JhclwiO1xuY3VycmVudFRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuXG4vLyBhZGQgdGFza3MgaW5wdXQgYmFyXG5jb25zdCBhZGRUYXNrc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuYWRkVGFza3NJbnB1dC5pZCA9IFwidGFzay1pbnB1dC1iYXJcIjtcbmFkZFRhc2tzSW5wdXQucGxhY2Vob2xkZXIgPSBcIkFkZCBhIHRhc2tcIjtcbmFkZFRhc2tzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vaWYgdXNlciBwcmVzc2VzIGVudGVyIG9uIGtleWJvYXJkXG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgLy8gcnVuIHRhc2tDcmVhdG9yIGFuZCB1c2UgdmFsdWUgZW50ZXJlZCBpbiBhYm92ZSBpbnB1dCBlbGVtZW50XG4gICAgdGFza0NyZWF0b3IoYWRkVGFza3NJbnB1dC52YWx1ZSk7XG4gICAgLy8gY2xlYXIgYWRkVGFza3NJbnB1dFxuICAgIGFkZFRhc2tzSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59KTtcblxuYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrc0lucHV0KTtcblxuLy8gYWRkIHRhc2tzIHN1Ym1pdCBidXR0b25cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuYWRkVGFza0J0bi50eXBlID0gXCJzdWJtaXRcIjtcbmFkZFRhc2tCdG4uaWQgPSBcImFkZC10YXNrLWJ0blwiO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gZ2V0IGlucHV0IGlkIGZvciB0YXNrLWJhclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1pbnB1dC1iYXJcIik7XG4gIC8vIHJ1biB0YXNrQ3JlYXRvciBhbmQgdXNlIHZhbHVlIGVudGVyZWQgaW4gYWJvdmUgaW5wdXQgZWxlbWVudFxuICB0YXNrQ3JlYXRvcihpbnB1dC52YWx1ZSk7XG4gIC8vIGNsZWFyIGlucHV0XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5hZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4vLyBjdXJyZW50IHRhc2tzIHVub3JkZXJlZCBsaXN0XG5jb25zdCBjdXJyZW50VGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY3VycmVudFRhc2tMaXN0LmlkID0gXCJjdXJyZW50LXRhc2tzLXVsXCI7XG5jdXJyZW50VGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tMaXN0KTtcblxuLy8gY3VycmVudCB0YXNrcyBsaXN0IGl0ZW1cbmNvbnN0IGFkZFRhc2tMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbmFkZFRhc2tMaXN0SXRlbS5jbGFzc05hbWUgPSBcImFkZC10YXNrLWxpXCI7XG5cbi8vIGRpc3BsYXkgYWxsIHRhc2tzXG5kaXNwbGF5VGFza3MoYWN0aXZlUHJvamVjdCwgcHJvamVjdHNBbmRUYXNrcywgY3VycmVudFRhc2tMaXN0KTtcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGFjdGl2ZSBzZWxlY3RlZCB0YXNrXG5jdXJyZW50VGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDbGlja2VkKTtcblxuLy8gREVUQUlMU1xuXG4vLyBkZXRhaWxzIGJvYXJkIGNvbnRhaW5lclxuY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzQ29udGFpbmVyLmlkID0gXCJkZXRhaWxzLWNvbnRhaW5lclwiO1xuZGV0YWlsc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vIGRldGFpbHMgdGl0bGVcbmNvbnN0IGRldGFpbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmRldGFpbHNUaXRsZS5jbGFzc05hbWUgPSBcImFjdGl2ZS1wYW5lLXRpdGxlXCI7XG5kZXRhaWxzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbmRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc1RpdGxlKTtcblxuLy8gZGV0YWlscyBwYW5lXG5jb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHMuaWQgPSBcImRldGFpbHNcIjtcbmRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbi8vIGRldGFpbHMgcHJvamVjdCBzZWxlY3RvciBjb250YWluZXJcbmNvbnN0IHByb2plY3RTZWxlY3RvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0U2VsZWN0b3JDb250YWluZXIuaWQgPSBcInByb2plY3Qtc2VsZWN0b3JcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyBwcm9qZWN0IHNlbGVjdG9yIHRpdGxlXG5jb25zdCBzZWxlY3RQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5zZWxlY3RQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbnByb2plY3RTZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0VGl0bGUpO1xuXG4vLyBkZXRhaWxzIHByb2plY3Qgc2VsZWN0b3JcbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xucHJvamVjdFNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xuXG4vLyBkZXRhaWxzIHRhc2sgaW5wdXQgY29udGFpbmVyXG5jb25zdCB0YXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0lucHV0Q29udGFpbmVyLmlkID0gXCJlZGl0LXRhc2stbmFtZVwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrSW5wdXRDb250YWluZXIpO1xuXG4vLyBkZXRhaWxzIHRhc2sgdGl0bGVcbmNvbnN0IHRhc2tJbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xudGFza0lucHV0VGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2tcIjtcbnRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5wdXRUaXRsZSk7XG5cbi8vIGRldGFpbHMgdGFzayBpbnB1dFxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGFza0lucHV0LmlkID0gXCJ0YXNrLWlucHV0LWRldGFpbFwiO1xudGFza0lucHV0LnZhbHVlID0gXCJQbGFjZWhvbGRlclwiO1xudGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cbi8vIGRldGFpbHMgZGF0ZSBkdWUgY29udGFpbmVyXG5jb25zdCBkYXRlRHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRhdGVEdWVDb250YWluZXIuaWQgPSBcImRhdGUtZHVlXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKGRhdGVEdWVDb250YWluZXIpO1xuXG4vLyBkZXRhaWxzIGRhdGUgZHVlIHNlbGVjdG9yIHRpdGxlXG5jb25zdCBkYXRlRHVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5kYXRlRHVlVGl0bGUudGV4dENvbnRlbnQgPSBcIkRhdGUgRHVlXCI7XG5kYXRlRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVEdWVUaXRsZSk7XG5cbi8vIGRldGFpbHMgZGF0ZSBkdWUgaW5wdXRcbmNvbnN0IGRhdGVEdWVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmRhdGVEdWVTZWxlY3Rvci50eXBlID0gXCJkYXRlXCI7XG5kYXRlRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVEdWVTZWxlY3Rvcik7XG5cbi8vIGRldGFpbHMgdGltZSBkdWUgY29udGFpbmVyXG5jb25zdCB0aW1lRHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRpbWVEdWVDb250YWluZXIuaWQgPSBcInRpbWUtZHVlXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHRpbWVEdWVDb250YWluZXIpO1xuXG4vLyBkZXRhaWxzIHRpbWUgZHVlIHNlbGVjdG9yIHRpdGxlXG5jb25zdCB0aW1lRHVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50aW1lRHVlVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpbWUgRHVlXCI7XG50aW1lRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVEdWVUaXRsZSk7XG5cbi8vIGRldGFpbHMgdGltZSBkdWUgaW5wdXRcbmNvbnN0IHRpbWVEdWVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRpbWVEdWVTZWxlY3Rvci50eXBlID0gXCJ0aW1lXCI7XG50aW1lRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVEdWVTZWxlY3Rvcik7XG5cbi8vIHRhc2sgcHJpb3JpdHkgY29udGFpbmVyXG5jb25zdCB0YXNrUHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza1ByaW9yaXR5Q29udGFpbmVyLmlkID0gXCJ0YXNrLXByaW9yaXR5XCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUNvbnRhaW5lcik7XG5cbi8vIHRhc2sgcHJpb3JpdHkgdGl0bGVcbmNvbnN0IHRhc2tQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xudGFza1ByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2sgUHJpb3JpdHlcIjtcbnRhc2tQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlUaXRsZSk7XG5cbi8vIHRhc2sgcHJpb3JpdHkgc2VsZWN0b3JcbmNvbnN0IHRhc2tQcmlvcml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbnRhc2tQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlTZWxlY3Rvcik7XG5cbi8vIG5vbmUgcHJpb3JpdHkgb3B0aW9uXG5jb25zdCBub1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbm5vUHJpb3JpdHkudGV4dCA9IFwiTm9uZVwiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobm9Qcmlvcml0eSk7XG5cbi8vIGxvdyBwcmlvcml0eSBvcHRpb25cbmNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbmxvd1ByaW9yaXR5LnRleHQgPSBcIkxvd1wiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4vLyBtZWRpdW0gcHJpb3JpdHkgb3B0aW9uXG5jb25zdCBtZWRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5tZWRQcmlvcml0eS50ZXh0ID0gXCJNZWRpdW1cIjtcbnRhc2tQcmlvcml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKG1lZFByaW9yaXR5KTtcblxuLy8gaGlnaCBwcmlvcml0eSBvcHRpb25cbmNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5oaWdoUHJpb3JpdHkudGV4dCA9IFwiSGlnaFwiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuLy8gZGV0YWlscyBkZXNjcmlwdGlvbiBjb250YWluZXJcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGVzY3JpcHRpb25Db250YWluZXIuaWQgPSBcInRhc2stZGVzY3JpcHRpb25cIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyBkZXNjcmlwdGlvbiB0aXRsZVxuY29uc3QgdGFza0Rlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50YXNrRGVzY3JpcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbnRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25UaXRsZSk7XG5cbi8vIGRldGFpbHMgZGVzY3JpcHRpb24gdGV4dGFyZWFcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbnRhc2tEZXNjcmlwdGlvbi5pZCA9IFwidGFzay1kZXNjcmlwdGlvbi10ZXh0YXJlYVwiO1xudGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJFbnRlciBkZXNjcmlwdGlvbiBvZiB0YXNrIChNYXhpbXVtIG9mIDI4MCBjaGFyYWN0ZXJzKS5cIjtcbnRhc2tEZXNjcmlwdGlvbi5tYXhMZW5ndGggPSAyODA7XG50YXNrRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblxuLy8gZGV0YWlscyBidXR0b25zIGNvbnRhaW5lclxuY29uc3QgZGV0YWlsc0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzQnRuQ29udGFpbmVyLmlkID0gXCJkZXRhaWxzLWJ0bi1jb250YWluZXJcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc0J0bkNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgc2F2ZSBidG5cbmNvbnN0IGRldGFpbHNTYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNTYXZlQnRuLmlkID0gXCJzYXZlLWJ0blwiO1xuZGV0YWlsc1NhdmVCdG4udGl0bGUgPSBcIlNhdmUgQ2hhbmdlc1wiO1xuZGV0YWlsc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzU2F2ZUJ0bik7XG5cbi8vIGRldGFpbHMgY2FuY2VsIGJ0blxuY29uc3QgZGV0YWlsc0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzQ2FuY2VsQnRuLmlkID0gXCJjYW5jZWwtYnRuXCI7XG5kZXRhaWxzQ2FuY2VsQnRuLnRpdGxlID0gXCJDYW5jZWwgQ2hhbmdlc1wiO1xuZGV0YWlsc0NhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgY2FuY2VsRGV0YWlscygpO1xufSlcbmRldGFpbHNCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NhbmNlbEJ0bik7XG5cbi8vIGRldGFpbHMgZGVsZXRlIGJ0blxuY29uc3QgZGV0YWlsc0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzRGVsZXRlQnRuLmlkID0gXCJkZWxldGUtYnRuXCI7XG5kZXRhaWxzRGVsZXRlQnRuLnRpdGxlID0gXCJEZWxldGUgVGFza1wiO1xuZGV0YWlsc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzRGVsZXRlQnRuKTtcbnRvZG9Cb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRhaW5lcik7XG5cbi8vIGRvbSAjY29udGVudCBhcHBlbmRzXG5ib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XG5ib2R5LmFwcGVuZENoaWxkKGxlZnRTaWRlQmFyKTtcbmJvZHkuYXBwZW5kQ2hpbGQodG9kb0JvYXJkc0NvbnRhaW5lcik7XG5cbmV4cG9ydCB7IGJvZHkgfTtcbmV4cG9ydCB7IGN1cnJlbnRUYXNrTGlzdCB9OyIsIi8vIC0tLSBBUFAgRlVOQ1RJT05TIC0tLVxuaW1wb3J0IHsgcHJvamVjdHNBbmRUYXNrcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IGN1cnJlbnRUYXNrTGlzdCB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBkYXRlIGZ1bmN0aW9uc1xuLy8gY3JlYXRlIG5ld0RhdGUgYmFzZWQgb24gY3VycmVudCBkYXRlXG5mdW5jdGlvbiBjdXJyZW50RGF0ZSgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIHRpbWVTdHlsZTogXCJzaG9ydFwiLFxuICB9KTtcblxuICAvLyBmdW5jdGlvbiB0byBhZGQgdHdvIGRpZ2l0IHBhZGRpbmdcbiAgZnVuY3Rpb24gcGFkVG8yRGlnaXRzKG51bSkge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cblxuICBjb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgY3VycmVudE1vbnRoID0gcGFkVG8yRGlnaXRzKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICBjb25zdCBjdXJyZW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIGN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHllYXJNb250aERheSA9IGAke2N1cnJlbnRZZWFyfS0ke2N1cnJlbnRNb250aH0tJHtjdXJyZW50RGF5fWA7XG4gIHJldHVybiB7IHllYXJNb250aERheSwgdGltZSB9O1xufVxuXG4vLyBhdXRvbWF0aWNhbGx5IHJlc2l6ZXMgc2VsZWN0IG9wdGlvbnMgYW5kIGlucHV0IGVsZW1lbnRzXG5mdW5jdGlvbiByZXNpemVJbnB1dCgpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWlucHV0LWRldGFpbFwiKTsgLy8gR2V0IHRoZSBpbnB1dCBlbGVtZW50IHdpdGggdGhlIGlkIFwidGFzay1pbnB1dC1kZXRhaWxcIlxuICBsZXQgdGV4dFdpZHRoID0gZ2V0VGV4dFdpZHRoKGlucHV0LnZhbHVlLCBnZXRDb21wdXRlZFN0eWxlKGlucHV0KS5mb250KTsgLy8gR2V0IHRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgdmFsdWVcbiAgaW5wdXQuc3R5bGUud2lkdGggPSB0ZXh0V2lkdGggKyBcInB4XCI7IC8vIFNldCB0aGUgd2lkdGggb2YgdGhlIGlucHV0IGVsZW1lbnQgdG8gdGhlIGNhbGN1bGF0ZWQgdGV4dCB3aWR0aFxufVxuXG5mdW5jdGlvbiBnZXRUZXh0V2lkdGgodGV4dCwgZm9udCkge1xuICBsZXQgY2FudmFzID1cbiAgICBnZXRUZXh0V2lkdGguY2FudmFzIHx8XG4gICAgKGdldFRleHRXaWR0aC5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpKTtcbiAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb250ZXh0LmZvbnQgPSBmb250O1xuICBsZXQgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCk7XG4gIHJldHVybiBtZXRyaWNzLndpZHRoO1xufVxuXG4vLyBmaW5kIHByb2plY3QgaW5kZXhcbmZ1bmN0aW9uIHByb2plY3RJbmRleChwcm9qZWN0KSB7XG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3QpO1xuICByZXR1cm4gaW5kZXg7XG59XG5cbi8vIGNyZWF0ZXMgcHJvamVjdHMgaW4gZGF0YWJhc2VcbmZ1bmN0aW9uIHByb2plY3RDcmVhdG9yKCkge1xuICAvLyBwcm9tcHQgdXNlciBmb3IgcHJvamVjdCBuYW1lXG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvbXB0KFwiRW50ZXIgcHJvamVjdCBuYW1lOlwiKTtcbiAgLy8gdGFrZSBwcm9qZWN0IG5hbWUgYW5kIGNoZWNrIGlmIHByb2plY3QgbmFtZSBpcyBlbXB0eSBzdHJpbmcgb3IgYW4gZXhpc3RpbmcgcHJvamVjdFxuICAvLyAuc29tZSgpIGlzIHVzZWQgb24gYXJyYXkgdG8gc2VhcmNoIGlmIHByb2plY3ROYW1lIGFscmVhZHkgZXhpc3RzXG4gIGlmIChcbiAgICBwcm9qZWN0TmFtZSAhPSBudWxsICYmXG4gICAgIXByb2plY3RzQW5kVGFza3Muc29tZSgoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpXG4gICkge1xuICAgIC8vIG5vdyBjcmVhdGUgYSBuZXcgb2JqZWN0IGluIHRoZSBkYXRhYmFzZSB3aXRoIHRoZSBuZXcgcHJvamVjdCBuYW1lXG4gICAgcHJvamVjdHNBbmRUYXNrcy5wdXNoKHtcbiAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbiAgICAgIGN1cnJlbnRUYXNrczogW10sXG4gICAgICBjb21wbGV0ZWRUYXNrczogW10sXG4gICAgfSk7XG4gICAgLy8gc2F2ZSBuZXdseSBjcmVhdGVkIHByb2plY3QgdG8gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gcmVsb2FkIHRoZSBkb2N1bWVudFxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVuYW1lIHByb2plY3RzXG5mdW5jdGlvbiByZW5hbWVQcm9qZWN0KHByb2plY3QpIHtcbiAgLy8gZmluZCB0aGUgcHJvamVjdCBpbmRleCBpbiB0aGUgZGF0YWJhc2VcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0SW5kZXgocHJvamVjdCk7XG4gIC8vIGdyYWIgbGlzdCBpdGVtIHRoYXQgbWF0Y2hlcyBwcm9qZWN0IG5hbWVcbiAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdsaVtkYXRhLXByb2plY3QtbmFtZT1cIicgKyBwcm9qZWN0ICsgJ1wiXSdcbiAgKTtcbiAgLy8gc2V0IGxpc3QgaXRlbSdzIHRleHRDb250ZW50IGFzIGEgdmFyaWFibGVcbiAgY29uc3QgaXRlbVRleHQgPSBsaXN0SXRlbS50ZXh0Q29udGVudDtcbiAgLy8gY2xlYXIgbGlzdCBpdGVtJ3MgdGV4dENvbnRlbnRcbiAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAvLyBjcmVhdGUgaW5wdXQgZWxlbWVudCBmb3IgdXNlciB0byByZW5hbWUgcHJvamVjdFxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NOYW1lID0gXCJyZW5hbWUtcHJvamVjdFwiO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIC8vIHNldCBpbnB1dCdzIHN0YXJ0aW5nIHZhbHVlIHRvIHByb2plY3QgbmFtZVxuICBpbnB1dC52YWx1ZSA9IGl0ZW1UZXh0O1xuICAvLyBsaXN0ZW4gZm9yIGVudGVyIGtleSBwcmVzc1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlIGZvciBsaXN0IGl0ZW0ncyB0ZXh0Q29udGVudCBiYXNlZCBvbiB1c2VycyBpbnB1dFxuICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgIC8vIHVwZGF0ZSBkYXRhYmFzZSB0aHJvdWdoIHBhdGggdG8gbWF0Y2hlZCBwcm9qZWN0IG5hbWVcbiAgICAgIHByb2plY3RzQW5kVGFza3NbaW5kZXhdLnByb2plY3ROYW1lID0gbGlzdEl0ZW0udGV4dENvbnRlbnQ7XG4gICAgICAvLyB1cGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJwcm9qZWN0c0FuZFRhc2tzXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpXG4gICAgICApO1xuICAgICAgLy8gcmVsb2FkIHBhZ2VcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBpbnB1dC5mb2N1cygpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBkZWxldGUgcHJvamVjdHNcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAvLyBmaW5kIGluZGV4IG9mIHByb2plY3ROYW1lXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdEluZGV4KHByb2plY3QpO1xuICAvLyB0YXJnZXQgbG9jYXRpb24gb2YgcHJvamVjdFxuICBwcm9qZWN0c0FuZFRhc2tzW2luZGV4XS5wcm9qZWN0TmFtZTtcbiAgLy8gc3BsaWNlIHByb2plY3Qgb3V0IG9mIGRhdGFiYXNlIChjb25maXJtKVxuICBsZXQgZGVsZXRlQ29uZmlybWF0aW9uID0gcHJvbXB0KFxuICAgIGBBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlIHByb2plY3Q6ICR7cHJvamVjdHNBbmRUYXNrc1tpbmRleF0ucHJvamVjdE5hbWV9PyBUaGlzIHdpbGwgZGVsZXRlIGFsbCB0YXNrcyB3aXRoaW4gdGhpcyBwcm9qZWN0IGFzIHdlbGwhICh5L24pYFxuICApO1xuICBpZiAoZGVsZXRlQ29uZmlybWF0aW9uID09PSBcInlcIikge1xuICAgIHByb2plY3RzQW5kVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gICAgLy8gcmVsb2FkIHBhZ2VcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gdmFyaWFibGUgdG8gc2VsZWN0IHNwZWNpZmljIHByb2plY3RcbmNvbnN0IGFjdGl2ZVByb2plY3RMb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIpO1xubGV0IHByZXZQcm9qZWN0ID0gbnVsbDtcbmxldCBhY3RpdmVQcm9qZWN0ID1cbiAgYWN0aXZlUHJvamVjdExvY2FsU3RvcmFnZSAhPSBudWxsID8gYWN0aXZlUHJvamVjdExvY2FsU3RvcmFnZSA6IG51bGw7XG5cbi8vIGZ1bmN0aW9uIHRvIHN3aXRjaCB3aGljaCBwcm9qZWN0IGlzIGFjdGl2ZVxuY29uc3QgcHJvamVjdENsaWNrZWQgPSAoZSkgPT4ge1xuICAvLyBjaGVjayB0byBzZWUgaWYgZWxlbWVudCBjbGlja2VkIGlzIGEgPGxpPiAobGlzdCBpdGVtKVxuICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiTElcIikge1xuICAgIC8vIGFkZCAuYWN0aXZlIGNsYXNzIHRvIGVsZW1lbnQgY2xpY2tlZFxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICBhY3RpdmVQcm9qZWN0ID0gZS50YXJnZXQ7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIsIGFjdGl2ZVByb2plY3QudGV4dENvbnRlbnQpO1xuICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBpcyBhIHByZXZpb3VzIHByb2plY3QgdGhhdCB3YXMgYWN0aXZlXG4gICAgaWYgKHByZXZQcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAvLyByZW1vdmVzIGFjdGl2ZSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50XG4gICAgICBwcmV2UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgfVxuICAgIC8vIHNldCBwcmV2UHJvamVjdCBhcyB0aGUgY2xpY2tlZCBIVE1MSUVsZW1lbnRcbiAgICBwcmV2UHJvamVjdCA9IGUudGFyZ2V0O1xuICB9XG59O1xuXG4vLyBkaXNwbGF5cyBwcm9qZWN0cyBvbnRvIHRoZSBET01cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhhcnIsIHBhcmVudE5vZGUpIHtcbiAgLy8gbG9vcCB0aHJvdWdoIGFycmF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gY3JlYXRlIGxpc3QgaXRlbSBmb3IgcHJvamVjdFxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgLy8gZ2l2ZSBpdCBjbGFzcyB1c2VkIGZvciBhZGRlZCBwcm9qZWN0c1xuICAgIGFkZFByb2plY3QuY2xhc3NOYW1lID0gXCJhZGRlZC1wcm9qZWN0c1wiO1xuICAgIC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IG5hbWUgZm91bmQgaW4gdGhpcyBpdGVyYXRpb25cbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gYXJyW2ldLnByb2plY3ROYW1lO1xuICAgIC8vIHNldCBhIGRhdGEgYXR0cmlidXRlIGZvciBpdFxuICAgIGFkZFByb2plY3QuZGF0YXNldC5wcm9qZWN0TmFtZSA9IGFycltpXS5wcm9qZWN0TmFtZTtcbiAgICAvLyBjcmVhdGUgY29uZGl0aW9uYWwgdG8gY2hlY2sgaWYgZGVmYXVsdCB0YXNrIGlzIG1hdGNoZWRcbiAgICBpZiAoYXJyW2ldLnByb2plY3ROYW1lID09PSBhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAvLyBzZXQgZGVmYXVsdCBwcm9qZWN0IHRvIGFjdGl2ZVxuICAgICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgICAvLyBzZXQgdmFyaWFibGUgdGhhdCBtb25pdG9ycyBhY3RpdmUgcHJvamVjdHMgdG8gZGVmYXVsdCBwcm9qZWN0XG4gICAgICBwcmV2UHJvamVjdCA9IGFkZFByb2plY3Q7XG4gICAgfVxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBpbmNsdWRlIHRhc2tzIGZvciB0aGUgcHJvamVjdFxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gc3RvcmUgcHJvamVjdCBuYW1lIGNsaWNrZWRcbiAgICAgIGxldCBwcm9qZWN0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAvLyB1c2UgYWJvdmUgdmFyaWFibGUgYXMgYXJnIGZvciBkaXNwbGF5VGFza3MoKVxuICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QsIHByb2plY3RzQW5kVGFza3MsIGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgfSk7XG4gICAgLy8gcHJvamVjdCBhY3Rpb24gYnV0dG9uIGNvbnRhaW5lclxuICAgIGNvbnN0IHByb2plY3RBY3Rpb25CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBY3Rpb25CdG5Db250YWluZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWFjdGlvbi1idG4tY29udGFpbmVyXCI7XG5cbiAgICAvLyBwcm9qZWN0IHJlbmFtZSBidXR0b25cbiAgICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEVkaXRCdG4udGl0bGUgPSBcIlJlbmFtZSBQcm9qZWN0XCI7XG4gICAgcHJvamVjdEVkaXRCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWVkaXQtYnRuXCI7XG4gICAgcHJvamVjdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgcmVuYW1lUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vIHByb2plY3QgZGVsZXRpb24gYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi50aXRsZSA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC1kZWxldGUtYnRuXCI7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwZW5kIHByb2plY3QgYWN0aW9uIGJ1dHRvbnNcbiAgICBwcm9qZWN0QWN0aW9uQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnRuKTtcbiAgICBwcm9qZWN0QWN0aW9uQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEFjdGlvbkJ0bkNvbnRhaW5lcik7XG5cbiAgICAvLyBtb3VzZSBpbiBhbmQgb3V0IGV2ZW50IGxpc3RlbmVycyBmb3IgaG92ZXIgY29sb3IgY2hhbmdlIHN0YXR1c1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdEVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInByb2otZWRpdC1ob3ZlcmVkXCIpO1xuICAgICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWwtaG92ZXJlZFwiKTtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qLWVkaXQtaG92ZXJlZFwiKTtcbiAgICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LnJlbW92ZShcInByb2otZGVsLWhvdmVyZWRcIik7XG4gICAgfSk7XG4gICAgLy8gYXBwZW5kIG5ld2x5IGFkZGVkIHByb2plY3QgdG8gc3BlY2lmaWVkIG5vZGVcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICB9XG59XG5cbi8vIGNyZWF0ZXMgdGFza3NcbmZ1bmN0aW9uIHRhc2tDcmVhdG9yKHRhc2spIHtcbiAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIHNlYXJjaCBkYXRhYmFzZSBhcnJheSBmb3IgcHJvamVjdCB0aGF0IGlzIGN1cnJlbnRseSBhY3RpdmVcbiAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHByb2plY3RzQW5kVGFza3Muc29tZShcbiAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJldlByb2plY3QudGV4dENvbnRlbnRcbiAgKTtcbiAgLy8gZmluZCBpbmRleCBvZiBwcm9qZWN0IGZvdW5kIGluIGRhdGFiYXNlXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcmV2UHJvamVjdC50ZXh0Q29udGVudFxuICApO1xuXG4gIC8vIGNyZWF0ZSBuZXdUYXNrIG9iamVjdCB0byBsYXRlciBwdXNoIHRvIHByb2plY3RzQW5kVGFza3MgYXJyYXlcbiAgbGV0IG5ld1Rhc2sgPSB7XG4gICAgdGFzazogdGFzayxcbiAgICBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICBkYXRlRHVlOiBjdXJyZW50RGF0ZSgpLnllYXJNb250aERheSxcbiAgICB0aW1lRHVlOiBjdXJyZW50RGF0ZSgpLnRpbWUsXG4gICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgIGRlc2M6IFwiXCIsXG4gIH07XG4gIC8vIHB1c2ggbmV3bHkgY3JlYXRlZCB0YXNrIHRvIGNvcnJlY3QgaW5kZXggb2YgcHJvamVjdHNBbmRUYXNrcyBpbiB0aGUgY3VycmVudFRhc2tzIHByb3BlcnR5XG4gIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MucHVzaChuZXdUYXNrKTtcbiAgLy8gcmVsb2FkIHRoZSBkb2N1bWVudFxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgLy8gc2F2ZSB0byBsb2NhbFN0b3JhZ2UgdG8ga2VlcCBkYXRhIGFmdGVyIHBhZ2UgcmVsb2Fkc1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgXCJwcm9qZWN0c0FuZFRhc2tzXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcylcbiAgKTtcbn1cblxuLy8gdmFyaWFibGUgdG8gc2VsZWN0IHNwZWNpZmljIHByb2plY3RcbmxldCBwcmV2VGFzayA9IG51bGw7IC8vIGRlY2xhcmUgcHJldlRhc2sgYXQgYSBoaWdoZXIgc2NvcGUgbGV2ZWxcblxuY29uc3QgdGFza0NsaWNrZWQgPSAoZSkgPT4ge1xuICAvLyBjaGVjayB0byBzZWUgaWYgdGFzayBjbGlja2VkIGhhcyBhY3RpdmUtdGFzayBhcyBhIGNsYXNzIG5hbWVcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2stbGlzdC1pdGVtIGFjdGl2ZS10YXNrXCIpIHtcbiAgICAvLyByZWxvYWQgdGhlIHBhZ2Ugc28gbmV3IGFwcGxpY2F0aW9ucyBvZiBlZGl0RGV0YWlscygpIGNhbiBydW5cbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiTElcIikge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtdGFza1wiKTtcbiAgICBpZiAocHJldlRhc2sgIT09IG51bGwpIHtcbiAgICAgIHByZXZUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtdGFza1wiKTtcbiAgICB9XG4gICAgcHJldlRhc2sgPSBlLnRhcmdldDtcbiAgfVxuICBpZiAoZS50YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gIT0gXCJsaW5lLXRocm91Z2hcIikge1xuICAgIGVkaXREZXRhaWxzKGUudGFyZ2V0KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHByb2plY3QsIGFyciwgcGFyZW50Tm9kZSkge1xuICAvLyBmaXJzdCBmaW5kIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIGFycmF5XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0XG4gICk7XG4gIC8vIGNyZWF0ZSBlbXB0eSBhcnJheSBmb3IgY3VycmVudCB0YXNrc1xuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIC8vIGV4dHJhY3RzIHRhc2tzIGZyb20gJ2N1cnJlbnRUYXNrcycgcHJvcGVydHkgb2YgYW4gb2JqZWN0IGluIHRoZSAnYXJyJyBhcnJheSBhbmQgcHVzaGVzIGludG8gdGhlIHRhc2tzIGFycmF5XG4gIGlmIChwcm9qZWN0SW5kZXggIT0gLTEpIHtcbiAgICBPYmplY3QudmFsdWVzKGFycltwcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGFycltwcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gcHVzaCBuZXcgdGFzayBpbnRvIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICAgICAgdGFza3MucHVzaChlLnRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC52YWx1ZXMoYXJyW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChhcnJbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gcHVzaCBuZXcgdGFzayBpbnRvIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICAgICAgdGFza3MucHVzaChlLnRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gcmVzZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBwYXJlbnROb2RlIGFyZ3VtZW50XG4gIHBhcmVudE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBmb3IgbG9vcCB0byBjcmVhdGUgdGFza3MsIGNoZWNrYm94ZXMgYW5kIGFkZCBjbGFzc2VzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFzay1saXN0LWl0ZW0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBhY3Rpb25CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFjdGlvbkJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2stYWN0aW9uLWJ0bi1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9IFwidGFzay1saXN0LWl0ZW1cIjtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHRhc2tzW2ldO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29tcGxldGVCdG4uY2xhc3NOYW1lID0gXCJ0YXNrLWNvbXBsZXRlLWJ0blwiO1xuICAgIGNvbXBsZXRlQnRuLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY29tcGxldGVCdG4udGl0bGUgPSBcIkNvbXBsZXRlIFRhc2tcIjtcbiAgICAvLyBsb29wIHRocm91Z2ggY29tcGxldGVkIHRhc2tzIGFuZCBhZGQgc3RyaWtldGhyb3VnaCBhbmQgY2hlY2tlZCBib3ggdG8gdGFza3MgdGhhdCBtYXRjaCBjdXJyZW50IHRhc2sgaXRlcmF0aW9uXG4gICAgZm9yIChcbiAgICAgIGxldCBqID0gMDtcbiAgICAgIGogPCBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MubGVuZ3RoO1xuICAgICAgaisrXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrc1tqXS50YXNrLmluY2x1ZGVzKHRhc2tzW2ldKVxuICAgICAgKSB7XG4gICAgICAgIGxpc3RJdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgICAgY29tcGxldGVCdG4uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBjb21wbGV0aW9uIG9mIHRhc2tcbiAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBpZiAoY29tcGxldGVCdG4uY2hlY2tlZCkge1xuICAgICAgICAvLyBtYW5pcHVsYXRlIHRoZSBET00gZWxlbWVudCBvZiB0YXNrIHRvIGluY2x1ZGUgc3RyaWtldGhyb3VnaCBvZiB0ZXh0XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICBjb21wbGV0ZVRhc2sodGFzay50ZXh0Q29udGVudCwgcHJvamVjdEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSBcIlwiO1xuICAgICAgICB1bkNvbXBsZXRlVGFzayh0YXNrLnRleHRDb250ZW50LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFjdGlvbkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25CdG5Db250YWluZXIpO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIH1cbn1cblxuLy8gY29tcGxldGUgdGFzayBmdW5jdGlvblxuZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2tOYW1lLCBwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5maW5kSW5kZXgoXG4gICAgKGUpID0+IGUudGFzayA9PT0gdGFza05hbWVcbiAgKTtcbiAgLy8gZmluZCB0aGUgY3VycmVudCB0YXNrIGluIHRoZSBkYXRhYmFzZVxuICBjb25zdCBjb21wbGV0ZWRUYXNrID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdO1xuICAvLyBtb3ZlIHRoZSBjdXJyZW50IHRhc2sgaW50byB0aGUgY29tcGxldGVkVGFza3MgYXJyYXkgb2YgZGF0YWJhc2VcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzLnB1c2goY29tcGxldGVkVGFzayk7XG4gIC8vIHJlbW92ZSB0aGUgdGFzayBmcm9tIGN1cnJlbnQgdGFza3NcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5zcGxpY2UoXG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5pbmRleE9mKGNvbXBsZXRlZFRhc2spLFxuICAgIDFcbiAgKTtcbiAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgLy8gcmVsb2FkIHRoZSBwYWdlXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiB1bkNvbXBsZXRlVGFzayh0YXNrTmFtZSwgcHJvamVjdEluZGV4KSB7XG5cbiAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzLmZpbmRJbmRleChcbiAgICAoZSkgPT4gZS50YXNrID09PSB0YXNrTmFtZVxuICApO1xuICAvLyBuZWVkIHRvIHNlbGVjdCB0aGUgcmVzcGVjdGl2ZSBET00gZWxlbWVudC4uLlxuICAvLyBmaW5kIHRoZSBjb21wbGV0ZWQgdGFzayBpbiB0aGUgZGF0YWJhc2VcbiAgY29uc3QgdW5Db21wbGV0ZWRUYXNrID1cbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3NbdGFza0luZGV4XTtcbiAgLy8gbW92ZSB0aGUgY29tcGxldGVkIHRhc2sgaW50byB0aGUgY3VycmVudFRhc2tzIGFycmF5IG9mIGRhdGFiYXNlXG4gIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MucHVzaCh1bkNvbXBsZXRlZFRhc2spO1xuICAvLyByZW1vdmUgdGhlIHRhc2sgZnJvbSBjb21wbGV0ZWQgdGFza3NcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzLnNwbGljZShcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MuaW5kZXhPZih1bkNvbXBsZXRlZFRhc2spLFxuICAgIDFcbiAgKTtcbiAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgLy8gcmVsb2FkIHRoZSBwYWdlXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiBlZGl0RGV0YWlscyhzdHIpIHtcbiAgLy8gR2V0IHRoZSBkZXRhaWxzIGNvbnRhaW5lciBlbGVtZW50IGFuZCBzZXQgaXQgdG8gZmxleFxuICBjb25zdCBxdWVyeVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWNvbnRhaW5lclwiKTtcbiAgcXVlcnlTZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIGdyYWIgdGFzayB3aXRoIC5hY3RpdmUtdGFzayBjbGFzcyBuYW1lXG4gIGNvbnN0IHNob3dPckhpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlLXRhc2tcIik7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYW4gYWN0aXZlIHRhc2ssIHNob3cgdGhlIGRldGFpbHMgcGFuZWxcbiAgaWYgKHNob3dPckhpZGUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHN0ci50ZXh0Q29udGVudDtcblxuICAgIC8vIGZpbmQgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSB0YXNrIHByb3ZpZGVkIGFzIGFuIGFyZ3VtZW50IChuZWVkIHRvIGhhdmUgdGhpcyBzZWFyY2ggY29tcGxldGVkIHRhc2tzIGFzIHdlbGwpXG5cbiAgICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gc2VhcmNoIGRhdGFiYXNlIGZvciB0YXNrXG4gICAgbGV0IHRhc2tPYmplY3QgPSBwcm9qZWN0c0FuZFRhc2tzXG4gICAgICAuZmxhdE1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5jdXJyZW50VGFza3MpIC8vIGZsYXR0ZW4gdGhlIG5lc3RlZCBhcnJheSBvZiB0YXNrc1xuICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrID09PSB0YXNrVGl0bGUpOyAvLyBmaWx0ZXIgdGhlIHRhc2tzIGJ5IHRhc2sgbmFtZVxuICAgIGlmICh0YXNrT2JqZWN0ID09IFwiXCIpIHtcbiAgICAgIHRhc2tPYmplY3QgPSBwcm9qZWN0c0FuZFRhc2tzXG4gICAgICAgIC5mbGF0TWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LmNvbXBsZXRlZFRhc2tzKSAvLyBmbGF0dGVuIHRoZSBuZXN0ZWQgYXJyYXkgb2YgdGFza3NcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrID09PSB0YXNrVGl0bGUpO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0V2l0aFRhc2sgPSBwcm9qZWN0c0FuZFRhc2tzXG4gICAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIEZvciBlYWNoIHByb2plY3QsIHdlIGFyZSBnb2luZyB0byBmaW5kIGEgdGFzayB0aGF0IG1hdGNoZXMgdGhlIHRhc2tUaXRsZVxuICAgICAgICBjb25zdCB0YXNrID1cbiAgICAgICAgICBwcm9qZWN0LmN1cnJlbnRUYXNrcy5maW5kKFxuICAgICAgICAgICAgKHRhc2spID0+IHRhc2sudGFzayA9PT0gdGFza1RpdGxlIC8vIENoZWNrIGlmIHRoZSB0YXNrJ3MgdGl0bGUgbWF0Y2hlcyB0aGUgdGFza1RpdGxlIHdlIGFyZSBsb29raW5nIGZvclxuICAgICAgICAgICkgfHwgcHJvamVjdC5jb21wbGV0ZWRUYXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLnRhc2sgPT09IHRhc2tUaXRsZSk7XG4gICAgICAgIC8vIElmIHdlIGZvdW5kIGEgbWF0Y2hpbmcgdGFzaywgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9qZWN0IG5hbWUgYW5kIHRoZSB0YXNrXG4gICAgICAgIC8vIElmIHdlIGRpZG4ndCBmaW5kIGEgbWF0Y2hpbmcgdGFzaywgd2UgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIHRhc2sgPyB7IHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3ROYW1lLCB0YXNrIH0gOiBudWxsO1xuICAgICAgfSlcbiAgICAgIC8vIFdlIGZpbHRlciBvdXQgYW55IG51bGwgdmFsdWVzIGZyb20gdGhlIGFycmF5LCBrZWVwaW5nIG9ubHkgdGhlIHByb2plY3RzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHRhc2tcbiAgICAgIC5maWx0ZXIoKHJlc3VsdCkgPT4gcmVzdWx0ICE9PSBudWxsKTtcblxuICAgIC8vIE5vdywgd2UgY2hlY2sgaWYgd2UgZm91bmQgYW55IHByb2plY3RzIHdpdGggYSBtYXRjaGluZyB0YXNrXG4gICAgLy8gSWYgd2UgZGlkLCB3ZSB0YWtlIHRoZSBwcm9qZWN0IG5hbWUgb2YgdGhlIGZpcnN0IHByb2plY3QgaW4gdGhlIGFycmF5XG4gICAgLy8gSWYgd2UgZGlkbid0IGZpbmQgYW55IHByb2plY3RzLCB3ZSBzZXQgdGhlIHByb2plY3ROYW1lIHRvIG51bGxcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9XG4gICAgICBwcm9qZWN0V2l0aFRhc2subGVuZ3RoID4gMCA/IHByb2plY3RXaXRoVGFza1swXS5wcm9qZWN0TmFtZSA6IG51bGw7XG5cbiAgICAvL3Byb2plY3RcbiAgICAvLyBuZWVkIHRvIGRpc3BsYXkgYWxsIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdHNPYmplY3QgPSBwcm9qZWN0c0FuZFRhc2tzLmZsYXRNYXAoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICAvLyBGaW5kIHRoZSBIVE1MIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIHRoZSBzZWxlY3QgZWxlbWVudCBmb3IgcHJvamVjdCBzZWxlY3Rpb25cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcHJvamVjdC1zZWxlY3RvciA+IHNlbGVjdFwiXG4gICAgKTtcblxuICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBwcm9qZWN0U2VsZWN0b3IgZG9lcyBub3QgaGF2ZSBvcHRpb25zIGFscmVhZHkgZmlsbGVkIGluXG4gICAgaWYgKHByb2plY3RTZWxlY3Rvci5jbGFzc05hbWUgIT0gXCJmaWxsZWRcIikge1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBwcm9qZWN0c09iamVjdCBsaXN0IHRvIGNyZWF0ZSBvcHRpb25zIGZvciB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNPYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IG9wdGlvbiBlbGVtZW50XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgLy8gU2V0IHRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gdG8gdGhlIHByb2plY3QgbmFtZSBhdCB0aGUgY3VycmVudCBpbmRleFxuICAgICAgICBvcHRpb24udGV4dCA9IHByb2plY3RzT2JqZWN0W2ldO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gbWF0Y2hlcyB0aGUgcHJvamVjdE5hbWUgd2Ugd2FudCB0byBzZWxlY3RcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgbWF0Y2gsIHNldCB0aGUgb3B0aW9uIGFzIHNlbGVjdGVkXG4gICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiZmlsbGVkXCIpO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIG9wdGlvbiB0byB0aGUgcHJvamVjdFNlbGVjdG9yIHNlbGVjdCBlbGVtZW50XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9wdGlvbnMgZm9yIHByaW9yaXR5IHNlbGVjdCBlbGVtZW50XG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5ID4gc2VsZWN0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IHByaW9yaXR5U2VsZWN0Lm9wdGlvbnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcmlvcml0eU9wdGlvbnNbaV0udGV4dENvbnRlbnQgPT09IHRhc2tPYmplY3RbMF0ucHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdHlPcHRpb25zW2ldLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9CSkVDVCBEQVRBXG5cbiAgICAvLyBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoXG4gICAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgLy8gdGFza1xuICAgIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWlucHV0LWRldGFpbFwiKTtcbiAgICB0YXNrLnZhbHVlID0gdGFza09iamVjdFswXS50YXNrO1xuICAgIHJlc2l6ZUlucHV0KCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdPy5jdXJyZW50VGFza3M/LmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnRhc2sgPT09IHRhc2sudmFsdWVcbiAgICApO1xuXG4gICAgLy8gZGF0ZUNyZWF0ZWRcbiAgICBsZXQgZGF0ZUNyZWF0ZWQgPSB0YXNrT2JqZWN0WzBdLmRhdGVDcmVhdGVkO1xuXG4gICAgLy8gZGF0ZUR1ZVxuICAgIGxldCBkYXRlRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWR1ZSA+IGlucHV0W3R5cGU9ZGF0ZV1cIik7XG4gICAgZGF0ZUR1ZS52YWx1ZSA9IHRhc2tPYmplY3RbMF0uZGF0ZUR1ZTtcblxuICAgIC8vIHRpbWVEdWVcbiAgICBsZXQgdGltZUR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZS1kdWUgPiBpbnB1dFt0eXBlPXRpbWVdXCIpO1xuICAgIHRpbWVEdWUudmFsdWUgPSB0YXNrT2JqZWN0WzBdLnRpbWVEdWU7XG5cbiAgICAvLyBwcmlvcml0eVxuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eSA+IHNlbGVjdFwiKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRhc2tPYmplY3RbMF0ucHJpb3JpdHk7XG5cbiAgICAvLyBkZXNjXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb24tdGV4dGFyZWFcIik7XG4gICAgZGVzYy52YWx1ZSA9IHRhc2tPYmplY3RbMF0uZGVzYztcblxuICAgIC8vIHNhdmUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG4gICAgbGV0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtYnRuXCIpO1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhdmVEZXRhaWxzKFxuICAgICAgICBwcm9qZWN0U2VsZWN0b3IudmFsdWUsXG4gICAgICAgIHRhc2sudmFsdWUsXG4gICAgICAgIGRhdGVDcmVhdGVkLFxuICAgICAgICBkYXRlRHVlLnZhbHVlLFxuICAgICAgICB0aW1lRHVlLnZhbHVlLFxuICAgICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgZGVzYy52YWx1ZSxcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHRhc2tJbmRleFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIGRlbGV0ZSBidG4gZXZlbnQgbGlzdGVuZXJcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtYnRuXCIpO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlRGV0YWlscyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoc2hvd09ySGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBxdWVyeVNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlRGV0YWlscyhcbiAgcHJvamVjdCxcbiAgdGFzayxcbiAgZGF0ZUNyZWF0ZWQsXG4gIGRhdGVEdWUsXG4gIHRpbWVEdWUsXG4gIHByaW9yaXR5LFxuICBkZXNjLFxuICBwcm9qZWN0TmFtZSxcbiAgb3JpZ2luYWxUYXNrSW5kZXhcbikge1xuICAvLyBzZWN0aW9uIGZvciB0YXNrcyB0aGF0IGhhdmUgbm90IGhhZCB0aGVpciBwcm9qZWN0IGNoYW5nZWRcbiAgaWYgKHByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XG4gICAgLy8gZmluZCBwcm9qZWN0IGluIHByb2plY3RzQW5kVGFzayBhcnJheVxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3RcbiAgICApO1xuXG4gICAgLy8gdXBkYXRlIHRoZSAsIGRhdGUgZHVlLCB0aW1lIGR1ZSwgcHJpb3JpdHksIGFuZCBkZXNjcmlwdGlvbiBpbiB0aGUgYXJyYXlcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS50YXNrID0gdGFzaztcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS5kYXRlRHVlID1cbiAgICAgIGRhdGVEdWU7XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1tvcmlnaW5hbFRhc2tJbmRleF0udGltZUR1ZSA9XG4gICAgICB0aW1lRHVlO1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLnByaW9yaXR5ID1cbiAgICAgIHByaW9yaXR5O1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLmRlc2MgPSBkZXNjO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIHByb2plY3Qgc2VsZWN0ZWQgaXMgZGlmZmVyZW50IHRoYW4gdGFzaydzIG9yaWdpbmFsIHByb2plY3QuLi5cbiAgICAvLyBtYWtlIHN1cmUgdG8gZ2V0IG9yaWdpbmFsIHByb2plY3QgbmFtZSBpbmRleCBmb3IgbGF0ZXIgZGVsZXRpb25cbiAgICBjb25zdCBvbGRQcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICAvLyBmaW5kIG91dCB0aGUgaW5kZXggb2YgdGhlIHByb2plY3ROYW1lIGluIHByb2plY3RzQW5kVGFza3MgdGhhdCBtYXRjaGVzIGBwcm9qZWN0YCAodGhlIG5ldyBwcm9qZWN0IHNlbGVjdGVkJ3MgbmFtZSlcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0XG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSBuZXdUYXNrIG9iamVjdCB0byBsYXRlciBwdXNoIHRvIHByb2plY3RzQW5kVGFza3MgYXJyYXlcbiAgICBsZXQgbmV3VGFzayA9IHtcbiAgICAgIHRhc2s6IHRhc2ssXG4gICAgICBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICAgIGRhdGVEdWU6IGRhdGVEdWUsXG4gICAgICB0aW1lRHVlOiB0aW1lRHVlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgZGVzYzogZGVzYyxcbiAgICB9O1xuICAgIC8vIHB1c2ggbmV3bHkgY3JlYXRlZCB0YXNrIHRvIGNvcnJlY3QgaW5kZXggb2YgcHJvamVjdHNBbmRUYXNrcyBpbiB0aGUgY3VycmVudFRhc2tzIHByb3BlcnR5XG4gICAgcHJvamVjdHNBbmRUYXNrc1tuZXdQcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgLy8gZGVsZXRlIHRoZSBvbGQgY3VycmVudCB0YXNrXG4gICAgcHJvamVjdHNBbmRUYXNrc1tvbGRQcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5zcGxpY2Uob3JpZ2luYWxUYXNrSW5kZXgsIDEpO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICB9XG5cbiAgLy8gcmVsb2FkIHRoZSBwYWdlXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxEZXRhaWxzKCkge1xuICBjb25zdCBxdWVyeVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWNvbnRhaW5lclwiKTtcbiAgcXVlcnlTZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZURldGFpbHMocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpIHtcbiAgbGV0IHRhc2sgPSBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0/LmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdPy50YXNrO1xuICBsZXQgZGVsZXRlQ29uZmlybWF0aW9uID0gcHJvbXB0KFxuICAgIGBBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlIHRhc2s6ICR7dGFza30/ICh5L24pYFxuICApO1xuICBpZiAoZGVsZXRlQ29uZmlybWF0aW9uID09PSBcInlcIikge1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBleHBvcnRzXG5leHBvcnQgeyBwcm9qZWN0Q3JlYXRvciB9O1xuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzIH07XG5leHBvcnQgeyBwcm9qZWN0Q2xpY2tlZCB9O1xuZXhwb3J0IHsgYWN0aXZlUHJvamVjdCB9O1xuZXhwb3J0IHsgcHJldlByb2plY3QgfTtcbmV4cG9ydCB7IGRpc3BsYXlUYXNrcyB9O1xuZXhwb3J0IHsgdGFza0NyZWF0b3IgfTtcbmV4cG9ydCB7IHRhc2tDbGlja2VkIH07XG5leHBvcnQgeyBzYXZlRGV0YWlscyB9O1xuZXhwb3J0IHsgY2FuY2VsRGV0YWlscyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IHByb2plY3RzQW5kVGFza3MgfSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==