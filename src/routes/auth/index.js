const asyncHandler = require('express-async-handler')
const dbUtils = require('../../knex/utils');
const jwt = require('jsonwebtoken');
const lodash = require('lodash')

module.exports = (app) => {
    app.post('/api/login', asyncHandler(async (req, res) => {
        const { email } = req.body;
        const user = await dbUtils.getUserByEmail(email)

        if (!lodash.isEmpty(user)) {
            jwt.sign({ user }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                res.json({
                    token
                });
            });
        } else {
            res.sendStatus(404);
        }
    }));
}