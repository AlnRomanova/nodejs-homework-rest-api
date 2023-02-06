const { ContactModal } = require("./listContacts");

const add = async (req, res, next) => {
      const result = await ContactModal.create(req.body);
      res.status(201).json(result)
  }

  module.exports = {
    add,
    ContactModal,
  }
