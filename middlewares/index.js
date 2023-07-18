const validationContact = require("./validationContact");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const validation = require("./validation");
const upload = require("./upload");
const errorHandler = require("./errorHandler");

module.exports = {
  validationContact,
  validation,
  isValidId,
  authenticate,
  upload,
  errorHandler,
};
