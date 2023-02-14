const express = require("express");
const userController = require('../../controllers/users');
const { controllerExceptionWrapper } = require("../../helpers");
const { userSchema } = require("../../helpers/schemas/userRegisterShema");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.post('/register', validateBody(userSchema), controllerExceptionWrapper(userController.register))

module.exports = router;
