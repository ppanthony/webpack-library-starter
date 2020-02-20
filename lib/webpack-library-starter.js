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

/***/ "./node_modules/cssobj/dist/cssobj.umd.js":
/*!************************************************!*\
  !*** ./node_modules/cssobj/dist/cssobj.umd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  cssobj v1.3.6
  Thu Mar 22 2018 09:41:25 GMT+0800 (CST)
  commit 5199e3a94197a9cfdd0ecc4576dcaed71b01458d

  https://github.com/cssobj/cssobj
  Released under the MIT License.

  Components version info:
  - cssobj-core@1.1.9
    319d94d9d6c0ee455ed0dfe0c7f796298a145250
  - cssobj-plugin-cssom@4.1.4
    18b665ff6051ae754c0956ea1c278d0a4cda112c
  - cssobj-plugin-localize@3.3.2
    90529430922b4b3bbb27c70264157f1fae71eb62
*/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// helper functions for cssobj

// check n is numeric, or string of numeric
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function isPrimitive(val) {
  return val == null || (typeof val !== 'function' && typeof val !== 'object')
}

function own(o, k) {
  return {}.hasOwnProperty.call(o, k)
}

// set default option (not deeply)
function defaults(options, defaultOption) {
  options = options || {};
  for (var i in defaultOption) {
    if (own(defaultOption, i) && !(i in options)) options[i] = defaultOption[i];
  }
  return options
}

// Object.assgin polyfill
function _assign (target, source) {
  var s, from, key;
  var to = Object(target);
  for (s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (key in from) {
      if (own(from, key)) {
        to[key] = from[key];
      }
    }
  }
  return to
}
var assign = Object.assign || _assign;
// console.log(assign({}, {a:1}, {a:2}, {b:3}))

// convert js prop into css prop (dashified)
function dashify(str) {
  return str.replace(/[A-Z]/g, function(m) {
    return '-' + m.toLowerCase()
  })
}

// capitalize str
function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}

// random string, should used across all cssobj plugins
var random = (function () {
  var count = 0;
  return function (prefix) {
    count++;
    return '_' + (prefix||'') + Math.floor(Math.random() * Math.pow(2, 32)).toString(36) + count + '_'
  }
})();

function isString(value) {
  return typeof value === 'string'
}
// var obj={a:{b:{c:1}}};
// objSet(obj, {} ,{x:1});
// objSet(obj,'a.b.c.d.e',{x:1});
// objSet(obj,'a.f.d.s'.split('.'), {y:1});
// console.log(JSON.stringify(obj))


// return object path with only object type
function objGetObj(obj, _key) {
  var key = Array.isArray(_key) ? _key : String(_key).split('.');
  var p, n, ok=1;
  var ret = {ok:ok, path:key, obj:obj};
  for(p=0; p<key.length; p++) {
    n = key[p];
    if(!obj.hasOwnProperty(n) || isPrimitive(obj[n])) {
      ok = 0;
      break
    }
    obj = obj[n];
  }
  ret.ok= ok;
  ret.path = key.slice(0,p);
  ret.obj=obj;
  return ret
}
// var obj={a:{b:{c:1}}};
// console.log(objGetObj(obj))
// console.log(objGetObj(obj, []))
// console.log(objGetObj(obj, 'a'))
// console.log(objGetObj(obj, 'a.b'))
// console.log(objGetObj(obj, 'a.b.c.e'))

// extend obj from source, if it's no key in obj, create one
function extendObj (obj, key, source) {
  obj[key] = obj[key] || {};
  for(var args = arguments, i = 2; i < args.length; i++) {
    source = args[i];
    for (var k in source)
      if (own(source, k)) obj[key][k] = source[k];
  }
  return obj[key]
}

// ensure obj[k] as array, then push v into it
function arrayKV (obj, k, v, reverse, unique) {
  var d = obj[k];
  d = obj[k] = k in obj ? (Array.isArray(d) ? d : [d]) : [];
  if(unique && d.indexOf(v)>-1) return
  reverse ? d.unshift(v) : d.push(v);
}

// get parents array from node (when it's passed the test)
function getParents (node, test, key, childrenKey, parentKey) {
  var i, v, p = node, path = [];
  while (p) {
    if (test(p)) {
      if (childrenKey) {
        for (i = 0; i < path.length; i++) {
          arrayKV(p, childrenKey, path[i], false, true);
        }
      }
      if (path[0] && parentKey) {
        path[0][parentKey] = p;
      }
      path.unshift(p);
    }
    p = p.parent;
  }
  for (i = 0; i < path.length; i++) {
    v = path[i];
    path[i] = key ? v[key] : v;
  }

  return path
}

// split selector with splitter, aware of css attributes
function splitSelector (sel, splitter, inBracket) {
  if (sel.indexOf(splitter) < 0) return [sel]
  for (var c, i = 0, n = 0, instr = '', prev = 0, d = []; c = sel.charAt(i); i++) {
    if (instr) {
      if (c == instr && sel.charAt(i-1)!='\\') instr = '';
      continue
    }
    if (c == '"' || c == '\'') instr = c;
    /* istanbul ignore if  */
    if(!inBracket){
      if (c == '(' || c == '[') n++;
      if (c == ')' || c == ']') n--;
    }
    if (!n && c == splitter) d.push(sel.substring(prev, i)), prev = i + 1;
  }
  return d.concat(sel.substring(prev))
}

// checking for valid css value
function isValidCSSValue (val) {
  // falsy: '', NaN, Infinity, [], {}
  return typeof val=='string' && val || typeof val=='number' && isFinite(val)
}

// using var as iteral to help optimize
var KEY_ID = '$id';
var KEY_ORDER = '$order';
var KEY_TEST = '$test';

var TYPE_GROUP = 'group';

// helper function
var keys = Object.keys;

// type check helpers
var type = {}.toString;
var ARRAY = type.call([]);
var OBJECT = type.call({});

// only array, object now treated as iterable
function isIterable (v) {
  return type.call(v) == OBJECT || type.call(v) == ARRAY
}

// check if it's function
function isFunction (v) {
  return typeof v == 'function'
}

// regexp constants
// @page rule: CSSOM:
//   IE returned: not implemented error
//   FF, Chrome actually is not groupRule(not cssRules), same as @font-face rule
//   https://developer.mozilla.org/en-US/docs/Web/API/CSSGroupingRule
//   CSSPageRule is listed as derived from CSSGroupingRule, but not implemented yet.
//   Here added @page as GroupRule, but plugin should take care of this.
var reGroupRule = /^@(media|document|supports|page|[\w-]*keyframes)/i;
var reAtRule = /^\s*@/i;

/**
 * convert simple Object into node data
 *
 input data format:
 {"a":{"b":{"c":{"":[{color:1}]}}}, "abc":123, '@import':[2,3,4], '@media (min-width:320px)':{ d:{ok:1} }}
 *        1. every key is folder node
 *        2. "":[{rule1}, {rule2}] will split into several rules
 *        3. & will replaced by parent, \\& will escape
 *        4. all prop should be in dom.style camelCase
 *
 * @param {object|array} d - simple object data, or array
 * @param {object} result - the reulst object to store config and root node
 * @param {object} [previousNode] - also act as parent for next node
 * @param {boolean} init whether it's the root call
 * @returns {object} node data object
 */
function parseObj (d, result, node, init) {
  if (init) {
    result.nodes = [];
    result.ref = {};
    if (node) result.diff = {};
  }

  node = node || {};

  node.obj = d;

  if (type.call(d) == ARRAY) {
    var nodes = [];
    /* for array type, each children have a parent that not on the virtual tree,
       see test case of @media-array for example, the array node obj=Array, but have node.selPart(no selText)
       So have to set the right node.at/node.type from the node.key, to get right selText for children */
    node.at = reAtRule.exec(node.key);
    for(var i = 0; i < d.length; i++) {
      var prev = node[i];
      var n = parseObj(d[i], result, node[i] || {parent: node, src: d, parentNode: nodes, index: i});
      if(result.diff && prev!=n) arrayKV(result.diff, n ? 'added' : 'removed', n||prev);
      nodes.push(n);
    }
    return nodes
  } else {
    if (d[KEY_ID]) result.ref[d[KEY_ID]] = node;
    // it's no need to check (type.call(d) == OBJECT)
    // isIterable will filter only ARRAY/OBJECT
    // other types will goto parseProp function
    var prevVal = node.prevVal = node.lastVal;
    // at first stage check $test
    if (KEY_TEST in d) {
      var test = isFunction(d[KEY_TEST]) ? d[KEY_TEST](!node.disabled, node, result) : d[KEY_TEST];
      // if test false, remove node completely
      // if it's return function, going to stage 2 where all prop rendered
      if(!test) {
        return
      }
      node.test = test;
    }
    var children = node.children = node.children || {};
    node.lastRaw = node.rawVal || {};
    node.lastVal = {};
    node.rawVal = {};
    node.prop = {};
    node.diff = {};
    var order = d[KEY_ORDER] | 0;
    var funcArr = [];

    var processObj = function (obj, k, nodeObj) {
      var haveOldChild = k in children;
      var newNode = extendObj(children, k, nodeObj);
      // don't overwrite selPart for previous node
      newNode.selPart = newNode.selPart || splitSelector(k, ',');
      var n = parseObj(obj, result, newNode);
      if(n) children[k] = n;
      // it's new added node
      if (prevVal) !haveOldChild
        ? n && arrayKV(result.diff, 'added', n)
        : !n && arrayKV(result.diff, 'removed', children[k]);
      // for first time check, remove from parent (no diff)
      if(!n) delete nodeObj.parent.children[k];
    };

    // only there's no selText, getSel
    if(!('selText' in node)) getSel(node, result);

    for (var k in d) {
      // here $key start with $ is special
      // k[0] == '$' ... but the core will calc it into node.
      // Plugins should take $ with care and mark as a special case. e.g. ignore it
      if (!own(d, k)) continue
      if (!isIterable(d[k]) || type.call(d[k]) == ARRAY && !isIterable(d[k][0])) {

        // it's inline at-rule: @import etc.
        if (k[0]=='@') {
          processObj(
            // map @import: [a,b,c] into {a:1, b:1, c:1}
            [].concat(d[k]).reduce(function(prev, cur) {
              prev[cur] = ';';
              return prev
            }, {}), k, {parent: node, src: d, key: k, inline:true});
          continue
        }

        var r = function (_k) {
          // skip $test key
          if(_k != KEY_TEST) parseProp(node, d, _k, result);
        };
        order
          ? funcArr.push([r, k])
          : r(k);
      } else {
        processObj(d[k], k, {parent: node, src: d, key: k});
      }
    }

    // when it's second time visit node
    if (prevVal) {
      // children removed
      for (k in children) {
        if (!(k in d)) {
          arrayKV(result.diff, 'removed', children[k]);
          delete children[k];
        }
      }

      // prop changed
      var diffProp = function () {
        var newKeys = keys(node.lastVal);
        var removed = keys(prevVal).filter(function (x) { return newKeys.indexOf(x) < 0 });
        if (removed.length) node.diff.removed = removed;
        if (keys(node.diff).length) arrayKV(result.diff, 'changed', node);
      };
      order
        ? funcArr.push([diffProp, null])
        : diffProp();
    }

    if (order) arrayKV(result, '_order', {order: order, func: funcArr});
    result.nodes.push(node);
    return node
  }

}

function getSel(node, result) {

  var opt = result.config;

  // array index don't have key,
  // fetch parent key as ruleNode
  var ruleNode = getParents(node, function (v) {
    return v.key
  }).pop();

  node.parentRule = getParents(node.parent, function (n) {
    return n.type == TYPE_GROUP
  }).pop() || null;

  if (ruleNode) {
    var isMedia, sel = ruleNode.key;
    var groupRule = sel.match(reGroupRule);
    if (groupRule) {
      node.type = TYPE_GROUP;
      node.at = groupRule.pop();
      isMedia = node.at == 'media';

      // only media allow nested and join, and have node.selPart
      if (isMedia) node.selPart = splitSelector(sel.replace(reGroupRule, ''), ',');

      // combinePath is array, 'str' + array instead of array.join(',')
      node.groupText = isMedia
        ? '@' + node.at + combinePath(getParents(node, function (v) {
          return v.type == TYPE_GROUP
        }, 'selPart', 'selChild', 'selParent'), '', ' and')
      : sel;

      node.selText = getParents(node, function (v) {
        return v.selText && !v.at
      }, 'selText').pop() || '';
    } else if (reAtRule.test(sel)) {
      node.type = 'at';
      node.selText = sel;
    } else {
      node.selText = '' + combinePath(getParents(ruleNode, function (v) {
        return v.selPart && !v.at
      }, 'selPart', 'selChild', 'selParent'), '', ' ', true), opt;
    }

    node.selText = applyPlugins(opt, 'selector', node.selText, node, result);
    if (node.selText) node.selTextPart = splitSelector(node.selText, ',');

    if (node !== ruleNode) node.ruleNode = ruleNode;
  }

}

/**
 * Parse property of object d's key, with propKey as a candidate key name
 * @param {} node: v-node of cssobj
 * @param {} d: source object
 * @param {} key: any numeric will be ignored, then converted to string
 * @param {} result: cssobj result object
 * @param {} propKey: candidate prop key name

 Accept only key as string, numeric will be ignored

 color: function(){return ['red', 'blue']} will expand
 color: function(){return {fontSize: '12px', float:'right'}} will be replaced

 */
function parseProp (node, d, key, result, propKey) {
  var prevVal = node.prevVal;
  var lastVal = node.lastVal;

  // the prop name get from object key or candidate key
  var propName = isNumeric(key) ? propKey : key;

  // NEXT: propName can be changed by user
  // now it's not used, since propName ensure exists
  // corner case: propKey==='' ?? below line will do wrong!!
  // if(!propName) return

  var raw = node.lastRaw[propName],
      prev = prevVal && prevVal[propName],
      argObj = {node:node, result:result};

  if (raw) argObj.raw = raw[0];

  ![].concat(d[key]).forEach(function (v) {
    // prepare value function args
    argObj.cooked = prev;

    // pass lastVal if it's function
    argObj.raw = raw = isFunction(v)
        ? v(argObj)
        : v;

    var val = applyPlugins(result.config, 'value', raw, propName, node, result, propKey);

    // check and merge only format as Object || Array of Object, other format not accepted!
    if (isIterable(val)) {
      for (var k in val) {
        if (own(val, k)) parseProp(node, val, k, result, propName);
      }
    } else {
      arrayKV (
        node.rawVal,
        propName,
        raw,
        true
      );
      if (isValidCSSValue(val)) {
        // only valid val can enter node.prop and lastVal
        // push every val to prop
        arrayKV(
          node.prop,
          propName,
          val,
          true
        );
        prev = lastVal[propName] = val;
      }
    }
  });
  if (prevVal) {
    if (!(propName in prevVal)) {
      arrayKV(node.diff, 'added', propName);
    } else if (prevVal[propName] != lastVal[propName]) {
      arrayKV(node.diff, 'changed', propName);
    }
  }
}

function combinePath (array, parentSel, seperator, replaceAmpersand) {
  return !array.length ? parentSel : array[0].reduce(function (result, value) {
    var part, str = parentSel ? parentSel + seperator : parentSel;
    if (replaceAmpersand) {
      part = splitSelector( value, '&' );
      str = part.length > 1 ? part.join(parentSel) : str + value;
    } else {
      str += value;
    }
    return result.concat(combinePath(array.slice(1), str, seperator, replaceAmpersand))
  }, [])
}

function applyPlugins (opt, type) {
  var args = [].slice.call(arguments, 2);
  var plugin = opt.plugins;
  // plugin is always Array, so here we don't check it
  return [].concat(plugin).reduce(
    function (pre, plugin) { return plugin[type] ? plugin[type].apply(null, [pre].concat(args)) : pre },
    args.shift()
  )
}

function applyOrder (opt) {
  if (opt._order==null) return
  opt._order
    .sort(function (a, b) {
      return a.order - b.order
    })
    .forEach(function (v) {
      v.func.forEach(function (f) {
        f[0](f[1]);
      });
    });
  opt._order = [];
}

function cssobj (config) {

  config = defaults(config, {
    plugins: [],
    intros: []
  });

  return function (initObj, initState) {
    var updater = function (obj, state) {
      if (arguments.length>1) result.state = state || {};
      if (obj) result.obj = isFunction(obj) ? obj() : obj;
      result.root = parseObj(extendObj({}, '', result.intro, result.obj), result, result.root, true);
      applyOrder(result);
      result = applyPlugins(config, 'post', result);
      isFunction(config.onUpdate) && config.onUpdate(result);
      return result
    };

    var result = {
      intro: {},
      update: updater,
      config: config
    };

    ![].concat(config.intros).forEach(
      function(v) {
        extendObj(result, 'intro', isFunction(v) ? v(result) : v);
      }
    );

    updater(initObj, initState || config.state);

    return result
  }
}

// plugin for cssobj

function createDOM (rootDoc, id, option) {
  var el = rootDoc.getElementById(id);
  var head = rootDoc.getElementsByTagName('head')[0];
  if(el) {
    if(option.append) return el
    el.parentNode && el.parentNode.removeChild(el);
  }
  el = rootDoc.createElement('style');
  head.appendChild(el);
  el.setAttribute('id', id);
  if (option.attrs)
    for (var i in option.attrs) {
      el.setAttribute(i, option.attrs[i]);
    }
  return el
}

var addCSSRule = function (parent, selector, body, node) {
  var isImportRule = /@import/i.test(node.selText);
  var rules = parent.cssRules || parent.rules;
  var index=0;

  var omArr = [];
  var str = node.inline
      ? body.map(function(v) {
        return [node.selText, ' ', v]
      })
      : [[selector, '{', body.join(''), '}']];

  str.forEach(function(text) {
    if (parent.cssRules) {
      try {
        index = isImportRule ? 0 : rules.length;
        parent.appendRule
          ? parent.appendRule(text.join(''))  // keyframes.appendRule return undefined
          : parent.insertRule(text.join(''), index); //firefox <16 also return undefined...

        omArr.push(rules[index]);

      } catch(e) {
        // modern browser with prefix check, now only -webkit-
        // http://shouldiprefix.com/#animations
        // if(selector && selector.indexOf('@keyframes')==0) for(var ret, i = 0, len = cssPrefixes.length; i < len; i++) {
        //   ret = addCSSRule(parent, selector.replace('@keyframes', '@-'+cssPrefixes[i].toLowerCase()+'-keyframes'), body, node)
        //   if(ret.length) return ret
        // }
        // the rule is not supported, fail silently
        // console.log(e, selector, body, pos)
      }
    } else if (parent.addRule) {
[].concat(selector).forEach(function (sel) {
        try {
          // remove ALL @-rule support for old IE
          if(isImportRule) {
            index = parent.addImport(text[2]);
            omArr.push(parent.imports[index]);

            // IE addPageRule() return: not implemented!!!!
            // } else if (/@page/.test(sel)) {
            //   index = parent.addPageRule(sel, text[2], -1)
            //   omArr.push(rules[rules.length-1])

          } else if (!/^\s*@/.test(sel)) {
            parent.addRule(sel, text[2], rules.length);
            // old IE have bug: addRule will always return -1!!!
            omArr.push(rules[rules.length-1]);
          }
        } catch(e) {
          // console.log(e, selector, body)
        }
      });
    }
  });

  return omArr
};

function getBodyCss (node) {
  // get cssText from prop
  var prop = node.prop;
  return Object.keys(prop).map(function (k) {
    // skip $prop, e.g. $id, $order
    if(k[0]=='$') return ''
    for (var v, ret='', i = prop[k].length; i--;) {
      v = prop[k][i];

      // value expand & merge should be done as value function/plugin in cssobj-core >=0.5.0
      ret += node.inline ? k : prefixProp(k, true) + ':' + v + ';';
    }
    return ret
  })
}

// vendor prefix support
// borrowed from jQuery 1.12
var	cssPrefixes = [ "Webkit", "Moz", "ms", "O" ];
var cssPrefixesReg = new RegExp('^(?:' + cssPrefixes.join('|') + ')[A-Z]');
var	emptyStyle = document.createElement( "div" ).style;
var testProp  = function (list) {
  for(var i = list.length; i--;) {
    if(list[i] in emptyStyle) return list[i]
  }
};

//
/**
 * cache cssProps
 * the value is JS format, will be used:
 * 1. diff & patch properties for CSSOM
 * 2. vendorPrefix property name checking
 */
var	cssProps = {
  // normalize float css property
  'float': testProp(['styleFloat', 'cssFloat', 'float'])
};


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

  // shortcut for names that are not vendor prefixed
  // when name already have '-' as first char, don't prefix
  if ( name in emptyStyle || name[0] == '-') return

  // check for vendor prefixed names
  var preName, capName = capitalize(name);
  var i = cssPrefixes.length;

  while ( i-- ) {
    preName = cssPrefixes[ i ] + capName;
    if ( preName in emptyStyle ) return preName
  }
}

// apply prop to get right vendor prefix
// inCSS false=camelcase; true=dashed
function prefixProp (name, inCSS) {
  // $prop will skip
  if(name[0]=='$') return ''
  // find name and cache the name for next time use
  var retName = cssProps[ name ] ||
      ( cssProps[ name ] = vendorPropName( name ) || name);
  return inCSS   // if hasPrefix in prop
    ? dashify(cssPrefixesReg.test(retName) ? capitalize(retName) : name=='float' && name || retName)  // fix float in CSS, avoid return cssFloat
  : retName
}

/**
 * Get value and important flag from value str
 * @param {CSSStyleRule} rule css style rule object
 * @param {string} prop prop to set
 * @param {string} val value string
 */
function setCSSProperty (styleObj, prop, val) {
  var value;
  var important = /^(.*)!(important)\s*$/i.exec(val);
  var propCamel = prefixProp(prop);
  var propDash = prefixProp(prop, true);
  if(important) {
    value = important[1];
    important = important[2];
    if(styleObj.setProperty) styleObj.setProperty(propDash, value, important);
    else {
      // for old IE, cssText is writable, and below is valid for contain !important
      // don't use styleObj.setAttribute since it's not set important
      // should do: delete styleObj[propCamel], but not affect result

      // only work on <= IE8: s.style['FONT-SIZE'] = '12px!important'
      styleObj[propDash.toUpperCase()] = val;
      // refresh cssText, the whole rule!
      styleObj.cssText = styleObj.cssText;
    }
  } else {
    styleObj[propCamel] = val;
  }
}

function cssobj_plugin_post_cssom (option) {
  option = option || {};

  // prefixes array can change the global default vendor prefixes
  if(option.vendors) cssPrefixes = option.vendors;

  var id = option.id || 'cssobj' + random();

  var frame = option.frame;
  var rootDoc = frame ? frame.contentDocument||frame.contentWindow.document : document;
  var dom = createDOM(rootDoc, id, option);
  var sheet = dom.sheet || dom.styleSheet;

  // sheet.insertRule ("@import url('test.css');", 0)  // it's ok to insert @import, but only at top
  // sheet.insertRule ("@charset 'UTF-8';", 0)  // throw SyntaxError https://www.w3.org/Bugs/Public/show_bug.cgi?id=22207

  // IE has a bug, first comma rule not work! insert a dummy here
  // addCSSRule(sheet, 'html,body', [], {})

  // helper regexp & function
  // @page in FF not allowed pseudo @page :first{}, with SyntaxError: An invalid or illegal string was specified
  var reWholeRule = /page/i;
  var atomGroupRule = function (node) {
    return !node ? false : reWholeRule.test(node.at) || node.parentRule && reWholeRule.test(node.parentRule.at)
  };

  var getParent = function (node) {
    var p = 'omGroup' in node ? node : node.parentRule;
    return p && p.omGroup || sheet
  };

  var validParent = function (node) {
    return !node.parentRule || node.parentRule.omGroup !== null
  };

  var removeRule = function(parent, rule, index) {
    return parent.deleteRule
        ? parent.deleteRule(rule.keyText || index)
        : parent.removeRule(index)
  };

  var clearRoot = function (root) {
    var rules = root.cssRules || root.rules;
    // console.log('clearRoot', sheet, rules)
    for(var i=rules.length; i--;){
      removeRule(root, rules[i], i);
      // console.log('clear rule', i, rules[i])
    }
  };
  var removeOneRule = function (rule) {
    if (!rule) return
    var parent = rule.parentRule || sheet;
    var rules = parent.cssRules || parent.rules;
    var removeFunc = function (v, i) {
      if((v===rule)) {
        removeRule(parent, rule, i);
        return true
      }
    }
    // sheet.imports have bugs in IE:
    // > sheet.removeImport(0)  it's work, then again
    // > sheet.removeImport(0)  it's not work!!!
    //
    // parent.imports && [].some.call(parent.imports, removeFunc)
    ;[].some.call(rules, removeFunc);
  };

  function removeNode (node) {
    // remove mediaStore for old IE
    var groupIdx = mediaStore.indexOf(node);
    if (groupIdx > -1) {
      // before remove from mediaStore
      // don't forget to remove all children, by a walk
      node.mediaEnabled = false;
      walk(node);
      mediaStore.splice(groupIdx, 1);
    }
[node.omGroup].concat(node.omRule).forEach(removeOneRule);
  }

  // helper function for addNormalrule
  var addNormalRule = function (node, selText, cssText) {
    if(!cssText) return
    // get parent to add
    var parent = getParent(node);
    var parentRule = node.parentRule;
    if (validParent(node))
      return node.omRule = addCSSRule(parent, selText, cssText, node)
    else if (parentRule) {
      // for old IE not support @media, check mediaEnabled, add child nodes
      if (parentRule.mediaEnabled) {
        [].concat(node.omRule).forEach(removeOneRule);
        return node.omRule = addCSSRule(parent, selText, cssText, node)
      } else if (node.omRule) {
        node.omRule.forEach(removeOneRule);
        delete node.omRule;
      }
    }
  };

  var mediaStore = [];

  var checkMediaList = function () {
    mediaStore.forEach(function (v) {
      v.mediaEnabled = v.mediaTest(rootDoc);
      walk(v);
    });
  };

  if (window.attachEvent) {
    window.attachEvent('onresize', checkMediaList);
  } else if (window.addEventListener) {
    window.addEventListener('resize', checkMediaList, true);
  }

  var walk = function (node, store) {
    if (!node) return

    // cssobj generate vanilla Array, it's safe to use constructor, fast
    if (node.constructor === Array) return node.map(function (v) {walk(v, store);})

    // skip $key node
    if(node.key && node.key[0]=='$' || !node.prop) return

    // nested media rule will pending proceed
    if(node.at=='media' && node.selParent && node.selParent.postArr) {
      return node.selParent.postArr.push(node)
    }

    node.postArr = [];
    var children = node.children;
    var isGroup = node.type == 'group';

    if (atomGroupRule(node)) store = store || [];

    if (isGroup) {
      // if it's not @page, @keyframes (which is not groupRule in fact)
      if (!atomGroupRule(node)) {
        var $groupTest = node.obj.$groupTest;
        var presetMedia = node.at=='media' && option.media;
        if ($groupTest || presetMedia) {
          // console.log('start test media', presetMedia, $groupTest)
          node.omGroup = null;
        // when add media rule failed, build test function then check on window.resize
        // if (!old) {
          // build test function from @media rule

          var mediaTest = $groupTest 
          || (presetMedia && function(doc) {
              var media = option.media;
              return media ? node.selPart.some(function(part){
                return new RegExp(media, 'i').test(part.trim())
              }) : true
            })
          || function(){return true};

          try {
            // first test if it's valid function
            var mediaEnabled = mediaTest(rootDoc);
            node.mediaTest = mediaTest;
            node.mediaEnabled = mediaEnabled;
            mediaStore.push(node);
          } catch(e) {}
        // }

        } else {
          
          [''].concat(cssPrefixes).some(function (v) {
            return node.omGroup = addCSSRule(
              // all groupRule will be added to root sheet
              sheet,
              '@' + (v ? '-' + v.toLowerCase() + '-' : v) + node.groupText.slice(1), [], node
            ).pop() || null
          });
        }

      }
    }

    var selText = node.selTextPart;
    var cssText = getBodyCss(node);

    // it's normal css rule
    if (cssText.join('')) {
      if (!atomGroupRule(node)) {
        addNormalRule(node, selText, cssText);
      }
      store && store.push(selText ? selText + ' {' + cssText.join('') + '}' : cssText);
    }

    for (var c in children) {
      // empty key will pending proceed
      if (c === '') node.postArr.push(children[c]);
      else walk(children[c], store);
    }

    if (isGroup) {
      // if it's @page, @keyframes
      if (atomGroupRule(node) && validParent(node)) {
        addNormalRule(node, node.groupText, store);
        store = null;
      }
    }

    // media rules need a stand alone block
    var postArr = node.postArr;
    delete node.postArr;
    postArr.map(function (v) {
      walk(v, store);
    });
  };

  var prevMedia = option.media;
  return {
    post: function (result) {
      var mediaChanged = prevMedia!=option.media;
      prevMedia = option.media;
      checkMediaList();

      result.set = function(cssPath, newObj){
        var path = Array.isArray(cssPath) ? cssPath : [cssPath];
        var srcObj = result.obj;
        if(isString(path[0]) && path[0][0]==='$') {
          srcObj = result.ref[path.shift().slice(1)].obj;
        }
        var ret = objGetObj( srcObj, path );
        if(ret.ok){
          assign(ret.obj, newObj);
        }
        result.update();
      };

      result.cssdom = dom;
      if (!result.diff || mediaChanged) {
        // it's first time render
        if(mediaChanged) {
          // if media changed, reinit, clear all rules
          // console.log('clearRoot', prevMedia, option.media)
          mediaStore = [];
          clearRoot(sheet);
        }
        walk(result.root);
      } else {
        // it's not first time, patch the diff result to CSSOM
        var diff = result.diff;

        // node added
        if (diff.added) diff.added.forEach(function (node) {
          walk(node);
        });

        // node removed
        if (diff.removed) diff.removed.forEach(function (node) {
          // also remove all child group & sel
          node.selChild && node.selChild.forEach(removeNode);
          removeNode(node);
        });

        // node changed, find which part should be patched
        if (diff.changed) diff.changed.forEach(function (node) {
          var om = node.omRule;
          var diff = node.diff;

          if (!om) om = addNormalRule(node, node.selTextPart, getBodyCss(node))

          // added have same action as changed, can be merged... just for clarity
          ;[].concat(diff.added, diff.changed).forEach(function (v) {
            v && om && om.forEach(function (rule) {
              try{
                setCSSProperty(rule.style, v, node.prop[v][0]);
              }catch(e){}
            });
          });

          diff.removed && diff.removed.forEach(function (v) {
            var prefixV = prefixProp(v, true);
            prefixV && om && om.forEach(function (rule) {
              try{
                rule.style.removeProperty
                  ? rule.style.removeProperty(prefixV)
                  : rule.style.removeAttribute(prefixV);
              }catch(e){}
            });
          });
        });
      }

      return result
    }
  }
}

// cssobj plugin

var classNameRe = /[ \~\\@$%^&\*\(\)\+\=,/';\:"?><[\]\\{}|`]/;

function cssobj_plugin_selector_localize(option) {

  option = option || {};

  var space = option.space = typeof option.space!=='string'
      ? (typeof option.random == 'function' ?  option.random() : random())
      : option.space;

  var localNames = option.localNames = option.localNames || {};

  var localize = function(name) {
    return name[0]=='!'
      ? name.substr(1)
      : (name in localNames
         ? localNames[name]
         : name + space)
  };

  var parseSel = function(str) {
    if(!isString(str)) return str
    var part = splitSelector(str, '.', true);
    var sel=part[0];
    for(var i = 1, p, pos, len = part.length; i < len; i++) {
      p = part[i];
      if(!p) {
        sel += '.';
        continue
      }
      pos = p.search(classNameRe);
      sel += '.' + (pos<0 ? localize(p) : localize(p.substr(0,pos)) + p.substr(pos));
    }
    return sel
  };

  var mapClass = function(str) {
    return isString(str)
      ? parseSel(str.replace(/\s+\.?/g, '.').replace(/^([^:\s.])/i, '.$1')).replace(/\./g, ' ').trim()
      : str
  };

  var setResult = function(result) {
    result.space = space;
    result.localNames = localNames;
    result.mapSel = parseSel;
    result.mapClass = mapClass;
    return result
  };

  return {
    selector: function localizeName (sel, node, result) {
      // don't touch at rule's selText
      // it's copied from parent, which already localized
      if(node.at) return sel
      if(!result.mapSel) setResult(result);
      return parseSel(sel)
    },
    post: setResult
  }
}

// cssobj is simply an intergration for cssobj-core, cssom

function cssobj$1 (obj, config, state) {
  config = config || {};

  var local = config.local;
  config.local = !local
    ? {space: ''}
  : local && typeof local === 'object' ? local : {};

  config.plugins = [].concat(
    config.plugins || [],
    cssobj_plugin_selector_localize(config.local),
    cssobj_plugin_post_cssom(config.cssom)
  );

  return cssobj(config)(obj, state)
}

cssobj$1.version = '1.3.6';

return cssobj$1;

})));


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
    value: function init() {
      var ux = new _ux.default();
      ux.onReady();
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domCheck = new _domchecker.default();
domCheck.init();

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

var _cssobj = _interopRequireDefault(__webpack_require__(/*! cssobj */ "./node_modules/cssobj/dist/cssobj.umd.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var widgetStyles = {
        div: {
          backgroundColor: 'yellow',
          color: 'red',
          // simulate 50vh in CSS3
          height: function height() {
            return window.innerHeight / 2 + 'px';
          }
        }
      };
      var result = (0, _cssobj.default)(widgetStyles);

      window.onresize = function () {
        return result.update();
      };
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var that = this;
      ready(function () {
        that.buildUX();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1saWJyYXJ5LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvY3Nzb2JqL2Rpc3QvY3Nzb2JqLnVtZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC1yZWFkeS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWxpYnJhcnktc3RhcnRlci8uL3NyYy9kb21jaGVja2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stbGlicmFyeS1zdGFydGVyLy4vc3JjL3V4LmpzIl0sIm5hbWVzIjpbIkRvbUNoZWNrZXIiLCJ1eCIsIm9uUmVhZHkiLCJkb21DaGVjayIsImluaXQiLCJyZWFkeSIsInJlcXVpcmUiLCJVWCIsIndpZGdldFN0eWxlcyIsImRpdiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJyZXN1bHQiLCJvbnJlc2l6ZSIsInVwZGF0ZSIsInRoYXQiLCJidWlsZFVYIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFn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QUFDRCxPQUZJLENBQUw7QUFJRCIsImZpbGUiOiJ3ZWJwYWNrLWxpYnJhcnktc3RhcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2VicGFjay1saWJyYXJ5LXN0YXJ0ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2VicGFjay1saWJyYXJ5LXN0YXJ0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2VicGFjay1saWJyYXJ5LXN0YXJ0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKlxuICBjc3NvYmogdjEuMy42XG4gIFRodSBNYXIgMjIgMjAxOCAwOTo0MToyNSBHTVQrMDgwMCAoQ1NUKVxuICBjb21taXQgNTE5OWUzYTk0MTk3YTljZmRkMGVjYzQ1NzZkY2FlZDcxYjAxNDU4ZFxuXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NvYmovY3Nzb2JqXG4gIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuICBDb21wb25lbnRzIHZlcnNpb24gaW5mbzpcbiAgLSBjc3NvYmotY29yZUAxLjEuOVxuICAgIDMxOWQ5NGQ5ZDZjMGVlNDU1ZWQwZGZlMGM3Zjc5NjI5OGExNDUyNTBcbiAgLSBjc3NvYmotcGx1Z2luLWNzc29tQDQuMS40XG4gICAgMThiNjY1ZmY2MDUxYWU3NTRjMDk1NmVhMWMyNzhkMGE0Y2RhMTEyY1xuICAtIGNzc29iai1wbHVnaW4tbG9jYWxpemVAMy4zLjJcbiAgICA5MDUyOTQzMDkyMmI0YjNiYmIyN2M3MDI2NDE1N2YxZmFlNzFlYjYyXG4qL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnY3Nzb2JqJywgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLmNzc29iaiA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuLy8gaGVscGVyIGZ1bmN0aW9ucyBmb3IgY3Nzb2JqXG5cbi8vIGNoZWNrIG4gaXMgbnVtZXJpYywgb3Igc3RyaW5nIG9mIG51bWVyaWNcbmZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobilcbn1cblxuZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbCB8fCAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsICE9PSAnb2JqZWN0Jylcbn1cblxuZnVuY3Rpb24gb3duKG8sIGspIHtcbiAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwobywgaylcbn1cblxuLy8gc2V0IGRlZmF1bHQgb3B0aW9uIChub3QgZGVlcGx5KVxuZnVuY3Rpb24gZGVmYXVsdHMob3B0aW9ucywgZGVmYXVsdE9wdGlvbikge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgZm9yICh2YXIgaSBpbiBkZWZhdWx0T3B0aW9uKSB7XG4gICAgaWYgKG93bihkZWZhdWx0T3B0aW9uLCBpKSAmJiAhKGkgaW4gb3B0aW9ucykpIG9wdGlvbnNbaV0gPSBkZWZhdWx0T3B0aW9uW2ldO1xuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbi8vIE9iamVjdC5hc3NnaW4gcG9seWZpbGxcbmZ1bmN0aW9uIF9hc3NpZ24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBzLCBmcm9tLCBrZXk7XG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICBmb3IgKHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG4gICAgZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuICAgIGZvciAoa2V5IGluIGZyb20pIHtcbiAgICAgIGlmIChvd24oZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IF9hc3NpZ247XG4vLyBjb25zb2xlLmxvZyhhc3NpZ24oe30sIHthOjF9LCB7YToyfSwge2I6M30pKVxuXG4vLyBjb252ZXJ0IGpzIHByb3AgaW50byBjc3MgcHJvcCAoZGFzaGlmaWVkKVxuZnVuY3Rpb24gZGFzaGlmeShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbihtKSB7XG4gICAgcmV0dXJuICctJyArIG0udG9Mb3dlckNhc2UoKVxuICB9KVxufVxuXG4vLyBjYXBpdGFsaXplIHN0clxuZnVuY3Rpb24gY2FwaXRhbGl6ZSAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpXG59XG5cbi8vIHJhbmRvbSBzdHJpbmcsIHNob3VsZCB1c2VkIGFjcm9zcyBhbGwgY3Nzb2JqIHBsdWdpbnNcbnZhciByYW5kb20gPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgY291bnQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIGNvdW50Kys7XG4gICAgcmV0dXJuICdfJyArIChwcmVmaXh8fCcnKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDIsIDMyKSkudG9TdHJpbmcoMzYpICsgY291bnQgKyAnXydcbiAgfVxufSkoKTtcblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cbi8vIHZhciBvYmo9e2E6e2I6e2M6MX19fTtcbi8vIG9ialNldChvYmosIHt9ICx7eDoxfSk7XG4vLyBvYmpTZXQob2JqLCdhLmIuYy5kLmUnLHt4OjF9KTtcbi8vIG9ialNldChvYmosJ2EuZi5kLnMnLnNwbGl0KCcuJyksIHt5OjF9KTtcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9iaikpXG5cblxuLy8gcmV0dXJuIG9iamVjdCBwYXRoIHdpdGggb25seSBvYmplY3QgdHlwZVxuZnVuY3Rpb24gb2JqR2V0T2JqKG9iaiwgX2tleSkge1xuICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShfa2V5KSA/IF9rZXkgOiBTdHJpbmcoX2tleSkuc3BsaXQoJy4nKTtcbiAgdmFyIHAsIG4sIG9rPTE7XG4gIHZhciByZXQgPSB7b2s6b2ssIHBhdGg6a2V5LCBvYmo6b2JqfTtcbiAgZm9yKHA9MDsgcDxrZXkubGVuZ3RoOyBwKyspIHtcbiAgICBuID0ga2V5W3BdO1xuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkobikgfHwgaXNQcmltaXRpdmUob2JqW25dKSkge1xuICAgICAgb2sgPSAwO1xuICAgICAgYnJlYWtcbiAgICB9XG4gICAgb2JqID0gb2JqW25dO1xuICB9XG4gIHJldC5vaz0gb2s7XG4gIHJldC5wYXRoID0ga2V5LnNsaWNlKDAscCk7XG4gIHJldC5vYmo9b2JqO1xuICByZXR1cm4gcmV0XG59XG4vLyB2YXIgb2JqPXthOntiOntjOjF9fX07XG4vLyBjb25zb2xlLmxvZyhvYmpHZXRPYmoob2JqKSlcbi8vIGNvbnNvbGUubG9nKG9iakdldE9iaihvYmosIFtdKSlcbi8vIGNvbnNvbGUubG9nKG9iakdldE9iaihvYmosICdhJykpXG4vLyBjb25zb2xlLmxvZyhvYmpHZXRPYmoob2JqLCAnYS5iJykpXG4vLyBjb25zb2xlLmxvZyhvYmpHZXRPYmoob2JqLCAnYS5iLmMuZScpKVxuXG4vLyBleHRlbmQgb2JqIGZyb20gc291cmNlLCBpZiBpdCdzIG5vIGtleSBpbiBvYmosIGNyZWF0ZSBvbmVcbmZ1bmN0aW9uIGV4dGVuZE9iaiAob2JqLCBrZXksIHNvdXJjZSkge1xuICBvYmpba2V5XSA9IG9ialtrZXldIHx8IHt9O1xuICBmb3IodmFyIGFyZ3MgPSBhcmd1bWVudHMsIGkgPSAyOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHNvdXJjZSA9IGFyZ3NbaV07XG4gICAgZm9yICh2YXIgayBpbiBzb3VyY2UpXG4gICAgICBpZiAob3duKHNvdXJjZSwgaykpIG9ialtrZXldW2tdID0gc291cmNlW2tdO1xuICB9XG4gIHJldHVybiBvYmpba2V5XVxufVxuXG4vLyBlbnN1cmUgb2JqW2tdIGFzIGFycmF5LCB0aGVuIHB1c2ggdiBpbnRvIGl0XG5mdW5jdGlvbiBhcnJheUtWIChvYmosIGssIHYsIHJldmVyc2UsIHVuaXF1ZSkge1xuICB2YXIgZCA9IG9ialtrXTtcbiAgZCA9IG9ialtrXSA9IGsgaW4gb2JqID8gKEFycmF5LmlzQXJyYXkoZCkgPyBkIDogW2RdKSA6IFtdO1xuICBpZih1bmlxdWUgJiYgZC5pbmRleE9mKHYpPi0xKSByZXR1cm5cbiAgcmV2ZXJzZSA/IGQudW5zaGlmdCh2KSA6IGQucHVzaCh2KTtcbn1cblxuLy8gZ2V0IHBhcmVudHMgYXJyYXkgZnJvbSBub2RlICh3aGVuIGl0J3MgcGFzc2VkIHRoZSB0ZXN0KVxuZnVuY3Rpb24gZ2V0UGFyZW50cyAobm9kZSwgdGVzdCwga2V5LCBjaGlsZHJlbktleSwgcGFyZW50S2V5KSB7XG4gIHZhciBpLCB2LCBwID0gbm9kZSwgcGF0aCA9IFtdO1xuICB3aGlsZSAocCkge1xuICAgIGlmICh0ZXN0KHApKSB7XG4gICAgICBpZiAoY2hpbGRyZW5LZXkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcnJheUtWKHAsIGNoaWxkcmVuS2V5LCBwYXRoW2ldLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXRoWzBdICYmIHBhcmVudEtleSkge1xuICAgICAgICBwYXRoWzBdW3BhcmVudEtleV0gPSBwO1xuICAgICAgfVxuICAgICAgcGF0aC51bnNoaWZ0KHApO1xuICAgIH1cbiAgICBwID0gcC5wYXJlbnQ7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICB2ID0gcGF0aFtpXTtcbiAgICBwYXRoW2ldID0ga2V5ID8gdltrZXldIDogdjtcbiAgfVxuXG4gIHJldHVybiBwYXRoXG59XG5cbi8vIHNwbGl0IHNlbGVjdG9yIHdpdGggc3BsaXR0ZXIsIGF3YXJlIG9mIGNzcyBhdHRyaWJ1dGVzXG5mdW5jdGlvbiBzcGxpdFNlbGVjdG9yIChzZWwsIHNwbGl0dGVyLCBpbkJyYWNrZXQpIHtcbiAgaWYgKHNlbC5pbmRleE9mKHNwbGl0dGVyKSA8IDApIHJldHVybiBbc2VsXVxuICBmb3IgKHZhciBjLCBpID0gMCwgbiA9IDAsIGluc3RyID0gJycsIHByZXYgPSAwLCBkID0gW107IGMgPSBzZWwuY2hhckF0KGkpOyBpKyspIHtcbiAgICBpZiAoaW5zdHIpIHtcbiAgICAgIGlmIChjID09IGluc3RyICYmIHNlbC5jaGFyQXQoaS0xKSE9J1xcXFwnKSBpbnN0ciA9ICcnO1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT0gJ1wiJyB8fCBjID09ICdcXCcnKSBpbnN0ciA9IGM7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICAgIGlmKCFpbkJyYWNrZXQpe1xuICAgICAgaWYgKGMgPT0gJygnIHx8IGMgPT0gJ1snKSBuKys7XG4gICAgICBpZiAoYyA9PSAnKScgfHwgYyA9PSAnXScpIG4tLTtcbiAgICB9XG4gICAgaWYgKCFuICYmIGMgPT0gc3BsaXR0ZXIpIGQucHVzaChzZWwuc3Vic3RyaW5nKHByZXYsIGkpKSwgcHJldiA9IGkgKyAxO1xuICB9XG4gIHJldHVybiBkLmNvbmNhdChzZWwuc3Vic3RyaW5nKHByZXYpKVxufVxuXG4vLyBjaGVja2luZyBmb3IgdmFsaWQgY3NzIHZhbHVlXG5mdW5jdGlvbiBpc1ZhbGlkQ1NTVmFsdWUgKHZhbCkge1xuICAvLyBmYWxzeTogJycsIE5hTiwgSW5maW5pdHksIFtdLCB7fVxuICByZXR1cm4gdHlwZW9mIHZhbD09J3N0cmluZycgJiYgdmFsIHx8IHR5cGVvZiB2YWw9PSdudW1iZXInICYmIGlzRmluaXRlKHZhbClcbn1cblxuLy8gdXNpbmcgdmFyIGFzIGl0ZXJhbCB0byBoZWxwIG9wdGltaXplXG52YXIgS0VZX0lEID0gJyRpZCc7XG52YXIgS0VZX09SREVSID0gJyRvcmRlcic7XG52YXIgS0VZX1RFU1QgPSAnJHRlc3QnO1xuXG52YXIgVFlQRV9HUk9VUCA9ICdncm91cCc7XG5cbi8vIGhlbHBlciBmdW5jdGlvblxudmFyIGtleXMgPSBPYmplY3Qua2V5cztcblxuLy8gdHlwZSBjaGVjayBoZWxwZXJzXG52YXIgdHlwZSA9IHt9LnRvU3RyaW5nO1xudmFyIEFSUkFZID0gdHlwZS5jYWxsKFtdKTtcbnZhciBPQkpFQ1QgPSB0eXBlLmNhbGwoe30pO1xuXG4vLyBvbmx5IGFycmF5LCBvYmplY3Qgbm93IHRyZWF0ZWQgYXMgaXRlcmFibGVcbmZ1bmN0aW9uIGlzSXRlcmFibGUgKHYpIHtcbiAgcmV0dXJuIHR5cGUuY2FsbCh2KSA9PSBPQkpFQ1QgfHwgdHlwZS5jYWxsKHYpID09IEFSUkFZXG59XG5cbi8vIGNoZWNrIGlmIGl0J3MgZnVuY3Rpb25cbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09ICdmdW5jdGlvbidcbn1cblxuLy8gcmVnZXhwIGNvbnN0YW50c1xuLy8gQHBhZ2UgcnVsZTogQ1NTT006XG4vLyAgIElFIHJldHVybmVkOiBub3QgaW1wbGVtZW50ZWQgZXJyb3Jcbi8vICAgRkYsIENocm9tZSBhY3R1YWxseSBpcyBub3QgZ3JvdXBSdWxlKG5vdCBjc3NSdWxlcyksIHNhbWUgYXMgQGZvbnQtZmFjZSBydWxlXG4vLyAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DU1NHcm91cGluZ1J1bGVcbi8vICAgQ1NTUGFnZVJ1bGUgaXMgbGlzdGVkIGFzIGRlcml2ZWQgZnJvbSBDU1NHcm91cGluZ1J1bGUsIGJ1dCBub3QgaW1wbGVtZW50ZWQgeWV0LlxuLy8gICBIZXJlIGFkZGVkIEBwYWdlIGFzIEdyb3VwUnVsZSwgYnV0IHBsdWdpbiBzaG91bGQgdGFrZSBjYXJlIG9mIHRoaXMuXG52YXIgcmVHcm91cFJ1bGUgPSAvXkAobWVkaWF8ZG9jdW1lbnR8c3VwcG9ydHN8cGFnZXxbXFx3LV0qa2V5ZnJhbWVzKS9pO1xudmFyIHJlQXRSdWxlID0gL15cXHMqQC9pO1xuXG4vKipcbiAqIGNvbnZlcnQgc2ltcGxlIE9iamVjdCBpbnRvIG5vZGUgZGF0YVxuICpcbiBpbnB1dCBkYXRhIGZvcm1hdDpcbiB7XCJhXCI6e1wiYlwiOntcImNcIjp7XCJcIjpbe2NvbG9yOjF9XX19fSwgXCJhYmNcIjoxMjMsICdAaW1wb3J0JzpbMiwzLDRdLCAnQG1lZGlhIChtaW4td2lkdGg6MzIwcHgpJzp7IGQ6e29rOjF9IH19XG4gKiAgICAgICAgMS4gZXZlcnkga2V5IGlzIGZvbGRlciBub2RlXG4gKiAgICAgICAgMi4gXCJcIjpbe3J1bGUxfSwge3J1bGUyfV0gd2lsbCBzcGxpdCBpbnRvIHNldmVyYWwgcnVsZXNcbiAqICAgICAgICAzLiAmIHdpbGwgcmVwbGFjZWQgYnkgcGFyZW50LCBcXFxcJiB3aWxsIGVzY2FwZVxuICogICAgICAgIDQuIGFsbCBwcm9wIHNob3VsZCBiZSBpbiBkb20uc3R5bGUgY2FtZWxDYXNlXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IGQgLSBzaW1wbGUgb2JqZWN0IGRhdGEsIG9yIGFycmF5XG4gKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0IC0gdGhlIHJldWxzdCBvYmplY3QgdG8gc3RvcmUgY29uZmlnIGFuZCByb290IG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJldmlvdXNOb2RlXSAtIGFsc28gYWN0IGFzIHBhcmVudCBmb3IgbmV4dCBub2RlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaXQgd2hldGhlciBpdCdzIHRoZSByb290IGNhbGxcbiAqIEByZXR1cm5zIHtvYmplY3R9IG5vZGUgZGF0YSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gcGFyc2VPYmogKGQsIHJlc3VsdCwgbm9kZSwgaW5pdCkge1xuICBpZiAoaW5pdCkge1xuICAgIHJlc3VsdC5ub2RlcyA9IFtdO1xuICAgIHJlc3VsdC5yZWYgPSB7fTtcbiAgICBpZiAobm9kZSkgcmVzdWx0LmRpZmYgPSB7fTtcbiAgfVxuXG4gIG5vZGUgPSBub2RlIHx8IHt9O1xuXG4gIG5vZGUub2JqID0gZDtcblxuICBpZiAodHlwZS5jYWxsKGQpID09IEFSUkFZKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgLyogZm9yIGFycmF5IHR5cGUsIGVhY2ggY2hpbGRyZW4gaGF2ZSBhIHBhcmVudCB0aGF0IG5vdCBvbiB0aGUgdmlydHVhbCB0cmVlLFxuICAgICAgIHNlZSB0ZXN0IGNhc2Ugb2YgQG1lZGlhLWFycmF5IGZvciBleGFtcGxlLCB0aGUgYXJyYXkgbm9kZSBvYmo9QXJyYXksIGJ1dCBoYXZlIG5vZGUuc2VsUGFydChubyBzZWxUZXh0KVxuICAgICAgIFNvIGhhdmUgdG8gc2V0IHRoZSByaWdodCBub2RlLmF0L25vZGUudHlwZSBmcm9tIHRoZSBub2RlLmtleSwgdG8gZ2V0IHJpZ2h0IHNlbFRleHQgZm9yIGNoaWxkcmVuICovXG4gICAgbm9kZS5hdCA9IHJlQXRSdWxlLmV4ZWMobm9kZS5rZXkpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcHJldiA9IG5vZGVbaV07XG4gICAgICB2YXIgbiA9IHBhcnNlT2JqKGRbaV0sIHJlc3VsdCwgbm9kZVtpXSB8fCB7cGFyZW50OiBub2RlLCBzcmM6IGQsIHBhcmVudE5vZGU6IG5vZGVzLCBpbmRleDogaX0pO1xuICAgICAgaWYocmVzdWx0LmRpZmYgJiYgcHJldiE9bikgYXJyYXlLVihyZXN1bHQuZGlmZiwgbiA/ICdhZGRlZCcgOiAncmVtb3ZlZCcsIG58fHByZXYpO1xuICAgICAgbm9kZXMucHVzaChuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH0gZWxzZSB7XG4gICAgaWYgKGRbS0VZX0lEXSkgcmVzdWx0LnJlZltkW0tFWV9JRF1dID0gbm9kZTtcbiAgICAvLyBpdCdzIG5vIG5lZWQgdG8gY2hlY2sgKHR5cGUuY2FsbChkKSA9PSBPQkpFQ1QpXG4gICAgLy8gaXNJdGVyYWJsZSB3aWxsIGZpbHRlciBvbmx5IEFSUkFZL09CSkVDVFxuICAgIC8vIG90aGVyIHR5cGVzIHdpbGwgZ290byBwYXJzZVByb3AgZnVuY3Rpb25cbiAgICB2YXIgcHJldlZhbCA9IG5vZGUucHJldlZhbCA9IG5vZGUubGFzdFZhbDtcbiAgICAvLyBhdCBmaXJzdCBzdGFnZSBjaGVjayAkdGVzdFxuICAgIGlmIChLRVlfVEVTVCBpbiBkKSB7XG4gICAgICB2YXIgdGVzdCA9IGlzRnVuY3Rpb24oZFtLRVlfVEVTVF0pID8gZFtLRVlfVEVTVF0oIW5vZGUuZGlzYWJsZWQsIG5vZGUsIHJlc3VsdCkgOiBkW0tFWV9URVNUXTtcbiAgICAgIC8vIGlmIHRlc3QgZmFsc2UsIHJlbW92ZSBub2RlIGNvbXBsZXRlbHlcbiAgICAgIC8vIGlmIGl0J3MgcmV0dXJuIGZ1bmN0aW9uLCBnb2luZyB0byBzdGFnZSAyIHdoZXJlIGFsbCBwcm9wIHJlbmRlcmVkXG4gICAgICBpZighdGVzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG5vZGUudGVzdCA9IHRlc3Q7XG4gICAgfVxuICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IHt9O1xuICAgIG5vZGUubGFzdFJhdyA9IG5vZGUucmF3VmFsIHx8IHt9O1xuICAgIG5vZGUubGFzdFZhbCA9IHt9O1xuICAgIG5vZGUucmF3VmFsID0ge307XG4gICAgbm9kZS5wcm9wID0ge307XG4gICAgbm9kZS5kaWZmID0ge307XG4gICAgdmFyIG9yZGVyID0gZFtLRVlfT1JERVJdIHwgMDtcbiAgICB2YXIgZnVuY0FyciA9IFtdO1xuXG4gICAgdmFyIHByb2Nlc3NPYmogPSBmdW5jdGlvbiAob2JqLCBrLCBub2RlT2JqKSB7XG4gICAgICB2YXIgaGF2ZU9sZENoaWxkID0gayBpbiBjaGlsZHJlbjtcbiAgICAgIHZhciBuZXdOb2RlID0gZXh0ZW5kT2JqKGNoaWxkcmVuLCBrLCBub2RlT2JqKTtcbiAgICAgIC8vIGRvbid0IG92ZXJ3cml0ZSBzZWxQYXJ0IGZvciBwcmV2aW91cyBub2RlXG4gICAgICBuZXdOb2RlLnNlbFBhcnQgPSBuZXdOb2RlLnNlbFBhcnQgfHwgc3BsaXRTZWxlY3RvcihrLCAnLCcpO1xuICAgICAgdmFyIG4gPSBwYXJzZU9iaihvYmosIHJlc3VsdCwgbmV3Tm9kZSk7XG4gICAgICBpZihuKSBjaGlsZHJlbltrXSA9IG47XG4gICAgICAvLyBpdCdzIG5ldyBhZGRlZCBub2RlXG4gICAgICBpZiAocHJldlZhbCkgIWhhdmVPbGRDaGlsZFxuICAgICAgICA/IG4gJiYgYXJyYXlLVihyZXN1bHQuZGlmZiwgJ2FkZGVkJywgbilcbiAgICAgICAgOiAhbiAmJiBhcnJheUtWKHJlc3VsdC5kaWZmLCAncmVtb3ZlZCcsIGNoaWxkcmVuW2tdKTtcbiAgICAgIC8vIGZvciBmaXJzdCB0aW1lIGNoZWNrLCByZW1vdmUgZnJvbSBwYXJlbnQgKG5vIGRpZmYpXG4gICAgICBpZighbikgZGVsZXRlIG5vZGVPYmoucGFyZW50LmNoaWxkcmVuW2tdO1xuICAgIH07XG5cbiAgICAvLyBvbmx5IHRoZXJlJ3Mgbm8gc2VsVGV4dCwgZ2V0U2VsXG4gICAgaWYoISgnc2VsVGV4dCcgaW4gbm9kZSkpIGdldFNlbChub2RlLCByZXN1bHQpO1xuXG4gICAgZm9yICh2YXIgayBpbiBkKSB7XG4gICAgICAvLyBoZXJlICRrZXkgc3RhcnQgd2l0aCAkIGlzIHNwZWNpYWxcbiAgICAgIC8vIGtbMF0gPT0gJyQnIC4uLiBidXQgdGhlIGNvcmUgd2lsbCBjYWxjIGl0IGludG8gbm9kZS5cbiAgICAgIC8vIFBsdWdpbnMgc2hvdWxkIHRha2UgJCB3aXRoIGNhcmUgYW5kIG1hcmsgYXMgYSBzcGVjaWFsIGNhc2UuIGUuZy4gaWdub3JlIGl0XG4gICAgICBpZiAoIW93bihkLCBrKSkgY29udGludWVcbiAgICAgIGlmICghaXNJdGVyYWJsZShkW2tdKSB8fCB0eXBlLmNhbGwoZFtrXSkgPT0gQVJSQVkgJiYgIWlzSXRlcmFibGUoZFtrXVswXSkpIHtcblxuICAgICAgICAvLyBpdCdzIGlubGluZSBhdC1ydWxlOiBAaW1wb3J0IGV0Yy5cbiAgICAgICAgaWYgKGtbMF09PSdAJykge1xuICAgICAgICAgIHByb2Nlc3NPYmooXG4gICAgICAgICAgICAvLyBtYXAgQGltcG9ydDogW2EsYixjXSBpbnRvIHthOjEsIGI6MSwgYzoxfVxuICAgICAgICAgICAgW10uY29uY2F0KGRba10pLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICAgICAgICAgICAgcHJldltjdXJdID0gJzsnO1xuICAgICAgICAgICAgICByZXR1cm4gcHJldlxuICAgICAgICAgICAgfSwge30pLCBrLCB7cGFyZW50OiBub2RlLCBzcmM6IGQsIGtleTogaywgaW5saW5lOnRydWV9KTtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbiAoX2spIHtcbiAgICAgICAgICAvLyBza2lwICR0ZXN0IGtleVxuICAgICAgICAgIGlmKF9rICE9IEtFWV9URVNUKSBwYXJzZVByb3Aobm9kZSwgZCwgX2ssIHJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgICAgIG9yZGVyXG4gICAgICAgICAgPyBmdW5jQXJyLnB1c2goW3IsIGtdKVxuICAgICAgICAgIDogcihrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3NPYmooZFtrXSwgaywge3BhcmVudDogbm9kZSwgc3JjOiBkLCBrZXk6IGt9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3aGVuIGl0J3Mgc2Vjb25kIHRpbWUgdmlzaXQgbm9kZVxuICAgIGlmIChwcmV2VmFsKSB7XG4gICAgICAvLyBjaGlsZHJlbiByZW1vdmVkXG4gICAgICBmb3IgKGsgaW4gY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKCEoayBpbiBkKSkge1xuICAgICAgICAgIGFycmF5S1YocmVzdWx0LmRpZmYsICdyZW1vdmVkJywgY2hpbGRyZW5ba10pO1xuICAgICAgICAgIGRlbGV0ZSBjaGlsZHJlbltrXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBwcm9wIGNoYW5nZWRcbiAgICAgIHZhciBkaWZmUHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5ld0tleXMgPSBrZXlzKG5vZGUubGFzdFZhbCk7XG4gICAgICAgIHZhciByZW1vdmVkID0ga2V5cyhwcmV2VmFsKS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIG5ld0tleXMuaW5kZXhPZih4KSA8IDAgfSk7XG4gICAgICAgIGlmIChyZW1vdmVkLmxlbmd0aCkgbm9kZS5kaWZmLnJlbW92ZWQgPSByZW1vdmVkO1xuICAgICAgICBpZiAoa2V5cyhub2RlLmRpZmYpLmxlbmd0aCkgYXJyYXlLVihyZXN1bHQuZGlmZiwgJ2NoYW5nZWQnLCBub2RlKTtcbiAgICAgIH07XG4gICAgICBvcmRlclxuICAgICAgICA/IGZ1bmNBcnIucHVzaChbZGlmZlByb3AsIG51bGxdKVxuICAgICAgICA6IGRpZmZQcm9wKCk7XG4gICAgfVxuXG4gICAgaWYgKG9yZGVyKSBhcnJheUtWKHJlc3VsdCwgJ19vcmRlcicsIHtvcmRlcjogb3JkZXIsIGZ1bmM6IGZ1bmNBcnJ9KTtcbiAgICByZXN1bHQubm9kZXMucHVzaChub2RlKTtcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0U2VsKG5vZGUsIHJlc3VsdCkge1xuXG4gIHZhciBvcHQgPSByZXN1bHQuY29uZmlnO1xuXG4gIC8vIGFycmF5IGluZGV4IGRvbid0IGhhdmUga2V5LFxuICAvLyBmZXRjaCBwYXJlbnQga2V5IGFzIHJ1bGVOb2RlXG4gIHZhciBydWxlTm9kZSA9IGdldFBhcmVudHMobm9kZSwgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5rZXlcbiAgfSkucG9wKCk7XG5cbiAgbm9kZS5wYXJlbnRSdWxlID0gZ2V0UGFyZW50cyhub2RlLnBhcmVudCwgZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbi50eXBlID09IFRZUEVfR1JPVVBcbiAgfSkucG9wKCkgfHwgbnVsbDtcblxuICBpZiAocnVsZU5vZGUpIHtcbiAgICB2YXIgaXNNZWRpYSwgc2VsID0gcnVsZU5vZGUua2V5O1xuICAgIHZhciBncm91cFJ1bGUgPSBzZWwubWF0Y2gocmVHcm91cFJ1bGUpO1xuICAgIGlmIChncm91cFJ1bGUpIHtcbiAgICAgIG5vZGUudHlwZSA9IFRZUEVfR1JPVVA7XG4gICAgICBub2RlLmF0ID0gZ3JvdXBSdWxlLnBvcCgpO1xuICAgICAgaXNNZWRpYSA9IG5vZGUuYXQgPT0gJ21lZGlhJztcblxuICAgICAgLy8gb25seSBtZWRpYSBhbGxvdyBuZXN0ZWQgYW5kIGpvaW4sIGFuZCBoYXZlIG5vZGUuc2VsUGFydFxuICAgICAgaWYgKGlzTWVkaWEpIG5vZGUuc2VsUGFydCA9IHNwbGl0U2VsZWN0b3Ioc2VsLnJlcGxhY2UocmVHcm91cFJ1bGUsICcnKSwgJywnKTtcblxuICAgICAgLy8gY29tYmluZVBhdGggaXMgYXJyYXksICdzdHInICsgYXJyYXkgaW5zdGVhZCBvZiBhcnJheS5qb2luKCcsJylcbiAgICAgIG5vZGUuZ3JvdXBUZXh0ID0gaXNNZWRpYVxuICAgICAgICA/ICdAJyArIG5vZGUuYXQgKyBjb21iaW5lUGF0aChnZXRQYXJlbnRzKG5vZGUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYudHlwZSA9PSBUWVBFX0dST1VQXG4gICAgICAgIH0sICdzZWxQYXJ0JywgJ3NlbENoaWxkJywgJ3NlbFBhcmVudCcpLCAnJywgJyBhbmQnKVxuICAgICAgOiBzZWw7XG5cbiAgICAgIG5vZGUuc2VsVGV4dCA9IGdldFBhcmVudHMobm9kZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuc2VsVGV4dCAmJiAhdi5hdFxuICAgICAgfSwgJ3NlbFRleHQnKS5wb3AoKSB8fCAnJztcbiAgICB9IGVsc2UgaWYgKHJlQXRSdWxlLnRlc3Qoc2VsKSkge1xuICAgICAgbm9kZS50eXBlID0gJ2F0JztcbiAgICAgIG5vZGUuc2VsVGV4dCA9IHNlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5zZWxUZXh0ID0gJycgKyBjb21iaW5lUGF0aChnZXRQYXJlbnRzKHJ1bGVOb2RlLCBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi5zZWxQYXJ0ICYmICF2LmF0XG4gICAgICB9LCAnc2VsUGFydCcsICdzZWxDaGlsZCcsICdzZWxQYXJlbnQnKSwgJycsICcgJywgdHJ1ZSksIG9wdDtcbiAgICB9XG5cbiAgICBub2RlLnNlbFRleHQgPSBhcHBseVBsdWdpbnMob3B0LCAnc2VsZWN0b3InLCBub2RlLnNlbFRleHQsIG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5vZGUuc2VsVGV4dCkgbm9kZS5zZWxUZXh0UGFydCA9IHNwbGl0U2VsZWN0b3Iobm9kZS5zZWxUZXh0LCAnLCcpO1xuXG4gICAgaWYgKG5vZGUgIT09IHJ1bGVOb2RlKSBub2RlLnJ1bGVOb2RlID0gcnVsZU5vZGU7XG4gIH1cblxufVxuXG4vKipcbiAqIFBhcnNlIHByb3BlcnR5IG9mIG9iamVjdCBkJ3Mga2V5LCB3aXRoIHByb3BLZXkgYXMgYSBjYW5kaWRhdGUga2V5IG5hbWVcbiAqIEBwYXJhbSB7fSBub2RlOiB2LW5vZGUgb2YgY3Nzb2JqXG4gKiBAcGFyYW0ge30gZDogc291cmNlIG9iamVjdFxuICogQHBhcmFtIHt9IGtleTogYW55IG51bWVyaWMgd2lsbCBiZSBpZ25vcmVkLCB0aGVuIGNvbnZlcnRlZCB0byBzdHJpbmdcbiAqIEBwYXJhbSB7fSByZXN1bHQ6IGNzc29iaiByZXN1bHQgb2JqZWN0XG4gKiBAcGFyYW0ge30gcHJvcEtleTogY2FuZGlkYXRlIHByb3Aga2V5IG5hbWVcblxuIEFjY2VwdCBvbmx5IGtleSBhcyBzdHJpbmcsIG51bWVyaWMgd2lsbCBiZSBpZ25vcmVkXG5cbiBjb2xvcjogZnVuY3Rpb24oKXtyZXR1cm4gWydyZWQnLCAnYmx1ZSddfSB3aWxsIGV4cGFuZFxuIGNvbG9yOiBmdW5jdGlvbigpe3JldHVybiB7Zm9udFNpemU6ICcxMnB4JywgZmxvYXQ6J3JpZ2h0J319IHdpbGwgYmUgcmVwbGFjZWRcblxuICovXG5mdW5jdGlvbiBwYXJzZVByb3AgKG5vZGUsIGQsIGtleSwgcmVzdWx0LCBwcm9wS2V5KSB7XG4gIHZhciBwcmV2VmFsID0gbm9kZS5wcmV2VmFsO1xuICB2YXIgbGFzdFZhbCA9IG5vZGUubGFzdFZhbDtcblxuICAvLyB0aGUgcHJvcCBuYW1lIGdldCBmcm9tIG9iamVjdCBrZXkgb3IgY2FuZGlkYXRlIGtleVxuICB2YXIgcHJvcE5hbWUgPSBpc051bWVyaWMoa2V5KSA/IHByb3BLZXkgOiBrZXk7XG5cbiAgLy8gTkVYVDogcHJvcE5hbWUgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAvLyBub3cgaXQncyBub3QgdXNlZCwgc2luY2UgcHJvcE5hbWUgZW5zdXJlIGV4aXN0c1xuICAvLyBjb3JuZXIgY2FzZTogcHJvcEtleT09PScnID8/IGJlbG93IGxpbmUgd2lsbCBkbyB3cm9uZyEhXG4gIC8vIGlmKCFwcm9wTmFtZSkgcmV0dXJuXG5cbiAgdmFyIHJhdyA9IG5vZGUubGFzdFJhd1twcm9wTmFtZV0sXG4gICAgICBwcmV2ID0gcHJldlZhbCAmJiBwcmV2VmFsW3Byb3BOYW1lXSxcbiAgICAgIGFyZ09iaiA9IHtub2RlOm5vZGUsIHJlc3VsdDpyZXN1bHR9O1xuXG4gIGlmIChyYXcpIGFyZ09iai5yYXcgPSByYXdbMF07XG5cbiAgIVtdLmNvbmNhdChkW2tleV0pLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAvLyBwcmVwYXJlIHZhbHVlIGZ1bmN0aW9uIGFyZ3NcbiAgICBhcmdPYmouY29va2VkID0gcHJldjtcblxuICAgIC8vIHBhc3MgbGFzdFZhbCBpZiBpdCdzIGZ1bmN0aW9uXG4gICAgYXJnT2JqLnJhdyA9IHJhdyA9IGlzRnVuY3Rpb24odilcbiAgICAgICAgPyB2KGFyZ09iailcbiAgICAgICAgOiB2O1xuXG4gICAgdmFyIHZhbCA9IGFwcGx5UGx1Z2lucyhyZXN1bHQuY29uZmlnLCAndmFsdWUnLCByYXcsIHByb3BOYW1lLCBub2RlLCByZXN1bHQsIHByb3BLZXkpO1xuXG4gICAgLy8gY2hlY2sgYW5kIG1lcmdlIG9ubHkgZm9ybWF0IGFzIE9iamVjdCB8fCBBcnJheSBvZiBPYmplY3QsIG90aGVyIGZvcm1hdCBub3QgYWNjZXB0ZWQhXG4gICAgaWYgKGlzSXRlcmFibGUodmFsKSkge1xuICAgICAgZm9yICh2YXIgayBpbiB2YWwpIHtcbiAgICAgICAgaWYgKG93bih2YWwsIGspKSBwYXJzZVByb3Aobm9kZSwgdmFsLCBrLCByZXN1bHQsIHByb3BOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXJyYXlLViAoXG4gICAgICAgIG5vZGUucmF3VmFsLFxuICAgICAgICBwcm9wTmFtZSxcbiAgICAgICAgcmF3LFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgICAgaWYgKGlzVmFsaWRDU1NWYWx1ZSh2YWwpKSB7XG4gICAgICAgIC8vIG9ubHkgdmFsaWQgdmFsIGNhbiBlbnRlciBub2RlLnByb3AgYW5kIGxhc3RWYWxcbiAgICAgICAgLy8gcHVzaCBldmVyeSB2YWwgdG8gcHJvcFxuICAgICAgICBhcnJheUtWKFxuICAgICAgICAgIG5vZGUucHJvcCxcbiAgICAgICAgICBwcm9wTmFtZSxcbiAgICAgICAgICB2YWwsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBwcmV2ID0gbGFzdFZhbFtwcm9wTmFtZV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKHByZXZWYWwpIHtcbiAgICBpZiAoIShwcm9wTmFtZSBpbiBwcmV2VmFsKSkge1xuICAgICAgYXJyYXlLVihub2RlLmRpZmYsICdhZGRlZCcsIHByb3BOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHByZXZWYWxbcHJvcE5hbWVdICE9IGxhc3RWYWxbcHJvcE5hbWVdKSB7XG4gICAgICBhcnJheUtWKG5vZGUuZGlmZiwgJ2NoYW5nZWQnLCBwcm9wTmFtZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVQYXRoIChhcnJheSwgcGFyZW50U2VsLCBzZXBlcmF0b3IsIHJlcGxhY2VBbXBlcnNhbmQpIHtcbiAgcmV0dXJuICFhcnJheS5sZW5ndGggPyBwYXJlbnRTZWwgOiBhcnJheVswXS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUpIHtcbiAgICB2YXIgcGFydCwgc3RyID0gcGFyZW50U2VsID8gcGFyZW50U2VsICsgc2VwZXJhdG9yIDogcGFyZW50U2VsO1xuICAgIGlmIChyZXBsYWNlQW1wZXJzYW5kKSB7XG4gICAgICBwYXJ0ID0gc3BsaXRTZWxlY3RvciggdmFsdWUsICcmJyApO1xuICAgICAgc3RyID0gcGFydC5sZW5ndGggPiAxID8gcGFydC5qb2luKHBhcmVudFNlbCkgOiBzdHIgKyB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChjb21iaW5lUGF0aChhcnJheS5zbGljZSgxKSwgc3RyLCBzZXBlcmF0b3IsIHJlcGxhY2VBbXBlcnNhbmQpKVxuICB9LCBbXSlcbn1cblxuZnVuY3Rpb24gYXBwbHlQbHVnaW5zIChvcHQsIHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIHZhciBwbHVnaW4gPSBvcHQucGx1Z2lucztcbiAgLy8gcGx1Z2luIGlzIGFsd2F5cyBBcnJheSwgc28gaGVyZSB3ZSBkb24ndCBjaGVjayBpdFxuICByZXR1cm4gW10uY29uY2F0KHBsdWdpbikucmVkdWNlKFxuICAgIGZ1bmN0aW9uIChwcmUsIHBsdWdpbikgeyByZXR1cm4gcGx1Z2luW3R5cGVdID8gcGx1Z2luW3R5cGVdLmFwcGx5KG51bGwsIFtwcmVdLmNvbmNhdChhcmdzKSkgOiBwcmUgfSxcbiAgICBhcmdzLnNoaWZ0KClcbiAgKVxufVxuXG5mdW5jdGlvbiBhcHBseU9yZGVyIChvcHQpIHtcbiAgaWYgKG9wdC5fb3JkZXI9PW51bGwpIHJldHVyblxuICBvcHQuX29yZGVyXG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlclxuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIHYuZnVuYy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIGZbMF0oZlsxXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgb3B0Ll9vcmRlciA9IFtdO1xufVxuXG5mdW5jdGlvbiBjc3NvYmogKGNvbmZpZykge1xuXG4gIGNvbmZpZyA9IGRlZmF1bHRzKGNvbmZpZywge1xuICAgIHBsdWdpbnM6IFtdLFxuICAgIGludHJvczogW11cbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbml0T2JqLCBpbml0U3RhdGUpIHtcbiAgICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIChvYmosIHN0YXRlKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aD4xKSByZXN1bHQuc3RhdGUgPSBzdGF0ZSB8fCB7fTtcbiAgICAgIGlmIChvYmopIHJlc3VsdC5vYmogPSBpc0Z1bmN0aW9uKG9iaikgPyBvYmooKSA6IG9iajtcbiAgICAgIHJlc3VsdC5yb290ID0gcGFyc2VPYmooZXh0ZW5kT2JqKHt9LCAnJywgcmVzdWx0LmludHJvLCByZXN1bHQub2JqKSwgcmVzdWx0LCByZXN1bHQucm9vdCwgdHJ1ZSk7XG4gICAgICBhcHBseU9yZGVyKHJlc3VsdCk7XG4gICAgICByZXN1bHQgPSBhcHBseVBsdWdpbnMoY29uZmlnLCAncG9zdCcsIHJlc3VsdCk7XG4gICAgICBpc0Z1bmN0aW9uKGNvbmZpZy5vblVwZGF0ZSkgJiYgY29uZmlnLm9uVXBkYXRlKHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfTtcblxuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICBpbnRybzoge30sXG4gICAgICB1cGRhdGU6IHVwZGF0ZXIsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH07XG5cbiAgICAhW10uY29uY2F0KGNvbmZpZy5pbnRyb3MpLmZvckVhY2goXG4gICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgIGV4dGVuZE9iaihyZXN1bHQsICdpbnRybycsIGlzRnVuY3Rpb24odikgPyB2KHJlc3VsdCkgOiB2KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdXBkYXRlcihpbml0T2JqLCBpbml0U3RhdGUgfHwgY29uZmlnLnN0YXRlKTtcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vLyBwbHVnaW4gZm9yIGNzc29ialxuXG5mdW5jdGlvbiBjcmVhdGVET00gKHJvb3REb2MsIGlkLCBvcHRpb24pIHtcbiAgdmFyIGVsID0gcm9vdERvYy5nZXRFbGVtZW50QnlJZChpZCk7XG4gIHZhciBoZWFkID0gcm9vdERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICBpZihlbCkge1xuICAgIGlmKG9wdGlvbi5hcHBlbmQpIHJldHVybiBlbFxuICAgIGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH1cbiAgZWwgPSByb290RG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIGhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICBpZiAob3B0aW9uLmF0dHJzKVxuICAgIGZvciAodmFyIGkgaW4gb3B0aW9uLmF0dHJzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoaSwgb3B0aW9uLmF0dHJzW2ldKTtcbiAgICB9XG4gIHJldHVybiBlbFxufVxuXG52YXIgYWRkQ1NTUnVsZSA9IGZ1bmN0aW9uIChwYXJlbnQsIHNlbGVjdG9yLCBib2R5LCBub2RlKSB7XG4gIHZhciBpc0ltcG9ydFJ1bGUgPSAvQGltcG9ydC9pLnRlc3Qobm9kZS5zZWxUZXh0KTtcbiAgdmFyIHJ1bGVzID0gcGFyZW50LmNzc1J1bGVzIHx8IHBhcmVudC5ydWxlcztcbiAgdmFyIGluZGV4PTA7XG5cbiAgdmFyIG9tQXJyID0gW107XG4gIHZhciBzdHIgPSBub2RlLmlubGluZVxuICAgICAgPyBib2R5Lm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBbbm9kZS5zZWxUZXh0LCAnICcsIHZdXG4gICAgICB9KVxuICAgICAgOiBbW3NlbGVjdG9yLCAneycsIGJvZHkuam9pbignJyksICd9J11dO1xuXG4gIHN0ci5mb3JFYWNoKGZ1bmN0aW9uKHRleHQpIHtcbiAgICBpZiAocGFyZW50LmNzc1J1bGVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpbmRleCA9IGlzSW1wb3J0UnVsZSA/IDAgOiBydWxlcy5sZW5ndGg7XG4gICAgICAgIHBhcmVudC5hcHBlbmRSdWxlXG4gICAgICAgICAgPyBwYXJlbnQuYXBwZW5kUnVsZSh0ZXh0LmpvaW4oJycpKSAgLy8ga2V5ZnJhbWVzLmFwcGVuZFJ1bGUgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICAgIDogcGFyZW50Lmluc2VydFJ1bGUodGV4dC5qb2luKCcnKSwgaW5kZXgpOyAvL2ZpcmVmb3ggPDE2IGFsc28gcmV0dXJuIHVuZGVmaW5lZC4uLlxuXG4gICAgICAgIG9tQXJyLnB1c2gocnVsZXNbaW5kZXhdKTtcblxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2VyIHdpdGggcHJlZml4IGNoZWNrLCBub3cgb25seSAtd2Via2l0LVxuICAgICAgICAvLyBodHRwOi8vc2hvdWxkaXByZWZpeC5jb20vI2FuaW1hdGlvbnNcbiAgICAgICAgLy8gaWYoc2VsZWN0b3IgJiYgc2VsZWN0b3IuaW5kZXhPZignQGtleWZyYW1lcycpPT0wKSBmb3IodmFyIHJldCwgaSA9IDAsIGxlbiA9IGNzc1ByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vICAgcmV0ID0gYWRkQ1NTUnVsZShwYXJlbnQsIHNlbGVjdG9yLnJlcGxhY2UoJ0BrZXlmcmFtZXMnLCAnQC0nK2Nzc1ByZWZpeGVzW2ldLnRvTG93ZXJDYXNlKCkrJy1rZXlmcmFtZXMnKSwgYm9keSwgbm9kZSlcbiAgICAgICAgLy8gICBpZihyZXQubGVuZ3RoKSByZXR1cm4gcmV0XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhlIHJ1bGUgaXMgbm90IHN1cHBvcnRlZCwgZmFpbCBzaWxlbnRseVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLCBzZWxlY3RvciwgYm9keSwgcG9zKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFyZW50LmFkZFJ1bGUpIHtcbltdLmNvbmNhdChzZWxlY3RvcikuZm9yRWFjaChmdW5jdGlvbiAoc2VsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIEFMTCBALXJ1bGUgc3VwcG9ydCBmb3Igb2xkIElFXG4gICAgICAgICAgaWYoaXNJbXBvcnRSdWxlKSB7XG4gICAgICAgICAgICBpbmRleCA9IHBhcmVudC5hZGRJbXBvcnQodGV4dFsyXSk7XG4gICAgICAgICAgICBvbUFyci5wdXNoKHBhcmVudC5pbXBvcnRzW2luZGV4XSk7XG5cbiAgICAgICAgICAgIC8vIElFIGFkZFBhZ2VSdWxlKCkgcmV0dXJuOiBub3QgaW1wbGVtZW50ZWQhISEhXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKC9AcGFnZS8udGVzdChzZWwpKSB7XG4gICAgICAgICAgICAvLyAgIGluZGV4ID0gcGFyZW50LmFkZFBhZ2VSdWxlKHNlbCwgdGV4dFsyXSwgLTEpXG4gICAgICAgICAgICAvLyAgIG9tQXJyLnB1c2gocnVsZXNbcnVsZXMubGVuZ3RoLTFdKVxuXG4gICAgICAgICAgfSBlbHNlIGlmICghL15cXHMqQC8udGVzdChzZWwpKSB7XG4gICAgICAgICAgICBwYXJlbnQuYWRkUnVsZShzZWwsIHRleHRbMl0sIHJ1bGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAvLyBvbGQgSUUgaGF2ZSBidWc6IGFkZFJ1bGUgd2lsbCBhbHdheXMgcmV0dXJuIC0xISEhXG4gICAgICAgICAgICBvbUFyci5wdXNoKHJ1bGVzW3J1bGVzLmxlbmd0aC0xXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLCBzZWxlY3RvciwgYm9keSlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb21BcnJcbn07XG5cbmZ1bmN0aW9uIGdldEJvZHlDc3MgKG5vZGUpIHtcbiAgLy8gZ2V0IGNzc1RleHQgZnJvbSBwcm9wXG4gIHZhciBwcm9wID0gbm9kZS5wcm9wO1xuICByZXR1cm4gT2JqZWN0LmtleXMocHJvcCkubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgLy8gc2tpcCAkcHJvcCwgZS5nLiAkaWQsICRvcmRlclxuICAgIGlmKGtbMF09PSckJykgcmV0dXJuICcnXG4gICAgZm9yICh2YXIgdiwgcmV0PScnLCBpID0gcHJvcFtrXS5sZW5ndGg7IGktLTspIHtcbiAgICAgIHYgPSBwcm9wW2tdW2ldO1xuXG4gICAgICAvLyB2YWx1ZSBleHBhbmQgJiBtZXJnZSBzaG91bGQgYmUgZG9uZSBhcyB2YWx1ZSBmdW5jdGlvbi9wbHVnaW4gaW4gY3Nzb2JqLWNvcmUgPj0wLjUuMFxuICAgICAgcmV0ICs9IG5vZGUuaW5saW5lID8gayA6IHByZWZpeFByb3AoaywgdHJ1ZSkgKyAnOicgKyB2ICsgJzsnO1xuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIHZlbmRvciBwcmVmaXggc3VwcG9ydFxuLy8gYm9ycm93ZWQgZnJvbSBqUXVlcnkgMS4xMlxudmFyXHRjc3NQcmVmaXhlcyA9IFsgXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiLCBcIk9cIiBdO1xudmFyIGNzc1ByZWZpeGVzUmVnID0gbmV3IFJlZ0V4cCgnXig/OicgKyBjc3NQcmVmaXhlcy5qb2luKCd8JykgKyAnKVtBLVpdJyk7XG52YXJcdGVtcHR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkuc3R5bGU7XG52YXIgdGVzdFByb3AgID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgZm9yKHZhciBpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcbiAgICBpZihsaXN0W2ldIGluIGVtcHR5U3R5bGUpIHJldHVybiBsaXN0W2ldXG4gIH1cbn07XG5cbi8vXG4vKipcbiAqIGNhY2hlIGNzc1Byb3BzXG4gKiB0aGUgdmFsdWUgaXMgSlMgZm9ybWF0LCB3aWxsIGJlIHVzZWQ6XG4gKiAxLiBkaWZmICYgcGF0Y2ggcHJvcGVydGllcyBmb3IgQ1NTT01cbiAqIDIuIHZlbmRvclByZWZpeCBwcm9wZXJ0eSBuYW1lIGNoZWNraW5nXG4gKi9cbnZhclx0Y3NzUHJvcHMgPSB7XG4gIC8vIG5vcm1hbGl6ZSBmbG9hdCBjc3MgcHJvcGVydHlcbiAgJ2Zsb2F0JzogdGVzdFByb3AoWydzdHlsZUZsb2F0JywgJ2Nzc0Zsb2F0JywgJ2Zsb2F0J10pXG59O1xuXG5cbi8vIHJldHVybiBhIGNzcyBwcm9wZXJ0eSBtYXBwZWQgdG8gYSBwb3RlbnRpYWxseSB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcbmZ1bmN0aW9uIHZlbmRvclByb3BOYW1lKCBuYW1lICkge1xuXG4gIC8vIHNob3J0Y3V0IGZvciBuYW1lcyB0aGF0IGFyZSBub3QgdmVuZG9yIHByZWZpeGVkXG4gIC8vIHdoZW4gbmFtZSBhbHJlYWR5IGhhdmUgJy0nIGFzIGZpcnN0IGNoYXIsIGRvbid0IHByZWZpeFxuICBpZiAoIG5hbWUgaW4gZW1wdHlTdHlsZSB8fCBuYW1lWzBdID09ICctJykgcmV0dXJuXG5cbiAgLy8gY2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuICB2YXIgcHJlTmFtZSwgY2FwTmFtZSA9IGNhcGl0YWxpemUobmFtZSk7XG4gIHZhciBpID0gY3NzUHJlZml4ZXMubGVuZ3RoO1xuXG4gIHdoaWxlICggaS0tICkge1xuICAgIHByZU5hbWUgPSBjc3NQcmVmaXhlc1sgaSBdICsgY2FwTmFtZTtcbiAgICBpZiAoIHByZU5hbWUgaW4gZW1wdHlTdHlsZSApIHJldHVybiBwcmVOYW1lXG4gIH1cbn1cblxuLy8gYXBwbHkgcHJvcCB0byBnZXQgcmlnaHQgdmVuZG9yIHByZWZpeFxuLy8gaW5DU1MgZmFsc2U9Y2FtZWxjYXNlOyB0cnVlPWRhc2hlZFxuZnVuY3Rpb24gcHJlZml4UHJvcCAobmFtZSwgaW5DU1MpIHtcbiAgLy8gJHByb3Agd2lsbCBza2lwXG4gIGlmKG5hbWVbMF09PSckJykgcmV0dXJuICcnXG4gIC8vIGZpbmQgbmFtZSBhbmQgY2FjaGUgdGhlIG5hbWUgZm9yIG5leHQgdGltZSB1c2VcbiAgdmFyIHJldE5hbWUgPSBjc3NQcm9wc1sgbmFtZSBdIHx8XG4gICAgICAoIGNzc1Byb3BzWyBuYW1lIF0gPSB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHx8IG5hbWUpO1xuICByZXR1cm4gaW5DU1MgICAvLyBpZiBoYXNQcmVmaXggaW4gcHJvcFxuICAgID8gZGFzaGlmeShjc3NQcmVmaXhlc1JlZy50ZXN0KHJldE5hbWUpID8gY2FwaXRhbGl6ZShyZXROYW1lKSA6IG5hbWU9PSdmbG9hdCcgJiYgbmFtZSB8fCByZXROYW1lKSAgLy8gZml4IGZsb2F0IGluIENTUywgYXZvaWQgcmV0dXJuIGNzc0Zsb2F0XG4gIDogcmV0TmFtZVxufVxuXG4vKipcbiAqIEdldCB2YWx1ZSBhbmQgaW1wb3J0YW50IGZsYWcgZnJvbSB2YWx1ZSBzdHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVSdWxlfSBydWxlIGNzcyBzdHlsZSBydWxlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgcHJvcCB0byBzZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgdmFsdWUgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNldENTU1Byb3BlcnR5IChzdHlsZU9iaiwgcHJvcCwgdmFsKSB7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIGltcG9ydGFudCA9IC9eKC4qKSEoaW1wb3J0YW50KVxccyokL2kuZXhlYyh2YWwpO1xuICB2YXIgcHJvcENhbWVsID0gcHJlZml4UHJvcChwcm9wKTtcbiAgdmFyIHByb3BEYXNoID0gcHJlZml4UHJvcChwcm9wLCB0cnVlKTtcbiAgaWYoaW1wb3J0YW50KSB7XG4gICAgdmFsdWUgPSBpbXBvcnRhbnRbMV07XG4gICAgaW1wb3J0YW50ID0gaW1wb3J0YW50WzJdO1xuICAgIGlmKHN0eWxlT2JqLnNldFByb3BlcnR5KSBzdHlsZU9iai5zZXRQcm9wZXJ0eShwcm9wRGFzaCwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgZWxzZSB7XG4gICAgICAvLyBmb3Igb2xkIElFLCBjc3NUZXh0IGlzIHdyaXRhYmxlLCBhbmQgYmVsb3cgaXMgdmFsaWQgZm9yIGNvbnRhaW4gIWltcG9ydGFudFxuICAgICAgLy8gZG9uJ3QgdXNlIHN0eWxlT2JqLnNldEF0dHJpYnV0ZSBzaW5jZSBpdCdzIG5vdCBzZXQgaW1wb3J0YW50XG4gICAgICAvLyBzaG91bGQgZG86IGRlbGV0ZSBzdHlsZU9ialtwcm9wQ2FtZWxdLCBidXQgbm90IGFmZmVjdCByZXN1bHRcblxuICAgICAgLy8gb25seSB3b3JrIG9uIDw9IElFODogcy5zdHlsZVsnRk9OVC1TSVpFJ10gPSAnMTJweCFpbXBvcnRhbnQnXG4gICAgICBzdHlsZU9ialtwcm9wRGFzaC50b1VwcGVyQ2FzZSgpXSA9IHZhbDtcbiAgICAgIC8vIHJlZnJlc2ggY3NzVGV4dCwgdGhlIHdob2xlIHJ1bGUhXG4gICAgICBzdHlsZU9iai5jc3NUZXh0ID0gc3R5bGVPYmouY3NzVGV4dDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3R5bGVPYmpbcHJvcENhbWVsXSA9IHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjc3NvYmpfcGx1Z2luX3Bvc3RfY3Nzb20gKG9wdGlvbikge1xuICBvcHRpb24gPSBvcHRpb24gfHwge307XG5cbiAgLy8gcHJlZml4ZXMgYXJyYXkgY2FuIGNoYW5nZSB0aGUgZ2xvYmFsIGRlZmF1bHQgdmVuZG9yIHByZWZpeGVzXG4gIGlmKG9wdGlvbi52ZW5kb3JzKSBjc3NQcmVmaXhlcyA9IG9wdGlvbi52ZW5kb3JzO1xuXG4gIHZhciBpZCA9IG9wdGlvbi5pZCB8fCAnY3Nzb2JqJyArIHJhbmRvbSgpO1xuXG4gIHZhciBmcmFtZSA9IG9wdGlvbi5mcmFtZTtcbiAgdmFyIHJvb3REb2MgPSBmcmFtZSA/IGZyYW1lLmNvbnRlbnREb2N1bWVudHx8ZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudCA6IGRvY3VtZW50O1xuICB2YXIgZG9tID0gY3JlYXRlRE9NKHJvb3REb2MsIGlkLCBvcHRpb24pO1xuICB2YXIgc2hlZXQgPSBkb20uc2hlZXQgfHwgZG9tLnN0eWxlU2hlZXQ7XG5cbiAgLy8gc2hlZXQuaW5zZXJ0UnVsZSAoXCJAaW1wb3J0IHVybCgndGVzdC5jc3MnKTtcIiwgMCkgIC8vIGl0J3Mgb2sgdG8gaW5zZXJ0IEBpbXBvcnQsIGJ1dCBvbmx5IGF0IHRvcFxuICAvLyBzaGVldC5pbnNlcnRSdWxlIChcIkBjaGFyc2V0ICdVVEYtOCc7XCIsIDApICAvLyB0aHJvdyBTeW50YXhFcnJvciBodHRwczovL3d3dy53My5vcmcvQnVncy9QdWJsaWMvc2hvd19idWcuY2dpP2lkPTIyMjA3XG5cbiAgLy8gSUUgaGFzIGEgYnVnLCBmaXJzdCBjb21tYSBydWxlIG5vdCB3b3JrISBpbnNlcnQgYSBkdW1teSBoZXJlXG4gIC8vIGFkZENTU1J1bGUoc2hlZXQsICdodG1sLGJvZHknLCBbXSwge30pXG5cbiAgLy8gaGVscGVyIHJlZ2V4cCAmIGZ1bmN0aW9uXG4gIC8vIEBwYWdlIGluIEZGIG5vdCBhbGxvd2VkIHBzZXVkbyBAcGFnZSA6Zmlyc3R7fSwgd2l0aCBTeW50YXhFcnJvcjogQW4gaW52YWxpZCBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkXG4gIHZhciByZVdob2xlUnVsZSA9IC9wYWdlL2k7XG4gIHZhciBhdG9tR3JvdXBSdWxlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gIW5vZGUgPyBmYWxzZSA6IHJlV2hvbGVSdWxlLnRlc3Qobm9kZS5hdCkgfHwgbm9kZS5wYXJlbnRSdWxlICYmIHJlV2hvbGVSdWxlLnRlc3Qobm9kZS5wYXJlbnRSdWxlLmF0KVxuICB9O1xuXG4gIHZhciBnZXRQYXJlbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBwID0gJ29tR3JvdXAnIGluIG5vZGUgPyBub2RlIDogbm9kZS5wYXJlbnRSdWxlO1xuICAgIHJldHVybiBwICYmIHAub21Hcm91cCB8fCBzaGVldFxuICB9O1xuXG4gIHZhciB2YWxpZFBhcmVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuICFub2RlLnBhcmVudFJ1bGUgfHwgbm9kZS5wYXJlbnRSdWxlLm9tR3JvdXAgIT09IG51bGxcbiAgfTtcblxuICB2YXIgcmVtb3ZlUnVsZSA9IGZ1bmN0aW9uKHBhcmVudCwgcnVsZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gcGFyZW50LmRlbGV0ZVJ1bGVcbiAgICAgICAgPyBwYXJlbnQuZGVsZXRlUnVsZShydWxlLmtleVRleHQgfHwgaW5kZXgpXG4gICAgICAgIDogcGFyZW50LnJlbW92ZVJ1bGUoaW5kZXgpXG4gIH07XG5cbiAgdmFyIGNsZWFyUm9vdCA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgdmFyIHJ1bGVzID0gcm9vdC5jc3NSdWxlcyB8fCByb290LnJ1bGVzO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjbGVhclJvb3QnLCBzaGVldCwgcnVsZXMpXG4gICAgZm9yKHZhciBpPXJ1bGVzLmxlbmd0aDsgaS0tOyl7XG4gICAgICByZW1vdmVSdWxlKHJvb3QsIHJ1bGVzW2ldLCBpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGVhciBydWxlJywgaSwgcnVsZXNbaV0pXG4gICAgfVxuICB9O1xuICB2YXIgcmVtb3ZlT25lUnVsZSA9IGZ1bmN0aW9uIChydWxlKSB7XG4gICAgaWYgKCFydWxlKSByZXR1cm5cbiAgICB2YXIgcGFyZW50ID0gcnVsZS5wYXJlbnRSdWxlIHx8IHNoZWV0O1xuICAgIHZhciBydWxlcyA9IHBhcmVudC5jc3NSdWxlcyB8fCBwYXJlbnQucnVsZXM7XG4gICAgdmFyIHJlbW92ZUZ1bmMgPSBmdW5jdGlvbiAodiwgaSkge1xuICAgICAgaWYoKHY9PT1ydWxlKSkge1xuICAgICAgICByZW1vdmVSdWxlKHBhcmVudCwgcnVsZSwgaSk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHNoZWV0LmltcG9ydHMgaGF2ZSBidWdzIGluIElFOlxuICAgIC8vID4gc2hlZXQucmVtb3ZlSW1wb3J0KDApICBpdCdzIHdvcmssIHRoZW4gYWdhaW5cbiAgICAvLyA+IHNoZWV0LnJlbW92ZUltcG9ydCgwKSAgaXQncyBub3Qgd29yayEhIVxuICAgIC8vXG4gICAgLy8gcGFyZW50LmltcG9ydHMgJiYgW10uc29tZS5jYWxsKHBhcmVudC5pbXBvcnRzLCByZW1vdmVGdW5jKVxuICAgIDtbXS5zb21lLmNhbGwocnVsZXMsIHJlbW92ZUZ1bmMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZU5vZGUgKG5vZGUpIHtcbiAgICAvLyByZW1vdmUgbWVkaWFTdG9yZSBmb3Igb2xkIElFXG4gICAgdmFyIGdyb3VwSWR4ID0gbWVkaWFTdG9yZS5pbmRleE9mKG5vZGUpO1xuICAgIGlmIChncm91cElkeCA+IC0xKSB7XG4gICAgICAvLyBiZWZvcmUgcmVtb3ZlIGZyb20gbWVkaWFTdG9yZVxuICAgICAgLy8gZG9uJ3QgZm9yZ2V0IHRvIHJlbW92ZSBhbGwgY2hpbGRyZW4sIGJ5IGEgd2Fsa1xuICAgICAgbm9kZS5tZWRpYUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHdhbGsobm9kZSk7XG4gICAgICBtZWRpYVN0b3JlLnNwbGljZShncm91cElkeCwgMSk7XG4gICAgfVxuW25vZGUub21Hcm91cF0uY29uY2F0KG5vZGUub21SdWxlKS5mb3JFYWNoKHJlbW92ZU9uZVJ1bGUpO1xuICB9XG5cbiAgLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBhZGROb3JtYWxydWxlXG4gIHZhciBhZGROb3JtYWxSdWxlID0gZnVuY3Rpb24gKG5vZGUsIHNlbFRleHQsIGNzc1RleHQpIHtcbiAgICBpZighY3NzVGV4dCkgcmV0dXJuXG4gICAgLy8gZ2V0IHBhcmVudCB0byBhZGRcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KG5vZGUpO1xuICAgIHZhciBwYXJlbnRSdWxlID0gbm9kZS5wYXJlbnRSdWxlO1xuICAgIGlmICh2YWxpZFBhcmVudChub2RlKSlcbiAgICAgIHJldHVybiBub2RlLm9tUnVsZSA9IGFkZENTU1J1bGUocGFyZW50LCBzZWxUZXh0LCBjc3NUZXh0LCBub2RlKVxuICAgIGVsc2UgaWYgKHBhcmVudFJ1bGUpIHtcbiAgICAgIC8vIGZvciBvbGQgSUUgbm90IHN1cHBvcnQgQG1lZGlhLCBjaGVjayBtZWRpYUVuYWJsZWQsIGFkZCBjaGlsZCBub2Rlc1xuICAgICAgaWYgKHBhcmVudFJ1bGUubWVkaWFFbmFibGVkKSB7XG4gICAgICAgIFtdLmNvbmNhdChub2RlLm9tUnVsZSkuZm9yRWFjaChyZW1vdmVPbmVSdWxlKTtcbiAgICAgICAgcmV0dXJuIG5vZGUub21SdWxlID0gYWRkQ1NTUnVsZShwYXJlbnQsIHNlbFRleHQsIGNzc1RleHQsIG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUub21SdWxlKSB7XG4gICAgICAgIG5vZGUub21SdWxlLmZvckVhY2gocmVtb3ZlT25lUnVsZSk7XG4gICAgICAgIGRlbGV0ZSBub2RlLm9tUnVsZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIG1lZGlhU3RvcmUgPSBbXTtcblxuICB2YXIgY2hlY2tNZWRpYUxpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgbWVkaWFTdG9yZS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICB2Lm1lZGlhRW5hYmxlZCA9IHYubWVkaWFUZXN0KHJvb3REb2MpO1xuICAgICAgd2Fsayh2KTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAod2luZG93LmF0dGFjaEV2ZW50KSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnJlc2l6ZScsIGNoZWNrTWVkaWFMaXN0KTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGVja01lZGlhTGlzdCwgdHJ1ZSk7XG4gIH1cblxuICB2YXIgd2FsayA9IGZ1bmN0aW9uIChub2RlLCBzdG9yZSkge1xuICAgIGlmICghbm9kZSkgcmV0dXJuXG5cbiAgICAvLyBjc3NvYmogZ2VuZXJhdGUgdmFuaWxsYSBBcnJheSwgaXQncyBzYWZlIHRvIHVzZSBjb25zdHJ1Y3RvciwgZmFzdFxuICAgIGlmIChub2RlLmNvbnN0cnVjdG9yID09PSBBcnJheSkgcmV0dXJuIG5vZGUubWFwKGZ1bmN0aW9uICh2KSB7d2Fsayh2LCBzdG9yZSk7fSlcblxuICAgIC8vIHNraXAgJGtleSBub2RlXG4gICAgaWYobm9kZS5rZXkgJiYgbm9kZS5rZXlbMF09PSckJyB8fCAhbm9kZS5wcm9wKSByZXR1cm5cblxuICAgIC8vIG5lc3RlZCBtZWRpYSBydWxlIHdpbGwgcGVuZGluZyBwcm9jZWVkXG4gICAgaWYobm9kZS5hdD09J21lZGlhJyAmJiBub2RlLnNlbFBhcmVudCAmJiBub2RlLnNlbFBhcmVudC5wb3N0QXJyKSB7XG4gICAgICByZXR1cm4gbm9kZS5zZWxQYXJlbnQucG9zdEFyci5wdXNoKG5vZGUpXG4gICAgfVxuXG4gICAgbm9kZS5wb3N0QXJyID0gW107XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgaXNHcm91cCA9IG5vZGUudHlwZSA9PSAnZ3JvdXAnO1xuXG4gICAgaWYgKGF0b21Hcm91cFJ1bGUobm9kZSkpIHN0b3JlID0gc3RvcmUgfHwgW107XG5cbiAgICBpZiAoaXNHcm91cCkge1xuICAgICAgLy8gaWYgaXQncyBub3QgQHBhZ2UsIEBrZXlmcmFtZXMgKHdoaWNoIGlzIG5vdCBncm91cFJ1bGUgaW4gZmFjdClcbiAgICAgIGlmICghYXRvbUdyb3VwUnVsZShub2RlKSkge1xuICAgICAgICB2YXIgJGdyb3VwVGVzdCA9IG5vZGUub2JqLiRncm91cFRlc3Q7XG4gICAgICAgIHZhciBwcmVzZXRNZWRpYSA9IG5vZGUuYXQ9PSdtZWRpYScgJiYgb3B0aW9uLm1lZGlhO1xuICAgICAgICBpZiAoJGdyb3VwVGVzdCB8fCBwcmVzZXRNZWRpYSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCB0ZXN0IG1lZGlhJywgcHJlc2V0TWVkaWEsICRncm91cFRlc3QpXG4gICAgICAgICAgbm9kZS5vbUdyb3VwID0gbnVsbDtcbiAgICAgICAgLy8gd2hlbiBhZGQgbWVkaWEgcnVsZSBmYWlsZWQsIGJ1aWxkIHRlc3QgZnVuY3Rpb24gdGhlbiBjaGVjayBvbiB3aW5kb3cucmVzaXplXG4gICAgICAgIC8vIGlmICghb2xkKSB7XG4gICAgICAgICAgLy8gYnVpbGQgdGVzdCBmdW5jdGlvbiBmcm9tIEBtZWRpYSBydWxlXG5cbiAgICAgICAgICB2YXIgbWVkaWFUZXN0ID0gJGdyb3VwVGVzdCBcbiAgICAgICAgICB8fCAocHJlc2V0TWVkaWEgJiYgZnVuY3Rpb24oZG9jKSB7XG4gICAgICAgICAgICAgIHZhciBtZWRpYSA9IG9wdGlvbi5tZWRpYTtcbiAgICAgICAgICAgICAgcmV0dXJuIG1lZGlhID8gbm9kZS5zZWxQYXJ0LnNvbWUoZnVuY3Rpb24ocGFydCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAobWVkaWEsICdpJykudGVzdChwYXJ0LnRyaW0oKSlcbiAgICAgICAgICAgICAgfSkgOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIHx8IGZ1bmN0aW9uKCl7cmV0dXJuIHRydWV9O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGZpcnN0IHRlc3QgaWYgaXQncyB2YWxpZCBmdW5jdGlvblxuICAgICAgICAgICAgdmFyIG1lZGlhRW5hYmxlZCA9IG1lZGlhVGVzdChyb290RG9jKTtcbiAgICAgICAgICAgIG5vZGUubWVkaWFUZXN0ID0gbWVkaWFUZXN0O1xuICAgICAgICAgICAgbm9kZS5tZWRpYUVuYWJsZWQgPSBtZWRpYUVuYWJsZWQ7XG4gICAgICAgICAgICBtZWRpYVN0b3JlLnB1c2gobm9kZSk7XG4gICAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBcbiAgICAgICAgICBbJyddLmNvbmNhdChjc3NQcmVmaXhlcykuc29tZShmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUub21Hcm91cCA9IGFkZENTU1J1bGUoXG4gICAgICAgICAgICAgIC8vIGFsbCBncm91cFJ1bGUgd2lsbCBiZSBhZGRlZCB0byByb290IHNoZWV0XG4gICAgICAgICAgICAgIHNoZWV0LFxuICAgICAgICAgICAgICAnQCcgKyAodiA/ICctJyArIHYudG9Mb3dlckNhc2UoKSArICctJyA6IHYpICsgbm9kZS5ncm91cFRleHQuc2xpY2UoMSksIFtdLCBub2RlXG4gICAgICAgICAgICApLnBvcCgpIHx8IG51bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNlbFRleHQgPSBub2RlLnNlbFRleHRQYXJ0O1xuICAgIHZhciBjc3NUZXh0ID0gZ2V0Qm9keUNzcyhub2RlKTtcblxuICAgIC8vIGl0J3Mgbm9ybWFsIGNzcyBydWxlXG4gICAgaWYgKGNzc1RleHQuam9pbignJykpIHtcbiAgICAgIGlmICghYXRvbUdyb3VwUnVsZShub2RlKSkge1xuICAgICAgICBhZGROb3JtYWxSdWxlKG5vZGUsIHNlbFRleHQsIGNzc1RleHQpO1xuICAgICAgfVxuICAgICAgc3RvcmUgJiYgc3RvcmUucHVzaChzZWxUZXh0ID8gc2VsVGV4dCArICcgeycgKyBjc3NUZXh0LmpvaW4oJycpICsgJ30nIDogY3NzVGV4dCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYyBpbiBjaGlsZHJlbikge1xuICAgICAgLy8gZW1wdHkga2V5IHdpbGwgcGVuZGluZyBwcm9jZWVkXG4gICAgICBpZiAoYyA9PT0gJycpIG5vZGUucG9zdEFyci5wdXNoKGNoaWxkcmVuW2NdKTtcbiAgICAgIGVsc2Ugd2FsayhjaGlsZHJlbltjXSwgc3RvcmUpO1xuICAgIH1cblxuICAgIGlmIChpc0dyb3VwKSB7XG4gICAgICAvLyBpZiBpdCdzIEBwYWdlLCBAa2V5ZnJhbWVzXG4gICAgICBpZiAoYXRvbUdyb3VwUnVsZShub2RlKSAmJiB2YWxpZFBhcmVudChub2RlKSkge1xuICAgICAgICBhZGROb3JtYWxSdWxlKG5vZGUsIG5vZGUuZ3JvdXBUZXh0LCBzdG9yZSk7XG4gICAgICAgIHN0b3JlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtZWRpYSBydWxlcyBuZWVkIGEgc3RhbmQgYWxvbmUgYmxvY2tcbiAgICB2YXIgcG9zdEFyciA9IG5vZGUucG9zdEFycjtcbiAgICBkZWxldGUgbm9kZS5wb3N0QXJyO1xuICAgIHBvc3RBcnIubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICB3YWxrKHYsIHN0b3JlKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcHJldk1lZGlhID0gb3B0aW9uLm1lZGlhO1xuICByZXR1cm4ge1xuICAgIHBvc3Q6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHZhciBtZWRpYUNoYW5nZWQgPSBwcmV2TWVkaWEhPW9wdGlvbi5tZWRpYTtcbiAgICAgIHByZXZNZWRpYSA9IG9wdGlvbi5tZWRpYTtcbiAgICAgIGNoZWNrTWVkaWFMaXN0KCk7XG5cbiAgICAgIHJlc3VsdC5zZXQgPSBmdW5jdGlvbihjc3NQYXRoLCBuZXdPYmope1xuICAgICAgICB2YXIgcGF0aCA9IEFycmF5LmlzQXJyYXkoY3NzUGF0aCkgPyBjc3NQYXRoIDogW2Nzc1BhdGhdO1xuICAgICAgICB2YXIgc3JjT2JqID0gcmVzdWx0Lm9iajtcbiAgICAgICAgaWYoaXNTdHJpbmcocGF0aFswXSkgJiYgcGF0aFswXVswXT09PSckJykge1xuICAgICAgICAgIHNyY09iaiA9IHJlc3VsdC5yZWZbcGF0aC5zaGlmdCgpLnNsaWNlKDEpXS5vYmo7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJldCA9IG9iakdldE9iaiggc3JjT2JqLCBwYXRoICk7XG4gICAgICAgIGlmKHJldC5vayl7XG4gICAgICAgICAgYXNzaWduKHJldC5vYmosIG5ld09iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnVwZGF0ZSgpO1xuICAgICAgfTtcblxuICAgICAgcmVzdWx0LmNzc2RvbSA9IGRvbTtcbiAgICAgIGlmICghcmVzdWx0LmRpZmYgfHwgbWVkaWFDaGFuZ2VkKSB7XG4gICAgICAgIC8vIGl0J3MgZmlyc3QgdGltZSByZW5kZXJcbiAgICAgICAgaWYobWVkaWFDaGFuZ2VkKSB7XG4gICAgICAgICAgLy8gaWYgbWVkaWEgY2hhbmdlZCwgcmVpbml0LCBjbGVhciBhbGwgcnVsZXNcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xlYXJSb290JywgcHJldk1lZGlhLCBvcHRpb24ubWVkaWEpXG4gICAgICAgICAgbWVkaWFTdG9yZSA9IFtdO1xuICAgICAgICAgIGNsZWFyUm9vdChzaGVldCk7XG4gICAgICAgIH1cbiAgICAgICAgd2FsayhyZXN1bHQucm9vdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIG5vdCBmaXJzdCB0aW1lLCBwYXRjaCB0aGUgZGlmZiByZXN1bHQgdG8gQ1NTT01cbiAgICAgICAgdmFyIGRpZmYgPSByZXN1bHQuZGlmZjtcblxuICAgICAgICAvLyBub2RlIGFkZGVkXG4gICAgICAgIGlmIChkaWZmLmFkZGVkKSBkaWZmLmFkZGVkLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICB3YWxrKG5vZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBub2RlIHJlbW92ZWRcbiAgICAgICAgaWYgKGRpZmYucmVtb3ZlZCkgZGlmZi5yZW1vdmVkLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAvLyBhbHNvIHJlbW92ZSBhbGwgY2hpbGQgZ3JvdXAgJiBzZWxcbiAgICAgICAgICBub2RlLnNlbENoaWxkICYmIG5vZGUuc2VsQ2hpbGQuZm9yRWFjaChyZW1vdmVOb2RlKTtcbiAgICAgICAgICByZW1vdmVOb2RlKG5vZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBub2RlIGNoYW5nZWQsIGZpbmQgd2hpY2ggcGFydCBzaG91bGQgYmUgcGF0Y2hlZFxuICAgICAgICBpZiAoZGlmZi5jaGFuZ2VkKSBkaWZmLmNoYW5nZWQuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHZhciBvbSA9IG5vZGUub21SdWxlO1xuICAgICAgICAgIHZhciBkaWZmID0gbm9kZS5kaWZmO1xuXG4gICAgICAgICAgaWYgKCFvbSkgb20gPSBhZGROb3JtYWxSdWxlKG5vZGUsIG5vZGUuc2VsVGV4dFBhcnQsIGdldEJvZHlDc3Mobm9kZSkpXG5cbiAgICAgICAgICAvLyBhZGRlZCBoYXZlIHNhbWUgYWN0aW9uIGFzIGNoYW5nZWQsIGNhbiBiZSBtZXJnZWQuLi4ganVzdCBmb3IgY2xhcml0eVxuICAgICAgICAgIDtbXS5jb25jYXQoZGlmZi5hZGRlZCwgZGlmZi5jaGFuZ2VkKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB2ICYmIG9tICYmIG9tLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIHNldENTU1Byb3BlcnR5KHJ1bGUuc3R5bGUsIHYsIG5vZGUucHJvcFt2XVswXSk7XG4gICAgICAgICAgICAgIH1jYXRjaChlKXt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGRpZmYucmVtb3ZlZCAmJiBkaWZmLnJlbW92ZWQuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdmFyIHByZWZpeFYgPSBwcmVmaXhQcm9wKHYsIHRydWUpO1xuICAgICAgICAgICAgcHJlZml4ViAmJiBvbSAmJiBvbS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBydWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5XG4gICAgICAgICAgICAgICAgICA/IHJ1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJlZml4VilcbiAgICAgICAgICAgICAgICAgIDogcnVsZS5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUocHJlZml4Vik7XG4gICAgICAgICAgICAgIH1jYXRjaChlKXt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbn1cblxuLy8gY3Nzb2JqIHBsdWdpblxuXG52YXIgY2xhc3NOYW1lUmUgPSAvWyBcXH5cXFxcQCQlXiZcXCpcXChcXClcXCtcXD0sLyc7XFw6XCI/PjxbXFxdXFxcXHt9fGBdLztcblxuZnVuY3Rpb24gY3Nzb2JqX3BsdWdpbl9zZWxlY3Rvcl9sb2NhbGl6ZShvcHRpb24pIHtcblxuICBvcHRpb24gPSBvcHRpb24gfHwge307XG5cbiAgdmFyIHNwYWNlID0gb3B0aW9uLnNwYWNlID0gdHlwZW9mIG9wdGlvbi5zcGFjZSE9PSdzdHJpbmcnXG4gICAgICA/ICh0eXBlb2Ygb3B0aW9uLnJhbmRvbSA9PSAnZnVuY3Rpb24nID8gIG9wdGlvbi5yYW5kb20oKSA6IHJhbmRvbSgpKVxuICAgICAgOiBvcHRpb24uc3BhY2U7XG5cbiAgdmFyIGxvY2FsTmFtZXMgPSBvcHRpb24ubG9jYWxOYW1lcyA9IG9wdGlvbi5sb2NhbE5hbWVzIHx8IHt9O1xuXG4gIHZhciBsb2NhbGl6ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZVswXT09JyEnXG4gICAgICA/IG5hbWUuc3Vic3RyKDEpXG4gICAgICA6IChuYW1lIGluIGxvY2FsTmFtZXNcbiAgICAgICAgID8gbG9jYWxOYW1lc1tuYW1lXVxuICAgICAgICAgOiBuYW1lICsgc3BhY2UpXG4gIH07XG5cbiAgdmFyIHBhcnNlU2VsID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYoIWlzU3RyaW5nKHN0cikpIHJldHVybiBzdHJcbiAgICB2YXIgcGFydCA9IHNwbGl0U2VsZWN0b3Ioc3RyLCAnLicsIHRydWUpO1xuICAgIHZhciBzZWw9cGFydFswXTtcbiAgICBmb3IodmFyIGkgPSAxLCBwLCBwb3MsIGxlbiA9IHBhcnQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHAgPSBwYXJ0W2ldO1xuICAgICAgaWYoIXApIHtcbiAgICAgICAgc2VsICs9ICcuJztcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIHBvcyA9IHAuc2VhcmNoKGNsYXNzTmFtZVJlKTtcbiAgICAgIHNlbCArPSAnLicgKyAocG9zPDAgPyBsb2NhbGl6ZShwKSA6IGxvY2FsaXplKHAuc3Vic3RyKDAscG9zKSkgKyBwLnN1YnN0cihwb3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbFxuICB9O1xuXG4gIHZhciBtYXBDbGFzcyA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHIpXG4gICAgICA/IHBhcnNlU2VsKHN0ci5yZXBsYWNlKC9cXHMrXFwuPy9nLCAnLicpLnJlcGxhY2UoL14oW146XFxzLl0pL2ksICcuJDEnKSkucmVwbGFjZSgvXFwuL2csICcgJykudHJpbSgpXG4gICAgICA6IHN0clxuICB9O1xuXG4gIHZhciBzZXRSZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICByZXN1bHQuc3BhY2UgPSBzcGFjZTtcbiAgICByZXN1bHQubG9jYWxOYW1lcyA9IGxvY2FsTmFtZXM7XG4gICAgcmVzdWx0Lm1hcFNlbCA9IHBhcnNlU2VsO1xuICAgIHJlc3VsdC5tYXBDbGFzcyA9IG1hcENsYXNzO1xuICAgIHJldHVybiByZXN1bHRcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlbGVjdG9yOiBmdW5jdGlvbiBsb2NhbGl6ZU5hbWUgKHNlbCwgbm9kZSwgcmVzdWx0KSB7XG4gICAgICAvLyBkb24ndCB0b3VjaCBhdCBydWxlJ3Mgc2VsVGV4dFxuICAgICAgLy8gaXQncyBjb3BpZWQgZnJvbSBwYXJlbnQsIHdoaWNoIGFscmVhZHkgbG9jYWxpemVkXG4gICAgICBpZihub2RlLmF0KSByZXR1cm4gc2VsXG4gICAgICBpZighcmVzdWx0Lm1hcFNlbCkgc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICByZXR1cm4gcGFyc2VTZWwoc2VsKVxuICAgIH0sXG4gICAgcG9zdDogc2V0UmVzdWx0XG4gIH1cbn1cblxuLy8gY3Nzb2JqIGlzIHNpbXBseSBhbiBpbnRlcmdyYXRpb24gZm9yIGNzc29iai1jb3JlLCBjc3NvbVxuXG5mdW5jdGlvbiBjc3NvYmokMSAob2JqLCBjb25maWcsIHN0YXRlKSB7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICB2YXIgbG9jYWwgPSBjb25maWcubG9jYWw7XG4gIGNvbmZpZy5sb2NhbCA9ICFsb2NhbFxuICAgID8ge3NwYWNlOiAnJ31cbiAgOiBsb2NhbCAmJiB0eXBlb2YgbG9jYWwgPT09ICdvYmplY3QnID8gbG9jYWwgOiB7fTtcblxuICBjb25maWcucGx1Z2lucyA9IFtdLmNvbmNhdChcbiAgICBjb25maWcucGx1Z2lucyB8fCBbXSxcbiAgICBjc3NvYmpfcGx1Z2luX3NlbGVjdG9yX2xvY2FsaXplKGNvbmZpZy5sb2NhbCksXG4gICAgY3Nzb2JqX3BsdWdpbl9wb3N0X2Nzc29tKGNvbmZpZy5jc3NvbSlcbiAgKTtcblxuICByZXR1cm4gY3Nzb2JqKGNvbmZpZykob2JqLCBzdGF0ZSlcbn1cblxuY3Nzb2JqJDEudmVyc2lvbiA9ICcxLjMuNic7XG5cbnJldHVybiBjc3NvYmokMTtcblxufSkpKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWR5XG5cbmZ1bmN0aW9uIHJlYWR5IChjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQtcmVhZHkgb25seSBydW5zIGluIHRoZSBicm93c2VyJylcbiAgfVxuICB2YXIgc3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlXG4gIGlmIChzdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBzdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIG9uTG9hZCAoKSB7XG4gICAgY2FsbGJhY2soKVxuICB9KVxufVxuIiwiaW1wb3J0IFVYIGZyb20gJy4vdXgnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tQ2hlY2tlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICBsZXQgdXggPSBuZXcgVVgoKTtcblxuICAgIHV4Lm9uUmVhZHkoKTtcblxuICB9XG5cbn1cbiIsImltcG9ydCBEb21DaGVja2VyIGZyb20gJy4vZG9tY2hlY2tlci5qcyc7XG5cbmNvbnN0IGRvbUNoZWNrID0gbmV3IERvbUNoZWNrZXIoKTtcblxuZG9tQ2hlY2suaW5pdCgpO1xuIiwiaW1wb3J0IGNzc29iaiBmcm9tICdjc3NvYmonO1xuXG52YXIgcmVhZHkgPSByZXF1aXJlKCdkb2N1bWVudC1yZWFkeScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVWCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIGJ1aWxkVVgoKSB7XG5cbiAgICB2YXIgd2lkZ2V0U3R5bGVzID0ge1xuICAgICAgZGl2OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgLy8gc2ltdWxhdGUgNTB2aCBpbiBDU1MzXG4gICAgICAgIGhlaWdodDogKCkgPT4gd2luZG93LmlubmVySGVpZ2h0IC8gMiArICdweCdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHJlc3VsdCA9IGNzc29iaih3aWRnZXRTdHlsZXMpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gcmVzdWx0LnVwZGF0ZSgpO1xuICB9XG5cbiAgb25SZWFkeSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICByZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LmJ1aWxkVVgoKTtcbiAgICB9KTtcblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=