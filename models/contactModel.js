// const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const Joi = require("joi");
const { handleErrors } = require("../helpers");

// const contactSchema = Schema(
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Set phone number for contact"],
      unique: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .required(),
  favorite: Joi.bool(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const schemas = { addSchema, updateFavoriteSchema };

// const Contact = model("contact", contactSchema);
const Contact = mongoose.model("Contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
// ++++++++++
// const mongoose = require("mongoose");
// const contactSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Set name for contact"],
//   },
//   email: {
//     type: String,
//   },
//   phone: {
//     type: String,
//   },
//   favorite: {
//     type: Boolean,
//     default: false,
//   },
// });

// const Contact = mongoose.model("Contact", contactSchema);
// module.exports = Contact;
