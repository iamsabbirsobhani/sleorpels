'use strict';

/**
 * inform router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::inform.inform');
