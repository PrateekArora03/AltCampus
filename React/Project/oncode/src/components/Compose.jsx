import React from "react";

class Compose extends React.Component {
  state = {
    title: "",
    description: "",
    post: "",
    tags: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/articles/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.authToken)
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (!response.ok) {
          //   throw new Error(response);
          throw new Error("Network response was not ok.");
        } else return response.json();
      })
      .then(data => {
        this.props.history.push("/");
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div className='form-container sign-in-container'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Article Title'
            value={this.state.title}
            onChange={this.handleChange}
            name='title'
          />
          <input
            type='text'
            placeholder="What's this article about?"
            value={this.state.description}
            onChange={this.handleChange}
            name='description'
          />
          <textarea
            name='post'
            rows='8'
            onChange={this.handleChange}
            placeholder='Write your article (in markdown)'
            value={this.state.post}
          ></textarea>
          <input
            type='text'
            placeholder='Article Tags Seprate by comma(,)'
            value={this.state.tags}
            onChange={this.handleChange}
            name='tags'
          />
          <button className='btn' type='submit'>
            Publish Article
          </button>
        </form>
      </div>
    );
  }
}
export default Compose;
