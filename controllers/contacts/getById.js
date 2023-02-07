const { createHttpException } = require("../../helpers");
const { ContactModal } = require("../../models");

const getById = async (req, res, next) => {
     const {contactId} = req.params;
     const result = await ContactModal.findById(contactId);
     if (!result) {
      throw createHttpException (404, 'Not found')
     }
     res.json(result)
   }

   module.exports = {
    getById,
   }