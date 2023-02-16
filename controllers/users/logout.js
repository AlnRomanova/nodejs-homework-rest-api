const { UserModel } = require("../../models");

const logout = async (req, res, next) => {
  const { _id } = req.user;
  await UserModel.findByIdAndUpdate(_id, { token: null });
  res.status(204).send();
};

module.exports = {
  logout,
};
