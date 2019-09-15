var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect(
  "mongodb://localhost/users",
  { useNewUrlParser: true },
  err => {
    err ? console.log(err) : console.log("connect to DB");
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/users", require("./router/users"));

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen("3000", () => console.log("server running on port 3K"));
