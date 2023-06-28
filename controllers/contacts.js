const HttpError = require("../helpers");
// const asyncHandler = require("express-async-handler");
// const addSchema = require("../schemas");
// const contacts = require("../models/contacts");

const Contact = require("../models/contactModel");

const getAll = async (req, res, next) => {
  const result = await Contact.find();
  // const result = await Contact.find().select("-v ");
  res.json(result);
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  console.log(contactId);
  res.json(result);
};

const addPost = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json({ status: "success", code: 201, data: { result } });
};

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: { result },
  });
};

const updateById = async (req, res, next) => {
  // console.log(contactId);
  console.log(req.body);

  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

const updateFavorite = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(400, "Missing field favorite");
  }
  res.json(result);
};

module.exports = {
  getAll,
  getById,
  addPost,
  deleteById,
  updateById,
  updateFavorite,
};
