const users = require('./users');
const posts = require('./posts');
const auth = require('./auth');

module.exports = (app) => {
    users(app);
    posts(app);
    auth(app);
};