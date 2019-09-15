var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});
module.exports = mongoose.model("User", userSchema);
