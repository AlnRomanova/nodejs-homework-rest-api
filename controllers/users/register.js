const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");
const bcrypt = require('bcrypt');
const gravatar = require("gravatar");
const { nanoid } = require('nanoid');
const { sendEmailVerificationLetter } = require("../../services/email");


const register = async (req, res, next) => {
  const { email, subscription, password } = req.body;

  const userInstance = await UserModel.findOne({ email })
  if (userInstance) {
    throw createHttpException(409, "Email in use" )
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid(30);

  const newUser = await UserModel.create({
    email,
    passwordHash,
    subscription,
    avatarURL,
    verificationToken,
  })
  
  await sendEmailVerificationLetter(email, verificationToken);

  res
    .status(201)
    .json({user: {
      email: newUser.email,
      subscription: newUser.subscription,
    }});
};

module.exports = {
  register,
};
