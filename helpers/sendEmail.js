const nodemailer = require("nodemailer");
const { META_PASSWORD } = process.env;
require("dotenv").config();
console.log(META_PASSWORD);

const nodemailerConfig = {
  // host: "smtp.meta.ua",
  // port: 465,
  // secure: true,
  // auth: {
  //   user: "radomanov.pavlo@meta.ua",
  //   pass: META_PASSWORD,
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "p79702660@gmail.com",
    pass: META_PASSWORD,
  },
};
const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  // const email = { ...data, from: "radomanov.pavlo@meta.ua" };
  const email = { ...data, from: "p79702660@gmail.com" };
  await transporter.sendMail(email);

  return true;
};

module.exports = sendEmail;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "radomanov.pavlo@meta.ua",
//     pass: META_PASSWORD,
//   },
// };

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
