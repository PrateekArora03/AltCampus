var express = require("express");
var app = express();
//path join
var path = require("path");
//import cookie parser
var cook = require("cookie-parser");
//middleware
//set cookie
app.use(cook());
//to convert data into json
app.use(express.json());
//to convert the urlencoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log("1");
  next();
});

app.post("/", (req, res) => {
  console.log(req);
  res.send(req.body);
});
app.get("/", (req, res) => {
  res.cookie("name", "px");
  res.sendFile(__dirname + "/" + req.url);
});

app.use((req, res, next) => {
  res.send("page not found");
});

app.listen(3000, () => console.log("server is running on port 3000"));
