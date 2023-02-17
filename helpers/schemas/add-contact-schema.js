const Joi = require('joi');

const addContactSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.string().min(7).required(),
  });

const updateContactSchema = Joi.object().keys({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.bool(),
}).min(1);

  module.exports = {
    addContactSchema,
    updateContactSchema,
  }