(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("webpack-library-starter", [], factory);
	else if(typeof exports === 'object')
		exports["webpack-library-starter"] = factory();
	else
		root["webpack-library-starter"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/example.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/example.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".capable-widget {\n    border:1px solid red;\n    width:60px;\n    height:60px;\n    position: absolute;\n    bottom:10px;\n    right:10px;\n    display:block;\n}\n.you-custom-theme-class .margin {\n    background-color: blue;\n    opacity:0.1;\n}\n\n.you-custom-theme-class .border {\n    background-color: red;\n    opacity:0.1;\n}\n\n.you-custom-theme-class .padding {\n    background-color: green;\n    opacity:0.1;\n}\n\n.you-custom-theme-class .content {\n    background-color: gray;\n    opacity:0.1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dominspect/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dominspect/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dom-inspector {\n    position: fixed;\n    pointer-events: none;\n}\n\n.dom-inspector>div {\n\tposition: absolute;\n}\n\n.dom-inspector .tips {\n\tbackground-color: #333740;\n\tfont-size: 0;\n\tline-height: 18px;\n\tpadding: 3px 10px;\n\tposition: fixed;\n\tborder-radius: 4px;\n\tdisplay: none;\n}\n\n.dom-inspector .tips.reverse{\n\n}\n\n.dom-inspector .tips .triangle {\n\twidth: 0;\n\theight: 0;\n\tposition: absolute;\n\tborder-top: 8px solid #333740;\n\tborder-right: 8px solid transparent;\n\tborder-bottom: 8px solid transparent;\n\tborder-left: 8px solid transparent;\n\tleft: 10px;\n\ttop: 24px;\n}\n\n.dom-inspector .tips.reverse .triangle {\n\tborder-top: 8px solid transparent;\n\tborder-right: 8px solid transparent;\n\tborder-bottom: 8px solid #333740;\n\tborder-left: 8px solid transparent;\n\tleft: 10px;\n\ttop: -16px;\n}\n\n.dom-inspector .tips>div {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tfont-size: 12px;\n\tfont-family: Consolas, Menlo, Monaco, Courier, monospace;\n\toverflow: auto;\n}\n\n.dom-inspector .tips .tag {\n\tcolor: #e776e0;\n}\n\n.dom-inspector .tips .id {\n\tcolor: #eba062;\n}\n\n.dom-inspector .tips .class {\n\tcolor: #8dd2fb;\n}\n\n.dom-inspector .tips .line {\n\tcolor: #fff;\n}\n\n.dom-inspector .tips .size {\n\tcolor: #fff;\n}\n\n.dom-inspector-theme-default {\n\n}\n\n.dom-inspector-theme-default .margin {\n\tbackground-color: rgba(255, 81, 81, 0.75);\n}\n\n.dom-inspector-theme-default .border {\n\tbackground-color: rgba(255, 241, 81, 0.75);\n}\n\n.dom-inspector-theme-default .padding {\n\tbackground-color: rgba(81, 255, 126, 0.75);\n}\n\n.dom-inspector-theme-default .content {\n\tbackground-color: rgba(81, 101, 255, 0.75);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/document-ready/index.js":
/*!**********************************************!*\
  !*** ./node_modules/document-ready/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ready

function ready (callback) {
  if (typeof document === 'undefined') {
    throw new Error('document-ready only runs in the browser')
  }
  var state = document.readyState
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0)
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback()
  })
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/example.css":
/*!*****************************!*\
  !*** ./src/css/example.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./example.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/example.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/domchecker.js":
/*!***************************!*\
  !*** ./src/domchecker.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ux = _interopRequireDefault(__webpack_require__(/*! ./ux */ "./src/ux.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomChecker =
/*#__PURE__*/
function () {
  function DomChecker() {
    _classCallCheck(this, DomChecker);
  }

  _createClass(DomChecker, [{
    key: "init",
    value: function init(cb) {
      var ux = new _ux.default();
      ux.onReady(function (widget) {
        // pass widget on up the chain.
        cb(widget);
      });
    }
  }, {
    key: "setEnabled",
    value: function setEnabled(enabled) {
      alert(enabled);
      this.enabled = enabled;
    }
  }, {
    key: "getEnabled",
    value: function getEnabled() {
      return this.enabled;
    }
  }]);

  return DomChecker;
}();

exports.default = DomChecker;
module.exports = exports["default"];

/***/ }),

/***/ "./src/dominspect/dom.js":
/*!*******************************!*\
  !*** ./src/dominspect/dom.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDOM = isDOM;
exports.$ = $;
exports.addRule = addRule;
exports.findIndex = findIndex;
exports.getElementInfo = getElementInfo;
exports.getMaxZIndex = getMaxZIndex;
exports.isParent = isParent;
exports.default = void 0;

var _utils = __webpack_require__(/*! ./utils.js */ "./src/dominspect/utils.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isDOM() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _typeof(obj) === 'object' && obj.nodeType === 1 && _typeof(obj.style) === 'object' && _typeof(obj.ownerDocument) === 'object';
}

function $(selector, parent) {
  if (!parent) return document.querySelector(selector);
  if (isDOM(parent)) return parent.querySelector(selector);
  return document.querySelector(selector);
}

function addRule(selector, cssObj) {
  Object.keys(cssObj).forEach(function (item) {
    selector.style[item] = cssObj[item];
  });
}

function findIndex(ele, currentTag) {
  var nth = 0;

  while (ele) {
    if (ele.nodeName.toLowerCase() === currentTag) nth += 1;
    ele = ele.previousElementSibling;
  }

  return nth;
}

function findPos(ele) {
  var computedStyle = getComputedStyle(ele);

  var _x = ele.getBoundingClientRect().left - parseFloat(computedStyle['margin-left']);

  var _y = ele.getBoundingClientRect().top - parseFloat(computedStyle['margin-top']);

  var el = ele.parent;

  while (el) {
    computedStyle = getComputedStyle(el);
    _x += el.frameElement.getBoundingClientRect().left - parseFloat(computedStyle['margin-left']);
    _y += el.frameElement.getBoundingClientRect().top - parseFloat(computedStyle['margin-top']);
    el = el.parent;
  }

  return {
    top: _y,
    left: _x
  };
}
/**
 * @param  { Dom Element }
 * @return { Object }
 */


function getElementInfo(ele) {
  var result = {};
  var requiredValue = ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'z-index'];
  var computedStyle = getComputedStyle(ele);
  requiredValue.forEach(function (item) {
    result[item] = parseFloat(computedStyle[item]) || 0;
  });
  (0, _utils.mixin)(result, {
    width: ele.offsetWidth - result['border-left-width'] - result['border-right-width'] - result['padding-left'] - result['padding-right'],
    height: ele.offsetHeight - result['border-top-width'] - result['border-bottom-width'] - result['padding-top'] - result['padding-bottom']
  });
  (0, _utils.mixin)(result, findPos(ele));
  return result;
}

function getMaxZIndex() {
  return [].concat(_toConsumableArray(document.all)).reduce(function (r, e) {
    return Math.max(r, +window.getComputedStyle(e).zIndex || 0);
  }, 0);
}

function isParent(obj, parentObj) {
  while (obj !== undefined && obj !== null && obj.tagName.toUpperCase() !== 'BODY') {
    if (obj == parentObj) return true;
    obj = obj.parentNode;
  }

  return false;
}

var _default = $;
exports.default = _default;

/***/ }),

/***/ "./src/dominspect/index.js":
/*!*********************************!*\
  !*** ./src/dominspect/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./style.css */ "./src/dominspect/style.css");

var _dom = __webpack_require__(/*! ./dom.js */ "./src/dominspect/dom.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./src/dominspect/utils.js");

var _logger = _interopRequireDefault(__webpack_require__(/*! ./logger.js */ "./src/dominspect/logger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomInspector =
/*#__PURE__*/
function () {
  function DomInspector() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DomInspector);

    this._doc = window.document;
    this.root = options.root ? (0, _dom.isDOM)(options.root) ? options.root : (0, _dom.$)(options.root) : (0, _dom.$)('body');

    if ((0, _utils.isNull)(this.root)) {
      _logger.default.warn('Root element is null. Auto select body as root');

      this.root = (0, _dom.$)('body');
    }

    this.theme = options.theme || 'dom-inspector-theme-default';
    this.exclude = this._formatExcludeOption(options.exclude || []);
    this.overlay = {};
    this.overlayId = '';
    this.target = '';
    this.destroyed = false;
    this._cachedTarget = '';
    this._throttleOnMove = (0, _utils.throttle)(this._onMove.bind(this), 100);

    this._clickEventOnElement = function (e) {
      for (var i = 0; i < this.exclude.length; i += 1) {
        var cur = this.exclude[i];
        if (cur.isEqualNode(e.target) || (0, _dom.isParent)(e.target, cur)) return;
      }

      alert('call');
    };

    this._init();
  }

  _createClass(DomInspector, [{
    key: "enable",
    value: function enable() {
      if (this.destroyed) return _logger.default.warn('Inspector instance has been destroyed! Please redeclare it.');
      this.overlay.parent.style.display = 'block';
      this.root.addEventListener('mousemove', this._throttleOnMove);
      if (!this.destroyed) this.root.addEventListener('click', this._clickEventOnElement);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.root.removeEventListener('mousemove', this._throttleOnMove);
      this.root.removeEventListener('click', this._clickEventOnElement);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.overlay.parent.style.display = 'none';
      this.overlay.parent.style.width = 0;
      this.overlay.parent.style.height = 0;
      this.target = null;
      this.root.removeEventListener('click', this._clickEventOnElement);
      this.root.removeEventListener('mousemove', this._throttleOnMove);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyed = true;
      this.disable();
      this.overlay = {};
    }
  }, {
    key: "getXPath",
    value: function getXPath(ele) {
      if (!(0, _dom.isDOM)(ele) && !this.target) return _logger.default.warn('Target element is not found. Warning function name:%c getXPath', 'color: #ff5151');
      if (!ele) ele = this.target;

      if (ele.hasAttribute('id')) {
        return "//".concat(ele.tagName.toLowerCase(), "[@id=\"").concat(ele.id, "\"]");
      }

      if (ele.hasAttribute('class')) {
        return "//".concat(ele.tagName.toLowerCase(), "[@class=\"").concat(ele.getAttribute('class'), "\"]");
      }

      var path = [];

      while (ele.nodeType === Node.ELEMENT_NODE) {
        var currentTag = ele.nodeName.toLowerCase();
        var nth = (0, _dom.findIndex)(ele, currentTag);
        path.push("".concat(ele.tagName.toLowerCase()).concat(nth === 1 ? '' : "[".concat(nth, "]")));
        ele = ele.parentNode;
      }

      return "/".concat(path.reverse().join('/'));
    }
  }, {
    key: "getSelector",
    value: function getSelector(ele) {
      if (!(0, _dom.isDOM)(ele) && !this.target) return _logger.default.warn('Target element is not found. Warning function name:%c getCssPath', 'color: #ff5151');
      if (!ele) ele = this.target;
      var path = [];

      while (ele.nodeType === Node.ELEMENT_NODE) {
        var currentSelector = ele.nodeName.toLowerCase();

        if (ele.hasAttribute('id')) {
          currentSelector += "#".concat(ele.id);
        } else if (ele.hasAttribute('class')) {
          currentSelector += ".".concat(ele.className.replace(/\s+/g, ' ').split(' ').join('.'));
        } else {
          var nth = (0, _dom.findIndex)(ele, currentSelector);
          if (nth !== 1) currentSelector += ":nth-of-type(".concat(nth, ")");
        }

        path.unshift(currentSelector);
        ele = ele.parentNode;
      }

      return path.join('>');
    }
  }, {
    key: "getElementInfo",
    value: function getElementInfo(ele) {
      if (!(0, _dom.isDOM)(ele) && !this.target) return _logger.default.warn('Target element is not found. Warning function name:%c getElementInfo', 'color: #ff5151');
      return (0, _dom.getElementInfo)(ele || this.target);
    }
  }, {
    key: "_init",
    value: function _init() {
      this.overlayId = "dom-inspector-".concat(Date.now());

      var parent = this._createElement('div', {
        id: this.overlayId,
        class: "dom-inspector ".concat(this.theme),
        style: "z-index: ".concat((0, _dom.getMaxZIndex)() + 1)
      });

      this.overlay = {
        parent: parent,
        content: this._createSurroundEle(parent, 'content'),
        paddingTop: this._createSurroundEle(parent, 'padding padding-top'),
        paddingRight: this._createSurroundEle(parent, 'padding padding-right'),
        paddingBottom: this._createSurroundEle(parent, 'padding padding-bottom'),
        paddingLeft: this._createSurroundEle(parent, 'padding padding-left'),
        borderTop: this._createSurroundEle(parent, 'border border-top'),
        borderRight: this._createSurroundEle(parent, 'border border-right'),
        borderBottom: this._createSurroundEle(parent, 'border border-bottom'),
        borderLeft: this._createSurroundEle(parent, 'border border-left'),
        marginTop: this._createSurroundEle(parent, 'margin margin-top'),
        marginRight: this._createSurroundEle(parent, 'margin margin-right'),
        marginBottom: this._createSurroundEle(parent, 'margin margin-bottom'),
        marginLeft: this._createSurroundEle(parent, 'margin margin-left'),
        tips: this._createSurroundEle(parent, 'tips', '<div class="tag"></div><div class="id"></div><div class="class"></div><div class="line">&nbsp;|&nbsp;</div><div class="size"></div><div class="triangle"></div>')
      };
      (0, _dom.$)('body').appendChild(parent);
    }
  }, {
    key: "_createElement",
    value: function _createElement(tag, attr, content) {
      var ele = this._doc.createElement(tag);

      Object.keys(attr).forEach(function (item) {
        ele.setAttribute(item, attr[item]);
      });
      if (content) ele.innerHTML = content;
      return ele;
    }
  }, {
    key: "_createSurroundEle",
    value: function _createSurroundEle(parent, className, content) {
      var ele = this._createElement('div', {
        class: className
      }, content);

      parent.appendChild(ele);
      return ele;
    }
  }, {
    key: "_onMove",
    value: function _onMove(e) {
      for (var i = 0; i < this.exclude.length; i += 1) {
        var cur = this.exclude[i];
        if (cur.isEqualNode(e.target) || (0, _dom.isParent)(e.target, cur)) return;
      }

      this.target = e.target;
      if (this.target === this._cachedTarget) return null;
      this._cachedTarget = this.target;
      var elementInfo = (0, _dom.getElementInfo)(e.target);
      var contentLevel = {
        width: elementInfo.width,
        height: elementInfo.height
      };
      var paddingLevel = {
        width: elementInfo['padding-left'] + contentLevel.width + elementInfo['padding-right'],
        height: elementInfo['padding-top'] + contentLevel.height + elementInfo['padding-bottom']
      };
      var borderLevel = {
        width: elementInfo['border-left-width'] + paddingLevel.width + elementInfo['border-right-width'],
        height: elementInfo['border-top-width'] + paddingLevel.height + elementInfo['border-bottom-width']
      };
      var marginLevel = {
        width: elementInfo['margin-left'] + borderLevel.width + elementInfo['margin-right'],
        height: elementInfo['margin-top'] + borderLevel.height + elementInfo['margin-bottom']
      }; // so crazy

      (0, _dom.addRule)(this.overlay.parent, {
        width: "".concat(marginLevel.width, "px"),
        height: "".concat(marginLevel.height, "px"),
        top: "".concat(elementInfo.top, "px"),
        left: "".concat(elementInfo.left, "px")
      });
      (0, _dom.addRule)(this.overlay.content, {
        width: "".concat(contentLevel.width, "px"),
        height: "".concat(contentLevel.height, "px"),
        top: "".concat(elementInfo['margin-top'] + elementInfo['border-top-width'] + elementInfo['padding-top'], "px"),
        left: "".concat(elementInfo['margin-left'] + elementInfo['border-left-width'] + elementInfo['padding-left'], "px")
      });
      (0, _dom.addRule)(this.overlay.paddingTop, {
        width: "".concat(paddingLevel.width, "px"),
        height: "".concat(elementInfo['padding-top'], "px"),
        top: "".concat(elementInfo['margin-top'] + elementInfo['border-top-width'], "px"),
        left: "".concat(elementInfo['margin-left'] + elementInfo['border-left-width'], "px")
      });
      (0, _dom.addRule)(this.overlay.paddingRight, {
        width: "".concat(elementInfo['padding-right'], "px"),
        height: "".concat(paddingLevel.height - elementInfo['padding-top'], "px"),
        top: "".concat(elementInfo['padding-top'] + elementInfo['margin-top'] + elementInfo['border-top-width'], "px"),
        right: "".concat(elementInfo['margin-right'] + elementInfo['border-right-width'], "px")
      });
      (0, _dom.addRule)(this.overlay.paddingBottom, {
        width: "".concat(paddingLevel.width - elementInfo['padding-right'], "px"),
        height: "".concat(elementInfo['padding-bottom'], "px"),
        bottom: "".concat(elementInfo['margin-bottom'] + elementInfo['border-bottom-width'], "px"),
        right: "".concat(elementInfo['padding-right'] + elementInfo['margin-right'] + elementInfo['border-right-width'], "px")
      });
      (0, _dom.addRule)(this.overlay.paddingLeft, {
        width: "".concat(elementInfo['padding-left'], "px"),
        height: "".concat(paddingLevel.height - elementInfo['padding-top'] - elementInfo['padding-bottom'], "px"),
        top: "".concat(elementInfo['padding-top'] + elementInfo['margin-top'] + elementInfo['border-top-width'], "px"),
        left: "".concat(elementInfo['margin-left'] + elementInfo['border-left-width'], "px")
      });
      (0, _dom.addRule)(this.overlay.borderTop, {
        width: "".concat(borderLevel.width, "px"),
        height: "".concat(elementInfo['border-top-width'], "px"),
        top: "".concat(elementInfo['margin-top'], "px"),
        left: "".concat(elementInfo['margin-left'], "px")
      });
      (0, _dom.addRule)(this.overlay.borderRight, {
        width: "".concat(elementInfo['border-right-width'], "px"),
        height: "".concat(borderLevel.height - elementInfo['border-top-width'], "px"),
        top: "".concat(elementInfo['margin-top'] + elementInfo['border-top-width'], "px"),
        right: "".concat(elementInfo['margin-right'], "px")
      });
      (0, _dom.addRule)(this.overlay.borderBottom, {
        width: "".concat(borderLevel.width - elementInfo['border-right-width'], "px"),
        height: "".concat(elementInfo['border-bottom-width'], "px"),
        bottom: "".concat(elementInfo['margin-bottom'], "px"),
        right: "".concat(elementInfo['margin-right'] + elementInfo['border-right-width'], "px")
      });
      (0, _dom.addRule)(this.overlay.borderLeft, {
        width: "".concat(elementInfo['border-left-width'], "px"),
        height: "".concat(borderLevel.height - elementInfo['border-top-width'] - elementInfo['border-bottom-width'], "px"),
        top: "".concat(elementInfo['margin-top'] + elementInfo['border-top-width'], "px"),
        left: "".concat(elementInfo['margin-left'], "px")
      });
      (0, _dom.addRule)(this.overlay.marginTop, {
        width: "".concat(marginLevel.width, "px"),
        height: "".concat(elementInfo['margin-top'], "px"),
        top: 0,
        left: 0
      });
      (0, _dom.addRule)(this.overlay.marginRight, {
        width: "".concat(elementInfo['margin-right'], "px"),
        height: "".concat(marginLevel.height - elementInfo['margin-top'], "px"),
        top: "".concat(elementInfo['margin-top'], "px"),
        right: 0
      });
      (0, _dom.addRule)(this.overlay.marginBottom, {
        width: "".concat(marginLevel.width - elementInfo['margin-right'], "px"),
        height: "".concat(elementInfo['margin-bottom'], "px"),
        bottom: 0,
        right: "".concat(elementInfo['margin-right'], "px")
      });
      (0, _dom.addRule)(this.overlay.marginLeft, {
        width: "".concat(elementInfo['margin-left'], "px"),
        height: "".concat(marginLevel.height - elementInfo['margin-top'] - elementInfo['margin-bottom'], "px"),
        top: "".concat(elementInfo['margin-top'], "px"),
        left: 0
      });
      (0, _dom.$)('.tag', this.overlay.tips).innerHTML = this.target.tagName.toLowerCase();
      (0, _dom.$)('.id', this.overlay.tips).innerHTML = this.target.id ? "#".concat(this.target.id) : '';
      (0, _dom.$)('.class', this.overlay.tips).innerHTML = [].concat(_toConsumableArray(this.target.classList)).map(function (item) {
        return ".".concat(item);
      }).join('');
      (0, _dom.$)('.size', this.overlay.tips).innerHTML = "".concat(marginLevel.width, "x").concat(marginLevel.height);
      var tipsTop = 0;

      if (elementInfo.top >= 24 + 8) {
        this.overlay.tips.classList.remove('reverse');
        tipsTop = elementInfo.top - 24 - 8;
      } else {
        this.overlay.tips.classList.add('reverse');
        tipsTop = marginLevel.height + elementInfo.top + 8;
      }

      (0, _dom.addRule)(this.overlay.tips, {
        top: "".concat(tipsTop, "px"),
        left: "".concat(elementInfo.left, "px"),
        display: 'block'
      });
    }
  }, {
    key: "_formatExcludeOption",
    value: function _formatExcludeOption() {
      var excludeArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var result = [];
      excludeArray.forEach(function (item) {
        if (typeof item === 'string') return result.push((0, _dom.$)(item));
        if ((0, _dom.isDOM)(item)) return result.push(item);
      });
      return result;
    }
  }]);

  return DomInspector;
}();

var _default = DomInspector;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/dominspect/logger.js":
/*!**********************************!*\
  !*** ./src/dominspect/logger.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable */
var sep = 'DomInspector: ';
var proxy = ['log', 'warn', 'error'];
var exportObj = {};
proxy.forEach(function (item) {
  exportObj[item] = function funcName() {
    return console[item].call(this, sep + (arguments.length <= 0 ? undefined : arguments[0]), (arguments.length <= 1 ? undefined : arguments[1]) || '');
  };
});
var _default = exportObj;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/dominspect/style.css":
/*!**********************************!*\
  !*** ./src/dominspect/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/dominspect/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/dominspect/utils.js":
/*!*********************************!*\
  !*** ./src/dominspect/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = mixin;
exports.throttle = throttle;
exports.isNull = isNull;
exports.default = void 0;

/* eslint-disable */
function mixin(target, source) {
  var targetCopy = target;
  Object.keys(source).forEach(function (item) {
    if ({}.hasOwnProperty.call(source, item)) {
      targetCopy[item] = source[item];
    }
  });
  return targetCopy;
}

function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var timeout;
  var elapsed;
  var lastRunTime = Date.now(); // 上次运行时间

  return function none() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = this;

    clearTimeout(timeout);
    elapsed = Date.now() - lastRunTime;

    function later() {
      lastRunTime = Date.now();
      timeout = null;
      func.apply(_this, args);
    }

    if (elapsed > wait) {
      later();
    } else {
      timeout = setTimeout(later, wait - elapsed);
    }
  };
}

function isNull(obj) {
  return Object.prototype.toString.call(obj).replace(/\[object[\s]/, '').replace(']', '').toLowerCase() === 'null';
}

var _default = null;
exports.default = _default;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domchecker = _interopRequireDefault(__webpack_require__(/*! ./domchecker.js */ "./src/domchecker.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ./dominspect/index */ "./src/dominspect/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domCheck = new _domchecker.default();
domCheck.init(function (widget) {
  var inspector = new _index.default({
    root: 'body',
    exclude: [document.querySelector('.capable-widget')],
    theme: 'you-custom-theme-class'
  });
  widget.addEventListener('click', function () {
    domCheck.setEnabled(!domCheck.getEnabled());

    if (domCheck.getEnabled()) {
      inspector.enable();
    } else {
      inspector.disable();
    }
  });
});

/***/ }),

/***/ "./src/ux.js":
/*!*******************!*\
  !*** ./src/ux.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./css/example.css */ "./src/css/example.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ready = __webpack_require__(/*! document-ready */ "./node_modules/document-ready/index.js");

var UX =
/*#__PURE__*/
function () {
  function UX() {
    _classCallCheck(this, UX);
  }

  _createClass(UX, [{
    key: "buildUX",
    value: function buildUX() {
      var widget = document.createElement('a');
      widget.classList.add('capable-widget');
      document.body.appendChild(widget);
      return widget;
    }
  }, {
    key: "onReady",
    value: function onReady(callback) {
      var that = this;
      ready(function () {
        callback(that.buildUX());
      });
    }
  }]);

  return UX;
}();

exports.default = UX;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvLi9zcmMvY3NzL2V4YW1wbGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vc3JjL2RvbWluc3BlY3Qvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC1yZWFkeS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL3NyYy9jc3MvZXhhbXBsZS5jc3M/ZTRhMSIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL3NyYy9kb21jaGVja2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vc3JjL2RvbWluc3BlY3QvZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vc3JjL2RvbWluc3BlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvLi9zcmMvZG9taW5zcGVjdC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvLi9zcmMvZG9taW5zcGVjdC9zdHlsZS5jc3M/ODRlZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL3NyYy9kb21pbnNwZWN0L3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vc3JjL3V4LmpzIl0sIm5hbWVzIjpbIkRvbUNoZWNrZXIiLCJjYiIsInV4Iiwib25SZWFkeSIsIndpZGdldCIsImVuYWJsZWQiLCJhbGVydCIsImlzRE9NIiwib2JqIiwibm9kZVR5cGUiLCJzdHlsZSIsIm93bmVyRG9jdW1lbnQiLCIkIiwic2VsZWN0b3IiLCJwYXJlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRSdWxlIiwiY3NzT2JqIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJpdGVtIiwiZmluZEluZGV4IiwiZWxlIiwiY3VycmVudFRhZyIsIm50aCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZmluZFBvcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiX3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwicGFyc2VGbG9hdCIsIl95IiwidG9wIiwiZWwiLCJmcmFtZUVsZW1lbnQiLCJnZXRFbGVtZW50SW5mbyIsInJlc3VsdCIsInJlcXVpcmVkVmFsdWUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0TWF4WkluZGV4IiwiYWxsIiwicmVkdWNlIiwiciIsImUiLCJNYXRoIiwibWF4Iiwid2luZG93IiwiekluZGV4IiwiaXNQYXJlbnQiLCJwYXJlbnRPYmoiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwidG9VcHBlckNhc2UiLCJwYXJlbnROb2RlIiwiRG9tSW5zcGVjdG9yIiwib3B0aW9ucyIsIl9kb2MiLCJyb290Iiwid2FybiIsInRoZW1lIiwiZXhjbHVkZSIsIl9mb3JtYXRFeGNsdWRlT3B0aW9uIiwib3ZlcmxheSIsIm92ZXJsYXlJZCIsInRhcmdldCIsImRlc3Ryb3llZCIsIl9jYWNoZWRUYXJnZXQiLCJfdGhyb3R0bGVPbk1vdmUiLCJfb25Nb3ZlIiwiYmluZCIsIl9jbGlja0V2ZW50T25FbGVtZW50IiwiaSIsImxlbmd0aCIsImN1ciIsImlzRXF1YWxOb2RlIiwiX2luaXQiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlIiwiaGFzQXR0cmlidXRlIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJwYXRoIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInB1c2giLCJyZXZlcnNlIiwiam9pbiIsImN1cnJlbnRTZWxlY3RvciIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJzcGxpdCIsInVuc2hpZnQiLCJEYXRlIiwibm93IiwiX2NyZWF0ZUVsZW1lbnQiLCJjbGFzcyIsImNvbnRlbnQiLCJfY3JlYXRlU3Vycm91bmRFbGUiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwiYm9yZGVyVG9wIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJMZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwidGlwcyIsImFwcGVuZENoaWxkIiwidGFnIiwiYXR0ciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJlbGVtZW50SW5mbyIsImNvbnRlbnRMZXZlbCIsInBhZGRpbmdMZXZlbCIsImJvcmRlckxldmVsIiwibWFyZ2luTGV2ZWwiLCJyaWdodCIsImJvdHRvbSIsImNsYXNzTGlzdCIsIm1hcCIsInRpcHNUb3AiLCJyZW1vdmUiLCJhZGQiLCJleGNsdWRlQXJyYXkiLCJzZXAiLCJwcm94eSIsImV4cG9ydE9iaiIsImZ1bmNOYW1lIiwiY29uc29sZSIsImNhbGwiLCJtaXhpbiIsInNvdXJjZSIsInRhcmdldENvcHkiLCJoYXNPd25Qcm9wZXJ0eSIsInRocm90dGxlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiZWxhcHNlZCIsImxhc3RSdW5UaW1lIiwibm9uZSIsImFyZ3MiLCJfdGhpcyIsImNsZWFyVGltZW91dCIsImxhdGVyIiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiaXNOdWxsIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJkb21DaGVjayIsImluaXQiLCJpbnNwZWN0b3IiLCJzZXRFbmFibGVkIiwiZ2V0RW5hYmxlZCIsImVuYWJsZSIsInJlYWR5IiwicmVxdWlyZSIsIlVYIiwiYm9keSIsImNhbGxiYWNrIiwidGhhdCIsImJ1aWxkVVgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0Ms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LENBQXFCLGdCQUFyQjtBQUNBNUgsY0FBUSxDQUFDaUssSUFBVCxDQUFjdEQsV0FBZCxDQUEwQnRILE1BQTFCO0FBQ0EsYUFBT0EsTUFBUDtBQUNEOzs7NEJBRU82SyxRLEVBQVU7QUFDaEIsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFFQUwsV0FBSyxDQUFDLFlBQVk7QUFDaEJJLGdCQUFRLENBQUNDLElBQUksQ0FBQ0MsT0FBTCxFQUFELENBQVI7QUFDRCxPQUZJLENBQUw7QUFJRCIsImZpbGUiOiJ3ZWJwYWNrLWxpYnJhcnktc3RhcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2VicGFjay1saWJyYXJ5LXN0YXJ0ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2VicGFjay1saWJyYXJ5LXN0YXJ0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2VicGFjay1saWJyYXJ5LXN0YXJ0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcGFibGUtd2lkZ2V0IHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XFxuICAgIHdpZHRoOjYwcHg7XFxuICAgIGhlaWdodDo2MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbToxMHB4O1xcbiAgICByaWdodDoxMHB4O1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbn1cXG4ueW91LWN1c3RvbS10aGVtZS1jbGFzcyAubWFyZ2luIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgb3BhY2l0eTowLjE7XFxufVxcblxcbi55b3UtY3VzdG9tLXRoZW1lLWNsYXNzIC5ib3JkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6MC4xO1xcbn1cXG5cXG4ueW91LWN1c3RvbS10aGVtZS1jbGFzcyAucGFkZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBvcGFjaXR5OjAuMTtcXG59XFxuXFxuLnlvdS1jdXN0b20tdGhlbWUtY2xhc3MgLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBvcGFjaXR5OjAuMTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZG9tLWluc3BlY3RvciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5kb20taW5zcGVjdG9yPmRpdiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZG9tLWluc3BlY3RvciAudGlwcyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMzc0MDtcXG5cXHRmb250LXNpemU6IDA7XFxuXFx0bGluZS1oZWlnaHQ6IDE4cHg7XFxuXFx0cGFkZGluZzogM3B4IDEwcHg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZG9tLWluc3BlY3RvciAudGlwcy5yZXZlcnNle1xcblxcbn1cXG5cXG4uZG9tLWluc3BlY3RvciAudGlwcyAudHJpYW5nbGUge1xcblxcdHdpZHRoOiAwO1xcblxcdGhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym9yZGVyLXRvcDogOHB4IHNvbGlkICMzMzM3NDA7XFxuXFx0Ym9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0bGVmdDogMTBweDtcXG5cXHR0b3A6IDI0cHg7XFxufVxcblxcbi5kb20taW5zcGVjdG9yIC50aXBzLnJldmVyc2UgLnRyaWFuZ2xlIHtcXG5cXHRib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMzMzM3NDA7XFxuXFx0Ym9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRsZWZ0OiAxMHB4O1xcblxcdHRvcDogLTE2cHg7XFxufVxcblxcbi5kb20taW5zcGVjdG9yIC50aXBzPmRpdiB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTWVubG8sIE1vbmFjbywgQ291cmllciwgbW9ub3NwYWNlO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZG9tLWluc3BlY3RvciAudGlwcyAudGFnIHtcXG5cXHRjb2xvcjogI2U3NzZlMDtcXG59XFxuXFxuLmRvbS1pbnNwZWN0b3IgLnRpcHMgLmlkIHtcXG5cXHRjb2xvcjogI2ViYTA2MjtcXG59XFxuXFxuLmRvbS1pbnNwZWN0b3IgLnRpcHMgLmNsYXNzIHtcXG5cXHRjb2xvcjogIzhkZDJmYjtcXG59XFxuXFxuLmRvbS1pbnNwZWN0b3IgLnRpcHMgLmxpbmUge1xcblxcdGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZG9tLWluc3BlY3RvciAudGlwcyAuc2l6ZSB7XFxuXFx0Y29sb3I6ICNmZmY7XFxufVxcblxcbi5kb20taW5zcGVjdG9yLXRoZW1lLWRlZmF1bHQge1xcblxcbn1cXG5cXG4uZG9tLWluc3BlY3Rvci10aGVtZS1kZWZhdWx0IC5tYXJnaW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA4MSwgODEsIDAuNzUpO1xcbn1cXG5cXG4uZG9tLWluc3BlY3Rvci10aGVtZS1kZWZhdWx0IC5ib3JkZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDEsIDgxLCAwLjc1KTtcXG59XFxuXFxuLmRvbS1pbnNwZWN0b3ItdGhlbWUtZGVmYXVsdCAucGFkZGluZyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MSwgMjU1LCAxMjYsIDAuNzUpO1xcbn1cXG5cXG4uZG9tLWluc3BlY3Rvci10aGVtZS1kZWZhdWx0IC5jb250ZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgxLCAxMDEsIDI1NSwgMC43NSk7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZWFkeVxuXG5mdW5jdGlvbiByZWFkeSAoY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RvY3VtZW50LXJlYWR5IG9ubHkgcnVucyBpbiB0aGUgYnJvd3NlcicpXG4gIH1cbiAgdmFyIHN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZVxuICBpZiAoc3RhdGUgPT09ICdjb21wbGV0ZScgfHwgc3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMClcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiBvbkxvYWQgKCkge1xuICAgIGNhbGxiYWNrKClcbiAgfSlcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9leGFtcGxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgVVggZnJvbSAnLi91eCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21DaGVja2VyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgaW5pdChjYikge1xuXG4gICAgbGV0IHV4ID0gbmV3IFVYKCk7XG5cbiAgICB1eC5vblJlYWR5KGZ1bmN0aW9uICh3aWRnZXQpIHtcblxuICAgICAgLy8gcGFzcyB3aWRnZXQgb24gdXAgdGhlIGNoYWluLlxuICAgICAgY2Iod2lkZ2V0KTtcbiAgICB9KTtcblxuICB9XG5cbiAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgYWxlcnQoZW5hYmxlZCk7XG4gICAgdGhpcy5lbmFibGVkID0gZW5hYmxlZDtcbiAgfVxuXG4gIGdldEVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlZDtcbiAgfVxuXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgbWl4aW4gfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRE9NKG9iaiA9IHt9KSB7XG4gIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpICYmIChvYmoubm9kZVR5cGUgPT09IDEpICYmICh0eXBlb2Ygb2JqLnN0eWxlID09PSAnb2JqZWN0JykgJiYgKHR5cGVvZiBvYmoub3duZXJEb2N1bWVudCA9PT0gJ29iamVjdCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJChzZWxlY3RvciwgcGFyZW50KSB7XG4gIGlmICghcGFyZW50KSByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGlmIChpc0RPTShwYXJlbnQpKSByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSdWxlKHNlbGVjdG9yLCBjc3NPYmopIHtcbiAgT2JqZWN0LmtleXMoY3NzT2JqKS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdHNlbGVjdG9yLnN0eWxlW2l0ZW1dID0gY3NzT2JqW2l0ZW1dO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbmRleChlbGUsIGN1cnJlbnRUYWcpIHtcblx0bGV0IG50aCA9IDA7XG5cdHdoaWxlIChlbGUpIHtcblx0XHRpZiAoZWxlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRUYWcpIG50aCArPSAxO1xuXHRcdGVsZSA9IGVsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHR9XG5cdHJldHVybiBudGg7XG59XG5cbmZ1bmN0aW9uIGZpbmRQb3MoZWxlKSB7XG5cdGxldCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGUpO1xuXHRsZXQgX3ggPSBlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luLWxlZnQnXSk7XG5cdGxldCBfeSA9IGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGVbJ21hcmdpbi10b3AnXSk7XG5cdGxldCBlbCA9IGVsZS5wYXJlbnQ7XG5cdHdoaWxlIChlbCkge1xuXHRcdGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0XHRfeCArPSBlbC5mcmFtZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luLWxlZnQnXSk7XG5cdFx0X3kgKz0gZWwuZnJhbWVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luLXRvcCddKTtcblx0XHRlbCA9IGVsLnBhcmVudDtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHRvcDogX3ksXG5cdFx0bGVmdDogX3hcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHsgRG9tIEVsZW1lbnQgfVxuICogQHJldHVybiB7IE9iamVjdCB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50SW5mbyhlbGUpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGNvbnN0IHJlcXVpcmVkVmFsdWUgPSBbXG5cdFx0J2JvcmRlci10b3Atd2lkdGgnLFxuXHRcdCdib3JkZXItcmlnaHQtd2lkdGgnLFxuXHRcdCdib3JkZXItYm90dG9tLXdpZHRoJyxcblx0XHQnYm9yZGVyLWxlZnQtd2lkdGgnLFxuXHRcdCdtYXJnaW4tdG9wJyxcblx0XHQnbWFyZ2luLXJpZ2h0Jyxcblx0XHQnbWFyZ2luLWJvdHRvbScsXG5cdFx0J21hcmdpbi1sZWZ0Jyxcblx0XHQncGFkZGluZy10b3AnLFxuXHRcdCdwYWRkaW5nLXJpZ2h0Jyxcblx0XHQncGFkZGluZy1ib3R0b20nLFxuXHRcdCdwYWRkaW5nLWxlZnQnLFxuXHRcdCd6LWluZGV4J1xuXHRdO1xuXG5cdGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZSk7XG5cdHJlcXVpcmVkVmFsdWUuZm9yRWFjaChpdGVtID0+IHtcblx0XHRyZXN1bHRbaXRlbV0gPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGVbaXRlbV0pIHx8IDA7XG5cdH0pO1xuXG5cdG1peGluKHJlc3VsdCwge1xuXHRcdHdpZHRoOiBlbGUub2Zmc2V0V2lkdGggLSByZXN1bHRbJ2JvcmRlci1sZWZ0LXdpZHRoJ10gLSByZXN1bHRbJ2JvcmRlci1yaWdodC13aWR0aCddIC0gcmVzdWx0WydwYWRkaW5nLWxlZnQnXSAtIHJlc3VsdFsncGFkZGluZy1yaWdodCddLFxuXHRcdGhlaWdodDogZWxlLm9mZnNldEhlaWdodCAtIHJlc3VsdFsnYm9yZGVyLXRvcC13aWR0aCddIC0gcmVzdWx0Wydib3JkZXItYm90dG9tLXdpZHRoJ10gLSByZXN1bHRbJ3BhZGRpbmctdG9wJ10gLSByZXN1bHRbJ3BhZGRpbmctYm90dG9tJ11cblx0fSk7XG5cdG1peGluKHJlc3VsdCwgZmluZFBvcyhlbGUpKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heFpJbmRleCgpIHtcblx0cmV0dXJuIFsuLi5kb2N1bWVudC5hbGxdLnJlZHVjZSgociwgZSkgPT4gTWF0aC5tYXgociwgK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLnpJbmRleCB8fCAwKSwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcmVudChvYmosIHBhcmVudE9iaikge1xuXHR3aGlsZSAob2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIG9iai50YWdOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdCT0RZJykge1xuXHRcdGlmIChvYmogPT0gcGFyZW50T2JqKSByZXR1cm4gdHJ1ZTtcblx0XHRvYmogPSBvYmoucGFyZW50Tm9kZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyAkLCBnZXRFbGVtZW50SW5mbywgaXNET00sIGFkZFJ1bGUsIGZpbmRJbmRleCwgZ2V0TWF4WkluZGV4LCBpc1BhcmVudCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHRocm90dGxlLCBpc051bGwgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXIuanMnO1xuXG5jbGFzcyBEb21JbnNwZWN0b3Ige1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblx0XHR0aGlzLl9kb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cblx0XHR0aGlzLnJvb3QgPSBvcHRpb25zLnJvb3QgPyAoaXNET00ob3B0aW9ucy5yb290KSA/IG9wdGlvbnMucm9vdCA6ICQob3B0aW9ucy5yb290KSkgOiAkKCdib2R5Jyk7XG5cblx0XHRpZiAoaXNOdWxsKHRoaXMucm9vdCkpIHtcblx0XHRcdGxvZ2dlci53YXJuKCdSb290IGVsZW1lbnQgaXMgbnVsbC4gQXV0byBzZWxlY3QgYm9keSBhcyByb290Jyk7XG5cdFx0XHR0aGlzLnJvb3QgPSAkKCdib2R5Jyk7XG5cdFx0fVxuXG5cdFx0dGhpcy50aGVtZSA9IG9wdGlvbnMudGhlbWUgfHwgJ2RvbS1pbnNwZWN0b3ItdGhlbWUtZGVmYXVsdCc7XG5cdFx0dGhpcy5leGNsdWRlID0gdGhpcy5fZm9ybWF0RXhjbHVkZU9wdGlvbihvcHRpb25zLmV4Y2x1ZGUgfHwgW10pO1xuXG5cdFx0dGhpcy5vdmVybGF5ID0ge307XG5cdFx0dGhpcy5vdmVybGF5SWQgPSAnJztcblx0XHR0aGlzLnRhcmdldCA9ICcnO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cblx0XHR0aGlzLl9jYWNoZWRUYXJnZXQgPSAnJztcblx0XHR0aGlzLl90aHJvdHRsZU9uTW92ZSA9IHRocm90dGxlKHRoaXMuX29uTW92ZS5iaW5kKHRoaXMpLCAxMDApO1xuXHRcdHRoaXMuX2NsaWNrRXZlbnRPbkVsZW1lbnQgPSBmdW5jdGlvbihlKXsgXG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5leGNsdWRlLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdGNvbnN0IGN1ciA9IHRoaXMuZXhjbHVkZVtpXTtcblx0XHRcdFx0aWYgKGN1ci5pc0VxdWFsTm9kZShlLnRhcmdldCkgfHwgaXNQYXJlbnQoZS50YXJnZXQsIGN1cikpIHJldHVybjtcblx0XHRcdH1cblx0XHRcdGFsZXJ0KCdjYWxsJyk7XG5cdFx0IH07XG5cdFx0dGhpcy5faW5pdCgpO1xuXHR9XG5cdGVuYWJsZSgpIHtcblx0XHRpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVybiBsb2dnZXIud2FybignSW5zcGVjdG9yIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCEgUGxlYXNlIHJlZGVjbGFyZSBpdC4nKTtcblx0XHR0aGlzLm92ZXJsYXkucGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdHRoaXMucm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl90aHJvdHRsZU9uTW92ZSk7XG5cdFx0XG5cblxuXHRcdGlmICghdGhpcy5kZXN0cm95ZWQpXG5cdFx0XHR0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbGlja0V2ZW50T25FbGVtZW50KTtcblx0fVxuXHRwYXVzZSgpIHtcblx0XHR0aGlzLnJvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fdGhyb3R0bGVPbk1vdmUpO1xuXHRcdHRoaXMucm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2NsaWNrRXZlbnRPbkVsZW1lbnQpO1xuXHR9XG5cdGRpc2FibGUoKSB7XG5cdFx0dGhpcy5vdmVybGF5LnBhcmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdHRoaXMub3ZlcmxheS5wYXJlbnQuc3R5bGUud2lkdGggPSAwO1xuXHRcdHRoaXMub3ZlcmxheS5wYXJlbnQuc3R5bGUuaGVpZ2h0ID0gMDtcblx0XHR0aGlzLnRhcmdldCA9IG51bGw7XG5cblx0XHR0aGlzLnJvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbGlja0V2ZW50T25FbGVtZW50KTtcblx0XHR0aGlzLnJvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fdGhyb3R0bGVPbk1vdmUpO1xuXHR9XG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXHRcdHRoaXMuZGlzYWJsZSgpO1xuXHRcdHRoaXMub3ZlcmxheSA9IHt9O1xuXHR9XG5cdGdldFhQYXRoKGVsZSkge1xuXHRcdGlmICghaXNET00oZWxlKSAmJiAhdGhpcy50YXJnZXQpIHJldHVybiBsb2dnZXIud2FybignVGFyZ2V0IGVsZW1lbnQgaXMgbm90IGZvdW5kLiBXYXJuaW5nIGZ1bmN0aW9uIG5hbWU6JWMgZ2V0WFBhdGgnLCAnY29sb3I6ICNmZjUxNTEnKTtcblx0XHRpZiAoIWVsZSkgZWxlID0gdGhpcy50YXJnZXQ7XG5cblx0XHRpZiAoZWxlLmhhc0F0dHJpYnV0ZSgnaWQnKSkge1xuXHRcdFx0cmV0dXJuIGAvLyR7KGVsZS50YWdOYW1lKS50b0xvd2VyQ2FzZSgpfVtAaWQ9XCIke2VsZS5pZH1cIl1gO1xuXHRcdH1cblxuXHRcdGlmIChlbGUuaGFzQXR0cmlidXRlKCdjbGFzcycpKSB7XG5cdFx0XHRyZXR1cm4gYC8vJHsoZWxlLnRhZ05hbWUpLnRvTG93ZXJDYXNlKCl9W0BjbGFzcz1cIiR7ZWxlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKX1cIl1gO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhdGggPSBbXTtcblx0XHR3aGlsZSAoZWxlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuXHRcdFx0Y29uc3QgY3VycmVudFRhZyA9IGVsZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgbnRoID0gZmluZEluZGV4KGVsZSwgY3VycmVudFRhZyk7XG5cdFx0XHRwYXRoLnB1c2goYCR7KGVsZS50YWdOYW1lKS50b0xvd2VyQ2FzZSgpfSR7KG50aCA9PT0gMSA/ICcnIDogYFske250aH1dYCl9YCk7XG5cdFx0XHRlbGUgPSBlbGUucGFyZW50Tm9kZTtcblx0XHR9XG5cdFx0cmV0dXJuIGAvJHtwYXRoLnJldmVyc2UoKS5qb2luKCcvJyl9YDtcblx0fVxuXHRnZXRTZWxlY3RvcihlbGUpIHtcblx0XHRpZiAoIWlzRE9NKGVsZSkgJiYgIXRoaXMudGFyZ2V0KSByZXR1cm4gbG9nZ2VyLndhcm4oJ1RhcmdldCBlbGVtZW50IGlzIG5vdCBmb3VuZC4gV2FybmluZyBmdW5jdGlvbiBuYW1lOiVjIGdldENzc1BhdGgnLCAnY29sb3I6ICNmZjUxNTEnKTtcblx0XHRpZiAoIWVsZSkgZWxlID0gdGhpcy50YXJnZXQ7XG5cdFx0Y29uc3QgcGF0aCA9IFtdO1xuXHRcdHdoaWxlIChlbGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRsZXQgY3VycmVudFNlbGVjdG9yID0gZWxlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRpZiAoZWxlLmhhc0F0dHJpYnV0ZSgnaWQnKSkge1xuXHRcdFx0XHRjdXJyZW50U2VsZWN0b3IgKz0gYCMke2VsZS5pZH1gO1xuXHRcdFx0fSBlbHNlIGlmIChlbGUuaGFzQXR0cmlidXRlKCdjbGFzcycpKSB7XG5cdFx0XHRcdGN1cnJlbnRTZWxlY3RvciArPSBgLiR7ZWxlLmNsYXNzTmFtZS5yZXBsYWNlKC9cXHMrL2csICcgJykuc3BsaXQoJyAnKS5qb2luKCcuJyl9YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IG50aCA9IGZpbmRJbmRleChlbGUsIGN1cnJlbnRTZWxlY3Rvcik7XG5cdFx0XHRcdGlmIChudGggIT09IDEpIGN1cnJlbnRTZWxlY3RvciArPSBgOm50aC1vZi10eXBlKCR7bnRofSlgO1xuXHRcdFx0fVxuXHRcdFx0cGF0aC51bnNoaWZ0KGN1cnJlbnRTZWxlY3Rvcik7XG5cdFx0XHRlbGUgPSBlbGUucGFyZW50Tm9kZTtcblx0XHR9XG5cdFx0cmV0dXJuIHBhdGguam9pbignPicpO1xuXHR9XG5cdGdldEVsZW1lbnRJbmZvKGVsZSkge1xuXHRcdGlmICghaXNET00oZWxlKSAmJiAhdGhpcy50YXJnZXQpIHJldHVybiBsb2dnZXIud2FybignVGFyZ2V0IGVsZW1lbnQgaXMgbm90IGZvdW5kLiBXYXJuaW5nIGZ1bmN0aW9uIG5hbWU6JWMgZ2V0RWxlbWVudEluZm8nLCAnY29sb3I6ICNmZjUxNTEnKTtcblx0XHRyZXR1cm4gZ2V0RWxlbWVudEluZm8oZWxlIHx8IHRoaXMudGFyZ2V0KTtcblx0fVxuXHRfaW5pdCgpIHtcblx0XHR0aGlzLm92ZXJsYXlJZCA9IGBkb20taW5zcGVjdG9yLSR7RGF0ZS5ub3coKX1gO1xuXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5fY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0aWQ6IHRoaXMub3ZlcmxheUlkLFxuXHRcdFx0Y2xhc3M6IGBkb20taW5zcGVjdG9yICR7dGhpcy50aGVtZX1gLFxuXHRcdFx0c3R5bGU6IGB6LWluZGV4OiAke2dldE1heFpJbmRleCgpICsgMX1gXG5cdFx0fSk7XG5cblx0XHR0aGlzLm92ZXJsYXkgPSB7XG5cdFx0XHRwYXJlbnQsXG5cdFx0XHRjb250ZW50OiB0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZShwYXJlbnQsICdjb250ZW50JyksXG5cdFx0XHRwYWRkaW5nVG9wOiB0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZShwYXJlbnQsICdwYWRkaW5nIHBhZGRpbmctdG9wJyksXG5cdFx0XHRwYWRkaW5nUmlnaHQ6IHRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHBhcmVudCwgJ3BhZGRpbmcgcGFkZGluZy1yaWdodCcpLFxuXHRcdFx0cGFkZGluZ0JvdHRvbTogdGhpcy5fY3JlYXRlU3Vycm91bmRFbGUocGFyZW50LCAncGFkZGluZyBwYWRkaW5nLWJvdHRvbScpLFxuXHRcdFx0cGFkZGluZ0xlZnQ6IHRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHBhcmVudCwgJ3BhZGRpbmcgcGFkZGluZy1sZWZ0JyksXG5cdFx0XHRib3JkZXJUb3A6IHRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHBhcmVudCwgJ2JvcmRlciBib3JkZXItdG9wJyksXG5cdFx0XHRib3JkZXJSaWdodDogdGhpcy5fY3JlYXRlU3Vycm91bmRFbGUocGFyZW50LCAnYm9yZGVyIGJvcmRlci1yaWdodCcpLFxuXHRcdFx0Ym9yZGVyQm90dG9tOiB0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZShwYXJlbnQsICdib3JkZXIgYm9yZGVyLWJvdHRvbScpLFxuXHRcdFx0Ym9yZGVyTGVmdDogdGhpcy5fY3JlYXRlU3Vycm91bmRFbGUocGFyZW50LCAnYm9yZGVyIGJvcmRlci1sZWZ0JyksXG5cdFx0XHRtYXJnaW5Ub3A6IHRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHBhcmVudCwgJ21hcmdpbiBtYXJnaW4tdG9wJyksXG5cdFx0XHRtYXJnaW5SaWdodDogdGhpcy5fY3JlYXRlU3Vycm91bmRFbGUocGFyZW50LCAnbWFyZ2luIG1hcmdpbi1yaWdodCcpLFxuXHRcdFx0bWFyZ2luQm90dG9tOiB0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZShwYXJlbnQsICdtYXJnaW4gbWFyZ2luLWJvdHRvbScpLFxuXHRcdFx0bWFyZ2luTGVmdDogdGhpcy5fY3JlYXRlU3Vycm91bmRFbGUocGFyZW50LCAnbWFyZ2luIG1hcmdpbi1sZWZ0JyksXG5cdFx0XHR0aXBzOiB0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZShwYXJlbnQsICd0aXBzJywgJzxkaXYgY2xhc3M9XCJ0YWdcIj48L2Rpdj48ZGl2IGNsYXNzPVwiaWRcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY2xhc3NcIj48L2Rpdj48ZGl2IGNsYXNzPVwibGluZVwiPiZuYnNwO3wmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPVwic2l6ZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0cmlhbmdsZVwiPjwvZGl2PicpXG5cdFx0fTtcblxuXHRcdCQoJ2JvZHknKS5hcHBlbmRDaGlsZChwYXJlbnQpO1xuXHR9XG5cdF9jcmVhdGVFbGVtZW50KHRhZywgYXR0ciwgY29udGVudCkge1xuXHRcdGNvbnN0IGVsZSA9IHRoaXMuX2RvYy5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdFx0T2JqZWN0LmtleXMoYXR0cikuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGVsZS5zZXRBdHRyaWJ1dGUoaXRlbSwgYXR0cltpdGVtXSk7XG5cdFx0fSk7XG5cdFx0aWYgKGNvbnRlbnQpIGVsZS5pbm5lckhUTUwgPSBjb250ZW50O1xuXHRcdHJldHVybiBlbGU7XG5cdH1cblx0X2NyZWF0ZVN1cnJvdW5kRWxlKHBhcmVudCwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG5cdFx0Y29uc3QgZWxlID0gdGhpcy5fY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0Y2xhc3M6IGNsYXNzTmFtZVxuXHRcdH0sIGNvbnRlbnQpO1xuXHRcdHBhcmVudC5hcHBlbmRDaGlsZChlbGUpO1xuXHRcdHJldHVybiBlbGU7XG5cdH1cblx0X29uTW92ZShlKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV4Y2x1ZGUubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGNvbnN0IGN1ciA9IHRoaXMuZXhjbHVkZVtpXTtcblx0XHRcdGlmIChjdXIuaXNFcXVhbE5vZGUoZS50YXJnZXQpIHx8IGlzUGFyZW50KGUudGFyZ2V0LCBjdXIpKSByZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50YXJnZXQgPSBlLnRhcmdldDtcblxuXHRcdGlmICh0aGlzLnRhcmdldCA9PT0gdGhpcy5fY2FjaGVkVGFyZ2V0KSByZXR1cm4gbnVsbDtcblxuXHRcdHRoaXMuX2NhY2hlZFRhcmdldCA9IHRoaXMudGFyZ2V0O1xuXHRcdFxuXHRcdGNvbnN0IGVsZW1lbnRJbmZvID0gZ2V0RWxlbWVudEluZm8oZS50YXJnZXQpO1xuXHRcdGNvbnN0IGNvbnRlbnRMZXZlbCA9IHtcblx0XHRcdHdpZHRoOiBlbGVtZW50SW5mby53aWR0aCxcblx0XHRcdGhlaWdodDogZWxlbWVudEluZm8uaGVpZ2h0XG5cdFx0fTtcblx0XHRjb25zdCBwYWRkaW5nTGV2ZWwgPSB7XG5cdFx0XHR3aWR0aDogZWxlbWVudEluZm9bJ3BhZGRpbmctbGVmdCddICsgY29udGVudExldmVsLndpZHRoICsgZWxlbWVudEluZm9bJ3BhZGRpbmctcmlnaHQnXSxcblx0XHRcdGhlaWdodDogZWxlbWVudEluZm9bJ3BhZGRpbmctdG9wJ10gKyBjb250ZW50TGV2ZWwuaGVpZ2h0ICsgZWxlbWVudEluZm9bJ3BhZGRpbmctYm90dG9tJ11cblx0XHR9O1xuXHRcdGNvbnN0IGJvcmRlckxldmVsID0ge1xuXHRcdFx0d2lkdGg6IGVsZW1lbnRJbmZvWydib3JkZXItbGVmdC13aWR0aCddICsgcGFkZGluZ0xldmVsLndpZHRoICsgZWxlbWVudEluZm9bJ2JvcmRlci1yaWdodC13aWR0aCddLFxuXHRcdFx0aGVpZ2h0OiBlbGVtZW50SW5mb1snYm9yZGVyLXRvcC13aWR0aCddICsgcGFkZGluZ0xldmVsLmhlaWdodCArIGVsZW1lbnRJbmZvWydib3JkZXItYm90dG9tLXdpZHRoJ11cblx0XHR9O1xuXHRcdGNvbnN0IG1hcmdpbkxldmVsID0ge1xuXHRcdFx0d2lkdGg6IGVsZW1lbnRJbmZvWydtYXJnaW4tbGVmdCddICsgYm9yZGVyTGV2ZWwud2lkdGggKyBlbGVtZW50SW5mb1snbWFyZ2luLXJpZ2h0J10sXG5cdFx0XHRoZWlnaHQ6IGVsZW1lbnRJbmZvWydtYXJnaW4tdG9wJ10gKyBib3JkZXJMZXZlbC5oZWlnaHQgKyBlbGVtZW50SW5mb1snbWFyZ2luLWJvdHRvbSddXG5cdFx0fTtcblxuXHRcdC8vIHNvIGNyYXp5XG5cdFx0YWRkUnVsZSh0aGlzLm92ZXJsYXkucGFyZW50LCB7IHdpZHRoOiBgJHttYXJnaW5MZXZlbC53aWR0aH1weGAsIGhlaWdodDogYCR7bWFyZ2luTGV2ZWwuaGVpZ2h0fXB4YCwgdG9wOiBgJHtlbGVtZW50SW5mby50b3B9cHhgLCBsZWZ0OiBgJHtlbGVtZW50SW5mby5sZWZ0fXB4YCB9KTtcblx0XHRhZGRSdWxlKHRoaXMub3ZlcmxheS5jb250ZW50LCB7IHdpZHRoOiBgJHtjb250ZW50TGV2ZWwud2lkdGh9cHhgLCBoZWlnaHQ6IGAke2NvbnRlbnRMZXZlbC5oZWlnaHR9cHhgLCB0b3A6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tdG9wJ10gKyBlbGVtZW50SW5mb1snYm9yZGVyLXRvcC13aWR0aCddICsgZWxlbWVudEluZm9bJ3BhZGRpbmctdG9wJ119cHhgLCBsZWZ0OiBgJHtlbGVtZW50SW5mb1snbWFyZ2luLWxlZnQnXSArIGVsZW1lbnRJbmZvWydib3JkZXItbGVmdC13aWR0aCddICsgZWxlbWVudEluZm9bJ3BhZGRpbmctbGVmdCddfXB4YCB9KTtcblx0XHRhZGRSdWxlKHRoaXMub3ZlcmxheS5wYWRkaW5nVG9wLCB7IHdpZHRoOiBgJHtwYWRkaW5nTGV2ZWwud2lkdGh9cHhgLCBoZWlnaHQ6IGAke2VsZW1lbnRJbmZvWydwYWRkaW5nLXRvcCddfXB4YCwgdG9wOiBgJHtlbGVtZW50SW5mb1snbWFyZ2luLXRvcCddICsgZWxlbWVudEluZm9bJ2JvcmRlci10b3Atd2lkdGgnXX1weGAsIGxlZnQ6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tbGVmdCddICsgZWxlbWVudEluZm9bJ2JvcmRlci1sZWZ0LXdpZHRoJ119cHhgIH0pO1xuXHRcdGFkZFJ1bGUodGhpcy5vdmVybGF5LnBhZGRpbmdSaWdodCwgeyB3aWR0aDogYCR7ZWxlbWVudEluZm9bJ3BhZGRpbmctcmlnaHQnXX1weGAsIGhlaWdodDogYCR7cGFkZGluZ0xldmVsLmhlaWdodCAtIGVsZW1lbnRJbmZvWydwYWRkaW5nLXRvcCddfXB4YCwgdG9wOiBgJHtlbGVtZW50SW5mb1sncGFkZGluZy10b3AnXSArIGVsZW1lbnRJbmZvWydtYXJnaW4tdG9wJ10gKyBlbGVtZW50SW5mb1snYm9yZGVyLXRvcC13aWR0aCddfXB4YCwgcmlnaHQ6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tcmlnaHQnXSArIGVsZW1lbnRJbmZvWydib3JkZXItcmlnaHQtd2lkdGgnXX1weGAgfSk7XG5cdFx0YWRkUnVsZSh0aGlzLm92ZXJsYXkucGFkZGluZ0JvdHRvbSwgeyB3aWR0aDogYCR7cGFkZGluZ0xldmVsLndpZHRoIC0gZWxlbWVudEluZm9bJ3BhZGRpbmctcmlnaHQnXX1weGAsIGhlaWdodDogYCR7ZWxlbWVudEluZm9bJ3BhZGRpbmctYm90dG9tJ119cHhgLCBib3R0b206IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tYm90dG9tJ10gKyBlbGVtZW50SW5mb1snYm9yZGVyLWJvdHRvbS13aWR0aCddfXB4YCwgcmlnaHQ6IGAke2VsZW1lbnRJbmZvWydwYWRkaW5nLXJpZ2h0J10gKyBlbGVtZW50SW5mb1snbWFyZ2luLXJpZ2h0J10gKyBlbGVtZW50SW5mb1snYm9yZGVyLXJpZ2h0LXdpZHRoJ119cHhgIH0pO1xuXHRcdGFkZFJ1bGUodGhpcy5vdmVybGF5LnBhZGRpbmdMZWZ0LCB7IHdpZHRoOiBgJHtlbGVtZW50SW5mb1sncGFkZGluZy1sZWZ0J119cHhgLCBoZWlnaHQ6IGAke3BhZGRpbmdMZXZlbC5oZWlnaHQgLSBlbGVtZW50SW5mb1sncGFkZGluZy10b3AnXSAtIGVsZW1lbnRJbmZvWydwYWRkaW5nLWJvdHRvbSddfXB4YCwgdG9wOiBgJHtlbGVtZW50SW5mb1sncGFkZGluZy10b3AnXSArIGVsZW1lbnRJbmZvWydtYXJnaW4tdG9wJ10gKyBlbGVtZW50SW5mb1snYm9yZGVyLXRvcC13aWR0aCddfXB4YCwgbGVmdDogYCR7ZWxlbWVudEluZm9bJ21hcmdpbi1sZWZ0J10gKyBlbGVtZW50SW5mb1snYm9yZGVyLWxlZnQtd2lkdGgnXX1weGAgfSk7XG5cdFx0YWRkUnVsZSh0aGlzLm92ZXJsYXkuYm9yZGVyVG9wLCB7IHdpZHRoOiBgJHtib3JkZXJMZXZlbC53aWR0aH1weGAsIGhlaWdodDogYCR7ZWxlbWVudEluZm9bJ2JvcmRlci10b3Atd2lkdGgnXX1weGAsIHRvcDogYCR7ZWxlbWVudEluZm9bJ21hcmdpbi10b3AnXX1weGAsIGxlZnQ6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tbGVmdCddfXB4YCB9KTtcblx0XHRhZGRSdWxlKHRoaXMub3ZlcmxheS5ib3JkZXJSaWdodCwgeyB3aWR0aDogYCR7ZWxlbWVudEluZm9bJ2JvcmRlci1yaWdodC13aWR0aCddfXB4YCwgaGVpZ2h0OiBgJHtib3JkZXJMZXZlbC5oZWlnaHQgLSBlbGVtZW50SW5mb1snYm9yZGVyLXRvcC13aWR0aCddfXB4YCwgdG9wOiBgJHtlbGVtZW50SW5mb1snbWFyZ2luLXRvcCddICsgZWxlbWVudEluZm9bJ2JvcmRlci10b3Atd2lkdGgnXX1weGAsIHJpZ2h0OiBgJHtlbGVtZW50SW5mb1snbWFyZ2luLXJpZ2h0J119cHhgIH0pO1xuXHRcdGFkZFJ1bGUodGhpcy5vdmVybGF5LmJvcmRlckJvdHRvbSwgeyB3aWR0aDogYCR7Ym9yZGVyTGV2ZWwud2lkdGggLSBlbGVtZW50SW5mb1snYm9yZGVyLXJpZ2h0LXdpZHRoJ119cHhgLCBoZWlnaHQ6IGAke2VsZW1lbnRJbmZvWydib3JkZXItYm90dG9tLXdpZHRoJ119cHhgLCBib3R0b206IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tYm90dG9tJ119cHhgLCByaWdodDogYCR7ZWxlbWVudEluZm9bJ21hcmdpbi1yaWdodCddICsgZWxlbWVudEluZm9bJ2JvcmRlci1yaWdodC13aWR0aCddfXB4YCB9KTtcblx0XHRhZGRSdWxlKHRoaXMub3ZlcmxheS5ib3JkZXJMZWZ0LCB7IHdpZHRoOiBgJHtlbGVtZW50SW5mb1snYm9yZGVyLWxlZnQtd2lkdGgnXX1weGAsIGhlaWdodDogYCR7Ym9yZGVyTGV2ZWwuaGVpZ2h0IC0gZWxlbWVudEluZm9bJ2JvcmRlci10b3Atd2lkdGgnXSAtIGVsZW1lbnRJbmZvWydib3JkZXItYm90dG9tLXdpZHRoJ119cHhgLCB0b3A6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tdG9wJ10gKyBlbGVtZW50SW5mb1snYm9yZGVyLXRvcC13aWR0aCddfXB4YCwgbGVmdDogYCR7ZWxlbWVudEluZm9bJ21hcmdpbi1sZWZ0J119cHhgIH0pO1xuXHRcdGFkZFJ1bGUodGhpcy5vdmVybGF5Lm1hcmdpblRvcCwgeyB3aWR0aDogYCR7bWFyZ2luTGV2ZWwud2lkdGh9cHhgLCBoZWlnaHQ6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tdG9wJ119cHhgLCB0b3A6IDAsIGxlZnQ6IDAgfSk7XG5cdFx0YWRkUnVsZSh0aGlzLm92ZXJsYXkubWFyZ2luUmlnaHQsIHsgd2lkdGg6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tcmlnaHQnXX1weGAsIGhlaWdodDogYCR7bWFyZ2luTGV2ZWwuaGVpZ2h0IC0gZWxlbWVudEluZm9bJ21hcmdpbi10b3AnXX1weGAsIHRvcDogYCR7ZWxlbWVudEluZm9bJ21hcmdpbi10b3AnXX1weGAsIHJpZ2h0OiAwIH0pO1xuXHRcdGFkZFJ1bGUodGhpcy5vdmVybGF5Lm1hcmdpbkJvdHRvbSwgeyB3aWR0aDogYCR7bWFyZ2luTGV2ZWwud2lkdGggLSBlbGVtZW50SW5mb1snbWFyZ2luLXJpZ2h0J119cHhgLCBoZWlnaHQ6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tYm90dG9tJ119cHhgLCBib3R0b206IDAsIHJpZ2h0OiBgJHtlbGVtZW50SW5mb1snbWFyZ2luLXJpZ2h0J119cHhgIH0pO1xuXHRcdGFkZFJ1bGUodGhpcy5vdmVybGF5Lm1hcmdpbkxlZnQsIHsgd2lkdGg6IGAke2VsZW1lbnRJbmZvWydtYXJnaW4tbGVmdCddfXB4YCwgaGVpZ2h0OiBgJHttYXJnaW5MZXZlbC5oZWlnaHQgLSBlbGVtZW50SW5mb1snbWFyZ2luLXRvcCddIC0gZWxlbWVudEluZm9bJ21hcmdpbi1ib3R0b20nXX1weGAsIHRvcDogYCR7ZWxlbWVudEluZm9bJ21hcmdpbi10b3AnXX1weGAsIGxlZnQ6IDAgfSk7XG5cblx0XHQkKCcudGFnJywgdGhpcy5vdmVybGF5LnRpcHMpLmlubmVySFRNTCA9IHRoaXMudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHQkKCcuaWQnLCB0aGlzLm92ZXJsYXkudGlwcykuaW5uZXJIVE1MID0gdGhpcy50YXJnZXQuaWQgPyBgIyR7dGhpcy50YXJnZXQuaWR9YCA6ICcnO1xuXHRcdCQoJy5jbGFzcycsIHRoaXMub3ZlcmxheS50aXBzKS5pbm5lckhUTUwgPSBbLi4udGhpcy50YXJnZXQuY2xhc3NMaXN0XS5tYXAoaXRlbSA9PiBgLiR7aXRlbX1gKS5qb2luKCcnKTtcblx0XHQkKCcuc2l6ZScsIHRoaXMub3ZlcmxheS50aXBzKS5pbm5lckhUTUwgPSBgJHttYXJnaW5MZXZlbC53aWR0aH14JHttYXJnaW5MZXZlbC5oZWlnaHR9YDtcblxuXHRcdGxldCB0aXBzVG9wID0gMDtcblx0XHRpZiAoZWxlbWVudEluZm8udG9wID49IDI0ICsgOCkge1xuXHRcdFx0dGhpcy5vdmVybGF5LnRpcHMuY2xhc3NMaXN0LnJlbW92ZSgncmV2ZXJzZScpO1xuXHRcdFx0dGlwc1RvcCA9IGVsZW1lbnRJbmZvLnRvcCAtIDI0IC0gODtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vdmVybGF5LnRpcHMuY2xhc3NMaXN0LmFkZCgncmV2ZXJzZScpO1xuXHRcdFx0dGlwc1RvcCA9IG1hcmdpbkxldmVsLmhlaWdodCArIGVsZW1lbnRJbmZvLnRvcCArIDg7XG5cdFx0fVxuXHRcdGFkZFJ1bGUodGhpcy5vdmVybGF5LnRpcHMsIHsgdG9wOiBgJHt0aXBzVG9wfXB4YCwgbGVmdDogYCR7ZWxlbWVudEluZm8ubGVmdH1weGAsIGRpc3BsYXk6ICdibG9jaycgfSk7XG5cdH1cblx0X2Zvcm1hdEV4Y2x1ZGVPcHRpb24oZXhjbHVkZUFycmF5ID0gW10pIHtcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcblxuXHRcdGV4Y2x1ZGVBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykgcmV0dXJuIHJlc3VsdC5wdXNoKCQoaXRlbSkpO1xuXG5cdFx0XHRpZiAoaXNET00oaXRlbSkpIHJldHVybiByZXN1bHQucHVzaChpdGVtKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9tSW5zcGVjdG9yO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmNvbnN0IHNlcCA9ICdEb21JbnNwZWN0b3I6ICc7XG5cbmNvbnN0IHByb3h5ID0gWydsb2cnLCAnd2FybicsICdlcnJvciddO1xuXG5jb25zdCBleHBvcnRPYmogPSB7fTtcblxucHJveHkuZm9yRWFjaChpdGVtID0+IHtcblx0ZXhwb3J0T2JqW2l0ZW1dID0gZnVuY3Rpb24gZnVuY05hbWUoLi4uYXJncykge1xuXHRcdHJldHVybiBjb25zb2xlW2l0ZW1dLmNhbGwodGhpcywgc2VwICsgYXJnc1swXSwgYXJnc1sxXSB8fCAnJyk7XG5cdH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0T2JqO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluKHRhcmdldCwgc291cmNlKSB7XG5cdGNvbnN0IHRhcmdldENvcHkgPSB0YXJnZXQ7XG5cdE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChpdGVtID0+IHtcblx0XHRpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGl0ZW0pKSB7XG5cdFx0XHR0YXJnZXRDb3B5W2l0ZW1dID0gc291cmNlW2l0ZW1dO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiB0YXJnZXRDb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCA9IDEwMCkge1xuXHRsZXQgdGltZW91dDtcblx0bGV0IGVsYXBzZWQ7XG5cdGxldCBsYXN0UnVuVGltZSA9IERhdGUubm93KCk7IC8vIOS4iuasoei/kOihjOaXtumXtFxuXHRyZXR1cm4gZnVuY3Rpb24gbm9uZSguLi5hcmdzKSB7XG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG5cdFx0ZWxhcHNlZCA9IERhdGUubm93KCkgLSBsYXN0UnVuVGltZTtcblxuXHRcdGZ1bmN0aW9uIGxhdGVyKCkge1xuXHRcdFx0bGFzdFJ1blRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRmdW5jLmFwcGx5KF90aGlzLCBhcmdzKTtcblx0XHR9XG5cblx0XHRpZiAoZWxhcHNlZCA+IHdhaXQpIHtcblx0XHRcdGxhdGVyKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gZWxhcHNlZCk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikucmVwbGFjZSgvXFxbb2JqZWN0W1xcc10vLCAnJykucmVwbGFjZSgnXScsICcnKS50b0xvd2VyQ2FzZSgpID09PSAnbnVsbCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG51bGw7XG4iLCJpbXBvcnQgRG9tQ2hlY2tlciBmcm9tICcuL2RvbWNoZWNrZXIuanMnO1xuaW1wb3J0IERvbUluc3BlY3RvciBmcm9tICcuL2RvbWluc3BlY3QvaW5kZXgnO1xuXG5jb25zdCBkb21DaGVjayA9IG5ldyBEb21DaGVja2VyKCk7XG5cbmRvbUNoZWNrLmluaXQoZnVuY3Rpb24gKHdpZGdldCkge1xuXG4gIGNvbnN0IGluc3BlY3RvciA9IG5ldyBEb21JbnNwZWN0b3Ioe1xuICAgIHJvb3Q6ICdib2R5JyxcbiAgICBleGNsdWRlOiBbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcGFibGUtd2lkZ2V0JyldLFxuICAgIHRoZW1lOiAneW91LWN1c3RvbS10aGVtZS1jbGFzcydcbiAgfSk7XG5cbiAgd2lkZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGRvbUNoZWNrLnNldEVuYWJsZWQoIWRvbUNoZWNrLmdldEVuYWJsZWQoKSk7XG5cbiAgICBpZiAoZG9tQ2hlY2suZ2V0RW5hYmxlZCgpKSB7XG4gICAgICBpbnNwZWN0b3IuZW5hYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3BlY3Rvci5kaXNhYmxlKCk7XG4gICAgfVxuXG4gIH0pO1xuXG59KTtcbiIsIlxudmFyIHJlYWR5ID0gcmVxdWlyZSgnZG9jdW1lbnQtcmVhZHknKTtcblxuaW1wb3J0ICcuL2Nzcy9leGFtcGxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVYIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgYnVpbGRVWCgpIHtcblxuICAgIHZhciB3aWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICB3aWRnZXQuY2xhc3NMaXN0LmFkZCgnY2FwYWJsZS13aWRnZXQnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdpZGdldCk7XG4gICAgcmV0dXJuIHdpZGdldDtcbiAgfVxuXG4gIG9uUmVhZHkoY2FsbGJhY2spIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICByZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayh0aGF0LmJ1aWxkVVgoKSk7XG4gICAgfSk7XG5cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9