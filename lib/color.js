'use strict';

import helpers from './helpers';

var color = {};

const HEX_SIGNS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

color.checkRGB = function (colorStr) {
  var result = [], i, c;

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
  var result = [], i, c, op;

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
  var result = {value: false, type: null};

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
    if (!helpers.inArray(HEX_SIGNS, colorStr[i].toLowerCase())) {
      return false;
    }
  }

  return colorStr;
};

color.change = function (colorStr, percent, action) {
  var parts,
    red, green, blue,
    op,
    startPoint,
    newColor;

  if (action !== 'lighten' && action !== 'darken') {
    return;
  }

  colorStr = colorStr.trim();

  if (colorStr === 'transparent') {
    parts = {value: [0, 0, 0]};
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

  startPoint = (action === 'lighten' ? 255 : 0);

  newColor += (Math.round((255 - red) * percent) + red) + ',';
  newColor += (Math.round((255 - green) * percent) + green) + ',';
  newColor += (Math.round((255 - blue) * percent) + blue);

  newColor += (isNaN(op) ? ')' : ',' + op + ')');

  return newColor;
};

color.hexToRgb = function (hex) {
  var result = [], i;

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

export default color;
