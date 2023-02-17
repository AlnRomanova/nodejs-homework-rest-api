const { createHttpException } = require("../../helpers");
const { ContactModel } = require("../../models");

const remove = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;

  const result = await ContactModel.findOneAndDelete({
    _id: contactId,
    owner: _id,
  });

  if (!result) {
    throw createHttpException(404, "Not found");
  }
  res.send({ message: "contact deleted" });
};

module.exports = {
  remove,
};
