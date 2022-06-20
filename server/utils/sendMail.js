const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { gmail } = require("googleapis/build/src/apis/gmail");

const CLIENT_ID =
  "428581574814-4k3k7cffju68ecp7354edde8qit1areg.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REFRESH_TOKEN =
  "1//04_W6N4yxyXcTCgYIARAAGAQSNwF-L9IrLB8Py2Uxs0YQWOn4KMMCAk7mxwjtVH2hFzeRSGNqgxRDmONevApNuymwqtu09XhG6Do";
const REDIRECT_URL = "https://desvelopers.google.com/oauthplayground";

const oAuthPass = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

oAuthPass.setCredentials({ refreshToken: REFRESH_TOKEN });
const transport = nodemailer.createTransport({
  service: gmail,
  auth: {
    type: "OAuth2",
    user: "skoolkodecodelab@gmail.com",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    accessToken:
      "ya29.a0ARrdaM-45KrLPUaCDZZf_rvmOv0Rj5hJv4R4cYouKPL4v_0uff3DVAW2xWT8g3kQJdZCYMN-a802LjdgdyoCtYRkNkmfdFpYEh0vt9ya7pqsk1YaULmiCOE00LDdbxvFAcP1v60zl9wITYIzOZXB2LX3U7Pz",
  },
});

const verifiedEmail = async (email) => {
  try {
    console.log("Welcome");
    const mailOptions = {
      from: "",
      to: email,
      subject: "Just a Ydfj",
      text: "ejfnjfgrbgg",
      html: `<h3>This is it..</h3>`,
    };

    const result = transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};
module.exports = verifiedEmail;
