import React from "react";
import ArticleAuthorInfo from "./ArticleAuthorInfo";
import ArticleList from "./ArticleList";
import "../stylesheets/Feed.scss";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className='container'>
        <div className='article-preview'>
          <ArticleAuthorInfo />
          <ArticleList />
        </div>
      </div>
    );
  }
}
export default Feed;
