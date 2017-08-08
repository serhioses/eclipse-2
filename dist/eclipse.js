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
        c = colorStr[i];

        if (c[0] === ' ') {
            c = c.trim();
        }

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
        c = colorStr[i];

        if (c[0] === ' ') {
            c = c.trim();
        }

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
    var parts, red, green, blue, startPoint, newColor;

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

    red = parseInt(parts[0], 10), green = parseInt(parts[1], 10), blue = parseInt(parts[2], 10), newColor = 'rgb(';

    percent = percent / 100;

    startPoint = action === 'lighten' ? 255 : 0;

    newColor += Math.round((255 - red) * percent) + red + ',';
    newColor += Math.round((255 - green) * percent) + green + ',';
    newColor += Math.round((255 - blue) * percent) + blue + ')';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGQxNDc1NzljYjBlZTEzNTI0ZGRkIiwid2VicGFjazovLy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vbGliL2NvbG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9ET00uanMiLCJ3ZWJwYWNrOi8vL2xpYi9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovLy9saWIvc3R5bGVzLmpzIiwid2VicGFjazovLy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2VjbGlwc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlY2xpcHNlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlY2xpcHNlXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDE0NzU3OWNiMGVlMTM1MjRkZGQiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgaGVscGVycyA9IHt9LFxyXG4gICAgcGx1cmFsTGFuZ3MgPSB7fTtcclxuXHJcbnBsdXJhbExhbmdzLmVuID0gZnVuY3Rpb24gKHNpbmd1bGFyLCBwbHVyYWwxLCBwbHVyYWwyLCByZW1haW5kZXIsIG4pIHtcclxuICAgIGlmIChuID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpbmd1bGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwbHVyYWwxO1xyXG59O1xyXG5wbHVyYWxMYW5ncy5ydSA9IGZ1bmN0aW9uIChzaW5ndWxhciwgcGx1cmFsMSwgcGx1cmFsMiwgcmVtYWluZGVyLCBuKSB7XHJcbiAgICBpZiAoKHJlbWFpbmRlciA+PSAyICYmIHJlbWFpbmRlciA8PSA0KSAmJiAobiA8IDUgfHwgbiA+IDIxKSkge1xyXG4gICAgICAgIHJldHVybiBwbHVyYWwyO1xyXG4gICAgfSBlbHNlIGlmIChyZW1haW5kZXIgPT09IDEgJiYgbiAhPT0gMTEpIHtcclxuICAgICAgICByZXR1cm4gc2luZ3VsYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBsdXJhbDE7XHJcbn07XHJcblxyXG5oZWxwZXJzLmdldENsYXNzID0gZnVuY3Rpb24gKGFyZykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpLnNsaWNlKDgsIC0xKTtcclxufTtcclxuXHJcbmhlbHBlcnMuaW5BcnJheSA9IGZ1bmN0aW9uIChhcnIsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IHZhbHVlKTtcclxufTtcclxuXHJcbmhlbHBlcnMucmVtb3ZlRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWUpIHtcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB2YWx1ZSk7XHJcbn07XHJcblxyXG5oZWxwZXJzLnB1c2hJZk1pc3MgPSBmdW5jdGlvbiAoYXJyLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFoZWxwZXJzLmluQXJyYXkoYXJyLCB2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmFyciwgdmFsdWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbLi4uYXJyXTtcclxufTtcclxuXHJcbmhlbHBlcnMuaXNOdW1lcmljID0gZnVuY3Rpb24gKG4pIHtcclxuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUocGFyc2VGbG9hdChuKSk7XHJcbn07XHJcblxyXG5oZWxwZXJzLmFkZExlYWRpbmdaZXJvID0gZnVuY3Rpb24gKG4pIHtcclxuICAgIHJldHVybiAoTWF0aC5hYnMobikgPCAxMCkgPyAoKG4gPCAwKSA/ICctMCcgOiAnMCcpICsgTWF0aC5hYnMobikgOiBuO1xyXG59O1xyXG5cclxuaGVscGVycy5nZXRBYnNvbHV0ZVVybCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYTtcclxuXHJcbiAgICByZXR1cm4gKHVybCkgPT4ge1xyXG4gICAgICAgIGlmICghYSkge1xyXG4gICAgICAgICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYS5ocmVmID0gdXJsIHx8ICcnO1xyXG5cclxuICAgICAgICByZXR1cm4gYS5ocmVmO1xyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmhlbHBlcnMucGx1cmFsID0gZnVuY3Rpb24gKHNpbmd1bGFyLCBwbHVyYWwxLCBwbHVyYWwyLCBuLCBsYW5nID0gJ3J1Jykge1xyXG4gICAgdmFyIHJlbWFpbmRlcjtcclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCc0IGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHknICsgYXJndW1lbnRzLmxlbmd0aCArICdwcmVzZW50LicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgNCBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlci4nKTtcclxuICAgIH1cclxuXHJcbiAgICBuID0gU3RyaW5nKGhlbHBlcnMuYWRkTGVhZGluZ1plcm8oTWF0aC5hYnMobikpKTtcclxuICAgIG4gPSBwYXJzZUludChuLnNsaWNlKC0yKSwgMTApO1xyXG4gICAgcmVtYWluZGVyID0gbiAlIDEwO1xyXG5cclxuICAgIGlmIChwbHVyYWxMYW5ncy5oYXNPd25Qcm9wZXJ0eShsYW5nKSkge1xyXG4gICAgICAgIHJldHVybiBwbHVyYWxMYW5nc1tsYW5nXShzaW5ndWxhciwgcGx1cmFsMSwgcGx1cmFsMiwgcmVtYWluZGVyLCBuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGxhbmd1YWdlIOKAlCAnICsgbGFuZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlbHBlcnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvaGVscGVycy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG52YXIgY29sb3IgPSB7fTtcclxuXHJcbmNvbnN0IEhFWF9TSUdOUyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xyXG5cclxuY29sb3IuY2hlY2tSR0IgPSBmdW5jdGlvbiAoY29sb3JTdHIpIHtcclxuICAgIHZhciByZXN1bHQgPSBbXSwgaSwgYztcclxuXHJcbiAgICBjb2xvclN0ciA9IGNvbG9yU3RyLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgaWYgKGNvbG9yU3RyLmxlbmd0aCAhPT0gMykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgY29sb3JTdHIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjID0gY29sb3JTdHJbaV07XHJcblxyXG4gICAgICAgIGlmIChjWzBdID09PSAnICcpIHtcclxuICAgICAgICAgICAgYyA9IGMudHJpbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTmFOKGMpIHx8IFN0cmluZyhwYXJzZUludChjLCAxMCkpLmxlbmd0aCAhPT0gYy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGMsIDEwKSA8IDAgfHwgcGFyc2VJbnQoYywgMTApID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb2xvci5jaGVja1JHQkEgPSBmdW5jdGlvbiAoY29sb3JTdHIpIHtcclxuICAgIHZhciByZXN1bHQgPSBbXSwgaSwgYywgb3A7XHJcblxyXG4gICAgY29sb3JTdHIgPSBjb2xvclN0ci5zcGxpdCgnLCcpO1xyXG5cclxuICAgIGlmIChjb2xvclN0ci5sZW5ndGggIT09IDQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbG9yU3RyLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xyXG4gICAgICAgIGMgPSBjb2xvclN0cltpXTtcclxuXHJcbiAgICAgICAgaWYgKGNbMF0gPT09ICcgJykge1xyXG4gICAgICAgICAgICBjID0gYy50cmltKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNOYU4oYykgfHwgU3RyaW5nKHBhcnNlSW50KGMsIDEwKSkubGVuZ3RoICE9PSBjLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VJbnQoYywgMTApIDwgMCB8fCBwYXJzZUludChjLCAxMCkgPiAyNTUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0LnB1c2goYyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3AgPSBjb2xvclN0clszXTtcclxuXHJcbiAgICBpZiAob3BbMF0gPT09ICcgJykge1xyXG4gICAgICAgIG9wID0gb3AudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJzZUZsb2F0KG9wKSA8IDAgfHwgcGFyc2VGbG9hdChvcCkgPiAxIHx8IFN0cmluZyhwYXJzZUZsb2F0KG9wKSkubGVuZ3RoICE9PSBvcC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0LnB1c2gob3ApO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb2xvci5pc1JHQkxpa2UgPSBmdW5jdGlvbiAoY29sb3JTdHIpIHtcclxuICAgIHZhciByZXN1bHQgPSB7dmFsdWU6IGZhbHNlLCB0eXBlOiBudWxsfTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbG9yU3RyICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sb3JTdHJbMF0gIT09ICdyJyB8fCBjb2xvclN0clsxXSAhPT0gJ2cnIHx8IGNvbG9yU3RyWzJdICE9PSAnYicpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbG9yU3RyWzNdID09PSAnYScpIHtcclxuICAgICAgICBpZiAoY29sb3JTdHJbNF0gIT09ICcoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY29sb3JTdHJbM10gIT09ICdhJykge1xyXG4gICAgICAgIGlmIChjb2xvclN0clszXSAhPT0gJygnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb2xvclN0cltjb2xvclN0ci5sZW5ndGggLSAxXSAhPT0gJyknKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29sb3JTdHJbM10gPT09ICdhJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBjb2xvci5jaGVja1JHQkEoY29sb3JTdHIuc2xpY2UoNSwgLTEpKSxcclxuICAgICAgICAgICAgdHlwZTogJ3JnYmEnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlOiBjb2xvci5jaGVja1JHQihjb2xvclN0ci5zbGljZSg0LCAtMSkpLFxyXG4gICAgICAgIHR5cGU6ICdyZ2InXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29sb3IuaXNIZXhMaWtlID0gZnVuY3Rpb24gKGNvbG9yU3RyKSB7XHJcbiAgICB2YXIgbGVuLCBpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgY29sb3JTdHIgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb2xvclN0clswXSA9PT0gJyMnKSB7XHJcbiAgICAgICAgY29sb3JTdHIgPSBjb2xvclN0ci5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBsZW4gPSBjb2xvclN0ci5sZW5ndGg7XHJcblxyXG4gICAgaWYgKGxlbiAhPT0gMyAmJiBsZW4gIT09IDYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKCFoZWxwZXJzLmluQXJyYXkoSEVYX1NJR05TLCBjb2xvclN0cltpXS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2xvclN0cjtcclxufTtcclxuXHJcbmNvbG9yLmNoYW5nZSA9IGZ1bmN0aW9uIChjb2xvclN0ciwgcGVyY2VudCwgYWN0aW9uKSB7XHJcbiAgICB2YXIgcGFydHMsXHJcbiAgICAgICAgcmVkLCBncmVlbiwgYmx1ZSxcclxuICAgICAgICBzdGFydFBvaW50LFxyXG4gICAgICAgIG5ld0NvbG9yO1xyXG5cclxuICAgIGlmIChhY3Rpb24gIT09ICdsaWdodGVuJyAmJiBhY3Rpb24gIT09ICdkYXJrZW4nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9yU3RyID0gY29sb3JTdHIudHJpbSgpO1xyXG5cclxuICAgIGlmIChjb2xvclN0ciA9PT0gJ3RyYW5zcGFyZW50Jykge1xyXG4gICAgICAgIHBhcnRzID0gWzAsIDAsIDBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJ0cyA9IGNvbG9yLmlzUkdCTGlrZShjb2xvclN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwYXJ0cy52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0cyA9IHBhcnRzLnZhbHVlO1xyXG5cclxuICAgIHJlZCA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCksXHJcbiAgICBncmVlbiA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCksXHJcbiAgICBibHVlID0gcGFyc2VJbnQocGFydHNbMl0sIDEwKSxcclxuICAgIG5ld0NvbG9yID0gJ3JnYignO1xyXG5cclxuICAgIHBlcmNlbnQgPSBwZXJjZW50IC8gMTAwO1xyXG5cclxuICAgIHN0YXJ0UG9pbnQgPSAoYWN0aW9uID09PSAnbGlnaHRlbicgPyAyNTUgOiAwKTtcclxuXHJcbiAgICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMjU1IC0gcmVkKSAqIHBlcmNlbnQpICsgcmVkKSArICcsJztcclxuICAgIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSBncmVlbikgKiBwZXJjZW50KSArIGdyZWVuKSArICcsJztcclxuICAgIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSBibHVlKSAqIHBlcmNlbnQpICsgYmx1ZSkgKyAnKSc7XHJcblxyXG4gICAgcmV0dXJuIG5ld0NvbG9yO1xyXG59O1xyXG5cclxuY29sb3IubGlnaHRlbiA9IGZ1bmN0aW9uIChjb2xvclN0ciwgcGVyY2VudCkge1xyXG4gICAgdmFyIHBhcnRzID0gKGNvbG9yU3RyID09PSAndHJhbnNwYXJlbnQnKSA/IFswLCAwLCAwXSA6IGNvbG9yU3RyLnJlcGxhY2UoL3JnYmE/XFwoLywgJycpLnJlcGxhY2UoL1xcKS8sICcnKS5zcGxpdCgnLCcpLFxyXG4gICAgICAgIHJlZCA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCksXHJcbiAgICAgICAgZ3JlZW4gPSBwYXJzZUludChwYXJ0c1sxXSwgMTApLFxyXG4gICAgICAgIGJsdWUgPSBwYXJzZUludChwYXJ0c1syXSwgMTApLFxyXG4gICAgICAgIG5ld0NvbG9yID0gJ3JnYignO1xyXG5cclxuICAgIHBlcmNlbnQgPSBwZXJjZW50IC8gMTAwO1xyXG5cclxuICAgIG5ld0NvbG9yICs9IChNYXRoLnJvdW5kKCgyNTUgLSByZWQpICogcGVyY2VudCkgKyByZWQpICsgJywnO1xyXG4gICAgbmV3Q29sb3IgKz0gKE1hdGgucm91bmQoKDI1NSAtIGdyZWVuKSAqIHBlcmNlbnQpICsgZ3JlZW4pICsgJywnO1xyXG4gICAgbmV3Q29sb3IgKz0gKE1hdGgucm91bmQoKDI1NSAtIGJsdWUpICogcGVyY2VudCkgKyBibHVlKSArICcpJztcclxuXHJcbiAgICByZXR1cm4gbmV3Q29sb3I7XHJcbn07XHJcblxyXG5jb2xvci5kYXJrZW4gPSBmdW5jdGlvbiAoY29sb3JTdHIsIHBlcmNlbnQpIHtcclxuICAgIHZhciBwYXJ0cyA9IChjb2xvclN0ciA9PT0gJ3RyYW5zcGFyZW50JykgPyBbMCwgMCwgMF0gOiBjb2xvclN0ci5yZXBsYWNlKC9yZ2JhP1xcKC8sICcnKS5yZXBsYWNlKC9cXCkvLCAnJykuc3BsaXQoJywnKSxcclxuICAgICAgICByZWQgPSBwYXJzZUludChwYXJ0c1swXSwgMTApLFxyXG4gICAgICAgIGdyZWVuID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKSxcclxuICAgICAgICBibHVlID0gcGFyc2VJbnQocGFydHNbMl0sIDEwKSxcclxuICAgICAgICBuZXdDb2xvciA9ICdyZ2IoJztcclxuXHJcbiAgICBwZXJjZW50ID0gcGVyY2VudCAvIDEwMDtcclxuXHJcbiAgICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMCAtIHJlZCkgKiBwZXJjZW50KSArIHJlZCkgKyAnLCc7XHJcbiAgICBuZXdDb2xvciArPSAoTWF0aC5yb3VuZCgoMCAtIGdyZWVuKSAqIHBlcmNlbnQpICsgZ3JlZW4pICsgJywnO1xyXG4gICAgbmV3Q29sb3IgKz0gKE1hdGgucm91bmQoKDAgLSBibHVlKSAqIHBlcmNlbnQpICsgYmx1ZSkgKyAnKSc7XHJcblxyXG4gICAgcmV0dXJuIG5ld0NvbG9yO1xyXG59O1xyXG5cclxuY29sb3IuaGV4VG9SZ2IgPSBmdW5jdGlvbiAoaGV4KSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gW10sIGk7XHJcblxyXG4gICAgaGV4ID0gY29sb3IuaXNIZXhMaWtlKGhleCk7XHJcblxyXG4gICAgaWYgKCFoZXgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBoZXgubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goJycgKyBwYXJzZUludCgnJyArIGhleFtpXSArIGhleFtpXSwgMTYpKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBoZXgubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKGkgJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgnJyArIHBhcnNlSW50KCcnICsgaGV4W2kgLSAxXSArIGhleFtpXSwgMTYpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sb3I7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvY29sb3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwiLFwidW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcImpRdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxudmFyIERPTSA9IHt9O1xyXG5cclxuRE9NLnNjcm9sbFBhZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBjb3JyZWN0aW9uLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIChjb3JyZWN0aW9uIHx8IDApXHJcbiAgICB9LCBvcHRpb25zIHx8IHt9KS5wcm9taXNlKCk7XHJcbn07XHJcblxyXG5ET00uZ2V0TWF4SGVpZ2h0ID0gZnVuY3Rpb24gKGJsb2Nrcykge1xyXG4gICAgdmFyIG1heEhlaWdodCA9ICQoYmxvY2tzWzBdKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgIGJsb2Nrcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5vdXRlckhlaWdodCgpID4gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIG1heEhlaWdodCA9ICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbWF4SGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBET007XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvRE9NLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGRlY29yYXRvcnMgPSB7fTtcclxuXHJcbmRlY29yYXRvcnMuZGVib3VuY2UgPSBmdW5jdGlvbiAoZnVuYywgZGVsYXkpIHtcclxuICAgIHZhciBzdGF0ZSA9IG51bGw7XHJcbiAgICBjb25zdCBDT09MRE9XTiA9IDE7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHN0YXRlID0gQ09PTERPV047XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgfSwgZGVsYXkgfHwgMTAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbn07XHJcblxyXG5kZWNvcmF0b3JzLnRocm90dGxlID0gZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XHJcbiAgICB2YXIgc3RhdGUgPSBudWxsLFxyXG4gICAgICAgIGxhc3RBcmdzLCBsYXN0Q29udGV4dDtcclxuICAgIGNvbnN0IENPT0xET1dOID0gMTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlciAoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgICAgICBsYXN0Q29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICBzdGF0ZSA9IENPT0xET1dOO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAobGFzdEFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwbHkobGFzdENvbnRleHQsIGxhc3RBcmdzKTtcclxuICAgICAgICAgICAgICAgIGxhc3RDb250ZXh0ID0gbGFzdEFyZ3MgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZGVsYXkgfHwgMTAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbn07XHJcblxyXG5kZWNvcmF0b3JzLnNtYXJ0RHJhdyA9IGZ1bmN0aW9uIChmdW5jLCBkZWxheSwgZXhlY0FzYXApIHtcclxuICAgIHZhciB0aW1lcklEO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuICAgICAgICBpZiAodGltZXJJRCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJRCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChleGVjQXNhcCkge1xyXG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXJJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWV4ZWNBc2FwKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aW1lcklEID0gbnVsbDtcclxuICAgICAgICB9LCBkZWxheSB8fCAxMDApO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmRlY29yYXRvcnMub25jZSA9IGZ1bmN0aW9uIChmdW5jLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgaXNDYWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChpc0NhbGxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgICAgICBpc0NhbGxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVjb3JhdG9ycztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9kZWNvcmF0b3JzLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xyXG5cclxudmFyIHN0eWxlcyA9IHt9O1xyXG5cclxuY29uc3QgQU5JTUFUSU9OX1NVUFBPUlQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRvbVByZWZpeGVzID0gJ1dlYmtpdCBNb3ogTyBtcyBLaHRtbCcuc3BsaXQoJyAnKSxcclxuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGk7XHJcblxyXG4gICAgaWYgKGVsLnN0eWxlLmFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb21QcmVmaXhlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChlbC5zdHlsZVtkb21QcmVmaXhlc1tpXSArICdBbmltYXRpb25OYW1lJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KCkpO1xyXG5cclxuLy8gc3R5bGVzLnN1cHBvcnQgPSB7fTtcclxuXHJcbi8vIHN0eWxlcy5zdXBwb3J0LmFuaW1hdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB2YXIgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zIEtodG1sJy5zcGxpdCgnICcpLFxyXG4vLyAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbi8vICAgICAgICAgaTtcclxuXHJcbi8vICAgICBpZiAoZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZm9yIChpID0gMDsgaSA8IGRvbVByZWZpeGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbi8vICAgICAgICAgaWYgKGVsLnN0eWxlW2RvbVByZWZpeGVzW2ldICsgJ0FuaW1hdGlvbk5hbWUnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gZmFsc2U7XHJcbi8vIH0oKSk7XHJcblxyXG5zdHlsZXMucmlwcGxlQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0aW1lcklEO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBidG4sXHJcbiAgICAgICAgICAgIGNpcmNsZSxcclxuICAgICAgICAgICAgY29vcmRzLFxyXG4gICAgICAgICAgICBzaXplLFxyXG4gICAgICAgICAgICB4UG9zLCB5UG9zLFxyXG4gICAgICAgICAgICBhY3Rpb24sIHBlcmNlbnQsXHJcbiAgICAgICAgICAgIGJ0bkNvbG9yLCBiZztcclxuXHJcbiAgICAgICAgaWYgKCFBTklNQVRJT05fU1VQUE9SVCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4gPSAkKHRoaXMpO1xyXG4gICAgICAgIGNpcmNsZSA9IGJ0bi5maW5kKCcuZS1yaXBwbGUtY2lyY2xlJyk7XHJcbiAgICAgICAgY29vcmRzID0gYnRuLm9mZnNldCgpO1xyXG4gICAgICAgIHNpemUgPSBNYXRoLm1heChidG4ud2lkdGgoKSwgYnRuLmhlaWdodCgpKTtcclxuICAgICAgICB4UG9zID0gZS5wYWdlWCAtIGNvb3Jkcy5sZWZ0O1xyXG4gICAgICAgIHlQb3MgPSBlLnBhZ2VZIC0gY29vcmRzLnRvcDtcclxuICAgICAgICBhY3Rpb24gPSBidG4uZGF0YSgnZS1jb2xvci1hY3Rpb24nKTtcclxuICAgICAgICBwZXJjZW50ID0gYnRuLmRhdGEoJ2UtcGVyY2VudC1jaGFuZ2UnKTtcclxuICAgICAgICBidG5Db2xvciA9IGdldENvbXB1dGVkU3R5bGUoYnRuWzBdKS5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgIGJnID0gY29sb3IuY2hhbmdlKGJ0bkNvbG9yLCBwZXJjZW50LCBhY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjaXJjbGUpIHtcclxuICAgICAgICAgICAgY2lyY2xlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjaXJjbGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2lyY2xlID0gJCgnPGRpdi8+Jyk7XHJcbiAgICAgICAgY2lyY2xlLmNzcyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiBzaXplICsgJ3B4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplICsgJ3B4JyxcclxuICAgICAgICAgICAgdG9wOiAoeVBvcyAtIHNpemUgLyAyKSArICdweCcsXHJcbiAgICAgICAgICAgIGxlZnQ6ICh4UG9zIC0gc2l6ZSAvIDIpICsgJ3B4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNpcmNsZS5hZGRDbGFzcygnZS1yaXBwbGUtY2lyY2xlJyk7XHJcblxyXG4gICAgICAgIGJ0bi5hcHBlbmQoY2lyY2xlKTtcclxuXHJcbiAgICAgICAgaWYgKHRpbWVySUQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySUQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXJJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaXJjbGUucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgYnRuLmRhdGEoJ2UtcmlwcGxlLWRlbGF5JykgfHwgNjAwKTtcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvc3R5bGVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxzID0ge307XHJcblxyXG51dGlscy5hZGRNZXRob2QgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBmdW5jKSB7XHJcbiAgICB2YXIgcGFydHMgPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKSxcclxuICAgICAgICBwYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgIGlmIChwYXJ0c1swXSA9PT0gJ2VjbGlwc2UnKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICAgICAgaWYgKCEocGFydHNbaV0gaW4gcGFyZW50KSAmJiBpICE9PSBwYXJ0cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFtwYXJ0c1tpXV0gPSB7fTtcclxuICAgICAgICB9IGVsc2UgaWYgKCEocGFydHNbaV0gaW4gcGFyZW50KSAmJiBpID09PSBwYXJ0cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFtwYXJ0c1tpXV0gPSBmdW5jO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnRbcGFydHNbaV1dO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XHJcblxyXG51dGlscy5uYW1lc3BhY2UgPSBmdW5jdGlvbiAobnNTdHJpbmcpIHtcclxuICAgIHZhciBwYXJ0cyA9IG5zU3RyaW5nLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gdGhpcztcclxuXHJcbiAgICBpZiAocGFydHNbMF0gPT09ICdlY2xpcHNlJykge1xyXG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFydHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgICAgIGlmICghKHBhcnRzW2ldIGluIHBhcmVudCkpIHtcclxuICAgICAgICAgICAgcGFyZW50W3BhcnRzW2ldXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnRbcGFydHNbaV1dO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlscztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi91dGlscy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vbGliL2hlbHBlcnMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGliL3N0eWxlcyc7XHJcbmltcG9ydCBjb2xvciBmcm9tICcuL2xpYi9jb2xvcic7XHJcbmltcG9ydCBkZWNvcmF0b3JzIGZyb20gJy4vbGliL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgRE9NIGZyb20gJy4vbGliL0RPTSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICcuL2xpYi91dGlscyc7XHJcblxyXG52YXIgZWNsaXBzZSA9IHtcclxuICAgIGdsb2JhbHM6IHt9LFxyXG4gICAgc3RvcmFnZToge1xyXG4gICAgICAgIGRyb3Bkb3duczogW10sXHJcbiAgICAgICAgYnVuZGxlczogW10sXHJcbiAgICAgICAgc3Bpbm5lcnM6IFtdLFxyXG4gICAgICAgIHN0YXRpY1RhYnM6IFtdLFxyXG4gICAgICAgIGFkYXB0aXZlVGFiczogW10sXHJcbiAgICAgICAgc2VhcmNoZXM6IFtdLFxyXG4gICAgICAgIGNhY2hlOiB7fVxyXG4gICAgfSxcclxuICAgIGhlbHBlcnMsXHJcbiAgICBzdHlsZXMsXHJcbiAgICBjb2xvcixcclxuICAgIGRlY29yYXRvcnMsXHJcbiAgICBET00sXHJcbiAgICB1dGlscywgXHJcbiAgICBtb2R1bGVzOiB7fVxyXG59O1xyXG5cclxuZWNsaXBzZS51dGlscy5hZGRNZXRob2QgPSBlY2xpcHNlLnV0aWxzLmFkZE1ldGhvZC5iaW5kKGVjbGlwc2UpO1xyXG5lY2xpcHNlLnV0aWxzLm5hbWVzcGFjZSA9IGVjbGlwc2UudXRpbHMubmFtZXNwYWNlLmJpbmQoZWNsaXBzZSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVjbGlwc2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlY2xpcHNlLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RGQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlPQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUZBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwR0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==