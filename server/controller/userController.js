const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const transport = nodemailer.createTransport({
  service: "gmail",
});
const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      fullName,
      email,
      password: hashed,
      verifyToken: token,
    });
    const getToken = crypto.randomBytes(32).toString("hex");
    const token = jwt.sign({ getToken }, "ThisIsIt", { expiresIn: "3d" });
    const mailOptions = {
      from: "",
      to: email,
      subject: "account opening",
      html: `<a href="http: //localhost: 2070/api/user/${token}"> This is for account opening</a>`,
    };
    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("mail sent", info);
      }
    });
    res.status(200).json({
      message: "check your mail",
    });
  } catch (error) {}
};
