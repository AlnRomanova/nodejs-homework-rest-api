const express = require("express");

const contactsController = require("../../controllers/contacts");
const { controllerExceptionWrapper } = require("../../helpers");
const {addContactSchema, updateContactSchema} = require("../../helpers/schemas");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get(
  "/", 
 controllerExceptionWrapper(contactsController.listContacts));

router.get(
  "/:contactId",
  controllerExceptionWrapper(contactsController.getById)
);

router.post(
  "/",
  validateBody(addContactSchema),
  controllerExceptionWrapper(contactsController.add)
);

router.delete(
  "/:contactId",
  controllerExceptionWrapper(contactsController.remove)
);

router.put(
  "/:contactId",
  validateBody(updateContactSchema),
  controllerExceptionWrapper(contactsController.update)
);

module.exports = router;
