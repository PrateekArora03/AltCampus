var express = require("express");
var router = express.Router();
var Article = require("../models/article");
var Comment = require("../models/comment");

// comment

router.get("/:commentId/delete", (req, res, next) => {
  Comment.findByIdAndDelete(req.params.commentId, (err, data) => {
    if (err) return next(err);
    res.redirect(`/blog/${data.articleId}`);
  });
});

router.get("/:commentId/update", (req, res, next) => {
  Comment.findById(req.params.commentId, (err, data) => {
    res.render("updatecomment", { data });
  });
});

router.post("/:commentId/update", (req, res, next) => {
  Comment.findOneAndUpdate(
    req.params.commentId,
    req.body,
    { new: true },
    (err, data) => {
      if (err) return next(err);
      res.redirect(`/blog/${data.articleId}`);
    }
  );
});

router.post("/:articleId", (req, res, next) => {
  req.body.articleId = req.params.articleId;
  console.log(req.body);
  Comment.create(req.body, (err, data) => {
    if (err) next(err);
    Article.findByIdAndUpdate(
      req.body.articleId,
      {
        $push: { comments: data.id }
      },
      (err, data) => {
        res.redirect(`/blog/${req.body.articleId}`);
      }
    );
  });
});
module.exports = router;
