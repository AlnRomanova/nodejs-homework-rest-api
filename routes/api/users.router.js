const express = require("express");
const userController = require("../../controllers/users");
const { controllerExceptionWrapper } = require("../../helpers");
const { userRegisterSchema, userLoginSchema } = require("../../helpers/schemas");

const { validateBody } = require("../../middlewares");

const router = express.Router();

router.post(
  "/register",
  validateBody(userRegisterSchema),
  controllerExceptionWrapper(userController.register)
);
router.post(
  "/login",
  validateBody(userLoginSchema),
  controllerExceptionWrapper(userController.login)
);

module.exports = router;
