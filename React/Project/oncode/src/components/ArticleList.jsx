import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/ArticleList.scss";

export default function ArticleList(props) {
  let { title, description, slug } = props.article;
  return (
    <span className='article-data-preview'>
      <Link to={slug}>
        <h1>{title}</h1>
      </Link>
      <p>{description}</p>
    </span>
  );
}
