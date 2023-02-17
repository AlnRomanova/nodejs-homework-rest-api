const { addContactSchema, updateContactSchema } = require("./add-contact-schema");
const { userLoginSchema } = require("./user-login-schema");
const { userRegisterSchema } = require("./user-register-shema");




module.exports = {
    addContactSchema,
    updateContactSchema,
    userRegisterSchema,
    userLoginSchema,
}