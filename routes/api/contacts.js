const express = require("express");
const contactsRepository = require("../../models/contacts");

const Joi = require('joi');
const { createHttpException } = require("../../helpers");

const addContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().min(7).required(),
});


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
    const {error} = addContactSchema.validate(req.body)
    if(error) {
      throw createHttpException(404, error.message)
    }
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
