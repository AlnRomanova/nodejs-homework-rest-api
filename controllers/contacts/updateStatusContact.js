const { createHttpException } = require("../../helpers");
const { ContactModal } = require("../../models");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await ContactModal.findByIdAndUpdate(
    contactId,
    { favorite},
    { new: true }
  );
  if (!result) {
    throw createHttpException (404, 'Not found');
   }
  res.json(result);
};

module.exports = {
  updateStatusContact,
};
