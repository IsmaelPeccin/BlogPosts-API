const express = require('express');
const { validate, auth } = require('../middlewares');
const userSchema = require('../schema/userSchema');
const user = require('../controller/userController');

const userRouter = express.Router();

userRouter.post(
  '/',
  validate(userSchema),
  user.create,
);

userRouter.get(
  '/',
  auth,
  user.findAll,
);

userRouter.get(
  '/:id',
  auth,
  user.findById,
);

userRouter.delete(
  '/me',
  auth,
  user.destroy,
);

module.exports = userRouter;