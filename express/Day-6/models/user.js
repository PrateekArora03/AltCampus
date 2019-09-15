const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
