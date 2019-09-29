import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/FormUser.scss";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch("");
  };
  render() {
    return (
      <div className='form-container sign-in-container'>
        <h1>Sign in</h1>
        <Link to='/signup'>Need an account?</Link>
        <form onSubmit={this.handleSubmit} action='#'>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Password'
          />
          <button className='btn' type='submit'>
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
