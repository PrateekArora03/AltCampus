var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Article = require("./models/article");

mongoose.connect(
  "mongodb://localhost/sample",
  { useNewUrlParser: true },
  err => {
    err ? console.log(err) : console.log("connect to DB");
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/article", (req, res) => {
  var data = req.body;
  console.log(data);
  Article.create(data, (err, createData) => {
    console.log(err, createData);
    res.json(createData);
  });
});

app.get("/article", (req, res, next) => {
  Article.find({}, (err, list) => {
    if (err) console.log(err);
    console.log(err, list);
    res.send(list);
  });
});

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(3000, () => console.log("Server run on PORT 3000"));
