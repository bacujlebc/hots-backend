const asyncHandler = require('express-async-handler')
const dbUtils = require('../../knex/utils');


module.exports = (app) => {
  app.get(
    "/api/users",
    asyncHandler(async (req, res) => {
      const users = await dbUtils.getUsers();
      return res.status(200).send(users);
    })
  );
};