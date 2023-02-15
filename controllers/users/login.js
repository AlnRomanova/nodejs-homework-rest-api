const { createHttpException } = require("../../helpers");
const { UserModal } = require("../../models");
const bcrypt = require('bcrypt');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const userInstanceOrNull = await UserModal.findOne({ email }); 

  if (userInstanceOrNull === null) {
    throw createHttpException(401, "Email or password is wrong");
  }
 const isValidPassword = bcrypt.compare(password, userInstanceOrNull.passwordHash)
 if (!isValidPassword) {
    throw createHttpException(401, "Email or password is wrong");
 }
 const token = 'aetuyigjfch'

  res.json({token, user: {
    email: userInstanceOrNull.email,
    subscription: userInstanceOrNull.subscription
  } });
};

module.exports = {
  login,
};
