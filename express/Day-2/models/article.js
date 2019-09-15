var mongoose = require("mongoose");
var articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String
  },
  { timestamps: true }
);
var Article = mongoose.model("Article", articleSchema);
module.exports = Article;
