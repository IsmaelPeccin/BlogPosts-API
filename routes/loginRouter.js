const express = require('express');
const { validate } = require('../middlewares');
const loginSchema = require('../schema/loginSchema');
const login = require('../controller/loginController');

const loginRouter = express.Router();

loginRouter.post(
  '/',
  validate(loginSchema),
  login.login,
);

module.exports = loginRouter;