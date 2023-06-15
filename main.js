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
let prevTask = null; // declare prevTask at a higher scope level

const taskClicked = (e) => {
  // explain this...
  // check to see if task clicked has active-task as a class name
  if (e.target.className == "task-list-item active-task") {
    // reload the page so new applications of editDetails() can run
    window.location.reload();
  }

  if (e.target.nodeName === "LI") {
    e.target.classList.add("active-task");
    if (prevTask !== null) {
      prevTask.classList.remove("active-task");
      // well, shit.
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
        // run this shit
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
    actionBtnContainer.appendChild(completeBtn);

    taskContainer.appendChild(actionBtnContainer);

    parentNode.appendChild(taskContainer);
  }
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

    // find the object containing the task provided as an argument
    const taskObject = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks.flatMap((project) => project.currentTasks) // flatten the nested array of tasks
      .filter((task) => task.task === taskTitle); // filter the tasks by task name

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
    const taskIndex = _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.findIndex(
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
    deleteBtn.addEventListener("click", function(){
      deleteDetails(projectIndex, taskIndex);
    })

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
  console.log(`First of all...`)
  let deleteConfirmation = prompt(`Are you sure you would like to delete task: ${_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[taskIndex].task}? (y/n)`)
  if (deleteConfirmation === "y"){
    console.log(`projectsAndTasks[projectIndex].currentTasks[taskIndex]: ${_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[taskIndex]}`);
    _data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks.splice(taskIndex, 1);
    console.log(`projectsAndTasks[projectIndex].currentTasks[taskIndex]: ${_data__WEBPACK_IMPORTED_MODULE_0__.projectsAndTasks[projectIndex].currentTasks[taskIndex]}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEVBQUUsdURBQVc7QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUFZLENBQUMscURBQWEsRUFBRSxtREFBZ0I7O0FBRTVDO0FBQ0EsMENBQTBDLG1EQUFXOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFhO0FBQ2YsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0I7QUFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzVDNCO0FB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QSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUMwQjtBQUNDO0FBQ0Q7QUFDRDtBQUNGO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqZHpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Pc3dhbGQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zYXZlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NhbmNlbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYSBhIGEgYSBhIGEgXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiXFxuICAgIFxcXCJiIGMgYyBjIGMgY1xcXCI7XFxufVxcblxcbiN0b3AtYmFyIHtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDcyLCAxODkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxufVxcblxcbiN0b3AtYmFyIGgxIHtcXG4gIHBhZGRpbmctbGVmdDogMS41JTtcXG59XFxuXFxuI2xlZnQtc2lkZS1iYXIge1xcbiAgZ3JpZC1hcmVhOiBiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiN0by1kb3MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODgsIDI0MCk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY3VycmVudC10YXNrcy1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2N1cnJlbnQtdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjg4O1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI2FkZC10YXNrYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jdGFzay1pbnB1dC1iYXIge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtZGV0YWlsIHtcXG5cXG59XFxuXFxuI2RldGFpbHMtY29udGFpbmVyIHtcXG4gIC8qIGdyaWQtYXJlYTogYzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTY1LCAxNzMpO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBtYXJnaW46IDAgMiUgMiUgMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jZGV0YWlscyA+IGRpdiB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuI2RldGFpbHMgaDMge1xcbiAgbWFyZ2luOiAwLjUlO1xcbiAgY29sb3I6IGhvdHBpbms7XFxufVxcblxcbiNkZXRhaWxzIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gIG1hcmdpbjogMC41JTtcXG59XFxuXFxuI3RpbWUtZHVlID4gaW5wdXRbdHlwZT10aW1lXSB7XFxuICB3aWR0aDogNi41cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2RldGFpbHMtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNSU7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuI2RlbGV0ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNhZGQtcHJvamVjdCwgLmFkZGVkLXByb2plY3RzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRlZC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogI2ZmZGI1ODtcXG59XFxuXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4uYWN0aXZlLXBhbmUtdGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tYm90dG9tOiAyLjUlO1xcbn1cXG5cXG4ucHJvamVjdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3RzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZpbHRlci13aGl0ZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTI1ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgY29sb3I6ICNmZmRiNTg7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLnRhc2stYWN0aW9uLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFjdGl2ZS10YXNrIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYjs7O2lCQUdlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTRDO0VBQzVDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL09zd2FsZC1SZWd1bGFyLnR0ZlxcXCIpLCBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImEgYSBhIGEgYSBhIFxcXCJcXG4gICAgXFxcImIgYyBjIGMgYyBjXFxcIlxcbiAgICBcXFwiYiBjIGMgYyBjIGNcXFwiO1xcbn1cXG5cXG4jdG9wLWJhciB7XFxuICBncmlkLWFyZWE6IGE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA3MiwgMTg5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jdG9wLWJhciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxufVxcblxcbiNsZWZ0LXNpZGUtYmFyIHtcXG4gIGdyaWQtYXJlYTogYjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4jdG8tZG9zLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTg4LCAyNDApO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdGFza3MtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNjdXJyZW50LXRhc2stbGlzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY4ODtcXG4gIGhlaWdodDogNzV2aDtcXG4gIG1hcmdpbjogMiU7XFxufVxcblxcbiNhZGQtdGFza2JhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI3Rhc2staW5wdXQtYmFyIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiN0YXNrLWlucHV0LWRldGFpbCB7XFxuXFxufVxcblxcbiNkZXRhaWxzLWNvbnRhaW5lciB7XFxuICAvKiBncmlkLWFyZWE6IGM7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDE2NSwgMTczKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jZGV0YWlscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgbWFyZ2luOiAwIDIlIDIlIDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RldGFpbHMgPiBkaXYge1xcbiAgZmxleC1zaHJpbms6IDE7XFxufVxcblxcbiNkZXRhaWxzIGgzIHtcXG4gIG1hcmdpbjogMC41JTtcXG4gIGNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4jZGV0YWlscyBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICBtYXJnaW46IDAuNSU7XFxufVxcblxcbiN0aW1lLWR1ZSA+IGlucHV0W3R5cGU9dGltZV0ge1xcbiAgd2lkdGg6IDYuNXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNkZXRhaWxzLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjUlO1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3NhdmUuc3ZnXFxcIik7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9jYW5jZWwuc3ZnXFxcIik7XFxufVxcblxcbiNkZWxldGUtYnRuIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9kZWxldGUuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LCAuYWRkZWQtcHJvamVjdHMge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZGVkLXByb2plY3RzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZkYjU4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5hY3RpdmUtcGFuZS10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDIuNSU7XFxufVxcblxcbi5wcm9qZWN0LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdHMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjVkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZGI1ODtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG4udGFzay1hY3Rpb24tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlLXRhc2sge1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gLS0tIEFQUCBEQVRBIC0tLVxuXG4vLyBQUk9KRUNUcyBBTkQgVEFTS1MgU1RPUkFHRVxuY29uc3QgbG9jYWxTdG9yYWdlID0gIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQW5kVGFza3NcIik7XG5jb25zdCBwcm9qZWN0c0FuZFRhc2tzID0gKGxvY2FsU3RvcmFnZSAhPSBudWxsKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlKSA6IFtcbiAgeyBwcm9qZWN0TmFtZTogXCJNeSBUYXNrc1wiLCBjdXJyZW50VGFza3M6IFtdLCBjb21wbGV0ZWRUYXNrczogW10gfSwgeyBwcm9qZWN0TmFtZTogXCJPZGluXCIsIGN1cnJlbnRUYXNrczogW10sIGNvbXBsZXRlZFRhc2tzOiBbXSB9XG5dO1xuXG4vLyBleHBvcnRzXG5leHBvcnQgeyBwcm9qZWN0c0FuZFRhc2tzIH07XG4iLCIvLyAtLS0gRE9NIEVMRU1FTlRTIC0tLVxuaW1wb3J0IHsgcHJvamVjdHNBbmRUYXNrcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IHByb2plY3RDcmVhdG9yIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHByb2plY3RDbGlja2VkIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHRhc2tDbGlja2VkIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0YXNrQ3JlYXRvciB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY2FuY2VsRGV0YWlscyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG4vLyBtYWluIGNvbnRhaW5lciBmb3IgdGhlIGFwcFxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8gdG9wIGJhclxuY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvcEJhci5pZCA9IFwidG9wLWJhclwiO1xuXG4vLyB0b3AgYmFyIHRpdGxlXG5jb25zdCB0b3BCYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRvcEJhclRpdGxlLnRleHRDb250ZW50ID0gXCJNYXMgVG8gRG8nc1wiO1xudG9wQmFyVGl0bGUuaWQgPSBcInRpdGxlLWJhclwiO1xudG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhclRpdGxlKTtcblxuLy8gUFJPSkVDVFNcblxuLy8gbGVmdCBzaWRlIGJhclxuY29uc3QgbGVmdFNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGVmdFNpZGVCYXIuaWQgPSBcImxlZnQtc2lkZS1iYXJcIjtcblxuLy8gcHJvamVjdCBzZWN0aW9uIChnb2VzIGluIGxlZnQgc2lkZSBiYXIpXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0c0NvbnRhaW5lci5pZCA9IFwicHJvamVjdHMtY29udGFpbmVyXCI7XG5sZWZ0U2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbi8vIHByb2plY3RzIGxpc3RcbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbnByb2plY3RzTGlzdC5pZCA9IFwicHJvamVjdHMtdWxcIjtcbnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgcHJvamVjdHMgb24gdGhlIGRvbVxuZGlzcGxheVByb2plY3RzKHByb2plY3RzQW5kVGFza3MsIHByb2plY3RzTGlzdCk7XG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBhY3RpdmUgc2VsZWN0ZWQgcHJvamVjdFxucHJvamVjdHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Q2xpY2tlZCk7XG5cbi8vIGFkZCBwcm9qZWN0IGJ1dHRvblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbmFkZFByb2plY3RCdXR0b24uaWQgPSBcImFkZC1wcm9qZWN0XCI7XG5hZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Q3JlYXRvcik7XG5wcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbi8vIHByb2plY3QgYnV0dG9ucyBjb250YWluZXJcbmNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3RCdG5zLmlkID0gXCJwcm9qZWN0LWJ0bnMtY29udGFpbmVyXCI7XG5cbi8vIGVkaXQgcHJvamVjdCBuYW1lIGJ1dHRvblxuY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZWRpdFByb2plY3RCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWJ0bnMgZmlsdGVyLXdoaXRlXCI7XG5lZGl0UHJvamVjdEJ0bi5pZCA9IFwiZWRpdC1idG5cIjtcbmVkaXRQcm9qZWN0QnRuLnRpdGxlID0gXCJFZGl0XCI7XG5cbi8vIGRlbGV0ZSBwcm9qZWN0IGJ1dHRvblxuY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZWxldGVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC1idG5zIGZpbHRlci13aGl0ZVwiO1xuZGVsZXRlUHJvamVjdEJ0bi5pZCA9IFwiZGVsLWJ0blwiO1xuZGVsZXRlUHJvamVjdEJ0bi50aXRsZSA9IFwiRGVsZXRlXCI7XG5cbi8vIHByb2plY3QgYnV0dG9uIGNvbnRhaW5lciBhcHBlbmRhZ2VzXG5wcm9qZWN0QnRucy5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG5wcm9qZWN0QnRucy5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcblxuLy8gVE8gRE9TXG5cblxuLy8gdG8gZG8gYm9hcmQgY29udGFpbmVyXG5jb25zdCB0b2RvQm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvZG9Cb2FyZHNDb250YWluZXIuaWQgPSBcInRvLWRvcy1jb250YWluZXJcIjtcbnRvZG9Cb2FyZHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4vLyBjdXJyZW50IHRhc2tzIGNvbnRhaW5lclxuY29uc3QgY3VycmVudFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmN1cnJlbnRUYXNrc0NvbnRhaW5lci5pZCA9IFwiY3VycmVudC10YXNrcy1jb250YWluZXJcIjtcbmN1cnJlbnRUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xudG9kb0JvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza3NDb250YWluZXIpO1xuXG4vLyBjdXJyZW50IHRhc2tzIHRpdGxlXG5jb25zdCBjdXJyZW50VGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmN1cnJlbnRUYXNrc1RpdGxlLmNsYXNzTmFtZSA9IFwiYWN0aXZlLXBhbmUtdGl0bGVcIjtcbmN1cnJlbnRUYXNrc1RpdGxlLnRleHRDb250ZW50ID0gXCJUYXNrc1wiO1xuY3VycmVudFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUYXNrc1RpdGxlKTtcblxuLy8gY3VycmVudCB0YXNrbGlzdFxuY29uc3QgY3VycmVudFRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmN1cnJlbnRUYXNrTGlzdENvbnRhaW5lci5pZCA9IFwiY3VycmVudC10YXNrLWxpc3QtY29udGFpbmVyXCI7XG5jdXJyZW50VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRhc2tMaXN0Q29udGFpbmVyKTtcblxuLy8gYWRkIHRhc2tzIGNvbnRhaW5lclxuY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hZGRUYXNrQ29udGFpbmVyLmlkID0gXCJhZGQtdGFza2JhclwiO1xuY3VycmVudFRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuXG4vLyBhZGQgdGFza3MgaW5wdXQgYmFyXG5jb25zdCBhZGRUYXNrc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuYWRkVGFza3NJbnB1dC5pZCA9IFwidGFzay1pbnB1dC1iYXJcIjtcbmFkZFRhc2tzSW5wdXQucGxhY2Vob2xkZXIgPSBcIkFkZCBhIHRhc2tcIjtcbmFkZFRhc2tzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vaWYgdXNlciBwcmVzc2VzIGVudGVyIG9uIGtleWJvYXJkXG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgLy8gcnVuIHRhc2tDcmVhdG9yIGFuZCB1c2UgdmFsdWUgZW50ZXJlZCBpbiBhYm92ZSBpbnB1dCBlbGVtZW50XG4gICAgdGFza0NyZWF0b3IoYWRkVGFza3NJbnB1dC52YWx1ZSk7XG4gICAgLy8gY2xlYXIgYWRkVGFza3NJbnB1dFxuICAgIGFkZFRhc2tzSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59KTtcbmFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza3NJbnB1dCk7XG5cbi8vIGFkZCB0YXNrcyBzdWJtaXQgYnV0dG9uXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbmFkZFRhc2tCdG4udHlwZSA9IFwic3VibWl0XCI7XG4vLyBub3RlOiBhZGQgc3R5bGluZ1xuYWRkVGFza0J0bi5pZCA9IFwiYWRkLXRhc2stYnRuXCI7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vIGdldCBpbnB1dCBpZCBmb3IgdGFzay1iYXJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2staW5wdXQtYmFyXCIpO1xuICAvLyBydW4gdGFza0NyZWF0b3IgYW5kIHVzZSB2YWx1ZSBlbnRlcmVkIGluIGFib3ZlIGlucHV0IGVsZW1lbnRcbiAgdGFza0NyZWF0b3IoaW5wdXQudmFsdWUpO1xuICAvLyBjbGVhciBpbnB1dFxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcblxuYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuLy8gY3VycmVudCB0YXNrcyB1bm9yZGVyZWQgbGlzdFxuY29uc3QgY3VycmVudFRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIG5vdGU6IGFkZCBzdHlsaW5nXG5jdXJyZW50VGFza0xpc3QuaWQgPSBcImN1cnJlbnQtdGFza3MtdWxcIjtcbmN1cnJlbnRUYXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza0xpc3QpO1xuXG4vLyBjdXJyZW50IHRhc2tzIGxpc3QgaXRlbVxuY29uc3QgYWRkVGFza0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuLy8gbm90ZTogYWRkIHN0eWxpbmdcbmFkZFRhc2tMaXN0SXRlbS5jbGFzc05hbWUgPSBcImFkZC10YXNrLWxpXCI7XG5cbmRpc3BsYXlUYXNrcyhhY3RpdmVQcm9qZWN0LCBwcm9qZWN0c0FuZFRhc2tzLCBjdXJyZW50VGFza0xpc3QpO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWN0aXZlIHNlbGVjdGVkIHRhc2tcbmN1cnJlbnRUYXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0NsaWNrZWQpO1xuXG4vLyBERVRBSUxTXG5cbi8vIGRldGFpbHMgYm9hcmQgY29udGFpbmVyXG5jb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIG5vdGU6IGFkZCBzdHlsaW5nXG5kZXRhaWxzQ29udGFpbmVyLmlkID0gXCJkZXRhaWxzLWNvbnRhaW5lclwiO1xuZGV0YWlsc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vIGRldGFpbHMgdGl0bGVcbmNvbnN0IGRldGFpbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmRldGFpbHNUaXRsZS5jbGFzc05hbWUgPSBcImFjdGl2ZS1wYW5lLXRpdGxlXCI7XG5kZXRhaWxzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbmRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc1RpdGxlKTtcblxuLy8gZGV0YWlscyBwYW5lXG5jb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHMuaWQgPSBcImRldGFpbHNcIjtcbmRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbi8vIGRldGFpbHMgcHJvamVjdCBzZWxlY3RvciBjb250YWluZXJcbmNvbnN0IHByb2plY3RTZWxlY3RvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0U2VsZWN0b3JDb250YWluZXIuaWQgPSBcInByb2plY3Qtc2VsZWN0b3JcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyBwcm9qZWN0IHNlbGVjdG9yIHRpdGxlXG5jb25zdCBzZWxlY3RQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5zZWxlY3RQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbnByb2plY3RTZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0VGl0bGUpO1xuXG4vLyBkZXRhaWxzIHByb2plY3Qgc2VsZWN0b3JcbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xucHJvamVjdFNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xuXG4vLyBkZXRhaWxzIHRhc2sgaW5wdXQgY29udGFpbmVyXG5jb25zdCB0YXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0lucHV0Q29udGFpbmVyLmlkID0gXCJlZGl0LXRhc2stbmFtZVwiO1xuZGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrSW5wdXRDb250YWluZXIpO1xuXG4vLyBkZXRhaWxzIHRhc2sgdGl0bGVcbmNvbnN0IHRhc2tJbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xudGFza0lucHV0VGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2tcIjtcbnRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5wdXRUaXRsZSk7XG5cbi8vIGRldGFpbHMgdGFzayBpbnB1dFxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGFza0lucHV0LmlkID0gXCJ0YXNrLWlucHV0LWRldGFpbFwiO1xudGFza0lucHV0LnZhbHVlID0gXCJQbGFjZWhvbGRlclwiO1xudGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cbi8vIGRldGFpbHMgZGF0ZSBkdWUgY29udGFpbmVyXG5jb25zdCBkYXRlRHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRhdGVEdWVDb250YWluZXIuaWQgPSBcImRhdGUtZHVlXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKGRhdGVEdWVDb250YWluZXIpO1xuXG4vLyBkZXRhaWxzIGRhdGUgZHVlIHNlbGVjdG9yIHRpdGxlXG5jb25zdCBkYXRlRHVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5kYXRlRHVlVGl0bGUudGV4dENvbnRlbnQgPSBcIkRhdGUgRHVlXCI7XG5kYXRlRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVEdWVUaXRsZSk7XG5cbi8vIGRldGFpbHMgZGF0ZSBkdWUgaW5wdXRcbmNvbnN0IGRhdGVEdWVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmRhdGVEdWVTZWxlY3Rvci50eXBlID0gXCJkYXRlXCI7XG5kYXRlRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVEdWVTZWxlY3Rvcik7XG5cbi8vIGRldGFpbHMgdGltZSBkdWUgY29udGFpbmVyXG5jb25zdCB0aW1lRHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRpbWVEdWVDb250YWluZXIuaWQgPSBcInRpbWUtZHVlXCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHRpbWVEdWVDb250YWluZXIpO1xuXG4vLyBkZXRhaWxzIHRpbWUgZHVlIHNlbGVjdG9yIHRpdGxlXG5jb25zdCB0aW1lRHVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50aW1lRHVlVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpbWUgRHVlXCI7XG50aW1lRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVEdWVUaXRsZSk7XG5cbi8vIGRldGFpbHMgdGltZSBkdWUgaW5wdXRcbmNvbnN0IHRpbWVEdWVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRpbWVEdWVTZWxlY3Rvci50eXBlID0gXCJ0aW1lXCI7XG50aW1lRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVEdWVTZWxlY3Rvcik7XG5cbi8vIHRhc2sgcHJpb3JpdHkgY29udGFpbmVyXG5jb25zdCB0YXNrUHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza1ByaW9yaXR5Q29udGFpbmVyLmlkID0gXCJ0YXNrLXByaW9yaXR5XCI7XG5kZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUNvbnRhaW5lcik7XG5cbi8vIHRhc2sgcHJpb3JpdHkgdGl0bGVcbmNvbnN0IHRhc2tQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xudGFza1ByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2sgUHJpb3JpdHlcIjtcbnRhc2tQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlUaXRsZSk7XG5cbi8vIHRhc2sgcHJpb3JpdHkgc2VsZWN0b3JcbmNvbnN0IHRhc2tQcmlvcml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbnRhc2tQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlTZWxlY3Rvcik7XG5cbi8vIG5vbmUgcHJpb3JpdHkgb3B0aW9uXG5jb25zdCBub1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbm5vUHJpb3JpdHkudGV4dCA9IFwiTm9uZVwiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobm9Qcmlvcml0eSk7XG5cbi8vIGxvdyBwcmlvcml0eSBvcHRpb25cbmNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbmxvd1ByaW9yaXR5LnRleHQgPSBcIkxvd1wiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4vLyBtZWRpdW0gcHJpb3JpdHkgb3B0aW9uXG5jb25zdCBtZWRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5tZWRQcmlvcml0eS50ZXh0ID0gXCJNZWRpdW1cIjtcbnRhc2tQcmlvcml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKG1lZFByaW9yaXR5KTtcblxuLy8gaGlnaCBwcmlvcml0eSBvcHRpb25cbmNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5oaWdoUHJpb3JpdHkudGV4dCA9IFwiSGlnaFwiO1xudGFza1ByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuLy8gZGV0YWlscyBkZXNjcmlwdGlvbiBjb250YWluZXJcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGVzY3JpcHRpb25Db250YWluZXIuaWQgPSBcInRhc2stZGVzY3JpcHRpb25cIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyKTtcblxuLy8gZGV0YWlscyBkZXNjcmlwdGlvbiB0aXRsZVxuY29uc3QgdGFza0Rlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG50YXNrRGVzY3JpcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbnRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25UaXRsZSk7XG5cbi8vIGRldGFpbHMgZGVzY3JpcHRpb24gdGV4dGFyZWFcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbnRhc2tEZXNjcmlwdGlvbi5pZCA9IFwidGFzay1kZXNjcmlwdGlvbi10ZXh0YXJlYVwiO1xudGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJFbnRlciBkZXNjcmlwdGlvbiBvZiB0YXNrIChNYXhpbXVtIG9mIDI4MCBjaGFyYWN0ZXJzKS5cIjtcbnRhc2tEZXNjcmlwdGlvbi5tYXhMZW5ndGggPSAyODA7XG50YXNrRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblxuLy8gZGV0YWlscyBidXR0b25zIGNvbnRhaW5lclxuY29uc3QgZGV0YWlsc0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzQnRuQ29udGFpbmVyLmlkID0gXCJkZXRhaWxzLWJ0bi1jb250YWluZXJcIjtcbmRldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc0J0bkNvbnRhaW5lcik7XG5cbi8vIGRldGFpbHMgc2F2ZSBidG5cbmNvbnN0IGRldGFpbHNTYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRldGFpbHNTYXZlQnRuLmlkID0gXCJzYXZlLWJ0blwiO1xuZGV0YWlsc1NhdmVCdG4udGl0bGUgPSBcIlNhdmUgQ2hhbmdlc1wiO1xuZGV0YWlsc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzU2F2ZUJ0bik7XG5cbi8vIGRldGFpbHMgY2FuY2VsIGJ0blxuY29uc3QgZGV0YWlsc0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzQ2FuY2VsQnRuLmlkID0gXCJjYW5jZWwtYnRuXCI7XG5kZXRhaWxzQ2FuY2VsQnRuLnRpdGxlID0gXCJDYW5jZWwgQ2hhbmdlc1wiO1xuZGV0YWlsc0NhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgY2FuY2VsRGV0YWlscygpO1xufSlcbmRldGFpbHNCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NhbmNlbEJ0bik7XG5cbi8vIGRldGFpbHMgZGVsZXRlIGJ0blxuY29uc3QgZGV0YWlsc0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXRhaWxzRGVsZXRlQnRuLmlkID0gXCJkZWxldGUtYnRuXCI7XG5kZXRhaWxzRGVsZXRlQnRuLnRpdGxlID0gXCJEZWxldGUgVGFza1wiO1xuZGV0YWlsc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzRGVsZXRlQnRuKTtcbnRvZG9Cb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRhaW5lcik7XG5cbi8vIGRvbSAjY29udGVudCBhcHBlbmRzXG5ib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XG5ib2R5LmFwcGVuZENoaWxkKGxlZnRTaWRlQmFyKTtcbmJvZHkuYXBwZW5kQ2hpbGQodG9kb0JvYXJkc0NvbnRhaW5lcik7XG5cbmV4cG9ydCB7IGJvZHkgfTtcbmV4cG9ydCB7IGN1cnJlbnRUYXNrTGlzdCB9O1xuIiwiLy8gLS0tIEFQUCBGVU5DVElPTlMgLS0tXG5pbXBvcnQgeyBwcm9qZWN0c0FuZFRhc2tzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgY3VycmVudFRhc2tMaXN0IH0gZnJvbSBcIi4vZG9tXCI7XG5cbi8vIGRhdGUgZnVuY3Rpb25zXG4vLyBjcmVhdGUgbmV3RGF0ZSBiYXNlZCBvbiBjdXJyZW50IGRhdGVcblxuZnVuY3Rpb24gY3VycmVudERhdGUoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgaG91cjEyOiBmYWxzZSxcbiAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgfSk7XG5cbiAgLy8gZnVuY3Rpb24gdG8gYWRkIHR3byBkaWdpdCBwYWRkaW5nXG4gIGZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGN1cnJlbnRNb250aCA9IHBhZFRvMkRpZ2l0cyhkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgY29uc3QgY3VycmVudERheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjdXJyZW50WWVhci50b1N0cmluZygpO1xuICBjb25zdCB5ZWFyTW9udGhEYXkgPSBgJHtjdXJyZW50WWVhcn0tJHtjdXJyZW50TW9udGh9LSR7Y3VycmVudERheX1gO1xuICByZXR1cm4geyB5ZWFyTW9udGhEYXksIHRpbWUgfTtcbn1cblxuLy8gYXV0b21hdGljYWxseSByZXNpemVzIHNlbGVjdCBvcHRpb25zIGFuZCBpbnB1dCBlbGVtZW50c1xuZnVuY3Rpb24gcmVzaXplSW5wdXQoKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1pbnB1dC1kZXRhaWxcIik7IC8vIEdldCB0aGUgaW5wdXQgZWxlbWVudCB3aXRoIHRoZSBpZCBcInRhc2staW5wdXQtZGV0YWlsXCJcbiAgbGV0IHRleHRXaWR0aCA9IGdldFRleHRXaWR0aChpbnB1dC52YWx1ZSwgZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dCkuZm9udCk7IC8vIEdldCB0aGUgd2lkdGggb2YgdGhlIGlucHV0IHZhbHVlXG4gIGlucHV0LnN0eWxlLndpZHRoID0gdGV4dFdpZHRoICsgXCJweFwiOyAvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBpbnB1dCBlbGVtZW50IHRvIHRoZSBjYWxjdWxhdGVkIHRleHQgd2lkdGhcbn1cblxuZnVuY3Rpb24gZ2V0VGV4dFdpZHRoKHRleHQsIGZvbnQpIHtcbiAgbGV0IGNhbnZhcyA9XG4gICAgZ2V0VGV4dFdpZHRoLmNhbnZhcyB8fFxuICAgIChnZXRUZXh0V2lkdGguY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSk7XG4gIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29udGV4dC5mb250ID0gZm9udDtcbiAgbGV0IG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpO1xuICByZXR1cm4gbWV0cmljcy53aWR0aDtcbn1cblxuLy8gY3JlYXRlcyBwcm9qZWN0cyBpbiBkYXRhYmFzZVxuZnVuY3Rpb24gcHJvamVjdENyZWF0b3IoKSB7XG4gIC8vIHByb21wdCB1c2VyIGZvciBwcm9qZWN0IG5hbWVcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoXCJFbnRlciBwcm9qZWN0IG5hbWU6XCIpO1xuICAvLyB0YWtlIHByb2plY3QgbmFtZSBhbmQgY2hlY2sgaWYgcHJvamVjdCBuYW1lIGlzIGVtcHR5IHN0cmluZyBvciBhbiBleGlzdGluZyBwcm9qZWN0XG4gIC8vIC5zb21lKCkgaXMgdXNlZCBvbiBhcnJheSB0byBzZWFyY2ggaWYgcHJvamVjdE5hbWUgYWxyZWFkeSBleGlzdHNcbiAgaWYgKFxuICAgIHByb2plY3ROYW1lICE9IG51bGwgJiZcbiAgICAhcHJvamVjdHNBbmRUYXNrcy5zb21lKChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSlcbiAgKSB7XG4gICAgY29uc29sZS5sb2coXCJDcml0ZXJpYSBtZXQuXCIpO1xuICAgIC8vIG5vdyBjcmVhdGUgYSBuZXcgb2JqZWN0IGluIHRoZSBkYXRhYmFzZSB3aXRoIHRoZSBuZXcgcHJvamVjdCBuYW1lXG4gICAgcHJvamVjdHNBbmRUYXNrcy5wdXNoKHtcbiAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbiAgICAgIGN1cnJlbnRUYXNrczogW10sXG4gICAgICBjb21wbGV0ZWRUYXNrczogW10sXG4gICAgfSk7XG4gICAgLy8gc2F2ZSBuZXdseSBjcmVhdGVkIHByb2plY3QgdG8gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIkNyaXRlcmlhIG5vdCBtZXQuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyByZWxvYWQgdGhlIGRvY3VtZW50XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG4vLyB2YXJpYWJsZSB0byBzZWxlY3Qgc3BlY2lmaWMgcHJvamVjdFxuY29uc3QgYWN0aXZlUHJvamVjdExvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2ZVByb2plY3RcIik7XG5sZXQgcHJldlByb2plY3QgPSBudWxsO1xubGV0IGFjdGl2ZVByb2plY3QgPVxuICBhY3RpdmVQcm9qZWN0TG9jYWxTdG9yYWdlICE9IG51bGwgPyBhY3RpdmVQcm9qZWN0TG9jYWxTdG9yYWdlIDogbnVsbDtcblxuLy8gZnVuY3Rpb24gdG8gc3dpdGNoIHdoaWNoIHByb2plY3QgaXMgYWN0aXZlXG5jb25zdCBwcm9qZWN0Q2xpY2tlZCA9IChlKSA9PiB7XG4gIC8vIGNoZWNrIHRvIHNlZSBpZiBlbGVtZW50IGNsaWNrZWQgaXMgYSA8bGk+IChsaXN0IGl0ZW0pXG4gIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJMSVwiKSB7XG4gICAgLy8gYWRkIC5hY3RpdmUgY2xhc3MgdG8gZWxlbWVudCBjbGlja2VkXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgIGFjdGl2ZVByb2plY3QgPSBlLnRhcmdldDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVByb2plY3RcIiwgYWN0aXZlUHJvamVjdC50ZXh0Q29udGVudCk7XG4gICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGlzIGEgcHJldmlvdXMgcHJvamVjdCB0aGF0IHdhcyBhY3RpdmVcbiAgICBpZiAocHJldlByb2plY3QgIT09IG51bGwpIHtcbiAgICAgIC8vIHJlbW92ZXMgYWN0aXZlIGNsYXNzIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgIHByZXZQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICB9XG4gICAgLy8gc2V0IHByZXZQcm9qZWN0IGFzIHRoZSBjbGlja2VkIEhUTUxJRWxlbWVudFxuICAgIHByZXZQcm9qZWN0ID0gZS50YXJnZXQ7XG4gIH1cbn07XG5cbi8vIGRpc3BsYXlzIHByb2plY3RzIG9udG8gdGhlIERPTVxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKGFyciwgcGFyZW50Tm9kZSkge1xuICAvLyBsb29wIHRocm91Z2ggYXJyYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBjcmVhdGUgbGlzdCBpdGVtIGZvciBwcm9qZWN0XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAvLyBnaXZlIGl0IGNsYXNzIHVzZWQgZm9yIGFkZGVkIHByb2plY3RzXG4gICAgYWRkUHJvamVjdC5jbGFzc05hbWUgPSBcImFkZGVkLXByb2plY3RzXCI7XG4gICAgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIHByb2plY3QgbmFtZSBmb3VuZCBpbiB0aGlzIGl0ZXJhdGlvblxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBhcnJbaV0ucHJvamVjdE5hbWU7XG4gICAgLy8gY3JlYXRlIGNvbmRpdGlvbmFsIHRvIGNoZWNrIGlmIGRlZmF1bHQgdGFzayBpcyBtYXRjaGVkXG4gICAgaWYgKGFycltpXS5wcm9qZWN0TmFtZSA9PT0gYWN0aXZlUHJvamVjdCkge1xuICAgICAgLy8gc2V0IGRlZmF1bHQgcHJvamVjdCB0byBhY3RpdmVcbiAgICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgICAgLy8gc2V0IHZhcmlhYmxlIHRoYXQgbW9uaXRvcnMgYWN0aXZlIHByb2plY3RzIHRvIGRlZmF1bHQgcHJvamVjdFxuICAgICAgcHJldlByb2plY3QgPSBhZGRQcm9qZWN0O1xuICAgIH1cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gaW5jbHVkZSB0YXNrcyBmb3IgdGhlIHByb2plY3RcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIHN0b3JlIHByb2plY3QgbmFtZSBjbGlja2VkXG4gICAgICBsZXQgcHJvamVjdCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgLy8gdXNlIGFib3ZlIHZhcmlhYmxlIGFzIGFyZyBmb3IgZGlzcGxheVRhc2tzKClcbiAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCBwcm9qZWN0c0FuZFRhc2tzLCBjdXJyZW50VGFza0xpc3QpO1xuICAgIH0pO1xuICAgIC8vIGFwcGVuZCBuZXdseSBhZGRlZCBwcm9qZWN0IHRvIHNwZWNpZmllZCBub2RlXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgfVxufVxuXG4vLyBjcmVhdGVzIHRhc2tzXG5mdW5jdGlvbiB0YXNrQ3JlYXRvcih0YXNrKSB7XG4gIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byBzZWFyY2ggZGF0YWJhc2UgYXJyYXkgZm9yIHByb2plY3QgdGhhdCBpcyBjdXJyZW50bHkgYWN0aXZlXG4gIGNvbnN0IHByb2plY3RFeGlzdHMgPSBwcm9qZWN0c0FuZFRhc2tzLnNvbWUoXG4gICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByZXZQcm9qZWN0LnRleHRDb250ZW50XG4gICk7XG4gIC8vIGZpbmQgaW5kZXggb2YgcHJvamVjdCBmb3VuZCBpbiBkYXRhYmFzZVxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJldlByb2plY3QudGV4dENvbnRlbnRcbiAgKTtcblxuICAvLyBjcmVhdGUgbmV3VGFzayBvYmplY3QgdG8gbGF0ZXIgcHVzaCB0byBwcm9qZWN0c0FuZFRhc2tzIGFycmF5XG4gIGxldCBuZXdUYXNrID0ge1xuICAgIC8vIGlkOiBuZXdJZCxcbiAgICB0YXNrOiB0YXNrLFxuICAgIGRhdGVDcmVhdGVkOiBuZXcgRGF0ZSgpLFxuICAgIGRhdGVEdWU6IGN1cnJlbnREYXRlKCkueWVhck1vbnRoRGF5LFxuICAgIHRpbWVEdWU6IGN1cnJlbnREYXRlKCkudGltZSxcbiAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgZGVzYzogXCJcIixcbiAgfTtcbiAgLy8gcHVzaCBuZXdseSBjcmVhdGVkIHRhc2sgdG8gY29ycmVjdCBpbmRleCBvZiBwcm9qZWN0c0FuZFRhc2tzIGluIHRoZSBjdXJyZW50VGFza3MgcHJvcGVydHlcbiAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAvLyByZWxvYWQgdGhlIGRvY3VtZW50XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAvLyBzYXZlIHRvIGxvY2FsU3RvcmFnZSB0byBrZWVwIGRhdGEgYWZ0ZXIgcGFnZSByZWxvYWRzXG4gIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBcInByb2plY3RzQW5kVGFza3NcIixcbiAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FuZFRhc2tzKVxuICApO1xufVxuXG4vLyB2YXJpYWJsZSB0byBzZWxlY3Qgc3BlY2lmaWMgcHJvamVjdFxubGV0IHByZXZUYXNrID0gbnVsbDsgLy8gZGVjbGFyZSBwcmV2VGFzayBhdCBhIGhpZ2hlciBzY29wZSBsZXZlbFxuXG5jb25zdCB0YXNrQ2xpY2tlZCA9IChlKSA9PiB7XG4gIC8vIGV4cGxhaW4gdGhpcy4uLlxuICAvLyBjaGVjayB0byBzZWUgaWYgdGFzayBjbGlja2VkIGhhcyBhY3RpdmUtdGFzayBhcyBhIGNsYXNzIG5hbWVcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2stbGlzdC1pdGVtIGFjdGl2ZS10YXNrXCIpIHtcbiAgICAvLyByZWxvYWQgdGhlIHBhZ2Ugc28gbmV3IGFwcGxpY2F0aW9ucyBvZiBlZGl0RGV0YWlscygpIGNhbiBydW5cbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiTElcIikge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtdGFza1wiKTtcbiAgICBpZiAocHJldlRhc2sgIT09IG51bGwpIHtcbiAgICAgIHByZXZUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtdGFza1wiKTtcbiAgICAgIC8vIHdlbGwsIHNoaXQuXG4gICAgfVxuICAgIHByZXZUYXNrID0gZS50YXJnZXQ7XG4gICAgY29uc29sZS5sb2cocHJldlRhc2sudGV4dENvbnRlbnQpO1xuICB9XG5cbiAgZWRpdERldGFpbHMoZS50YXJnZXQpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHByb2plY3QsIGFyciwgcGFyZW50Tm9kZSkge1xuICAvLyBmaXJzdCBmaW5kIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIGFycmF5XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0XG4gICk7XG4gIC8vIGNyZWF0ZSBlbXB0eSBhcnJheSBmb3IgY3VycmVudCB0YXNrc1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBjb25zb2xlLmxvZyhgcHJvamVjdEluZGV4OiAke3Byb2plY3RJbmRleH1gKTtcblxuICAvLyBleHRyYWN0cyB0YXNrcyBmcm9tICdjdXJyZW50VGFza3MnIHByb3BlcnR5IG9mIGFuIG9iamVjdCBpbiB0aGUgJ2FycicgYXJyYXkgYW5kIHB1c2hlcyBpbnRvIHRoZSB0YXNrcyBhcnJheVxuXG4gIGlmIChwcm9qZWN0SW5kZXggIT0gLTEpIHtcbiAgICBPYmplY3QudmFsdWVzKGFycltwcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGFycltwcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gcnVuIHRoaXMgc2hpdFxuICAgICAgICB0YXNrcy5wdXNoKGUudGFzayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyByZXNldCB0aGUgY29udGVudHMgb2YgdGhlIHBhcmVudE5vZGUgYXJndW1lbnRcbiAgcGFyZW50Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIC8vIGZvciBsb29wIHRvIGNyZWF0ZSB0YXNrcywgY2hlY2tib3hlcyBhbmQgYWRkIGNsYXNzZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrLWxpc3QtaXRlbS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGFjdGlvbkJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWN0aW9uQnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFzay1hY3Rpb24tYnRuLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gXCJ0YXNrLWxpc3QtaXRlbVwiO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gdGFza3NbaV07XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb21wbGV0ZUJ0bi5jbGFzc05hbWUgPSBcInRhc2stY29tcGxldGUtYnRuXCI7XG4gICAgY29tcGxldGVCdG4udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjb21wbGV0ZUJ0bi50aXRsZSA9IFwiQ29tcGxldGUgVGFza1wiO1xuICAgIGFjdGlvbkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bik7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbkJ0bkNvbnRhaW5lcik7XG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXREZXRhaWxzKHN0cikge1xuICAvLyBHZXQgdGhlIGRldGFpbHMgY29udGFpbmVyIGVsZW1lbnQgYW5kIHNldCBpdCB0byBmbGV4XG4gIGNvbnN0IHF1ZXJ5U2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHMtY29udGFpbmVyXCIpO1xuICBxdWVyeVNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gZ3JhYiB0YXNrIHdpdGggLmFjdGl2ZS10YXNrIGNsYXNzIG5hbWVcbiAgY29uc3Qgc2hvd09ySGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmUtdGFza1wiKTtcblxuICAvLyBJZiB0aGVyZSBpcyBhbiBhY3RpdmUgdGFzaywgc2hvdyB0aGUgZGV0YWlscyBwYW5lbFxuICBpZiAoc2hvd09ySGlkZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gc3RyLnRleHRDb250ZW50O1xuXG4gICAgLy8gZmluZCB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRhc2sgcHJvdmlkZWQgYXMgYW4gYXJndW1lbnRcbiAgICBjb25zdCB0YXNrT2JqZWN0ID0gcHJvamVjdHNBbmRUYXNrc1xuICAgICAgLmZsYXRNYXAoKHByb2plY3QpID0+IHByb2plY3QuY3VycmVudFRhc2tzKSAvLyBmbGF0dGVuIHRoZSBuZXN0ZWQgYXJyYXkgb2YgdGFza3NcbiAgICAgIC5maWx0ZXIoKHRhc2spID0+IHRhc2sudGFzayA9PT0gdGFza1RpdGxlKTsgLy8gZmlsdGVyIHRoZSB0YXNrcyBieSB0YXNrIG5hbWVcblxuICAgIGNvbnN0IHByb2plY3RXaXRoVGFzayA9IHByb2plY3RzQW5kVGFza3NcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgLy8gRm9yIGVhY2ggcHJvamVjdCwgd2UgYXJlIGdvaW5nIHRvIGZpbmQgYSB0YXNrIHRoYXQgbWF0Y2hlcyB0aGUgdGFza1RpdGxlXG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmN1cnJlbnRUYXNrcy5maW5kKFxuICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnRhc2sgPT09IHRhc2tUaXRsZSAvLyBDaGVjayBpZiB0aGUgdGFzaydzIHRpdGxlIG1hdGNoZXMgdGhlIHRhc2tUaXRsZSB3ZSBhcmUgbG9va2luZyBmb3JcbiAgICAgICAgKTtcbiAgICAgICAgLy8gSWYgd2UgZm91bmQgYSBtYXRjaGluZyB0YXNrLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIHByb2plY3QgbmFtZSBhbmQgdGhlIHRhc2tcbiAgICAgICAgLy8gSWYgd2UgZGlkbid0IGZpbmQgYSBtYXRjaGluZyB0YXNrLCB3ZSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gdGFzayA/IHsgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdE5hbWUsIHRhc2sgfSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLy8gV2UgZmlsdGVyIG91dCBhbnkgbnVsbCB2YWx1ZXMgZnJvbSB0aGUgYXJyYXksIGtlZXBpbmcgb25seSB0aGUgcHJvamVjdHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgdGFza1xuICAgICAgLmZpbHRlcigocmVzdWx0KSA9PiByZXN1bHQgIT09IG51bGwpO1xuXG4gICAgLy8gTm93LCB3ZSBjaGVjayBpZiB3ZSBmb3VuZCBhbnkgcHJvamVjdHMgd2l0aCBhIG1hdGNoaW5nIHRhc2tcbiAgICAvLyBJZiB3ZSBkaWQsIHdlIHRha2UgdGhlIHByb2plY3QgbmFtZSBvZiB0aGUgZmlyc3QgcHJvamVjdCBpbiB0aGUgYXJyYXlcbiAgICAvLyBJZiB3ZSBkaWRuJ3QgZmluZCBhbnkgcHJvamVjdHMsIHdlIHNldCB0aGUgcHJvamVjdE5hbWUgdG8gbnVsbFxuICAgIGNvbnN0IHByb2plY3ROYW1lID1cbiAgICAgIHByb2plY3RXaXRoVGFzay5sZW5ndGggPiAwID8gcHJvamVjdFdpdGhUYXNrWzBdLnByb2plY3ROYW1lIDogbnVsbDtcblxuICAgIC8vcHJvamVjdFxuICAgIC8vIG5lZWQgdG8gZGlzcGxheSBhbGwgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0c09iamVjdCA9IHByb2plY3RzQW5kVGFza3MuZmxhdE1hcChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIC8vIEZpbmQgdGhlIEhUTUwgZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgdGhlIHNlbGVjdCBlbGVtZW50IGZvciBwcm9qZWN0IHNlbGVjdGlvblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwcm9qZWN0LXNlbGVjdG9yID4gc2VsZWN0XCJcbiAgICApO1xuXG4gICAgLy8gY2hlY2sgdG8gc2VlIGlmIHByb2plY3RTZWxlY3RvciBkb2VzIG5vdCBoYXZlIG9wdGlvbnMgYWxyZWFkeSBmaWxsZWQgaW5cbiAgICBpZiAocHJvamVjdFNlbGVjdG9yLmNsYXNzTmFtZSAhPSBcImZpbGxlZFwiKSB7XG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHByb2plY3RzT2JqZWN0IGxpc3QgdG8gY3JlYXRlIG9wdGlvbnMgZm9yIHRoZSBzZWxlY3QgZWxlbWVudFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c09iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgb3B0aW9uIGVsZW1lbnRcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICAvLyBTZXQgdGhlIHRleHQgb2YgdGhlIG9wdGlvbiB0byB0aGUgcHJvamVjdCBuYW1lIGF0IHRoZSBjdXJyZW50IGluZGV4XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdHNPYmplY3RbaV07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgb2YgdGhlIG9wdGlvbiBtYXRjaGVzIHRoZSBwcm9qZWN0TmFtZSB3ZSB3YW50IHRvIHNlbGVjdFxuICAgICAgICBpZiAob3B0aW9uLnRleHQgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBtYXRjaCwgc2V0IHRoZSBvcHRpb24gYXMgc2VsZWN0ZWRcbiAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJmaWxsZWRcIik7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgb3B0aW9uIHRvIHRoZSBwcm9qZWN0U2VsZWN0b3Igc2VsZWN0IGVsZW1lbnRcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gb3B0aW9ucyBmb3IgcHJpb3JpdHkgc2VsZWN0IGVsZW1lbnRcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHkgPiBzZWxlY3RcIik7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gcHJpb3JpdHlTZWxlY3Qub3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5T3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBwcmlvcml0eU9wdGlvbnNbaV0udGV4dENvbnRlbnQ6ICR7cHJpb3JpdHlPcHRpb25zW2ldLnRleHRDb250ZW50fWBcbiAgICAgICk7XG4gICAgICBpZiAocHJpb3JpdHlPcHRpb25zW2ldLnRleHRDb250ZW50ID09PSB0YXNrT2JqZWN0WzBdLnByaW9yaXR5KSB7XG4gICAgICAgIHByaW9yaXR5T3B0aW9uc1tpXS5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPQkpFQ1QgREFUQVxuXG4gICAgLy8gcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQW5kVGFza3MuZmluZEluZGV4KFxuICAgICAgKGUpID0+IGUucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIC8vIHRhc2tcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1pbnB1dC1kZXRhaWxcIik7XG4gICAgdGFzay52YWx1ZSA9IHRhc2tPYmplY3RbMF0udGFzaztcbiAgICByZXNpemVJbnB1dCgpO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MuZmluZEluZGV4KFxuICAgICAgKGUpID0+IGUudGFzayA9PT0gdGFzay52YWx1ZVxuICAgICk7XG5cbiAgICAvLyBkYXRlQ3JlYXRlZFxuICAgIGxldCBkYXRlQ3JlYXRlZCA9IHRhc2tPYmplY3RbMF0uZGF0ZUNyZWF0ZWQ7XG5cbiAgICAvLyBkYXRlRHVlXG4gICAgbGV0IGRhdGVEdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtZHVlID4gaW5wdXRbdHlwZT1kYXRlXVwiKTtcbiAgICBkYXRlRHVlLnZhbHVlID0gdGFza09iamVjdFswXS5kYXRlRHVlO1xuXG4gICAgLy8gdGltZUR1ZVxuICAgIGxldCB0aW1lRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lLWR1ZSA+IGlucHV0W3R5cGU9dGltZV1cIik7XG4gICAgdGltZUR1ZS52YWx1ZSA9IHRhc2tPYmplY3RbMF0udGltZUR1ZTtcblxuICAgIC8vIHByaW9yaXR5XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5ID4gc2VsZWN0XCIpO1xuICAgIHByaW9yaXR5LnZhbHVlID0gdGFza09iamVjdFswXS5wcmlvcml0eTtcblxuICAgIC8vIGRlc2NcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvbi10ZXh0YXJlYVwiKTtcbiAgICBkZXNjLnZhbHVlID0gdGFza09iamVjdFswXS5kZXNjO1xuXG4gICAgLy8gc2F2ZSBidXR0b24gZXZlbnQgbGlzdGVuZXJcbiAgICBsZXQgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZS1idG5cIik7XG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgc2F2ZURldGFpbHMoXG4gICAgICAgIHByb2plY3RTZWxlY3Rvci52YWx1ZSxcbiAgICAgICAgdGFzay52YWx1ZSxcbiAgICAgICAgZGF0ZUNyZWF0ZWQsXG4gICAgICAgIGRhdGVEdWUudmFsdWUsXG4gICAgICAgIHRpbWVEdWUudmFsdWUsXG4gICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICBkZXNjLnZhbHVlLFxuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgdGFza0luZGV4XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gZGVsZXRlIGJ0biBldmVudCBsaXN0ZW5lclxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgZGVsZXRlRGV0YWlscyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCk7XG4gICAgfSlcblxuICB9IGVsc2UgaWYgKHNob3dPckhpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgcXVlcnlTZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2F2ZURldGFpbHMoXG4gIHByb2plY3QsXG4gIHRhc2ssXG4gIGRhdGVDcmVhdGVkLFxuICBkYXRlRHVlLFxuICB0aW1lRHVlLFxuICBwcmlvcml0eSxcbiAgZGVzYyxcbiAgcHJvamVjdE5hbWUsXG4gIG9yaWdpbmFsVGFza0luZGV4XG4pIHtcbiAgLy8gc2VjdGlvbiBmb3IgdGFza3MgdGhhdCBoYXZlIG5vdCBoYWQgdGhlaXIgcHJvamVjdCBjaGFuZ2VkXG4gIGlmIChwcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgIC8vIGZpbmQgcHJvamVjdCBpbiBwcm9qZWN0c0FuZFRhc2sgYXJyYXlcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0FuZFRhc2tzLmZpbmRJbmRleChcbiAgICAgIChlKSA9PiBlLnByb2plY3ROYW1lID09PSBwcm9qZWN0XG4gICAgKTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgLCBkYXRlIGR1ZSwgdGltZSBkdWUsIHByaW9yaXR5LCBhbmQgZGVzY3JpcHRpb24gaW4gdGhlIGFycmF5XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1tvcmlnaW5hbFRhc2tJbmRleF0udGFzayA9IHRhc2s7XG4gICAgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1tvcmlnaW5hbFRhc2tJbmRleF0uZGF0ZUR1ZSA9XG4gICAgICBkYXRlRHVlO1xuICAgIHByb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Nbb3JpZ2luYWxUYXNrSW5kZXhdLnRpbWVEdWUgPVxuICAgICAgdGltZUR1ZTtcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS5wcmlvcml0eSA9XG4gICAgICBwcmlvcml0eTtcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW29yaWdpbmFsVGFza0luZGV4XS5kZXNjID0gZGVzYztcblxuICAgIC8vIHVwZGF0ZSB0aGUgbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBwcm9qZWN0IHNlbGVjdGVkIGlzIGRpZmZlcmVudCB0aGFuIHRhc2sncyBvcmlnaW5hbCBwcm9qZWN0Li4uXG4gICAgLy8gbWFrZSBzdXJlIHRvIGdldCBvcmlnaW5hbCBwcm9qZWN0IG5hbWUgaW5kZXggZm9yIGxhdGVyIGRlbGV0aW9uXG4gICAgY29uc3Qgb2xkUHJvamVjdEluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoXG4gICAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgLy8gZmluZCBvdXQgdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0TmFtZSBpbiBwcm9qZWN0c0FuZFRhc2tzIHRoYXQgbWF0Y2hlcyBgcHJvamVjdGAgKHRoZSBuZXcgcHJvamVjdCBzZWxlY3RlZCdzIG5hbWUpXG4gICAgY29uc3QgbmV3UHJvamVjdEluZGV4ID0gcHJvamVjdHNBbmRUYXNrcy5maW5kSW5kZXgoXG4gICAgICAoZSkgPT4gZS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdFxuICAgICk7XG5cbiAgICAvLyBjcmVhdGUgbmV3VGFzayBvYmplY3QgdG8gbGF0ZXIgcHVzaCB0byBwcm9qZWN0c0FuZFRhc2tzIGFycmF5XG4gICAgbGV0IG5ld1Rhc2sgPSB7XG4gICAgICB0YXNrOiB0YXNrLFxuICAgICAgZGF0ZUNyZWF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgICBkYXRlRHVlOiBkYXRlRHVlLFxuICAgICAgdGltZUR1ZTogdGltZUR1ZSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgIGRlc2M6IGRlc2MsXG4gICAgfTtcbiAgICAvLyBwdXNoIG5ld2x5IGNyZWF0ZWQgdGFzayB0byBjb3JyZWN0IGluZGV4IG9mIHByb2plY3RzQW5kVGFza3MgaW4gdGhlIGN1cnJlbnRUYXNrcyBwcm9wZXJ0eVxuICAgIHByb2plY3RzQW5kVGFza3NbbmV3UHJvamVjdEluZGV4XS5jdXJyZW50VGFza3MucHVzaChuZXdUYXNrKTtcblxuICAgIC8vIGRlbGV0ZSB0aGUgb2xkIGN1cnJlbnQgdGFza1xuICAgIHByb2plY3RzQW5kVGFza3Nbb2xkUHJvamVjdEluZGV4XS5jdXJyZW50VGFza3Muc3BsaWNlKG9yaWdpbmFsVGFza0luZGV4LCAxKTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgfVxuXG4gIC8vIHJlbG9hZCB0aGUgcGFnZVxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsRGV0YWlscygpIHtcbiAgY29uc3QgcXVlcnlTZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlscy1jb250YWluZXJcIik7XG4gIHF1ZXJ5U2VsZWN0ZWQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBkZWxldGVEZXRhaWxzKHByb2plY3RJbmRleCwgdGFza0luZGV4KSB7XG4gIGNvbnNvbGUubG9nKGBGaXJzdCBvZiBhbGwuLi5gKVxuICBsZXQgZGVsZXRlQ29uZmlybWF0aW9uID0gcHJvbXB0KGBBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlIHRhc2s6ICR7cHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdLnRhc2t9PyAoeS9uKWApXG4gIGlmIChkZWxldGVDb25maXJtYXRpb24gPT09IFwieVwiKXtcbiAgICBjb25zb2xlLmxvZyhgcHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdOiAke3Byb2plY3RzQW5kVGFza3NbcHJvamVjdEluZGV4XS5jdXJyZW50VGFza3NbdGFza0luZGV4XX1gKTtcbiAgICBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIGNvbnNvbGUubG9nKGBwcm9qZWN0c0FuZFRhc2tzW3Byb2plY3RJbmRleF0uY3VycmVudFRhc2tzW3Rhc2tJbmRleF06ICR7cHJvamVjdHNBbmRUYXNrc1twcm9qZWN0SW5kZXhdLmN1cnJlbnRUYXNrc1t0YXNrSW5kZXhdfWApO1xuICAgIC8vIHVwZGF0ZSB0aGUgbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FuZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQW5kVGFza3MpKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG4vLyBleHBvcnRzXG5leHBvcnQgeyBwcm9qZWN0Q3JlYXRvciB9O1xuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzIH07XG5leHBvcnQgeyBwcm9qZWN0Q2xpY2tlZCB9O1xuZXhwb3J0IHsgYWN0aXZlUHJvamVjdCB9O1xuZXhwb3J0IHsgcHJldlByb2plY3QgfTtcbmV4cG9ydCB7IGRpc3BsYXlUYXNrcyB9O1xuZXhwb3J0IHsgdGFza0NyZWF0b3IgfTtcbmV4cG9ydCB7IHRhc2tDbGlja2VkIH07XG5leHBvcnQgeyBzYXZlRGV0YWlscyB9O1xuZXhwb3J0IHsgY2FuY2VsRGV0YWlscyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNBbmRUYXNrcyB9IGZyb20gXCIuL2RhdGEuanNcIjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9