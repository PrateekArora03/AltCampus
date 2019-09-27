import React from "react";
import "../stylesheets/Author.scss";
import { Link } from "react-router-dom";

export default function ArticleAuthorInfo() {
  return (
    <div className='article-author-info'>
      <img
        className='article-author-img'
        src='https://static.productionready.io/images/smiley-cyrus.jpg'
        alt='authorImage'
      />
      <div className='article-author-data'>
        <Link className='article-author-name' to='#'>
          sunny
        </Link>
        <span className='article-published-data'>Fri Sep 27 2019</span>
      </div>
    </div>
  );
}
