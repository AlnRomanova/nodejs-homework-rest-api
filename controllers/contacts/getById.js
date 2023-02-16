const { createHttpException } = require("../../helpers");
const { ContactModel } = require("../../models");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;

  try {
    const result = await ContactModel.findOne({ _id: contactId, owner: _id });
    if (!result) {
      throw createHttpException(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    throw createHttpException(404, "Not found");
  }
};

module.exports = {
  getById,
};
