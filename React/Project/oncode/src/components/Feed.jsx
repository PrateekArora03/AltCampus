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
    return (
      <div className='container home-data'>
        <div className='article-container'>
          {this.state.articles &&
            this.state.articles.map(article => (
              <div key={article._id} className='article-preview'>
                <ArticleAuthorInfo user={article} />
                <ArticleList article={article} />
              </div>
            ))}
        </div>
        <PopularTags />
      </div>
    );
  }
}
export default Feed;
