const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-44-206-197-71.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d4k89f7u30h4ia"),
      user: env("DATABASE_USERNAME", "xnusbogjgiftny"),
      password: env(
        "DATABASE_PASSWORD",
        "a6f3f9a81b3573943206e091b2cbebbc992a235e06fe4f768ad2276a34c0b9b6"
      ),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
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
