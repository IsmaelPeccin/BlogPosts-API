const { BlogPost, Category } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const allCategories = await Category.findAll();

  const idAllCategories = allCategories.map((item) => item.id);
  
  const categoryExist = categoryIds.every((id) => idAllCategories.includes(id));

  if (!categoryExist) {
    return { message: '"categoryIds" not found' };
  }

  const createPost = await BlogPost.create({ title, content, userId });

  return createPost;
};

// const findAll = async () => {
//   const categoriesList = await Category.findAll();

//   return categoriesList; 
// };

module.exports = {
  create,
};