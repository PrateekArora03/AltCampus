import React from "react";
import ArticleAuthorInfo from "./ArticleAuthorInfo";
import ArticleList from "./ArticleList";
import PopularTags from "./PopularTags";
import "../stylesheets/Feed.scss";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/")
      .then(data => data.json())
      .then(articles => this.setState({ articles }));
  }
  render() {
    console.log(this.state.articles);
    return (
      <div className='container home-data'>
        <div className='article-preview'>
          <ArticleAuthorInfo />
          <ArticleList />
        </div>
        <PopularTags />
      </div>
    );
  }
}
export default Feed;
