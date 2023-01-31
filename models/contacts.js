const shortid = require("shortid");
const fsp = require("fs/promises");
const path = require("path");
const { createHttpException } = require("../helpers");

const contactsPath = path.join(__dirname, "../models/contacts.json");

const updateContactsList = async (contacts) =>
  await fsp.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  try {
    const contacts = await fsp.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    throw createHttpException(404, "Not found");
  }
  return contact;
};

const removeContact = async (contactId) => {
 
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      throw createHttpException(404, "Not found");
    }
    contacts.splice(index, 1);
    await updateContactsList(contacts);
    return contacts;
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = {
    id: shortid.generate(),
   ...body
  };

  contacts.push(newContact);
  await updateContactsList(contacts);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(({id}) => id === contactId);
  if (index === -1) {
    throw createHttpException(404, "Not found");
  }
  contacts[index] = {id: contactId, ...body};
  await updateContactsList(contacts);
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
