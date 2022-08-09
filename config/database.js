const path = require("path");

// production database
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-54-159-175-38.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "dd7vgjjm16e9f1"),
      user: env("DATABASE_USERNAME", "meohydeoxmbzib"),
      password: env(
        "DATABASE_PASSWORD",
        "39f76ad4527b2a168d1978a94ee4f54360ed19ed7eabf57c0059d416f24addff"
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
