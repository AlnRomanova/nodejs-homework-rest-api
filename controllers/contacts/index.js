const { add } = require("./add")
const { getById } = require("./getById")
const { listContacts } = require("./listContacts")
const { remove } = require("./remove")
const { update } = require("./update")
const { updateStatusContact } = require("./updateStatusContact")


module.exports = {
    listContacts,
    getById,
    add,
    remove,
    update,
    updateStatusContact,
}