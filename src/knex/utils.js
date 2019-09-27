const hots_db = require('./hots_db');

async function getUsers() {
    const users = await hots_db('users')
        .select('*')

    return users;
}

module.exports = {
    getUsers,
}