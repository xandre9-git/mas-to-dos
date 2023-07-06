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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#details-container {\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.filter-orange {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.project-action-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-edit-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%; \n}\n\n.project-edit-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.project-delete-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%;\n}\n\n.project-delete-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.proj-edit-hovered {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.proj-del-hovered {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}\n\n.rename-project {\n  background-color:coral;\n  border: none;\n  outline: none;\n  font-size: 1em;\n  font-family: \"Oswald\", Courier, monospace;\n  color: rebeccapurple;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,yCAAyC;AAC3C;;AAEA;EACE,qBAAqB;EACrB,2DAAqD;EACrD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb;;;iBAGe;AACjB;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;mCACiC;AACnC;;AAEA;EACE;AACF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE;AACF;;AAEA;EACE,yDAAwC;EACxC;iCAC+B;AACjC;;AAEA;EACE,yDAA0C;EAC1C;iCAC+B;AACjC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,yCAAyC;EACzC,oBAAoB;AACtB","sourcesContent":["body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(\"./fonts/Oswald-Regular.ttf\"), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#details-container {\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/save.svg\");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/cancel.svg\");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/delete.svg\");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.filter-orange {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.project-action-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-edit-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%; \n}\n\n.project-edit-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.project-delete-btn {\n  height: 24px;\n  width: 24px;\n  background-size: 100% 100%;\n}\n\n.project-delete-btn:hover {\n  filter: invert(100%) sepia(66%) saturate(7005%) hue-rotate(315deg) brightness(107%) contrast(105%)\n}\n\n.proj-edit-hovered {\n  background-image: url(./images/edit.svg);\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.proj-del-hovered {\n  background-image: url(./images/delete.svg);\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n  brightness(100%) contrast(102%);\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}\n\n.rename-project {\n  background-color:coral;\n  border: none;\n  outline: none;\n  font-size: 1em;\n  font-family: \"Oswald\", Courier, monospace;\n  color: rebeccapurple;\n}"],"sourceRoot":""}]);
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
  { projectName: "My Tasks", currentTasks: [], completedTasks: [] }
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
// on load run this command

const activeProjectLocalStorage = window.localStorage.getItem("activeProject");
let prevProject = null;
let activeProject =
  activeProjectLocalStorage != null ? activeProjectLocalStorage : "My Tasks";

// function to switch which project is active
const projectClicked = (e) => {
  // check to see if element clicked is a <li> (list item)
  if (e.target.nodeName === "LI" && e.target.className === "added-projects") {
    // add .active-project class to element clicked
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
    // create a data attribute for it
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
  // find index of project found in database
  const projectIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.findIndex(
    (e) => e.projectName === prevProject.textContent
  );
  if (task.length > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxnQ0FBZ0MsY0FBYyxnREFBZ0QsR0FBRyxnQkFBZ0IsNEJBQTRCLDhEQUE4RCx3QkFBd0IsdUJBQXVCLEdBQUcsUUFBUSxj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QUNBO0FBQ0E7O0FBRUE7QUFDMEI7QUFDQztBQUNEO0FBQ0Q7QUFDRjtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3huQnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Pc3dhbGQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zYXZlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NhbmNlbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYSBhIGEgYSBhIGEgXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiXFxuICAgIFxcXCJiIGMgYyBjIGMgY1xcXCI7XFxufVxcblxcbiN0b3AtYmFyIHtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDcyLCAxODkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxufVxcblxcbiN0b3AtYmFyIGgxIHtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG59XFxuXFxuI2xlZnQtc2lkZS1iYXIge1xcbiAgZ3JpZC1hcmVhOiBiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiN0by1kb3MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODgsIDI0MCk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY3VycmVudC10YXNrcy1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2N1cnJlbnQtdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjg4O1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI2FkZC10YXNrYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jdGFzay1pbnB1dC1iYXIge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI2RldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTY1LCAxNzMpO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBtYXJnaW46IDAgMiUgMiUgMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jZGV0YWlscyA+IGRpdiB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuI2RldGFpbHMgaDMge1xcbiAgbWFyZ2luOiAwLjUlO1xcbiAgY29sb3I6IGhvdHBpbms7XFxufVxcblxcbiNkZXRhaWxzIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gIG1hcmdpbjogMC41JTtcXG59XFxuXFxuI3RpbWUtZHVlID4gaW5wdXRbdHlwZT10aW1lXSB7XFxuICB3aWR0aDogNi41cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2RldGFpbHMtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNSU7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuI2RlbGV0ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNhZGQtcHJvamVjdCwgLmFkZGVkLXByb2plY3RzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkZWQtcHJvamVjdHM6aG92ZXIge1xcbiAgY29sb3I6ICNmZmRiNTg7XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLmFjdGl2ZS1wYW5lLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5maWx0ZXItd2hpdGUge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLmZpbHRlci1vcmFuZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4ucHJvamVjdC1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1lZGl0LWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idG46aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5wcm9qLWVkaXQtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5wcm9qLWRlbC1ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTI1ZGVnKVxcbiAgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG4udGFzay1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlLXRhc2sge1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblxcbi5yZW5hbWUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOmNvcmFsO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkRBQXFEO0VBQ3JELG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYjs7O2lCQUdlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx5REFBd0M7RUFDeEM7aUNBQytCO0FBQ2pDOztBQUVBO0VBQ0UseURBQTBDO0VBQzFDO2lDQUMrQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Pc3dhbGQtUmVndWxhci50dGZcXFwiKSwgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhIGEgYSBhIGEgYSBcXFwiXFxuICAgIFxcXCJiIGMgYyBjIGMgY1xcXCJcXG4gICAgXFxcImIgYyBjIGMgYyBjXFxcIjtcXG59XFxuXFxuI3RvcC1iYXIge1xcbiAgZ3JpZC1hcmVhOiBhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgNzIsIDE4OSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG59XFxuXFxuI3RvcC1iYXIgaDEge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xcbn1cXG5cXG4jbGVmdC1zaWRlLWJhciB7XFxuICBncmlkLWFyZWE6IGI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG4gIGhlaWdodDogOTB2aDtcXG59XFxuXFxuI3RvLWRvcy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE4OCwgMjQwKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjdXJyZW50LXRhc2tzLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jY3VycmVudC10YXNrLWxpc3QtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmODg7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBtYXJnaW46IDIlO1xcbn1cXG5cXG4jYWRkLXRhc2tiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbiN0YXNrLWlucHV0LWJhciB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAxNjUsIDE3Myk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2RldGFpbHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXR1cnF1b2lzZTtcXG4gIGhlaWdodDogNzV2aDtcXG4gIG1hcmdpbjogMCAyJSAyJSAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNkZXRhaWxzID4gZGl2IHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG5cXG4jZGV0YWlscyBoMyB7XFxuICBtYXJnaW46IDAuNSU7XFxuICBjb2xvcjogaG90cGluaztcXG59XFxuXFxuI2RldGFpbHMgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcbiAgbWFyZ2luOiAwLjUlO1xcbn1cXG5cXG4jdGltZS1kdWUgPiBpbnB1dFt0eXBlPXRpbWVdIHtcXG4gIHdpZHRoOiA2LjVyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4jZGV0YWlscy1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogMC41JTtcXG59XFxuXFxuI3NhdmUtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9zYXZlLnN2Z1xcXCIpO1xcbn1cXG5cXG4jY2FuY2VsLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvY2FuY2VsLnN2Z1xcXCIpO1xcbn1cXG5cXG4jZGVsZXRlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNhZGQtcHJvamVjdCwgLmFkZGVkLXByb2plY3RzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkZWQtcHJvamVjdHM6aG92ZXIge1xcbiAgY29sb3I6ICNmZmRiNTg7XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLmFjdGl2ZS1wYW5lLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5maWx0ZXItd2hpdGUge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLmZpbHRlci1vcmFuZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4ucHJvamVjdC1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1lZGl0LWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idG46aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNjYlKSBzYXR1cmF0ZSg3MDA1JSkgaHVlLXJvdGF0ZSgzMTVkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSlcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDY2JSkgc2F0dXJhdGUoNzAwNSUpIGh1ZS1yb3RhdGUoMzE1ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpXFxufVxcblxcbi5wcm9qLWVkaXQtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvZWRpdC5zdmcpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEyNWRlZylcXG4gIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5wcm9qLWRlbC1ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9kZWxldGUuc3ZnKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4udGFzay1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAzJTtcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1saXN0LWl0ZW0ge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1saXN0LWl0ZW06aG92ZXIge1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblxcbi50YXNrLWFjdGlvbi1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hY3RpdmUtdGFzayB7XFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLnJlbmFtZS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6Y29yYWw7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIC0tLSBBUFAgREFUQSAtLS1cblxuLy8gUFJPSkVDVHMgQU5EIFRBU0tTIFNUT1JBR0VcbmNvbnN0IGxvY2FsU3RvcmFnZSA9ICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIpO1xuY29uc3QgcHJvamVjdHNBbmRUYXNrcyA9IChsb2NhbFN0b3JhZ2UgIT0gbnVsbCkgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZSkgOiBbXG4gIHsgcHJvamVjdE5hbWU6IFwiTXkgVGFza3NcIiwgY3VycmVudFRhc2tzOiBbXSwgY29tcGxldGVkVGFza3M6IFtdIH1cbl07XG5cbi8vIGV4cG9ydHNcbmV4cG9ydCB7IHByb2plY3RzQW5kVGFza3MgfTtcbiIsIi8vIC0tLSBET00gRUxFTUVOVFMgLS0tXG5pbXBvcnQgeyBwcm9qZWN0c0FuZFRhc2tzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgcHJvamVjdENyZWF0b3IgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgcHJvamVjdENsaWNrZWQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdGFza0NsaWNrZWQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHRhc2tDcmVhdG9yIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBjYW5jZWxEZXRhaWxzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cblxuLy8gbWFpbiBjb250YWluZXIgZm9yIHRoZSBhcHBcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIHRvcCBiYXJcbmNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b3BCYXIuaWQgPSBcInRvcC1iYXJcIjtcblxuLy8gdG9wIGJhciB0aXRsZVxuY29uc3QgdG9wQmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50b3BCYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTWFzIFRvIERvJ3NcIjtcbnRvcEJhclRpdGxlLmlkID0gXCJ0aXRsZS1iYXJcIjtcbnRvcEJhci5hcHBlbmRDaGlsZCh0b3BCYXJUaXRsZSk7XG5cbi8vIFBST0pFQ1RTXG5cbi8vIGxlZnQgc2lkZSBiYXJcbmNvbnN0IGxlZnRTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZnRTaWRlQmFyLmlkID0gXCJsZWZ0LXNpZGUtYmFyXCI7XG5cbi8vIHByb2plY3Qgc2VjdGlvbiAoZ29lcyBpbiBsZWZ0IHNpZGUgYmFyKVxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdHNDb250YWluZXIuaWQgPSBcInByb2plY3RzLWNvbnRhaW5lclwiO1xubGVmdFNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4vLyBwcm9qZWN0cyBsaXN0XG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5wcm9qZWN0c0xpc3QuaWQgPSBcInByb2plY3RzLXVsXCI7XG5wcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IHByb2plY3RzIG9uIHRoZSBkb21cbmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c0FuZFRhc2tzLCBwcm9qZWN0c0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWN0aXZlIHNlbGVjdGVkIHByb2plY3RcbnByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENsaWNrZWQpO1xuXG4vLyBhZGQgcHJvamVjdCBidXR0b25cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5hZGRQcm9qZWN0QnV0dG9uLmlkID0gXCJhZGQtcHJvamVjdFwiO1xuYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENyZWF0b3IpO1xucHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4vLyBwcm9qZWN0IGJ1dHRvbnMgY29udGFpbmVyXG5jb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0QnRucy5pZCA9IFwicHJvamVjdC1idG5zLWNvbnRhaW5lclwiO1xuXG4vLyBlZGl0IHByb2plY3QgbmFtZSBidXR0b25cbmNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmVkaXRQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC1idG5zIGZpbHRlci13aGl0ZVwiO1xuZWRpdFByb2plY3RCdG4uaWQgPSBcImVkaXQtYnRuXCI7XG5lZGl0UHJvamVjdEJ0bi50aXRsZSA9IFwiRWRpdFwiO1xuXG4vLyBkZWxldGUgcHJvamVjdCBidXR0b25cbmNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtYnRucyBmaWx0ZXItd2hpdGVcIjtcbmRlbGV0ZVByb2plY3RCdG4uaWQgPSBcImRlbC1idG5cIjtcbmRlbGV0ZVByb2plY3RCdG4udGl0bGUgPSBcIkRlbGV0ZVwiO1xuXG4vLyBwcm9qZWN0IGJ1dHRvbiBjb250YWluZXIgYXBwZW5kYWdlc1xucHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RCdG4pO1xucHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG5cbi8vIFRPIERPU1xuXG4vLyB0byBkbyBib2FyZCBjb250YWluZXJcbmNvbnN0IHRvZG9Cb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb0JvYXJkc0NvbnRhaW5lci5pZCA9IFwidG8tZG9zLWNvbnRhaW5lclwiO1xudG9kb0JvYXJkc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbi8vIGN1cnJlbnQgdGFza3MgY29udGFpbmVyXG5jb25zdCBjdXJyZW50VGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY3VycmVudFRhc2tzQ29udGFpbmVyLmlkID0gXCJjdXJyZW50LXRhc2tzLWNvbnRhaW5lclwiO1xuY3VycmVudFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG50b2RvQm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUYXNrc0NvbnRhaW5lcik7XG5cbi8vIGN1cnJlbnQgdGFza3MgdGl0bGVcbmNvbnN0IGN1cnJlbnRUYXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuY3VycmVudFRhc2tzVGl0bGUuY2xhc3NOYW1lID0gXCJhY3RpdmUtcGFuZS10aXRsZVwiO1xuY3VycmVudFRhc2tzVGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG5jdXJyZW50VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tzVGl0bGUpO1xuXG4vLyBjdXJyZW50IHRhc2tsaXN0XG5jb25zdCBjdXJyZW50VGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY3VycmVudFRhc2tMaXN0Q29udGFpbmVyLmlkID0gXCJjdXJyZW50LXRhc2stbGlzdC1jb250YWluZXJcIjtcbmN1cnJlbnRUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza0xpc3RDb250YWluZXIpO1xuXG4vLyBhZGQgdGFza3MgY29udGFpbmVyXG5jb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFkZFRhc2tDb250YWluZXIuaWQgPSBcImFkZC10YXNrYmFyXCI7XG5jdXJyZW50VGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG5cbi8vIGFkZCB0YXNrcyBpbnB1dCBiYXJcbmNvbnN0IGFkZFRhc2tzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5hZGRUYXNrc0lucHV0LmlkID0gXCJ0YXNrLWlucHV0LWJhclwiO1xuYWRkVGFza3NJbnB1dC5wbGFjZWhvbGRlciA9IFwiQWRkIGEgdGFza1wiO1xuYWRkVGFza3NJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy9pZiB1c2VyIHByZXNzZXMgZW50ZXIgb24ga2V5Ym9hcmRcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAvLyBydW4gdGFza0NyZWF0b3IgYW5kIHVzZSB2YWx1ZSBlbnRlcmVkIGluIGFib3ZlIGlucHV0IGVsZW1lbnRcbiAgICB0YXNrQ3JlYXRvcihhZGRUYXNrc0lucHV0LnZhbHVlKTtcbiAgICAvLyBjbGVhciBhZGRUYXNrc0lucHV0XG4gICAgYWRkVGFza3NJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cbn0pO1xuXG5hZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tzSW5wdXQpO1xuXG4vLyBhZGQgdGFza3Mgc3VibWl0IGJ1dHRvblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5hZGRUYXNrQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuYWRkVGFza0J0bi5pZCA9IFwiYWRkLXRhc2stYnRuXCI7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBnZXQgaW5wdXQgaWQgZm9yIHRhc2stYmFyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWlucHV0LWJhclwiKTtcbiAgLy8gcnVuIHRhc2tDcmVhdG9yIGFuZCB1c2UgdmFsdWUgZW50ZXJlZCBpbiBhYm92ZSBpbnB1dCBlbGVtZW50XG4gIHRhc2tDcmVhdG9yKGlucHV0LnZhbHVlKTtcbiAgLy8gY2xlYXIgaW5wdXRcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbi8vIGN1cnJlbnQgdGFza3MgdW5vcmRlcmVkIGxpc3RcbmNvbnN0IGN1cnJlbnRUYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jdXJyZW50VGFza0xpc3QuaWQgPSBcImN1cnJlbnQtdGFza3MtdWxcIjtcbmN1cnJlbnRUYXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza0xpc3QpO1xuXG4vLyBjdXJyZW50IHRhc2tzIGxpc3QgaXRlbVxuY29uc3QgYWRkVGFza0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuYWRkVGFza0xpc3RJdGVtLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stbGlcIjtcblxuLy8gZGlzcGxheSBhbGwgdGFza3NcbmRpc3BsYXlUYXNrcyhhY3RpdmVQcm9qZWN0LCBwcm9qZWN0c0FuZFRhc2tzLCBjdXJyZW50VGFza0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWN0aXZlIHNlbGVjdGVkIHRhc2tcbmN1cnJlbnRUYXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0NsaWNrZWQpO1xuXG4vLyBERVRBSUxTXG5cbi8vIGRldGFpbHMgYm9hcmQgY29udGFpbmVyXG5jb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNDb250YWluZXIuaWQgPSBcImRldGFpbHMtY29udGFpbmVyXCI7XG5kZXRhaWxzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gZGV0YWlscyB0aXRsZVxuY29uc3QgZGV0YWlsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuZGV0YWlsc1RpdGxlLmNsYXNzTmFtZSA9IFwiYWN0aXZlLXBhbmUtdGl0bGVcIjtcbmRldGFpbHNUaXRsZS50ZXh0Q29udGVudCA9IFwiRGV0YWlsc1wiO1xuZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzVGl0bGUpO1xuXG4vLyBkZXRhaWxzIHBhbmVcbmNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlscy5pZCA9IFwiZGV0YWlsc1wiO1xuZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuLy8gZGV0YWlscyBwcm9qZWN0IHNlbGVjdG9yIGNvbnRhaW5lclxuY29uc3QgcHJvamVjdFNlbGVjdG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3RTZWxlY3RvckNvbnRhaW5lci5pZCA9IFwicHJvamVjdC1zZWxlY3RvclwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0b3JDb250YWluZXIpO1xuXG4vLyBkZXRhaWxzIHByb2plY3Qgc2VsZWN0b3IgdGl0bGVcbmNvbnN0IHNlbGVjdFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnNlbGVjdFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xucHJvamVjdFNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3RUaXRsZSk7XG5cbi8vIGRldGFpbHMgcHJvamVjdCBzZWxlY3RvclxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5wcm9qZWN0U2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG5cbi8vIGRldGFpbHMgdGFzayBpbnB1dCBjb250YWluZXJcbmNvbnN0IHRhc2tJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrSW5wdXRDb250YWluZXIuaWQgPSBcImVkaXQtdGFzay1uYW1lXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tJbnB1dENvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgdGFzayB0aXRsZVxuY29uc3QgdGFza0lucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50YXNrSW5wdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza1wiO1xudGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dFRpdGxlKTtcblxuLy8gZGV0YWlscyB0YXNrIGlucHV0XG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrSW5wdXQuaWQgPSBcInRhc2staW5wdXQtZGV0YWlsXCI7XG50YXNrSW5wdXQudmFsdWUgPSBcIlBsYWNlaG9sZGVyXCI7XG50YXNrSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuLy8gZGV0YWlscyBkYXRlIGR1ZSBjb250YWluZXJcbmNvbnN0IGRhdGVEdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGF0ZUR1ZUNvbnRhaW5lci5pZCA9IFwiZGF0ZS1kdWVcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQoZGF0ZUR1ZUNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgZGF0ZSBkdWUgc2VsZWN0b3IgdGl0bGVcbmNvbnN0IGRhdGVEdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmRhdGVEdWVUaXRsZS50ZXh0Q29udGVudCA9IFwiRGF0ZSBEdWVcIjtcbmRhdGVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUR1ZVRpdGxlKTtcblxuLy8gZGV0YWlscyBkYXRlIGR1ZSBpbnB1dFxuY29uc3QgZGF0ZUR1ZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuZGF0ZUR1ZVNlbGVjdG9yLnR5cGUgPSBcImRhdGVcIjtcbmRhdGVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUR1ZVNlbGVjdG9yKTtcblxuLy8gZGV0YWlscyB0aW1lIGR1ZSBjb250YWluZXJcbmNvbnN0IHRpbWVEdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGltZUR1ZUNvbnRhaW5lci5pZCA9IFwidGltZS1kdWVcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGltZUR1ZUNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgdGltZSBkdWUgc2VsZWN0b3IgdGl0bGVcbmNvbnN0IHRpbWVEdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnRpbWVEdWVUaXRsZS50ZXh0Q29udGVudCA9IFwiVGltZSBEdWVcIjtcbnRpbWVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUR1ZVRpdGxlKTtcblxuLy8gZGV0YWlscyB0aW1lIGR1ZSBpbnB1dFxuY29uc3QgdGltZUR1ZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGltZUR1ZVNlbGVjdG9yLnR5cGUgPSBcInRpbWVcIjtcbnRpbWVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUR1ZVNlbGVjdG9yKTtcblxuLy8gdGFzayBwcmlvcml0eSBjb250YWluZXJcbmNvbnN0IHRhc2tQcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrUHJpb3JpdHlDb250YWluZXIuaWQgPSBcInRhc2stcHJpb3JpdHlcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5Q29udGFpbmVyKTtcblxuLy8gdGFzayBwcmlvcml0eSB0aXRsZVxuY29uc3QgdGFza1ByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50YXNrUHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFzayBQcmlvcml0eVwiO1xudGFza1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVRpdGxlKTtcblxuLy8gdGFzayBwcmlvcml0eSBzZWxlY3RvclxuY29uc3QgdGFza1ByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xudGFza1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVNlbGVjdG9yKTtcblxuLy8gbm9uZSBwcmlvcml0eSBvcHRpb25cbmNvbnN0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xubm9Qcmlvcml0eS50ZXh0ID0gXCJOb25lXCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcblxuLy8gbG93IHByaW9yaXR5IG9wdGlvblxuY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xubG93UHJpb3JpdHkudGV4dCA9IFwiTG93XCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbi8vIG1lZGl1bSBwcmlvcml0eSBvcHRpb25cbmNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbm1lZFByaW9yaXR5LnRleHQgPSBcIk1lZGl1bVwiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobWVkUHJpb3JpdHkpO1xuXG4vLyBoaWdoIHByaW9yaXR5IG9wdGlvblxuY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbmhpZ2hQcmlvcml0eS50ZXh0ID0gXCJIaWdoXCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4vLyBkZXRhaWxzIGRlc2NyaXB0aW9uIGNvbnRhaW5lclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5pZCA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25Db250YWluZXIpO1xuXG4vLyBkZXRhaWxzIGRlc2NyaXB0aW9uIHRpdGxlXG5jb25zdCB0YXNrRGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnRhc2tEZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xudGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvblRpdGxlKTtcblxuLy8gZGV0YWlscyBkZXNjcmlwdGlvbiB0ZXh0YXJlYVxuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xudGFza0Rlc2NyaXB0aW9uLmlkID0gXCJ0YXNrLWRlc2NyaXB0aW9uLXRleHRhcmVhXCI7XG50YXNrRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkVudGVyIGRlc2NyaXB0aW9uIG9mIHRhc2sgKE1heGltdW0gb2YgMjgwIGNoYXJhY3RlcnMpLlwiO1xudGFza0Rlc2NyaXB0aW9uLm1heExlbmd0aCA9IDI4MDtcbnRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4vLyBkZXRhaWxzIGJ1dHRvbnMgY29udGFpbmVyXG5jb25zdCBkZXRhaWxzQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNCdG5Db250YWluZXIuaWQgPSBcImRldGFpbHMtYnRuLWNvbnRhaW5lclwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzQnRuQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyBzYXZlIGJ0blxuY29uc3QgZGV0YWlsc1NhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlsc1NhdmVCdG4uaWQgPSBcInNhdmUtYnRuXCI7XG5kZXRhaWxzU2F2ZUJ0bi50aXRsZSA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG5kZXRhaWxzQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNTYXZlQnRuKTtcblxuLy8gZGV0YWlscyBjYW5jZWwgYnRuXG5jb25zdCBkZXRhaWxzQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNDYW5jZWxCdG4uaWQgPSBcImNhbmNlbC1idG5cIjtcbmRldGFpbHNDYW5jZWxCdG4udGl0bGUgPSBcIkNhbmNlbCBDaGFuZ2VzXCI7XG5kZXRhaWxzQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICBjYW5jZWxEZXRhaWxzKCk7XG59KVxuZGV0YWlsc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQ2FuY2VsQnRuKTtcblxuLy8gZGV0YWlscyBkZWxldGUgYnRuXG5jb25zdCBkZXRhaWxzRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNEZWxldGVCdG4uaWQgPSBcImRlbGV0ZS1idG5cIjtcbmRldGFpbHNEZWxldGVCdG4udGl0bGUgPSBcIkRlbGV0ZSBUYXNrXCI7XG5kZXRhaWxzQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNEZWxldGVCdG4pO1xudG9kb0JvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQ29udGFpbmVyKTtcblxuXG5cbi8vIGRvbSAjY29udGVudCBhcHBlbmRzXG5ib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XG5ib2R5LmFwcGVuZENoaWxkKGxlZnRTaWRlQmFyKTtcbmJvZHkuYXBwZW5kQ2hpbGQodG9kb0JvYXJkc0NvbnRhaW5lcik7XG5cbmV4cG9ydCB7IGJvZHkgfTtcbmV4cG9ydCB7IGN1cnJlbnRUYXNrTGlzdCB9OyIsIi8vIC0tLSBBUFAgRlVOQ1RJT05TIC0tLVxuaW1wb3J0IHsgcHJvamVjdHNBbmRUYXNrcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IGN1cnJlbnRUYXNrTGlzdCB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBkYXRlIGZ1bmN0aW9uc1xuLy8gY3JlYXRlIG5ld0RhdGUgYmFzZWQgb24gY3VycmVudCBkYXRlXG5mdW5jdGlvbiBjdXJyZW50RGF0ZSgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIHRpbWVTdHlsZTogXCJzaG9ydFwiLFxuICB9KTtcblxuICAvLyBmdW5jdGlvbiB0byBhZGQgdHdvIGRpZ2l0IHBhZGRpbmdcbiAgZnVuY3Rpb24gcGFkVG8yRGlnaXRzKG51bSkge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cblxuICBjb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgY3VycmVudE1vbnRoID0gcGFkVG8yRGlnaXRzKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICBjb25zdCBjdXJyZW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIGN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHllYXJNb250aERheSA9IGAke2N1cnJlbnRZZWFyfS0ke2N1cnJlbnRNb250aH0tJHtjdXJyZW50RGF5fWA7XG4gIHJldHVybiB7IHllYXJNb250aERheSwgdGltZSB9O1xufVxuXG4vLyBhdXRvbWF0aWNhbGx5IHJlc2l6ZXMgc2VsZWN0IG9wdGlvbnMgYW5kIGlucHV0IGVsZW1lbnRzXG5mdW5jdGlvbiByZXNpemVJbnB1dCgpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWlucHV0LWRldGFpbFwiKTsgLy8gR2V0IHRoZSBpbnB1dCBlbGVtZW50IHdpdGggdGhlIGlkIFwidGFzay1pbnB1dC1kZXRhaWxcIlxuICBsZXQgdGV4dFdpZHRoID0gZ2V0VGV4dFdpZHRoKGlucHV0LnZhbHVlLCBnZXRDb21wdXRlZFN0eWxlKGlucHV0KS5mb250KTsgLy8gR2V0IHRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgdmFsdWVcbiAgaW5wdXQuc3R5bGUud2lkdGggPSB0ZXh0V2lkdGggKyBcInB4XCI7IC8vIFNldCB0aGUgd2lkdGggb2YgdGhlIGlucHV0IGVsZW1lbnQgdG8gdGhlIGNhbGN1bGF0ZWQgdGV4dCB3aWR0aFxufVxuXG5mdW5jdGlvbiBnZXRUZXh0V2lkdGgodGV4dCwgZm9udCkge1xuICBsZXQgY2FudmFzID1cbiAgICBnZXRUZXh0V2lkdGguY2FudmFzIHx8XG4gICAgKGdldFRleHRXaWR0aC5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpKTtcbiAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb250ZXh0LmZvbnQgPSBmb250O1xuICBsZXQgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCk7XG4gIHJldHVybiBtZXRyaWNzLndpZHRoO1xufVxuXG4vLyBmaW5kIHByb2plY3QgaW5kZXhcbmZ1bmN0aW9uIHByb2plY3RJbmRleChwcm9qZWN0KSB7XG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3QpO1xuICByZXR1cm4gaW5kZXg7XG59XG5cbi8vIGNyZWF0ZXMgcHJvamVjdHMgaW4gZGF0YWJhc2VcbmZ1bmN0aW9uIHByb2plY3RDcmVhdG9yKCkge1xuICAvLyBwcm9tcHQgdXNlciBmb3IgcHJvamVjdCBuYW1lXG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvbXB0KFwiRW50ZXIgcHJvamVjdCBuYW1lOlwiKTtcbiAgLy8gdGFrZSBwcm9qZWN0IG5hbWUgYW5kIGNoZWNrIGlmIHByb2plY3QgbmFtZSBpcyBlbXB0eSBzdHJpbmcgb3IgYW4gZXhpc3RpbmcgcHJvamVjdFxuICAvLyAuc29tZSgpIGlzIHVzZWQgb24gYXJyYXkgdG8gc2VhcmNoIGlmIHByb2plY3ROYW1lIGFscmVhZHkgZXhpc3RzXG4gIGlmIChcbiAgICBwcm9qZWN0TmFtZSAhPSBudWxsICYmXG4gICAgIXByb2plY3RzQW5kVGFza3Muc29tZSgoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpXG4gICkge1xuICAgIC8vIG5vdyBjcmVhdGUgYSBuZXcgb2JqZWN0IGluIHRoZSBkYXRhYmFzZSB3aXRoIHRoZSBuZXcgcHJvamVjdCBuYW1lXG4gICAgcHJvamVjdHNBbmRUYXNrcy5wdXNoKHtcbiAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbiAgICAgIGN1cnJlbnRUYXNrczogW10sXG4gICAgICBjb21wbGV0ZWRUYXNrczogW10sXG4gICAgfSk7XG4gICAgLy8gc2F2ZSBuZXdseSBjcmVhdGVkIHByb2plY3QgdG8gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gcmVsb2FkIHRoZSBkb2N1bWVudFxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVuYW1lIHByb2plY3RzXG5mdW5jdGlvbiByZW5hbWVQcm9qZWN0KHByb2plY3QpIHtcbiAgLy8gZmluZCB0aGUgcHJvamVjdCBpbmRleCBpbiB0aGUgZGF0YWJhc2VcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0SW5kZXgocHJvamVjdCk7XG4gIC8vIGdyYWIgbGlzdCBpdGVtIHRoYXQgbWF0Y2hlcyBwcm9qZWN0IG5hbWVcbiAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdsaVtkYXRhLXByb2plY3QtbmFtZT1cIicgKyBwcm9qZWN0ICsgJ1wiXSdcbiAgKTtcbiAgLy8gc2V0IGxpc3QgaXRlbSdzIHRleHRDb250ZW50IGFzIGEgdmFyaWFibGVcbiAgY29uc3QgaXRlbVRleHQgPSBsaXN0SXRlbS50ZXh0Q29udGVudDtcbiAgLy8gY2xlYXIgbGlzdCBpdGVtJ3MgdGV4dENvbnRlbnRcbiAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAvLyBjcmVhdGUgaW5wdXQgZWxlbWVudCBmb3IgdXNlciB0byByZW5hbWUgcHJvamVjdFxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NOYW1lID0gXCJyZW5hbWUtcHJvamVjdFwiO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIC8vIHNldCBpbnB1dCdzIHN0YXJ0aW5nIHZhbHVlIHRvIHByb2plY3QgbmFtZVxuICBpbnB1dC52YWx1ZSA9IGl0ZW1UZXh0O1xuICAvLyBsaXN0ZW4gZm9yIGVudGVyIGtleSBwcmVzc1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlIGZvciBsaXN0IGl0ZW0ncyB0ZXh0Q29udGVudCBiYXNlZCBvbiB1c2VycyBpbnB1dFxuICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgIC8vIHVwZGF0ZSBkYXRhYmFzZSB0aHJvdWdoIHBhdGggdG8gbWF0Y2hlZCBwcm9qZWN0IG5hbWVcbiAgICAgIHByb2plY3RzQW5kVGFza3NbaW5kZXhdLnByb2plY3ROYW1lID0gbGlzdEl0ZW0udGV4dENvbnRlbnQ7XG4gICAgICAvLyB1cGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJwcm9qZWN0c0FuZFRhc2tzXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpXG4gICAgICApO1xuICAgICAgLy8gcmVsb2FkIHBhZ2VcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBpbnB1dC5mb2N1cygpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBkZWxldGUgcHJvamVjdHNcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAvLyBmaW5kIGluZGV4IG9mIHByb2plY3ROYW1lXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdEluZGV4KHByb2plY3QpO1xuICAvLyB0YXJnZXQgbG9jYXRpb24gb2YgcHJvamVjdFxuICBwcm9qZWN0c0FuZFRhc2tzW2luZGV4XS5wcm9qZWN0TmFtZTtcbiAgLy8gc3BsaWNlIHByb2plY3Qgb3V0IG9mIGRhdGFiYXNlIChjb25maXJtKVxuICBsZXQgZGVsZXRlQ29uZmlybWF0aW9uID0gcHJvbXB0KFxuICAgIGBBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlIHByb2plY3Q6ICR7cHJvamVjdHNBbmRUYXNrc1tpbmRleF0ucHJvamVjdE5hbWV9PyBUaGlzIHdpbGwgZGVsZXRlIGFsbCB0YXNrcyB3aXRoaW4gdGhpcyBwcm9qZWN0IGFzIHdlbGwhICh5L24pYFxuICApO1xuICBpZiAoZGVsZXRlQ29uZmlybWF0aW9uID09PSBcInlcIikge1xuICAgIHByb2plY3RzQW5kVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gICAgLy8gcmVsb2FkIHBhZ2VcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gdmFyaWFibGUgdG8gc2VsZWN0IHNwZWNpZmljIHByb2plY3Rcbi8vIG9uIGxvYWQgcnVuIHRoaXMgY29tbWFuZFxuXG5jb25zdCBhY3RpdmVQcm9qZWN0TG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiKTtcbmxldCBwcmV2UHJvamVjdCA9IG51bGw7XG5sZXQgYWN0aXZlUHJvamVjdCA9XG4gIGFjdGl2ZVByb2plY3RMb2NhbFN0b3JhZ2UgIT0gbnVsbCA/IGFjdGl2ZVByb2plY3RMb2NhbFN0b3JhZ2UgOiBcIk15IFRhc2tzXCI7XG5cbi8vIGZ1bmN0aW9uIHRvIHN3aXRjaCB3aGljaCBwcm9qZWN0IGlzIGFjdGl2ZVxuY29uc3QgcHJvamVjdENsaWNrZWQgPSAoZSkgPT4ge1xuICAvLyBjaGVjayB0byBzZWUgaWYgZWxlbWVudCBjbGlja2VkIGlzIGEgPGxpPiAobGlzdCBpdGVtKVxuICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiTElcIiAmJiBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYWRkZWQtcHJvamVjdHNcIikge1xuICAgIC8vIGFkZCAuYWN0aXZlLXByb2plY3QgY2xhc3MgdG8gZWxlbWVudCBjbGlja2VkXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgIGFjdGl2ZVByb2plY3QgPSBlLnRhcmdldDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVByb2plY3RcIiwgYWN0aXZlUHJvamVjdC50ZXh0Q29udGVudCk7XG4gICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGlzIGEgcHJldmlvdXMgcHJvamVjdCB0aGF0IHdhcyBhY3RpdmVcbiAgICBpZiAocHJldlByb2plY3QgIT09IG51bGwpIHtcbiAgICAgIC8vIHJlbW92ZXMgYWN0aXZlIGNsYXNzIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgIHByZXZQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICB9XG4gICAgLy8gc2V0IHByZXZQcm9qZWN0IGFzIHRoZSBjbGlja2VkIEhUTUxJRWxlbWVudFxuICAgIHByZXZQcm9qZWN0ID0gZS50YXJnZXQ7XG4gIH1cbn07XG5cbi8vIGRpc3BsYXlzIHByb2plY3RzIG9udG8gdGhlIERPTVxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKGFyciwgcGFyZW50Tm9kZSkge1xuICAvLyBsb29wIHRocm91Z2ggYXJyYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBjcmVhdGUgbGlzdCBpdGVtIGZvciBwcm9qZWN0XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAvLyBnaXZlIGl0IGNsYXNzIHVzZWQgZm9yIGFkZGVkIHByb2plY3RzXG4gICAgYWRkUHJvamVjdC5jbGFzc05hbWUgPSBcImFkZGVkLXByb2plY3RzXCI7XG4gICAgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIHByb2plY3QgbmFtZSBmb3VuZCBpbiB0aGlzIGl0ZXJhdGlvblxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBhcnJbaV0ucHJvamVjdE5hbWU7XG4gICAgLy8gY3JlYXRlIGEgZGF0YSBhdHRyaWJ1dGUgZm9yIGl0XG4gICAgYWRkUHJvamVjdC5kYXRhc2V0LnByb2plY3ROYW1lID0gYXJyW2ldLnByb2plY3ROYW1lO1xuICAgIC8vIGNyZWF0ZSBjb25kaXRpb25hbCB0byBjaGVjayBpZiBkZWZhdWx0IHRhc2sgaXMgbWF0Y2hlZFxuICAgIGlmIChhcnJbaV0ucHJvamVjdE5hbWUgPT09IGFjdGl2ZVByb2plY3QpIHtcbiAgICAgIC8vIHNldCBkZWZhdWx0IHByb2plY3QgdG8gYWN0aXZlXG4gICAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICAgIC8vIHNldCB2YXJpYWJsZSB0aGF0IG1vbml0b3JzIGFjdGl2ZSBwcm9qZWN0cyB0byBkZWZhdWx0IHByb2plY3RcbiAgICAgIHByZXZQcm9qZWN0ID0gYWRkUHJvamVjdDtcbiAgICB9XG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGluY2x1ZGUgdGFza3MgZm9yIHRoZSBwcm9qZWN0XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byBzdG9yZSBwcm9qZWN0IG5hbWUgY2xpY2tlZFxuICAgICAgbGV0IHByb2plY3QgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgIC8vIHVzZSBhYm92ZSB2YXJpYWJsZSBhcyBhcmcgZm9yIGRpc3BsYXlUYXNrcygpXG4gICAgICBkaXNwbGF5VGFza3MocHJvamVjdCwgcHJvamVjdHNBbmRUYXNrcywgY3VycmVudFRhc2tMaXN0KTtcbiAgICB9KTtcbiAgICAvLyBwcm9qZWN0IGFjdGlvbiBidXR0b24gY29udGFpbmVyXG4gICAgY29uc3QgcHJvamVjdEFjdGlvbkJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFjdGlvbkJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInByb2plY3QtYWN0aW9uLWJ0bi1jb250YWluZXJcIjtcblxuICAgIC8vIHByb2plY3QgcmVuYW1lIGJ1dHRvblxuICAgIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RWRpdEJ0bi50aXRsZSA9IFwiUmVuYW1lIFByb2plY3RcIjtcbiAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtZWRpdC1idG5cIjtcbiAgICBwcm9qZWN0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICByZW5hbWVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy8gcHJvamVjdCBkZWxldGlvbiBidXR0b25cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLnRpdGxlID0gXCJEZWxldGUgUHJvamVjdFwiO1xuICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWRlbGV0ZS1idG5cIjtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBlbmQgcHJvamVjdCBhY3Rpb24gYnV0dG9uc1xuICAgIHByb2plY3RBY3Rpb25CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRCdG4pO1xuICAgIHByb2plY3RBY3Rpb25CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0QWN0aW9uQnRuQ29udGFpbmVyKTtcblxuICAgIC8vIG1vdXNlIGluIGFuZCBvdXQgZXZlbnQgbGlzdGVuZXJzIGZvciBob3ZlciBjb2xvciBjaGFuZ2Ugc3RhdHVzXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvai1lZGl0LWhvdmVyZWRcIik7XG4gICAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qLWRlbC1ob3ZlcmVkXCIpO1xuICAgIH0pO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdEVkaXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcInByb2otZWRpdC1ob3ZlcmVkXCIpO1xuICAgICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJvai1kZWwtaG92ZXJlZFwiKTtcbiAgICB9KTtcbiAgICAvLyBhcHBlbmQgbmV3bHkgYWRkZWQgcHJvamVjdCB0byBzcGVjaWZpZWQgbm9kZVxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gIH1cbn1cblxuLy8gY3JlYXRlcyB0YXNrc1xuZnVuY3Rpb24gdGFza0NyZWF0b3IodGFzaykge1xuICAvLyBmaW5kIGluZGV4IG9mIHByb2plY3QgZm91bmQgaW4gZGF0YWJhc2VcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoXG4gICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByZXZQcm9qZWN0LnRleHRDb250ZW50XG4gICk7XG4gIGlmICh0YXNrLmxlbmd0aCA+IDApIHtcbiAgICAvLyBjcmVhdGUgbmV3VGFzayBvYmplY3QgdG8gbGF0ZXIgcHVzaCB0byBwcm9qZWN0c0FuZFRhc2tzIGFycmF5XG4gICAgbGV0IG5ld1Rhc2sgPSB7XG4gICAgICB0YXNrOiB0YXNrLFxuICAgICAgZGF0ZUNyZWF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgICBkYXRlRHVlOiBjdXJyZW50RGF0ZSgpLnllYXJNb250aERheSxcbiAgICAgIHRpbWVEdWU6IGN1cnJlbnREYXRlKCkudGltZSxcbiAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgIGRlc2M6IFwiXCIsXG4gICAgfTtcbiAgICAvLyBwdXNoIG5ld2x5IGNyZWF0ZWQgdGFzayB0byBjb3JyZWN0IGluZGV4IG9mIHByb2plY3RzQW5kVGFza3MgaW4gdGhlIGN1cnJlbnRUYXNrcyBwcm9wZXJ0eVxuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAvLyByZWxvYWQgdGhlIGRvY3VtZW50XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gc2F2ZSB0byBsb2NhbFN0b3JhZ2UgdG8ga2VlcCBkYXRhIGFmdGVyIHBhZ2UgcmVsb2Fkc1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwicHJvamVjdHNBbmRUYXNrc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcylcbiAgICApO1xuICB9XG59XG5cbi8vIHZhcmlhYmxlIHRvIHNlbGVjdCBzcGVjaWZpYyBwcm9qZWN0XG5sZXQgcHJldlRhc2sgPSBudWxsOyAvLyBkZWNsYXJlIHByZXZUYXNrIGF0IGEgaGlnaGVyIHNjb3BlIGxldmVsXG5cbmNvbnN0IHRhc2tDbGlja2VkID0gKGUpID0+IHtcbiAgLy8gY2hlY2sgdG8gc2VlIGlmIHRhc2sgY2xpY2tlZCBoYXMgYWN0aXZlLXRhc2sgYXMgYSBjbGFzcyBuYW1lXG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrLWxpc3QtaXRlbSBhY3RpdmUtdGFza1wiKSB7XG4gICAgLy8gcmVsb2FkIHRoZSBwYWdlIHNvIG5ldyBhcHBsaWNhdGlvbnMgb2YgZWRpdERldGFpbHMoKSBjYW4gcnVuXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkxJXCIpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXRhc2tcIik7XG4gICAgaWYgKHByZXZUYXNrICE9PSBudWxsKSB7XG4gICAgICBwcmV2VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXRhc2tcIik7XG4gICAgfVxuICAgIHByZXZUYXNrID0gZS50YXJnZXQ7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uICE9IFwibGluZS10aHJvdWdoXCIpIHtcbiAgICBlZGl0RGV0YWlscyhlLnRhcmdldCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCBhcnIsIHBhcmVudE5vZGUpIHtcbiAgLy8gZmlyc3QgZmluZCB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBhcnJheVxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdFxuICApO1xuICAvLyBjcmVhdGUgZW1wdHkgYXJyYXkgZm9yIGN1cnJlbnQgdGFza3NcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICAvLyBleHRyYWN0cyB0YXNrcyBmcm9tICdjdXJyZW50VGFza3MnIHByb3BlcnR5IG9mIGFuIG9iamVjdCBpbiB0aGUgJ2FycicgYXJyYXkgYW5kIHB1c2hlcyBpbnRvIHRoZSB0YXNrcyBhcnJheVxuICBpZiAocHJvamVjdEluZGV4ICE9IC0xKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhhcnJbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChhcnJbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHB1c2ggbmV3IHRhc2sgaW50byBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgICAgIHRhc2tzLnB1c2goZS50YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QudmFsdWVzKGFycltwcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoYXJyW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHB1c2ggbmV3IHRhc2sgaW50byBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgICAgIHRhc2tzLnB1c2goZS50YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHJlc2V0IHRoZSBjb250ZW50cyBvZiB0aGUgcGFyZW50Tm9kZSBhcmd1bWVudFxuICBwYXJlbnROb2RlLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gZm9yIGxvb3AgdG8gY3JlYXRlIHRhc2tzLCBjaGVja2JveGVzIGFuZCBhZGQgY2xhc3Nlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2stbGlzdC1pdGVtLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgYWN0aW9uQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhY3Rpb25CdG5Db250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrLWFjdGlvbi1idG4tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSBcInRhc2stbGlzdC1pdGVtXCI7XG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSB0YXNrc1tpXTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbXBsZXRlQnRuLmNsYXNzTmFtZSA9IFwidGFzay1jb21wbGV0ZS1idG5cIjtcbiAgICBjb21wbGV0ZUJ0bi50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNvbXBsZXRlQnRuLnRpdGxlID0gXCJDb21wbGV0ZSBUYXNrXCI7XG4gICAgLy8gbG9vcCB0aHJvdWdoIGNvbXBsZXRlZCB0YXNrcyBhbmQgYWRkIHN0cmlrZXRocm91Z2ggYW5kIGNoZWNrZWQgYm94IHRvIHRhc2tzIHRoYXQgbWF0Y2ggY3VycmVudCB0YXNrIGl0ZXJhdGlvblxuICAgIGZvciAoXG4gICAgICBsZXQgaiA9IDA7XG4gICAgICBqIDwgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmNvbXBsZXRlZFRhc2tzLmxlbmd0aDtcbiAgICAgIGorK1xuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3Nbal0udGFzay5pbmNsdWRlcyh0YXNrc1tpXSlcbiAgICAgICkge1xuICAgICAgICBsaXN0SXRlbS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICAgIGNvbXBsZXRlQnRuLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBldmVudCBsaXN0ZW5lciBmb3IgY29tcGxldGlvbiBvZiB0YXNrXG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCB0YXNrID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgaWYgKGNvbXBsZXRlQnRuLmNoZWNrZWQpIHtcbiAgICAgICAgLy8gbWFuaXB1bGF0ZSB0aGUgRE9NIGVsZW1lbnQgb2YgdGFzayB0byBpbmNsdWRlIHN0cmlrZXRocm91Z2ggb2YgdGV4dFxuICAgICAgICB0YXNrLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgICAgY29tcGxldGVUYXNrKHRhc2sudGV4dENvbnRlbnQsIHByb2plY3RJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJcIjtcbiAgICAgICAgdW5Db21wbGV0ZVRhc2sodGFzay50ZXh0Q29udGVudCwgcHJvamVjdEluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhY3Rpb25CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnRuQ29udGFpbmVyKTtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICB9XG59XG5cbi8vIGNvbXBsZXRlIHRhc2sgZnVuY3Rpb25cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrTmFtZSwgcHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnRhc2sgPT09IHRhc2tOYW1lXG4gICk7XG4gIC8vIGZpbmQgdGhlIGN1cnJlbnQgdGFzayBpbiB0aGUgZGF0YWJhc2VcbiAgY29uc3QgY29tcGxldGVkVGFzayA9IHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3NbdGFza0luZGV4XTtcbiAgLy8gbW92ZSB0aGUgY3VycmVudCB0YXNrIGludG8gdGhlIGNvbXBsZXRlZFRhc2tzIGFycmF5IG9mIGRhdGFiYXNlXG4gIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrcy5wdXNoKGNvbXBsZXRlZFRhc2spO1xuICAvLyByZW1vdmUgdGhlIHRhc2sgZnJvbSBjdXJyZW50IHRhc2tzXG4gIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Muc3BsaWNlKFxuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MuaW5kZXhPZihjb21wbGV0ZWRUYXNrKSxcbiAgICAxXG4gICk7XG4gIC8vIHVwZGF0ZSB0aGUgbG9jYWxTdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gIC8vIHJlbG9hZCB0aGUgcGFnZVxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuZnVuY3Rpb24gdW5Db21wbGV0ZVRhc2sodGFza05hbWUsIHByb2plY3RJbmRleCkge1xuICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnRhc2sgPT09IHRhc2tOYW1lXG4gICk7XG4gIC8vIG5lZWQgdG8gc2VsZWN0IHRoZSByZXNwZWN0aXZlIERPTSBlbGVtZW50Li4uXG4gIC8vIGZpbmQgdGhlIGNvbXBsZXRlZCB0YXNrIGluIHRoZSBkYXRhYmFzZVxuICBjb25zdCB1bkNvbXBsZXRlZFRhc2sgPVxuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrc1t0YXNrSW5kZXhdO1xuICAvLyBtb3ZlIHRoZSBjb21wbGV0ZWQgdGFzayBpbnRvIHRoZSBjdXJyZW50VGFza3MgYXJyYXkgb2YgZGF0YWJhc2VcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5wdXNoKHVuQ29tcGxldGVkVGFzayk7XG4gIC8vIHJlbW92ZSB0aGUgdGFzayBmcm9tIGNvbXBsZXRlZCB0YXNrc1xuICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY29tcGxldGVkVGFza3Muc3BsaWNlKFxuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jb21wbGV0ZWRUYXNrcy5pbmRleE9mKHVuQ29tcGxldGVkVGFzayksXG4gICAgMVxuICApO1xuICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICAvLyByZWxvYWQgdGhlIHBhZ2VcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIGVkaXREZXRhaWxzKHN0cikge1xuICAvLyBHZXQgdGhlIGRldGFpbHMgY29udGFpbmVyIGVsZW1lbnQgYW5kIHNldCBpdCB0byBmbGV4XG4gIGNvbnN0IHF1ZXJ5U2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHMtY29udGFpbmVyXCIpO1xuICBxdWVyeVNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gZ3JhYiB0YXNrIHdpdGggLmFjdGl2ZS10YXNrIGNsYXNzIG5hbWVcbiAgY29uc3Qgc2hvd09ySGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmUtdGFza1wiKTtcblxuICAvLyBJZiB0aGVyZSBpcyBhbiBhY3RpdmUgdGFzaywgc2hvdyB0aGUgZGV0YWlscyBwYW5lbFxuICBpZiAoc2hvd09ySGlkZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gc3RyLnRleHRDb250ZW50O1xuXG4gICAgLy8gZmluZCB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRhc2sgcHJvdmlkZWQgYXMgYW4gYXJndW1lbnQgKG5lZWQgdG8gaGF2ZSB0aGlzIHNlYXJjaCBjb21wbGV0ZWQgdGFza3MgYXMgd2VsbClcblxuICAgIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byBzZWFyY2ggZGF0YWJhc2UgZm9yIHRhc2tcbiAgICBsZXQgdGFza09iamVjdCA9IHByb2plY3RzQW5kVGFza3NcbiAgICAgIC5mbGF0TWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LmN1cnJlbnRUYXNrcykgLy8gZmxhdHRlbiB0aGUgbmVzdGVkIGFycmF5IG9mIHRhc2tzXG4gICAgICAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRhc2sgPT09IHRhc2tUaXRsZSk7IC8vIGZpbHRlciB0aGUgdGFza3MgYnkgdGFzayBuYW1lXG4gICAgaWYgKHRhc2tPYmplY3QgPT0gXCJcIikge1xuICAgICAgdGFza09iamVjdCA9IHByb2plY3RzQW5kVGFza3NcbiAgICAgICAgLmZsYXRNYXAoKHByb2plY3QpID0+IHByb2plY3QuY29tcGxldGVkVGFza3MpIC8vIGZsYXR0ZW4gdGhlIG5lc3RlZCBhcnJheSBvZiB0YXNrc1xuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRhc2sgPT09IHRhc2tUaXRsZSk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RXaXRoVGFzayA9IHByb2plY3RzQW5kVGFza3NcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgLy8gRm9yIGVhY2ggcHJvamVjdCwgd2UgYXJlIGdvaW5nIHRvIGZpbmQgYSB0YXNrIHRoYXQgbWF0Y2hlcyB0aGUgdGFza1RpdGxlXG4gICAgICAgIGNvbnN0IHRhc2sgPVxuICAgICAgICAgIHByb2plY3QuY3VycmVudFRhc2tzLmZpbmQoXG4gICAgICAgICAgICAodGFzaykgPT4gdGFzay50YXNrID09PSB0YXNrVGl0bGUgLy8gQ2hlY2sgaWYgdGhlIHRhc2sncyB0aXRsZSBtYXRjaGVzIHRoZSB0YXNrVGl0bGUgd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAgICAgICAgKSB8fCBwcm9qZWN0LmNvbXBsZXRlZFRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2sudGFzayA9PT0gdGFza1RpdGxlKTtcbiAgICAgICAgLy8gSWYgd2UgZm91bmQgYSBtYXRjaGluZyB0YXNrLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIHByb2plY3QgbmFtZSBhbmQgdGhlIHRhc2tcbiAgICAgICAgLy8gSWYgd2UgZGlkbid0IGZpbmQgYSBtYXRjaGluZyB0YXNrLCB3ZSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gdGFzayA/IHsgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdE5hbWUsIHRhc2sgfSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLy8gV2UgZmlsdGVyIG91dCBhbnkgbnVsbCB2YWx1ZXMgZnJvbSB0aGUgYXJyYXksIGtlZXBpbmcgb25seSB0aGUgcHJvamVjdHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgdGFza1xuICAgICAgLmZpbHRlcigocmVzdWx0KSA9PiByZXN1bHQgIT09IG51bGwpO1xuXG4gICAgLy8gTm93LCB3ZSBjaGVjayBpZiB3ZSBmb3VuZCBhbnkgcHJvamVjdHMgd2l0aCBhIG1hdGNoaW5nIHRhc2tcbiAgICAvLyBJZiB3ZSBkaWQsIHdlIHRha2UgdGhlIHByb2plY3QgbmFtZSBvZiB0aGUgZmlyc3QgcHJvamVjdCBpbiB0aGUgYXJyYXlcbiAgICAvLyBJZiB3ZSBkaWRuJ3QgZmluZCBhbnkgcHJvamVjdHMsIHdlIHNldCB0aGUgcHJvamVjdE5hbWUgdG8gbnVsbFxuICAgIGNvbnN0IHByb2plY3ROYW1lID1cbiAgICAgIHByb2plY3RXaXRoVGFzay5sZW5ndGggPiAwID8gcHJvamVjdFdpdGhUYXNrWzBdLnByb2plY3ROYW1lIDogbnVsbDtcblxuICAgIC8vcHJvamVjdFxuICAgIC8vIG5lZWQgdG8gZGlzcGxheSBhbGwgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0c09iamVjdCA9IHByb2plY3RzQW5kVGFza3MuZmxhdE1hcChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIC8vIEZpbmQgdGhlIEhUTUwgZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgdGhlIHNlbGVjdCBlbGVtZW50IGZvciBwcm9qZWN0IHNlbGVjdGlvblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwcm9qZWN0LXNlbGVjdG9yID4gc2VsZWN0XCJcbiAgICApO1xuXG4gICAgLy8gY2hlY2sgdG8gc2VlIGlmIHByb2plY3RTZWxlY3RvciBkb2VzIG5vdCBoYXZlIG9wdGlvbnMgYWxyZWFkeSBmaWxsZWQgaW5cbiAgICBpZiAocHJvamVjdFNlbGVjdG9yLmNsYXNzTmFtZSAhPSBcImZpbGxlZFwiKSB7XG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHByb2plY3RzT2JqZWN0IGxpc3QgdG8gY3JlYXRlIG9wdGlvbnMgZm9yIHRoZSBzZWxlY3QgZWxlbWVudFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c09iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgb3B0aW9uIGVsZW1lbnRcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICAvLyBTZXQgdGhlIHRleHQgb2YgdGhlIG9wdGlvbiB0byB0aGUgcHJvamVjdCBuYW1lIGF0IHRoZSBjdXJyZW50IGluZGV4XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdHNPYmplY3RbaV07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgb2YgdGhlIG9wdGlvbiBtYXRjaGVzIHRoZSBwcm9qZWN0TmFtZSB3ZSB3YW50IHRvIHNlbGVjdFxuICAgICAgICBpZiAob3B0aW9uLnRleHQgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBtYXRjaCwgc2V0IHRoZSBvcHRpb24gYXMgc2VsZWN0ZWRcbiAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJmaWxsZWRcIik7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgb3B0aW9uIHRvIHRoZSBwcm9qZWN0U2VsZWN0b3Igc2VsZWN0IGVsZW1lbnRcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gb3B0aW9ucyBmb3IgcHJpb3JpdHkgc2VsZWN0IGVsZW1lbnRcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHkgPiBzZWxlY3RcIik7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gcHJpb3JpdHlTZWxlY3Qub3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5T3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByaW9yaXR5T3B0aW9uc1tpXS50ZXh0Q29udGVudCA9PT0gdGFza09iamVjdFswXS5wcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0eU9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT0JKRUNUIERBVEFcblxuICAgIC8vIHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICAvLyB0YXNrXG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2staW5wdXQtZGV0YWlsXCIpO1xuICAgIHRhc2sudmFsdWUgPSB0YXNrT2JqZWN0WzBdLnRhc2s7XG4gICAgcmVzaXplSW5wdXQoKTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0/LmN1cnJlbnRUYXNrcz8uZmluZEluZGV4KFxuICAgICAgKGUpID0+IGUudGFzayA9PT0gdGFzay52YWx1ZVxuICAgICk7XG5cbiAgICAvLyBkYXRlQ3JlYXRlZFxuICAgIGxldCBkYXRlQ3JlYXRlZCA9IHRhc2tPYmplY3RbMF0uZGF0ZUNyZWF0ZWQ7XG5cbiAgICAvLyBkYXRlRHVlXG4gICAgbGV0IGRhdGVEdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtZHVlID4gaW5wdXRbdHlwZT1kYXRlXVwiKTtcbiAgICBkYXRlRHVlLnZhbHVlID0gdGFza09iamVjdFswXS5kYXRlRHVlO1xuXG4gICAgLy8gdGltZUR1ZVxuICAgIGxldCB0aW1lRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lLWR1ZSA+IGlucHV0W3R5cGU9dGltZV1cIik7XG4gICAgdGltZUR1ZS52YWx1ZSA9IHRhc2tPYmplY3RbMF0udGltZUR1ZTtcblxuICAgIC8vIHByaW9yaXR5XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5ID4gc2VsZWN0XCIpO1xuICAgIHByaW9yaXR5LnZhbHVlID0gdGFza09iamVjdFswXS5wcmlvcml0eTtcblxuICAgIC8vIGRlc2NcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvbi10ZXh0YXJlYVwiKTtcbiAgICBkZXNjLnZhbHVlID0gdGFza09iamVjdFswXS5kZXNjO1xuXG4gICAgLy8gc2F2ZSBidXR0b24gZXZlbnQgbGlzdGVuZXJcbiAgICBsZXQgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZS1idG5cIik7XG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgc2F2ZURldGFpbHMoXG4gICAgICAgIHByb2plY3RTZWxlY3Rvci52YWx1ZSxcbiAgICAgICAgdGFzay52YWx1ZSxcbiAgICAgICAgZGF0ZUNyZWF0ZWQsXG4gICAgICAgIGRhdGVEdWUudmFsdWUsXG4gICAgICAgIHRpbWVEdWUudmFsdWUsXG4gICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICBkZXNjLnZhbHVlLFxuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgdGFza0luZGV4XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gZGVsZXRlIGJ0biBldmVudCBsaXN0ZW5lclxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGVEZXRhaWxzKHByb2plY3RJbmRleCwgdGFza0luZGV4KTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChzaG93T3JIaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHF1ZXJ5U2VsZWN0ZWQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVEZXRhaWxzKFxuICBwcm9qZWN0LFxuICB0YXNrLFxuICBkYXRlQ3JlYXRlZCxcbiAgZGF0ZUR1ZSxcbiAgdGltZUR1ZSxcbiAgcHJpb3JpdHksXG4gIGRlc2MsXG4gIHByb2plY3ROYW1lLFxuICBvcmlnaW5hbFRhc2tJbmRleFxuKSB7XG4gIC8vIHNlY3Rpb24gZm9yIHRhc2tzIHRoYXQgaGF2ZSBub3QgaGFkIHRoZWlyIHByb2plY3QgY2hhbmdlZFxuICBpZiAocHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAvLyBmaW5kIHByb2plY3QgaW4gcHJvamVjdHNBbmRUYXNrIGFycmF5XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoXG4gICAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdFxuICAgICk7XG5cbiAgICAvLyB1cGRhdGUgdGhlICwgZGF0ZSBkdWUsIHRpbWUgZHVlLCBwcmlvcml0eSwgYW5kIGRlc2NyaXB0aW9uIGluIHRoZSBhcnJheVxuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLnRhc2sgPSB0YXNrO1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLmRhdGVEdWUgPVxuICAgICAgZGF0ZUR1ZTtcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS50aW1lRHVlID1cbiAgICAgIHRpbWVEdWU7XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1tvcmlnaW5hbFRhc2tJbmRleF0ucHJpb3JpdHkgPVxuICAgICAgcHJpb3JpdHk7XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1tvcmlnaW5hbFRhc2tJbmRleF0uZGVzYyA9IGRlc2M7XG5cbiAgICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgcHJvamVjdCBzZWxlY3RlZCBpcyBkaWZmZXJlbnQgdGhhbiB0YXNrJ3Mgb3JpZ2luYWwgcHJvamVjdC4uLlxuICAgIC8vIG1ha2Ugc3VyZSB0byBnZXQgb3JpZ2luYWwgcHJvamVjdCBuYW1lIGluZGV4IGZvciBsYXRlciBkZWxldGlvblxuICAgIGNvbnN0IG9sZFByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIC8vIGZpbmQgb3V0IHRoZSBpbmRleCBvZiB0aGUgcHJvamVjdE5hbWUgaW4gcHJvamVjdHNBbmRUYXNrcyB0aGF0IG1hdGNoZXMgYHByb2plY3RgICh0aGUgbmV3IHByb2plY3Qgc2VsZWN0ZWQncyBuYW1lKVxuICAgIGNvbnN0IG5ld1Byb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3RcbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIG5ld1Rhc2sgb2JqZWN0IHRvIGxhdGVyIHB1c2ggdG8gcHJvamVjdHNBbmRUYXNrcyBhcnJheVxuICAgIGxldCBuZXdUYXNrID0ge1xuICAgICAgdGFzazogdGFzayxcbiAgICAgIGRhdGVDcmVhdGVkOiBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZUR1ZTogZGF0ZUR1ZSxcbiAgICAgIHRpbWVEdWU6IHRpbWVEdWUsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICBkZXNjOiBkZXNjLFxuICAgIH07XG4gICAgLy8gcHVzaCBuZXdseSBjcmVhdGVkIHRhc2sgdG8gY29ycmVjdCBpbmRleCBvZiBwcm9qZWN0c0FuZFRhc2tzIGluIHRoZSBjdXJyZW50VGFza3MgcHJvcGVydHlcbiAgICBwcm9qZWN0c0FuZFRhc2tzW25ld1Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzLnB1c2gobmV3VGFzayk7XG5cbiAgICAvLyBkZWxldGUgdGhlIG9sZCBjdXJyZW50IHRhc2tcbiAgICBwcm9qZWN0c0FuZFRhc2tzW29sZFByb2plY3RJbmRleF0uY3VycmVudFRhc2tzLnNwbGljZShvcmlnaW5hbFRhc2tJbmRleCwgMSk7XG5cbiAgICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gIH1cblxuICAvLyByZWxvYWQgdGhlIHBhZ2VcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbERldGFpbHMoKSB7XG4gIGNvbnN0IHF1ZXJ5U2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHMtY29udGFpbmVyXCIpO1xuICBxdWVyeVNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRGV0YWlscyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkge1xuICBsZXQgdGFzayA9IHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XT8uY3VycmVudFRhc2tzW3Rhc2tJbmRleF0/LnRhc2s7XG4gIGxldCBkZWxldGVDb25maXJtYXRpb24gPSBwcm9tcHQoXG4gICAgYEFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUgdGFzazogJHt0YXNrfT8gKHkvbilgXG4gICk7XG4gIGlmIChkZWxldGVDb25maXJtYXRpb24gPT09IFwieVwiKSB7XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAvLyB1cGRhdGUgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBbmRUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKSk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIGV4cG9ydHNcbmV4cG9ydCB7IHByb2plY3RDcmVhdG9yIH07XG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfTtcbmV4cG9ydCB7IHByb2plY3RDbGlja2VkIH07XG5leHBvcnQgeyBhY3RpdmVQcm9qZWN0IH07XG5leHBvcnQgeyBwcmV2UHJvamVjdCB9O1xuZXhwb3J0IHsgZGlzcGxheVRhc2tzIH07XG5leHBvcnQgeyB0YXNrQ3JlYXRvciB9O1xuZXhwb3J0IHsgdGFza0NsaWNrZWQgfTtcbmV4cG9ydCB7IHNhdmVEZXRhaWxzIH07XG5leHBvcnQgeyBjYW5jZWxEZXRhaWxzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FuZFRhc2tzIH0gZnJvbSBcIi4vZGF0YS5qc1wiO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=