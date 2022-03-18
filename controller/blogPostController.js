const blogPostService = require('../service/blogPostService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.tokenData;
    const { message, createPost } = await blogPostService.create(title, content, categoryIds, id);

    if (message) {
      return res.status(400).json({ message });
    }
    
    return res.status(201).json(createPost);
  } catch (error) {
    next(error);
  }
};

const findAll = async (_req, res, next) => { 
  try {
    const allPosts = await blogPostService.findAll();

    return res.status(200).json(allPosts);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const userId = req.tokenData.id;
    const { id } = req.params;

   const { message, code } = await blogPostService.destroy(id, userId);

   if (message) {
     return res.status(code).json({ message });
   }

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

// const findById = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const response = await userService.findById(id);

//     if (response.message) {
//       return res.status(404).json({ message: response.message });
//     }
//     return res.status(200).json(response);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  create,
  findAll,
  destroy,
  // findById,
};