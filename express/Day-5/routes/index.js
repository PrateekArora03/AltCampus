var express = require("express");
var router = express.Router();
var Article = require("../models/article");
var User = require("../models/user");
var Comment = require("../models/comment");
/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("hello in");
  Article.find({}, (err, allPost) => {
    console.log("in index");
    if (err) return next(err);
    res.render("index", { allPost });
  });
});

router.get("/blog/:articleId", (req, res, next) => {
  Article.findById(req.params.articleId)
    .populate("comments")
    .exec((err, data) => {
      if (err) return next(err);
      res.render("blog", { data });
    });
});
//Add New Post
router.get("/create", (req, res, next) => {
  res.render("addpost");
});

//recive new post data
router.post("/newPostData", (req, res, next) => {
  Article.create(req.body, (err, newPost) => {
    if (err) next(err);
    res.redirect("/");
  });
});

//Delete BLog
router.get("/blog/:articleId/delete", (req, res, next) => {
  Article.findByIdAndDelete(req.params.articleId, (err, data) => {
    if (err) next(err);
    Comment.deleteMany({ articleId: req.params.articleId }, err => {
      if (err) next(err);
      res.redirect("/");
    });
  });
});

//updateblog
router.get("/blog/:articleId/update", (req, res, next) => {
  Article.findById(req.params.articleId, (err, data) => {
    if (err) next(err);
    res.render("updatepost", { data });
  });
});

router.post("/blog/:id/updatepost", (req, res, next) => {
  Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      if (err) next(err);
      res.redirect(`/blog/${req.params.id}`);
    }
  );
});

module.exports = router;
