'use strict';

import helpers from './helpers';
import $ from 'jquery';

var DOM = {};

DOM.scrollPage = function (target, correction, options) {
    return $('html, body').animate({
        scrollTop: target.offset().top - (correction || 0)
    }, options || {}).promise();
};

DOM.getMaxHeight = function (blocks) {
    var maxHeight = $(blocks[0]).outerHeight();

    blocks.each(function () {
        if ($(this).outerHeight() > maxHeight) {
            maxHeight = $(this).outerHeight();
        }
    });

    return maxHeight;
}

export default DOM;
