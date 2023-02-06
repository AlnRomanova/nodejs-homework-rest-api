const { ContactModal } = require("./listContacts");

const update = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const result = await ContactModal.findByIdAndUpdate(
    contactId,
    { name, email, phone },
    { new: true }
  );
  res.json(result);
};

module.exports = {
  update,
  ContactModal,
};
