var mongoose = require("mongoose");
var userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);
var User = mongoose.model("User", userSchema);
module.exports = User;
