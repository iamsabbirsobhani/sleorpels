module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/orders/:id",
      handler: "order.abc",
    },
  ],
};
