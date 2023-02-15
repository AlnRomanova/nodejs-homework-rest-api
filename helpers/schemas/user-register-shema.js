const Joi = require('joi');

const userRegisterSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  subscription: Joi.string().valid('starter', 'pro', 'business'),
  password: Joi.string().min(8).max(30).required(),
});

  module.exports = {
    userRegisterSchema,
  }