const { User } = require("../../models/user");
// const { HttpError, sendEmail } = require("../../helpers");
// const { sendEmail } = require("../../helpers");
const { sendEmailSG } = require("../../helpers");

const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { v4 } = require("uuid");
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  // const user = await User.findOne({ email });
  // if (user) {
  //   throw HttpError(409, "Email in use");
  // }
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  // const avatarURL = gravatar.url(email);
  const avatarURL = `https:${gravatar.url(email)}.jpg?d=robohash`;

  const verificationToken = v4();
  console.log(avatarURL);
  // const newUser = await User.create({...req.body, password: hashPassword, avatarURL});
  const newUser = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
    verificationToken,
  });
  console.log(password);
  // res.status(201, "Created").json({
  //   email: newUser.email,
  //   subscription: newUser.subscription,
  // });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a
        target="_blanc"
        href="${BASE_URL}/users/verify/${verificationToken}"
      >
        Click for verify email
      </a>`,
  };

  // await sendEmail(verifyEmail);
  await sendEmailSG(verifyEmail);

  return res.status(201, "Created").json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = register;
