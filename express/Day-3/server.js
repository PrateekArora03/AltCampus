var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/users",
  { useNewUrlParser: true },
  err => {
    err ? console.log(err) : console.log("connect to DB");
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", require("./router/users"));

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(3001, () => console.log("Server run on PORT 3000"));
