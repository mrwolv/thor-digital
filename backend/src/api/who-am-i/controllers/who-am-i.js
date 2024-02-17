'use strict';

/**
 * who-am-i controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::who-am-i.who-am-i');
