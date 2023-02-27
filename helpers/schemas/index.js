const { addContactSchema, updateContactSchema } = require("./add-contact-schema");
const { userLoginSchema } = require("./user-login-schema");
const { userRegisterSchema } = require("./user-register-shema");
const { userRepeatVerifySchema } = require("./user-repeat-verify-schema");





module.exports = {
    addContactSchema,
    updateContactSchema,
    userRegisterSchema,
    userLoginSchema,
    userRepeatVerifySchema,
}