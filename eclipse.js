'use strict';

import helpers from './lib/helpers';
import styles from './lib/styles';
import color from './lib/color';
import decorators from './lib/decorators';
import DOM from './lib/DOM';
import utils from './lib/utils';

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
    helpers,
    styles,
    color,
    decorators,
    DOM,
    utils, 
    modules: {}
};

eclipse.utils.addMethod = eclipse.utils.addMethod.bind(eclipse);
eclipse.utils.namespace = eclipse.utils.namespace.bind(eclipse);

module.exports = eclipse;
