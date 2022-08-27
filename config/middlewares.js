module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://localhost:1337",
        "http://localhost:3000",
        "https://sleorpels.vercel.app",
        "https://sleorpels.herokuapp.com",
        "http://192.168.0.100:3000",
        "https://sleorpels.onrender.com",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
