const userSchema = require('../schema/userSchema');

const createValidate = (req, res, next) => {
  try {
    const { error } = userSchema.validate(req.body);

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = createValidate;