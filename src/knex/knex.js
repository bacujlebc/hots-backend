const environment = "development";
const config = require("./knex.config.js")[environment];

module.exports = require("knex")(config);