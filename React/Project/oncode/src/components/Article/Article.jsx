import React, { Component } from "react";
import Banner from "./Banner";

export default class article extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    fetch(`http://localhost:3000/api/articles/${this.props.match.params.slug}`)
      .then(res => {
        if (!res.ok) throw new Error("Network not okay");
        return res.json();
      })
      .then(post => {
        if (post.status > 400) throw new Error(post.err);
        this.setState({ post });
        console.log(post);
      })
      .catch(err => console.error(err));
  }
  render() {
    return <div>{this.state.post && <Banner post={this.state.post} />}</div>;
  }
}
