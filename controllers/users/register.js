const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");
const bcrypt = require('bcrypt');
const gravatar = require("gravatar");

const register = async (req, res, next) => {
  const { email, subscription, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);
  const userInstance = await UserModel.create({
    email,
    passwordHash,
    subscription,
    avatarURL,
  }).catch(() => {
     throw createHttpException(409, "Email in use");
  });
  
  res
    .status(201)
    .json({user: {
      email: userInstance.email,
      subscription: userInstance.subscription,
    }});
};

module.exports = {
  register,
};
