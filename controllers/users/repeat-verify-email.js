const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");
const { sendEmailVerificationLetter } = require("../../services/email");

const repeatVerifyEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json("Missing required field email");
    return;
  }

  const userInstance = await UserModel.findOne({ email, verify: false });
  if (!userInstance) {
    throw createHttpException(400, "Verification has already been passed");
  }

  await sendEmailVerificationLetter(email, userInstance.verificationToken);

  res.status(200).json("Verification email sent");
};

module.exports = {
  repeatVerifyEmail,
};
