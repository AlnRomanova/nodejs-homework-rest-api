const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;


const login = async (req, res, next) => {
    const { email, password } = req.body;
    const userInstance= await UserModel.findOne({ email }); 

  if (userInstance === null) {
    throw createHttpException(401, "Email or password is wrong");
  }
 const isValidPassword = bcrypt.compare(password, userInstance.passwordHash)
 if (!isValidPassword) {
    throw createHttpException(401, "Email or password is wrong");
 }
 const token = jwt.sign({userId: userInstance._id.toString()}, JWT_SECRET)

  res.json({token, user: {
    email: userInstance.email,
    subscription: userInstance.subscription
  } });
};

module.exports = {
  login,
};
