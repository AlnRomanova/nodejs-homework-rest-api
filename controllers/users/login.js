const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const userInstance= await UserModel.findOne({ email }); 

 if(!userInstance.verify) {
  throw createHttpException(401, "Email is not verified");
 }

 if (userInstance === null) {
    throw createHttpException(401, "Email or password is wrong");
  }
 const isValidPassword = await bcrypt.compare(password, userInstance.passwordHash)
 if (!isValidPassword) {
    throw createHttpException(401, "Email or password is wrong");
 }

 const payload = {
  _id: userInstance._id.toString(),
  username: userInstance.email,
};

const token = jwt.sign(payload, process.env.JWT_SECRET)
console.log(token)

 await UserModel.findOneAndUpdate(userInstance._id.toString(), {token})
 

  res.json({token, user: {
    email: userInstance.email,
    subscription: userInstance.subscription
  } });
};

module.exports = {
  login,
};
