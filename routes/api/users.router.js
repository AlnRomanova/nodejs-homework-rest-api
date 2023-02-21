const express = require("express");
const userController = require("../../controllers/users");
const { upload } = require("../../controllers/users/update-user-avatar");
const { controllerExceptionWrapper } = require("../../helpers");
const { userRegisterSchema, userLoginSchema } = require("../../helpers/schemas");


const { validateBody } = require("../../middlewares");
const { authUser } = require("../../middlewares/auth-user-middleware");

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
router.post(
  "/logout",
  authUser,
  controllerExceptionWrapper(userController.logout)
);
router.get(
  "/current",
  authUser,
  controllerExceptionWrapper(userController.currentUser)
);

router.patch(
  "/avatars",
  authUser,
  upload.single("avatar"),
  controllerExceptionWrapper(userController.updateUserAvatar)
);

module.exports = router;
