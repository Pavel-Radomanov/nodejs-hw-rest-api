const nodemailer = require("nodemailer");
const { META_PASSWORD } = process.env;
require("dotenv").config();
console.log(META_PASSWORD);

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "radomanov.pavlo@meta.ua",
    pass: META_PASSWORD,
  },
};
const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "radomanov.pavlo@meta.ua" };
  await transporter.sendMail(email);

  return true;
};
console.log("smtp&");

module.exports = sendEmail;

// const email = {
//   to: "radomanov@i.ua",
//   from: "radomanov.pavlo@meta.ua",
//   subject: "test email",
//   html: "<p>Try email from localhost:3000</p>",
// };
// console.log(email);
// const sendEmail = transporter
//   .sendMail(email)
//   .then(() => console.log("Email send successfull"))
//   .catch((error) => console.log(error.message));
