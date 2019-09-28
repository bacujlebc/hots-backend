const asyncHandler = require('express-async-handler')
const dbUtils = require('../../knex/utils');
const jwt = require('jsonwebtoken');
const utils = require('../../utilities/index');

module.exports = (app) => {
  app.get(
    "/api/posts",
    utils.verifyToken,
    (req, res) => {
      jwt.verify(req.token, 'secretkey', asyncHandler(async (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          const posts = await dbUtils.getPosts();
          res.status(200).send(posts);
        }
      }));
    }
  );

  app.get(
    "/api/posts/:postId",
    utils.verifyToken,
    (req, res) => {
      jwt.verify(req.token, 'secretkey', asyncHandler(async (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          const { postId } = req.params;
          const post = await dbUtils.getPostById(postId);
          res.status(200).send(post);
        }
      }));
    }
  );

  app.post(
    "/api/posts",
    utils.verifyToken,
    (req, res) => {
      jwt.verify(req.token, 'secretkey', asyncHandler(async (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          const post = req.body.post

          try {
            const newPostId = await dbUtils.createPost(post);
            res.status(201).send({
              message: 'Post created.',
              id: newPostId
            });
          } catch (e) {
            res.status(500).send(e)
          }
        }
      }));
    }
  );


  app.delete(
    "/api/posts/:postId",
    utils.verifyToken,
    (req, res) => {
      jwt.verify(req.token, 'secretkey', asyncHandler(async (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          const { postId } = req.params
          try {
            const deletedPostId = await dbUtils.deletePostById(postId);
            res.status(200).send({
              message: 'Post have been removed.',
              id: deletedPostId
            });
          } catch (e) {
            res.status(500).send(e)
          }
        }
      }));
    }
  );

};