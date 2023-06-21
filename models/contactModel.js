const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  // name: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   // unique: [true, "Duplicated email"],
  // },
  // phone: {
  //   type: String,
  //   required: true,
  //   // unique: [true, "Duplicated phone"],
  // },
  // favorite: {
  //   type: Boolean,
  //   required: true,
  //
  // },
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
