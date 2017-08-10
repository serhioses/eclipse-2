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
        parts = [0, 0, 0];
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

color.lighten = function (colorStr, percent) {
    var parts = colorStr === 'transparent' ? [0, 0, 0] : colorStr.replace(/rgba?\(/, '').replace(/\)/, '').split(','),
        red = parseInt(parts[0], 10),
        green = parseInt(parts[1], 10),
        blue = parseInt(parts[2], 10),
        newColor = 'rgb(';

    percent = percent / 100;

    newColor += Math.round((255 - red) * percent) + red + ',';
    newColor += Math.round((255 - green) * percent) + green + ',';
    newColor += Math.round((255 - blue) * percent) + blue + ')';

    return newColor;
};

color.darken = function (colorStr, percent) {
    var parts = colorStr === 'transparent' ? [0, 0, 0] : colorStr.replace(/rgba?\(/, '').replace(/\)/, '').split(','),
        red = parseInt(parts[0], 10),
        green = parseInt(parts[1], 10),
        blue = parseInt(parts[2], 10),
        newColor = 'rgb(';

    percent = percent / 100;

    newColor += Math.round((0 - red) * percent) + red + ',';
    newColor += Math.round((0 - green) * percent) + green + ',';
    newColor += Math.round((0 - blue) * percent) + blue + ')';

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

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

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

// styles.support = {};

// styles.support.animation = (function () {
//     var domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
//         el = document.createElement('div'),
//         i;

//     if (el.style.animationName !== undefined) {
//         return true;
//     }

//     for (i = 0; i < domPrefixes.length; i += 1) {
//         if (el.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
//             return true;
//         }
//     }

//     return false;
// }());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDQ3NGFkZDcwOTk2MTU3OTI2M2FkIiwid2VicGFjazovLy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vbGliL2NvbG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9ET00uanMiLCJ3ZWJwYWNrOi8vL2xpYi9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovLy9saWIvc3R5bGVzLmpzIiwid2VicGFjazovLy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2VjbGlwc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlY2xpcHNlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlY2xpcHNlXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDc0YWRkNzA5OTYxNTc5MjYzYWQiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgaGVscGVycyA9IHt9LFxyXG4gICAgcGx1cmFsTGFuZ3MgPSB7fTtcclxuXHJcbnBsdXJhbExhbmdzLmVuID0gZnVuY3Rpb24gKHNpbmd1bGFyLCBwbHVyYWwxLCBwbHVyYWwyLCByZW1haW5kZXIsIG4pIHtcclxuICAgIGlmIChuID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpbmd1bGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwbHVyYWwxO1xyXG59O1xyXG5wbHVyYWxMYW5ncy5ydSA9IGZ1bmN0aW9uIChzaW5ndWxhciwgcGx1cmFsMSwgcGx1cmFsMiwgcmVtYWluZGVyLCBuKSB7XHJcbiAgICBpZiAoKHJlbWFpbmRlciA+PSAyICYmIHJlbWFpbmRlciA8PSA0KSAmJiAobiA8IDUgfHwgbiA+IDIxKSkge1xyXG4gICAgICAgIHJldHVybiBwbHVyYWwyO1xyXG4gICAgfSBlbHNlIGlmIChyZW1haW5kZXIgPT09IDEgJiYgbiAhPT0gMTEpIHtcclxuICAgICAgICByZXR1cm4gc2luZ3VsYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBsdXJhbDE7XHJcbn07XHJcblxyXG5oZWxwZXJzLmdldENsYXNzID0gZnVuY3Rpb24gKGFyZykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpLnNsaWNlKDgsIC0xKTtcclxufTtcclxuXHJcbmhlbHBlcnMuaW5BcnJheSA9IGZ1bmN0aW9uIChhcnIsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IHZhbHVlKTtcclxufTtcclxuXHJcbmhlbHBlcnMucmVtb3ZlRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWUpIHtcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB2YWx1ZSk7XHJcbn07XHJcblxyXG5oZWxwZXJzLnB1c2hJZk1pc3MgPSBmdW5jdGlvbiAoYXJyLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFoZWxwZXJzLmluQXJyYXkoYXJyLCB2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmFyciwgdmFsdWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbLi4uYXJyXTtcclxufTtcclxuXHJcbmhlbHBlcnMuaXNOdW1lcmljID0gZnVuY3Rpb24gKG4pIHtcclxuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUocGFyc2VGbG9hdChuKSk7XHJcbn07XHJcblxyXG5oZWxwZXJzLmFkZExlYWRpbmdaZXJvID0gZnVuY3Rpb24gKG4pIHtcclxuICAgIHJldHVybiAoTWF0aC5hYnMobikgPCAxMCkgPyAoKG4gPCAwKSA/ICctMCcgOiAnMCcpICsgTWF0aC5hYnMobikgOiBuO1xyXG59O1xyXG5cclxuaGVscGVycy5nZXRBYnNvbHV0ZVVybCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYTtcclxuXHJcbiAgICByZXR1cm4gKHVybCkgPT4ge1xyXG4gICAgICAgIGlmICghYSkge1xyXG4gICAgICAgICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYS5ocmVmID0gdXJsIHx8ICcnO1xyXG5cclxuICAgICAgICByZXR1cm4gYS5ocmVmO1xyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmhlbHBlcnMucGx1cmFsID0gZnVuY3Rpb24gKHNpbmd1bGFyLCBwbHVyYWwxLCBwbHVyYWwyLCBuLCBsYW5nID0gJ3J1Jykge1xyXG4gICAgdmFyIHJlbWFpbmRlcjtcclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCc0IGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHknICsgYXJndW1lbnRzLmxlbmd0aCArICdwcmVzZW50LicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgNCBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlci4nKTtcclxuICAgIH1cclxuXHJcbiAgICBuID0gU3RyaW5nKGhlbHBlcnMuYWRkTGVhZGluZ1plcm8oTWF0aC5hYnMobikpKTtcclxuICAgIG4gPSBwYXJzZUludChuLnNsaWNlKC0yKSwgMTApO1xyXG4gICAgcmVtYWluZGVyID0gbiAlIDEwO1xyXG5cclxuICAgIGlmIChwbHVyYWxMYW5ncy5oYXNPd25Qcm9wZXJ0eShsYW5nKSkge1xyXG4gICAgICAgIHJldHVybiBwbHVyYWxMYW5nc1tsYW5nXShzaW5ndWxhciwgcGx1cmFsMSwgcGx1cmFsMiwgcmVtYWluZGVyLCBuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGxhbmd1YWdlIOKAlCAnICsgbGFuZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlbHBlcnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvaGVscGVycy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG52YXIgY29sb3IgPSB7fTtcclxuXHJcbmNvbnN0IEhFWF9TSUdOUyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xyXG5cclxuY29sb3IuY2hlY2tSR0IgPSBmdW5jdGlvbiAoY29sb3JTdHIpIHtcclxuICAgIHZhciByZXN1bHQgPSBbXSwgaSwgYztcclxuXHJcbiAgICBjb2xvclN0ciA9IGNvbG9yU3RyLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgaWYgKGNvbG9yU3RyLmxlbmd0aCAhPT0gMykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgY29sb3JTdHIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjID0gY29sb3JTdHJbaV0udHJpbSgpO1xyXG5cclxuICAgICAgICBpZiAoaXNOYU4oYykgfHwgU3RyaW5nKHBhcnNlSW50KGMsIDEwKSkubGVuZ3RoICE9PSBjLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VJbnQoYywgMTApIDwgMCB8fCBwYXJzZUludChjLCAxMCkgPiAyNTUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0LnB1c2goYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbG9yLmNoZWNrUkdCQSA9IGZ1bmN0aW9uIChjb2xvclN0cikge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdLCBpLCBjLCBvcDtcclxuXHJcbiAgICBjb2xvclN0ciA9IGNvbG9yU3RyLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgaWYgKGNvbG9yU3RyLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgY29sb3JTdHIubGVuZ3RoIC0gMTsgaSArPSAxKSB7XHJcbiAgICAgICAgYyA9IGNvbG9yU3RyW2ldLnRyaW0oKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTmFOKGMpIHx8IFN0cmluZyhwYXJzZUludChjLCAxMCkpLmxlbmd0aCAhPT0gYy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGMsIDEwKSA8IDAgfHwgcGFyc2VJbnQoYywgMTApID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wID0gY29sb3JTdHJbM107XHJcblxyXG4gICAgaWYgKG9wWzBdID09PSAnICcpIHtcclxuICAgICAgICBvcCA9IG9wLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyc2VGbG9hdChvcCkgPCAwIHx8IHBhcnNlRmxvYXQob3ApID4gMSB8fCBTdHJpbmcocGFyc2VGbG9hdChvcCkpLmxlbmd0aCAhPT0gb3AubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5wdXNoKG9wKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29sb3IuaXNSR0JMaWtlID0gZnVuY3Rpb24gKGNvbG9yU3RyKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge3ZhbHVlOiBmYWxzZSwgdHlwZTogbnVsbH07XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb2xvclN0ciAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbG9yU3RyWzBdICE9PSAncicgfHwgY29sb3JTdHJbMV0gIT09ICdnJyB8fCBjb2xvclN0clsyXSAhPT0gJ2InKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGlmIChjb2xvclN0clszXSA9PT0gJ2EnKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yU3RyWzRdICE9PSAnKCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNvbG9yU3RyWzNdICE9PSAnYScpIHtcclxuICAgICAgICBpZiAoY29sb3JTdHJbM10gIT09ICcoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29sb3JTdHJbY29sb3JTdHIubGVuZ3RoIC0gMV0gIT09ICcpJykge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbG9yU3RyWzNdID09PSAnYScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogY29sb3IuY2hlY2tSR0JBKGNvbG9yU3RyLnNsaWNlKDUsIC0xKSksXHJcbiAgICAgICAgICAgIHR5cGU6ICdyZ2JhJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZTogY29sb3IuY2hlY2tSR0IoY29sb3JTdHIuc2xpY2UoNCwgLTEpKSxcclxuICAgICAgICB0eXBlOiAncmdiJ1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbG9yLmlzSGV4TGlrZSA9IGZ1bmN0aW9uIChjb2xvclN0cikge1xyXG4gICAgdmFyIGxlbiwgaTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbG9yU3RyICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29sb3JTdHJbMF0gPT09ICcjJykge1xyXG4gICAgICAgIGNvbG9yU3RyID0gY29sb3JTdHIuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuID0gY29sb3JTdHIubGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW4gIT09IDMgJiYgbGVuICE9PSA2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xyXG4gICAgICAgIGlmICghaGVscGVycy5pbkFycmF5KEhFWF9TSUdOUywgY29sb3JTdHJbaV0udG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29sb3JTdHI7XHJcbn07XHJcblxyXG5jb2xvci5jaGFuZ2UgPSBmdW5jdGlvbiAoY29sb3JTdHIsIHBlcmNlbnQsIGFjdGlvbikge1xyXG4gICAgdmFyIHBhcnRzLFxyXG4gICAgICAgIHJlZCwgZ3JlZW4sIGJsdWUsXHJcbiAgICAgICAgb3AsXHJcbiAgICAgICAgc3RhcnRQb2ludCxcclxuICAgICAgICBuZXdDb2xvcjtcclxuXHJcbiAgICBpZiAoYWN0aW9uICE9PSAnbGlnaHRlbicgJiYgYWN0aW9uICE9PSAnZGFya2VuJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb2xvclN0ciA9IGNvbG9yU3RyLnRyaW0oKTtcclxuXHJcbiAgICBpZiAoY29sb3JTdHIgPT09ICd0cmFuc3BhcmVudCcpIHtcclxuICAgICAgICBwYXJ0cyA9IFswLCAwLCAwXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFydHMgPSBjb2xvci5pc1JHQkxpa2UoY29sb3JTdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGFydHMudmFsdWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcGFydHMgPSBwYXJ0cy52YWx1ZTtcclxuXHJcbiAgICByZWQgPSBwYXJzZUludChwYXJ0c1swXSwgMTApO1xyXG4gICAgZ3JlZW4gPSBwYXJzZUludChwYXJ0c1sxXSwgMTApO1xyXG4gICAgYmx1ZSA9IHBhcnNlSW50KHBhcnRzWzJdLCAxMCk7XHJcbiAgICBvcCA9IHBhcnNlRmxvYXQocGFydHNbM10pO1xyXG4gICAgbmV3Q29sb3IgPSBpc05hTihvcCkgPyAncmdiKCcgOiAncmdiYSgnO1xyXG5cclxuICAgIHBlcmNlbnQgPSBwZXJjZW50IC8gMTAwO1xyXG5cclxuICAgIHN0YXJ0UG9pbnQgPSAoYWN0aW9uID09PSAnbGlnaHRlbicgPyAyNTUgOiAwKTtcclxuXHJcbiAgICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMjU1IC0gcmVkKSAqIHBlcmNlbnQpICsgcmVkKSArICcsJztcclxuICAgIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSBncmVlbikgKiBwZXJjZW50KSArIGdyZWVuKSArICcsJztcclxuICAgIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSBibHVlKSAqIHBlcmNlbnQpICsgYmx1ZSk7XHJcblxyXG4gICAgbmV3Q29sb3IgKz0gKGlzTmFOKG9wKSA/ICcpJyA6ICcsJyArIG9wICsgJyknKTtcclxuXHJcbiAgICByZXR1cm4gbmV3Q29sb3I7XHJcbn07XHJcblxyXG5jb2xvci5saWdodGVuID0gZnVuY3Rpb24gKGNvbG9yU3RyLCBwZXJjZW50KSB7XHJcbiAgICB2YXIgcGFydHMgPSAoY29sb3JTdHIgPT09ICd0cmFuc3BhcmVudCcpID8gWzAsIDAsIDBdIDogY29sb3JTdHIucmVwbGFjZSgvcmdiYT9cXCgvLCAnJykucmVwbGFjZSgvXFwpLywgJycpLnNwbGl0KCcsJyksXHJcbiAgICAgICAgcmVkID0gcGFyc2VJbnQocGFydHNbMF0sIDEwKSxcclxuICAgICAgICBncmVlbiA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCksXHJcbiAgICAgICAgYmx1ZSA9IHBhcnNlSW50KHBhcnRzWzJdLCAxMCksXHJcbiAgICAgICAgbmV3Q29sb3IgPSAncmdiKCc7XHJcblxyXG4gICAgcGVyY2VudCA9IHBlcmNlbnQgLyAxMDA7XHJcblxyXG4gICAgbmV3Q29sb3IgKz0gKE1hdGgucm91bmQoKDI1NSAtIHJlZCkgKiBwZXJjZW50KSArIHJlZCkgKyAnLCc7XHJcbiAgICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMjU1IC0gZ3JlZW4pICogcGVyY2VudCkgKyBncmVlbikgKyAnLCc7XHJcbiAgICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMjU1IC0gYmx1ZSkgKiBwZXJjZW50KSArIGJsdWUpICsgJyknO1xyXG5cclxuICAgIHJldHVybiBuZXdDb2xvcjtcclxufTtcclxuXHJcbmNvbG9yLmRhcmtlbiA9IGZ1bmN0aW9uIChjb2xvclN0ciwgcGVyY2VudCkge1xyXG4gICAgdmFyIHBhcnRzID0gKGNvbG9yU3RyID09PSAndHJhbnNwYXJlbnQnKSA/IFswLCAwLCAwXSA6IGNvbG9yU3RyLnJlcGxhY2UoL3JnYmE/XFwoLywgJycpLnJlcGxhY2UoL1xcKS8sICcnKS5zcGxpdCgnLCcpLFxyXG4gICAgICAgIHJlZCA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCksXHJcbiAgICAgICAgZ3JlZW4gPSBwYXJzZUludChwYXJ0c1sxXSwgMTApLFxyXG4gICAgICAgIGJsdWUgPSBwYXJzZUludChwYXJ0c1syXSwgMTApLFxyXG4gICAgICAgIG5ld0NvbG9yID0gJ3JnYignO1xyXG5cclxuICAgIHBlcmNlbnQgPSBwZXJjZW50IC8gMTAwO1xyXG5cclxuICAgIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgwIC0gcmVkKSAqIHBlcmNlbnQpICsgcmVkKSArICcsJztcclxuICAgIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgwIC0gZ3JlZW4pICogcGVyY2VudCkgKyBncmVlbikgKyAnLCc7XHJcbiAgICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMCAtIGJsdWUpICogcGVyY2VudCkgKyBibHVlKSArICcpJztcclxuXHJcbiAgICByZXR1cm4gbmV3Q29sb3I7XHJcbn07XHJcblxyXG5jb2xvci5oZXhUb1JnYiA9IGZ1bmN0aW9uIChoZXgpIHtcclxuICAgIHZhciByZXN1bHQgPSBbXSwgaTtcclxuXHJcbiAgICBoZXggPSBjb2xvci5pc0hleExpa2UoaGV4KTtcclxuXHJcbiAgICBpZiAoIWhleCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGhleC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCgnJyArIHBhcnNlSW50KCcnICsgaGV4W2ldICsgaGV4W2ldLCAxNikpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGhleC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoaSAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKCcnICsgcGFyc2VJbnQoJycgKyBoZXhbaSAtIDFdICsgaGV4W2ldLCAxNikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9jb2xvci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCIsXCJ1bWRcIjpcImpxdWVyeVwiLFwicm9vdFwiOlwialF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG52YXIgRE9NID0ge307XHJcblxyXG5ET00uc2Nyb2xsUGFnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIGNvcnJlY3Rpb24sIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gKGNvcnJlY3Rpb24gfHwgMClcclxuICAgIH0sIG9wdGlvbnMgfHwge30pLnByb21pc2UoKTtcclxufTtcclxuXHJcbkRPTS5nZXRNYXhIZWlnaHQgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XHJcbiAgICB2YXIgbWF4SGVpZ2h0ID0gJChibG9ja3NbMF0pLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgYmxvY2tzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLm91dGVySGVpZ2h0KCkgPiBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtYXhIZWlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERPTTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9ET00uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZGVjb3JhdG9ycyA9IHt9O1xyXG5cclxuZGVjb3JhdG9ycy5kZWJvdW5jZSA9IGZ1bmN0aW9uIChmdW5jLCBkZWxheSkge1xyXG4gICAgdmFyIHN0YXRlID0gbnVsbDtcclxuICAgIGNvbnN0IENPT0xET1dOID0gMTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgc3RhdGUgPSBDT09MRE9XTjtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gbnVsbDtcclxuICAgICAgICB9LCBkZWxheSB8fCAxMDApO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxufTtcclxuXHJcbmRlY29yYXRvcnMudGhyb3R0bGUgPSBmdW5jdGlvbiAoZnVuYywgZGVsYXkpIHtcclxuICAgIHZhciBzdGF0ZSA9IG51bGwsXHJcbiAgICAgICAgbGFzdEFyZ3MsIGxhc3RDb250ZXh0O1xyXG4gICAgY29uc3QgQ09PTERPV04gPSAxO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgIGxhc3RDb250ZXh0ID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHN0YXRlID0gQ09PTERPV047XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChsYXN0QXJncykge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBseShsYXN0Q29udGV4dCwgbGFzdEFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgbGFzdENvbnRleHQgPSBsYXN0QXJncyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBkZWxheSB8fCAxMDApO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxufTtcclxuXHJcbmRlY29yYXRvcnMuc21hcnREcmF3ID0gZnVuY3Rpb24gKGZ1bmMsIGRlbGF5LCBleGVjQXNhcCkge1xyXG4gICAgdmFyIHRpbWVySUQ7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcblxyXG4gICAgICAgIGlmICh0aW1lcklEKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklEKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV4ZWNBc2FwKSB7XHJcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lcklEID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXhlY0FzYXApIHtcclxuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbWVySUQgPSBudWxsO1xyXG4gICAgICAgIH0sIGRlbGF5IHx8IDEwMCk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZGVjb3JhdG9ycy5vbmNlID0gZnVuY3Rpb24gKGZ1bmMsIGNvbnRleHQpIHtcclxuICAgIHZhciBpc0NhbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKGlzQ2FsbGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgICAgIGlzQ2FsbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWNvcmF0b3JzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2RlY29yYXRvcnMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgY29sb3IgZnJvbSAnLi9jb2xvcic7XHJcblxyXG52YXIgc3R5bGVzID0ge307XHJcblxyXG5jb25zdCBBTklNQVRJT05fU1VQUE9SVCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zIEtodG1sJy5zcGxpdCgnICcpLFxyXG4gICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgaTtcclxuXHJcbiAgICBpZiAoZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRvbVByZWZpeGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKGVsLnN0eWxlW2RvbVByZWZpeGVzW2ldICsgJ0FuaW1hdGlvbk5hbWUnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0oKSk7XHJcblxyXG4vLyBzdHlsZXMuc3VwcG9ydCA9IHt9O1xyXG5cclxuLy8gc3R5bGVzLnN1cHBvcnQuYW5pbWF0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIHZhciBkb21QcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMgS2h0bWwnLnNwbGl0KCcgJyksXHJcbi8vICAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuLy8gICAgICAgICBpO1xyXG5cclxuLy8gICAgIGlmIChlbC5zdHlsZS5hbmltYXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcclxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmb3IgKGkgPSAwOyBpIDwgZG9tUHJlZml4ZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuLy8gICAgICAgICBpZiAoZWwuc3R5bGVbZG9tUHJlZml4ZXNbaV0gKyAnQW5pbWF0aW9uTmFtZSddICE9PSB1bmRlZmluZWQpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiBmYWxzZTtcclxuLy8gfSgpKTtcclxuXHJcbnN0eWxlcy5yaXBwbGVCdXR0b24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRpbWVySUQ7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGJ0bixcclxuICAgICAgICAgICAgY2lyY2xlLFxyXG4gICAgICAgICAgICBjb29yZHMsXHJcbiAgICAgICAgICAgIHNpemUsXHJcbiAgICAgICAgICAgIHhQb3MsIHlQb3MsXHJcbiAgICAgICAgICAgIGFjdGlvbiwgcGVyY2VudCxcclxuICAgICAgICAgICAgYnRuQ29sb3IsIGJnO1xyXG5cclxuICAgICAgICBpZiAoIUFOSU1BVElPTl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ0biA9ICQodGhpcyk7XHJcbiAgICAgICAgY2lyY2xlID0gYnRuLmZpbmQoJy5lLXJpcHBsZS1jaXJjbGUnKTtcclxuICAgICAgICBjb29yZHMgPSBidG4ub2Zmc2V0KCk7XHJcbiAgICAgICAgc2l6ZSA9IE1hdGgubWF4KGJ0bi53aWR0aCgpLCBidG4uaGVpZ2h0KCkpO1xyXG4gICAgICAgIHhQb3MgPSBlLnBhZ2VYIC0gY29vcmRzLmxlZnQ7XHJcbiAgICAgICAgeVBvcyA9IGUucGFnZVkgLSBjb29yZHMudG9wO1xyXG4gICAgICAgIGFjdGlvbiA9IGJ0bi5kYXRhKCdlLWNvbG9yLWFjdGlvbicpO1xyXG4gICAgICAgIHBlcmNlbnQgPSBidG4uZGF0YSgnZS1wZXJjZW50LWNoYW5nZScpO1xyXG4gICAgICAgIGJ0bkNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShidG5bMF0pLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgYmcgPSBjb2xvci5jaGFuZ2UoYnRuQ29sb3IsIHBlcmNlbnQsIGFjdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNpcmNsZSkge1xyXG4gICAgICAgICAgICBjaXJjbGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNpcmNsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaXJjbGUgPSAkKCc8ZGl2Lz4nKTtcclxuICAgICAgICBjaXJjbGUuY3NzKHtcclxuICAgICAgICAgICAgd2lkdGg6IHNpemUgKyAncHgnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUgKyAncHgnLFxyXG4gICAgICAgICAgICB0b3A6ICh5UG9zIC0gc2l6ZSAvIDIpICsgJ3B4JyxcclxuICAgICAgICAgICAgbGVmdDogKHhQb3MgLSBzaXplIC8gMikgKyAncHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2lyY2xlLmFkZENsYXNzKCdlLXJpcHBsZS1jaXJjbGUnKTtcclxuXHJcbiAgICAgICAgYnRuLmFwcGVuZChjaXJjbGUpO1xyXG5cclxuICAgICAgICBpZiAodGltZXJJRCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lcklEID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNpcmNsZS5yZW1vdmUoKTtcclxuICAgICAgICB9LCBidG4uZGF0YSgnZS1yaXBwbGUtZGVsYXknKSB8fCA2MDApO1xyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9zdHlsZXMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSB7fTtcclxuXHJcbnV0aWxzLmFkZE1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIGZ1bmMpIHtcclxuICAgIHZhciBwYXJ0cyA9IG5hbWVzcGFjZS5zcGxpdCgnLicpLFxyXG4gICAgICAgIHBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHBhcnRzWzBdID09PSAnZWNsaXBzZScpIHtcclxuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgICAgICBpZiAoIShwYXJ0c1tpXSBpbiBwYXJlbnQpICYmIGkgIT09IHBhcnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgcGFyZW50W3BhcnRzW2ldXSA9IHt9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIShwYXJ0c1tpXSBpbiBwYXJlbnQpICYmIGkgPT09IHBhcnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgcGFyZW50W3BhcnRzW2ldXSA9IGZ1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudFtwYXJ0c1tpXV07XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHBhcmVudDtcclxufTtcclxuXHJcbnV0aWxzLm5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuc1N0cmluZykge1xyXG4gICAgdmFyIHBhcnRzID0gbnNTdHJpbmcuc3BsaXQoJy4nKSxcclxuICAgICAgICBwYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgIGlmIChwYXJ0c1swXSA9PT0gJ2VjbGlwc2UnKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICAgICAgaWYgKCEocGFydHNbaV0gaW4gcGFyZW50KSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbcGFydHNbaV1dID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudFtwYXJ0c1tpXV07XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHBhcmVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3V0aWxzLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi9saWIvaGVscGVycyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWIvc3R5bGVzJztcclxuaW1wb3J0IGNvbG9yIGZyb20gJy4vbGliL2NvbG9yJztcclxuaW1wb3J0IGRlY29yYXRvcnMgZnJvbSAnLi9saWIvZGVjb3JhdG9ycyc7XHJcbmltcG9ydCBET00gZnJvbSAnLi9saWIvRE9NJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vbGliL3V0aWxzJztcclxuXHJcbnZhciBlY2xpcHNlID0ge1xyXG4gICAgZ2xvYmFsczoge30sXHJcbiAgICBzdG9yYWdlOiB7XHJcbiAgICAgICAgZHJvcGRvd25zOiBbXSxcclxuICAgICAgICBidW5kbGVzOiBbXSxcclxuICAgICAgICBzcGlubmVyczogW10sXHJcbiAgICAgICAgc3RhdGljVGFiczogW10sXHJcbiAgICAgICAgYWRhcHRpdmVUYWJzOiBbXSxcclxuICAgICAgICBzZWFyY2hlczogW10sXHJcbiAgICAgICAgY2FjaGU6IHt9XHJcbiAgICB9LFxyXG4gICAgaGVscGVycyxcclxuICAgIHN0eWxlcyxcclxuICAgIGNvbG9yLFxyXG4gICAgZGVjb3JhdG9ycyxcclxuICAgIERPTSxcclxuICAgIHV0aWxzLCBcclxuICAgIG1vZHVsZXM6IHt9XHJcbn07XHJcblxyXG5lY2xpcHNlLnV0aWxzLmFkZE1ldGhvZCA9IGVjbGlwc2UudXRpbHMuYWRkTWV0aG9kLmJpbmQoZWNsaXBzZSk7XHJcbmVjbGlwc2UudXRpbHMubmFtZXNwYWNlID0gZWNsaXBzZS51dGlscy5uYW1lc3BhY2UuYmluZChlY2xpcHNlKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZWNsaXBzZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVjbGlwc2UuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7QUNoRUE7QUFDQTs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdEZBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxT0E7Ozs7Ozs7QUNBQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekJBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlGQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEdBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=