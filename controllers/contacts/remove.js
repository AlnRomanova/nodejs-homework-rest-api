const { ContactModal } = require("./listContacts");

const remove = async (req, res, next) => {
      const {contactId} = req.params;
      await ContactModal.findByIdAndDelete(contactId);
      res.send({"message": "contact deleted"})
  }

  module.exports = {
    remove,
    ContactModal,
  }