const express = require("express");
const contactsRepository = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contactsRepository.listContacts();
    res.json(result);
  } catch (error) {
    next(error)
  }
});

router.get("/:contactId", async (req, res, next) => {
 try {
  const {contactId} = req.params;
  const result = await contactsRepository.getContactById(contactId);
  res.json(result)
 } catch (error) {
   next(error)
 }
});

router.post("/", async (req, res, next) => {
  try {
    const {name, email, phone} = req.body;
    const result = await contactsRepository.addContact({name, email, phone});
    res.json(result)
  }catch(error) {
    next(error)
  }
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
