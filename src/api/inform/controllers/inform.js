'use strict';

/**
 *  inform controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::inform.inform');
