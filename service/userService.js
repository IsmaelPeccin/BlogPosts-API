const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (displayName, email, password, image) => {
  const alreadyExists = await User.findOne({ where: { email } });

    if (alreadyExists) {
 return { message: 'User already registered' };
    }

  await User.create({ displayName, email, password, image });

    const token = jwtGenerator({ displayName, email });

    return { token };
};

// const findAll = async () => {
//   const usersList = await User.findAll();

//   return { usersList }; 
// };

module.exports = {
  create,
  // findAll,
};
