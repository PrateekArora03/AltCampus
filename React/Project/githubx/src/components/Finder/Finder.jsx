import React, { Component } from "react";

export default class Finder extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      loader: false
    };
  }
  handleChange = e => this.setState({ user: e.target.value });
  handleSubmit = e => {
    this.setState({ loader: true });
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${this.state.user}`)
      .then(res => {
        if (!res.ok) throw new Error("Network Not Ok");
        return res.json();
      })
      .then(users => this.setState({ users, loader: false }))
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div className='finder'>
        <form onSubmit={this.handleSubmit} className='SearchBox'>
          <input
            type='text'
            value={this.state.user}
            onChange={this.handleChange}
            placeholder='Search users...'
          />
          <input type='submit' value='Submit' />
        </form>
        <div className='card-box'></div>
      </div>
    );
  }
}
