'use strict';

/**
 * who-am-i service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::who-am-i.who-am-i');
