'use strict';

import $ from 'jquery';
import color from './color';

var styles = {};

const ANIMATION_SUPPORT = (function () {
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
}());

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

styles.rippleButton = (function () {
    var timerID;

    return function (e) {
        var btn,
            circle,
            coords,
            size,
            xPos, yPos,
            action, percent,
            btnColor, bg;

        if (!ANIMATION_SUPPORT) {
            return;
        }

        btn = $(this);
        circle = btn.find('.e-ripple-circle');
        coords = btn.offset();
        size = Math.max(btn.width(), btn.height());
        xPos = e.pageX - coords.left;
        yPos = e.pageY - coords.top;
        action = btn.data('e-color-action');
        percent = btn.data('e-percent-change');
        btnColor = getComputedStyle(btn[0]).backgroundColor;

        bg = color.change(btnColor, percent, action);
        
        if (circle) {
            circle.remove();
            circle = null;
        }

        circle = $('<div/>');
        circle.css({
            width: size + 'px',
            height: size + 'px',
            top: (yPos - size / 2) + 'px',
            left: (xPos - size / 2) + 'px',
            backgroundColor: bg
        });
        circle.addClass('e-ripple-circle');

        btn.append(circle);

        if (timerID) {
            clearTimeout(timerID);
        }

        timerID = setTimeout(() => {
            circle.remove();
        }, btn.data('e-ripple-delay') || 600);
    };
}());

export default styles;
