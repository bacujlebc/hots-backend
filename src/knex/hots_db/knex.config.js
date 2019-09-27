const path = require('path');

module.exports = {
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