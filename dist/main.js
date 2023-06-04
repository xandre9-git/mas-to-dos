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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#task-input-detail {\n\n}\n\n#details-container {\n  /* grid-area: c; */\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,yCAAyC;AAC3C;;AAEA;EACE,qBAAqB;EACrB,2DAAqD;EACrD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;;AAGA;EACE,aAAa;EACb;;;iBAGe;AACjB;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;;AAEA;;AAEA;EACE,kBAAkB;EAClB,mCAAmC;EACnC,YAAY;EACZ,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;mCACiC;AACnC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["body {\n  margin: 0;\n  font-family: \"Oswald\", Courier, monospace;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(\"./fonts/Oswald-Regular.ttf\"), format(\"ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n}\n\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"a a a a a a \"\n    \"b c c c c c\"\n    \"b c c c c c\";\n}\n\n#top-bar {\n  grid-area: a;\n  background-color: rgb(139, 72, 189);\n  color: white;\n  height: 10vh;\n  line-height: 10vh;\n}\n\n#top-bar h1 {\n  padding-left: 1.5%;\n}\n\n#left-side-bar {\n  grid-area: b;\n  background-color: coral;\n  height: 90vh;\n}\n\n#to-dos-container {\n  grid-area: c;\n  background-color: rgb(0, 188, 240);\n  height: 90vh;\n  display: flex;\n  justify-content: space-between;\n}\n\n#current-tasks-container {\n  flex: 1;\n}\n\n#current-task-list-container {\n  background-color: #ffff88;\n  height: 75vh;\n  margin: 2%;\n}\n\n#add-taskbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1%;\n}\n\n#task-input-bar {\n  width: 90%;\n}\n\n#task-input-detail {\n\n}\n\n#details-container {\n  /* grid-area: c; */\n  background-color: rgb(20, 165, 173);\n  height: 90vh;\n  flex-direction: column;\n  flex: 1;\n}\n\n#details {\n  background-color: paleturquoise;\n  height: 75vh;\n  margin: 0 2% 2% 2%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#details > div {\n  flex-shrink: 1;\n}\n\n#details h3 {\n  margin: 0.5%;\n  color: hotpink;\n}\n\n#details input, select, textarea {\n  margin: 0.5%;\n}\n\n#time-due > input[type=time] {\n  width: 6.5rem;\n}\n\ntextarea {\n  width: 50%;\n  height: 100px;\n  resize: none;\n}\n\n#details-btn-container {\n  display: flex;\n  margin-left: 0.5%;\n}\n\n#save-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/save.svg\");\n}\n\n#cancel-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/cancel.svg\");\n}\n\n#delete-btn {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"./images/delete.svg\");\n  background-size: 100% 100%;\n}\n\n#add-project, .added-projects {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.added-projects:hover {\n  color: #ffdb58;\n}\n\n#add-project:hover {\n  color: blueviolet;\n}\n\n.active-pane-title {\n  color: white;\n  padding-left: 1.5%;\n  margin-top: 1%;\n  margin-bottom: 2.5%;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-projects {\n  cursor: pointer;\n}\n\n.filter-white {\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(125deg)\n    brightness(100%) contrast(102%);\n}\n\n.active-project {\n  color: #ffdb58;\n}\n\n.task-list-item-container {\n  margin-left: 3%;\n  margin-right: 3%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-list-item {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.task-list-item:hover {\n  color: dodgerblue;\n}\n\n.task-action-btn-container {\n  display: flex;\n}\n\n.active-task {\n  color: dodgerblue;\n}\n\n"],"sourceRoot":""}]);
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
const projectsAndTaskslocalStorage =  window.localStorage.getItem("projectsAndTasks");
const projectsAndTasks = (projectsAndTaskslocalStorage != null) ? JSON.parse(projectsAndTaskslocalStorage) : [
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

// details project selector default option
// const selectNone = document.createElement("option");
// selectNone.text = "My Tasks";
// selectProject.appendChild(selectNone);

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
taskDescription.id = "task-description";
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
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "prevProject": () => (/* binding */ prevProject),
/* harmony export */   "projectClicked": () => (/* binding */ projectClicked),
/* harmony export */   "projectCreator": () => (/* binding */ projectCreator),
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
function fieldResizer(text) {
  //
  const width = text.offSetWidth + 10;
  text.style.width = width + "px";
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
let prevTask = null;

const taskClicked = (e) => {
  // check to see if element clicked is a <li> (list item)
  if (e.target.nodeName === "LI") {
    editDetails(e.target);
    // add .active class to element clicked
    e.target.classList.add("active-task");
    // check to see if there is a previous project that was active

    if (prevTask !== null) {
      // removes active class from the element
      prevTask.classList.remove("active-task");
    }
    // set prevTask as the clicked HTMLIElement
    prevTask = e.target;
  }
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

  Object.values(arr[projectIndex].currentTasks).forEach(function (e) {
    // 
    console.log(`Fuck!`);
    if (arr[projectIndex].currentTasks != undefined) {
      // run this shit
      tasks.push(e.task);
    }
  });

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
    actionBtnContainer.appendChild(completeBtn);

    taskContainer.appendChild(actionBtnContainer);

    parentNode.appendChild(taskContainer);
  }
}

function editDetails(str) {
  // Get the details container element.
  const querySelected = document.getElementById("details-container");

  // If the details container is not visible, show it.
  if (querySelected.style.display === "none") {
    querySelected.style.display = "flex";
    const taskTitle = str.textContent;

    // // find the project the task belongs to
    // const nameOfProject = projectsAndTasks.filter((project) => project.projectName)

    // find the object containing the task provided as an argument
    const taskObject = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.flatMap((project) => project.currentTasks) // flatten the nested array of tasks
      .filter((task) => task.task === taskTitle); // filter the tasks by task name
    console.log(taskObject);

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

    // priority
    console.log(taskObject[0].priority);
    // desc
    console.log(taskObject[0].desc);

    // Find the HTML element that represents the select element for project selection
    const projectSelector = document.querySelector(
      "#project-selector > select"
    );

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

      // Append the option to the projectSelector select element
      projectSelector.appendChild(option);
    }

    // fill task input
    document.querySelector("#task-input-detail").value = taskObject[0].task;
    // fill dateDue
    document.querySelector("#date-due > input[type=date]").value =
      taskObject[0].dateDue;
    // fill timeDue
    document.querySelector("#time-due > input[type=time]").value =
      taskObject[0].timeDue;
    // fill priority
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
  } else {
    // If the details container is already visible, hide it.
    querySelected.style.display = "none";
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEVBQUUsdURBQVc7QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUFZLENBQUMscURBQWEsRUFBRSxtREFBZ0I7O0FBRTVDO0FBQ0EsMENBQTBDLG1EQUFXOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2dCO0FBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlUM0I7QUFDMEM7QUFDRjs7QUFF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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5VHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Pc3dhbGQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zYXZlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NhbmNlbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYSBhIGEgYSBhIGEgXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiXFxuICAgIFxcXCJiIGMgYyBjIGMgY1xcXCI7XFxufVxcblxcbiN0b3AtYmFyIHtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDcyLCAxODkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxufVxcblxcbiN0b3AtYmFyIGgxIHtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG59XFxuXFxuI2xlZnQtc2lkZS1iYXIge1xcbiAgZ3JpZC1hcmVhOiBiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiN0by1kb3MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODgsIDI0MCk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY3VycmVudC10YXNrcy1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2N1cnJlbnQtdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjg4O1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI2FkZC10YXNrYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jdGFzay1pbnB1dC1iYXIge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtZGV0YWlsIHtcXG5cXG59XFxuXFxuI2RldGFpbHMtY29udGFpbmVyIHtcXG4gIC8qIGdyaWQtYXJlYTogYzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTY1LCAxNzMpO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBtYXJnaW46IDAgMiUgMiUgMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jZGV0YWlscyA+IGRpdiB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuI2RldGFpbHMgaDMge1xcbiAgbWFyZ2luOiAwLjUlO1xcbiAgY29sb3I6IGhvdHBpbms7XFxufVxcblxcbiNkZXRhaWxzIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gIG1hcmdpbjogMC41JTtcXG59XFxuXFxuI3RpbWUtZHVlID4gaW5wdXRbdHlwZT10aW1lXSB7XFxuICB3aWR0aDogNi41cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2RldGFpbHMtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNSU7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuI2RlbGV0ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNhZGQtcHJvamVjdCwgLmFkZGVkLXByb2plY3RzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRlZC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogI2ZmZGI1ODtcXG59XFxuXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4uYWN0aXZlLXBhbmUtdGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tYm90dG9tOiAyLjUlO1xcbn1cXG5cXG4ucHJvamVjdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3RzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZpbHRlci13aGl0ZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTI1ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgY29sb3I6ICNmZmRiNTg7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLnRhc2stYWN0aW9uLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFjdGl2ZS10YXNrIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYjs7O2lCQUdlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTRDO0VBQzVDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL09zd2FsZC1SZWd1bGFyLnR0ZlxcXCIpLCBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImEgYSBhIGEgYSBhIFxcXCJcXG4gICAgXFxcImIgYyBjIGMgYyBjXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiO1xcbn1cXG5cXG4jdG9wLWJhciB7XFxuICBncmlkLWFyZWE6IGE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA3MiwgMTg5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jdG9wLWJhciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxufVxcblxcbiNsZWZ0LXNpZGUtYmFyIHtcXG4gIGdyaWQtYXJlYTogYjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4jdG8tZG9zLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTg4LCAyNDApO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdGFza3MtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNjdXJyZW50LXRhc2stbGlzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY4ODtcXG4gIGhlaWdodDogNzV2aDtcXG4gIG1hcmdpbjogMiU7XFxufVxcblxcbiNhZGQtdGFza2JhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtYmFyIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiN0YXNrLWlucHV0LWRldGFpbCB7XFxuXFxufVxcblxcbiNkZXRhaWxzLWNvbnRhaW5lciB7XFxuICAvKiBncmlkLWFyZWE6IGM7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDE2NSwgMTczKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jZGV0YWlscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAwIDIlIDIlIDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RldGFpbHMgPiBkaXYge1xcbiAgZmxleC1zaHJpbms6IDE7XFxufVxcblxcbiNkZXRhaWxzIGgzIHtcXG4gIG1hcmdpbjogMC41JTtcXG4gIGNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4jZGV0YWlscyBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICBtYXJnaW46IDAuNSU7XFxufVxcblxcbiN0aW1lLWR1ZSA+IGlucHV0W3R5cGU9dGltZV0ge1xcbiAgd2lkdGg6IDYuNXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNkZXRhaWxzLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjUlO1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3NhdmUuc3ZnXFxcIik7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9jYW5jZWwuc3ZnXFxcIik7XFxufVxcblxcbiNkZWxldGUtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9kZWxldGUuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LCAuYWRkZWQtcHJvamVjdHMge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZGVkLXByb2plY3RzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5hY3RpdmUtcGFuZS10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDIuNSU7XFxufVxcblxcbi5wcm9qZWN0LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdHMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZGI1ODtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG4udGFzay1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlLXRhc2sge1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gLS0tIEFQUCBEQVRBIC0tLVxuXG4vLyBQUk9KRUNUcyBBTkQgVEFTS1MgU1RPUkFHRVxuY29uc3QgcHJvamVjdHNBbmRUYXNrc2xvY2FsU3RvcmFnZSA9ICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIpO1xuY29uc3QgcHJvamVjdHNBbmRUYXNrcyA9IChwcm9qZWN0c0FuZFRhc2tzbG9jYWxTdG9yYWdlICE9IG51bGwpID8gSlNPTi5wYXJzZShwcm9qZWN0c0FuZFRhc2tzbG9jYWxTdG9yYWdlKSA6IFtcbiAgeyBwcm9qZWN0TmFtZTogXCJNeSBUYXNrc1wiLCBjdXJyZW50VGFza3M6IFtdLCBjb21wbGV0ZWRUYXNrczogW10gfSwgeyBwcm9qZWN0TmFtZTogXCJPZGluXCIsIGN1cnJlbnRUYXNrczogW10sIGNvbXBsZXRlZFRhc2tzOiBbXSB9XG5dO1xuXG5cblxuLy8gZXhwb3J0c1xuZXhwb3J0IHsgcHJvamVjdHNBbmRUYXNrcyB9O1xuIiwiLy8gLS0tIERPTSBFTEVNRU5UUyAtLS1cbmltcG9ydCB7IHByb2plY3RzQW5kVGFza3MgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBwcm9qZWN0Q3JlYXRvciB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBwcm9qZWN0Q2xpY2tlZCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0YXNrQ2xpY2tlZCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdGFza0NyZWF0b3IgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuLy8gbWFpbiBjb250YWluZXIgZm9yIHRoZSBhcHBcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIHRvcCBiYXJcbmNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b3BCYXIuaWQgPSBcInRvcC1iYXJcIjtcblxuLy8gdG9wIGJhciB0aXRsZVxuY29uc3QgdG9wQmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50b3BCYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTWFzIFRvIERvJ3NcIjtcbnRvcEJhclRpdGxlLmlkID0gXCJ0aXRsZS1iYXJcIjtcbnRvcEJhci5hcHBlbmRDaGlsZCh0b3BCYXJUaXRsZSk7XG5cbi8vIFBST0pFQ1RTXG5cbi8vIGxlZnQgc2lkZSBiYXJcbmNvbnN0IGxlZnRTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZnRTaWRlQmFyLmlkID0gXCJsZWZ0LXNpZGUtYmFyXCI7XG5cbi8vIHByb2plY3Qgc2VjdGlvbiAoZ29lcyBpbiBsZWZ0IHNpZGUgYmFyKVxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdHNDb250YWluZXIuaWQgPSBcInByb2plY3RzLWNvbnRhaW5lclwiO1xubGVmdFNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4vLyBwcm9qZWN0cyBsaXN0XG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5wcm9qZWN0c0xpc3QuaWQgPSBcInByb2plY3RzLXVsXCI7XG5wcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IHByb2plY3RzIG9uIHRoZSBkb21cbmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c0FuZFRhc2tzLCBwcm9qZWN0c0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWN0aXZlIHNlbGVjdGVkIHByb2plY3RcbnByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENsaWNrZWQpO1xuXG4vLyBhZGQgcHJvamVjdCBidXR0b25cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5hZGRQcm9qZWN0QnV0dG9uLmlkID0gXCJhZGQtcHJvamVjdFwiO1xuYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENyZWF0b3IpO1xucHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4vLyBwcm9qZWN0IGJ1dHRvbnMgY29udGFpbmVyXG5jb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0QnRucy5pZCA9IFwicHJvamVjdC1idG5zLWNvbnRhaW5lclwiO1xuXG4vLyBlZGl0IHByb2plY3QgbmFtZSBidXR0b25cbmNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmVkaXRQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC1idG5zIGZpbHRlci13aGl0ZVwiO1xuZWRpdFByb2plY3RCdG4uaWQgPSBcImVkaXQtYnRuXCI7XG5lZGl0UHJvamVjdEJ0bi50aXRsZSA9IFwiRWRpdFwiO1xuXG4vLyBkZWxldGUgcHJvamVjdCBidXR0b25cbmNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtYnRucyBmaWx0ZXItd2hpdGVcIjtcbmRlbGV0ZVByb2plY3RCdG4uaWQgPSBcImRlbC1idG5cIjtcbmRlbGV0ZVByb2plY3RCdG4udGl0bGUgPSBcIkRlbGV0ZVwiO1xuXG4vLyBwcm9qZWN0IGJ1dHRvbiBjb250YWluZXIgYXBwZW5kYWdlc1xucHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RCdG4pO1xucHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG5cbi8vIFRPIERPU1xuXG5cbi8vIHRvIGRvIGJvYXJkIGNvbnRhaW5lclxuY29uc3QgdG9kb0JvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b2RvQm9hcmRzQ29udGFpbmVyLmlkID0gXCJ0by1kb3MtY29udGFpbmVyXCI7XG50b2RvQm9hcmRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuLy8gY3VycmVudCB0YXNrcyBjb250YWluZXJcbmNvbnN0IGN1cnJlbnRUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jdXJyZW50VGFza3NDb250YWluZXIuaWQgPSBcImN1cnJlbnQtdGFza3MtY29udGFpbmVyXCI7XG5jdXJyZW50VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbnRvZG9Cb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tzQ29udGFpbmVyKTtcblxuLy8gY3VycmVudCB0YXNrcyB0aXRsZVxuY29uc3QgY3VycmVudFRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5jdXJyZW50VGFza3NUaXRsZS5jbGFzc05hbWUgPSBcImFjdGl2ZS1wYW5lLXRpdGxlXCI7XG5jdXJyZW50VGFza3NUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcbmN1cnJlbnRUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza3NUaXRsZSk7XG5cbi8vIGN1cnJlbnQgdGFza2xpc3RcbmNvbnN0IGN1cnJlbnRUYXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jdXJyZW50VGFza0xpc3RDb250YWluZXIuaWQgPSBcImN1cnJlbnQtdGFzay1saXN0LWNvbnRhaW5lclwiO1xuY3VycmVudFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUYXNrTGlzdENvbnRhaW5lcik7XG5cbi8vIGFkZCB0YXNrcyBjb250YWluZXJcbmNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkVGFza0NvbnRhaW5lci5pZCA9IFwiYWRkLXRhc2tiYXJcIjtcbmN1cnJlbnRUYXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcblxuLy8gYWRkIHRhc2tzIGlucHV0IGJhclxuY29uc3QgYWRkVGFza3NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmFkZFRhc2tzSW5wdXQuaWQgPSBcInRhc2staW5wdXQtYmFyXCI7XG5hZGRUYXNrc0lucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgYSB0YXNrXCI7XG5hZGRUYXNrc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZSkge1xuICAvL2lmIHVzZXIgcHJlc3NlcyBlbnRlciBvbiBrZXlib2FyZFxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIC8vIHJ1biB0YXNrQ3JlYXRvciBhbmQgdXNlIHZhbHVlIGVudGVyZWQgaW4gYWJvdmUgaW5wdXQgZWxlbWVudFxuICAgIHRhc2tDcmVhdG9yKGFkZFRhc2tzSW5wdXQudmFsdWUpO1xuICAgIC8vIGNsZWFyIGFkZFRhc2tzSW5wdXRcbiAgICBhZGRUYXNrc0lucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5hZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tzSW5wdXQpO1xuXG4vLyBhZGQgdGFza3Mgc3VibWl0IGJ1dHRvblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5hZGRUYXNrQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuLy8gbm90ZTogYWRkIHN0eWxpbmdcbmFkZFRhc2tCdG4uaWQgPSBcImFkZC10YXNrLWJ0blwiO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBnZXQgaW5wdXQgaWQgZm9yIHRhc2stYmFyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWlucHV0LWJhclwiKTtcbiAgLy8gcnVuIHRhc2tDcmVhdG9yIGFuZCB1c2UgdmFsdWUgZW50ZXJlZCBpbiBhYm92ZSBpbnB1dCBlbGVtZW50XG4gIHRhc2tDcmVhdG9yKGlucHV0LnZhbHVlKTtcbiAgLy8gY2xlYXIgaW5wdXRcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbi8vIGN1cnJlbnQgdGFza3MgdW5vcmRlcmVkIGxpc3RcbmNvbnN0IGN1cnJlbnRUYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBub3RlOiBhZGQgc3R5bGluZ1xuY3VycmVudFRhc2tMaXN0LmlkID0gXCJjdXJyZW50LXRhc2tzLXVsXCI7XG5jdXJyZW50VGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tMaXN0KTtcblxuLy8gY3VycmVudCB0YXNrcyBsaXN0IGl0ZW1cbmNvbnN0IGFkZFRhc2tMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbi8vIG5vdGU6IGFkZCBzdHlsaW5nXG5hZGRUYXNrTGlzdEl0ZW0uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1saVwiO1xuXG5kaXNwbGF5VGFza3MoYWN0aXZlUHJvamVjdCwgcHJvamVjdHNBbmRUYXNrcywgY3VycmVudFRhc2tMaXN0KTtcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGFjdGl2ZSBzZWxlY3RlZCB0YXNrXG5jdXJyZW50VGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDbGlja2VkKTtcblxuLy8gREVUQUlMU1xuXG4vLyBkZXRhaWxzIGJvYXJkIGNvbnRhaW5lclxuY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBub3RlOiBhZGQgc3R5bGluZ1xuZGV0YWlsc0NvbnRhaW5lci5pZCA9IFwiZGV0YWlscy1jb250YWluZXJcIjtcbmRldGFpbHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyBkZXRhaWxzIHRpdGxlXG5jb25zdCBkZXRhaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5kZXRhaWxzVGl0bGUuY2xhc3NOYW1lID0gXCJhY3RpdmUtcGFuZS10aXRsZVwiO1xuZGV0YWlsc1RpdGxlLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG5kZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNUaXRsZSk7XG5cbi8vIGRldGFpbHMgcGFuZVxuY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzLmlkID0gXCJkZXRhaWxzXCI7XG5kZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4vLyBkZXRhaWxzIHByb2plY3Qgc2VsZWN0b3IgY29udGFpbmVyXG5jb25zdCBwcm9qZWN0U2VsZWN0b3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdFNlbGVjdG9yQ29udGFpbmVyLmlkID0gXCJwcm9qZWN0LXNlbGVjdG9yXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3RvckNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgcHJvamVjdCBzZWxlY3RvciB0aXRsZVxuY29uc3Qgc2VsZWN0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuc2VsZWN0UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG5wcm9qZWN0U2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdFRpdGxlKTtcblxuLy8gZGV0YWlscyBwcm9qZWN0IHNlbGVjdG9yXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbnByb2plY3RTZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0KTtcblxuLy8gZGV0YWlscyBwcm9qZWN0IHNlbGVjdG9yIGRlZmF1bHQgb3B0aW9uXG4vLyBjb25zdCBzZWxlY3ROb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbi8vIHNlbGVjdE5vbmUudGV4dCA9IFwiTXkgVGFza3NcIjtcbi8vIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQoc2VsZWN0Tm9uZSk7XG5cbi8vIGRldGFpbHMgdGFzayBpbnB1dCBjb250YWluZXJcbmNvbnN0IHRhc2tJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrSW5wdXRDb250YWluZXIuaWQgPSBcImVkaXQtdGFzay1uYW1lXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tJbnB1dENvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgdGFzayB0aXRsZVxuY29uc3QgdGFza0lucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50YXNrSW5wdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza1wiO1xudGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dFRpdGxlKTtcblxuLy8gZGV0YWlscyB0YXNrIGlucHV0XG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrSW5wdXQuaWQgPSBcInRhc2staW5wdXQtZGV0YWlsXCI7XG50YXNrSW5wdXQudmFsdWUgPSBcIlBsYWNlaG9sZGVyXCI7XG50YXNrSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuLy8gZGV0YWlscyBkYXRlIGR1ZSBjb250YWluZXJcbmNvbnN0IGRhdGVEdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGF0ZUR1ZUNvbnRhaW5lci5pZCA9IFwiZGF0ZS1kdWVcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQoZGF0ZUR1ZUNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgZGF0ZSBkdWUgc2VsZWN0b3IgdGl0bGVcbmNvbnN0IGRhdGVEdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmRhdGVEdWVUaXRsZS50ZXh0Q29udGVudCA9IFwiRGF0ZSBEdWVcIjtcbmRhdGVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUR1ZVRpdGxlKTtcblxuLy8gZGV0YWlscyBkYXRlIGR1ZSBpbnB1dFxuY29uc3QgZGF0ZUR1ZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuZGF0ZUR1ZVNlbGVjdG9yLnR5cGUgPSBcImRhdGVcIjtcbmRhdGVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUR1ZVNlbGVjdG9yKTtcblxuLy8gZGV0YWlscyB0aW1lIGR1ZSBjb250YWluZXJcbmNvbnN0IHRpbWVEdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGltZUR1ZUNvbnRhaW5lci5pZCA9IFwidGltZS1kdWVcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGltZUR1ZUNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgdGltZSBkdWUgc2VsZWN0b3IgdGl0bGVcbmNvbnN0IHRpbWVEdWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnRpbWVEdWVUaXRsZS50ZXh0Q29udGVudCA9IFwiVGltZSBEdWVcIjtcbnRpbWVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUR1ZVRpdGxlKTtcblxuLy8gZGV0YWlscyB0aW1lIGR1ZSBpbnB1dFxuY29uc3QgdGltZUR1ZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGltZUR1ZVNlbGVjdG9yLnR5cGUgPSBcInRpbWVcIjtcbnRpbWVEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUR1ZVNlbGVjdG9yKTtcblxuLy8gdGFzayBwcmlvcml0eSBjb250YWluZXJcbmNvbnN0IHRhc2tQcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrUHJpb3JpdHlDb250YWluZXIuaWQgPSBcInRhc2stcHJpb3JpdHlcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5Q29udGFpbmVyKTtcblxuLy8gdGFzayBwcmlvcml0eSB0aXRsZVxuY29uc3QgdGFza1ByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50YXNrUHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFzayBQcmlvcml0eVwiO1xudGFza1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVRpdGxlKTtcblxuLy8gdGFzayBwcmlvcml0eSBzZWxlY3RvclxuY29uc3QgdGFza1ByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xudGFza1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVNlbGVjdG9yKTtcblxuLy8gbm9uZSBwcmlvcml0eSBvcHRpb25cbmNvbnN0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xubm9Qcmlvcml0eS50ZXh0ID0gXCJOb25lXCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChub1ByaW9yaXR5KTtcblxuLy8gbG93IHByaW9yaXR5IG9wdGlvblxuY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xubG93UHJpb3JpdHkudGV4dCA9IFwiTG93XCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbi8vIG1lZGl1bSBwcmlvcml0eSBvcHRpb25cbmNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbm1lZFByaW9yaXR5LnRleHQgPSBcIk1lZGl1bVwiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobWVkUHJpb3JpdHkpO1xuXG4vLyBoaWdoIHByaW9yaXR5IG9wdGlvblxuY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbmhpZ2hQcmlvcml0eS50ZXh0ID0gXCJIaWdoXCI7XG50YXNrUHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4vLyBkZXRhaWxzIGRlc2NyaXB0aW9uIGNvbnRhaW5lclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5pZCA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25Db250YWluZXIpO1xuXG4vLyBkZXRhaWxzIGRlc2NyaXB0aW9uIHRpdGxlXG5jb25zdCB0YXNrRGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbnRhc2tEZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xudGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvblRpdGxlKTtcblxuLy8gZGV0YWlscyBkZXNjcmlwdGlvbiB0ZXh0YXJlYVxuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xudGFza0Rlc2NyaXB0aW9uLmlkID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG50YXNrRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkVudGVyIGRlc2NyaXB0aW9uIG9mIHRhc2sgKE1heGltdW0gb2YgMjgwIGNoYXJhY3RlcnMpLlwiO1xudGFza0Rlc2NyaXB0aW9uLm1heExlbmd0aCA9IDI4MDtcbnRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4vLyBkZXRhaWxzIGJ1dHRvbnMgY29udGFpbmVyXG5jb25zdCBkZXRhaWxzQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNCdG5Db250YWluZXIuaWQgPSBcImRldGFpbHMtYnRuLWNvbnRhaW5lclwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzQnRuQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyBzYXZlIGJ0blxuY29uc3QgZGV0YWlsc1NhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlsc1NhdmVCdG4uaWQgPSBcInNhdmUtYnRuXCI7XG5kZXRhaWxzU2F2ZUJ0bi50aXRsZSA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG5kZXRhaWxzQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNTYXZlQnRuKTtcblxuLy8gZGV0YWlscyBjYW5jZWwgYnRuXG5jb25zdCBkZXRhaWxzQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNDYW5jZWxCdG4uaWQgPSBcImNhbmNlbC1idG5cIjtcbmRldGFpbHNDYW5jZWxCdG4udGl0bGUgPSBcIkNhbmNlbCBDaGFuZ2VzXCI7XG5kZXRhaWxzQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNDYW5jZWxCdG4pO1xuXG4vLyBkZXRhaWxzIGRlbGV0ZSBidG5cbmNvbnN0IGRldGFpbHNEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGV0YWlsc0RlbGV0ZUJ0bi5pZCA9IFwiZGVsZXRlLWJ0blwiO1xuZGV0YWlsc0RlbGV0ZUJ0bi50aXRsZSA9IFwiRGVsZXRlIFRhc2tcIjtcbmRldGFpbHNCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0RlbGV0ZUJ0bik7XG5cbnRvZG9Cb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRhaW5lcik7XG5cbi8vIGRvbSAjY29udGVudCBhcHBlbmRzXG5ib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XG5ib2R5LmFwcGVuZENoaWxkKGxlZnRTaWRlQmFyKTtcbmJvZHkuYXBwZW5kQ2hpbGQodG9kb0JvYXJkc0NvbnRhaW5lcik7XG5cblxuZXhwb3J0IHsgYm9keSB9O1xuZXhwb3J0IHsgY3VycmVudFRhc2tMaXN0IH07XG4iLCIvLyAtLS0gQVBQIEZVTkNUSU9OUyAtLS1cbmltcG9ydCB7IHByb2plY3RzQW5kVGFza3MgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBjdXJyZW50VGFza0xpc3QgfSBmcm9tIFwiLi9kb21cIjtcblxuLy8gZGF0ZSBmdW5jdGlvbnNcbi8vIGNyZWF0ZSBuZXdEYXRlIGJhc2VkIG9uIGN1cnJlbnQgZGF0ZVxuXG5mdW5jdGlvbiBjdXJyZW50RGF0ZSgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIHRpbWVTdHlsZTogXCJzaG9ydFwiLFxuICB9KTtcblxuICAvLyBmdW5jdGlvbiB0byBhZGQgdHdvIGRpZ2l0IHBhZGRpbmdcbiAgZnVuY3Rpb24gcGFkVG8yRGlnaXRzKG51bSkge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cblxuICBjb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgY3VycmVudE1vbnRoID0gcGFkVG8yRGlnaXRzKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICBjb25zdCBjdXJyZW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIGN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHllYXJNb250aERheSA9IGAke2N1cnJlbnRZZWFyfS0ke2N1cnJlbnRNb250aH0tJHtjdXJyZW50RGF5fWA7XG4gIHJldHVybiB7IHllYXJNb250aERheSwgdGltZSB9O1xufVxuXG4vLyBhdXRvbWF0aWNhbGx5IHJlc2l6ZXMgc2VsZWN0IG9wdGlvbnMgYW5kIGlucHV0IGVsZW1lbnRzXG5mdW5jdGlvbiBmaWVsZFJlc2l6ZXIodGV4dCkge1xuICAvL1xuICBjb25zdCB3aWR0aCA9IHRleHQub2ZmU2V0V2lkdGggKyAxMDtcbiAgdGV4dC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xufVxuXG4vLyBjcmVhdGVzIHByb2plY3RzIGluIGRhdGFiYXNlXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRvcigpIHtcbiAgLy8gcHJvbXB0IHVzZXIgZm9yIHByb2plY3QgbmFtZVxuICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdChcIkVudGVyIHByb2plY3QgbmFtZTpcIik7XG4gIC8vIHRha2UgcHJvamVjdCBuYW1lIGFuZCBjaGVjayBpZiBwcm9qZWN0IG5hbWUgaXMgZW1wdHkgc3RyaW5nIG9yIGFuIGV4aXN0aW5nIHByb2plY3RcbiAgLy8gLnNvbWUoKSBpcyB1c2VkIG9uIGFycmF5IHRvIHNlYXJjaCBpZiBwcm9qZWN0TmFtZSBhbHJlYWR5IGV4aXN0c1xuICBpZiAoXG4gICAgcHJvamVjdE5hbWUgIT0gbnVsbCAmJlxuICAgICFwcm9qZWN0c0FuZFRhc2tzLnNvbWUoKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhcIkNyaXRlcmlhIG1ldC5cIik7XG4gICAgLy8gbm93IGNyZWF0ZSBhIG5ldyBvYmplY3QgaW4gdGhlIGRhdGFiYXNlIHdpdGggdGhlIG5ldyBwcm9qZWN0IG5hbWVcbiAgICBwcm9qZWN0c0FuZFRhc2tzLnB1c2goe1xuICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lLFxuICAgICAgY3VycmVudFRhc2tzOiBbXSxcbiAgICAgIGNvbXBsZXRlZFRhc2tzOiBbXSxcbiAgICB9KTtcbiAgICAvLyBzYXZlIG5ld2x5IGNyZWF0ZWQgcHJvamVjdCB0byBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBbmRUYXNrcykpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JpdGVyaWEgbm90IG1ldC5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHJlbG9hZCB0aGUgZG9jdW1lbnRcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbi8vIHZhcmlhYmxlIHRvIHNlbGVjdCBzcGVjaWZpYyBwcm9qZWN0XG5jb25zdCBhY3RpdmVQcm9qZWN0TG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiKTtcbmxldCBwcmV2UHJvamVjdCA9IG51bGw7XG5sZXQgYWN0aXZlUHJvamVjdCA9XG4gIGFjdGl2ZVByb2plY3RMb2NhbFN0b3JhZ2UgIT0gbnVsbCA/IGFjdGl2ZVByb2plY3RMb2NhbFN0b3JhZ2UgOiBudWxsO1xuXG4vLyBmdW5jdGlvbiB0byBzd2l0Y2ggd2hpY2ggcHJvamVjdCBpcyBhY3RpdmVcbmNvbnN0IHByb2plY3RDbGlja2VkID0gKGUpID0+IHtcbiAgLy8gY2hlY2sgdG8gc2VlIGlmIGVsZW1lbnQgY2xpY2tlZCBpcyBhIDxsaT4gKGxpc3QgaXRlbSlcbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkxJXCIpIHtcbiAgICAvLyBhZGQgLmFjdGl2ZSBjbGFzcyB0byBlbGVtZW50IGNsaWNrZWRcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgYWN0aXZlUHJvamVjdCA9IGUudGFyZ2V0O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlUHJvamVjdFwiLCBhY3RpdmVQcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlcmUgaXMgYSBwcmV2aW91cyBwcm9qZWN0IHRoYXQgd2FzIGFjdGl2ZVxuICAgIGlmIChwcmV2UHJvamVjdCAhPT0gbnVsbCkge1xuICAgICAgLy8gcmVtb3ZlcyBhY3RpdmUgY2xhc3MgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgcHJldlByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgIH1cbiAgICAvLyBzZXQgcHJldlByb2plY3QgYXMgdGhlIGNsaWNrZWQgSFRNTElFbGVtZW50XG4gICAgcHJldlByb2plY3QgPSBlLnRhcmdldDtcbiAgfVxufTtcblxuLy8gZGlzcGxheXMgcHJvamVjdHMgb250byB0aGUgRE9NXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoYXJyLCBwYXJlbnROb2RlKSB7XG4gIC8vIGxvb3AgdGhyb3VnaCBhcnJheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIC8vIGNyZWF0ZSBsaXN0IGl0ZW0gZm9yIHByb2plY3RcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIC8vIGdpdmUgaXQgY2xhc3MgdXNlZCBmb3IgYWRkZWQgcHJvamVjdHNcbiAgICBhZGRQcm9qZWN0LmNsYXNzTmFtZSA9IFwiYWRkZWQtcHJvamVjdHNcIjtcbiAgICAvLyBzZXQgdGhlIHRleHQgY29udGVudCB0byB0aGUgcHJvamVjdCBuYW1lIGZvdW5kIGluIHRoaXMgaXRlcmF0aW9uXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IGFycltpXS5wcm9qZWN0TmFtZTtcbiAgICAvLyBjcmVhdGUgY29uZGl0aW9uYWwgdG8gY2hlY2sgaWYgZGVmYXVsdCB0YXNrIGlzIG1hdGNoZWRcbiAgICBpZiAoYXJyW2ldLnByb2plY3ROYW1lID09PSBhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAvLyBzZXQgZGVmYXVsdCBwcm9qZWN0IHRvIGFjdGl2ZVxuICAgICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgICAvLyBzZXQgdmFyaWFibGUgdGhhdCBtb25pdG9ycyBhY3RpdmUgcHJvamVjdHMgdG8gZGVmYXVsdCBwcm9qZWN0XG4gICAgICBwcmV2UHJvamVjdCA9IGFkZFByb2plY3Q7XG4gICAgfVxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBpbmNsdWRlIHRhc2tzIGZvciB0aGUgcHJvamVjdFxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gc3RvcmUgcHJvamVjdCBuYW1lIGNsaWNrZWRcbiAgICAgIGxldCBwcm9qZWN0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAvLyB1c2UgYWJvdmUgdmFyaWFibGUgYXMgYXJnIGZvciBkaXNwbGF5VGFza3MoKVxuICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QsIHByb2plY3RzQW5kVGFza3MsIGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgfSk7XG4gICAgLy8gYXBwZW5kIG5ld2x5IGFkZGVkIHByb2plY3QgdG8gc3BlY2lmaWVkIG5vZGVcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICB9XG59XG5cbi8vIGNyZWF0ZXMgdGFza3NcbmZ1bmN0aW9uIHRhc2tDcmVhdG9yKHRhc2spIHtcbiAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIHNlYXJjaCBkYXRhYmFzZSBhcnJheSBmb3IgcHJvamVjdCB0aGF0IGlzIGN1cnJlbnRseSBhY3RpdmVcbiAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHByb2plY3RzQW5kVGFza3Muc29tZShcbiAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJldlByb2plY3QudGV4dENvbnRlbnRcbiAgKTtcbiAgLy8gZmluZCBpbmRleCBvZiBwcm9qZWN0IGZvdW5kIGluIGRhdGFiYXNlXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcmV2UHJvamVjdC50ZXh0Q29udGVudFxuICApO1xuXG4gIC8vIGNyZWF0ZSBuZXdUYXNrIG9iamVjdCB0byBsYXRlciBwdXNoIHRvIHByb2plY3RzQW5kVGFza3MgYXJyYXlcbiAgbGV0IG5ld1Rhc2sgPSB7XG4gICAgLy8gaWQ6IG5ld0lkLFxuICAgIHRhc2s6IHRhc2ssXG4gICAgZGF0ZUNyZWF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgZGF0ZUR1ZTogY3VycmVudERhdGUoKS55ZWFyTW9udGhEYXksXG4gICAgdGltZUR1ZTogY3VycmVudERhdGUoKS50aW1lLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICBkZXNjOiBcIlwiLFxuICB9O1xuICAvLyBwdXNoIG5ld2x5IGNyZWF0ZWQgdGFzayB0byBjb3JyZWN0IGluZGV4IG9mIHByb2plY3RzQW5kVGFza3MgaW4gdGhlIGN1cnJlbnRUYXNrcyBwcm9wZXJ0eVxuICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzLnB1c2gobmV3VGFzayk7XG4gIC8vIHJlbG9hZCB0aGUgZG9jdW1lbnRcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIC8vIHNhdmUgdG8gbG9jYWxTdG9yYWdlIHRvIGtlZXAgZGF0YSBhZnRlciBwYWdlIHJlbG9hZHNcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIFwicHJvamVjdHNBbmRUYXNrc1wiLFxuICAgIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpXG4gICk7XG59XG5cbi8vIHZhcmlhYmxlIHRvIHNlbGVjdCBzcGVjaWZpYyBwcm9qZWN0XG5sZXQgcHJldlRhc2sgPSBudWxsO1xuXG5jb25zdCB0YXNrQ2xpY2tlZCA9IChlKSA9PiB7XG4gIC8vIGNoZWNrIHRvIHNlZSBpZiBlbGVtZW50IGNsaWNrZWQgaXMgYSA8bGk+IChsaXN0IGl0ZW0pXG4gIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJMSVwiKSB7XG4gICAgZWRpdERldGFpbHMoZS50YXJnZXQpO1xuICAgIC8vIGFkZCAuYWN0aXZlIGNsYXNzIHRvIGVsZW1lbnQgY2xpY2tlZFxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtdGFza1wiKTtcbiAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlcmUgaXMgYSBwcmV2aW91cyBwcm9qZWN0IHRoYXQgd2FzIGFjdGl2ZVxuXG4gICAgaWYgKHByZXZUYXNrICE9PSBudWxsKSB7XG4gICAgICAvLyByZW1vdmVzIGFjdGl2ZSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50XG4gICAgICBwcmV2VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXRhc2tcIik7XG4gICAgfVxuICAgIC8vIHNldCBwcmV2VGFzayBhcyB0aGUgY2xpY2tlZCBIVE1MSUVsZW1lbnRcbiAgICBwcmV2VGFzayA9IGUudGFyZ2V0O1xuICB9XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MocHJvamVjdCwgYXJyLCBwYXJlbnROb2RlKSB7XG4gIC8vIGZpcnN0IGZpbmQgdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgYXJyYXlcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoXG4gICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3RcbiAgKTtcbiAgLy8gY3JlYXRlIGVtcHR5IGFycmF5IGZvciBjdXJyZW50IHRhc2tzXG4gIGNvbnN0IHRhc2tzID0gW107XG4gIGNvbnNvbGUubG9nKGBwcm9qZWN0SW5kZXg6ICR7cHJvamVjdEluZGV4fWApO1xuXG4gIC8vIGV4dHJhY3RzIHRhc2tzIGZyb20gJ2N1cnJlbnRUYXNrcycgcHJvcGVydHkgb2YgYW4gb2JqZWN0IGluIHRoZSAnYXJyJyBhcnJheSBhbmQgcHVzaGVzIGludG8gdGhlIHRhc2tzIGFycmF5XG5cbiAgT2JqZWN0LnZhbHVlcyhhcnJbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBcbiAgICBjb25zb2xlLmxvZyhgRnVjayFgKTtcbiAgICBpZiAoYXJyW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzICE9IHVuZGVmaW5lZCkge1xuICAgICAgLy8gcnVuIHRoaXMgc2hpdFxuICAgICAgdGFza3MucHVzaChlLnRhc2spO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcmVzZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBwYXJlbnROb2RlIGFyZ3VtZW50XG4gIHBhcmVudE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBmb3IgbG9vcCB0byBjcmVhdGUgdGFza3MsIGNoZWNrYm94ZXMgYW5kIGFkZCBjbGFzc2VzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFzay1saXN0LWl0ZW0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBhY3Rpb25CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFjdGlvbkJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2stYWN0aW9uLWJ0bi1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9IFwidGFzay1saXN0LWl0ZW1cIjtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHRhc2tzW2ldO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29tcGxldGVCdG4uY2xhc3NOYW1lID0gXCJ0YXNrLWNvbXBsZXRlLWJ0blwiO1xuICAgIGNvbXBsZXRlQnRuLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY29tcGxldGVCdG4udGl0bGUgPSBcIkNvbXBsZXRlIFRhc2tcIjtcbiAgICBhY3Rpb25CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25CdG5Db250YWluZXIpO1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0RGV0YWlscyhzdHIpIHtcbiAgLy8gR2V0IHRoZSBkZXRhaWxzIGNvbnRhaW5lciBlbGVtZW50LlxuICBjb25zdCBxdWVyeVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWNvbnRhaW5lclwiKTtcblxuICAvLyBJZiB0aGUgZGV0YWlscyBjb250YWluZXIgaXMgbm90IHZpc2libGUsIHNob3cgaXQuXG4gIGlmIChxdWVyeVNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgcXVlcnlTZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgY29uc3QgdGFza1RpdGxlID0gc3RyLnRleHRDb250ZW50O1xuXG4gICAgLy8gLy8gZmluZCB0aGUgcHJvamVjdCB0aGUgdGFzayBiZWxvbmdzIHRvXG4gICAgLy8gY29uc3QgbmFtZU9mUHJvamVjdCA9IHByb2plY3RzQW5kVGFza3MuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lKVxuXG4gICAgLy8gZmluZCB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRhc2sgcHJvdmlkZWQgYXMgYW4gYXJndW1lbnRcbiAgICBjb25zdCB0YXNrT2JqZWN0ID0gcHJvamVjdHNBbmRUYXNrc1xuICAgICAgLmZsYXRNYXAoKHByb2plY3QpID0+IHByb2plY3QuY3VycmVudFRhc2tzKSAvLyBmbGF0dGVuIHRoZSBuZXN0ZWQgYXJyYXkgb2YgdGFza3NcbiAgICAgIC5maWx0ZXIoKHRhc2spID0+IHRhc2sudGFzayA9PT0gdGFza1RpdGxlKTsgLy8gZmlsdGVyIHRoZSB0YXNrcyBieSB0YXNrIG5hbWVcbiAgICBjb25zb2xlLmxvZyh0YXNrT2JqZWN0KTtcblxuICAgIGNvbnN0IHByb2plY3RXaXRoVGFzayA9IHByb2plY3RzQW5kVGFza3NcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgLy8gRm9yIGVhY2ggcHJvamVjdCwgd2UgYXJlIGdvaW5nIHRvIGZpbmQgYSB0YXNrIHRoYXQgbWF0Y2hlcyB0aGUgdGFza1RpdGxlXG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmN1cnJlbnRUYXNrcy5maW5kKFxuICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnRhc2sgPT09IHRhc2tUaXRsZSAvLyBDaGVjayBpZiB0aGUgdGFzaydzIHRpdGxlIG1hdGNoZXMgdGhlIHRhc2tUaXRsZSB3ZSBhcmUgbG9va2luZyBmb3JcbiAgICAgICAgKTtcbiAgICAgICAgLy8gSWYgd2UgZm91bmQgYSBtYXRjaGluZyB0YXNrLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIHByb2plY3QgbmFtZSBhbmQgdGhlIHRhc2tcbiAgICAgICAgLy8gSWYgd2UgZGlkbid0IGZpbmQgYSBtYXRjaGluZyB0YXNrLCB3ZSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gdGFzayA/IHsgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdE5hbWUsIHRhc2sgfSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLy8gV2UgZmlsdGVyIG91dCBhbnkgbnVsbCB2YWx1ZXMgZnJvbSB0aGUgYXJyYXksIGtlZXBpbmcgb25seSB0aGUgcHJvamVjdHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgdGFza1xuICAgICAgLmZpbHRlcigocmVzdWx0KSA9PiByZXN1bHQgIT09IG51bGwpO1xuXG4gICAgLy8gTm93LCB3ZSBjaGVjayBpZiB3ZSBmb3VuZCBhbnkgcHJvamVjdHMgd2l0aCBhIG1hdGNoaW5nIHRhc2tcbiAgICAvLyBJZiB3ZSBkaWQsIHdlIHRha2UgdGhlIHByb2plY3QgbmFtZSBvZiB0aGUgZmlyc3QgcHJvamVjdCBpbiB0aGUgYXJyYXlcbiAgICAvLyBJZiB3ZSBkaWRuJ3QgZmluZCBhbnkgcHJvamVjdHMsIHdlIHNldCB0aGUgcHJvamVjdE5hbWUgdG8gbnVsbFxuICAgIGNvbnN0IHByb2plY3ROYW1lID1cbiAgICAgIHByb2plY3RXaXRoVGFzay5sZW5ndGggPiAwID8gcHJvamVjdFdpdGhUYXNrWzBdLnByb2plY3ROYW1lIDogbnVsbDtcblxuICAgIC8vcHJvamVjdFxuICAgIC8vIG5lZWQgdG8gZGlzcGxheSBhbGwgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0c09iamVjdCA9IHByb2plY3RzQW5kVGFza3MuZmxhdE1hcChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIC8vIHByaW9yaXR5XG4gICAgY29uc29sZS5sb2codGFza09iamVjdFswXS5wcmlvcml0eSk7XG4gICAgLy8gZGVzY1xuICAgIGNvbnNvbGUubG9nKHRhc2tPYmplY3RbMF0uZGVzYyk7XG5cbiAgICAvLyBGaW5kIHRoZSBIVE1MIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIHRoZSBzZWxlY3QgZWxlbWVudCBmb3IgcHJvamVjdCBzZWxlY3Rpb25cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcHJvamVjdC1zZWxlY3RvciA+IHNlbGVjdFwiXG4gICAgKTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgcHJvamVjdHNPYmplY3QgbGlzdCB0byBjcmVhdGUgb3B0aW9ucyBmb3IgdGhlIHNlbGVjdCBlbGVtZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c09iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IG9wdGlvbiBlbGVtZW50XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAvLyBTZXQgdGhlIHRleHQgb2YgdGhlIG9wdGlvbiB0byB0aGUgcHJvamVjdCBuYW1lIGF0IHRoZSBjdXJyZW50IGluZGV4XG4gICAgICBvcHRpb24udGV4dCA9IHByb2plY3RzT2JqZWN0W2ldO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdGV4dCBvZiB0aGUgb3B0aW9uIG1hdGNoZXMgdGhlIHByb2plY3ROYW1lIHdlIHdhbnQgdG8gc2VsZWN0XG4gICAgICBpZiAob3B0aW9uLnRleHQgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgbWF0Y2gsIHNldCB0aGUgb3B0aW9uIGFzIHNlbGVjdGVkXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIHRoZSBvcHRpb24gdG8gdGhlIHByb2plY3RTZWxlY3RvciBzZWxlY3QgZWxlbWVudFxuICAgICAgcHJvamVjdFNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgLy8gZmlsbCB0YXNrIGlucHV0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWlucHV0LWRldGFpbFwiKS52YWx1ZSA9IHRhc2tPYmplY3RbMF0udGFzaztcbiAgICAvLyBmaWxsIGRhdGVEdWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtZHVlID4gaW5wdXRbdHlwZT1kYXRlXVwiKS52YWx1ZSA9XG4gICAgICB0YXNrT2JqZWN0WzBdLmRhdGVEdWU7XG4gICAgLy8gZmlsbCB0aW1lRHVlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lLWR1ZSA+IGlucHV0W3R5cGU9dGltZV1cIikudmFsdWUgPVxuICAgICAgdGFza09iamVjdFswXS50aW1lRHVlO1xuICAgIC8vIGZpbGwgcHJpb3JpdHlcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHkgPiBzZWxlY3RcIik7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gcHJpb3JpdHlTZWxlY3Qub3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5T3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBwcmlvcml0eU9wdGlvbnNbaV0udGV4dENvbnRlbnQ6ICR7cHJpb3JpdHlPcHRpb25zW2ldLnRleHRDb250ZW50fWBcbiAgICAgICk7XG4gICAgICBpZiAocHJpb3JpdHlPcHRpb25zW2ldLnRleHRDb250ZW50ID09PSB0YXNrT2JqZWN0WzBdLnByaW9yaXR5KSB7XG4gICAgICAgIHByaW9yaXR5T3B0aW9uc1tpXS5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdGhlIGRldGFpbHMgY29udGFpbmVyIGlzIGFscmVhZHkgdmlzaWJsZSwgaGlkZSBpdC5cbiAgICBxdWVyeVNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG4vLyBleHBvcnRzXG5leHBvcnQgeyBwcm9qZWN0Q3JlYXRvciB9O1xuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzIH07XG5leHBvcnQgeyBwcm9qZWN0Q2xpY2tlZCB9O1xuZXhwb3J0IHsgYWN0aXZlUHJvamVjdCB9O1xuZXhwb3J0IHsgcHJldlByb2plY3QgfTtcbmV4cG9ydCB7IGRpc3BsYXlUYXNrcyB9O1xuZXhwb3J0IHsgdGFza0NyZWF0b3IgfTtcbmV4cG9ydCB7IHRhc2tDbGlja2VkIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4vZG9tLmpzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=