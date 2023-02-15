const express = require("express");

const contactsController = require("../../controllers/contacts");
const { controllerExceptionWrapper } = require("../../helpers");
const {addContactSchema, updateContactSchema} = require("../../helpers/schemas");
const { validateBody, updateValidateBody } = require("../../middlewares");
const { authUser } = require("../../middlewares/auth-user-middleware");

const router = express.Router();

router.get(
  "/", 
 authUser,
 controllerExceptionWrapper(contactsController.listContacts));

router.get(
  "/:contactId",
  authUser,
  controllerExceptionWrapper(contactsController.getById)
);

router.post(
  "/",
  authUser,
  validateBody(addContactSchema),
  controllerExceptionWrapper(contactsController.add)
);

router.delete(
  "/:contactId",
  authUser,
  controllerExceptionWrapper(contactsController.remove)
);

router.put(
  "/:contactId",
  authUser,
  updateValidateBody(updateContactSchema),
  controllerExceptionWrapper(contactsController.update)
);

router.patch (
  "/:contactId/favorite",
  authUser,
  updateValidateBody(updateContactSchema),
  controllerExceptionWrapper(contactsController.updateStatusContact)
)

module.exports = router;
