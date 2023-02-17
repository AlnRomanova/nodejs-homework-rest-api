const { createHttpException } = require("../../helpers");
const { ContactModel } = require("../../models");

const update = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const {_id} = req.user;

  const result = await ContactModel.findOneAndUpdate(
    { _id: contactId, owner: _id },
    { name, email, phone },
    { new: true }
  );
  if (!result) {
    throw createHttpException (404, 'Not found');
   }
  res.json(result);
};

module.exports = {
  update,
};
