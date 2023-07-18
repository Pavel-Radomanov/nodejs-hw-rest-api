const { User } = require("../../models/user");
// const { HttpError, sendEmail } = require("../../helpers");
const { HttpError, sendEmailSG } = require("../../helpers");

const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(400, "Email not found");
  }
  if (user.verify === true) {
    throw HttpError(400, "Verification has already been passed");
  }
  const createVerifyEmail = (email, verificationToken) => {
    const mail = {
      to: email,
      subject: "Email verification",
      html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Press to confirm</a>`,
    };
    return mail;
  };
  const mail = createVerifyEmail(email, user.verificationToken);

  // await sendEmail(mail);
  await sendEmailSG(mail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerify;
