"use strict";

/**
 * order router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::order.order", {
  only: ["find"],
});
// module.exports = createCoreRouter("api::order.order", {
//   routes: [
//     {
//       // Path defined with an URL parameter
//       method: "GET",
//       path: "/order/:id",
//       handler: "order.abc",
//     },
//   ],
// });

// module.exports = {
//   routes: [
//     {
//       // Path defined with an URL parameter
//       method: "GET",
//       path: "/order",
//       handler: "order.getOrderById",
//     },
//   ],
// };
