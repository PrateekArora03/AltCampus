var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, 6);
  next();
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
