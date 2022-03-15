const loginService = require('../service/loginService');

const login = async (req, res, next) => {
  try {
  const { email, password } = req.body;

  const response = await loginService.login(email, password);

  if (response.message) {
    return res.status(400).json({ message: response.message });
  }
  return res.status(200).json({ response });
} catch (error) {
   next(error); 
} 
};

module.exports = {
  login,
};