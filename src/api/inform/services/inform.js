'use strict';

/**
 * inform service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inform.inform');
