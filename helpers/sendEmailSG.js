const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, SENDGRID_FROM } = process.env;
console.log(SENDGRID_API_KEY);
console.log(SENDGRID_FROM);

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmailSG = async (data) => {
  const mail = { ...data, from: SENDGRID_FROM };
  //   await sgMail.send(mail);
  //   return true;
  sgMail
    .send(mail)
    .then(() => console.log("Email sent successfully"))
    .catch((error) => console.log(error));
};

module.exports = sendEmailSG;
