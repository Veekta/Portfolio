require("./utils/db");
const express = require("express");
const port = process.env.PORT || 2030;
const app = express();
const cors = require("cors");
const verifiedEmail = require("./utils/sendMail");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SkoolKode" });
});
app.post("/view", (req, res) => {
  const { email } = req.body;
  verifiedEmail(email)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
  res.json({ message: "getting access..!" });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
