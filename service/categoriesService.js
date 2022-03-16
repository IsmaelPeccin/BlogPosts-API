const { Category } = require('../models');

const create = async (name) => {
  if (!name) {
    return { message: '"name" is required' };
  }
  const newCategory = await Category.create({ name });

    return { newCategory };
};

const findAll = async () => {
  const categoriesList = await Category.findAll();

  return categoriesList; 
};

// const findById = async (id) => {
//   const userById = await User.findByPk(id);

//   if (!userById) {
//     return { message: 'User does not exist' };
//   }
//   return userById;
// };

module.exports = {
  create,
  findAll,
  // findById,
};