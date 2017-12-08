'use strict';

var helpers = {},
    pluralLangs = {};

pluralLangs.en = function (singular, plural1, plural2, remainder, n) {
  if (n === 1) {
    return singular;
  }

  return plural1;
};
pluralLangs.ru = function (singular, plural1, plural2, remainder, n) {
  if ((remainder >= 2 && remainder <= 4) && (n < 5 || n > 21)) {
    return plural2;
  } else if (remainder === 1 && n !== 11) {
    return singular;
  }

  return plural1;
};

helpers.getClass = function (arg) {
  return Object.prototype.toString.call(arg).slice(8, -1);
};

helpers.extend = function (deep, target, ...sources) {
  var stack = [],
    start = Date.now();
  
  stack.push(target, sources);
  
  while (stack.length) {
    let args = stack.pop(),
      o = stack.pop();

    args.forEach((arg) => {
      Object.keys(arg).forEach((key) => {
        if (arg[key] !== target) {
          if (!deep) {
            o[key] = arg[key];
          } else {
            if (helpers.getClass(arg[key]) !== 'Object') {
              o[key] = arg[key];
            } else {
              if (helpers.getClass(o[key]) !== 'Object') {
                o[key] = {};
              }

              stack.push(o[key], [arg[key]]);
            }
          }
        }
      });
    });
  }

  return target;
};

helpers.inArray = function (arr, value) {
  return arr.some((item) => item === value);
};

helpers.removeFromArray = function (arr, value) {
  return arr.filter((item) => item !== value);
};

helpers.pushIfMiss = function (arr, value) {
  if (!helpers.inArray(arr, value)) {
    return [...arr, value];
  }

  return [...arr];
};

helpers.isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(parseFloat(n));
};

helpers.addLeadingZero = function (n) {
  return (Math.abs(n) < 10) ? ((n < 0) ? '-0' : '0') + Math.abs(n) : n;
};

helpers.getAbsoluteUrl = (function () {
  var a;

  return (url) => {
    if (!a) {
      a = document.createElement('a');
    }

    a.href = url || '';

    return a.href;
  };
}());

helpers.plural = function (singular, plural1, plural2, n, lang = 'ru') {
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
}

export default helpers;
