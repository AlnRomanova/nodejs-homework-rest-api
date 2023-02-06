const { ContactModal } = require("../../models");

const listContacts =  async (req, res, next) => {
      const result = await ContactModal.find({});
      res.json(result);
};

module.exports = {
    listContacts,
    ContactModal,
}