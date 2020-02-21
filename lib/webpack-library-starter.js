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

/***/ "./node_modules/dom-inspector/dist/dom-inspector.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/dom-inspector/dist/dom-inspector.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * DomInspector v1.2.1
 * (c) 2019 luoye <luoyefe@gmail.com>
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function t(t,e){var r=t;return Object.keys(e).forEach(function(t){({}).hasOwnProperty.call(e,t)&&(r[t]=e[t])}),r}function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=void 0,o=void 0,i=Date.now();return function(){function n(){i=Date.now(),r=null,t.apply(p,d)}for(var a=arguments.length,d=Array(a),h=0;h<a;h++)d[h]=arguments[h];var p=this;clearTimeout(r),o=Date.now()-i,o>e?n():r=setTimeout(n,e-o)}}function r(t){return"null"===Object.prototype.toString.call(t).replace(/\[object[\s]/,"").replace("]","").toLowerCase()}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"object"===(void 0===t?"undefined":l(t))&&1===t.nodeType&&"object"===l(t.style)&&"object"===l(t.ownerDocument)}function i(t,e){return e&&o(e)?e.querySelector(t):document.querySelector(t)}function n(t,e){Object.keys(e).forEach(function(r){t.style[r]=e[r]})}function a(t,e){for(var r=0;t;)t.nodeName.toLowerCase()===e&&(r+=1),t=t.previousElementSibling;return r}function d(t){for(var e=getComputedStyle(t),r=t.getBoundingClientRect().left-parseFloat(e["margin-left"]),o=t.getBoundingClientRect().top-parseFloat(e["margin-top"]),i=t.parent;i;)e=getComputedStyle(i),r+=i.frameElement.getBoundingClientRect().left-parseFloat(e["margin-left"]),o+=i.frameElement.getBoundingClientRect().top-parseFloat(e["margin-top"]),i=i.parent;return{top:o,left:r}}function h(e){var r={},o=["border-top-width","border-right-width","border-bottom-width","border-left-width","margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left","z-index"],i=getComputedStyle(e);return o.forEach(function(t){r[t]=parseFloat(i[t])||0}),t(r,{width:e.offsetWidth-r["border-left-width"]-r["border-right-width"]-r["padding-left"]-r["padding-right"],height:e.offsetHeight-r["border-top-width"]-r["border-bottom-width"]-r["padding-top"]-r["padding-bottom"]}),t(r,d(e)),r}function p(){return[].concat(u(document.all)).reduce(function(t,e){return Math.max(t,+window.getComputedStyle(e).zIndex||0)},0)}function s(t,e){for(;void 0!==t&&null!==t&&"BODY"!==t.tagName.toUpperCase();){if(t==e)return!0;t=t.parentNode}return!1}!function(t,e){if("undefined"==typeof document)return e;t=t||"";var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t)),r.appendChild(o)}(".dom-inspector {\n    position: fixed;\n    pointer-events: none;\n}\n\n.dom-inspector>div {\n\tposition: absolute;\n}\n\n.dom-inspector .tips {\n\tbackground-color: #333740;\n\tfont-size: 0;\n\tline-height: 18px;\n\tpadding: 3px 10px;\n\tposition: fixed;\n\tborder-radius: 4px;\n\tdisplay: none;\n}\n\n.dom-inspector .tips.reverse{\n\n}\n\n.dom-inspector .tips .triangle {\n\twidth: 0;\n\theight: 0;\n\tposition: absolute;\n\tborder-top: 8px solid #333740;\n\tborder-right: 8px solid transparent;\n\tborder-bottom: 8px solid transparent;\n\tborder-left: 8px solid transparent;\n\tleft: 10px;\n\ttop: 24px;\n}\n\n.dom-inspector .tips.reverse .triangle {\n\tborder-top: 8px solid transparent;\n\tborder-right: 8px solid transparent;\n\tborder-bottom: 8px solid #333740;\n\tborder-left: 8px solid transparent;\n\tleft: 10px;\n\ttop: -16px;\n}\n\n.dom-inspector .tips>div {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tfont-size: 12px;\n\tfont-family: Consolas, Menlo, Monaco, Courier, monospace;\n\toverflow: auto;\n}\n\n.dom-inspector .tips .tag {\n\tcolor: #e776e0;\n}\n\n.dom-inspector .tips .id {\n\tcolor: #eba062;\n}\n\n.dom-inspector .tips .class {\n\tcolor: #8dd2fb;\n}\n\n.dom-inspector .tips .line {\n\tcolor: #fff;\n}\n\n.dom-inspector .tips .size {\n\tcolor: #fff;\n}\n\n.dom-inspector-theme-default {\n\n}\n\n.dom-inspector-theme-default .margin {\n\tbackground-color: rgba(255, 81, 81, 0.75);\n}\n\n.dom-inspector-theme-default .border {\n\tbackground-color: rgba(255, 241, 81, 0.75);\n}\n\n.dom-inspector-theme-default .padding {\n\tbackground-color: rgba(81, 255, 126, 0.75);\n}\n\n.dom-inspector-theme-default .content {\n\tbackground-color: rgba(81, 101, 255, 0.75);\n}\n",void 0);var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},c=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),u=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},m=["log","warn","error"],f={};return m.forEach(function(t){f[t]=function(){}}),function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this._doc=window.document,this.root=n.root?o(n.root)?n.root:i(n.root):i("body"),r(this.root)&&(f.warn("Root element is null. Auto select body as root"),this.root=i("body")),this.theme=n.theme||"dom-inspector-theme-default",this.exclude=this._formatExcludeOption(n.exclude||[]),this.overlay={},this.overlayId="",this.target="",this.destroyed=!1,this._cachedTarget="",this._throttleOnMove=e(this._onMove.bind(this),100),this._init()}return c(t,[{key:"enable",value:function(){if(this.destroyed)return f.warn("Inspector instance has been destroyed! Please redeclare it.");this.overlay.parent.style.display="block",this.root.addEventListener("mousemove",this._throttleOnMove)}},{key:"pause",value:function(){this.root.removeEventListener("mousemove",this._throttleOnMove)}},{key:"disable",value:function(){this.overlay.parent.style.display="none",this.overlay.parent.style.width=0,this.overlay.parent.style.height=0,this.target=null,this.root.removeEventListener("mousemove",this._throttleOnMove)}},{key:"destroy",value:function(){this.destroyed=!0,this.disable(),this.overlay={}}},{key:"getXPath",value:function(t){if(!o(t)&&!this.target)return f.warn("Target element is not found. Warning function name:%c getXPath","color: #ff5151");if(t||(t=this.target),t.hasAttribute("id"))return"//"+t.tagName.toLowerCase()+'[@id="'+t.id+'"]';if(t.hasAttribute("class"))return"//"+t.tagName.toLowerCase()+'[@class="'+t.getAttribute("class")+'"]';for(var e=[];t.nodeType===Node.ELEMENT_NODE;){var r=t.nodeName.toLowerCase(),i=a(t,r);e.push(t.tagName.toLowerCase()+(1===i?"":"["+i+"]")),t=t.parentNode}return"/"+e.reverse().join("/")}},{key:"getSelector",value:function(t){if(!o(t)&&!this.target)return f.warn("Target element is not found. Warning function name:%c getCssPath","color: #ff5151");t||(t=this.target);for(var e=[];t.nodeType===Node.ELEMENT_NODE;){var r=t.nodeName.toLowerCase();if(t.hasAttribute("id"))r+="#"+t.id;else{var i=a(t,r);1!==i&&(r+=":nth-of-type("+i+")")}e.unshift(r),t=t.parentNode}return e.join(">")}},{key:"getElementInfo",value:function(t){return o(t)||this.target?h(t||this.target):f.warn("Target element is not found. Warning function name:%c getElementInfo","color: #ff5151")}},{key:"_init",value:function(){this.overlayId="dom-inspector-"+Date.now();var t=this._createElement("div",{id:this.overlayId,class:"dom-inspector "+this.theme,style:"z-index: "+(p()+1)});this.overlay={parent:t,content:this._createSurroundEle(t,"content"),paddingTop:this._createSurroundEle(t,"padding padding-top"),paddingRight:this._createSurroundEle(t,"padding padding-right"),paddingBottom:this._createSurroundEle(t,"padding padding-bottom"),paddingLeft:this._createSurroundEle(t,"padding padding-left"),borderTop:this._createSurroundEle(t,"border border-top"),borderRight:this._createSurroundEle(t,"border border-right"),borderBottom:this._createSurroundEle(t,"border border-bottom"),borderLeft:this._createSurroundEle(t,"border border-left"),marginTop:this._createSurroundEle(t,"margin margin-top"),marginRight:this._createSurroundEle(t,"margin margin-right"),marginBottom:this._createSurroundEle(t,"margin margin-bottom"),marginLeft:this._createSurroundEle(t,"margin margin-left"),tips:this._createSurroundEle(t,"tips",'<div class="tag"></div><div class="id"></div><div class="class"></div><div class="line">&nbsp;|&nbsp;</div><div class="size"></div><div class="triangle"></div>')},i("body").appendChild(t)}},{key:"_createElement",value:function(t,e,r){var o=this._doc.createElement(t);return Object.keys(e).forEach(function(t){o.setAttribute(t,e[t])}),r&&(o.innerHTML=r),o}},{key:"_createSurroundEle",value:function(t,e,r){var o=this._createElement("div",{class:e},r);return t.appendChild(o),o}},{key:"_onMove",value:function(t){for(var e=0;e<this.exclude.length;e+=1){var r=this.exclude[e];if(r.isEqualNode(t.target)||s(t.target,r))return}if(this.target=t.target,this.target===this._cachedTarget)return null;this._cachedTarget=this.target;var o=h(t.target),a={width:o.width,height:o.height},d={width:o["padding-left"]+a.width+o["padding-right"],height:o["padding-top"]+a.height+o["padding-bottom"]},p={width:o["border-left-width"]+d.width+o["border-right-width"],height:o["border-top-width"]+d.height+o["border-bottom-width"]},l={width:o["margin-left"]+p.width+o["margin-right"],height:o["margin-top"]+p.height+o["margin-bottom"]};n(this.overlay.parent,{width:l.width+"px",height:l.height+"px",top:o.top+"px",left:o.left+"px"}),n(this.overlay.content,{width:a.width+"px",height:a.height+"px",top:o["margin-top"]+o["border-top-width"]+o["padding-top"]+"px",left:o["margin-left"]+o["border-left-width"]+o["padding-left"]+"px"}),n(this.overlay.paddingTop,{width:d.width+"px",height:o["padding-top"]+"px",top:o["margin-top"]+o["border-top-width"]+"px",left:o["margin-left"]+o["border-left-width"]+"px"}),n(this.overlay.paddingRight,{width:o["padding-right"]+"px",height:d.height-o["padding-top"]+"px",top:o["padding-top"]+o["margin-top"]+o["border-top-width"]+"px",right:o["margin-right"]+o["border-right-width"]+"px"}),n(this.overlay.paddingBottom,{width:d.width-o["padding-right"]+"px",height:o["padding-bottom"]+"px",bottom:o["margin-bottom"]+o["border-bottom-width"]+"px",right:o["padding-right"]+o["margin-right"]+o["border-right-width"]+"px"}),n(this.overlay.paddingLeft,{width:o["padding-left"]+"px",height:d.height-o["padding-top"]-o["padding-bottom"]+"px",top:o["padding-top"]+o["margin-top"]+o["border-top-width"]+"px",left:o["margin-left"]+o["border-left-width"]+"px"}),n(this.overlay.borderTop,{width:p.width+"px",height:o["border-top-width"]+"px",top:o["margin-top"]+"px",left:o["margin-left"]+"px"}),n(this.overlay.borderRight,{width:o["border-right-width"]+"px",height:p.height-o["border-top-width"]+"px",top:o["margin-top"]+o["border-top-width"]+"px",right:o["margin-right"]+"px"}),n(this.overlay.borderBottom,{width:p.width-o["border-right-width"]+"px",height:o["border-bottom-width"]+"px",bottom:o["margin-bottom"]+"px",right:o["margin-right"]+o["border-right-width"]+"px"}),n(this.overlay.borderLeft,{width:o["border-left-width"]+"px",height:p.height-o["border-top-width"]-o["border-bottom-width"]+"px",top:o["margin-top"]+o["border-top-width"]+"px",left:o["margin-left"]+"px"}),n(this.overlay.marginTop,{width:l.width+"px",height:o["margin-top"]+"px",top:0,left:0}),n(this.overlay.marginRight,{width:o["margin-right"]+"px",height:l.height-o["margin-top"]+"px",top:o["margin-top"]+"px",right:0}),n(this.overlay.marginBottom,{width:l.width-o["margin-right"]+"px",height:o["margin-bottom"]+"px",bottom:0,right:o["margin-right"]+"px"}),n(this.overlay.marginLeft,{width:o["margin-left"]+"px",height:l.height-o["margin-top"]-o["margin-bottom"]+"px",top:o["margin-top"]+"px",left:0}),i(".tag",this.overlay.tips).innerHTML=this.target.tagName.toLowerCase(),i(".id",this.overlay.tips).innerHTML=this.target.id?"#"+this.target.id:"",i(".class",this.overlay.tips).innerHTML=[].concat(u(this.target.classList)).map(function(t){return"."+t}).join(""),i(".size",this.overlay.tips).innerHTML=l.width+"x"+l.height;var g=0;o.top>=32?(this.overlay.tips.classList.remove("reverse"),g=o.top-24-8):(this.overlay.tips.classList.add("reverse"),g=l.height+o.top+8),n(this.overlay.tips,{top:g+"px",left:o.left+"px",display:"block"})}},{key:"_formatExcludeOption",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];return t.forEach(function(t){return"string"==typeof t?e.push(i(t)):o(t)?e.push(t):void 0}),e}}]),t}()});

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domchecker = _interopRequireDefault(__webpack_require__(/*! ./domchecker.js */ "./src/domchecker.js"));

var _domInspector = _interopRequireDefault(__webpack_require__(/*! dom-inspector */ "./node_modules/dom-inspector/dist/dom-inspector.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domCheck = new _domchecker.default();
domCheck.init(function (widget) {
  var inspector = new _domInspector.default({
    root: 'body',
    exclude: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvLi9zcmMvY3NzL2V4YW1wbGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC1yZWFkeS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL25vZGVfbW9kdWxlcy9kb20taW5zcGVjdG9yL2Rpc3QvZG9tLWluc3BlY3Rvci5taW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvLi9zcmMvY3NzL2V4YW1wbGUuY3NzP2U0YTEiLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvLi9zcmMvZG9tY2hlY2tlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL3NyYy91eC5qcyJdLCJuYW1lcyI6WyJEb21DaGVja2VyIiwiY2IiLCJ1eCIsIm9uUmVhZHkiLCJ3aWRnZXQiLCJlbmFibGVkIiwiYWxlcnQiLCJkb21DaGVjayIsImluaXQiLCJpbnNwZWN0b3IiLCJyb290IiwiZXhjbHVkZSIsInRoZW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEVuYWJsZWQiLCJnZXRFbmFibGVkIiwiZW5hYmxlIiwiZGlzYWJsZSIsInJlYWR5IiwicmVxdWlyZSIsIlVYIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FsbGJhY2siLCJ0aGF0IiwiYnVpbGRVWCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG9CQUFvQiwyQkFBMkIsaUJBQWlCLGtCQUFrQix5QkFBeUIsa0JBQWtCLGlCQUFpQixvQkFBb0IsR0FBRyxtQ0FBbUMsNkJBQTZCLGtCQUFrQixHQUFHLHFDQUFx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RUFBa0I7QUFFOUIsTUFBTUssU0FBUyxHQUFHLDBCQUFpQjtBQUNqQ0MsUUFBSSxFQUFFLE1BRDJCO0FBRWpDQyxXQUFPLEVBQUUsRUFGd0I7QUFHakNDLFNBQUssRUFBRTtBQUgwQixHQUFqQixDQUFsQjtBQU1BUixRQUFNLENBQUNTLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVk7QUFDM0NOLFlBQVEsQ0FBQ08sVUFBVCxDQUFvQixDQUFDUCxRQUFRLENBQUNRLFVBQVQsRUFBckI7O0FBRUEsUUFBSVIsUUFBUSxDQUFDUSxVQUFULEVBQUosRUFBMkI7QUFDekJOLGVBQVMsQ0FBQ08sTUFBVjtBQUNELEtBRkQsTUFFTztBQUNMUCxlQUFTLENBQUNRLE9BQVY7QUFDRDtBQUVGLEdBVEQ7QUFXRCxDQW5CRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7O0FBRkEsSUFBSUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDhEQUFELENBQW5COztJQUlxQkMsRTs7O0FBRW5CLGdCQUFjO0FBQUE7QUFFYjs7Ozs4QkFFUztBQUVSLFVBQUloQixNQUFNLEdBQUdpQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUVBbEIsWUFBTSxDQUFDbUIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsZ0JBQXJCO0FBQ0FILGNBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxXQUFkLENBQTBCdEIsTUFBMUI7QUFDQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs0QkFFT3VCLFEsRUFBVTtBQUNoQixVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBVixXQUFLLENBQUMsWUFBWTtBQUNoQlMsZ0JBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFMLEVBQUQsQ0FBUjtBQUNELE9BRkksQ0FBTDtBQUlEIiwiZmlsZSI6IndlYnBhY2stbGlicmFyeS1zdGFydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3ZWJwYWNrLWxpYnJhcnktc3RhcnRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3ZWJwYWNrLWxpYnJhcnktc3RhcnRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3ZWJwYWNrLWxpYnJhcnktc3RhcnRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FwYWJsZS13aWRnZXQge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcXG4gICAgd2lkdGg6NjBweDtcXG4gICAgaGVpZ2h0OjYwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOjEwcHg7XFxuICAgIHJpZ2h0OjEwcHg7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxufVxcbi55b3UtY3VzdG9tLXRoZW1lLWNsYXNzIC5tYXJnaW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBvcGFjaXR5OjAuMTtcXG59XFxuXFxuLnlvdS1jdXN0b20tdGhlbWUtY2xhc3MgLmJvcmRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgb3BhY2l0eTowLjE7XFxufVxcblxcbi55b3UtY3VzdG9tLXRoZW1lLWNsYXNzIC5wYWRkaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIG9wYWNpdHk6MC4xO1xcbn1cXG5cXG4ueW91LWN1c3RvbS10aGVtZS1jbGFzcyAuY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIG9wYWNpdHk6MC4xO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmVhZHlcblxuZnVuY3Rpb24gcmVhZHkgKGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudC1yZWFkeSBvbmx5IHJ1bnMgaW4gdGhlIGJyb3dzZXInKVxuICB9XG4gIHZhciBzdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGVcbiAgaWYgKHN0YXRlID09PSAnY29tcGxldGUnIHx8IHN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gb25Mb2FkICgpIHtcbiAgICBjYWxsYmFjaygpXG4gIH0pXG59XG4iLCIvKlxuICogRG9tSW5zcGVjdG9yIHYxLjIuMVxuICogKGMpIDIwMTkgbHVveWUgPGx1b3llZmVAZ21haWwuY29tPlxuICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTp0LkRvbUluc3BlY3Rvcj1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9dDtyZXR1cm4gT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbih0KXsoe30pLmhhc093blByb3BlcnR5LmNhbGwoZSx0KSYmKHJbdF09ZVt0XSl9KSxyfWZ1bmN0aW9uIGUodCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjEwMCxyPXZvaWQgMCxvPXZvaWQgMCxpPURhdGUubm93KCk7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbigpe2k9RGF0ZS5ub3coKSxyPW51bGwsdC5hcHBseShwLGQpfWZvcih2YXIgYT1hcmd1bWVudHMubGVuZ3RoLGQ9QXJyYXkoYSksaD0wO2g8YTtoKyspZFtoXT1hcmd1bWVudHNbaF07dmFyIHA9dGhpcztjbGVhclRpbWVvdXQociksbz1EYXRlLm5vdygpLWksbz5lP24oKTpyPXNldFRpbWVvdXQobixlLW8pfX1mdW5jdGlvbiByKHQpe3JldHVyblwibnVsbFwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnJlcGxhY2UoL1xcW29iamVjdFtcXHNdLyxcIlwiKS5yZXBsYWNlKFwiXVwiLFwiXCIpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gbygpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtyZXR1cm5cIm9iamVjdFwiPT09KHZvaWQgMD09PXQ/XCJ1bmRlZmluZWRcIjpsKHQpKSYmMT09PXQubm9kZVR5cGUmJlwib2JqZWN0XCI9PT1sKHQuc3R5bGUpJiZcIm9iamVjdFwiPT09bCh0Lm93bmVyRG9jdW1lbnQpfWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gZSYmbyhlKT9lLnF1ZXJ5U2VsZWN0b3IodCk6ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KX1mdW5jdGlvbiBuKHQsZSl7T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihyKXt0LnN0eWxlW3JdPWVbcl19KX1mdW5jdGlvbiBhKHQsZSl7Zm9yKHZhciByPTA7dDspdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZSYmKHIrPTEpLHQ9dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO3JldHVybiByfWZ1bmN0aW9uIGQodCl7Zm9yKHZhciBlPWdldENvbXB1dGVkU3R5bGUodCkscj10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtcGFyc2VGbG9hdChlW1wibWFyZ2luLWxlZnRcIl0pLG89dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AtcGFyc2VGbG9hdChlW1wibWFyZ2luLXRvcFwiXSksaT10LnBhcmVudDtpOyllPWdldENvbXB1dGVkU3R5bGUoaSkscis9aS5mcmFtZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1wYXJzZUZsb2F0KGVbXCJtYXJnaW4tbGVmdFwiXSksbys9aS5mcmFtZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLXBhcnNlRmxvYXQoZVtcIm1hcmdpbi10b3BcIl0pLGk9aS5wYXJlbnQ7cmV0dXJue3RvcDpvLGxlZnQ6cn19ZnVuY3Rpb24gaChlKXt2YXIgcj17fSxvPVtcImJvcmRlci10b3Atd2lkdGhcIixcImJvcmRlci1yaWdodC13aWR0aFwiLFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwiYm9yZGVyLWxlZnQtd2lkdGhcIixcIm1hcmdpbi10b3BcIixcIm1hcmdpbi1yaWdodFwiLFwibWFyZ2luLWJvdHRvbVwiLFwibWFyZ2luLWxlZnRcIixcInBhZGRpbmctdG9wXCIsXCJwYWRkaW5nLXJpZ2h0XCIsXCJwYWRkaW5nLWJvdHRvbVwiLFwicGFkZGluZy1sZWZ0XCIsXCJ6LWluZGV4XCJdLGk9Z2V0Q29tcHV0ZWRTdHlsZShlKTtyZXR1cm4gby5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JbdF09cGFyc2VGbG9hdChpW3RdKXx8MH0pLHQocix7d2lkdGg6ZS5vZmZzZXRXaWR0aC1yW1wiYm9yZGVyLWxlZnQtd2lkdGhcIl0tcltcImJvcmRlci1yaWdodC13aWR0aFwiXS1yW1wicGFkZGluZy1sZWZ0XCJdLXJbXCJwYWRkaW5nLXJpZ2h0XCJdLGhlaWdodDplLm9mZnNldEhlaWdodC1yW1wiYm9yZGVyLXRvcC13aWR0aFwiXS1yW1wiYm9yZGVyLWJvdHRvbS13aWR0aFwiXS1yW1wicGFkZGluZy10b3BcIl0tcltcInBhZGRpbmctYm90dG9tXCJdfSksdChyLGQoZSkpLHJ9ZnVuY3Rpb24gcCgpe3JldHVybltdLmNvbmNhdCh1KGRvY3VtZW50LmFsbCkpLnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLm1heCh0LCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKS56SW5kZXh8fDApfSwwKX1mdW5jdGlvbiBzKHQsZSl7Zm9yKDt2b2lkIDAhPT10JiZudWxsIT09dCYmXCJCT0RZXCIhPT10LnRhZ05hbWUudG9VcHBlckNhc2UoKTspe2lmKHQ9PWUpcmV0dXJuITA7dD10LnBhcmVudE5vZGV9cmV0dXJuITF9IWZ1bmN0aW9uKHQsZSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50KXJldHVybiBlO3Q9dHx8XCJcIjt2YXIgcj1kb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7by50eXBlPVwidGV4dC9jc3NcIixvLnN0eWxlU2hlZXQ/by5zdHlsZVNoZWV0LmNzc1RleHQ9dDpvLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKSxyLmFwcGVuZENoaWxkKG8pfShcIi5kb20taW5zcGVjdG9yIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmRvbS1pbnNwZWN0b3I+ZGl2IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5kb20taW5zcGVjdG9yIC50aXBzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNzQwO1xcblxcdGZvbnQtc2l6ZTogMDtcXG5cXHRsaW5lLWhlaWdodDogMThweDtcXG5cXHRwYWRkaW5nOiAzcHggMTBweDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kb20taW5zcGVjdG9yIC50aXBzLnJldmVyc2V7XFxuXFxufVxcblxcbi5kb20taW5zcGVjdG9yIC50aXBzIC50cmlhbmdsZSB7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3JkZXItdG9wOiA4cHggc29saWQgIzMzMzc0MDtcXG5cXHRib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRsZWZ0OiAxMHB4O1xcblxcdHRvcDogMjRweDtcXG59XFxuXFxuLmRvbS1pbnNwZWN0b3IgLnRpcHMucmV2ZXJzZSAudHJpYW5nbGUge1xcblxcdGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItYm90dG9tOiA4cHggc29saWQgIzMzMzc0MDtcXG5cXHRib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGxlZnQ6IDEwcHg7XFxuXFx0dG9wOiAtMTZweDtcXG59XFxuXFxuLmRvbS1pbnNwZWN0b3IgLnRpcHM+ZGl2IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNZW5sbywgTW9uYWNvLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5kb20taW5zcGVjdG9yIC50aXBzIC50YWcge1xcblxcdGNvbG9yOiAjZTc3NmUwO1xcbn1cXG5cXG4uZG9tLWluc3BlY3RvciAudGlwcyAuaWQge1xcblxcdGNvbG9yOiAjZWJhMDYyO1xcbn1cXG5cXG4uZG9tLWluc3BlY3RvciAudGlwcyAuY2xhc3Mge1xcblxcdGNvbG9yOiAjOGRkMmZiO1xcbn1cXG5cXG4uZG9tLWluc3BlY3RvciAudGlwcyAubGluZSB7XFxuXFx0Y29sb3I6ICNmZmY7XFxufVxcblxcbi5kb20taW5zcGVjdG9yIC50aXBzIC5zaXplIHtcXG5cXHRjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmRvbS1pbnNwZWN0b3ItdGhlbWUtZGVmYXVsdCB7XFxuXFxufVxcblxcbi5kb20taW5zcGVjdG9yLXRoZW1lLWRlZmF1bHQgLm1hcmdpbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDgxLCA4MSwgMC43NSk7XFxufVxcblxcbi5kb20taW5zcGVjdG9yLXRoZW1lLWRlZmF1bHQgLmJvcmRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0MSwgODEsIDAuNzUpO1xcbn1cXG5cXG4uZG9tLWluc3BlY3Rvci10aGVtZS1kZWZhdWx0IC5wYWRkaW5nIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgxLCAyNTUsIDEyNiwgMC43NSk7XFxufVxcblxcbi5kb20taW5zcGVjdG9yLXRoZW1lLWRlZmF1bHQgLmNvbnRlbnQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoODEsIDEwMSwgMjU1LCAwLjc1KTtcXG59XFxuXCIsdm9pZCAwKTt2YXIgbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSxnPWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0sYz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIG89ZVtyXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbihlLHIsbyl7cmV0dXJuIHImJnQoZS5wcm90b3R5cGUsciksbyYmdChlLG8pLGV9fSgpLHU9ZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHZhciBlPTAscj1BcnJheSh0Lmxlbmd0aCk7ZTx0Lmxlbmd0aDtlKyspcltlXT10W2VdO3JldHVybiByfXJldHVybiBBcnJheS5mcm9tKHQpfSxtPVtcImxvZ1wiLFwid2FyblwiLFwiZXJyb3JcIl0sZj17fTtyZXR1cm4gbS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2ZbdF09ZnVuY3Rpb24oKXt9fSksZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O2codGhpcyx0KSx0aGlzLl9kb2M9d2luZG93LmRvY3VtZW50LHRoaXMucm9vdD1uLnJvb3Q/byhuLnJvb3QpP24ucm9vdDppKG4ucm9vdCk6aShcImJvZHlcIikscih0aGlzLnJvb3QpJiYoZi53YXJuKFwiUm9vdCBlbGVtZW50IGlzIG51bGwuIEF1dG8gc2VsZWN0IGJvZHkgYXMgcm9vdFwiKSx0aGlzLnJvb3Q9aShcImJvZHlcIikpLHRoaXMudGhlbWU9bi50aGVtZXx8XCJkb20taW5zcGVjdG9yLXRoZW1lLWRlZmF1bHRcIix0aGlzLmV4Y2x1ZGU9dGhpcy5fZm9ybWF0RXhjbHVkZU9wdGlvbihuLmV4Y2x1ZGV8fFtdKSx0aGlzLm92ZXJsYXk9e30sdGhpcy5vdmVybGF5SWQ9XCJcIix0aGlzLnRhcmdldD1cIlwiLHRoaXMuZGVzdHJveWVkPSExLHRoaXMuX2NhY2hlZFRhcmdldD1cIlwiLHRoaXMuX3Rocm90dGxlT25Nb3ZlPWUodGhpcy5fb25Nb3ZlLmJpbmQodGhpcyksMTAwKSx0aGlzLl9pbml0KCl9cmV0dXJuIGModCxbe2tleTpcImVuYWJsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5kZXN0cm95ZWQpcmV0dXJuIGYud2FybihcIkluc3BlY3RvciBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQhIFBsZWFzZSByZWRlY2xhcmUgaXQuXCIpO3RoaXMub3ZlcmxheS5wYXJlbnQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsdGhpcy5yb290LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLl90aHJvdHRsZU9uTW92ZSl9fSx7a2V5OlwicGF1c2VcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5fdGhyb3R0bGVPbk1vdmUpfX0se2tleTpcImRpc2FibGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMub3ZlcmxheS5wYXJlbnQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLm92ZXJsYXkucGFyZW50LnN0eWxlLndpZHRoPTAsdGhpcy5vdmVybGF5LnBhcmVudC5zdHlsZS5oZWlnaHQ9MCx0aGlzLnRhcmdldD1udWxsLHRoaXMucm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5fdGhyb3R0bGVPbk1vdmUpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZGVzdHJveWVkPSEwLHRoaXMuZGlzYWJsZSgpLHRoaXMub3ZlcmxheT17fX19LHtrZXk6XCJnZXRYUGF0aFwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKCFvKHQpJiYhdGhpcy50YXJnZXQpcmV0dXJuIGYud2FybihcIlRhcmdldCBlbGVtZW50IGlzIG5vdCBmb3VuZC4gV2FybmluZyBmdW5jdGlvbiBuYW1lOiVjIGdldFhQYXRoXCIsXCJjb2xvcjogI2ZmNTE1MVwiKTtpZih0fHwodD10aGlzLnRhcmdldCksdC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSlyZXR1cm5cIi8vXCIrdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkrJ1tAaWQ9XCInK3QuaWQrJ1wiXSc7aWYodC5oYXNBdHRyaWJ1dGUoXCJjbGFzc1wiKSlyZXR1cm5cIi8vXCIrdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkrJ1tAY2xhc3M9XCInK3QuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikrJ1wiXSc7Zm9yKHZhciBlPVtdO3Qubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERTspe3ZhciByPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxpPWEodCxyKTtlLnB1c2godC50YWdOYW1lLnRvTG93ZXJDYXNlKCkrKDE9PT1pP1wiXCI6XCJbXCIraStcIl1cIikpLHQ9dC5wYXJlbnROb2RlfXJldHVyblwiL1wiK2UucmV2ZXJzZSgpLmpvaW4oXCIvXCIpfX0se2tleTpcImdldFNlbGVjdG9yXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYoIW8odCkmJiF0aGlzLnRhcmdldClyZXR1cm4gZi53YXJuKFwiVGFyZ2V0IGVsZW1lbnQgaXMgbm90IGZvdW5kLiBXYXJuaW5nIGZ1bmN0aW9uIG5hbWU6JWMgZ2V0Q3NzUGF0aFwiLFwiY29sb3I6ICNmZjUxNTFcIik7dHx8KHQ9dGhpcy50YXJnZXQpO2Zvcih2YXIgZT1bXTt0Lm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREU7KXt2YXIgcj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYodC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSlyKz1cIiNcIit0LmlkO2Vsc2V7dmFyIGk9YSh0LHIpOzEhPT1pJiYocis9XCI6bnRoLW9mLXR5cGUoXCIraStcIilcIil9ZS51bnNoaWZ0KHIpLHQ9dC5wYXJlbnROb2RlfXJldHVybiBlLmpvaW4oXCI+XCIpfX0se2tleTpcImdldEVsZW1lbnRJbmZvXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIG8odCl8fHRoaXMudGFyZ2V0P2godHx8dGhpcy50YXJnZXQpOmYud2FybihcIlRhcmdldCBlbGVtZW50IGlzIG5vdCBmb3VuZC4gV2FybmluZyBmdW5jdGlvbiBuYW1lOiVjIGdldEVsZW1lbnRJbmZvXCIsXCJjb2xvcjogI2ZmNTE1MVwiKX19LHtrZXk6XCJfaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5vdmVybGF5SWQ9XCJkb20taW5zcGVjdG9yLVwiK0RhdGUubm93KCk7dmFyIHQ9dGhpcy5fY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDp0aGlzLm92ZXJsYXlJZCxjbGFzczpcImRvbS1pbnNwZWN0b3IgXCIrdGhpcy50aGVtZSxzdHlsZTpcInotaW5kZXg6IFwiKyhwKCkrMSl9KTt0aGlzLm92ZXJsYXk9e3BhcmVudDp0LGNvbnRlbnQ6dGhpcy5fY3JlYXRlU3Vycm91bmRFbGUodCxcImNvbnRlbnRcIikscGFkZGluZ1RvcDp0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZSh0LFwicGFkZGluZyBwYWRkaW5nLXRvcFwiKSxwYWRkaW5nUmlnaHQ6dGhpcy5fY3JlYXRlU3Vycm91bmRFbGUodCxcInBhZGRpbmcgcGFkZGluZy1yaWdodFwiKSxwYWRkaW5nQm90dG9tOnRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHQsXCJwYWRkaW5nIHBhZGRpbmctYm90dG9tXCIpLHBhZGRpbmdMZWZ0OnRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHQsXCJwYWRkaW5nIHBhZGRpbmctbGVmdFwiKSxib3JkZXJUb3A6dGhpcy5fY3JlYXRlU3Vycm91bmRFbGUodCxcImJvcmRlciBib3JkZXItdG9wXCIpLGJvcmRlclJpZ2h0OnRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHQsXCJib3JkZXIgYm9yZGVyLXJpZ2h0XCIpLGJvcmRlckJvdHRvbTp0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZSh0LFwiYm9yZGVyIGJvcmRlci1ib3R0b21cIiksYm9yZGVyTGVmdDp0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZSh0LFwiYm9yZGVyIGJvcmRlci1sZWZ0XCIpLG1hcmdpblRvcDp0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZSh0LFwibWFyZ2luIG1hcmdpbi10b3BcIiksbWFyZ2luUmlnaHQ6dGhpcy5fY3JlYXRlU3Vycm91bmRFbGUodCxcIm1hcmdpbiBtYXJnaW4tcmlnaHRcIiksbWFyZ2luQm90dG9tOnRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHQsXCJtYXJnaW4gbWFyZ2luLWJvdHRvbVwiKSxtYXJnaW5MZWZ0OnRoaXMuX2NyZWF0ZVN1cnJvdW5kRWxlKHQsXCJtYXJnaW4gbWFyZ2luLWxlZnRcIiksdGlwczp0aGlzLl9jcmVhdGVTdXJyb3VuZEVsZSh0LFwidGlwc1wiLCc8ZGl2IGNsYXNzPVwidGFnXCI+PC9kaXY+PGRpdiBjbGFzcz1cImlkXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNsYXNzXCI+PC9kaXY+PGRpdiBjbGFzcz1cImxpbmVcIj4mbmJzcDt8Jm5ic3A7PC9kaXY+PGRpdiBjbGFzcz1cInNpemVcIj48L2Rpdj48ZGl2IGNsYXNzPVwidHJpYW5nbGVcIj48L2Rpdj4nKX0saShcImJvZHlcIikuYXBwZW5kQ2hpbGQodCl9fSx7a2V5OlwiX2NyZWF0ZUVsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbih0LGUscil7dmFyIG89dGhpcy5fZG9jLmNyZWF0ZUVsZW1lbnQodCk7cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24odCl7by5zZXRBdHRyaWJ1dGUodCxlW3RdKX0pLHImJihvLmlubmVySFRNTD1yKSxvfX0se2tleTpcIl9jcmVhdGVTdXJyb3VuZEVsZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxyKXt2YXIgbz10aGlzLl9jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzOmV9LHIpO3JldHVybiB0LmFwcGVuZENoaWxkKG8pLG99fSx7a2V5OlwiX29uTW92ZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5leGNsdWRlLmxlbmd0aDtlKz0xKXt2YXIgcj10aGlzLmV4Y2x1ZGVbZV07aWYoci5pc0VxdWFsTm9kZSh0LnRhcmdldCl8fHModC50YXJnZXQscikpcmV0dXJufWlmKHRoaXMudGFyZ2V0PXQudGFyZ2V0LHRoaXMudGFyZ2V0PT09dGhpcy5fY2FjaGVkVGFyZ2V0KXJldHVybiBudWxsO3RoaXMuX2NhY2hlZFRhcmdldD10aGlzLnRhcmdldDt2YXIgbz1oKHQudGFyZ2V0KSxhPXt3aWR0aDpvLndpZHRoLGhlaWdodDpvLmhlaWdodH0sZD17d2lkdGg6b1tcInBhZGRpbmctbGVmdFwiXSthLndpZHRoK29bXCJwYWRkaW5nLXJpZ2h0XCJdLGhlaWdodDpvW1wicGFkZGluZy10b3BcIl0rYS5oZWlnaHQrb1tcInBhZGRpbmctYm90dG9tXCJdfSxwPXt3aWR0aDpvW1wiYm9yZGVyLWxlZnQtd2lkdGhcIl0rZC53aWR0aCtvW1wiYm9yZGVyLXJpZ2h0LXdpZHRoXCJdLGhlaWdodDpvW1wiYm9yZGVyLXRvcC13aWR0aFwiXStkLmhlaWdodCtvW1wiYm9yZGVyLWJvdHRvbS13aWR0aFwiXX0sbD17d2lkdGg6b1tcIm1hcmdpbi1sZWZ0XCJdK3Aud2lkdGgrb1tcIm1hcmdpbi1yaWdodFwiXSxoZWlnaHQ6b1tcIm1hcmdpbi10b3BcIl0rcC5oZWlnaHQrb1tcIm1hcmdpbi1ib3R0b21cIl19O24odGhpcy5vdmVybGF5LnBhcmVudCx7d2lkdGg6bC53aWR0aCtcInB4XCIsaGVpZ2h0OmwuaGVpZ2h0K1wicHhcIix0b3A6by50b3ArXCJweFwiLGxlZnQ6by5sZWZ0K1wicHhcIn0pLG4odGhpcy5vdmVybGF5LmNvbnRlbnQse3dpZHRoOmEud2lkdGgrXCJweFwiLGhlaWdodDphLmhlaWdodCtcInB4XCIsdG9wOm9bXCJtYXJnaW4tdG9wXCJdK29bXCJib3JkZXItdG9wLXdpZHRoXCJdK29bXCJwYWRkaW5nLXRvcFwiXStcInB4XCIsbGVmdDpvW1wibWFyZ2luLWxlZnRcIl0rb1tcImJvcmRlci1sZWZ0LXdpZHRoXCJdK29bXCJwYWRkaW5nLWxlZnRcIl0rXCJweFwifSksbih0aGlzLm92ZXJsYXkucGFkZGluZ1RvcCx7d2lkdGg6ZC53aWR0aCtcInB4XCIsaGVpZ2h0Om9bXCJwYWRkaW5nLXRvcFwiXStcInB4XCIsdG9wOm9bXCJtYXJnaW4tdG9wXCJdK29bXCJib3JkZXItdG9wLXdpZHRoXCJdK1wicHhcIixsZWZ0Om9bXCJtYXJnaW4tbGVmdFwiXStvW1wiYm9yZGVyLWxlZnQtd2lkdGhcIl0rXCJweFwifSksbih0aGlzLm92ZXJsYXkucGFkZGluZ1JpZ2h0LHt3aWR0aDpvW1wicGFkZGluZy1yaWdodFwiXStcInB4XCIsaGVpZ2h0OmQuaGVpZ2h0LW9bXCJwYWRkaW5nLXRvcFwiXStcInB4XCIsdG9wOm9bXCJwYWRkaW5nLXRvcFwiXStvW1wibWFyZ2luLXRvcFwiXStvW1wiYm9yZGVyLXRvcC13aWR0aFwiXStcInB4XCIscmlnaHQ6b1tcIm1hcmdpbi1yaWdodFwiXStvW1wiYm9yZGVyLXJpZ2h0LXdpZHRoXCJdK1wicHhcIn0pLG4odGhpcy5vdmVybGF5LnBhZGRpbmdCb3R0b20se3dpZHRoOmQud2lkdGgtb1tcInBhZGRpbmctcmlnaHRcIl0rXCJweFwiLGhlaWdodDpvW1wicGFkZGluZy1ib3R0b21cIl0rXCJweFwiLGJvdHRvbTpvW1wibWFyZ2luLWJvdHRvbVwiXStvW1wiYm9yZGVyLWJvdHRvbS13aWR0aFwiXStcInB4XCIscmlnaHQ6b1tcInBhZGRpbmctcmlnaHRcIl0rb1tcIm1hcmdpbi1yaWdodFwiXStvW1wiYm9yZGVyLXJpZ2h0LXdpZHRoXCJdK1wicHhcIn0pLG4odGhpcy5vdmVybGF5LnBhZGRpbmdMZWZ0LHt3aWR0aDpvW1wicGFkZGluZy1sZWZ0XCJdK1wicHhcIixoZWlnaHQ6ZC5oZWlnaHQtb1tcInBhZGRpbmctdG9wXCJdLW9bXCJwYWRkaW5nLWJvdHRvbVwiXStcInB4XCIsdG9wOm9bXCJwYWRkaW5nLXRvcFwiXStvW1wibWFyZ2luLXRvcFwiXStvW1wiYm9yZGVyLXRvcC13aWR0aFwiXStcInB4XCIsbGVmdDpvW1wibWFyZ2luLWxlZnRcIl0rb1tcImJvcmRlci1sZWZ0LXdpZHRoXCJdK1wicHhcIn0pLG4odGhpcy5vdmVybGF5LmJvcmRlclRvcCx7d2lkdGg6cC53aWR0aCtcInB4XCIsaGVpZ2h0Om9bXCJib3JkZXItdG9wLXdpZHRoXCJdK1wicHhcIix0b3A6b1tcIm1hcmdpbi10b3BcIl0rXCJweFwiLGxlZnQ6b1tcIm1hcmdpbi1sZWZ0XCJdK1wicHhcIn0pLG4odGhpcy5vdmVybGF5LmJvcmRlclJpZ2h0LHt3aWR0aDpvW1wiYm9yZGVyLXJpZ2h0LXdpZHRoXCJdK1wicHhcIixoZWlnaHQ6cC5oZWlnaHQtb1tcImJvcmRlci10b3Atd2lkdGhcIl0rXCJweFwiLHRvcDpvW1wibWFyZ2luLXRvcFwiXStvW1wiYm9yZGVyLXRvcC13aWR0aFwiXStcInB4XCIscmlnaHQ6b1tcIm1hcmdpbi1yaWdodFwiXStcInB4XCJ9KSxuKHRoaXMub3ZlcmxheS5ib3JkZXJCb3R0b20se3dpZHRoOnAud2lkdGgtb1tcImJvcmRlci1yaWdodC13aWR0aFwiXStcInB4XCIsaGVpZ2h0Om9bXCJib3JkZXItYm90dG9tLXdpZHRoXCJdK1wicHhcIixib3R0b206b1tcIm1hcmdpbi1ib3R0b21cIl0rXCJweFwiLHJpZ2h0Om9bXCJtYXJnaW4tcmlnaHRcIl0rb1tcImJvcmRlci1yaWdodC13aWR0aFwiXStcInB4XCJ9KSxuKHRoaXMub3ZlcmxheS5ib3JkZXJMZWZ0LHt3aWR0aDpvW1wiYm9yZGVyLWxlZnQtd2lkdGhcIl0rXCJweFwiLGhlaWdodDpwLmhlaWdodC1vW1wiYm9yZGVyLXRvcC13aWR0aFwiXS1vW1wiYm9yZGVyLWJvdHRvbS13aWR0aFwiXStcInB4XCIsdG9wOm9bXCJtYXJnaW4tdG9wXCJdK29bXCJib3JkZXItdG9wLXdpZHRoXCJdK1wicHhcIixsZWZ0Om9bXCJtYXJnaW4tbGVmdFwiXStcInB4XCJ9KSxuKHRoaXMub3ZlcmxheS5tYXJnaW5Ub3Ase3dpZHRoOmwud2lkdGgrXCJweFwiLGhlaWdodDpvW1wibWFyZ2luLXRvcFwiXStcInB4XCIsdG9wOjAsbGVmdDowfSksbih0aGlzLm92ZXJsYXkubWFyZ2luUmlnaHQse3dpZHRoOm9bXCJtYXJnaW4tcmlnaHRcIl0rXCJweFwiLGhlaWdodDpsLmhlaWdodC1vW1wibWFyZ2luLXRvcFwiXStcInB4XCIsdG9wOm9bXCJtYXJnaW4tdG9wXCJdK1wicHhcIixyaWdodDowfSksbih0aGlzLm92ZXJsYXkubWFyZ2luQm90dG9tLHt3aWR0aDpsLndpZHRoLW9bXCJtYXJnaW4tcmlnaHRcIl0rXCJweFwiLGhlaWdodDpvW1wibWFyZ2luLWJvdHRvbVwiXStcInB4XCIsYm90dG9tOjAscmlnaHQ6b1tcIm1hcmdpbi1yaWdodFwiXStcInB4XCJ9KSxuKHRoaXMub3ZlcmxheS5tYXJnaW5MZWZ0LHt3aWR0aDpvW1wibWFyZ2luLWxlZnRcIl0rXCJweFwiLGhlaWdodDpsLmhlaWdodC1vW1wibWFyZ2luLXRvcFwiXS1vW1wibWFyZ2luLWJvdHRvbVwiXStcInB4XCIsdG9wOm9bXCJtYXJnaW4tdG9wXCJdK1wicHhcIixsZWZ0OjB9KSxpKFwiLnRhZ1wiLHRoaXMub3ZlcmxheS50aXBzKS5pbm5lckhUTUw9dGhpcy50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLGkoXCIuaWRcIix0aGlzLm92ZXJsYXkudGlwcykuaW5uZXJIVE1MPXRoaXMudGFyZ2V0LmlkP1wiI1wiK3RoaXMudGFyZ2V0LmlkOlwiXCIsaShcIi5jbGFzc1wiLHRoaXMub3ZlcmxheS50aXBzKS5pbm5lckhUTUw9W10uY29uY2F0KHUodGhpcy50YXJnZXQuY2xhc3NMaXN0KSkubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiLlwiK3R9KS5qb2luKFwiXCIpLGkoXCIuc2l6ZVwiLHRoaXMub3ZlcmxheS50aXBzKS5pbm5lckhUTUw9bC53aWR0aCtcInhcIitsLmhlaWdodDt2YXIgZz0wO28udG9wPj0zMj8odGhpcy5vdmVybGF5LnRpcHMuY2xhc3NMaXN0LnJlbW92ZShcInJldmVyc2VcIiksZz1vLnRvcC0yNC04KToodGhpcy5vdmVybGF5LnRpcHMuY2xhc3NMaXN0LmFkZChcInJldmVyc2VcIiksZz1sLmhlaWdodCtvLnRvcCs4KSxuKHRoaXMub3ZlcmxheS50aXBzLHt0b3A6ZytcInB4XCIsbGVmdDpvLmxlZnQrXCJweFwiLGRpc3BsYXk6XCJibG9ja1wifSl9fSx7a2V5OlwiX2Zvcm1hdEV4Y2x1ZGVPcHRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSxlPVtdO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/ZS5wdXNoKGkodCkpOm8odCk/ZS5wdXNoKHQpOnZvaWQgMH0pLGV9fV0pLHR9KCl9KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXhhbXBsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFVYIGZyb20gJy4vdXgnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tQ2hlY2tlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIGluaXQoY2IpIHtcblxuICAgIGxldCB1eCA9IG5ldyBVWCgpO1xuXG4gICAgdXgub25SZWFkeShmdW5jdGlvbiAod2lkZ2V0KSB7XG5cbiAgICAgIC8vIHBhc3Mgd2lkZ2V0IG9uIHVwIHRoZSBjaGFpbi5cbiAgICAgIGNiKHdpZGdldCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgIGFsZXJ0KGVuYWJsZWQpO1xuICAgIHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG4gIH1cblxuICBnZXRFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZWQ7XG4gIH1cblxufVxuIiwiaW1wb3J0IERvbUNoZWNrZXIgZnJvbSAnLi9kb21jaGVja2VyLmpzJztcbmltcG9ydCBEb21JbnNwZWN0b3IgZnJvbSAnZG9tLWluc3BlY3Rvcic7XG5cbmNvbnN0IGRvbUNoZWNrID0gbmV3IERvbUNoZWNrZXIoKTtcblxuZG9tQ2hlY2suaW5pdChmdW5jdGlvbiAod2lkZ2V0KSB7XG5cbiAgY29uc3QgaW5zcGVjdG9yID0gbmV3IERvbUluc3BlY3Rvcih7XG4gICAgcm9vdDogJ2JvZHknLFxuICAgIGV4Y2x1ZGU6IFtdLFxuICAgIHRoZW1lOiAneW91LWN1c3RvbS10aGVtZS1jbGFzcydcbiAgfSk7XG5cbiAgd2lkZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGRvbUNoZWNrLnNldEVuYWJsZWQoIWRvbUNoZWNrLmdldEVuYWJsZWQoKSk7XG5cbiAgICBpZiAoZG9tQ2hlY2suZ2V0RW5hYmxlZCgpKSB7XG4gICAgICBpbnNwZWN0b3IuZW5hYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3BlY3Rvci5kaXNhYmxlKCk7XG4gICAgfVxuXG4gIH0pO1xuXG59KTtcbiIsIlxudmFyIHJlYWR5ID0gcmVxdWlyZSgnZG9jdW1lbnQtcmVhZHknKTtcblxuaW1wb3J0ICcuL2Nzcy9leGFtcGxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVYIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgYnVpbGRVWCgpIHtcblxuICAgIHZhciB3aWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICB3aWRnZXQuY2xhc3NMaXN0LmFkZCgnY2FwYWJsZS13aWRnZXQnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdpZGdldCk7XG4gICAgcmV0dXJuIHdpZGdldDtcbiAgfVxuXG4gIG9uUmVhZHkoY2FsbGJhY2spIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICByZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayh0aGF0LmJ1aWxkVVgoKSk7XG4gICAgfSk7XG5cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9