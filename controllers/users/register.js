const { createHttpException } = require("../../helpers");
const { UserModal } = require("../../models");
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
  const { email, subscription, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10)
  const userModal = await UserModal.create({
    email,
    passwordHash,
    subscription,
  }).catch(() => {
     throw createHttpException(409, "Email in use");
  });


  res
    .status(201)
    .json({user: {
      email: userModal.email,
      subscription: userModal.subscription,
    }});
};

module.exports = {
  register,
};
