const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.required().messages({
    'any.required': '400|"title" is required',
  }),
  content: Joi.required().messages({
    'any.required': '400|"content" is required',
  }),
  categoryIds: Joi.required().messages({
    'any.required': '400|"categoryIds" is required',
  }),
});