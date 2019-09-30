import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/ArticleList.scss";

export default function ArticleList(props) {
  let { title, post } = props.article;
  return (
    <span className='article-data-preview'>
      <Link to='#'>
        <h1>{title}</h1>
      </Link>
      <p>{post}</p>
    </span>
  );
}
