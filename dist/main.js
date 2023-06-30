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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#task-input-detail {\n\n}\n\n#details-container {\n  /* grid-area: c; */\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.filter-orange {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.project-action-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-edit-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%; \n}\n\n.project-edit-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.project-delete-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%;\n}\n\n.project-delete-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.proj-edit-hovered {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.proj-del-hovered {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,yCAAyC;AAC3C;;AAEA;EACE,qBAAqB;EACrB,2DAAqD;EACrD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;;AAGA;EACE,aAAa;EACb;;;iBAGe;AACjB;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;;AAEA;;AAEA;EACE,kBAAkB;EAClB,mCAAmC;EACnC,YAAY;EACZ,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;mCACiC;AACnC;;AAEA;EACE;AACF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE;AACF;;AAEA;EACE,yDAAwC;EACxC;iCAC+B;AACjC;;AAEA;EACE,yDAA0C;EAC1C;iCAC+B;AACjC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(\"./fonts/Oswald-Regular.ttf\"), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#task-input-detail {\n\n}\n\n#details-container {\n  /* grid-area: c; */\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/save.svg\");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/cancel.svg\");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/delete.svg\");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.filter-orange {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.project-action-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-edit-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%; \n}\n\n.project-edit-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.project-delete-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%;\n}\n\n.project-delete-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.proj-edit-hovered {\n  background-image: url(./images/edit.svg);\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.proj-del-hovered {\n  background-image: url(./images/delete.svg);\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}\n"],"sourceRoot":""}]);
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
// note: add styling
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
  // set list item's textContent as variable
  const itemText = listItem.textContent;
  // clear list item's textContent
  listItem.textContent = "";
  // create input element for user to rename project
  const input = document.createElement("input");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3huQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Pc3dhbGQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zYXZlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NhbmNlbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYSBhIGEgYSBhIGEgXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiXFxuICAgIFxcXCJiIGMgYyBjIGMgY1xcXCI7XFxufVxcblxcbiN0b3AtYmFyIHtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDcyLCAxODkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxufVxcblxcbiN0b3AtYmFyIGgxIHtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG59XFxuXFxuI2xlZnQtc2lkZS1iYXIge1xcbiAgZ3JpZC1hcmVhOiBiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiN0by1kb3MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODgsIDI0MCk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY3VycmVudC10YXNrcy1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2N1cnJlbnQtdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjg4O1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI2FkZC10YXNrYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jdGFzay1pbnB1dC1iYXIge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtZGV0YWlsIHtcXG5cXG59XFxuXFxuI2RldGFpbHMtY29udGFpbmVyIHtcXG4gIC8qIGdyaWQtYXJlYTogYzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTY1LCAxNzMpO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBtYXJnaW46IDAgMiUgMiUgMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jZGV0YWlscyA+IGRpdiB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuI2RldGFpbHMgaDMge1xcbiAgbWFyZ2luOiAwLjUlO1xcbiAgY29sb3I6IGhvdHBpbms7XFxufVxcblxcbiNkZXRhaWxzIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gIG1hcmdpbjogMC41JTtcXG59XFxuXFxuI3RpbWUtZHVlID4gaW5wdXRbdHlwZT10aW1lXSB7XFxuICB3aWR0aDogNi41cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2RldGFpbHMtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNSU7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuI2RlbGV0ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNhZGQtcHJvamVjdCwgLmFkZGVkLXByb2plY3RzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkZWQtcHJvamVjdHM6aG92ZXIge1xcbiAgY29sb3I6ICNmZmRiNTg7XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLmFjdGl2ZS1wYW5lLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5maWx0ZXItd2hpdGUge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLmZpbHRlci1vcmFuZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4ucHJvamVjdC1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1lZGl0LWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idG46aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5wcm9qLWVkaXQtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5wcm9qLWRlbC1ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTI1ZGVnKVxcbiAgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG4udGFzay1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlLXRhc2sge1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJEQUFxRDtFQUNyRCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiOzs7aUJBR2U7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx5REFBd0M7RUFDeEM7aUNBQytCO0FBQ2pDOztBQUVBO0VBQ0UseURBQTBDO0VBQzFDO2lDQUMrQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvT3N3YWxkLVJlZ3VsYXIudHRmXFxcIiksIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYSBhIGEgYSBhIGEgXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiXFxuICAgIFxcXCJiIGMgYyBjIGMgY1xcXCI7XFxufVxcblxcbiN0b3AtYmFyIHtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDcyLCAxODkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxufVxcblxcbiN0b3AtYmFyIGgxIHtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG59XFxuXFxuI2xlZnQtc2lkZS1iYXIge1xcbiAgZ3JpZC1hcmVhOiBiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiN0by1kb3MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODgsIDI0MCk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY3VycmVudC10YXNrcy1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2N1cnJlbnQtdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjg4O1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI2FkZC10YXNrYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jdGFzay1pbnB1dC1iYXIge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtZGV0YWlsIHtcXG5cXG59XFxuXFxuI2RldGFpbHMtY29udGFpbmVyIHtcXG4gIC8qIGdyaWQtYXJlYTogYzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTY1LCAxNzMpO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBtYXJnaW46IDAgMiUgMiUgMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jZGV0YWlscyA+IGRpdiB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuI2RldGFpbHMgaDMge1xcbiAgbWFyZ2luOiAwLjUlO1xcbiAgY29sb3I6IGhvdHBpbms7XFxufVxcblxcbiNkZXRhaWxzIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gIG1hcmdpbjogMC41JTtcXG59XFxuXFxuI3RpbWUtZHVlID4gaW5wdXRbdHlwZT10aW1lXSB7XFxuICB3aWR0aDogNi41cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2RldGFpbHMtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNSU7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvc2F2ZS5zdmdcXFwiKTtcXG59XFxuXFxuI2NhbmNlbC1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2NhbmNlbC5zdmdcXFwiKTtcXG59XFxuXFxuI2RlbGV0ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QsIC5hZGRlZC1wcm9qZWN0cyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZGVkLXByb2plY3RzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5hY3RpdmUtcGFuZS10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDIuNSU7XFxufVxcblxcbi5wcm9qZWN0LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdHMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5maWx0ZXItb3JhbmdlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZGI1ODtcXG59XFxuXFxuLnByb2plY3QtYWN0aW9uLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXFxufVxcblxcbi5wcm9qZWN0LWVkaXQtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg2NiUpIHNhdHVyYXRlKDcwMDUlKSBodWUtcm90YXRlKDMxNWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKVxcbn1cXG5cXG4ucHJvai1lZGl0LWhvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2VkaXQuc3ZnKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4ucHJvai1kZWwtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvZGVsZXRlLnN2Zyk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTI1ZGVnKVxcbiAgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG4udGFzay1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlLXRhc2sge1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gLS0tIEFQUCBEQVRBIC0tLVxuXG4vLyBQUk9KRUNUcyBBTkQgVEFTS1MgU1RPUkFHRVxuY29uc3QgbG9jYWxTdG9yYWdlID0gIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIik7XG5jb25zdCBwcm9qZWN0c0FuZFRhc2tzID0gKGxvY2FsU3RvcmFnZSAhPSBudWxsKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlKSA6IFtcbiAgeyBwcm9qZWN0TmFtZTogXCJNeSBUYXNrc1wiLCBjdXJyZW50VGFza3M6IFtdLCBjb21wbGV0ZWRUYXNrczogW10gfSwgeyBwcm9qZWN0TmFtZTogXCJPZGluXCIsIGN1cnJlbnRUYXNrczogW10sIGNvbXBsZXRlZFRhc2tzOiBbXSB9XG5dO1xuXG4vLyBleHBvcnRzXG5leHBvcnQgeyBwcm9qZWN0c0FuZFRhc2tzIH07XG4iLCIvLyAtLS0gRE9NIEVMRU1FTlRTIC0tLVxuaW1wb3J0IHsgcHJvamVjdHNBbmRUYXNrcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IHByb2plY3RDcmVhdG9yIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHByb2plY3RDbGlja2VkIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHRhc2tDbGlja2VkIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0YXNrQ3JlYXRvciB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY2FuY2VsRGV0YWlscyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG4vLyBtYWluIGNvbnRhaW5lciBmb3IgdGhlIGFwcFxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8gdG9wIGJhclxuY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvcEJhci5pZCA9IFwidG9wLWJhclwiO1xuXG4vLyB0b3AgYmFyIHRpdGxlXG5jb25zdCB0b3BCYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRvcEJhclRpdGxlLnRleHRDb250ZW50ID0gXCJNYXMgVG8gRG8nc1wiO1xudG9wQmFyVGl0bGUuaWQgPSBcInRpdGxlLWJhclwiO1xudG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhclRpdGxlKTtcblxuLy8gUFJPSkVDVFNcblxuLy8gbGVmdCBzaWRlIGJhclxuY29uc3QgbGVmdFNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGVmdFNpZGVCYXIuaWQgPSBcImxlZnQtc2lkZS1iYXJcIjtcblxuLy8gcHJvamVjdCBzZWN0aW9uIChnb2VzIGluIGxlZnQgc2lkZSBiYXIpXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0c0NvbnRhaW5lci5pZCA9IFwicHJvamVjdHMtY29udGFpbmVyXCI7XG5sZWZ0U2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbi8vIHByb2plY3RzIGxpc3RcbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbnByb2plY3RzTGlzdC5pZCA9IFwicHJvamVjdHMtdWxcIjtcbnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgcHJvamVjdHMgb24gdGhlIGRvbVxuZGlzcGxheVByb2plY3RzKHByb2plY3RzQW5kVGFza3MsIHByb2plY3RzTGlzdCk7XG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBhY3RpdmUgc2VsZWN0ZWQgcHJvamVjdFxucHJvamVjdHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Q2xpY2tlZCk7XG5cbi8vIGFkZCBwcm9qZWN0IGJ1dHRvblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbmFkZFByb2plY3RCdXR0b24uaWQgPSBcImFkZC1wcm9qZWN0XCI7XG5hZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Q3JlYXRvcik7XG5wcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbi8vIHByb2plY3QgYnV0dG9ucyBjb250YWluZXJcbmNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3RCdG5zLmlkID0gXCJwcm9qZWN0LWJ0bnMtY29udGFpbmVyXCI7XG5cbi8vIGVkaXQgcHJvamVjdCBuYW1lIGJ1dHRvblxuY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZWRpdFByb2plY3RCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWJ0bnMgZmlsdGVyLXdoaXRlXCI7XG5lZGl0UHJvamVjdEJ0bi5pZCA9IFwiZWRpdC1idG5cIjtcbmVkaXRQcm9qZWN0QnRuLnRpdGxlID0gXCJFZGl0XCI7XG5cbi8vIGRlbGV0ZSBwcm9qZWN0IGJ1dHRvblxuY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZWxldGVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC1idG5zIGZpbHRlci13aGl0ZVwiO1xuZGVsZXRlUHJvamVjdEJ0bi5pZCA9IFwiZGVsLWJ0blwiO1xuZGVsZXRlUHJvamVjdEJ0bi50aXRsZSA9IFwiRGVsZXRlXCI7XG5cbi8vIHByb2plY3QgYnV0dG9uIGNvbnRhaW5lciBhcHBlbmRhZ2VzXG5wcm9qZWN0QnRucy5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG5wcm9qZWN0QnRucy5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcblxuLy8gVE8gRE9TXG5cbi8vIHRvIGRvIGJvYXJkIGNvbnRhaW5lclxuY29uc3QgdG9kb0JvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b2RvQm9hcmRzQ29udGFpbmVyLmlkID0gXCJ0by1kb3MtY29udGFpbmVyXCI7XG50b2RvQm9hcmRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuLy8gY3VycmVudCB0YXNrcyBjb250YWluZXJcbmNvbnN0IGN1cnJlbnRUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jdXJyZW50VGFza3NDb250YWluZXIuaWQgPSBcImN1cnJlbnQtdGFza3MtY29udGFpbmVyXCI7XG5jdXJyZW50VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbnRvZG9Cb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tzQ29udGFpbmVyKTtcblxuLy8gY3VycmVudCB0YXNrcyB0aXRsZVxuY29uc3QgY3VycmVudFRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5jdXJyZW50VGFza3NUaXRsZS5jbGFzc05hbWUgPSBcImFjdGl2ZS1wYW5lLXRpdGxlXCI7XG5jdXJyZW50VGFza3NUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcbmN1cnJlbnRUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza3NUaXRsZSk7XG5cbi8vIGN1cnJlbnQgdGFza2xpc3RcbmNvbnN0IGN1cnJlbnRUYXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jdXJyZW50VGFza0xpc3RDb250YWluZXIuaWQgPSBcImN1cnJlbnQtdGFzay1saXN0LWNvbnRhaW5lclwiO1xuY3VycmVudFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUYXNrTGlzdENvbnRhaW5lcik7XG5cbi8vIGFkZCB0YXNrcyBjb250YWluZXJcbmNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkVGFza0NvbnRhaW5lci5pZCA9IFwiYWRkLXRhc2tiYXJcIjtcbmN1cnJlbnRUYXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcblxuLy8gYWRkIHRhc2tzIGlucHV0IGJhclxuY29uc3QgYWRkVGFza3NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmFkZFRhc2tzSW5wdXQuaWQgPSBcInRhc2staW5wdXQtYmFyXCI7XG5hZGRUYXNrc0lucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgYSB0YXNrXCI7XG5hZGRUYXNrc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZSkge1xuICAvL2lmIHVzZXIgcHJlc3NlcyBlbnRlciBvbiBrZXlib2FyZFxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIC8vIHJ1biB0YXNrQ3JlYXRvciBhbmQgdXNlIHZhbHVlIGVudGVyZWQgaW4gYWJvdmUgaW5wdXQgZWxlbWVudFxuICAgIHRhc2tDcmVhdG9yKGFkZFRhc2tzSW5wdXQudmFsdWUpO1xuICAgIC8vIGNsZWFyIGFkZFRhc2tzSW5wdXRcbiAgICBhZGRUYXNrc0lucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5hZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tzSW5wdXQpO1xuXG4vLyBhZGQgdGFza3Mgc3VibWl0IGJ1dHRvblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5hZGRUYXNrQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuLy8gbm90ZTogYWRkIHN0eWxpbmdcbmFkZFRhc2tCdG4uaWQgPSBcImFkZC10YXNrLWJ0blwiO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBnZXQgaW5wdXQgaWQgZm9yIHRhc2stYmFyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWlucHV0LWJhclwiKTtcbiAgLy8gcnVuIHRhc2tDcmVhdG9yIGFuZCB1c2UgdmFsdWUgZW50ZXJlZCBpbiBhYm92ZSBpbnB1dCBlbGVtZW50XG4gIHRhc2tDcmVhdG9yKGlucHV0LnZhbHVlKTtcbiAgLy8gY2xlYXIgaW5wdXRcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbi8vIGN1cnJlbnQgdGFza3MgdW5vcmRlcmVkIGxpc3RcbmNvbnN0IGN1cnJlbnRUYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jdXJyZW50VGFza0xpc3QuaWQgPSBcImN1cnJlbnQtdGFza3MtdWxcIjtcbmN1cnJlbnRUYXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza0xpc3QpO1xuXG4vLyBjdXJyZW50IHRhc2tzIGxpc3QgaXRlbVxuY29uc3QgYWRkVGFza0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuYWRkVGFza0xpc3RJdGVtLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stbGlcIjtcblxuLy8gZGlzcGxheSBhbGwgdGFza3NcbmRpc3BsYXlUYXNrcyhhY3RpdmVQcm9qZWN0LCBwcm9qZWN0c0FuZFRhc2tzLCBjdXJyZW50VGFza0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWN0aXZlIHNlbGVjdGVkIHRhc2tcbmN1cnJlbnRUYXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0NsaWNrZWQpO1xuXG4vLyBERVRBSUxTXG5cbi8vIGRldGFpbHMgYm9hcmQgY29udGFpbmVyXG5jb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNDb250YWluZXIuaWQgPSBcImRldGFpbHMtY29udGFpbmVyXCI7XG5kZXRhaWxzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gZGV0YWlscyB0aXRsZVxuY29uc3QgZGV0YWlsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuZGV0YWlsc1RpdGxlLmNsYXNzTmFtZSA9IFwiYWN0aXZlLXBhbmUtdGl0bGVcIjtcbmRldGFpbHNUaXRsZS50ZXh0Q29udGVudCA9IFwiRGV0YWlsc1wiO1xuZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzVGl0bGUpO1xuXG4vLyBkZXRhaWxzIHBhbmVcbmNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlscy5pZCA9IFwiZGV0YWlsc1wiO1xuZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuLy8gZGV0YWlscyBwcm9qZWN0IHNlbGVjdG9yIGNvbnRhaW5lclxuY29uc3QgcHJvamVjdFNlbGVjdG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3RTZWxlY3RvckNvbnRhaW5lci5pZCA9IFwicHJvamVjdC1zZWxlY3RvclwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0b3JDb250YWluZXIpO1xuXG4vLyBkZXRhaWxzIHByb2plY3Qgc2VsZWN0b3IgdGl0bGVcbmNvbnN0IHNlbGVjdFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnNlbGVjdFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xucHJvamVjdFNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3RUaXRsZSk7XG5cbi8vIGRldGFpbHMgcHJvamVjdCBzZWxlY3RvclxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5wcm9qZWN0U2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG5cbi8vIGRldGFpbHMgdGFzayBpbnB1dCBjb250YWluZXJcbmNvbnN0IHRhc2tJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrSW5wdXRDb250YWluZXIuaWQgPSBcImVkaXQtdGFzay1uYW1lXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tJbnB1dENvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgdGFzayB0aXRsZVxuY29uc3QgdGFza0lucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50YXNrSW5wdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza1wiO1xudGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dFRpdGxlKTtcblxuLy8gZGV0YWlscyB0YXNrIGlucHV0XG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrSW5wdXQuaWQgPSBcInRhc2staW5wdXQtZGV0YWlsXCI7XG50YXNrSW5wdXQudmFsdWUgPSBcIlBsYWNlaG9sZGVyXCI7XG50YXNrSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuLy8gZGV0YWlscyBkYXRlIGR1ZSBjb250YWluZXJcbmNvbnN0IGRhdGVEdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGF0ZUR1ZUNvbnRhaW5lci5pZCA9IFwiZGF0ZS1kdWVcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQoZGF0ZUR1ZUNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgZGF0ZSBkdWUgc2VsZWN0b3IgdGl0bGVcbmNvbnN0IGRhdGVEdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmRhdGVEdWVUaXRsZS50ZXh0Q29udGVudCA9IFwiRGF0ZSBEdWVcIjtcbmRhdGVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUR1ZVRpdGxlKTtcblxuLy8gZGV0YWlscyBkYXRlIGR1ZSBpbnB1dFxuY29uc3QgZGF0ZUR1ZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuZGF0ZUR1ZVNlbGVjdG9yLnR5cGUgPSBcImRhdGVcIjtcbmRhdGVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUR1ZVNlbGVjdG9yKTtcblxuLy8gZGV0YWlscyB0aW1lIGR1ZSBjb250YWluZXJcbmNvbnN0IHRpbWVEdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGltZUR1ZUNvbnRhaW5lci5pZCA9IFwidGltZS1kdWVcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGltZUR1ZUNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgdGltZSBkdWUgc2VsZWN0b3IgdGl0bGVcbmNvbnN0IHRpbWVEdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnRpbWVEdWVUaXRsZS50ZXh0Q29udGVudCA9IFwiVGltZSBEdWVcIjtcbnRpbWVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUR1ZVRpdGxlKTtcblxuLy8gZGV0YWlscyB0aW1lIGR1ZSBpbnB1dFxuY29uc3QgdGltZUR1ZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGltZUR1ZVNlbGVjdG9yLnR5cGUgPSBcInRpbWVcIjtcbnRpbWVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUR1ZVNlbGVjdG9yKTtcblxuLy8gdGFzayBwcmlvcml0eSBjb250YWluZXJcbmNvbnN0IHRhc2tQcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrUHJpb3JpdHlDb250YWluZXIuaWQgPSBcInRhc2stcHJpb3JpdHlcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5Q29udGFpbmVyKTtcblxuLy8gdGFzayBwcmlvcml0eSB0aXRsZVxuY29uc3QgdGFza1ByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50YXNrUHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFzayBQcmlvcml0eVwiO1xudGFza1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVRpdGxlKTtcblxuLy8gdGFzayBwcmlvcml0eSBzZWxlY3RvclxuY29uc3QgdGFza1ByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xudGFza1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVNlbGVjdG9yKTtcblxuLy8gbm9uZSBwcmlvcml0eSBvcHRpb25cbmNvbnN0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xubm9Qcmlvcml0eS50ZXh0ID0gXCJOb25lXCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcblxuLy8gbG93IHByaW9yaXR5IG9wdGlvblxuY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xubG93UHJpb3JpdHkudGV4dCA9IFwiTG93XCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbi8vIG1lZGl1bSBwcmlvcml0eSBvcHRpb25cbmNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbm1lZFByaW9yaXR5LnRleHQgPSBcIk1lZGl1bVwiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobWVkUHJpb3JpdHkpO1xuXG4vLyBoaWdoIHByaW9yaXR5IG9wdGlvblxuY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbmhpZ2hQcmlvcml0eS50ZXh0ID0gXCJIaWdoXCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4vLyBkZXRhaWxzIGRlc2NyaXB0aW9uIGNvbnRhaW5lclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5pZCA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25Db250YWluZXIpO1xuXG4vLyBkZXRhaWxzIGRlc2NyaXB0aW9uIHRpdGxlXG5jb25zdCB0YXNrRGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnRhc2tEZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xudGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvblRpdGxlKTtcblxuLy8gZGV0YWlscyBkZXNjcmlwdGlvbiB0ZXh0YXJlYVxuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xudGFza0Rlc2NyaXB0aW9uLmlkID0gXCJ0YXNrLWRlc2NyaXB0aW9uLXRleHRhcmVhXCI7XG50YXNrRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkVudGVyIGRlc2NyaXB0aW9uIG9mIHRhc2sgKE1heGltdW0gb2YgMjgwIGNoYXJhY3RlcnMpLlwiO1xudGFza0Rlc2NyaXB0aW9uLm1heExlbmd0aCA9IDI4MDtcbnRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4vLyBkZXRhaWxzIGJ1dHRvbnMgY29udGFpbmVyXG5jb25zdCBkZXRhaWxzQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNCdG5Db250YWluZXIuaWQgPSBcImRldGFpbHMtYnRuLWNvbnRhaW5lclwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzQnRuQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyBzYXZlIGJ0blxuY29uc3QgZGV0YWlsc1NhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlsc1NhdmVCdG4uaWQgPSBcInNhdmUtYnRuXCI7XG5kZXRhaWxzU2F2ZUJ0bi50aXRsZSA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG5kZXRhaWxzQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNTYXZlQnRuKTtcblxuLy8gZGV0YWlscyBjYW5jZWwgYnRuXG5jb25zdCBkZXRhaWxzQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNDYW5jZWxCdG4uaWQgPSBcImNhbmNlbC1idG5cIjtcbmRldGFpbHNDYW5jZWxCdG4udGl0bGUgPSBcIkNhbmNlbCBDaGFuZ2VzXCI7XG5kZXRhaWxzQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICBjYW5jZWxEZXRhaWxzKCk7XG59KVxuZGV0YWlsc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQ2FuY2VsQnRuKTtcblxuLy8gZGV0YWlscyBkZWxldGUgYnRuXG5jb25zdCBkZXRhaWxzRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNEZWxldGVCdG4uaWQgPSBcImRlbGV0ZS1idG5cIjtcbmRldGFpbHNEZWxldGVCdG4udGl0bGUgPSBcIkRlbGV0ZSBUYXNrXCI7XG5kZXRhaWxzQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNEZWxldGVCdG4pO1xudG9kb0JvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQ29udGFpbmVyKTtcblxuLy8gZG9tICNjb250ZW50IGFwcGVuZHNcbmJvZHkuYXBwZW5kQ2hpbGQodG9wQmFyKTtcbmJvZHkuYXBwZW5kQ2hpbGQobGVmdFNpZGVCYXIpO1xuYm9keS5hcHBlbmRDaGlsZCh0b2RvQm9hcmRzQ29udGFpbmVyKTtcblxuZXhwb3J0IHsgYm9keSB9O1xuZXhwb3J0IHsgY3VycmVudFRhc2tMaXN0IH07XG4iLCIvLyAtLS0gQVBQIEZVTkNUSU9OUyAtLS1cbmltcG9ydCB7IHByb2plY3RzQW5kVGFza3MgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBjdXJyZW50VGFza0xpc3QgfSBmcm9tIFwiLi9kb21cIjtcblxuLy8gZGF0ZSBmdW5jdGlvbnNcbi8vIGNyZWF0ZSBuZXdEYXRlIGJhc2VkIG9uIGN1cnJlbnQgZGF0ZVxuZnVuY3Rpb24gY3VycmVudERhdGUoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgaG91cjEyOiBmYWxzZSxcbiAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgfSk7XG5cbiAgLy8gZnVuY3Rpb24gdG8gYWRkIHR3byBkaWdpdCBwYWRkaW5nXG4gIGZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGN1cnJlbnRNb250aCA9IHBhZFRvMkRpZ2l0cyhkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgY29uc3QgY3VycmVudERheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjdXJyZW50WWVhci50b1N0cmluZygpO1xuICBjb25zdCB5ZWFyTW9udGhEYXkgPSBgJHtjdXJyZW50WWVhcn0tJHtjdXJyZW50TW9udGh9LSR7Y3VycmVudERheX1gO1xuICByZXR1cm4geyB5ZWFyTW9udGhEYXksIHRpbWUgfTtcbn1cblxuLy8gYXV0b21hdGljYWxseSByZXNpemVzIHNlbGVjdCBvcHRpb25zIGFuZCBpbnB1dCBlbGVtZW50c1xuZnVuY3Rpb24gcmVzaXplSW5wdXQoKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1pbnB1dC1kZXRhaWxcIik7IC8vIEdldCB0aGUgaW5wdXQgZWxlbWVudCB3aXRoIHRoZSBpZCBcInRhc2staW5wdXQtZGV0YWlsXCJcbiAgbGV0IHRleHRXaWR0aCA9IGdldFRleHRXaWR0aChpbnB1dC52YWx1ZSwgZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dCkuZm9udCk7IC8vIEdldCB0aGUgd2lkdGggb2YgdGhlIGlucHV0IHZhbHVlXG4gIGlucHV0LnN0eWxlLndpZHRoID0gdGV4dFdpZHRoICsgXCJweFwiOyAvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBpbnB1dCBlbGVtZW50IHRvIHRoZSBjYWxjdWxhdGVkIHRleHQgd2lkdGhcbn1cblxuZnVuY3Rpb24gZ2V0VGV4dFdpZHRoKHRleHQsIGZvbnQpIHtcbiAgbGV0IGNhbnZhcyA9XG4gICAgZ2V0VGV4dFdpZHRoLmNhbnZhcyB8fFxuICAgIChnZXRUZXh0V2lkdGguY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSk7XG4gIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29udGV4dC5mb250ID0gZm9udDtcbiAgbGV0IG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpO1xuICByZXR1cm4gbWV0cmljcy53aWR0aDtcbn1cblxuLy8gZmluZCBwcm9qZWN0IGluZGV4XG5mdW5jdGlvbiBwcm9qZWN0SW5kZXgocHJvamVjdCkge1xuICBjb25zdCBpbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0KTtcbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vLyBjcmVhdGVzIHByb2plY3RzIGluIGRhdGFiYXNlXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRvcigpIHtcbiAgLy8gcHJvbXB0IHVzZXIgZm9yIHByb2plY3QgbmFtZVxuICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdChcIkVudGVyIHByb2plY3QgbmFtZTpcIik7XG4gIC8vIHRha2UgcHJvamVjdCBuYW1lIGFuZCBjaGVjayBpZiBwcm9qZWN0IG5hbWUgaXMgZW1wdHkgc3RyaW5nIG9yIGFuIGV4aXN0aW5nIHByb2plY3RcbiAgLy8gLnNvbWUoKSBpcyB1c2VkIG9uIGFycmF5IHRvIHNlYXJjaCBpZiBwcm9qZWN0TmFtZSBhbHJlYWR5IGV4aXN0c1xuICBpZiAoXG4gICAgcHJvamVjdE5hbWUgIT0gbnVsbCAmJlxuICAgICFwcm9qZWN0c0FuZFRhc2tzLnNvbWUoKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKVxuICApIHtcbiAgICAvLyBub3cgY3JlYXRlIGEgbmV3IG9iamVjdCBpbiB0aGUgZGF0YWJhc2Ugd2l0aCB0aGUgbmV3IHByb2plY3QgbmFtZVxuICAgIHByb2plY3RzQW5kVGFza3MucHVzaCh7XG4gICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUsXG4gICAgICBjdXJyZW50VGFza3M6IFtdLFxuICAgICAgY29tcGxldGVkVGFza3M6IFtdLFxuICAgIH0pO1xuICAgIC8vIHNhdmUgbmV3bHkgY3JlYXRlZCBwcm9qZWN0IHRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHJlbG9hZCB0aGUgZG9jdW1lbnRcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHJlbmFtZSBwcm9qZWN0c1xuZnVuY3Rpb24gcmVuYW1lUHJvamVjdChwcm9qZWN0KSB7XG4gIC8vIGZpbmQgdGhlIHByb2plY3QgaW5kZXggaW4gdGhlIGRhdGFiYXNlXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdEluZGV4KHByb2plY3QpO1xuICAvLyBncmFiIGxpc3QgaXRlbSB0aGF0IG1hdGNoZXMgcHJvamVjdCBuYW1lXG4gIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnbGlbZGF0YS1wcm9qZWN0LW5hbWU9XCInICsgcHJvamVjdCArICdcIl0nXG4gICk7XG4gIC8vIHNldCBsaXN0IGl0ZW0ncyB0ZXh0Q29udGVudCBhcyB2YXJpYWJsZVxuICBjb25zdCBpdGVtVGV4dCA9IGxpc3RJdGVtLnRleHRDb250ZW50O1xuICAvLyBjbGVhciBsaXN0IGl0ZW0ncyB0ZXh0Q29udGVudFxuICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIC8vIGNyZWF0ZSBpbnB1dCBlbGVtZW50IGZvciB1c2VyIHRvIHJlbmFtZSBwcm9qZWN0XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIC8vIHNldCBpbnB1dCdzIHN0YXJ0aW5nIHZhbHVlIHRvIHByb2plY3QgbmFtZVxuICBpbnB1dC52YWx1ZSA9IGl0ZW1UZXh0O1xuICAvLyBsaXN0ZW4gZm9yIGVudGVyIGtleSBwcmVzc1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlIGZvciBsaXN0IGl0ZW0ncyB0ZXh0Q29udGVudCBiYXNlZCBvbiB1c2VycyBpbnB1dFxuICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgIC8vIHVwZGF0ZSBkYXRhYmFzZSB0aHJvdWdoIHBhdGggdG8gbWF0Y2hlZCBwcm9qZWN0IG5hbWVcbiAgICAgIHByb2plY3RzQW5kVGFza3NbaW5kZXhdLnByb2plY3ROYW1lID0gbGlzdEl0ZW0udGV4dENvbnRlbnQ7XG4gICAgICAvLyB1cGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJwcm9qZWN0c0FuZFRhc2tzXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpXG4gICAgICApO1xuICAgICAgLy8gcmVsb2FkIHBhZ2VcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBpbnB1dC5mb2N1cygpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBkZWxldGUgcHJvamVjdHNcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAvLyBmaW5kIGluZGV4IG9mIHByb2plY3ROYW1lXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdEluZGV4KHByb2plY3QpO1xuICAvLyB0YXJnZXQgbG9jYXRpb24gb2YgcHJvamVjdFxuICBwcm9qZWN0c0FuZFRhc2tzW2luZGV4XS5wcm9qZWN0TmFtZTtcbiAgLy8gc3BsaWNlIHByb2plY3Qgb3V0IG9mIGRhdGFiYXNlIChjb25maXJtKVxuICBsZXQgZGVsZXRlQ29uZmlybWF0aW9uID0gcHJvbXB0KFxuICAgIGBBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlIHByb2plY3Q6ICR7cHJvamVjdHNBbmRUYXNrc1tpbmRleF0ucHJvamVjdE5hbWV9PyBUaGlzIHdpbGwgZGVsZXRlIGFsbCB0YXNrcyB3aXRoaW4gdGhpcyBwcm9qZWN0IGFzIHdlbGwhICh5L24pYFxuICApO1xuICBpZiAoZGVsZXRlQ29uZmlybWF0aW9uID09PSBcInlcIikge1xuICAgIHByb2plY3RzQW5kVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gICAgLy8gcmVsb2FkIHBhZ2VcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gdmFyaWFibGUgdG8gc2VsZWN0IHNwZWNpZmljIHByb2plY3RcbmNvbnN0IGFjdGl2ZVByb2plY3RMb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIpO1xubGV0IHByZXZQcm9qZWN0ID0gbnVsbDtcbmxldCBhY3RpdmVQcm9qZWN0ID1cbiAgYWN0aXZlUHJvamVjdExvY2FsU3RvcmFnZSAhPSBudWxsID8gYWN0aXZlUHJvamVjdExvY2FsU3RvcmFnZSA6IG51bGw7XG5cbi8vIGZ1bmN0aW9uIHRvIHN3aXRjaCB3aGljaCBwcm9qZWN0IGlzIGFjdGl2ZVxuY29uc3QgcHJvamVjdENsaWNrZWQgPSAoZSkgPT4ge1xuICAvLyBjaGVjayB0byBzZWUgaWYgZWxlbWVudCBjbGlja2VkIGlzIGEgPGxpPiAobGlzdCBpdGVtKVxuICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiTElcIikge1xuICAgIC8vIGFkZCAuYWN0aXZlIGNsYXNzIHRvIGVsZW1lbnQgY2xpY2tlZFxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICBhY3RpdmVQcm9qZWN0ID0gZS50YXJnZXQ7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVQcm9qZWN0XCIsIGFjdGl2ZVByb2plY3QudGV4dENvbnRlbnQpO1xuICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBpcyBhIHByZXZpb3VzIHByb2plY3QgdGhhdCB3YXMgYWN0aXZlXG4gICAgaWYgKHByZXZQcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAvLyByZW1vdmVzIGFjdGl2ZSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50XG4gICAgICBwcmV2UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgfVxuICAgIC8vIHNldCBwcmV2UHJvamVjdCBhcyB0aGUgY2xpY2tlZCBIVE1MSUVsZW1lbnRcbiAgICBwcmV2UHJvamVjdCA9IGUudGFyZ2V0O1xuICB9XG59O1xuXG4vLyBkaXNwbGF5cyBwcm9qZWN0cyBvbnRvIHRoZSBET01cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhhcnIsIHBhcmVudE5vZGUpIHtcbiAgLy8gbG9vcCB0aHJvdWdoIGFycmF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gY3JlYXRlIGxpc3QgaXRlbSBmb3IgcHJvamVjdFxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgLy8gZ2l2ZSBpdCBjbGFzcyB1c2VkIGZvciBhZGRlZCBwcm9qZWN0c1xuICAgIGFkZFByb2plY3QuY2xhc3NOYW1lID0gXCJhZGRlZC1wcm9qZWN0c1wiO1xuICAgIC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IG5hbWUgZm91bmQgaW4gdGhpcyBpdGVyYXRpb25cbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gYXJyW2ldLnByb2plY3ROYW1lO1xuICAgIC8vIHNldCBhIGRhdGEgYXR0cmlidXRlIGZvciBpdFxuICAgIGFkZFByb2plY3QuZGF0YXNldC5wcm9qZWN0TmFtZSA9IGFycltpXS5wcm9qZWN0TmFtZTtcbiAgICAvLyBjcmVhdGUgY29uZGl0aW9uYWwgdG8gY2hlY2sgaWYgZGVmYXVsdCB0YXNrIGlzIG1hdGNoZWRcbiAgICBpZiAoYXJyW2ldLnByb2plY3ROYW1lID09PSBhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAvLyBzZXQgZGVmYXVsdCBwcm9qZWN0IHRvIGFjdGl2ZVxuICAgICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgICAvLyBzZXQgdmFyaWFibGUgdGhhdCBtb25pdG9ycyBhY3RpdmUgcHJvamVjdHMgdG8gZGVmYXVsdCBwcm9qZWN0XG4gICAgICBwcmV2UHJvamVjdCA9IGFkZFByb2plY3Q7XG4gICAgfVxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBpbmNsdWRlIHRhc2tzIGZvciB0aGUgcHJvamVjdFxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gc3RvcmUgcHJvamVjdCBuYW1lIGNsaWNrZWRcbiAgICAgIGxldCBwcm9qZWN0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAvLyB1c2UgYWJvdmUgdmFyaWFibGUgYXMgYXJnIGZvciBkaXNwbGF5VGFza3MoKVxuICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QsIHByb2plY3RzQW5kVGFza3MsIGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgfSk7XG4gICAgLy8gcHJvamVjdCBhY3Rpb24gYnV0dG9uIGNvbnRhaW5lclxuICAgIGNvbnN0IHByb2plY3RBY3Rpb25CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBY3Rpb25CdG5Db250YWluZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWFjdGlvbi1idG4tY29udGFpbmVyXCI7XG5cbiAgICAvLyBwcm9qZWN0IHJlbmFtZSBidXR0b25cbiAgICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEVkaXRCdG4udGl0bGUgPSBcIlJlbmFtZSBQcm9qZWN0XCI7XG4gICAgcHJvamVjdEVkaXRCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWVkaXQtYnRuXCI7XG4gICAgcHJvamVjdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgcmVuYW1lUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vIHByb2plY3QgZGVsZXRpb24gYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi50aXRsZSA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC1kZWxldGUtYnRuXCI7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwZW5kIHByb2plY3QgYWN0aW9uIGJ1dHRvbnNcbiAgICBwcm9qZWN0QWN0aW9uQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnRuKTtcbiAgICBwcm9qZWN0QWN0aW9uQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEFjdGlvbkJ0bkNvbnRhaW5lcik7XG5cbiAgICAvLyBtb3VzZSBpbiBhbmQgb3V0IGV2ZW50IGxpc3RlbmVycyBmb3IgaG92ZXIgY29sb3IgY2hhbmdlIHN0YXR1c1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdEVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInByb2otZWRpdC1ob3ZlcmVkXCIpO1xuICAgICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWwtaG92ZXJlZFwiKTtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qLWVkaXQtaG92ZXJlZFwiKTtcbiAgICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LnJlbW92ZShcInByb2otZGVsLWhvdmVyZWRcIik7XG4gICAgfSk7XG4gICAgLy8gYXBwZW5kIG5ld2x5IGFkZGVkIHByb2plY3QgdG8gc3BlY2lmaWVkIG5vZGVcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICB9XG59XG5cbi8vIGNyZWF0ZXMgdGFza3NcbmZ1bmN0aW9uIHRhc2tDcmVhdG9yKHRhc2spIHtcbiAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIHNlYXJjaCBkYXRhYmFzZSBhcnJheSBmb3IgcHJvamVjdCB0aGF0IGlzIGN1cnJlbnRseSBhY3RpdmVcbiAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHByb2plY3RzQW5kVGFza3Muc29tZShcbiAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJldlByb2plY3QudGV4dENvbnRlbnRcbiAgKTtcbiAgLy8gZmluZCBpbmRleCBvZiBwcm9qZWN0IGZvdW5kIGluIGRhdGFiYXNlXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcmV2UHJvamVjdC50ZXh0Q29udGVudFxuICApO1xuXG4gIC8vIGNyZWF0ZSBuZXdUYXNrIG9iamVjdCB0byBsYXRlciBwdXNoIHRvIHByb2plY3RzQW5kVGFza3MgYXJyYXlcbiAgbGV0IG5ld1Rhc2sgPSB7XG4gICAgdGFzazogdGFzayxcbiAgICBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICBkYXRlRHVlOiBjdXJyZW50RGF0ZSgpLnllYXJNb250aERheSxcbiAgICB0aW1lRHVlOiBjdXJyZW50RGF0ZSgpLnRpbWUsXG4gICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgIGRlc2M6IFwiXCIsXG4gIH07XG4gIC8vIHB1c2ggbmV3bHkgY3JlYXRlZCB0YXNrIHRvIGNvcnJlY3QgaW5kZXggb2YgcHJvamVjdHNBbmRUYXNrcyBpbiB0aGUgY3VycmVudFRhc2tzIHByb3BlcnR5XG4gIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MucHVzaChuZXdUYXNrKTtcbiAgLy8gcmVsb2FkIHRoZSBkb2N1bWVudFxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgLy8gc2F2ZSB0byBsb2NhbFN0b3JhZ2UgdG8ga2VlcCBkYXRhIGFmdGVyIHBhZ2UgcmVsb2Fkc1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgXCJwcm9qZWN0c0FuZFRhc2tzXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcylcbiAgKTtcbn1cblxuLy8gdmFyaWFibGUgdG8gc2VsZWN0IHNwZWNpZmljIHByb2plY3RcbmxldCBwcmV2VGFzayA9IG51bGw7IC8vIGRlY2xhcmUgcHJldlRhc2sgYXQgYSBoaWdoZXIgc2NvcGUgbGV2ZWxcblxuY29uc3QgdGFza0NsaWNrZWQgPSAoZSkgPT4ge1xuICAvLyBjaGVjayB0byBzZWUgaWYgdGFzayBjbGlja2VkIGhhcyBhY3RpdmUtdGFzayBhcyBhIGNsYXNzIG5hbWVcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2stbGlzdC1pdGVtIGFjdGl2ZS10YXNrXCIpIHtcbiAgICAvLyByZWxvYWQgdGhlIHBhZ2Ugc28gbmV3IGFwcGxpY2F0aW9ucyBvZiBlZGl0RGV0YWlscygpIGNhbiBydW5cbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiTElcIikge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtdGFza1wiKTtcbiAgICBpZiAocHJldlRhc2sgIT09IG51bGwpIHtcbiAgICAgIHByZXZUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtdGFza1wiKTtcbiAgICB9XG4gICAgcHJldlRhc2sgPSBlLnRhcmdldDtcbiAgfVxuICBpZiAoZS50YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gIT0gXCJsaW5lLXRocm91Z2hcIikge1xuICAgIGVkaXREZXRhaWxzKGUudGFyZ2V0KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHByb2plY3QsIGFyciwgcGFyZW50Tm9kZSkge1xuICAvLyBmaXJzdCBmaW5kIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIGFycmF5XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0XG4gICk7XG4gIC8vIGNyZWF0ZSBlbXB0eSBhcnJheSBmb3IgY3VycmVudCB0YXNrc1xuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIC8vIGV4dHJhY3RzIHRhc2tzIGZyb20gJ2N1cnJlbnRUYXNrcycgcHJvcGVydHkgb2YgYW4gb2JqZWN0IGluIHRoZSAnYXJyJyBhcnJheSBhbmQgcHVzaGVzIGludG8gdGhlIHRhc2tzIGFycmF5XG4gIGlmIChwcm9qZWN0SW5kZXggIT0gLTEpIHtcbiAgICBPYmplY3QudmFsdWVzKGFycltwcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGFycltwcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gcHVzaCBuZXcgdGFzayBpbnRvIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICAgICAgdGFza3MucHVzaChlLnRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC52YWx1ZXMoYXJyW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChhcnJbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gcHVzaCBuZXcgdGFzayBpbnRvIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICAgICAgdGFza3MucHVzaChlLnRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gcmVzZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBwYXJlbnROb2RlIGFyZ3VtZW50XG4gIHBhcmVudE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBmb3IgbG9vcCB0byBjcmVhdGUgdGFza3MsIGNoZWNrYm94ZXMgYW5kIGFkZCBjbGFzc2VzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFzay1saXN0LWl0ZW0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBhY3Rpb25CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFjdGlvbkJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2stYWN0aW9uLWJ0bi1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9IFwidGFzay1saXN0LWl0ZW1cIjtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHRhc2tzW2ldO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29tcGxldGVCdG4uY2xhc3NOYW1lID0gXCJ0YXNrLWNvbXBsZXRlLWJ0blwiO1xuICAgIGNvbXBsZXRlQnRuLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY29tcGxldGVCdG4udGl0bGUgPSBcIkNvbXBsZXRlIFRhc2tcIjtcbiAgICAvLyBsb29wIHRocm91Z2ggY29tcGxldGVkIHRhc2tzIGFuZCBhZGQgc3RyaWtldGhyb3VnaCBhbmQgY2hlY2tlZCBib3ggdG8gdGFza3MgdGhhdCBtYXRjaCBjdXJyZW50IHRhc2sgaXRlcmF0aW9uXG4gICAgZm9yIChcbiAgICAgIGxldCBqID0gMDtcbiAgICAgIGogPCBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MubGVuZ3RoO1xuICAgICAgaisrXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrc1tqXS50YXNrLmluY2x1ZGVzKHRhc2tzW2ldKVxuICAgICAgKSB7XG4gICAgICAgIGxpc3RJdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgICAgY29tcGxldGVCdG4uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBjb21wbGV0aW9uIG9mIHRhc2tcbiAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBpZiAoY29tcGxldGVCdG4uY2hlY2tlZCkge1xuICAgICAgICAvLyBtYW5pcHVsYXRlIHRoZSBET00gZWxlbWVudCBvZiB0YXNrIHRvIGluY2x1ZGUgc3RyaWtldGhyb3VnaCBvZiB0ZXh0XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICBjb21wbGV0ZVRhc2sodGFzay50ZXh0Q29udGVudCwgcHJvamVjdEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSBcIlwiO1xuICAgICAgICB1bkNvbXBsZXRlVGFzayh0YXNrLnRleHRDb250ZW50LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFjdGlvbkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25CdG5Db250YWluZXIpO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIH1cbn1cblxuLy8gY29tcGxldGUgdGFzayBmdW5jdGlvblxuZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2tOYW1lLCBwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5maW5kSW5kZXgoXG4gICAgKGUpID0+IGUudGFzayA9PT0gdGFza05hbWVcbiAgKTtcbiAgLy8gZmluZCB0aGUgY3VycmVudCB0YXNrIGluIHRoZSBkYXRhYmFzZVxuICBjb25zdCBjb21wbGV0ZWRUYXNrID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdO1xuICAvLyBtb3ZlIHRoZSBjdXJyZW50IHRhc2sgaW50byB0aGUgY29tcGxldGVkVGFza3MgYXJyYXkgb2YgZGF0YWJhc2VcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzLnB1c2goY29tcGxldGVkVGFzayk7XG4gIC8vIHJlbW92ZSB0aGUgdGFzayBmcm9tIGN1cnJlbnQgdGFza3NcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5zcGxpY2UoXG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5pbmRleE9mKGNvbXBsZXRlZFRhc2spLFxuICAgIDFcbiAgKTtcbiAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgLy8gcmVsb2FkIHRoZSBwYWdlXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiB1bkNvbXBsZXRlVGFzayh0YXNrTmFtZSwgcHJvamVjdEluZGV4KSB7XG5cbiAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzLmZpbmRJbmRleChcbiAgICAoZSkgPT4gZS50YXNrID09PSB0YXNrTmFtZVxuICApO1xuICAvLyBuZWVkIHRvIHNlbGVjdCB0aGUgcmVzcGVjdGl2ZSBET00gZWxlbWVudC4uLlxuICAvLyBmaW5kIHRoZSBjb21wbGV0ZWQgdGFzayBpbiB0aGUgZGF0YWJhc2VcbiAgY29uc3QgdW5Db21wbGV0ZWRUYXNrID1cbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3NbdGFza0luZGV4XTtcbiAgLy8gbW92ZSB0aGUgY29tcGxldGVkIHRhc2sgaW50byB0aGUgY3VycmVudFRhc2tzIGFycmF5IG9mIGRhdGFiYXNlXG4gIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MucHVzaCh1bkNvbXBsZXRlZFRhc2spO1xuICAvLyByZW1vdmUgdGhlIHRhc2sgZnJvbSBjb21wbGV0ZWQgdGFza3NcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzLnNwbGljZShcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MuaW5kZXhPZih1bkNvbXBsZXRlZFRhc2spLFxuICAgIDFcbiAgKTtcbiAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgLy8gcmVsb2FkIHRoZSBwYWdlXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiBlZGl0RGV0YWlscyhzdHIpIHtcbiAgLy8gR2V0IHRoZSBkZXRhaWxzIGNvbnRhaW5lciBlbGVtZW50IGFuZCBzZXQgaXQgdG8gZmxleFxuICBjb25zdCBxdWVyeVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWNvbnRhaW5lclwiKTtcbiAgcXVlcnlTZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIGdyYWIgdGFzayB3aXRoIC5hY3RpdmUtdGFzayBjbGFzcyBuYW1lXG4gIGNvbnN0IHNob3dPckhpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlLXRhc2tcIik7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYW4gYWN0aXZlIHRhc2ssIHNob3cgdGhlIGRldGFpbHMgcGFuZWxcbiAgaWYgKHNob3dPckhpZGUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHN0ci50ZXh0Q29udGVudDtcblxuICAgIC8vIGZpbmQgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSB0YXNrIHByb3ZpZGVkIGFzIGFuIGFyZ3VtZW50IChuZWVkIHRvIGhhdmUgdGhpcyBzZWFyY2ggY29tcGxldGVkIHRhc2tzIGFzIHdlbGwpXG5cbiAgICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gc2VhcmNoIGRhdGFiYXNlIGZvciB0YXNrXG4gICAgbGV0IHRhc2tPYmplY3QgPSBwcm9qZWN0c0FuZFRhc2tzXG4gICAgICAuZmxhdE1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5jdXJyZW50VGFza3MpIC8vIGZsYXR0ZW4gdGhlIG5lc3RlZCBhcnJheSBvZiB0YXNrc1xuICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrID09PSB0YXNrVGl0bGUpOyAvLyBmaWx0ZXIgdGhlIHRhc2tzIGJ5IHRhc2sgbmFtZVxuICAgIGlmICh0YXNrT2JqZWN0ID09IFwiXCIpIHtcbiAgICAgIHRhc2tPYmplY3QgPSBwcm9qZWN0c0FuZFRhc2tzXG4gICAgICAgIC5mbGF0TWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LmNvbXBsZXRlZFRhc2tzKSAvLyBmbGF0dGVuIHRoZSBuZXN0ZWQgYXJyYXkgb2YgdGFza3NcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrID09PSB0YXNrVGl0bGUpO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0V2l0aFRhc2sgPSBwcm9qZWN0c0FuZFRhc2tzXG4gICAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIEZvciBlYWNoIHByb2plY3QsIHdlIGFyZSBnb2luZyB0byBmaW5kIGEgdGFzayB0aGF0IG1hdGNoZXMgdGhlIHRhc2tUaXRsZVxuICAgICAgICBjb25zdCB0YXNrID1cbiAgICAgICAgICBwcm9qZWN0LmN1cnJlbnRUYXNrcy5maW5kKFxuICAgICAgICAgICAgKHRhc2spID0+IHRhc2sudGFzayA9PT0gdGFza1RpdGxlIC8vIENoZWNrIGlmIHRoZSB0YXNrJ3MgdGl0bGUgbWF0Y2hlcyB0aGUgdGFza1RpdGxlIHdlIGFyZSBsb29raW5nIGZvclxuICAgICAgICAgICkgfHwgcHJvamVjdC5jb21wbGV0ZWRUYXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLnRhc2sgPT09IHRhc2tUaXRsZSk7XG4gICAgICAgIC8vIElmIHdlIGZvdW5kIGEgbWF0Y2hpbmcgdGFzaywgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9qZWN0IG5hbWUgYW5kIHRoZSB0YXNrXG4gICAgICAgIC8vIElmIHdlIGRpZG4ndCBmaW5kIGEgbWF0Y2hpbmcgdGFzaywgd2UgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIHRhc2sgPyB7IHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3ROYW1lLCB0YXNrIH0gOiBudWxsO1xuICAgICAgfSlcbiAgICAgIC8vIFdlIGZpbHRlciBvdXQgYW55IG51bGwgdmFsdWVzIGZyb20gdGhlIGFycmF5LCBrZWVwaW5nIG9ubHkgdGhlIHByb2plY3RzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHRhc2tcbiAgICAgIC5maWx0ZXIoKHJlc3VsdCkgPT4gcmVzdWx0ICE9PSBudWxsKTtcblxuICAgIC8vIE5vdywgd2UgY2hlY2sgaWYgd2UgZm91bmQgYW55IHByb2plY3RzIHdpdGggYSBtYXRjaGluZyB0YXNrXG4gICAgLy8gSWYgd2UgZGlkLCB3ZSB0YWtlIHRoZSBwcm9qZWN0IG5hbWUgb2YgdGhlIGZpcnN0IHByb2plY3QgaW4gdGhlIGFycmF5XG4gICAgLy8gSWYgd2UgZGlkbid0IGZpbmQgYW55IHByb2plY3RzLCB3ZSBzZXQgdGhlIHByb2plY3ROYW1lIHRvIG51bGxcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9XG4gICAgICBwcm9qZWN0V2l0aFRhc2subGVuZ3RoID4gMCA/IHByb2plY3RXaXRoVGFza1swXS5wcm9qZWN0TmFtZSA6IG51bGw7XG5cbiAgICAvL3Byb2plY3RcbiAgICAvLyBuZWVkIHRvIGRpc3BsYXkgYWxsIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdHNPYmplY3QgPSBwcm9qZWN0c0FuZFRhc2tzLmZsYXRNYXAoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICAvLyBGaW5kIHRoZSBIVE1MIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIHRoZSBzZWxlY3QgZWxlbWVudCBmb3IgcHJvamVjdCBzZWxlY3Rpb25cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcHJvamVjdC1zZWxlY3RvciA+IHNlbGVjdFwiXG4gICAgKTtcblxuICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBwcm9qZWN0U2VsZWN0b3IgZG9lcyBub3QgaGF2ZSBvcHRpb25zIGFscmVhZHkgZmlsbGVkIGluXG4gICAgaWYgKHByb2plY3RTZWxlY3Rvci5jbGFzc05hbWUgIT0gXCJmaWxsZWRcIikge1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBwcm9qZWN0c09iamVjdCBsaXN0IHRvIGNyZWF0ZSBvcHRpb25zIGZvciB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNPYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IG9wdGlvbiBlbGVtZW50XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgLy8gU2V0IHRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gdG8gdGhlIHByb2plY3QgbmFtZSBhdCB0aGUgY3VycmVudCBpbmRleFxuICAgICAgICBvcHRpb24udGV4dCA9IHByb2plY3RzT2JqZWN0W2ldO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gbWF0Y2hlcyB0aGUgcHJvamVjdE5hbWUgd2Ugd2FudCB0byBzZWxlY3RcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgbWF0Y2gsIHNldCB0aGUgb3B0aW9uIGFzIHNlbGVjdGVkXG4gICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiZmlsbGVkXCIpO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIG9wdGlvbiB0byB0aGUgcHJvamVjdFNlbGVjdG9yIHNlbGVjdCBlbGVtZW50XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9wdGlvbnMgZm9yIHByaW9yaXR5IHNlbGVjdCBlbGVtZW50XG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5ID4gc2VsZWN0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IHByaW9yaXR5U2VsZWN0Lm9wdGlvbnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcmlvcml0eU9wdGlvbnNbaV0udGV4dENvbnRlbnQgPT09IHRhc2tPYmplY3RbMF0ucHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdHlPcHRpb25zW2ldLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9CSkVDVCBEQVRBXG5cbiAgICAvLyBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoXG4gICAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgLy8gdGFza1xuICAgIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWlucHV0LWRldGFpbFwiKTtcbiAgICB0YXNrLnZhbHVlID0gdGFza09iamVjdFswXS50YXNrO1xuICAgIHJlc2l6ZUlucHV0KCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdPy5jdXJyZW50VGFza3M/LmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnRhc2sgPT09IHRhc2sudmFsdWVcbiAgICApO1xuXG4gICAgLy8gZGF0ZUNyZWF0ZWRcbiAgICBsZXQgZGF0ZUNyZWF0ZWQgPSB0YXNrT2JqZWN0WzBdLmRhdGVDcmVhdGVkO1xuXG4gICAgLy8gZGF0ZUR1ZVxuICAgIGxldCBkYXRlRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWR1ZSA+IGlucHV0W3R5cGU9ZGF0ZV1cIik7XG4gICAgZGF0ZUR1ZS52YWx1ZSA9IHRhc2tPYmplY3RbMF0uZGF0ZUR1ZTtcblxuICAgIC8vIHRpbWVEdWVcbiAgICBsZXQgdGltZUR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZS1kdWUgPiBpbnB1dFt0eXBlPXRpbWVdXCIpO1xuICAgIHRpbWVEdWUudmFsdWUgPSB0YXNrT2JqZWN0WzBdLnRpbWVEdWU7XG5cbiAgICAvLyBwcmlvcml0eVxuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eSA+IHNlbGVjdFwiKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRhc2tPYmplY3RbMF0ucHJpb3JpdHk7XG5cbiAgICAvLyBkZXNjXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb24tdGV4dGFyZWFcIik7XG4gICAgZGVzYy52YWx1ZSA9IHRhc2tPYmplY3RbMF0uZGVzYztcblxuICAgIC8vIHNhdmUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG4gICAgbGV0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtYnRuXCIpO1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhdmVEZXRhaWxzKFxuICAgICAgICBwcm9qZWN0U2VsZWN0b3IudmFsdWUsXG4gICAgICAgIHRhc2sudmFsdWUsXG4gICAgICAgIGRhdGVDcmVhdGVkLFxuICAgICAgICBkYXRlRHVlLnZhbHVlLFxuICAgICAgICB0aW1lRHVlLnZhbHVlLFxuICAgICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgZGVzYy52YWx1ZSxcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHRhc2tJbmRleFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIGRlbGV0ZSBidG4gZXZlbnQgbGlzdGVuZXJcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtYnRuXCIpO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlRGV0YWlscyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoc2hvd09ySGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBxdWVyeVNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlRGV0YWlscyhcbiAgcHJvamVjdCxcbiAgdGFzayxcbiAgZGF0ZUNyZWF0ZWQsXG4gIGRhdGVEdWUsXG4gIHRpbWVEdWUsXG4gIHByaW9yaXR5LFxuICBkZXNjLFxuICBwcm9qZWN0TmFtZSxcbiAgb3JpZ2luYWxUYXNrSW5kZXhcbikge1xuICAvLyBzZWN0aW9uIGZvciB0YXNrcyB0aGF0IGhhdmUgbm90IGhhZCB0aGVpciBwcm9qZWN0IGNoYW5nZWRcbiAgaWYgKHByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XG4gICAgLy8gZmluZCBwcm9qZWN0IGluIHByb2plY3RzQW5kVGFzayBhcnJheVxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3RcbiAgICApO1xuXG4gICAgLy8gdXBkYXRlIHRoZSAsIGRhdGUgZHVlLCB0aW1lIGR1ZSwgcHJpb3JpdHksIGFuZCBkZXNjcmlwdGlvbiBpbiB0aGUgYXJyYXlcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS50YXNrID0gdGFzaztcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS5kYXRlRHVlID1cbiAgICAgIGRhdGVEdWU7XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1tvcmlnaW5hbFRhc2tJbmRleF0udGltZUR1ZSA9XG4gICAgICB0aW1lRHVlO1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLnByaW9yaXR5ID1cbiAgICAgIHByaW9yaXR5O1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLmRlc2MgPSBkZXNjO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIHByb2plY3Qgc2VsZWN0ZWQgaXMgZGlmZmVyZW50IHRoYW4gdGFzaydzIG9yaWdpbmFsIHByb2plY3QuLi5cbiAgICAvLyBtYWtlIHN1cmUgdG8gZ2V0IG9yaWdpbmFsIHByb2plY3QgbmFtZSBpbmRleCBmb3IgbGF0ZXIgZGVsZXRpb25cbiAgICBjb25zdCBvbGRQcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICAvLyBmaW5kIG91dCB0aGUgaW5kZXggb2YgdGhlIHByb2plY3ROYW1lIGluIHByb2plY3RzQW5kVGFza3MgdGhhdCBtYXRjaGVzIGBwcm9qZWN0YCAodGhlIG5ldyBwcm9qZWN0IHNlbGVjdGVkJ3MgbmFtZSlcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0XG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSBuZXdUYXNrIG9iamVjdCB0byBsYXRlciBwdXNoIHRvIHByb2plY3RzQW5kVGFza3MgYXJyYXlcbiAgICBsZXQgbmV3VGFzayA9IHtcbiAgICAgIHRhc2s6IHRhc2ssXG4gICAgICBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICAgIGRhdGVEdWU6IGRhdGVEdWUsXG4gICAgICB0aW1lRHVlOiB0aW1lRHVlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgZGVzYzogZGVzYyxcbiAgICB9O1xuICAgIC8vIHB1c2ggbmV3bHkgY3JlYXRlZCB0YXNrIHRvIGNvcnJlY3QgaW5kZXggb2YgcHJvamVjdHNBbmRUYXNrcyBpbiB0aGUgY3VycmVudFRhc2tzIHByb3BlcnR5XG4gICAgcHJvamVjdHNBbmRUYXNrc1tuZXdQcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgLy8gZGVsZXRlIHRoZSBvbGQgY3VycmVudCB0YXNrXG4gICAgcHJvamVjdHNBbmRUYXNrc1tvbGRQcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5zcGxpY2Uob3JpZ2luYWxUYXNrSW5kZXgsIDEpO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICB9XG5cbiAgLy8gcmVsb2FkIHRoZSBwYWdlXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxEZXRhaWxzKCkge1xuICBjb25zdCBxdWVyeVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWNvbnRhaW5lclwiKTtcbiAgcXVlcnlTZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZURldGFpbHMocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpIHtcbiAgbGV0IHRhc2sgPSBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0/LmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdPy50YXNrO1xuICBsZXQgZGVsZXRlQ29uZmlybWF0aW9uID0gcHJvbXB0KFxuICAgIGBBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlIHRhc2s6ICR7dGFza30/ICh5L24pYFxuICApO1xuICBpZiAoZGVsZXRlQ29uZmlybWF0aW9uID09PSBcInlcIikge1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBleHBvcnRzXG5leHBvcnQgeyBwcm9qZWN0Q3JlYXRvciB9O1xuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzIH07XG5leHBvcnQgeyBwcm9qZWN0Q2xpY2tlZCB9O1xuZXhwb3J0IHsgYWN0aXZlUHJvamVjdCB9O1xuZXhwb3J0IHsgcHJldlByb2plY3QgfTtcbmV4cG9ydCB7IGRpc3BsYXlUYXNrcyB9O1xuZXhwb3J0IHsgdGFza0NyZWF0b3IgfTtcbmV4cG9ydCB7IHRhc2tDbGlja2VkIH07XG5leHBvcnQgeyBzYXZlRGV0YWlscyB9O1xuZXhwb3J0IHsgY2FuY2VsRGV0YWlscyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IHByb2plY3RzQW5kVGFza3MgfSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==