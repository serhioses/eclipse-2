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
    responsiveTabs: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGI3ZTU5NjYwMDQ5MzNjMjBiZTA5Iiwid2VicGFjazovLy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vbGliL2NvbG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9ET00uanMiLCJ3ZWJwYWNrOi8vL2xpYi9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovLy9saWIvc3R5bGVzLmpzIiwid2VicGFjazovLy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2VjbGlwc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlY2xpcHNlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlY2xpcHNlXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjdlNTk2NjAwNDkzM2MyMGJlMDkiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgaGVscGVycyA9IHt9LFxyXG4gICAgcGx1cmFsTGFuZ3MgPSB7fTtcclxuXHJcbnBsdXJhbExhbmdzLmVuID0gZnVuY3Rpb24gKHNpbmd1bGFyLCBwbHVyYWwxLCBwbHVyYWwyLCByZW1haW5kZXIsIG4pIHtcclxuICBpZiAobiA9PT0gMSkge1xyXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBsdXJhbDE7XHJcbn07XHJcbnBsdXJhbExhbmdzLnJ1ID0gZnVuY3Rpb24gKHNpbmd1bGFyLCBwbHVyYWwxLCBwbHVyYWwyLCByZW1haW5kZXIsIG4pIHtcclxuICBpZiAoKHJlbWFpbmRlciA+PSAyICYmIHJlbWFpbmRlciA8PSA0KSAmJiAobiA8IDUgfHwgbiA+IDIxKSkge1xyXG4gICAgcmV0dXJuIHBsdXJhbDI7XHJcbiAgfSBlbHNlIGlmIChyZW1haW5kZXIgPT09IDEgJiYgbiAhPT0gMTEpIHtcclxuICAgIHJldHVybiBzaW5ndWxhcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBwbHVyYWwxO1xyXG59O1xyXG5cclxuaGVscGVycy5nZXRDbGFzcyA9IGZ1bmN0aW9uIChhcmcpIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykuc2xpY2UoOCwgLTEpO1xyXG59O1xyXG5cclxuaGVscGVycy5pbkFycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWUpIHtcclxuICByZXR1cm4gYXJyLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IHZhbHVlKTtcclxufTtcclxuXHJcbmhlbHBlcnMucmVtb3ZlRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWUpIHtcclxuICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdmFsdWUpO1xyXG59O1xyXG5cclxuaGVscGVycy5wdXNoSWZNaXNzID0gZnVuY3Rpb24gKGFyciwgdmFsdWUpIHtcclxuICBpZiAoIWhlbHBlcnMuaW5BcnJheShhcnIsIHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIFsuLi5hcnIsIHZhbHVlXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbLi4uYXJyXTtcclxufTtcclxuXHJcbmhlbHBlcnMuaXNOdW1lcmljID0gZnVuY3Rpb24gKG4pIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKHBhcnNlRmxvYXQobikpO1xyXG59O1xyXG5cclxuaGVscGVycy5hZGRMZWFkaW5nWmVybyA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgcmV0dXJuIChNYXRoLmFicyhuKSA8IDEwKSA/ICgobiA8IDApID8gJy0wJyA6ICcwJykgKyBNYXRoLmFicyhuKSA6IG47XHJcbn07XHJcblxyXG5oZWxwZXJzLmdldEFic29sdXRlVXJsID0gKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYTtcclxuXHJcbiAgcmV0dXJuICh1cmwpID0+IHtcclxuICAgIGlmICghYSkge1xyXG4gICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgfVxyXG5cclxuICAgIGEuaHJlZiA9IHVybCB8fCAnJztcclxuXHJcbiAgICByZXR1cm4gYS5ocmVmO1xyXG4gIH07XHJcbn0oKSk7XHJcblxyXG5oZWxwZXJzLnBsdXJhbCA9IGZ1bmN0aW9uIChzaW5ndWxhciwgcGx1cmFsMSwgcGx1cmFsMiwgbiwgbGFuZyA9ICdydScpIHtcclxuICB2YXIgcmVtYWluZGVyO1xyXG5cclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzQgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seScgKyBhcmd1bWVudHMubGVuZ3RoICsgJ3ByZXNlbnQuJyk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgNCBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlci4nKTtcclxuICB9XHJcblxyXG4gIG4gPSBTdHJpbmcoaGVscGVycy5hZGRMZWFkaW5nWmVybyhNYXRoLmFicyhuKSkpO1xyXG4gIG4gPSBwYXJzZUludChuLnNsaWNlKC0yKSwgMTApO1xyXG4gIHJlbWFpbmRlciA9IG4gJSAxMDtcclxuXHJcbiAgaWYgKHBsdXJhbExhbmdzLmhhc093blByb3BlcnR5KGxhbmcpKSB7XHJcbiAgICByZXR1cm4gcGx1cmFsTGFuZ3NbbGFuZ10oc2luZ3VsYXIsIHBsdXJhbDEsIHBsdXJhbDIsIHJlbWFpbmRlciwgbik7XHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGxhbmd1YWdlIOKAlCAnICsgbGFuZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlbHBlcnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvaGVscGVycy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG52YXIgY29sb3IgPSB7fTtcclxuXHJcbmNvbnN0IEhFWF9TSUdOUyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xyXG5cclxuY29sb3IuY2hlY2tSR0IgPSBmdW5jdGlvbiAoY29sb3JTdHIpIHtcclxuICB2YXIgcmVzdWx0ID0gW10sIGksIGM7XHJcblxyXG4gIGNvbG9yU3RyID0gY29sb3JTdHIuc3BsaXQoJywnKTtcclxuXHJcbiAgaWYgKGNvbG9yU3RyLmxlbmd0aCAhPT0gMykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGNvbG9yU3RyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjID0gY29sb3JTdHJbaV0udHJpbSgpO1xyXG5cclxuICAgIGlmIChpc05hTihjKSB8fCBTdHJpbmcocGFyc2VJbnQoYywgMTApKS5sZW5ndGggIT09IGMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyc2VJbnQoYywgMTApIDwgMCB8fCBwYXJzZUludChjLCAxMCkgPiAyNTUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5wdXNoKGMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbG9yLmNoZWNrUkdCQSA9IGZ1bmN0aW9uIChjb2xvclN0cikge1xyXG4gIHZhciByZXN1bHQgPSBbXSwgaSwgYywgb3A7XHJcblxyXG4gIGNvbG9yU3RyID0gY29sb3JTdHIuc3BsaXQoJywnKTtcclxuXHJcbiAgaWYgKGNvbG9yU3RyLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGNvbG9yU3RyLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xyXG4gICAgYyA9IGNvbG9yU3RyW2ldLnRyaW0oKTtcclxuXHJcbiAgICBpZiAoaXNOYU4oYykgfHwgU3RyaW5nKHBhcnNlSW50KGMsIDEwKSkubGVuZ3RoICE9PSBjLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcnNlSW50KGMsIDEwKSA8IDAgfHwgcGFyc2VJbnQoYywgMTApID4gMjU1KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQucHVzaChjKTtcclxuICB9XHJcblxyXG4gIG9wID0gY29sb3JTdHJbM107XHJcblxyXG4gIGlmIChvcFswXSA9PT0gJyAnKSB7XHJcbiAgICBvcCA9IG9wLnRyaW0oKTtcclxuICB9XHJcblxyXG4gIGlmIChwYXJzZUZsb2F0KG9wKSA8IDAgfHwgcGFyc2VGbG9hdChvcCkgPiAxIHx8IFN0cmluZyhwYXJzZUZsb2F0KG9wKSkubGVuZ3RoICE9PSBvcC5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlc3VsdC5wdXNoKG9wKTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbG9yLmlzUkdCTGlrZSA9IGZ1bmN0aW9uIChjb2xvclN0cikge1xyXG4gIHZhciByZXN1bHQgPSB7dmFsdWU6IGZhbHNlLCB0eXBlOiBudWxsfTtcclxuXHJcbiAgaWYgKHR5cGVvZiBjb2xvclN0ciAhPT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIGlmIChjb2xvclN0clswXSAhPT0gJ3InIHx8IGNvbG9yU3RyWzFdICE9PSAnZycgfHwgY29sb3JTdHJbMl0gIT09ICdiJykge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgaWYgKGNvbG9yU3RyWzNdID09PSAnYScpIHtcclxuICAgIGlmIChjb2xvclN0cls0XSAhPT0gJygnKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChjb2xvclN0clszXSAhPT0gJ2EnKSB7XHJcbiAgICBpZiAoY29sb3JTdHJbM10gIT09ICcoJykge1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGNvbG9yU3RyW2NvbG9yU3RyLmxlbmd0aCAtIDFdICE9PSAnKScpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpZiAoY29sb3JTdHJbM10gPT09ICdhJykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGNvbG9yLmNoZWNrUkdCQShjb2xvclN0ci5zbGljZSg1LCAtMSkpLFxyXG4gICAgICB0eXBlOiAncmdiYSdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmFsdWU6IGNvbG9yLmNoZWNrUkdCKGNvbG9yU3RyLnNsaWNlKDQsIC0xKSksXHJcbiAgICB0eXBlOiAncmdiJ1xyXG4gIH07XHJcbn07XHJcblxyXG5jb2xvci5pc0hleExpa2UgPSBmdW5jdGlvbiAoY29sb3JTdHIpIHtcclxuICB2YXIgbGVuLCBpO1xyXG5cclxuICBpZiAodHlwZW9mIGNvbG9yU3RyICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbG9yU3RyWzBdID09PSAnIycpIHtcclxuICAgIGNvbG9yU3RyID0gY29sb3JTdHIuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICBsZW4gPSBjb2xvclN0ci5sZW5ndGg7XHJcblxyXG4gIGlmIChsZW4gIT09IDMgJiYgbGVuICE9PSA2KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgIGlmICghaGVscGVycy5pbkFycmF5KEhFWF9TSUdOUywgY29sb3JTdHJbaV0udG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbG9yU3RyO1xyXG59O1xyXG5cclxuY29sb3IuY2hhbmdlID0gZnVuY3Rpb24gKGNvbG9yU3RyLCBwZXJjZW50LCBhY3Rpb24pIHtcclxuICB2YXIgcGFydHMsXHJcbiAgICByZWQsIGdyZWVuLCBibHVlLFxyXG4gICAgb3AsXHJcbiAgICBzdGFydFBvaW50LFxyXG4gICAgbmV3Q29sb3I7XHJcblxyXG4gIGlmIChhY3Rpb24gIT09ICdsaWdodGVuJyAmJiBhY3Rpb24gIT09ICdkYXJrZW4nKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb2xvclN0ciA9IGNvbG9yU3RyLnRyaW0oKTtcclxuXHJcbiAgaWYgKGNvbG9yU3RyID09PSAndHJhbnNwYXJlbnQnKSB7XHJcbiAgICBwYXJ0cyA9IHt2YWx1ZTogWzAsIDAsIDBdfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFydHMgPSBjb2xvci5pc1JHQkxpa2UoY29sb3JTdHIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwYXJ0cy52YWx1ZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcGFydHMgPSBwYXJ0cy52YWx1ZTtcclxuXHJcbiAgcmVkID0gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcclxuICBncmVlbiA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XHJcbiAgYmx1ZSA9IHBhcnNlSW50KHBhcnRzWzJdLCAxMCk7XHJcbiAgb3AgPSBwYXJzZUZsb2F0KHBhcnRzWzNdKTtcclxuICBuZXdDb2xvciA9IGlzTmFOKG9wKSA/ICdyZ2IoJyA6ICdyZ2JhKCc7XHJcblxyXG4gIHBlcmNlbnQgPSBwZXJjZW50IC8gMTAwO1xyXG5cclxuICBzdGFydFBvaW50ID0gKGFjdGlvbiA9PT0gJ2xpZ2h0ZW4nID8gMjU1IDogMCk7XHJcblxyXG4gIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSByZWQpICogcGVyY2VudCkgKyByZWQpICsgJywnO1xyXG4gIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSBncmVlbikgKiBwZXJjZW50KSArIGdyZWVuKSArICcsJztcclxuICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMjU1IC0gYmx1ZSkgKiBwZXJjZW50KSArIGJsdWUpO1xyXG5cclxuICBuZXdDb2xvciArPSAoaXNOYU4ob3ApID8gJyknIDogJywnICsgb3AgKyAnKScpO1xyXG5cclxuICByZXR1cm4gbmV3Q29sb3I7XHJcbn07XHJcblxyXG5jb2xvci5oZXhUb1JnYiA9IGZ1bmN0aW9uIChoZXgpIHtcclxuICB2YXIgcmVzdWx0ID0gW10sIGk7XHJcblxyXG4gIGhleCA9IGNvbG9yLmlzSGV4TGlrZShoZXgpO1xyXG5cclxuICBpZiAoIWhleCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGhleC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICByZXN1bHQucHVzaCgnJyArIHBhcnNlSW50KCcnICsgaGV4W2ldICsgaGV4W2ldLCAxNikpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaGV4Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKCcnICsgcGFyc2VJbnQoJycgKyBoZXhbaSAtIDFdICsgaGV4W2ldLCAxNikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sb3I7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvY29sb3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwiLFwidW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcImpRdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxudmFyIERPTSA9IHt9O1xyXG5cclxuRE9NLnNjcm9sbFBhZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBjb3JyZWN0aW9uLCBvcHRpb25zKSB7XHJcbiAgcmV0dXJuICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIChjb3JyZWN0aW9uIHx8IDApXHJcbiAgfSwgb3B0aW9ucyB8fCB7fSkucHJvbWlzZSgpO1xyXG59O1xyXG5cclxuRE9NLmdldE1heEhlaWdodCA9IGZ1bmN0aW9uIChibG9ja3MpIHtcclxuICB2YXIgbWF4SGVpZ2h0ID0gJChibG9ja3NbMF0pLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gIGJsb2Nrcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLm91dGVySGVpZ2h0KCkgPiBtYXhIZWlnaHQpIHtcclxuICAgICAgbWF4SGVpZ2h0ID0gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWF4SGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBET007XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvRE9NLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGRlY29yYXRvcnMgPSB7fTtcclxuXHJcbmRlY29yYXRvcnMuZGVib3VuY2UgPSBmdW5jdGlvbiAoZnVuYywgZGVsYXkpIHtcclxuICB2YXIgc3RhdGUgPSBudWxsO1xyXG4gIGNvbnN0IENPT0xET1dOID0gMTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICBzdGF0ZSA9IENPT0xET1dOO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdGF0ZSA9IG51bGw7XHJcbiAgICB9LCBkZWxheSB8fCAxMDApO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufTtcclxuXHJcbmRlY29yYXRvcnMudGhyb3R0bGUgPSBmdW5jdGlvbiAoZnVuYywgZGVsYXkpIHtcclxuICB2YXIgc3RhdGUgPSBudWxsLFxyXG4gICAgICBsYXN0QXJncywgbGFzdENvbnRleHQ7XHJcbiAgY29uc3QgQ09PTERPV04gPSAxO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlciAoKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgbGFzdENvbnRleHQgPSB0aGlzO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIHN0YXRlID0gQ09PTERPV047XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHN0YXRlID0gbnVsbDtcclxuICAgICAgaWYgKGxhc3RBcmdzKSB7XHJcbiAgICAgICAgd3JhcHBlci5hcHBseShsYXN0Q29udGV4dCwgbGFzdEFyZ3MpO1xyXG4gICAgICAgIGxhc3RDb250ZXh0ID0gbGFzdEFyZ3MgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LCBkZWxheSB8fCAxMDApO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufTtcclxuXHJcbmRlY29yYXRvcnMuc21hcnREcmF3ID0gZnVuY3Rpb24gKGZ1bmMsIGRlbGF5LCBleGVjQXNhcCkge1xyXG4gIHZhciB0aW1lcklEO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuICAgIGlmICh0aW1lcklEKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklEKTtcclxuICAgIH0gZWxzZSBpZiAoZXhlY0FzYXApIHtcclxuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lcklEID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghZXhlY0FzYXApIHtcclxuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aW1lcklEID0gbnVsbDtcclxuICAgIH0sIGRlbGF5IHx8IDEwMCk7XHJcbiAgfTtcclxufTtcclxuXHJcbmRlY29yYXRvcnMub25jZSA9IGZ1bmN0aW9uIChmdW5jLCBjb250ZXh0KSB7XHJcbiAgdmFyIGlzQ2FsbGVkID0gZmFsc2U7XHJcblxyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgIGlmIChpc0NhbGxlZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICBpc0NhbGxlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRvcnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvZGVjb3JhdG9ycy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb2xvciBmcm9tICcuL2NvbG9yJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cclxudmFyIHN0eWxlcyA9IHt9O1xyXG5cclxuY29uc3QgQU5JTUFUSU9OX1NVUFBPUlQgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBkb21QcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMgS2h0bWwnLnNwbGl0KCcgJyksXHJcbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgaTtcclxuXHJcbiAgaWYgKGVsLnN0eWxlLmFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZG9tUHJlZml4ZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChlbC5zdHlsZVtkb21QcmVmaXhlc1tpXSArICdBbmltYXRpb25OYW1lJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufSgpKTtcclxuXHJcbnN0eWxlcy5yaXBwbGVCdXR0b24gPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciB0aW1lcklEO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBidG4sXHJcbiAgICAgIGNpcmNsZSxcclxuICAgICAgY29vcmRzLFxyXG4gICAgICBzaXplLFxyXG4gICAgICB4UG9zLCB5UG9zLFxyXG4gICAgICBhY3Rpb24sIHBlcmNlbnQsXHJcbiAgICAgIGJ0bkNvbG9yLCBiZztcclxuXHJcbiAgICBpZiAoIUFOSU1BVElPTl9TVVBQT1JUKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBidG4gPSAkKHRoaXMpO1xyXG4gICAgY2lyY2xlID0gYnRuLmZpbmQoJy5lLXJpcHBsZS1jaXJjbGUnKTtcclxuICAgIGNvb3JkcyA9IGJ0bi5vZmZzZXQoKTtcclxuICAgIHNpemUgPSBNYXRoLm1heChidG4ud2lkdGgoKSwgYnRuLmhlaWdodCgpKTtcclxuICAgIHhQb3MgPSBlLnBhZ2VYIC0gY29vcmRzLmxlZnQ7XHJcbiAgICB5UG9zID0gZS5wYWdlWSAtIGNvb3Jkcy50b3A7XHJcbiAgICBhY3Rpb24gPSBidG4uZGF0YSgnZS1jb2xvci1hY3Rpb24nKTtcclxuICAgIHBlcmNlbnQgPSBidG4uZGF0YSgnZS1wZXJjZW50LWNoYW5nZScpO1xyXG4gICAgYnRuQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGJ0blswXSkuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIGJnID0gY29sb3IuY2hhbmdlKGJ0bkNvbG9yLCBwZXJjZW50LCBhY3Rpb24pO1xyXG4gICAgXHJcbiAgICBpZiAoY2lyY2xlKSB7XHJcbiAgICAgIGNpcmNsZS5yZW1vdmUoKTtcclxuICAgICAgY2lyY2xlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjaXJjbGUgPSAkKCc8ZGl2Lz4nKTtcclxuICAgIGNpcmNsZS5jc3Moe1xyXG4gICAgICB3aWR0aDogc2l6ZSArICdweCcsXHJcbiAgICAgIGhlaWdodDogc2l6ZSArICdweCcsXHJcbiAgICAgIHRvcDogKHlQb3MgLSBzaXplIC8gMikgKyAncHgnLFxyXG4gICAgICBsZWZ0OiAoeFBvcyAtIHNpemUgLyAyKSArICdweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmdcclxuICAgIH0pO1xyXG4gICAgY2lyY2xlLmFkZENsYXNzKCdlLXJpcHBsZS1jaXJjbGUnKTtcclxuXHJcbiAgICBidG4uYXBwZW5kKGNpcmNsZSk7XHJcblxyXG4gICAgaWYgKHRpbWVySUQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVySUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2lyY2xlLnJlbW92ZSgpO1xyXG4gICAgfSwgYnRuLmRhdGEoJ2UtcmlwcGxlLWRlbGF5JykgfHwgNjAwKTtcclxuICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3N0eWxlcy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlscyA9IHt9O1xyXG5cclxudXRpbHMuYWRkTWV0aG9kID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgZnVuYykge1xyXG4gIHZhciBwYXJ0cyA9IG5hbWVzcGFjZS5zcGxpdCgnLicpLFxyXG4gICAgcGFyZW50ID0gdGhpcztcclxuXHJcbiAgaWYgKHBhcnRzWzBdID09PSAnZWNsaXBzZScpIHtcclxuICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICBpZiAoIShwYXJ0c1tpXSBpbiBwYXJlbnQpICYmIGkgIT09IHBhcnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgcGFyZW50W3BhcnRzW2ldXSA9IHt9O1xyXG4gICAgfSBlbHNlIGlmICghKHBhcnRzW2ldIGluIHBhcmVudCkgJiYgaSA9PT0gcGFydHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBwYXJlbnRbcGFydHNbaV1dID0gZnVuYztcclxuICAgIH1cclxuICAgIHBhcmVudCA9IHBhcmVudFtwYXJ0c1tpXV07XHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIHBhcmVudDtcclxufTtcclxuXHJcbnV0aWxzLm5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuc1N0cmluZykge1xyXG4gIHZhciBwYXJ0cyA9IG5zU3RyaW5nLnNwbGl0KCcuJyksXHJcbiAgICBwYXJlbnQgPSB0aGlzO1xyXG5cclxuICBpZiAocGFydHNbMF0gPT09ICdlY2xpcHNlJykge1xyXG4gICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICB9XHJcblxyXG4gIHBhcnRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgIGlmICghKHBhcnRzW2ldIGluIHBhcmVudCkpIHtcclxuICAgICAgcGFyZW50W3BhcnRzW2ldXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgcGFyZW50ID0gcGFyZW50W3BhcnRzW2ldXTtcclxuICB9KTtcclxuICBcclxuICByZXR1cm4gcGFyZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvdXRpbHMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuL2xpYi9oZWxwZXJzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpYi9zdHlsZXMnO1xyXG5pbXBvcnQgY29sb3IgZnJvbSAnLi9saWIvY29sb3InO1xyXG5pbXBvcnQgZGVjb3JhdG9ycyBmcm9tICcuL2xpYi9kZWNvcmF0b3JzJztcclxuaW1wb3J0IERPTSBmcm9tICcuL2xpYi9ET00nO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi9saWIvdXRpbHMnO1xyXG5cclxudmFyIGVjbGlwc2UgPSB7XHJcbiAgZ2xvYmFsczoge30sXHJcbiAgc3RvcmFnZToge1xyXG4gICAgZHJvcGRvd25zOiBbXSxcclxuICAgIGJ1bmRsZXM6IFtdLFxyXG4gICAgc3Bpbm5lcnM6IFtdLFxyXG4gICAgc3RhdGljVGFiczogW10sXHJcbiAgICByZXNwb25zaXZlVGFiczogW10sXHJcbiAgICBzZWFyY2hlczogW10sXHJcbiAgICBjYWNoZToge31cclxuICB9LFxyXG4gIGhlbHBlcnMsXHJcbiAgc3R5bGVzLFxyXG4gIGNvbG9yLFxyXG4gIGRlY29yYXRvcnMsXHJcbiAgRE9NLFxyXG4gIHV0aWxzLCBcclxuICBtb2R1bGVzOiB7fVxyXG59O1xyXG5cclxuZWNsaXBzZS51dGlscy5hZGRNZXRob2QgPSBlY2xpcHNlLnV0aWxzLmFkZE1ldGhvZC5iaW5kKGVjbGlwc2UpO1xyXG5lY2xpcHNlLnV0aWxzLm5hbWVzcGFjZSA9IGVjbGlwc2UudXRpbHMubmFtZXNwYWNlLmJpbmQoZWNsaXBzZSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVjbGlwc2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlY2xpcHNlLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RGQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxTUE7Ozs7Ozs7QUNBQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0ZBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xGQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9