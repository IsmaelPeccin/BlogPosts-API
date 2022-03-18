const express = require('express');
const { auth, validate } = require('../middlewares');
const blogPost = require('../controller/blogPostController');
const blogPostSchema = require('../schema/blogPostSchema');

const blogPostRouter = express.Router();

blogPostRouter.post(
  '/',
  auth,
  validate(blogPostSchema),
  blogPost.create,
);

// blogPostRouter.get(
//   '/',
//   auth,
//   categories.findAll,
// );

module.exports = blogPostRouter;