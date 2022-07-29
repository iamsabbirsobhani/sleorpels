module.exports = {
  async index(ctx, next) {
    // called by GET /hello

    ctx.body = "Hello Strapi"; // we could also send a JSON
  },
};
