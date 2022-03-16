const loginService = require('../service/loginService');

const login = async (req, res, next) => {
  try {
  const { email, password } = req.body;

  const { token, message } = await loginService.login(email, password);

  if (message) {
    return res.status(400).json({ message });
  }
  return res.status(200).json({ token });
} catch (error) {
   next(error); 
} 
};

module.exports = {
  login,
};