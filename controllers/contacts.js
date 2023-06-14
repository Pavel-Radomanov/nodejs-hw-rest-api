const HttpError = require("../helpers");
const addSchema = require("../schemas");
const contacts = require("../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const result = await contacts.listContacts();

    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
};

const getById = async (req, res, next) => {
  console.log(req.params);
  try {
    const { contactId } = req.params;
    console.log(contactId);
    const result = await contacts.getContactById(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
      // throw HttpError(404, `Contact with id=${id} not found`);
      // return res.status(404).json({ message: "Not found" });
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
};
const addPost = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    console.log(error);
    console.log(req.body);
    if (error) {
      res.status(400).json({ message: "Missing required name field" });
      throw HttpError(400, error.message);
    }

    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
const deleteById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    throw HttpError(200, "Contact deleted");
    // res.status(200).json({ message: "Contact deleted" });
    // res.status(204).send();
  } catch (error) {
    next(error);
  }
};
const updateById = async (req, res, next) => {
  console.log(req.body);
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      // throw HttpError(400, error.message);
      res.status(400).json({ message: "Missing fields" });
    }
    const { contactId } = req.params;
    console.log(contactId);
    const result = await contacts.updateContact(contactId, req.body);

    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  addPost,
  deleteById,
  updateById,
};
