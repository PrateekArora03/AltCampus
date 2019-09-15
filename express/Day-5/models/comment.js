const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  articleId: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  }
  // author: String
});
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
