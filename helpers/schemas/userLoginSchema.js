const Joi = require('joi');

const userLoginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(8).max(30).required(),
});

  module.exports = {
    userLoginSchema,
  }