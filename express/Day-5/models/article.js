const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articlesSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    // author: { type: String, required: true },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  },
  { timestamp: true }
);
const Article = mongoose.model("Article", articlesSchema);
module.exports = Article;
