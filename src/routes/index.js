const users = require('./users');
const posts = require('./posts');
const auth = require('./auth');
const tours = require('./tours');

module.exports = (app) => {
    users(app);
    posts(app);
    auth(app);
    tours(app);
};