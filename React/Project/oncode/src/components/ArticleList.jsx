import React from "react";
import { Link } from "react-router-dom";

export default function ArticleList(props) {
  let { title, description, slug } = props.article;
  return (
    <span className='article-data-preview'>
      <Link to={`article/${slug}`}>
        <h1>{title}</h1>
      </Link>
      <p>{description}</p>
    </span>
  );
}
