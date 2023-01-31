const contactsRepository = require("../../models/contacts");

const remove = async (req, res, next) => {
      const {contactId} = req.params;
      await contactsRepository.removeContact(contactId);
      res.send({"message": "contact deleted"})
  }

  module.exports = {
    remove,
  }