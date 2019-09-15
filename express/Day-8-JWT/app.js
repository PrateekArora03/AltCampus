var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");

var app = express();

app.use(express.json());

app.use("/", indexRouter);
app.use("/user", userRouter);

module.exports = app;
