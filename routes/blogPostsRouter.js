const express = require('express');
const { auth, validate } = require('../middlewares');
const blogPost = require('../controller/blogPostController');
const blogPostSchema = require('../schema/blogPostSchema');
const updateSchema = require('../schema/blogPostSchema');

const blogPostRouter = express.Router();

blogPostRouter.post(
  '/',
  auth,
  validate(blogPostSchema),
  blogPost.create,
);

blogPostRouter.get(
  '/',
  auth,
  blogPost.findAll,
);

blogPostRouter.get(
  '/:id',
  auth,
  blogPost.findByPk,
);

blogPostRouter.put(
  '/:id',
  auth,
  validate(updateSchema),
  blogPost.update,
);

blogPostRouter.delete(
  '/:id',
  auth,
  blogPost.destroy,
);

module.exports = blogPostRouter;