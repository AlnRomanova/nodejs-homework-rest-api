const { createHttpException } = require("../../helpers");
const { UserModal } = require("../../models");

const register = async (req, res, next) => {
  const { firstname, email, subscription, password } = req.body;

  const userModelorNull = await UserModal.findOne({ email });
  if (userModelorNull) {
    throw createHttpException(409, "Email in use");
  }
  const userModal = await UserModal.create({
    firstname,
    email,
    password,
    subscription,
  });
  res
    .status(201)
    .json({
      firstname: userModal.firstname,
      email: userModal.email,
      subscription: userModal.subscription,
    });
};

module.exports = {
  register,
};
