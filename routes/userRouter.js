const express = require('express');
const { validate } = require('../middlewares');
const userSchema = require('../schema/userSchema');
const user = require('../controller/userController');

const userRouter = express.Router();

userRouter.post(
  '/',
  validate(userSchema),
  user.create,
);

// userRouter.get(
//   '/',
//   validate(schema),
//   user.findAll,
// );

module.exports = userRouter;