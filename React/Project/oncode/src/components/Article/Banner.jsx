import React from "react";
import ArticleAuthorInfo from "../ArticleAuthorInfo";

export default function Banner({ post }) {
  return (
    <div className='banner'>
      <h1>{post.post}</h1>
      <ArticleAuthorInfo user={post} />
    </div>
  );
}
