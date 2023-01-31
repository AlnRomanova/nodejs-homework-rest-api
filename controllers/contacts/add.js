const contactsRepository = require("../../models/contacts");

const add = async (req, res, next) => {
  
      const result = await contactsRepository.addContact(req.body);
      res.status(201).json(result)
  }

  module.exports = {
    add,
  }
