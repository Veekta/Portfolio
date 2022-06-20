const mongoose = require("mongoose");
const url =
  "mongodb+srv://Veekta:onyeka17$@cluster0.vkqi4.mongodb.net/AuthenticationData?";
mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = mongoose;
