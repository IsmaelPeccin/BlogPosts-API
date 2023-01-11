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

const findByPk = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  if (!post) {
    return { message: 'Post does not exist' };
  }
  return post;
};

const update = async (postBody, id, userId) => {
  if (postBody.categoryIds) {
    return {
      message: 'Categories cannot be edited',
      code: 400,
    };
  }
  if (id !== userId) {
    return { 
      message: 'Unauthorized user',
      code: 401,
    };
  }
  await BlogPost.update(postBody.title, postBody.content, { where: { id } });
  const updatedPost = await BlogPost.findByPk(id);
  return { updatedPost };
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
  findByPk,
  update,
  destroy,
};