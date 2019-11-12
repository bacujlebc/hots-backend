const asyncHandler = require('express-async-handler')
const dbUtils = require('../../knex/utils');
const jwt = require('jsonwebtoken');
const utils = require('../../utilities/index');

module.exports = (app) => {
  app.get(
    "/api/tours",
    utils.verifyToken,
    (req, res) => {
      jwt.verify(req.token, 'secretkey', asyncHandler(async (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          const tours = await dbUtils.getTours();
          res.status(200).send(tours);
        }
      }));
    }
  );

  app.get(
    "/api/tours/:tourId",
    utils.verifyToken,
    (req, res) => {
      jwt.verify(req.token, 'secretkey', asyncHandler(async (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          const { tourId } = req.params;
          const tour = await dbUtils.getTourById(tourId);
          res.status(200).send(tour);
        }
      }));
    }
  );
};