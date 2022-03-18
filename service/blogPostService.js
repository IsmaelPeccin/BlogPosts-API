const { BlogPost, Category, User } = require('../models');

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

const findAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  
   });
  return allPosts;
};

const destroy = async (id, userId) => {
  if (id !== userId) {
    return { 
      message: 'Unauthorized user',
      code: 401,
    };
  }
  const findPost = BlogPost.findByPk(id);
  if (!findPost) {
    return { 
      message: 'Post does not exist',
      code: 404,
    };
  }
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  create,
  findAll,
  destroy,
};