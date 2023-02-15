const { createHttpException } = require("../helpers");
const { UserModel } = require("../models");
const { verifyToken } = require("../services/jwt");

const authUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization) {
      throw createHttpException(401, "Not authorized");
    }

    const [bearer, token] = authorization.split();
    if (bearer !== "Bearer" || !token) {
      throw createHttpException(401, "Not authorized");
    }
    try {
      const { userId, sessionKey } = verifyToken(token)
      const userInstance = await UserModel.findById(userId)

      if (!userInstance) {
        throw createHttpException(401, "Not authorized")
      }

      if (userInstance.sessionKey !== sessionKey) {
        throw createHttpException(401, "Not authorized")
      }

      req.user = userInstance
    } catch (error) {
      throw createHttpException(401, "Not authorized");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authUser,
};
