const errorMiddleware = require('./errorMiddleware');
const validate = require('./validate');
const auth = require('./auth');

module.exports = {
  errorMiddleware,
  validate,
  auth,
};