const express = require("express");
const routes = express.Router();
const User = require("../models/user");

// send user data
routes.get("/", (req, res, next) => {
  User.find({}, (err, allUser) => {
    res.render("index", { allUser });
  });
});

//Add User form
routes.get("/new", (req, res) => {
  res.render("adduser");
});

routes.post("/users", (req, res, next) => {
  User.create(req.body, (err, newUser) => {
    if (err) next(err);
    console.log("added");
    res.redirect("/users");
  });
});

//Update user
//find user send data to update form
routes.get("/:id/edit", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, userData) => {
    res.render("updateuser", { userData });
  });
});
//update user data
routes.post("/:id/update", (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) next(err);
      res.redirect("/users");
    }
  );
});

//Delete User
routes.get("/:id/delete", (req, res, next) => {
  User.findByIdAndRemove(req.params.id, (err, userDelete) => {
    if (err) next(err);
    res.redirect("/users");
  });
});

//Grab Single User
routes.get("/:id", (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, userData) => {
    res.render("user", { userData });
  });
});

module.exports = routes;
