const { createHttpException } = require("../../helpers");
const { ContactModel } = require("../../models");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id } = req.user;

  const result = await ContactModel.findOneAndUpdate(
    { _id: contactId, owner: _id },
    { favorite },
    { new: true }
  );
  if (!result) {
    throw createHttpException(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  updateStatusContact,
};
