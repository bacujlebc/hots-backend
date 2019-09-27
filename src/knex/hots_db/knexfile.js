// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: 'hots_db',
      user: 'postgres',
      password: '',
      host: 'localhost',
      port: "54320",
      charset: "utf8"
    },
    migrations: {
      directory: path.resolve(__dirname, './migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, './seeds')
    }
  },

  staging: {
    client: "pg",
    connection: {
      database: 'hots_db',
      user: 'postgres',
      password: '',
      host: 'localhost',
      port: "54320",
      charset: "utf8"
    },
    migrations: {
      directory: path.resolve(__dirname, './migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, './seeds')
    }
  },

  production: {
    client: "pg",
    connection: {
      database: 'hots_db',
      user: 'postgres',
      password: '',
      host: 'localhost',
      port: "54320",
      charset: "utf8"
    },
    migrations: {
      directory: path.resolve(__dirname, './migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, './seeds')
    }

  }
};
