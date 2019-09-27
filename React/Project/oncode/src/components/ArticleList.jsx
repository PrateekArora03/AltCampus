import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/ArticleList.scss";

export default function ArticleList() {
  return (
    <span className='article-data-preview'>
      <Link to='#'>
        <h1>By the rivers of Babylon</h1>
      </Link>
      <p>there we sat down</p>
    </span>
  );
}
