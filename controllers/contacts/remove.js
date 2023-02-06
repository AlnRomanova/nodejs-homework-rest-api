const { createHttpException } = require("../../helpers");
const { ContactModal } = require("../../models");

const remove = async (req, res, next) => {
      const {contactId} = req.params;
      const result = await ContactModal.findByIdAndDelete(contactId);

      if(!result) {
        throw createHttpException (404, 'Not found');
      }
      res.send({"message": "contact deleted"})

  }

  module.exports = {
    remove,
  }