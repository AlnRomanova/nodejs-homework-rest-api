const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, MAIL_SENDER_EMAIL } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmailVerificationLetter = async (email, verificationToken) => {
  const msg = {
    to: email,
    from: MAIL_SENDER_EMAIL,
    subject: "Verify your email",
    text: "and easy to do anywhere, even with Node.js",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}"> Confirm </a>`,
  };
  await sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  sendEmailVerificationLetter,
};
