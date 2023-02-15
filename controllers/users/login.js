const { createHttpException } = require("../../helpers");
const { UserModal } = require("../../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;


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
 const token = jwt.sign({userId: userInstanceOrNull._id.toString()}, JWT_SECRET)

  res.json({token, user: {
    email: userInstanceOrNull.email,
    subscription: userInstanceOrNull.subscription
  } });
};

module.exports = {
  login,
};
