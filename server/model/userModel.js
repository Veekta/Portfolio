const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userModel);
