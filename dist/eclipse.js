(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["eclipse"] = factory(require("jquery"));
	else
		root["eclipse"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var helpers = {},
    pluralLangs = {};

pluralLangs.en = function (singular, plural1, plural2, remainder, n) {
  if (n === 1) {
    return singular;
  }

  return plural1;
};
pluralLangs.ru = function (singular, plural1, plural2, remainder, n) {
  if (remainder >= 2 && remainder <= 4 && (n < 5 || n > 21)) {
    return plural2;
  } else if (remainder === 1 && n !== 11) {
    return singular;
  }

  return plural1;
};

helpers.getClass = function (arg) {
  return Object.prototype.toString.call(arg).slice(8, -1);
};

helpers.inArray = function (arr, value) {
  return arr.some(function (item) {
    return item === value;
  });
};

helpers.removeFromArray = function (arr, value) {
  return arr.filter(function (item) {
    return item !== value;
  });
};

helpers.pushIfMiss = function (arr, value) {
  if (!helpers.inArray(arr, value)) {
    return [].concat(_toConsumableArray(arr), [value]);
  }

  return [].concat(_toConsumableArray(arr));
};

helpers.isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(parseFloat(n));
};

helpers.addLeadingZero = function (n) {
  return Math.abs(n) < 10 ? (n < 0 ? '-0' : '0') + Math.abs(n) : n;
};

helpers.getAbsoluteUrl = function () {
  var a;

  return function (url) {
    if (!a) {
      a = document.createElement('a');
    }

    a.href = url || '';

    return a.href;
  };
}();

helpers.plural = function (singular, plural1, plural2, n) {
  var lang = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'ru';

  var remainder;

  if (arguments.length < 4) {
    throw new TypeError('4 arguments required, but only' + arguments.length + 'present.');
  }

  if (typeof n !== 'number') {
    throw new TypeError('parameter 4 is expected to be a number.');
  }

  n = String(helpers.addLeadingZero(Math.abs(n)));
  n = parseInt(n.slice(-2), 10);
  remainder = n % 10;

  if (pluralLangs.hasOwnProperty(lang)) {
    return pluralLangs[lang](singular, plural1, plural2, remainder, n);
  }

  throw new TypeError('Unknown language — ' + lang);
};

exports.default = helpers;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = {};

var HEX_SIGNS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

color.checkRGB = function (colorStr) {
  var result = [],
      i,
      c;

  colorStr = colorStr.split(',');

  if (colorStr.length !== 3) {
    return false;
  }

  for (i = 0; i < colorStr.length; i += 1) {
    c = colorStr[i].trim();

    if (isNaN(c) || String(parseInt(c, 10)).length !== c.length) {
      return false;
    }

    if (parseInt(c, 10) < 0 || parseInt(c, 10) > 255) {
      return false;
    }

    result.push(c);
  }

  return result;
};

color.checkRGBA = function (colorStr) {
  var result = [],
      i,
      c,
      op;

  colorStr = colorStr.split(',');

  if (colorStr.length !== 4) {
    return false;
  }

  for (i = 0; i < colorStr.length - 1; i += 1) {
    c = colorStr[i].trim();

    if (isNaN(c) || String(parseInt(c, 10)).length !== c.length) {
      return false;
    }

    if (parseInt(c, 10) < 0 || parseInt(c, 10) > 255) {
      return false;
    }

    result.push(c);
  }

  op = colorStr[3];

  if (op[0] === ' ') {
    op = op.trim();
  }

  if (parseFloat(op) < 0 || parseFloat(op) > 1 || String(parseFloat(op)).length !== op.length) {
    return false;
  }

  result.push(op);

  return result;
};

color.isRGBLike = function (colorStr) {
  var result = { value: false, type: null };

  if (typeof colorStr !== 'string') {
    return result;
  }
  if (colorStr[0] !== 'r' || colorStr[1] !== 'g' || colorStr[2] !== 'b') {
    return result;
  }
  if (colorStr[3] === 'a') {
    if (colorStr[4] !== '(') {
      return result;
    }
  } else if (colorStr[3] !== 'a') {
    if (colorStr[3] !== '(') {
      return result;
    }
  }

  if (colorStr[colorStr.length - 1] !== ')') {
    return result;
  }

  if (colorStr[3] === 'a') {
    return {
      value: color.checkRGBA(colorStr.slice(5, -1)),
      type: 'rgba'
    };
  }

  return {
    value: color.checkRGB(colorStr.slice(4, -1)),
    type: 'rgb'
  };
};

color.isHexLike = function (colorStr) {
  var len, i;

  if (typeof colorStr !== 'string') {
    return false;
  }

  if (colorStr[0] === '#') {
    colorStr = colorStr.slice(1);
  }

  len = colorStr.length;

  if (len !== 3 && len !== 6) {
    return false;
  }

  for (i = 0; i < len; i += 1) {
    if (!_helpers2.default.inArray(HEX_SIGNS, colorStr[i].toLowerCase())) {
      return false;
    }
  }

  return colorStr;
};

color.change = function (colorStr, percent, action) {
  var parts, red, green, blue, op, startPoint, newColor;

  if (action !== 'lighten' && action !== 'darken') {
    return;
  }

  colorStr = colorStr.trim();

  if (colorStr === 'transparent') {
    parts = { value: [0, 0, 0] };
  } else {
    parts = color.isRGBLike(colorStr);
  }

  if (!parts.value) {
    return;
  }

  parts = parts.value;

  red = parseInt(parts[0], 10);
  green = parseInt(parts[1], 10);
  blue = parseInt(parts[2], 10);
  op = parseFloat(parts[3]);
  newColor = isNaN(op) ? 'rgb(' : 'rgba(';

  percent = percent / 100;

  startPoint = action === 'lighten' ? 255 : 0;

  newColor += Math.round((255 - red) * percent) + red + ',';
  newColor += Math.round((255 - green) * percent) + green + ',';
  newColor += Math.round((255 - blue) * percent) + blue;

  newColor += isNaN(op) ? ')' : ',' + op + ')';

  return newColor;
};

color.hexToRgb = function (hex) {
  var result = [],
      i;

  hex = color.isHexLike(hex);

  if (!hex) {
    return null;
  }

  if (hex.length === 3) {
    for (i = 0; i < hex.length; i += 1) {
      result.push('' + parseInt('' + hex[i] + hex[i], 16));
    }
  } else {
    for (i = 0; i < hex.length; i += 1) {
      if (i % 2 === 1) {
        result.push('' + parseInt('' + hex[i - 1] + hex[i], 16));
      }
    }
  }

  return result;
};

exports.default = color;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DOM = {};

DOM.scrollPage = function (target, correction, options) {
  return (0, _jquery2.default)('html, body').animate({
    scrollTop: target.offset().top - (correction || 0)
  }, options || {}).promise();
};

DOM.getMaxHeight = function (blocks) {
  var maxHeight = (0, _jquery2.default)(blocks[0]).outerHeight();

  blocks.each(function () {
    if ((0, _jquery2.default)(this).outerHeight() > maxHeight) {
      maxHeight = (0, _jquery2.default)(this).outerHeight();
    }
  });

  return maxHeight;
};

exports.default = DOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var decorators = {};

decorators.debounce = function (func, delay) {
  var state = null;
  var COOLDOWN = 1;

  return function () {
    var result;

    if (state) {
      return;
    }

    result = func.apply(this, arguments);
    state = COOLDOWN;

    setTimeout(function () {
      state = null;
    }, delay || 100);

    return result;
  };
};

decorators.throttle = function (func, delay) {
  var state = null,
      lastArgs,
      lastContext;
  var COOLDOWN = 1;

  return function wrapper() {
    var result;

    if (state) {
      lastArgs = arguments;
      lastContext = this;

      return;
    }

    result = func.apply(this, arguments);
    state = COOLDOWN;

    setTimeout(function () {
      state = null;
      if (lastArgs) {
        wrapper.apply(lastContext, lastArgs);
        lastContext = lastArgs = null;
      }
    }, delay || 100);

    return result;
  };
};

decorators.smartDraw = function (func, delay, execAsap) {
  var timerID;

  return function () {
    var context = this,
        args = arguments;

    if (timerID) {
      clearTimeout(timerID);
    } else if (execAsap) {
      func.apply(context, args);
    }

    timerID = setTimeout(function () {
      if (!execAsap) {
        func.apply(context, args);
      }

      timerID = null;
    }, delay || 100);
  };
};

decorators.once = function (func, context) {
  var _arguments = arguments;

  var isCalled = false;

  return function () {
    var result;

    if (isCalled) {
      return null;
    }

    result = func.apply(context, _arguments);
    isCalled = true;

    return result;
  };
};

exports.default = decorators;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var ANIMATION_SUPPORT = function () {
  var domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
      el = document.createElement('div'),
      i;

  if (el.style.animationName !== undefined) {
    return true;
  }

  for (i = 0; i < domPrefixes.length; i += 1) {
    if (el.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
      return true;
    }
  }

  return false;
}();

styles.rippleButton = function () {
  var timerID;

  return function (e) {
    var btn, circle, coords, size, xPos, yPos, action, percent, btnColor, bg;

    if (!ANIMATION_SUPPORT) {
      return;
    }

    btn = (0, _jquery2.default)(this);
    circle = btn.find('.e-ripple-circle');
    coords = btn.offset();
    size = Math.max(btn.width(), btn.height());
    xPos = e.pageX - coords.left;
    yPos = e.pageY - coords.top;
    action = btn.data('e-color-action');
    percent = btn.data('e-percent-change');
    btnColor = getComputedStyle(btn[0]).backgroundColor;

    bg = _color2.default.change(btnColor, percent, action);

    if (circle) {
      circle.remove();
      circle = null;
    }

    circle = (0, _jquery2.default)('<div/>');
    circle.css({
      width: size + 'px',
      height: size + 'px',
      top: yPos - size / 2 + 'px',
      left: xPos - size / 2 + 'px',
      backgroundColor: bg
    });
    circle.addClass('e-ripple-circle');

    btn.append(circle);

    if (timerID) {
      clearTimeout(timerID);
    }

    timerID = setTimeout(function () {
      circle.remove();
    }, btn.data('e-ripple-delay') || 600);
  };
}();

exports.default = styles;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var utils = {};

utils.addMethod = function (namespace, func) {
  var parts = namespace.split('.'),
      parent = this;

  if (parts[0] === 'eclipse') {
    parts = parts.slice(1);
  }

  parts.forEach(function (item, i) {
    if (!(parts[i] in parent) && i !== parts.length - 1) {
      parent[parts[i]] = {};
    } else if (!(parts[i] in parent) && i === parts.length - 1) {
      parent[parts[i]] = func;
    }
    parent = parent[parts[i]];
  });

  return parent;
};

utils.namespace = function (nsString) {
  var parts = nsString.split('.'),
      parent = this;

  if (parts[0] === 'eclipse') {
    parts = parts.slice(1);
  }

  parts.forEach(function (item, i) {
    if (!(parts[i] in parent)) {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  });

  return parent;
};

exports.default = utils;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

var _styles = __webpack_require__(5);

var _styles2 = _interopRequireDefault(_styles);

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

var _decorators = __webpack_require__(4);

var _decorators2 = _interopRequireDefault(_decorators);

var _DOM = __webpack_require__(3);

var _DOM2 = _interopRequireDefault(_DOM);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eclipse = {
  globals: {},
  storage: {
    dropdowns: [],
    bundles: [],
    spinners: [],
    staticTabs: [],
    adaptiveTabs: [],
    searches: [],
    cache: {}
  },
  helpers: _helpers2.default,
  styles: _styles2.default,
  color: _color2.default,
  decorators: _decorators2.default,
  DOM: _DOM2.default,
  utils: _utils2.default,
  modules: {}
};

eclipse.utils.addMethod = eclipse.utils.addMethod.bind(eclipse);
eclipse.utils.namespace = eclipse.utils.namespace.bind(eclipse);

module.exports = eclipse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDk5MDQxNzI0OWZlYjA2YjM2MzJiIiwid2VicGFjazovLy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vbGliL2NvbG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9ET00uanMiLCJ3ZWJwYWNrOi8vL2xpYi9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovLy9saWIvc3R5bGVzLmpzIiwid2VicGFjazovLy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2VjbGlwc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlY2xpcHNlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlY2xpcHNlXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTkwNDE3MjQ5ZmViMDZiMzYzMmIiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgaGVscGVycyA9IHt9LFxyXG4gICAgcGx1cmFsTGFuZ3MgPSB7fTtcclxuXHJcbnBsdXJhbExhbmdzLmVuID0gZnVuY3Rpb24gKHNpbmd1bGFyLCBwbHVyYWwxLCBwbHVyYWwyLCByZW1haW5kZXIsIG4pIHtcclxuICBpZiAobiA9PT0gMSkge1xyXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBsdXJhbDE7XHJcbn07XHJcbnBsdXJhbExhbmdzLnJ1ID0gZnVuY3Rpb24gKHNpbmd1bGFyLCBwbHVyYWwxLCBwbHVyYWwyLCByZW1haW5kZXIsIG4pIHtcclxuICBpZiAoKHJlbWFpbmRlciA+PSAyICYmIHJlbWFpbmRlciA8PSA0KSAmJiAobiA8IDUgfHwgbiA+IDIxKSkge1xyXG4gICAgcmV0dXJuIHBsdXJhbDI7XHJcbiAgfSBlbHNlIGlmIChyZW1haW5kZXIgPT09IDEgJiYgbiAhPT0gMTEpIHtcclxuICAgIHJldHVybiBzaW5ndWxhcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBwbHVyYWwxO1xyXG59O1xyXG5cclxuaGVscGVycy5nZXRDbGFzcyA9IGZ1bmN0aW9uIChhcmcpIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykuc2xpY2UoOCwgLTEpO1xyXG59O1xyXG5cclxuaGVscGVycy5pbkFycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWUpIHtcclxuICByZXR1cm4gYXJyLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IHZhbHVlKTtcclxufTtcclxuXHJcbmhlbHBlcnMucmVtb3ZlRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWUpIHtcclxuICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdmFsdWUpO1xyXG59O1xyXG5cclxuaGVscGVycy5wdXNoSWZNaXNzID0gZnVuY3Rpb24gKGFyciwgdmFsdWUpIHtcclxuICBpZiAoIWhlbHBlcnMuaW5BcnJheShhcnIsIHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIFsuLi5hcnIsIHZhbHVlXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbLi4uYXJyXTtcclxufTtcclxuXHJcbmhlbHBlcnMuaXNOdW1lcmljID0gZnVuY3Rpb24gKG4pIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKHBhcnNlRmxvYXQobikpO1xyXG59O1xyXG5cclxuaGVscGVycy5hZGRMZWFkaW5nWmVybyA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgcmV0dXJuIChNYXRoLmFicyhuKSA8IDEwKSA/ICgobiA8IDApID8gJy0wJyA6ICcwJykgKyBNYXRoLmFicyhuKSA6IG47XHJcbn07XHJcblxyXG5oZWxwZXJzLmdldEFic29sdXRlVXJsID0gKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYTtcclxuXHJcbiAgcmV0dXJuICh1cmwpID0+IHtcclxuICAgIGlmICghYSkge1xyXG4gICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgfVxyXG5cclxuICAgIGEuaHJlZiA9IHVybCB8fCAnJztcclxuXHJcbiAgICByZXR1cm4gYS5ocmVmO1xyXG4gIH07XHJcbn0oKSk7XHJcblxyXG5oZWxwZXJzLnBsdXJhbCA9IGZ1bmN0aW9uIChzaW5ndWxhciwgcGx1cmFsMSwgcGx1cmFsMiwgbiwgbGFuZyA9ICdydScpIHtcclxuICB2YXIgcmVtYWluZGVyO1xyXG5cclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzQgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seScgKyBhcmd1bWVudHMubGVuZ3RoICsgJ3ByZXNlbnQuJyk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgNCBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlci4nKTtcclxuICB9XHJcblxyXG4gIG4gPSBTdHJpbmcoaGVscGVycy5hZGRMZWFkaW5nWmVybyhNYXRoLmFicyhuKSkpO1xyXG4gIG4gPSBwYXJzZUludChuLnNsaWNlKC0yKSwgMTApO1xyXG4gIHJlbWFpbmRlciA9IG4gJSAxMDtcclxuXHJcbiAgaWYgKHBsdXJhbExhbmdzLmhhc093blByb3BlcnR5KGxhbmcpKSB7XHJcbiAgICByZXR1cm4gcGx1cmFsTGFuZ3NbbGFuZ10oc2luZ3VsYXIsIHBsdXJhbDEsIHBsdXJhbDIsIHJlbWFpbmRlciwgbik7XHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGxhbmd1YWdlIOKAlCAnICsgbGFuZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlbHBlcnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvaGVscGVycy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG52YXIgY29sb3IgPSB7fTtcclxuXHJcbmNvbnN0IEhFWF9TSUdOUyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xyXG5cclxuY29sb3IuY2hlY2tSR0IgPSBmdW5jdGlvbiAoY29sb3JTdHIpIHtcclxuICB2YXIgcmVzdWx0ID0gW10sIGksIGM7XHJcblxyXG4gIGNvbG9yU3RyID0gY29sb3JTdHIuc3BsaXQoJywnKTtcclxuXHJcbiAgaWYgKGNvbG9yU3RyLmxlbmd0aCAhPT0gMykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGNvbG9yU3RyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjID0gY29sb3JTdHJbaV0udHJpbSgpO1xyXG5cclxuICAgIGlmIChpc05hTihjKSB8fCBTdHJpbmcocGFyc2VJbnQoYywgMTApKS5sZW5ndGggIT09IGMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyc2VJbnQoYywgMTApIDwgMCB8fCBwYXJzZUludChjLCAxMCkgPiAyNTUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5wdXNoKGMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbG9yLmNoZWNrUkdCQSA9IGZ1bmN0aW9uIChjb2xvclN0cikge1xyXG4gIHZhciByZXN1bHQgPSBbXSwgaSwgYywgb3A7XHJcblxyXG4gIGNvbG9yU3RyID0gY29sb3JTdHIuc3BsaXQoJywnKTtcclxuXHJcbiAgaWYgKGNvbG9yU3RyLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGNvbG9yU3RyLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xyXG4gICAgYyA9IGNvbG9yU3RyW2ldLnRyaW0oKTtcclxuXHJcbiAgICBpZiAoaXNOYU4oYykgfHwgU3RyaW5nKHBhcnNlSW50KGMsIDEwKSkubGVuZ3RoICE9PSBjLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcnNlSW50KGMsIDEwKSA8IDAgfHwgcGFyc2VJbnQoYywgMTApID4gMjU1KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQucHVzaChjKTtcclxuICB9XHJcblxyXG4gIG9wID0gY29sb3JTdHJbM107XHJcblxyXG4gIGlmIChvcFswXSA9PT0gJyAnKSB7XHJcbiAgICBvcCA9IG9wLnRyaW0oKTtcclxuICB9XHJcblxyXG4gIGlmIChwYXJzZUZsb2F0KG9wKSA8IDAgfHwgcGFyc2VGbG9hdChvcCkgPiAxIHx8IFN0cmluZyhwYXJzZUZsb2F0KG9wKSkubGVuZ3RoICE9PSBvcC5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlc3VsdC5wdXNoKG9wKTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbG9yLmlzUkdCTGlrZSA9IGZ1bmN0aW9uIChjb2xvclN0cikge1xyXG4gIHZhciByZXN1bHQgPSB7dmFsdWU6IGZhbHNlLCB0eXBlOiBudWxsfTtcclxuXHJcbiAgaWYgKHR5cGVvZiBjb2xvclN0ciAhPT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIGlmIChjb2xvclN0clswXSAhPT0gJ3InIHx8IGNvbG9yU3RyWzFdICE9PSAnZycgfHwgY29sb3JTdHJbMl0gIT09ICdiJykge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgaWYgKGNvbG9yU3RyWzNdID09PSAnYScpIHtcclxuICAgIGlmIChjb2xvclN0cls0XSAhPT0gJygnKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChjb2xvclN0clszXSAhPT0gJ2EnKSB7XHJcbiAgICBpZiAoY29sb3JTdHJbM10gIT09ICcoJykge1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGNvbG9yU3RyW2NvbG9yU3RyLmxlbmd0aCAtIDFdICE9PSAnKScpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpZiAoY29sb3JTdHJbM10gPT09ICdhJykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGNvbG9yLmNoZWNrUkdCQShjb2xvclN0ci5zbGljZSg1LCAtMSkpLFxyXG4gICAgICB0eXBlOiAncmdiYSdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmFsdWU6IGNvbG9yLmNoZWNrUkdCKGNvbG9yU3RyLnNsaWNlKDQsIC0xKSksXHJcbiAgICB0eXBlOiAncmdiJ1xyXG4gIH07XHJcbn07XHJcblxyXG5jb2xvci5pc0hleExpa2UgPSBmdW5jdGlvbiAoY29sb3JTdHIpIHtcclxuICB2YXIgbGVuLCBpO1xyXG5cclxuICBpZiAodHlwZW9mIGNvbG9yU3RyICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbG9yU3RyWzBdID09PSAnIycpIHtcclxuICAgIGNvbG9yU3RyID0gY29sb3JTdHIuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICBsZW4gPSBjb2xvclN0ci5sZW5ndGg7XHJcblxyXG4gIGlmIChsZW4gIT09IDMgJiYgbGVuICE9PSA2KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgIGlmICghaGVscGVycy5pbkFycmF5KEhFWF9TSUdOUywgY29sb3JTdHJbaV0udG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbG9yU3RyO1xyXG59O1xyXG5cclxuY29sb3IuY2hhbmdlID0gZnVuY3Rpb24gKGNvbG9yU3RyLCBwZXJjZW50LCBhY3Rpb24pIHtcclxuICB2YXIgcGFydHMsXHJcbiAgICByZWQsIGdyZWVuLCBibHVlLFxyXG4gICAgb3AsXHJcbiAgICBzdGFydFBvaW50LFxyXG4gICAgbmV3Q29sb3I7XHJcblxyXG4gIGlmIChhY3Rpb24gIT09ICdsaWdodGVuJyAmJiBhY3Rpb24gIT09ICdkYXJrZW4nKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb2xvclN0ciA9IGNvbG9yU3RyLnRyaW0oKTtcclxuXHJcbiAgaWYgKGNvbG9yU3RyID09PSAndHJhbnNwYXJlbnQnKSB7XHJcbiAgICBwYXJ0cyA9IHt2YWx1ZTogWzAsIDAsIDBdfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFydHMgPSBjb2xvci5pc1JHQkxpa2UoY29sb3JTdHIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwYXJ0cy52YWx1ZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcGFydHMgPSBwYXJ0cy52YWx1ZTtcclxuXHJcbiAgcmVkID0gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcclxuICBncmVlbiA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XHJcbiAgYmx1ZSA9IHBhcnNlSW50KHBhcnRzWzJdLCAxMCk7XHJcbiAgb3AgPSBwYXJzZUZsb2F0KHBhcnRzWzNdKTtcclxuICBuZXdDb2xvciA9IGlzTmFOKG9wKSA/ICdyZ2IoJyA6ICdyZ2JhKCc7XHJcblxyXG4gIHBlcmNlbnQgPSBwZXJjZW50IC8gMTAwO1xyXG5cclxuICBzdGFydFBvaW50ID0gKGFjdGlvbiA9PT0gJ2xpZ2h0ZW4nID8gMjU1IDogMCk7XHJcblxyXG4gIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSByZWQpICogcGVyY2VudCkgKyByZWQpICsgJywnO1xyXG4gIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSBncmVlbikgKiBwZXJjZW50KSArIGdyZWVuKSArICcsJztcclxuICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMjU1IC0gYmx1ZSkgKiBwZXJjZW50KSArIGJsdWUpO1xyXG5cclxuICBuZXdDb2xvciArPSAoaXNOYU4ob3ApID8gJyknIDogJywnICsgb3AgKyAnKScpO1xyXG5cclxuICByZXR1cm4gbmV3Q29sb3I7XHJcbn07XHJcblxyXG5jb2xvci5oZXhUb1JnYiA9IGZ1bmN0aW9uIChoZXgpIHtcclxuICB2YXIgcmVzdWx0ID0gW10sIGk7XHJcblxyXG4gIGhleCA9IGNvbG9yLmlzSGV4TGlrZShoZXgpO1xyXG5cclxuICBpZiAoIWhleCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGhleC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICByZXN1bHQucHVzaCgnJyArIHBhcnNlSW50KCcnICsgaGV4W2ldICsgaGV4W2ldLCAxNikpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaGV4Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKCcnICsgcGFyc2VJbnQoJycgKyBoZXhbaSAtIDFdICsgaGV4W2ldLCAxNikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sb3I7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvY29sb3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwiLFwidW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcImpRdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbnZhciBET00gPSB7fTtcclxuXHJcbkRPTS5zY3JvbGxQYWdlID0gZnVuY3Rpb24gKHRhcmdldCwgY29ycmVjdGlvbiwgb3B0aW9ucykge1xyXG4gIHJldHVybiAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSAoY29ycmVjdGlvbiB8fCAwKVxyXG4gIH0sIG9wdGlvbnMgfHwge30pLnByb21pc2UoKTtcclxufTtcclxuXHJcbkRPTS5nZXRNYXhIZWlnaHQgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XHJcbiAgdmFyIG1heEhlaWdodCA9ICQoYmxvY2tzWzBdKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICBibG9ja3MuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5vdXRlckhlaWdodCgpID4gbWF4SGVpZ2h0KSB7XHJcbiAgICAgIG1heEhlaWdodCA9ICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG1heEhlaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRE9NO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL0RPTS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBkZWNvcmF0b3JzID0ge307XHJcblxyXG5kZWNvcmF0b3JzLmRlYm91bmNlID0gZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XHJcbiAgdmFyIHN0YXRlID0gbnVsbDtcclxuICBjb25zdCBDT09MRE9XTiA9IDE7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgc3RhdGUgPSBDT09MRE9XTjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc3RhdGUgPSBudWxsO1xyXG4gICAgfSwgZGVsYXkgfHwgMTAwKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbn07XHJcblxyXG5kZWNvcmF0b3JzLnRocm90dGxlID0gZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XHJcbiAgdmFyIHN0YXRlID0gbnVsbCxcclxuICAgICAgbGFzdEFyZ3MsIGxhc3RDb250ZXh0O1xyXG4gIGNvbnN0IENPT0xET1dOID0gMTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZXIgKCkge1xyXG4gICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgIGxhc3RDb250ZXh0ID0gdGhpcztcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICBzdGF0ZSA9IENPT0xET1dOO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdGF0ZSA9IG51bGw7XHJcbiAgICAgIGlmIChsYXN0QXJncykge1xyXG4gICAgICAgIHdyYXBwZXIuYXBwbHkobGFzdENvbnRleHQsIGxhc3RBcmdzKTtcclxuICAgICAgICBsYXN0Q29udGV4dCA9IGxhc3RBcmdzID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSwgZGVsYXkgfHwgMTAwKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbn07XHJcblxyXG5kZWNvcmF0b3JzLnNtYXJ0RHJhdyA9IGZ1bmN0aW9uIChmdW5jLCBkZWxheSwgZXhlY0FzYXApIHtcclxuICB2YXIgdGltZXJJRDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuXHJcbiAgICBpZiAodGltZXJJRCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJRCk7XHJcbiAgICB9IGVsc2UgaWYgKGV4ZWNBc2FwKSB7XHJcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZXJJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIWV4ZWNBc2FwKSB7XHJcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGltZXJJRCA9IG51bGw7XHJcbiAgICB9LCBkZWxheSB8fCAxMDApO1xyXG4gIH07XHJcbn07XHJcblxyXG5kZWNvcmF0b3JzLm9uY2UgPSBmdW5jdGlvbiAoZnVuYywgY29udGV4dCkge1xyXG4gIHZhciBpc0NhbGxlZCA9IGZhbHNlO1xyXG5cclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICBpZiAoaXNDYWxsZWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgaXNDYWxsZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWNvcmF0b3JzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2RlY29yYXRvcnMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29sb3IgZnJvbSAnLi9jb2xvcic7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuXHJcbnZhciBzdHlsZXMgPSB7fTtcclxuXHJcbmNvbnN0IEFOSU1BVElPTl9TVVBQT1JUID0gKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zIEtodG1sJy5zcGxpdCgnICcpLFxyXG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGk7XHJcblxyXG4gIGlmIChlbC5zdHlsZS5hbmltYXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGRvbVByZWZpeGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWwuc3R5bGVbZG9tUHJlZml4ZXNbaV0gKyAnQW5pbWF0aW9uTmFtZSddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn0oKSk7XHJcblxyXG5zdHlsZXMucmlwcGxlQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgdGltZXJJRDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgYnRuLFxyXG4gICAgICBjaXJjbGUsXHJcbiAgICAgIGNvb3JkcyxcclxuICAgICAgc2l6ZSxcclxuICAgICAgeFBvcywgeVBvcyxcclxuICAgICAgYWN0aW9uLCBwZXJjZW50LFxyXG4gICAgICBidG5Db2xvciwgYmc7XHJcblxyXG4gICAgaWYgKCFBTklNQVRJT05fU1VQUE9SVCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYnRuID0gJCh0aGlzKTtcclxuICAgIGNpcmNsZSA9IGJ0bi5maW5kKCcuZS1yaXBwbGUtY2lyY2xlJyk7XHJcbiAgICBjb29yZHMgPSBidG4ub2Zmc2V0KCk7XHJcbiAgICBzaXplID0gTWF0aC5tYXgoYnRuLndpZHRoKCksIGJ0bi5oZWlnaHQoKSk7XHJcbiAgICB4UG9zID0gZS5wYWdlWCAtIGNvb3Jkcy5sZWZ0O1xyXG4gICAgeVBvcyA9IGUucGFnZVkgLSBjb29yZHMudG9wO1xyXG4gICAgYWN0aW9uID0gYnRuLmRhdGEoJ2UtY29sb3ItYWN0aW9uJyk7XHJcbiAgICBwZXJjZW50ID0gYnRuLmRhdGEoJ2UtcGVyY2VudC1jaGFuZ2UnKTtcclxuICAgIGJ0bkNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShidG5bMF0pLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICBiZyA9IGNvbG9yLmNoYW5nZShidG5Db2xvciwgcGVyY2VudCwgYWN0aW9uKTtcclxuICAgIFxyXG4gICAgaWYgKGNpcmNsZSkge1xyXG4gICAgICBjaXJjbGUucmVtb3ZlKCk7XHJcbiAgICAgIGNpcmNsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY2lyY2xlID0gJCgnPGRpdi8+Jyk7XHJcbiAgICBjaXJjbGUuY3NzKHtcclxuICAgICAgd2lkdGg6IHNpemUgKyAncHgnLFxyXG4gICAgICBoZWlnaHQ6IHNpemUgKyAncHgnLFxyXG4gICAgICB0b3A6ICh5UG9zIC0gc2l6ZSAvIDIpICsgJ3B4JyxcclxuICAgICAgbGVmdDogKHhQb3MgLSBzaXplIC8gMikgKyAncHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnXHJcbiAgICB9KTtcclxuICAgIGNpcmNsZS5hZGRDbGFzcygnZS1yaXBwbGUtY2lyY2xlJyk7XHJcblxyXG4gICAgYnRuLmFwcGVuZChjaXJjbGUpO1xyXG5cclxuICAgIGlmICh0aW1lcklEKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklEKTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lcklEID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNpcmNsZS5yZW1vdmUoKTtcclxuICAgIH0sIGJ0bi5kYXRhKCdlLXJpcHBsZS1kZWxheScpIHx8IDYwMCk7XHJcbiAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9zdHlsZXMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSB7fTtcclxuXHJcbnV0aWxzLmFkZE1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIGZ1bmMpIHtcclxuICB2YXIgcGFydHMgPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKSxcclxuICAgIHBhcmVudCA9IHRoaXM7XHJcblxyXG4gIGlmIChwYXJ0c1swXSA9PT0gJ2VjbGlwc2UnKSB7XHJcbiAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbiAgcGFydHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgaWYgKCEocGFydHNbaV0gaW4gcGFyZW50KSAmJiBpICE9PSBwYXJ0cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHBhcmVudFtwYXJ0c1tpXV0gPSB7fTtcclxuICAgIH0gZWxzZSBpZiAoIShwYXJ0c1tpXSBpbiBwYXJlbnQpICYmIGkgPT09IHBhcnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgcGFyZW50W3BhcnRzW2ldXSA9IGZ1bmM7XHJcbiAgICB9XHJcbiAgICBwYXJlbnQgPSBwYXJlbnRbcGFydHNbaV1dO1xyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBwYXJlbnQ7XHJcbn07XHJcblxyXG51dGlscy5uYW1lc3BhY2UgPSBmdW5jdGlvbiAobnNTdHJpbmcpIHtcclxuICB2YXIgcGFydHMgPSBuc1N0cmluZy5zcGxpdCgnLicpLFxyXG4gICAgcGFyZW50ID0gdGhpcztcclxuXHJcbiAgaWYgKHBhcnRzWzBdID09PSAnZWNsaXBzZScpIHtcclxuICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICBpZiAoIShwYXJ0c1tpXSBpbiBwYXJlbnQpKSB7XHJcbiAgICAgIHBhcmVudFtwYXJ0c1tpXV0gPSB7fTtcclxuICAgIH1cclxuICAgIHBhcmVudCA9IHBhcmVudFtwYXJ0c1tpXV07XHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIHBhcmVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3V0aWxzLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi9saWIvaGVscGVycyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWIvc3R5bGVzJztcclxuaW1wb3J0IGNvbG9yIGZyb20gJy4vbGliL2NvbG9yJztcclxuaW1wb3J0IGRlY29yYXRvcnMgZnJvbSAnLi9saWIvZGVjb3JhdG9ycyc7XHJcbmltcG9ydCBET00gZnJvbSAnLi9saWIvRE9NJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vbGliL3V0aWxzJztcclxuXHJcbnZhciBlY2xpcHNlID0ge1xyXG4gIGdsb2JhbHM6IHt9LFxyXG4gIHN0b3JhZ2U6IHtcclxuICAgIGRyb3Bkb3duczogW10sXHJcbiAgICBidW5kbGVzOiBbXSxcclxuICAgIHNwaW5uZXJzOiBbXSxcclxuICAgIHN0YXRpY1RhYnM6IFtdLFxyXG4gICAgYWRhcHRpdmVUYWJzOiBbXSxcclxuICAgIHNlYXJjaGVzOiBbXSxcclxuICAgIGNhY2hlOiB7fVxyXG4gIH0sXHJcbiAgaGVscGVycyxcclxuICBzdHlsZXMsXHJcbiAgY29sb3IsXHJcbiAgZGVjb3JhdG9ycyxcclxuICBET00sXHJcbiAgdXRpbHMsIFxyXG4gIG1vZHVsZXM6IHt9XHJcbn07XHJcblxyXG5lY2xpcHNlLnV0aWxzLmFkZE1ldGhvZCA9IGVjbGlwc2UudXRpbHMuYWRkTWV0aG9kLmJpbmQoZWNsaXBzZSk7XHJcbmVjbGlwc2UudXRpbHMubmFtZXNwYWNlID0gZWNsaXBzZS51dGlscy5uYW1lc3BhY2UuYmluZChlY2xpcHNlKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZWNsaXBzZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVjbGlwc2UuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7QUNoRUE7QUFDQTs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdEZBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFNQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvRkE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=