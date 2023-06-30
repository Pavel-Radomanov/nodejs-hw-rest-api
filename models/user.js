// const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const Joi = require("joi");
const { handleErrors } = require("../helpers");

const subscription = ["starter", "pro", "business"];

// const userSchema = new Schema(
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      //   match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlendth: 6,
    },
    subscription: {
      type: String,
      enum: subscription,
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    // token: String,
    // default: "",
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleErrors);

const registerSchema = Joi.object({
  email: Joi.string()
    // .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required()
    .messages({ "any.required": "Missing field email" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "Missing field password" }),
  subscription: Joi.string(),
});

const User = mongoose.model("user", userSchema);
const schemas = { registerSchema };

module.exports = {
  User,
  schemas,
};
