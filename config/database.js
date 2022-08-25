const path = require("path");

// production database
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-3-214-2-141.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "da8nnakbroibbc"),
      user: env("DATABASE_USERNAME", "luwdremdmcnnpi"),
      password: env(
        "DATABASE_PASSWORD",
        "3619905869acb9cdde8046f9dc70cb03551d365d002da8e6b9ffd0d386a3c5ed"
      ),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});

// development database
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "sleorpels"),
//       user: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "Lamq0270"),
//       schema: env("DATABASE_SCHEMA", "public"), // Not required
//       // ssl: {
//       //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
//       // },
//     },
//     debug: false,
//   },
// });
