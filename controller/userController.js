const userService = require('../service/userService'); 

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const response = await userService.create(displayName, email, password, image);

    if (response.message) {
      return res.status(409).json({ message: response.message });
    }
    return res.status(201).json({ response });
  } catch (error) {
    next(error);
  }
};

// const findAll = async (req, res, mext) => { 
//   try {
//     const {} = 
//   }
// };

module.exports = {
  create,
  // findAll,
};