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

const findAll = async () => {
  const usersList = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return usersList; 
};

const findById = async (id) => {
  const userById = await User.findByPk(id);

  if (!userById) {
    return { message: 'User does not exist' };
  }
  return userById;
};

module.exports = {
  create,
  findAll,
  findById,
};
