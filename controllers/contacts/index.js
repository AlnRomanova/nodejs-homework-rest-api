const { add } = require("./add")
const { getById } = require("./getById")
const { listContacts } = require("./listContacts")
const { remove } = require("./remove")
const { update } = require("./update")

module.exports = {
    listContacts,
    getById,
    add,
    remove,
    update,
}