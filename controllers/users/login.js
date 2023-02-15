const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");
const bcrypt = require('bcrypt');
const { createAccessToken } = require("../../services/jwt");
const crypto = require('crypto')


const login = async (req, res, next) => {
    const { email, password } = req.body;
    const userInstance= await UserModel.findOne({ email }); 

  if (userInstance === null) {
    throw createHttpException(401, "Email or password is wrong");
  }
 const isValidPassword = await bcrypt.compare(password, userInstance.passwordHash)
 if (!isValidPassword) {
    throw createHttpException(401, "Email or password is wrong");
 }

 const sessionKey = crypto.randomUUID()

 await UserModel.findOneAndUpdate({userId: userInstance._id.toString() }, { sessionKey }, { runValidators: true })
 const token = createAccessToken({userId: userInstance._id.toString()}, sessionKey)

  res.json({token, user: {
    email: userInstance.email,
    subscription: userInstance.subscription
  } });
};

module.exports = {
  login,
};
