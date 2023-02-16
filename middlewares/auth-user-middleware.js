const { createHttpException } = require("../helpers");
const { UserModel } = require("../models");
const jwt = require('jsonwebtoken')

const authUser = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(" ");
    if (!token || bearer !== "Bearer" ) {
      next(createHttpException(401, "Not authorized"));
    }

      const SECRET = process.env.JWT_SECRET
      const decodedToken = jwt.decode(token, SECRET)

      const userInstance = await UserModel.findById(decodedToken._id)

      console.log(userInstance)

      if (!userInstance || !userInstance.token) {
        throw createHttpException(401, "Not authorized")
      }

      req.token = token;
      req.user = userInstance;
      next();

    } catch (error) {
      next(createHttpException(401, "Not authorized"));
    }
};

module.exports = {
  authUser,
};
