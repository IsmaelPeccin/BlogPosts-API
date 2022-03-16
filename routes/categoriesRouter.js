const express = require('express');
const { auth } = require('../middlewares');
const categories = require('../controller/categoriesController');

const categoriesRouter = express.Router();

categoriesRouter.post(
  '/',
  auth,
  categories.create,
);

categoriesRouter.get(
  '/',
  auth,
  categories.findAll,
);

module.exports = categoriesRouter;