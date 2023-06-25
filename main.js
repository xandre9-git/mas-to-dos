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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#task-input-detail {\n\n}\n\n#details-container {\n  /* grid-area: c; */\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.filter-orange {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.project-action-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-edit-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%; \n}\n\n.project-edit-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.project-delete-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%;\n}\n\n.project-delete-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.proj-edit-hovered {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.proj-del-hovered {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,yCAAyC;AAC3C;;AAEA;EACE,qBAAqB;EACrB,2DAAqD;EACrD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;;AAGA;EACE,aAAa;EACb;;;iBAGe;AACjB;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;;AAEA;;AAEA;EACE,kBAAkB;EAClB,mCAAmC;EACnC,YAAY;EACZ,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;mCACiC;AACnC;;AAEA;EACE;AACF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE;AACF;;AAEA;EACE,yDAAwC;EACxC;iCAC+B;AACjC;;AAEA;EACE,yDAA0C;EAC1C;iCAC+B;AACjC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(\"./fonts/Oswald-Regular.ttf\"), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#task-input-detail {\n\n}\n\n#details-container {\n  /* grid-area: c; */\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/save.svg\");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/cancel.svg\");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/delete.svg\");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.filter-orange {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.project-action-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-edit-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%; \n}\n\n.project-edit-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.project-delete-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%;\n}\n\n.project-delete-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.proj-edit-hovered {\n  background-image: url(./images/edit.svg);\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.proj-del-hovered {\n  background-image: url(./images/delete.svg);\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}\n\n"],"sourceRoot":""}]);
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
// note: add styling
currentTaskList.id = "current-tasks-ul";
currentTaskListContainer.appendChild(currentTaskList);

// current tasks list item
const addTaskListItem = document.createElement("li");
// note: add styling
addTaskListItem.className = "add-task-li";

(0,_functions__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(_functions__WEBPACK_IMPORTED_MODULE_1__.activeProject, _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks, currentTaskList);

// function to change active selected task
currentTaskList.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.taskClicked);

// DETAILS

// details board container
const detailsContainer = document.createElement("div");
// note: add styling
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
    console.log("Criteria met.");
    // now create a new object in the database with the new project name
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.push({
      projectName: projectName,
      currentTasks: [],
      completedTasks: [],
    });
    // save newly created project to localStorage
    localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
  } else {
    console.log("Criteria not met.");
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
    // id: newId,
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
    console.log(prevTask.textContent);
  }

  editDetails(e.target);
};

function displayTasks(project, arr, parentNode) {
  // first find the project name in the array
  const projectIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex(
    (e) => e.projectName === project
  );
  // create empty array for current tasks
  const tasks = [];
  console.log(`projectIndex: ${projectIndex}`);

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
    // console.log(`projectsAndTasks[projectIndex].completedTasks: ${projectsAndTasks[projectIndex].completedTasks[i].task}`);
    // console.log(projectsAndTasks[projectIndex].completedTasks[i].task.includes(tasks[i]))
    // check to see if task is completed then add a strikethrough if so
    // for (let j = 0; j < projectsAndTasks[projectIndex].completedTasks.length; j++){
    //   if (projectsAndTasks[projectIndex].completedTasks[j].task.includes(tasks[i])){
    //     // code
    //     console.log(`tasks[i]: ${tasks[i]}`);
    //     listItem.style.textDecoration = "line-through";
    //   }
    // }

    taskContainer.appendChild(listItem);

    const completeBtn = document.createElement("input");
    completeBtn.className = "task-complete-btn";
    completeBtn.type = "checkbox";
    completeBtn.title = "Complete Task";
    // loop through completed tasks and add strikethrough and checked box to tasks that match current task iteration
    for (let j = 0; j < _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.length; j++){
      if (_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks[j].task.includes(tasks[i])){
        // code
        console.log(`tasks[i]: ${tasks[i]}`);
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
  console.log(`Testing task variable: ${taskName}`);
  console.log(`Testing project variable: ${projectIndex}`);
  const taskIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.findIndex(
    (e) => e.task === taskName
  );
  console.log(`taskIndex: ${taskIndex}`);
  // need to select the respective DOM element...
  console.log(
    `projectsAndTasks[projectIndex].currentTasks[taskIndex].task: ${_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[taskIndex].task}`
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

  console.log(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks);
  console.log(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks);
  // update the localStorage
  localStorage.setItem("projectsAndTasks", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks));
  // reload the page
  // location.reload();
}

function unCompleteTask(taskName, projectIndex) {
  console.log(`Testing task variable: ${taskName}`);
  console.log(`Testing project variable: ${projectIndex}`);
  const taskIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.findIndex(
    (e) => e.task === taskName
  );
  console.log(`taskIndex: ${taskIndex}`);
  // need to select the respective DOM element...
  console.log(
    `projectsAndTasks[projectIndex].completedTasks[taskIndex].task: ${_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks[taskIndex].task}`
  );
  // find the completed task in the database
  const unCompletedTask = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks[taskIndex];
  // move the completed task into the currentTasks array of database
  _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.push(unCompletedTask);
  // remove the task from completed tasks
  _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.splice(
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks.indexOf(unCompletedTask),
    1
  );

  console.log(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks);
  console.log(_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].completedTasks);
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

    // fuck
    const taskObject = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.flatMap((project) => [
        ...project.currentTasks,
        ...project.completedTasks,
      ]) // flatten the nested array of tasks
      .filter((task) => task.task === taskTitle); // filter the tasks by task name
    console.log(`taskObject: ${taskObject}`);
    const projectWithTask = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.map((project) => {
        // For each project, we are going to find a task that matches the taskTitle
        const task = project.currentTasks.find(
          (task) => task.task === taskTitle // Check if the task's title matches the taskTitle we are looking for
        );
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
      console.log(
        `priorityOptions[i].textContent: ${priorityOptions[i].textContent}`
      );
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

    if (taskIndex === -1){
      console.log(`RAGE!`);
    }

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
  let deleteConfirmation = prompt(
    `Are you sure you would like to delete task: ${_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[taskIndex].task}? (y/n)`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQ2EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3N3YWxkLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc2F2ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYW5jZWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImEgYSBhIGEgYSBhIFxcXCJcXG4gICAgXFxcImIgYyBjIGMgYyBjXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiO1xcbn1cXG5cXG4jdG9wLWJhciB7XFxuICBncmlkLWFyZWE6IGE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA3MiwgMTg5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jdG9wLWJhciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxufVxcblxcbiNsZWZ0LXNpZGUtYmFyIHtcXG4gIGdyaWQtYXJlYTogYjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4jdG8tZG9zLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTg4LCAyNDApO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdGFza3MtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNjdXJyZW50LXRhc2stbGlzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY4ODtcXG4gIGhlaWdodDogNzV2aDtcXG4gIG1hcmdpbjogMiU7XFxufVxcblxcbiNhZGQtdGFza2JhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtYmFyIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiN0YXNrLWlucHV0LWRldGFpbCB7XFxuXFxufVxcblxcbiNkZXRhaWxzLWNvbnRhaW5lciB7XFxuICAvKiBncmlkLWFyZWE6IGM7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDE2NSwgMTczKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jZGV0YWlscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAwIDIlIDIlIDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RldGFpbHMgPiBkaXYge1xcbiAgZmxleC1zaHJpbms6IDE7XFxufVxcblxcbiNkZXRhaWxzIGgzIHtcXG4gIG1hcmdpbjogMC41JTtcXG4gIGNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4jZGV0YWlscyBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICBtYXJnaW46IDAuNSU7XFxufVxcblxcbiN0aW1lLWR1ZSA+IGlucHV0W3R5cGU9dGltZV0ge1xcbiAgd2lkdGg6IDYuNXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNkZXRhaWxzLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjUlO1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4jY2FuY2VsLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbiNkZWxldGUtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QsIC5hZGRlZC1wcm9qZWN0cyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZGVkLXByb2plY3RzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5hY3RpdmUtcGFuZS10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDIuNSU7XFxufVxcblxcbi5wcm9qZWN0LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdHMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5maWx0ZXItb3JhbmdlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZGI1ODtcXG59XFxuXFxuLnByb2plY3QtYWN0aW9uLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXFxufVxcblxcbi5wcm9qZWN0LWVkaXQtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg2NiUpIHNhdHVyYXRlKDcwMDUlKSBodWUtcm90YXRlKDMxNWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKVxcbn1cXG5cXG4ucHJvai1lZGl0LWhvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4ucHJvai1kZWwtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLnRhc2stYWN0aW9uLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFjdGl2ZS10YXNrIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYjs7O2lCQUdlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTRDO0VBQzVDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTttQ0FDaUM7QUFDbkM7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UseURBQXdDO0VBQ3hDO2lDQUMrQjtBQUNqQzs7QUFFQTtFQUNFLHlEQUEwQztFQUMxQztpQ0FDK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL09zd2FsZC1SZWd1bGFyLnR0ZlxcXCIpLCBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImEgYSBhIGEgYSBhIFxcXCJcXG4gICAgXFxcImIgYyBjIGMgYyBjXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiO1xcbn1cXG5cXG4jdG9wLWJhciB7XFxuICBncmlkLWFyZWE6IGE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA3MiwgMTg5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jdG9wLWJhciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxufVxcblxcbiNsZWZ0LXNpZGUtYmFyIHtcXG4gIGdyaWQtYXJlYTogYjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4jdG8tZG9zLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTg4LCAyNDApO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdGFza3MtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNjdXJyZW50LXRhc2stbGlzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY4ODtcXG4gIGhlaWdodDogNzV2aDtcXG4gIG1hcmdpbjogMiU7XFxufVxcblxcbiNhZGQtdGFza2JhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtYmFyIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiN0YXNrLWlucHV0LWRldGFpbCB7XFxuXFxufVxcblxcbiNkZXRhaWxzLWNvbnRhaW5lciB7XFxuICAvKiBncmlkLWFyZWE6IGM7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDE2NSwgMTczKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jZGV0YWlscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAwIDIlIDIlIDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RldGFpbHMgPiBkaXYge1xcbiAgZmxleC1zaHJpbms6IDE7XFxufVxcblxcbiNkZXRhaWxzIGgzIHtcXG4gIG1hcmdpbjogMC41JTtcXG4gIGNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4jZGV0YWlscyBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICBtYXJnaW46IDAuNSU7XFxufVxcblxcbiN0aW1lLWR1ZSA+IGlucHV0W3R5cGU9dGltZV0ge1xcbiAgd2lkdGg6IDYuNXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNkZXRhaWxzLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjUlO1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3NhdmUuc3ZnXFxcIik7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9jYW5jZWwuc3ZnXFxcIik7XFxufVxcblxcbiNkZWxldGUtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9kZWxldGUuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LCAuYWRkZWQtcHJvamVjdHMge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGRlZC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogI2ZmZGI1ODtcXG59XFxuXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4uYWN0aXZlLXBhbmUtdGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tYm90dG9tOiAyLjUlO1xcbn1cXG5cXG4ucHJvamVjdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3RzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZpbHRlci13aGl0ZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTI1ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4uZmlsdGVyLW9yYW5nZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg2NiUpIHNhdHVyYXRlKDcwMDUlKSBodWUtcm90YXRlKDMxNWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKVxcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgY29sb3I6ICNmZmRiNTg7XFxufVxcblxcbi5wcm9qZWN0LWFjdGlvbi1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWVkaXQtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxcbn1cXG5cXG4ucHJvamVjdC1lZGl0LWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg2NiUpIHNhdHVyYXRlKDcwMDUlKSBodWUtcm90YXRlKDMxNWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKVxcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG46aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLnByb2otZWRpdC1ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9lZGl0LnN2Zyk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTI1ZGVnKVxcbiAgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLnByb2otZGVsLWhvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2RlbGV0ZS5zdmcpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLnRhc2stYWN0aW9uLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFjdGl2ZS10YXNrIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIC0tLSBBUFAgREFUQSAtLS1cblxuLy8gUFJPSkVDVHMgQU5EIFRBU0tTIFNUT1JBR0VcbmNvbnN0IGxvY2FsU3RvcmFnZSA9ICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIpO1xuY29uc3QgcHJvamVjdHNBbmRUYXNrcyA9IChsb2NhbFN0b3JhZ2UgIT0gbnVsbCkgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZSkgOiBbXG4gIHsgcHJvamVjdE5hbWU6IFwiTXkgVGFza3NcIiwgY3VycmVudFRhc2tzOiBbXSwgY29tcGxldGVkVGFza3M6IFtdIH0sIHsgcHJvamVjdE5hbWU6IFwiT2RpblwiLCBjdXJyZW50VGFza3M6IFtdLCBjb21wbGV0ZWRUYXNrczogW10gfVxuXTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0IHsgcHJvamVjdHNBbmRUYXNrcyB9O1xuIiwiLy8gLS0tIERPTSBFTEVNRU5UUyAtLS1cbmltcG9ydCB7IHByb2plY3RzQW5kVGFza3MgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBwcm9qZWN0Q3JlYXRvciB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBwcm9qZWN0Q2xpY2tlZCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0YXNrQ2xpY2tlZCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdGFza0NyZWF0b3IgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGNhbmNlbERldGFpbHMgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuLy8gbWFpbiBjb250YWluZXIgZm9yIHRoZSBhcHBcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIHRvcCBiYXJcbmNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b3BCYXIuaWQgPSBcInRvcC1iYXJcIjtcblxuLy8gdG9wIGJhciB0aXRsZVxuY29uc3QgdG9wQmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50b3BCYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTWFzIFRvIERvJ3NcIjtcbnRvcEJhclRpdGxlLmlkID0gXCJ0aXRsZS1iYXJcIjtcbnRvcEJhci5hcHBlbmRDaGlsZCh0b3BCYXJUaXRsZSk7XG5cbi8vIFBST0pFQ1RTXG5cbi8vIGxlZnQgc2lkZSBiYXJcbmNvbnN0IGxlZnRTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZnRTaWRlQmFyLmlkID0gXCJsZWZ0LXNpZGUtYmFyXCI7XG5cbi8vIHByb2plY3Qgc2VjdGlvbiAoZ29lcyBpbiBsZWZ0IHNpZGUgYmFyKVxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdHNDb250YWluZXIuaWQgPSBcInByb2plY3RzLWNvbnRhaW5lclwiO1xubGVmdFNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4vLyBwcm9qZWN0cyBsaXN0XG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5wcm9qZWN0c0xpc3QuaWQgPSBcInByb2plY3RzLXVsXCI7XG5wcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IHByb2plY3RzIG9uIHRoZSBkb21cbmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c0FuZFRhc2tzLCBwcm9qZWN0c0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWN0aXZlIHNlbGVjdGVkIHByb2plY3RcbnByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENsaWNrZWQpO1xuXG4vLyBhZGQgcHJvamVjdCBidXR0b25cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5hZGRQcm9qZWN0QnV0dG9uLmlkID0gXCJhZGQtcHJvamVjdFwiO1xuYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENyZWF0b3IpO1xucHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4vLyBwcm9qZWN0IGJ1dHRvbnMgY29udGFpbmVyXG5jb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0QnRucy5pZCA9IFwicHJvamVjdC1idG5zLWNvbnRhaW5lclwiO1xuXG4vLyBlZGl0IHByb2plY3QgbmFtZSBidXR0b25cbmNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmVkaXRQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC1idG5zIGZpbHRlci13aGl0ZVwiO1xuZWRpdFByb2plY3RCdG4uaWQgPSBcImVkaXQtYnRuXCI7XG5lZGl0UHJvamVjdEJ0bi50aXRsZSA9IFwiRWRpdFwiO1xuXG4vLyBkZWxldGUgcHJvamVjdCBidXR0b25cbmNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtYnRucyBmaWx0ZXItd2hpdGVcIjtcbmRlbGV0ZVByb2plY3RCdG4uaWQgPSBcImRlbC1idG5cIjtcbmRlbGV0ZVByb2plY3RCdG4udGl0bGUgPSBcIkRlbGV0ZVwiO1xuXG4vLyBwcm9qZWN0IGJ1dHRvbiBjb250YWluZXIgYXBwZW5kYWdlc1xucHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RCdG4pO1xucHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG5cbi8vIFRPIERPU1xuXG5cbi8vIHRvIGRvIGJvYXJkIGNvbnRhaW5lclxuY29uc3QgdG9kb0JvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b2RvQm9hcmRzQ29udGFpbmVyLmlkID0gXCJ0by1kb3MtY29udGFpbmVyXCI7XG50b2RvQm9hcmRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuLy8gY3VycmVudCB0YXNrcyBjb250YWluZXJcbmNvbnN0IGN1cnJlbnRUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jdXJyZW50VGFza3NDb250YWluZXIuaWQgPSBcImN1cnJlbnQtdGFza3MtY29udGFpbmVyXCI7XG5jdXJyZW50VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbnRvZG9Cb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tzQ29udGFpbmVyKTtcblxuLy8gY3VycmVudCB0YXNrcyB0aXRsZVxuY29uc3QgY3VycmVudFRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5jdXJyZW50VGFza3NUaXRsZS5jbGFzc05hbWUgPSBcImFjdGl2ZS1wYW5lLXRpdGxlXCI7XG5jdXJyZW50VGFza3NUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcbmN1cnJlbnRUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza3NUaXRsZSk7XG5cbi8vIGN1cnJlbnQgdGFza2xpc3RcbmNvbnN0IGN1cnJlbnRUYXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jdXJyZW50VGFza0xpc3RDb250YWluZXIuaWQgPSBcImN1cnJlbnQtdGFzay1saXN0LWNvbnRhaW5lclwiO1xuY3VycmVudFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUYXNrTGlzdENvbnRhaW5lcik7XG5cbi8vIGFkZCB0YXNrcyBjb250YWluZXJcbmNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkVGFza0NvbnRhaW5lci5pZCA9IFwiYWRkLXRhc2tiYXJcIjtcbmN1cnJlbnRUYXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcblxuLy8gYWRkIHRhc2tzIGlucHV0IGJhclxuY29uc3QgYWRkVGFza3NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmFkZFRhc2tzSW5wdXQuaWQgPSBcInRhc2staW5wdXQtYmFyXCI7XG5hZGRUYXNrc0lucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgYSB0YXNrXCI7XG5hZGRUYXNrc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZSkge1xuICAvL2lmIHVzZXIgcHJlc3NlcyBlbnRlciBvbiBrZXlib2FyZFxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIC8vIHJ1biB0YXNrQ3JlYXRvciBhbmQgdXNlIHZhbHVlIGVudGVyZWQgaW4gYWJvdmUgaW5wdXQgZWxlbWVudFxuICAgIHRhc2tDcmVhdG9yKGFkZFRhc2tzSW5wdXQudmFsdWUpO1xuICAgIC8vIGNsZWFyIGFkZFRhc2tzSW5wdXRcbiAgICBhZGRUYXNrc0lucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5hZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tzSW5wdXQpO1xuXG4vLyBhZGQgdGFza3Mgc3VibWl0IGJ1dHRvblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5hZGRUYXNrQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuLy8gbm90ZTogYWRkIHN0eWxpbmdcbmFkZFRhc2tCdG4uaWQgPSBcImFkZC10YXNrLWJ0blwiO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBnZXQgaW5wdXQgaWQgZm9yIHRhc2stYmFyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWlucHV0LWJhclwiKTtcbiAgLy8gcnVuIHRhc2tDcmVhdG9yIGFuZCB1c2UgdmFsdWUgZW50ZXJlZCBpbiBhYm92ZSBpbnB1dCBlbGVtZW50XG4gIHRhc2tDcmVhdG9yKGlucHV0LnZhbHVlKTtcbiAgLy8gY2xlYXIgaW5wdXRcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbi8vIGN1cnJlbnQgdGFza3MgdW5vcmRlcmVkIGxpc3RcbmNvbnN0IGN1cnJlbnRUYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBub3RlOiBhZGQgc3R5bGluZ1xuY3VycmVudFRhc2tMaXN0LmlkID0gXCJjdXJyZW50LXRhc2tzLXVsXCI7XG5jdXJyZW50VGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tMaXN0KTtcblxuLy8gY3VycmVudCB0YXNrcyBsaXN0IGl0ZW1cbmNvbnN0IGFkZFRhc2tMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbi8vIG5vdGU6IGFkZCBzdHlsaW5nXG5hZGRUYXNrTGlzdEl0ZW0uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1saVwiO1xuXG5kaXNwbGF5VGFza3MoYWN0aXZlUHJvamVjdCwgcHJvamVjdHNBbmRUYXNrcywgY3VycmVudFRhc2tMaXN0KTtcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGFjdGl2ZSBzZWxlY3RlZCB0YXNrXG5jdXJyZW50VGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDbGlja2VkKTtcblxuLy8gREVUQUlMU1xuXG4vLyBkZXRhaWxzIGJvYXJkIGNvbnRhaW5lclxuY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBub3RlOiBhZGQgc3R5bGluZ1xuZGV0YWlsc0NvbnRhaW5lci5pZCA9IFwiZGV0YWlscy1jb250YWluZXJcIjtcbmRldGFpbHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyBkZXRhaWxzIHRpdGxlXG5jb25zdCBkZXRhaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5kZXRhaWxzVGl0bGUuY2xhc3NOYW1lID0gXCJhY3RpdmUtcGFuZS10aXRsZVwiO1xuZGV0YWlsc1RpdGxlLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG5kZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNUaXRsZSk7XG5cbi8vIGRldGFpbHMgcGFuZVxuY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzLmlkID0gXCJkZXRhaWxzXCI7XG5kZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4vLyBkZXRhaWxzIHByb2plY3Qgc2VsZWN0b3IgY29udGFpbmVyXG5jb25zdCBwcm9qZWN0U2VsZWN0b3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdFNlbGVjdG9yQ29udGFpbmVyLmlkID0gXCJwcm9qZWN0LXNlbGVjdG9yXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3RvckNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgcHJvamVjdCBzZWxlY3RvciB0aXRsZVxuY29uc3Qgc2VsZWN0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuc2VsZWN0UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG5wcm9qZWN0U2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdFRpdGxlKTtcblxuLy8gZGV0YWlscyBwcm9qZWN0IHNlbGVjdG9yXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbnByb2plY3RTZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0KTtcblxuLy8gZGV0YWlscyB0YXNrIGlucHV0IGNvbnRhaW5lclxuY29uc3QgdGFza0lucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tJbnB1dENvbnRhaW5lci5pZCA9IFwiZWRpdC10YXNrLW5hbWVcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGFza0lucHV0Q29udGFpbmVyKTtcblxuLy8gZGV0YWlscyB0YXNrIHRpdGxlXG5jb25zdCB0YXNrSW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnRhc2tJbnB1dFRpdGxlLnRleHRDb250ZW50ID0gXCJUYXNrXCI7XG50YXNrSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0lucHV0VGl0bGUpO1xuXG4vLyBkZXRhaWxzIHRhc2sgaW5wdXRcbmNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRhc2tJbnB1dC5pZCA9IFwidGFzay1pbnB1dC1kZXRhaWxcIjtcbnRhc2tJbnB1dC52YWx1ZSA9IFwiUGxhY2Vob2xkZXJcIjtcbnRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuXG4vLyBkZXRhaWxzIGRhdGUgZHVlIGNvbnRhaW5lclxuY29uc3QgZGF0ZUR1ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kYXRlRHVlQ29udGFpbmVyLmlkID0gXCJkYXRlLWR1ZVwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZChkYXRlRHVlQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyBkYXRlIGR1ZSBzZWxlY3RvciB0aXRsZVxuY29uc3QgZGF0ZUR1ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuZGF0ZUR1ZVRpdGxlLnRleHRDb250ZW50ID0gXCJEYXRlIER1ZVwiO1xuZGF0ZUR1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRHVlVGl0bGUpO1xuXG4vLyBkZXRhaWxzIGRhdGUgZHVlIGlucHV0XG5jb25zdCBkYXRlRHVlU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5kYXRlRHVlU2VsZWN0b3IudHlwZSA9IFwiZGF0ZVwiO1xuZGF0ZUR1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRHVlU2VsZWN0b3IpO1xuXG4vLyBkZXRhaWxzIHRpbWUgZHVlIGNvbnRhaW5lclxuY29uc3QgdGltZUR1ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50aW1lRHVlQ29udGFpbmVyLmlkID0gXCJ0aW1lLWR1ZVwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZCh0aW1lRHVlQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyB0aW1lIGR1ZSBzZWxlY3RvciB0aXRsZVxuY29uc3QgdGltZUR1ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xudGltZUR1ZVRpdGxlLnRleHRDb250ZW50ID0gXCJUaW1lIER1ZVwiO1xudGltZUR1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRHVlVGl0bGUpO1xuXG4vLyBkZXRhaWxzIHRpbWUgZHVlIGlucHV0XG5jb25zdCB0aW1lRHVlU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50aW1lRHVlU2VsZWN0b3IudHlwZSA9IFwidGltZVwiO1xudGltZUR1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRHVlU2VsZWN0b3IpO1xuXG4vLyB0YXNrIHByaW9yaXR5IGNvbnRhaW5lclxuY29uc3QgdGFza1ByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tQcmlvcml0eUNvbnRhaW5lci5pZCA9IFwidGFzay1wcmlvcml0eVwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlDb250YWluZXIpO1xuXG4vLyB0YXNrIHByaW9yaXR5IHRpdGxlXG5jb25zdCB0YXNrUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnRhc2tQcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gXCJUYXNrIFByaW9yaXR5XCI7XG50YXNrUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5VGl0bGUpO1xuXG4vLyB0YXNrIHByaW9yaXR5IHNlbGVjdG9yXG5jb25zdCB0YXNrUHJpb3JpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG50YXNrUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5U2VsZWN0b3IpO1xuXG4vLyBub25lIHByaW9yaXR5IG9wdGlvblxuY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5ub1ByaW9yaXR5LnRleHQgPSBcIk5vbmVcIjtcbnRhc2tQcmlvcml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKG5vUHJpb3JpdHkpO1xuXG4vLyBsb3cgcHJpb3JpdHkgb3B0aW9uXG5jb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5sb3dQcmlvcml0eS50ZXh0ID0gXCJMb3dcIjtcbnRhc2tQcmlvcml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuLy8gbWVkaXVtIHByaW9yaXR5IG9wdGlvblxuY29uc3QgbWVkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xubWVkUHJpb3JpdHkudGV4dCA9IFwiTWVkaXVtXCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChtZWRQcmlvcml0eSk7XG5cbi8vIGhpZ2ggcHJpb3JpdHkgb3B0aW9uXG5jb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuaGlnaFByaW9yaXR5LnRleHQgPSBcIkhpZ2hcIjtcbnRhc2tQcmlvcml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbi8vIGRldGFpbHMgZGVzY3JpcHRpb24gY29udGFpbmVyXG5jb25zdCB0YXNrRGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyLmlkID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgZGVzY3JpcHRpb24gdGl0bGVcbmNvbnN0IHRhc2tEZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xudGFza0Rlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG50YXNrRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uVGl0bGUpO1xuXG4vLyBkZXRhaWxzIGRlc2NyaXB0aW9uIHRleHRhcmVhXG5jb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG50YXNrRGVzY3JpcHRpb24uaWQgPSBcInRhc2stZGVzY3JpcHRpb24tdGV4dGFyZWFcIjtcbnRhc2tEZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRW50ZXIgZGVzY3JpcHRpb24gb2YgdGFzayAoTWF4aW11bSBvZiAyODAgY2hhcmFjdGVycykuXCI7XG50YXNrRGVzY3JpcHRpb24ubWF4TGVuZ3RoID0gMjgwO1xudGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbi8vIGRldGFpbHMgYnV0dG9ucyBjb250YWluZXJcbmNvbnN0IGRldGFpbHNCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlsc0J0bkNvbnRhaW5lci5pZCA9IFwiZGV0YWlscy1idG4tY29udGFpbmVyXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNCdG5Db250YWluZXIpO1xuXG4vLyBkZXRhaWxzIHNhdmUgYnRuXG5jb25zdCBkZXRhaWxzU2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzU2F2ZUJ0bi5pZCA9IFwic2F2ZS1idG5cIjtcbmRldGFpbHNTYXZlQnRuLnRpdGxlID0gXCJTYXZlIENoYW5nZXNcIjtcbmRldGFpbHNCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc1NhdmVCdG4pO1xuXG4vLyBkZXRhaWxzIGNhbmNlbCBidG5cbmNvbnN0IGRldGFpbHNDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlsc0NhbmNlbEJ0bi5pZCA9IFwiY2FuY2VsLWJ0blwiO1xuZGV0YWlsc0NhbmNlbEJ0bi50aXRsZSA9IFwiQ2FuY2VsIENoYW5nZXNcIjtcbmRldGFpbHNDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gIGNhbmNlbERldGFpbHMoKTtcbn0pXG5kZXRhaWxzQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNDYW5jZWxCdG4pO1xuXG4vLyBkZXRhaWxzIGRlbGV0ZSBidG5cbmNvbnN0IGRldGFpbHNEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlsc0RlbGV0ZUJ0bi5pZCA9IFwiZGVsZXRlLWJ0blwiO1xuZGV0YWlsc0RlbGV0ZUJ0bi50aXRsZSA9IFwiRGVsZXRlIFRhc2tcIjtcbmRldGFpbHNCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0RlbGV0ZUJ0bik7XG50b2RvQm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNDb250YWluZXIpO1xuXG4vLyBkb20gI2NvbnRlbnQgYXBwZW5kc1xuYm9keS5hcHBlbmRDaGlsZCh0b3BCYXIpO1xuYm9keS5hcHBlbmRDaGlsZChsZWZ0U2lkZUJhcik7XG5ib2R5LmFwcGVuZENoaWxkKHRvZG9Cb2FyZHNDb250YWluZXIpO1xuXG5leHBvcnQgeyBib2R5IH07XG5leHBvcnQgeyBjdXJyZW50VGFza0xpc3QgfTtcbiIsIi8vIC0tLSBBUFAgRlVOQ1RJT05TIC0tLVxuaW1wb3J0IHsgcHJvamVjdHNBbmRUYXNrcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IGN1cnJlbnRUYXNrTGlzdCB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBkYXRlIGZ1bmN0aW9uc1xuLy8gY3JlYXRlIG5ld0RhdGUgYmFzZWQgb24gY3VycmVudCBkYXRlXG5cbmZ1bmN0aW9uIGN1cnJlbnREYXRlKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGltZSA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIGhvdXIxMjogZmFsc2UsXG4gICAgdGltZVN0eWxlOiBcInNob3J0XCIsXG4gIH0pO1xuXG4gIC8vIGZ1bmN0aW9uIHRvIGFkZCB0d28gZGlnaXQgcGFkZGluZ1xuICBmdW5jdGlvbiBwYWRUbzJEaWdpdHMobnVtKSB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBjdXJyZW50TW9udGggPSBwYWRUbzJEaWdpdHMoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gIGNvbnN0IGN1cnJlbnREYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgY3VycmVudFllYXIudG9TdHJpbmcoKTtcbiAgY29uc3QgeWVhck1vbnRoRGF5ID0gYCR7Y3VycmVudFllYXJ9LSR7Y3VycmVudE1vbnRofS0ke2N1cnJlbnREYXl9YDtcbiAgcmV0dXJuIHsgeWVhck1vbnRoRGF5LCB0aW1lIH07XG59XG5cbi8vIGF1dG9tYXRpY2FsbHkgcmVzaXplcyBzZWxlY3Qgb3B0aW9ucyBhbmQgaW5wdXQgZWxlbWVudHNcbmZ1bmN0aW9uIHJlc2l6ZUlucHV0KCkge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2staW5wdXQtZGV0YWlsXCIpOyAvLyBHZXQgdGhlIGlucHV0IGVsZW1lbnQgd2l0aCB0aGUgaWQgXCJ0YXNrLWlucHV0LWRldGFpbFwiXG4gIGxldCB0ZXh0V2lkdGggPSBnZXRUZXh0V2lkdGgoaW5wdXQudmFsdWUsIGdldENvbXB1dGVkU3R5bGUoaW5wdXQpLmZvbnQpOyAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB2YWx1ZVxuICBpbnB1dC5zdHlsZS53aWR0aCA9IHRleHRXaWR0aCArIFwicHhcIjsgLy8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgZWxlbWVudCB0byB0aGUgY2FsY3VsYXRlZCB0ZXh0IHdpZHRoXG59XG5cbmZ1bmN0aW9uIGdldFRleHRXaWR0aCh0ZXh0LCBmb250KSB7XG4gIGxldCBjYW52YXMgPVxuICAgIGdldFRleHRXaWR0aC5jYW52YXMgfHxcbiAgICAoZ2V0VGV4dFdpZHRoLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpO1xuICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnRleHQuZm9udCA9IGZvbnQ7XG4gIGxldCBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgcmV0dXJuIG1ldHJpY3Mud2lkdGg7XG59XG5cbi8vIGZpbmQgcHJvamVjdCBpbmRleFxuZnVuY3Rpb24gcHJvamVjdEluZGV4KHByb2plY3QpIHtcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleCgoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdCk7XG4gIHJldHVybiBpbmRleDtcbn1cblxuLy8gY3JlYXRlcyBwcm9qZWN0cyBpbiBkYXRhYmFzZVxuZnVuY3Rpb24gcHJvamVjdENyZWF0b3IoKSB7XG4gIC8vIHByb21wdCB1c2VyIGZvciBwcm9qZWN0IG5hbWVcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoXCJFbnRlciBwcm9qZWN0IG5hbWU6XCIpO1xuICAvLyB0YWtlIHByb2plY3QgbmFtZSBhbmQgY2hlY2sgaWYgcHJvamVjdCBuYW1lIGlzIGVtcHR5IHN0cmluZyBvciBhbiBleGlzdGluZyBwcm9qZWN0XG4gIC8vIC5zb21lKCkgaXMgdXNlZCBvbiBhcnJheSB0byBzZWFyY2ggaWYgcHJvamVjdE5hbWUgYWxyZWFkeSBleGlzdHNcbiAgaWYgKFxuICAgIHByb2plY3ROYW1lICE9IG51bGwgJiZcbiAgICAhcHJvamVjdHNBbmRUYXNrcy5zb21lKChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSlcbiAgKSB7XG4gICAgY29uc29sZS5sb2coXCJDcml0ZXJpYSBtZXQuXCIpO1xuICAgIC8vIG5vdyBjcmVhdGUgYSBuZXcgb2JqZWN0IGluIHRoZSBkYXRhYmFzZSB3aXRoIHRoZSBuZXcgcHJvamVjdCBuYW1lXG4gICAgcHJvamVjdHNBbmRUYXNrcy5wdXNoKHtcbiAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbiAgICAgIGN1cnJlbnRUYXNrczogW10sXG4gICAgICBjb21wbGV0ZWRUYXNrczogW10sXG4gICAgfSk7XG4gICAgLy8gc2F2ZSBuZXdseSBjcmVhdGVkIHByb2plY3QgdG8gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIkNyaXRlcmlhIG5vdCBtZXQuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyByZWxvYWQgdGhlIGRvY3VtZW50XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG4vLyBmdW5jdGlvbiB0byByZW5hbWUgcHJvamVjdHNcbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QocHJvamVjdCkge1xuICAvLyBmaW5kIHRoZSBwcm9qZWN0IGluZGV4IGluIHRoZSBkYXRhYmFzZVxuICBjb25zdCBpbmRleCA9IHByb2plY3RJbmRleChwcm9qZWN0KTtcbiAgLy8gZ3JhYiBsaXN0IGl0ZW0gdGhhdCBtYXRjaGVzIHByb2plY3QgbmFtZVxuICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2xpW2RhdGEtcHJvamVjdC1uYW1lPVwiJyArIHByb2plY3QgKyAnXCJdJ1xuICApO1xuICAvLyBzZXQgbGlzdCBpdGVtJ3MgdGV4dENvbnRlbnQgYXMgdmFyaWFibGVcbiAgY29uc3QgaXRlbVRleHQgPSBsaXN0SXRlbS50ZXh0Q29udGVudDtcbiAgLy8gY2xlYXIgbGlzdCBpdGVtJ3MgdGV4dENvbnRlbnRcbiAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAvLyBjcmVhdGUgaW5wdXQgZWxlbWVudCBmb3IgdXNlciB0byByZW5hbWUgcHJvamVjdFxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAvLyBzZXQgaW5wdXQncyBzdGFydGluZyB2YWx1ZSB0byBwcm9qZWN0IG5hbWVcbiAgaW5wdXQudmFsdWUgPSBpdGVtVGV4dDtcbiAgLy8gbGlzdGVuIGZvciBlbnRlciBrZXkgcHJlc3NcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZSBmb3IgbGlzdCBpdGVtJ3MgdGV4dENvbnRlbnQgYmFzZWQgb24gdXNlcnMgaW5wdXRcbiAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAvLyB1cGRhdGUgZGF0YWJhc2UgdGhyb3VnaCBwYXRoIHRvIG1hdGNoZWQgcHJvamVjdCBuYW1lXG4gICAgICBwcm9qZWN0c0FuZFRhc2tzW2luZGV4XS5wcm9qZWN0TmFtZSA9IGxpc3RJdGVtLnRleHRDb250ZW50O1xuICAgICAgLy8gdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwicHJvamVjdHNBbmRUYXNrc1wiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKVxuICAgICAgKTtcbiAgICAgIC8vIHJlbG9hZCBwYWdlXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5wdXQuZm9jdXMoKTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gZGVsZXRlIHByb2plY3RzXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgLy8gZmluZCBpbmRleCBvZiBwcm9qZWN0TmFtZVxuICBjb25zdCBpbmRleCA9IHByb2plY3RJbmRleChwcm9qZWN0KTtcbiAgLy8gdGFyZ2V0IGxvY2F0aW9uIG9mIHByb2plY3RcbiAgcHJvamVjdHNBbmRUYXNrc1tpbmRleF0ucHJvamVjdE5hbWU7XG4gIC8vIHNwbGljZSBwcm9qZWN0IG91dCBvZiBkYXRhYmFzZSAoY29uZmlybSlcbiAgbGV0IGRlbGV0ZUNvbmZpcm1hdGlvbiA9IHByb21wdChcbiAgICBgQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSBwcm9qZWN0OiAke3Byb2plY3RzQW5kVGFza3NbaW5kZXhdLnByb2plY3ROYW1lfT8gVGhpcyB3aWxsIGRlbGV0ZSBhbGwgdGFza3Mgd2l0aGluIHRoaXMgcHJvamVjdCBhcyB3ZWxsISAoeS9uKWBcbiAgKTtcbiAgaWYgKGRlbGV0ZUNvbmZpcm1hdGlvbiA9PT0gXCJ5XCIpIHtcbiAgICBwcm9qZWN0c0FuZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICAgIC8vIHJlbG9hZCBwYWdlXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIHZhcmlhYmxlIHRvIHNlbGVjdCBzcGVjaWZpYyBwcm9qZWN0XG5jb25zdCBhY3RpdmVQcm9qZWN0TG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiKTtcbmxldCBwcmV2UHJvamVjdCA9IG51bGw7XG5sZXQgYWN0aXZlUHJvamVjdCA9XG4gIGFjdGl2ZVByb2plY3RMb2NhbFN0b3JhZ2UgIT0gbnVsbCA/IGFjdGl2ZVByb2plY3RMb2NhbFN0b3JhZ2UgOiBudWxsO1xuXG4vLyBmdW5jdGlvbiB0byBzd2l0Y2ggd2hpY2ggcHJvamVjdCBpcyBhY3RpdmVcbmNvbnN0IHByb2plY3RDbGlja2VkID0gKGUpID0+IHtcbiAgLy8gY2hlY2sgdG8gc2VlIGlmIGVsZW1lbnQgY2xpY2tlZCBpcyBhIDxsaT4gKGxpc3QgaXRlbSlcbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkxJXCIpIHtcbiAgICAvLyBhZGQgLmFjdGl2ZSBjbGFzcyB0byBlbGVtZW50IGNsaWNrZWRcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgYWN0aXZlUHJvamVjdCA9IGUudGFyZ2V0O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiLCBhY3RpdmVQcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlcmUgaXMgYSBwcmV2aW91cyBwcm9qZWN0IHRoYXQgd2FzIGFjdGl2ZVxuICAgIGlmIChwcmV2UHJvamVjdCAhPT0gbnVsbCkge1xuICAgICAgLy8gcmVtb3ZlcyBhY3RpdmUgY2xhc3MgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgcHJldlByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgIH1cbiAgICAvLyBzZXQgcHJldlByb2plY3QgYXMgdGhlIGNsaWNrZWQgSFRNTElFbGVtZW50XG4gICAgcHJldlByb2plY3QgPSBlLnRhcmdldDtcbiAgfVxufTtcblxuLy8gZGlzcGxheXMgcHJvamVjdHMgb250byB0aGUgRE9NXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoYXJyLCBwYXJlbnROb2RlKSB7XG4gIC8vIGxvb3AgdGhyb3VnaCBhcnJheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIC8vIGNyZWF0ZSBsaXN0IGl0ZW0gZm9yIHByb2plY3RcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIC8vIGdpdmUgaXQgY2xhc3MgdXNlZCBmb3IgYWRkZWQgcHJvamVjdHNcbiAgICBhZGRQcm9qZWN0LmNsYXNzTmFtZSA9IFwiYWRkZWQtcHJvamVjdHNcIjtcbiAgICAvLyBzZXQgdGhlIHRleHQgY29udGVudCB0byB0aGUgcHJvamVjdCBuYW1lIGZvdW5kIGluIHRoaXMgaXRlcmF0aW9uXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IGFycltpXS5wcm9qZWN0TmFtZTtcbiAgICAvLyBzZXQgYSBkYXRhIGF0dHJpYnV0ZSBmb3IgaXRcbiAgICBhZGRQcm9qZWN0LmRhdGFzZXQucHJvamVjdE5hbWUgPSBhcnJbaV0ucHJvamVjdE5hbWU7XG4gICAgLy8gY3JlYXRlIGNvbmRpdGlvbmFsIHRvIGNoZWNrIGlmIGRlZmF1bHQgdGFzayBpcyBtYXRjaGVkXG4gICAgaWYgKGFycltpXS5wcm9qZWN0TmFtZSA9PT0gYWN0aXZlUHJvamVjdCkge1xuICAgICAgLy8gc2V0IGRlZmF1bHQgcHJvamVjdCB0byBhY3RpdmVcbiAgICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgICAgLy8gc2V0IHZhcmlhYmxlIHRoYXQgbW9uaXRvcnMgYWN0aXZlIHByb2plY3RzIHRvIGRlZmF1bHQgcHJvamVjdFxuICAgICAgcHJldlByb2plY3QgPSBhZGRQcm9qZWN0O1xuICAgIH1cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gaW5jbHVkZSB0YXNrcyBmb3IgdGhlIHByb2plY3RcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIHN0b3JlIHByb2plY3QgbmFtZSBjbGlja2VkXG4gICAgICBsZXQgcHJvamVjdCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgLy8gdXNlIGFib3ZlIHZhcmlhYmxlIGFzIGFyZyBmb3IgZGlzcGxheVRhc2tzKClcbiAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCBwcm9qZWN0c0FuZFRhc2tzLCBjdXJyZW50VGFza0xpc3QpO1xuICAgIH0pO1xuICAgIC8vIHByb2plY3QgYWN0aW9uIGJ1dHRvbiBjb250YWluZXJcbiAgICBjb25zdCBwcm9qZWN0QWN0aW9uQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWN0aW9uQnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC1hY3Rpb24tYnRuLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gcHJvamVjdCByZW5hbWUgYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RFZGl0QnRuLnRpdGxlID0gXCJSZW5hbWUgUHJvamVjdFwiO1xuICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC1lZGl0LWJ0blwiO1xuICAgIHByb2plY3RFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgICAgIHJlbmFtZVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvLyBwcm9qZWN0IGRlbGV0aW9uIGJ1dHRvblxuICAgIGNvbnN0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REZWxldGVCdG4udGl0bGUgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtZGVsZXRlLWJ0blwiO1xuICAgIHByb2plY3REZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vIGFwcGVuZCBwcm9qZWN0IGFjdGlvbiBidXR0b25zXG4gICAgcHJvamVjdEFjdGlvbkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ0bik7XG4gICAgcHJvamVjdEFjdGlvbkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuKTtcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RBY3Rpb25CdG5Db250YWluZXIpO1xuXG4gICAgLy8gbW91c2UgaW4gYW5kIG91dCBldmVudCBsaXN0ZW5lcnMgZm9yIGhvdmVyIGNvbG9yIGNoYW5nZSBzdGF0dXNcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qLWVkaXQtaG92ZXJlZFwiKTtcbiAgICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInByb2otZGVsLWhvdmVyZWRcIik7XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJvai1lZGl0LWhvdmVyZWRcIik7XG4gICAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qLWRlbC1ob3ZlcmVkXCIpO1xuICAgIH0pO1xuICAgIC8vIGFwcGVuZCBuZXdseSBhZGRlZCBwcm9qZWN0IHRvIHNwZWNpZmllZCBub2RlXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgfVxufVxuXG4vLyBjcmVhdGVzIHRhc2tzXG5mdW5jdGlvbiB0YXNrQ3JlYXRvcih0YXNrKSB7XG4gIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byBzZWFyY2ggZGF0YWJhc2UgYXJyYXkgZm9yIHByb2plY3QgdGhhdCBpcyBjdXJyZW50bHkgYWN0aXZlXG4gIGNvbnN0IHByb2plY3RFeGlzdHMgPSBwcm9qZWN0c0FuZFRhc2tzLnNvbWUoXG4gICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByZXZQcm9qZWN0LnRleHRDb250ZW50XG4gICk7XG4gIC8vIGZpbmQgaW5kZXggb2YgcHJvamVjdCBmb3VuZCBpbiBkYXRhYmFzZVxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJldlByb2plY3QudGV4dENvbnRlbnRcbiAgKTtcblxuICAvLyBjcmVhdGUgbmV3VGFzayBvYmplY3QgdG8gbGF0ZXIgcHVzaCB0byBwcm9qZWN0c0FuZFRhc2tzIGFycmF5XG4gIGxldCBuZXdUYXNrID0ge1xuICAgIC8vIGlkOiBuZXdJZCxcbiAgICB0YXNrOiB0YXNrLFxuICAgIGRhdGVDcmVhdGVkOiBuZXcgRGF0ZSgpLFxuICAgIGRhdGVEdWU6IGN1cnJlbnREYXRlKCkueWVhck1vbnRoRGF5LFxuICAgIHRpbWVEdWU6IGN1cnJlbnREYXRlKCkudGltZSxcbiAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgZGVzYzogXCJcIixcbiAgfTtcbiAgLy8gcHVzaCBuZXdseSBjcmVhdGVkIHRhc2sgdG8gY29ycmVjdCBpbmRleCBvZiBwcm9qZWN0c0FuZFRhc2tzIGluIHRoZSBjdXJyZW50VGFza3MgcHJvcGVydHlcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAvLyByZWxvYWQgdGhlIGRvY3VtZW50XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAvLyBzYXZlIHRvIGxvY2FsU3RvcmFnZSB0byBrZWVwIGRhdGEgYWZ0ZXIgcGFnZSByZWxvYWRzXG4gIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBcInByb2plY3RzQW5kVGFza3NcIixcbiAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKVxuICApO1xufVxuXG4vLyB2YXJpYWJsZSB0byBzZWxlY3Qgc3BlY2lmaWMgcHJvamVjdFxubGV0IHByZXZUYXNrID0gbnVsbDsgLy8gZGVjbGFyZSBwcmV2VGFzayBhdCBhIGhpZ2hlciBzY29wZSBsZXZlbFxuXG5jb25zdCB0YXNrQ2xpY2tlZCA9IChlKSA9PiB7XG4gIC8vIGNoZWNrIHRvIHNlZSBpZiB0YXNrIGNsaWNrZWQgaGFzIGFjdGl2ZS10YXNrIGFzIGEgY2xhc3MgbmFtZVxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwidGFzay1saXN0LWl0ZW0gYWN0aXZlLXRhc2tcIikge1xuICAgIC8vIHJlbG9hZCB0aGUgcGFnZSBzbyBuZXcgYXBwbGljYXRpb25zIG9mIGVkaXREZXRhaWxzKCkgY2FuIHJ1blxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJMSVwiKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS10YXNrXCIpO1xuICAgIGlmIChwcmV2VGFzayAhPT0gbnVsbCkge1xuICAgICAgcHJldlRhc2suY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS10YXNrXCIpO1xuICAgIH1cbiAgICBwcmV2VGFzayA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKHByZXZUYXNrLnRleHRDb250ZW50KTtcbiAgfVxuXG4gIGVkaXREZXRhaWxzKGUudGFyZ2V0KTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCBhcnIsIHBhcmVudE5vZGUpIHtcbiAgLy8gZmlyc3QgZmluZCB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBhcnJheVxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdFxuICApO1xuICAvLyBjcmVhdGUgZW1wdHkgYXJyYXkgZm9yIGN1cnJlbnQgdGFza3NcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgY29uc29sZS5sb2coYHByb2plY3RJbmRleDogJHtwcm9qZWN0SW5kZXh9YCk7XG5cbiAgLy8gZXh0cmFjdHMgdGFza3MgZnJvbSAnY3VycmVudFRhc2tzJyBwcm9wZXJ0eSBvZiBhbiBvYmplY3QgaW4gdGhlICdhcnInIGFycmF5IGFuZCBwdXNoZXMgaW50byB0aGUgdGFza3MgYXJyYXlcblxuICBpZiAocHJvamVjdEluZGV4ICE9IC0xKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhhcnJbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChhcnJbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHB1c2ggbmV3IHRhc2sgaW50byBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgICAgIHRhc2tzLnB1c2goZS50YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QudmFsdWVzKGFycltwcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoYXJyW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHB1c2ggbmV3IHRhc2sgaW50byBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgICAgIHRhc2tzLnB1c2goZS50YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHJlc2V0IHRoZSBjb250ZW50cyBvZiB0aGUgcGFyZW50Tm9kZSBhcmd1bWVudFxuICBwYXJlbnROb2RlLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gZm9yIGxvb3AgdG8gY3JlYXRlIHRhc2tzLCBjaGVja2JveGVzIGFuZCBhZGQgY2xhc3Nlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2stbGlzdC1pdGVtLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgYWN0aW9uQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhY3Rpb25CdG5Db250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrLWFjdGlvbi1idG4tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSBcInRhc2stbGlzdC1pdGVtXCI7XG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSB0YXNrc1tpXTtcbiAgICAvLyBjb25zb2xlLmxvZyhgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzOiAke3Byb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrc1tpXS50YXNrfWApO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrc1tpXS50YXNrLmluY2x1ZGVzKHRhc2tzW2ldKSlcbiAgICAvLyBjaGVjayB0byBzZWUgaWYgdGFzayBpcyBjb21wbGV0ZWQgdGhlbiBhZGQgYSBzdHJpa2V0aHJvdWdoIGlmIHNvXG4gICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MubGVuZ3RoOyBqKyspe1xuICAgIC8vICAgaWYgKHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrc1tqXS50YXNrLmluY2x1ZGVzKHRhc2tzW2ldKSl7XG4gICAgLy8gICAgIC8vIGNvZGVcbiAgICAvLyAgICAgY29uc29sZS5sb2coYHRhc2tzW2ldOiAke3Rhc2tzW2ldfWApO1xuICAgIC8vICAgICBsaXN0SXRlbS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb21wbGV0ZUJ0bi5jbGFzc05hbWUgPSBcInRhc2stY29tcGxldGUtYnRuXCI7XG4gICAgY29tcGxldGVCdG4udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjb21wbGV0ZUJ0bi50aXRsZSA9IFwiQ29tcGxldGUgVGFza1wiO1xuICAgIC8vIGxvb3AgdGhyb3VnaCBjb21wbGV0ZWQgdGFza3MgYW5kIGFkZCBzdHJpa2V0aHJvdWdoIGFuZCBjaGVja2VkIGJveCB0byB0YXNrcyB0aGF0IG1hdGNoIGN1cnJlbnQgdGFzayBpdGVyYXRpb25cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrcy5sZW5ndGg7IGorKyl7XG4gICAgICBpZiAocHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzW2pdLnRhc2suaW5jbHVkZXModGFza3NbaV0pKXtcbiAgICAgICAgLy8gY29kZVxuICAgICAgICBjb25zb2xlLmxvZyhgdGFza3NbaV06ICR7dGFza3NbaV19YCk7XG4gICAgICAgIGxpc3RJdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgICAgY29tcGxldGVCdG4uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBjb21wbGV0aW9uIG9mIHRhc2tcbiAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBpZiAoY29tcGxldGVCdG4uY2hlY2tlZCkge1xuICAgICAgICAvLyBtYW5pcHVsYXRlIHRoZSBET00gZWxlbWVudCBvZiB0YXNrIHRvIGluY2x1ZGUgc3RyaWtldGhyb3VnaCBvZiB0ZXh0XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICBjb21wbGV0ZVRhc2sodGFzay50ZXh0Q29udGVudCwgcHJvamVjdEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSBcIlwiO1xuICAgICAgICB1bkNvbXBsZXRlVGFzayh0YXNrLnRleHRDb250ZW50LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFjdGlvbkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25CdG5Db250YWluZXIpO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIH1cbn1cblxuLy8gY29tcGxldGUgdGFzayBmdW5jdGlvblxuZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2tOYW1lLCBwcm9qZWN0SW5kZXgpIHtcbiAgY29uc29sZS5sb2coYFRlc3RpbmcgdGFzayB2YXJpYWJsZTogJHt0YXNrTmFtZX1gKTtcbiAgY29uc29sZS5sb2coYFRlc3RpbmcgcHJvamVjdCB2YXJpYWJsZTogJHtwcm9qZWN0SW5kZXh9YCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnRhc2sgPT09IHRhc2tOYW1lXG4gICk7XG4gIGNvbnNvbGUubG9nKGB0YXNrSW5kZXg6ICR7dGFza0luZGV4fWApO1xuICAvLyBuZWVkIHRvIHNlbGVjdCB0aGUgcmVzcGVjdGl2ZSBET00gZWxlbWVudC4uLlxuICBjb25zb2xlLmxvZyhcbiAgICBgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdLnRhc2s6ICR7cHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdLnRhc2t9YFxuICApO1xuICAvLyBmaW5kIHRoZSBjdXJyZW50IHRhc2sgaW4gdGhlIGRhdGFiYXNlXG4gIGNvbnN0IGNvbXBsZXRlZFRhc2sgPSBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW3Rhc2tJbmRleF07XG4gIC8vIG1vdmUgdGhlIGN1cnJlbnQgdGFzayBpbnRvIHRoZSBjb21wbGV0ZWRUYXNrcyBhcnJheSBvZiBkYXRhYmFzZVxuICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MucHVzaChjb21wbGV0ZWRUYXNrKTtcbiAgLy8gcmVtb3ZlIHRoZSB0YXNrIGZyb20gY3VycmVudCB0YXNrc1xuICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzLnNwbGljZShcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzLmluZGV4T2YoY29tcGxldGVkVGFzayksXG4gICAgMVxuICApO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MpO1xuICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICAvLyByZWxvYWQgdGhlIHBhZ2VcbiAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIHVuQ29tcGxldGVUYXNrKHRhc2tOYW1lLCBwcm9qZWN0SW5kZXgpIHtcbiAgY29uc29sZS5sb2coYFRlc3RpbmcgdGFzayB2YXJpYWJsZTogJHt0YXNrTmFtZX1gKTtcbiAgY29uc29sZS5sb2coYFRlc3RpbmcgcHJvamVjdCB2YXJpYWJsZTogJHtwcm9qZWN0SW5kZXh9YCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrcy5maW5kSW5kZXgoXG4gICAgKGUpID0+IGUudGFzayA9PT0gdGFza05hbWVcbiAgKTtcbiAgY29uc29sZS5sb2coYHRhc2tJbmRleDogJHt0YXNrSW5kZXh9YCk7XG4gIC8vIG5lZWQgdG8gc2VsZWN0IHRoZSByZXNwZWN0aXZlIERPTSBlbGVtZW50Li4uXG4gIGNvbnNvbGUubG9nKFxuICAgIGBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3NbdGFza0luZGV4XS50YXNrOiAke3Byb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrc1t0YXNrSW5kZXhdLnRhc2t9YFxuICApO1xuICAvLyBmaW5kIHRoZSBjb21wbGV0ZWQgdGFzayBpbiB0aGUgZGF0YWJhc2VcbiAgY29uc3QgdW5Db21wbGV0ZWRUYXNrID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzW3Rhc2tJbmRleF07XG4gIC8vIG1vdmUgdGhlIGNvbXBsZXRlZCB0YXNrIGludG8gdGhlIGN1cnJlbnRUYXNrcyBhcnJheSBvZiBkYXRhYmFzZVxuICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzLnB1c2godW5Db21wbGV0ZWRUYXNrKTtcbiAgLy8gcmVtb3ZlIHRoZSB0YXNrIGZyb20gY29tcGxldGVkIHRhc2tzXG4gIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrcy5zcGxpY2UoXG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzLmluZGV4T2YodW5Db21wbGV0ZWRUYXNrKSxcbiAgICAxXG4gICk7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcyk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrcyk7XG4gIC8vIHVwZGF0ZSB0aGUgbG9jYWxTdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gIC8vIHJlbG9hZCB0aGUgcGFnZVxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuZnVuY3Rpb24gZWRpdERldGFpbHMoc3RyKSB7XG4gIC8vIEdldCB0aGUgZGV0YWlscyBjb250YWluZXIgZWxlbWVudCBhbmQgc2V0IGl0IHRvIGZsZXhcbiAgY29uc3QgcXVlcnlTZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlscy1jb250YWluZXJcIik7XG4gIHF1ZXJ5U2VsZWN0ZWQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byBncmFiIHRhc2sgd2l0aCAuYWN0aXZlLXRhc2sgY2xhc3MgbmFtZVxuICBjb25zdCBzaG93T3JIaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZS10YXNrXCIpO1xuXG4gIC8vIElmIHRoZXJlIGlzIGFuIGFjdGl2ZSB0YXNrLCBzaG93IHRoZSBkZXRhaWxzIHBhbmVsXG4gIGlmIChzaG93T3JIaWRlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBzdHIudGV4dENvbnRlbnQ7XG5cbiAgICAvLyBmaW5kIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgdGFzayBwcm92aWRlZCBhcyBhbiBhcmd1bWVudCAobmVlZCB0byBoYXZlIHRoaXMgc2VhcmNoIGNvbXBsZXRlZCB0YXNrcyBhcyB3ZWxsKVxuXG4gICAgLy8gZnVja1xuICAgIGNvbnN0IHRhc2tPYmplY3QgPSBwcm9qZWN0c0FuZFRhc2tzXG4gICAgICAuZmxhdE1hcCgocHJvamVjdCkgPT4gW1xuICAgICAgICAuLi5wcm9qZWN0LmN1cnJlbnRUYXNrcyxcbiAgICAgICAgLi4ucHJvamVjdC5jb21wbGV0ZWRUYXNrcyxcbiAgICAgIF0pIC8vIGZsYXR0ZW4gdGhlIG5lc3RlZCBhcnJheSBvZiB0YXNrc1xuICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrID09PSB0YXNrVGl0bGUpOyAvLyBmaWx0ZXIgdGhlIHRhc2tzIGJ5IHRhc2sgbmFtZVxuICAgIGNvbnNvbGUubG9nKGB0YXNrT2JqZWN0OiAke3Rhc2tPYmplY3R9YCk7XG4gICAgY29uc3QgcHJvamVjdFdpdGhUYXNrID0gcHJvamVjdHNBbmRUYXNrc1xuICAgICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBGb3IgZWFjaCBwcm9qZWN0LCB3ZSBhcmUgZ29pbmcgdG8gZmluZCBhIHRhc2sgdGhhdCBtYXRjaGVzIHRoZSB0YXNrVGl0bGVcbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QuY3VycmVudFRhc2tzLmZpbmQoXG4gICAgICAgICAgKHRhc2spID0+IHRhc2sudGFzayA9PT0gdGFza1RpdGxlIC8vIENoZWNrIGlmIHRoZSB0YXNrJ3MgdGl0bGUgbWF0Y2hlcyB0aGUgdGFza1RpdGxlIHdlIGFyZSBsb29raW5nIGZvclxuICAgICAgICApO1xuICAgICAgICAvLyBJZiB3ZSBmb3VuZCBhIG1hdGNoaW5nIHRhc2ssIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvamVjdCBuYW1lIGFuZCB0aGUgdGFza1xuICAgICAgICAvLyBJZiB3ZSBkaWRuJ3QgZmluZCBhIG1hdGNoaW5nIHRhc2ssIHdlIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiB0YXNrID8geyBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0TmFtZSwgdGFzayB9IDogbnVsbDtcbiAgICAgIH0pXG4gICAgICAvLyBXZSBmaWx0ZXIgb3V0IGFueSBudWxsIHZhbHVlcyBmcm9tIHRoZSBhcnJheSwga2VlcGluZyBvbmx5IHRoZSBwcm9qZWN0cyB0aGF0IGhhdmUgYSBtYXRjaGluZyB0YXNrXG4gICAgICAuZmlsdGVyKChyZXN1bHQpID0+IHJlc3VsdCAhPT0gbnVsbCk7XG5cbiAgICAvLyBOb3csIHdlIGNoZWNrIGlmIHdlIGZvdW5kIGFueSBwcm9qZWN0cyB3aXRoIGEgbWF0Y2hpbmcgdGFza1xuICAgIC8vIElmIHdlIGRpZCwgd2UgdGFrZSB0aGUgcHJvamVjdCBuYW1lIG9mIHRoZSBmaXJzdCBwcm9qZWN0IGluIHRoZSBhcnJheVxuICAgIC8vIElmIHdlIGRpZG4ndCBmaW5kIGFueSBwcm9qZWN0cywgd2Ugc2V0IHRoZSBwcm9qZWN0TmFtZSB0byBudWxsXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPVxuICAgICAgcHJvamVjdFdpdGhUYXNrLmxlbmd0aCA+IDAgPyBwcm9qZWN0V2l0aFRhc2tbMF0ucHJvamVjdE5hbWUgOiBudWxsO1xuXG4gICAgLy9wcm9qZWN0XG4gICAgLy8gbmVlZCB0byBkaXNwbGF5IGFsbCBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3RzT2JqZWN0ID0gcHJvamVjdHNBbmRUYXNrcy5mbGF0TWFwKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgLy8gRmluZCB0aGUgSFRNTCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGUgc2VsZWN0IGVsZW1lbnQgZm9yIHByb2plY3Qgc2VsZWN0aW9uXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3Byb2plY3Qtc2VsZWN0b3IgPiBzZWxlY3RcIlxuICAgICk7XG5cbiAgICAvLyBjaGVjayB0byBzZWUgaWYgcHJvamVjdFNlbGVjdG9yIGRvZXMgbm90IGhhdmUgb3B0aW9ucyBhbHJlYWR5IGZpbGxlZCBpblxuICAgIGlmIChwcm9qZWN0U2VsZWN0b3IuY2xhc3NOYW1lICE9IFwiZmlsbGVkXCIpIHtcbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgcHJvamVjdHNPYmplY3QgbGlzdCB0byBjcmVhdGUgb3B0aW9ucyBmb3IgdGhlIHNlbGVjdCBlbGVtZW50XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzT2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBvcHRpb24gZWxlbWVudFxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgdGV4dCBvZiB0aGUgb3B0aW9uIHRvIHRoZSBwcm9qZWN0IG5hbWUgYXQgdGhlIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0c09iamVjdFtpXTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdGV4dCBvZiB0aGUgb3B0aW9uIG1hdGNoZXMgdGhlIHByb2plY3ROYW1lIHdlIHdhbnQgdG8gc2VsZWN0XG4gICAgICAgIGlmIChvcHRpb24udGV4dCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIG1hdGNoLCBzZXQgdGhlIG9wdGlvbiBhcyBzZWxlY3RlZFxuICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImZpbGxlZFwiKTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBvcHRpb24gdG8gdGhlIHByb2plY3RTZWxlY3RvciBzZWxlY3QgZWxlbWVudFxuICAgICAgICBwcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvcHRpb25zIGZvciBwcmlvcml0eSBzZWxlY3QgZWxlbWVudFxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eSA+IHNlbGVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBwcmlvcml0eVNlbGVjdC5vcHRpb25zO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYHByaW9yaXR5T3B0aW9uc1tpXS50ZXh0Q29udGVudDogJHtwcmlvcml0eU9wdGlvbnNbaV0udGV4dENvbnRlbnR9YFxuICAgICAgKTtcbiAgICAgIGlmIChwcmlvcml0eU9wdGlvbnNbaV0udGV4dENvbnRlbnQgPT09IHRhc2tPYmplY3RbMF0ucHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdHlPcHRpb25zW2ldLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9CSkVDVCBEQVRBXG5cbiAgICAvLyBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoXG4gICAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgLy8gdGFza1xuICAgIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWlucHV0LWRldGFpbFwiKTtcbiAgICB0YXNrLnZhbHVlID0gdGFza09iamVjdFswXS50YXNrO1xuICAgIHJlc2l6ZUlucHV0KCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdPy5jdXJyZW50VGFza3M/LmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnRhc2sgPT09IHRhc2sudmFsdWVcbiAgICApO1xuXG4gICAgaWYgKHRhc2tJbmRleCA9PT0gLTEpe1xuICAgICAgY29uc29sZS5sb2coYFJBR0UhYCk7XG4gICAgfVxuXG4gICAgLy8gZGF0ZUNyZWF0ZWRcbiAgICBsZXQgZGF0ZUNyZWF0ZWQgPSB0YXNrT2JqZWN0WzBdLmRhdGVDcmVhdGVkO1xuXG4gICAgLy8gZGF0ZUR1ZVxuICAgIGxldCBkYXRlRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWR1ZSA+IGlucHV0W3R5cGU9ZGF0ZV1cIik7XG4gICAgZGF0ZUR1ZS52YWx1ZSA9IHRhc2tPYmplY3RbMF0uZGF0ZUR1ZTtcblxuICAgIC8vIHRpbWVEdWVcbiAgICBsZXQgdGltZUR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZS1kdWUgPiBpbnB1dFt0eXBlPXRpbWVdXCIpO1xuICAgIHRpbWVEdWUudmFsdWUgPSB0YXNrT2JqZWN0WzBdLnRpbWVEdWU7XG5cbiAgICAvLyBwcmlvcml0eVxuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eSA+IHNlbGVjdFwiKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRhc2tPYmplY3RbMF0ucHJpb3JpdHk7XG5cbiAgICAvLyBkZXNjXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb24tdGV4dGFyZWFcIik7XG4gICAgZGVzYy52YWx1ZSA9IHRhc2tPYmplY3RbMF0uZGVzYztcblxuICAgIC8vIHNhdmUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG4gICAgbGV0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtYnRuXCIpO1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhdmVEZXRhaWxzKFxuICAgICAgICBwcm9qZWN0U2VsZWN0b3IudmFsdWUsXG4gICAgICAgIHRhc2sudmFsdWUsXG4gICAgICAgIGRhdGVDcmVhdGVkLFxuICAgICAgICBkYXRlRHVlLnZhbHVlLFxuICAgICAgICB0aW1lRHVlLnZhbHVlLFxuICAgICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgZGVzYy52YWx1ZSxcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHRhc2tJbmRleFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIGRlbGV0ZSBidG4gZXZlbnQgbGlzdGVuZXJcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtYnRuXCIpO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlRGV0YWlscyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoc2hvd09ySGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBxdWVyeVNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlRGV0YWlscyhcbiAgcHJvamVjdCxcbiAgdGFzayxcbiAgZGF0ZUNyZWF0ZWQsXG4gIGRhdGVEdWUsXG4gIHRpbWVEdWUsXG4gIHByaW9yaXR5LFxuICBkZXNjLFxuICBwcm9qZWN0TmFtZSxcbiAgb3JpZ2luYWxUYXNrSW5kZXhcbikge1xuICAvLyBzZWN0aW9uIGZvciB0YXNrcyB0aGF0IGhhdmUgbm90IGhhZCB0aGVpciBwcm9qZWN0IGNoYW5nZWRcbiAgaWYgKHByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XG4gICAgLy8gZmluZCBwcm9qZWN0IGluIHByb2plY3RzQW5kVGFzayBhcnJheVxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3RcbiAgICApO1xuXG4gICAgLy8gdXBkYXRlIHRoZSAsIGRhdGUgZHVlLCB0aW1lIGR1ZSwgcHJpb3JpdHksIGFuZCBkZXNjcmlwdGlvbiBpbiB0aGUgYXJyYXlcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS50YXNrID0gdGFzaztcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS5kYXRlRHVlID1cbiAgICAgIGRhdGVEdWU7XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1tvcmlnaW5hbFRhc2tJbmRleF0udGltZUR1ZSA9XG4gICAgICB0aW1lRHVlO1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLnByaW9yaXR5ID1cbiAgICAgIHByaW9yaXR5O1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLmRlc2MgPSBkZXNjO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIHByb2plY3Qgc2VsZWN0ZWQgaXMgZGlmZmVyZW50IHRoYW4gdGFzaydzIG9yaWdpbmFsIHByb2plY3QuLi5cbiAgICAvLyBtYWtlIHN1cmUgdG8gZ2V0IG9yaWdpbmFsIHByb2plY3QgbmFtZSBpbmRleCBmb3IgbGF0ZXIgZGVsZXRpb25cbiAgICBjb25zdCBvbGRQcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICAvLyBmaW5kIG91dCB0aGUgaW5kZXggb2YgdGhlIHByb2plY3ROYW1lIGluIHByb2plY3RzQW5kVGFza3MgdGhhdCBtYXRjaGVzIGBwcm9qZWN0YCAodGhlIG5ldyBwcm9qZWN0IHNlbGVjdGVkJ3MgbmFtZSlcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0XG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSBuZXdUYXNrIG9iamVjdCB0byBsYXRlciBwdXNoIHRvIHByb2plY3RzQW5kVGFza3MgYXJyYXlcbiAgICBsZXQgbmV3VGFzayA9IHtcbiAgICAgIHRhc2s6IHRhc2ssXG4gICAgICBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICAgIGRhdGVEdWU6IGRhdGVEdWUsXG4gICAgICB0aW1lRHVlOiB0aW1lRHVlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgZGVzYzogZGVzYyxcbiAgICB9O1xuICAgIC8vIHB1c2ggbmV3bHkgY3JlYXRlZCB0YXNrIHRvIGNvcnJlY3QgaW5kZXggb2YgcHJvamVjdHNBbmRUYXNrcyBpbiB0aGUgY3VycmVudFRhc2tzIHByb3BlcnR5XG4gICAgcHJvamVjdHNBbmRUYXNrc1tuZXdQcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgLy8gZGVsZXRlIHRoZSBvbGQgY3VycmVudCB0YXNrXG4gICAgcHJvamVjdHNBbmRUYXNrc1tvbGRQcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5zcGxpY2Uob3JpZ2luYWxUYXNrSW5kZXgsIDEpO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICB9XG5cbiAgLy8gcmVsb2FkIHRoZSBwYWdlXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxEZXRhaWxzKCkge1xuICBjb25zdCBxdWVyeVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWNvbnRhaW5lclwiKTtcbiAgcXVlcnlTZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZURldGFpbHMocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpIHtcbiAgbGV0IGRlbGV0ZUNvbmZpcm1hdGlvbiA9IHByb21wdChcbiAgICBgQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSB0YXNrOiAke3Byb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3NbdGFza0luZGV4XS50YXNrfT8gKHkvbilgXG4gICk7XG4gIGlmIChkZWxldGVDb25maXJtYXRpb24gPT09IFwieVwiKSB7XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIGV4cG9ydHNcbmV4cG9ydCB7IHByb2plY3RDcmVhdG9yIH07XG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfTtcbmV4cG9ydCB7IHByb2plY3RDbGlja2VkIH07XG5leHBvcnQgeyBhY3RpdmVQcm9qZWN0IH07XG5leHBvcnQgeyBwcmV2UHJvamVjdCB9O1xuZXhwb3J0IHsgZGlzcGxheVRhc2tzIH07XG5leHBvcnQgeyB0YXNrQ3JlYXRvciB9O1xuZXhwb3J0IHsgdGFza0NsaWNrZWQgfTtcbmV4cG9ydCB7IHNhdmVEZXRhaWxzIH07XG5leHBvcnQgeyBjYW5jZWxEZXRhaWxzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FuZFRhc2tzIH0gZnJvbSBcIi4vZGF0YS5qc1wiO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=