'use strict';

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

export default utils;
