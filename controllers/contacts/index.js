const { add } = require("./add")
const { getById } = require("./getById")
const { listContacts } = require("./listContacts")
const { remove } = require("./remove")
const { update } = require("./update")
const { updateStatusContact } = require("./update-status-contact")


module.exports = {
    listContacts,
    getById,
    add,
    remove,
    update,
    updateStatusContact,
}