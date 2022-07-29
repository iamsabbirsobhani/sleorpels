"use strict";

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async abc(ctx, next) {
    console.log("Hello world");
    const { id } = ctx.params;
    const { query } = ctx;
    console.log(query, id);
    const entity = await strapi.service("api::order.order").findOne(id, {
      populate: {
        products: true,
        users_permissions_user: true,
        payment_method: true,
        quantities: {
          populate: ["product"],
        },
      },
    });
    // ctx.response = "sdf";
    ctx.body = entity;

    // task
    //1. post a order except quantity
    //2. get the order id, save it in temp variable orderId
    //3. create quantity for each products in order
    //4. example:
    // quantity: req.quanitity, product: req.productId, order: orderId
    //6. may be in req will have multiple products, in that case try object/desctructure of post from client.
  },
}));
