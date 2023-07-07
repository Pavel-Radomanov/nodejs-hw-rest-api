const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  // const avatarURL = gravatar.url(email);
  const avatarURL = `https:${gravatar.url(email)}.jpg?d=retro`;
  console.log(avatarURL);
  // const newUser = await User.create({...req.body, password: hashPassword, avatarURL});
  const newUser = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
  });
  console.log(password);
  res.status(201, "Created").json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = register;
