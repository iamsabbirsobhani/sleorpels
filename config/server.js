module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: ["2enquxxOM6rs1HsTTtu9cA==", "Nmfbn/WBDT/Qvru8Sae/IA==,edGlQueBxoSIx7G35Zug4Q==", "vNKfdl/lcLlvbHzh+6tzEQ=="],
  },
});
