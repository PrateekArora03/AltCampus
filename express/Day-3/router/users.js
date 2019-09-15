const express = require("express");
const routes = express.Router();
const User = require("../models/user");

//list all the user data
routes.get("/", (req, res, next) => {
  User.find({}, (err, data) => {
    if (err) next(err);
    res.json(data);
  });
});

//get data by id
routes.get("/:id", (req, res) => {
  let userId = req.params.id;
  User.findById(userId, (err, userIdData) => {
    if (err) next(err);
    res.json(userIdData);
  });
});

//add user
routes.post("/", (req, res, next) => {
  var createUser = req.body;
  User.create(createUser, (err, createUserData) => {
    if (err) next(err);
    res.json(createUserData);
  });
});

routes.put("/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, updatedData) => {
    if (err) next(err);
    res.json(updatedData);
  });
});

routes.delete("/:id", (req, res, next) => {
  let userId = req.params.id;
  User.findByIdAndDelete(userId, (err, deleteUser) => {
    if (err) next(err);
    res.json(deleteUser);
  });
});

module.exports = routes;
