import React from "react";
import "../stylesheets/ArticleAuthorInfo.scss";
import { Link } from "react-router-dom";

export default function ArticleAuthorInfo(props) {
  return (
    <div className='article-author-info'>
      <img
        className='article-author-img'
        src='https://static.productionready.io/images/smiley-cyrus.jpg'
        alt='authorImage'
      />
      <div className='article-author-data'>
        <Link className='article-author-name' to='#'>
          {props.user.userid.username}
        </Link>
        <span className='article-published-data'>{props.user.createdAt}</span>
      </div>
    </div>
  );
}
