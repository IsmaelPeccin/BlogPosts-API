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

const findAll = async (_req, res, next) => { 
  try {
    const response = await userService.findAll();

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await userService.findById(id);

    if (response.message) {
      return res.status(404).json({ message: response.message });
    }
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { email } = req.tokenData;

    await userService.destroy(email);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  findAll,
  findById,
  destroy,
};