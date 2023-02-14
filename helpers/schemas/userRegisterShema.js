const Joi = require('joi');

const userSchema = Joi.object({
  firstname: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  subscription: Joi.string().required(),
  password: Joi.string().min(4).max(30).required(),
});

  module.exports = {
    userSchema,
  }