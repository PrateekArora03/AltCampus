import React from "react";
import ArticleAuthorInfo from "./ArticleAuthorInfo";
import ArticleList from "./ArticleList";
import PopularTags from "./PopularTags";
import HeroSection from "./HeroSection";
import Loader from "./Loader";
import "../stylesheets/Feed.scss";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      loader: true
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/")
      .then(data => data.json())
      .then(articles => this.setState({ articles, loader: false }))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <>
        <HeroSection />
        <div className='container home-data'>
          <div className='article-container'>
            {this.state.articles ? (
              this.state.articles.map(article => (
                <div key={article._id} className='article-preview'>
                  <ArticleAuthorInfo user={article} />
                  <ArticleList article={article} />
                </div>
              ))
            ) : (
              <Loader />
            )}
          </div>
          <PopularTags />
        </div>
      </>
    );
  }
}
export default Feed;
