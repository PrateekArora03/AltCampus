import React, { Component } from "react";

export default class UserProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      photo: "",
      bio: "",
      social: {
        website: "",
        twitter: "",
        instagram: "",
        github: "",
        linkedin: ""
      }
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSocial = e => {
    const newState = { ...this.state };
    newState.social[e.target.name] = e.target.value;
    this.setState(newState);
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  componentDidMount() {
    this.setState({ ...this.props.user });
  }
  render() {
    return (
      <div className='form-container sign-in-container'>
        <h1>Profile Setting</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter you Name'
            value={this.state.name}
            name='name'
            onChange={this.handleChange}
          />
          <input
            type='email'
            placeholder='Enter you E-Mail'
            value={this.state.email}
            name='email'
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Photo Url'
            value={this.state.photo}
            name='photo'
            onChange={this.handleChange}
          />
          <textarea
            placeholder='Enter your bio'
            rows='4'
            value={this.state.bio}
            name='bio'
            onChange={this.handleChange}
          ></textarea>
          <input
            type='text'
            placeholder='Enter your website url'
            name='website'
            value={this.state.social.website}
            onChange={this.handleSocial}
          />
          <input
            type='text'
            placeholder='Twitter Profile'
            name='twitter'
            value={this.state.social.twitter}
            onChange={this.handleSocial}
          />
          <input
            type='text'
            placeholder='Instagram Profile'
            name='instagram'
            value={this.state.social.instagram}
            onChange={this.handleSocial}
          />
          <input
            type='text'
            placeholder='Github Profile'
            name='github'
            value={this.state.social.github}
            onChange={this.handleSocial}
          />
          <input
            type='text'
            placeholder='Linkedin Profile'
            name='linkedin'
            value={this.state.social.linkedin}
            onChange={this.handleSocial}
          />
          <button className='btn' type='submit'>
            Update Profile
          </button>
        </form>
      </div>
    );
  }
}
