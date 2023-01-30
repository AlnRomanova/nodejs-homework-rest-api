const shortid = require("shortid");
const fsp = require("fs/promises");
const path = require("path");

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
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  return contact;
};

const removeContact = async (contactId) => {
 
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      const error = new Error("Not found");
    error.status = 404;
    throw error;
    }
    contacts.splice(index, 1);
    await updateContactsList(contacts);
    return contacts;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    id: shortid.generate(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updateContactsList(contacts);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  contacts[index] = {contactId, ...body};
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
