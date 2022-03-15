const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const login = async (email, password) => {
  const findUser = await User.findOne({ where: { email } }); 

  if (findUser === null || password !== findUser.password) {
    return { message: 'Invalid fields' };
  }

  const token = jwtGenerator({ email, password });

  return { token };
};

module.exports = {
  login,
};