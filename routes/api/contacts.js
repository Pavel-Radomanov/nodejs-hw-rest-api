const express = require("express");
const ctrl = require("../../controllers/contacts");
// const Joi = require("joi");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const { validationContact, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contactModel");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post(
  "/",
  validationContact(schemas.addSchema),
  ctrlWrapper(ctrl.addPost)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.deleteById));

router.put(
  "/:contactId",
  validationContact(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch("/:contactId/favorite", ctrlWrapper(ctrl.updateFavorite));

module.exports = router;

// const contacts = require("../../models/contacts");
// const HttpError = require("../../helpers/HttpError");
// const HttpError = require("../../helpers");
// const addSchema = require("../../schemas");
// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string()
//     .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
//     .required(),
// });
