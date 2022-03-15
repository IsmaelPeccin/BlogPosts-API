const validate = (schema) => (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);

    if (error) {
      const [code, message] = error.message.split('|');
      console.log('ISMAEL', code);
      return res.status(code).json({ message });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = validate;