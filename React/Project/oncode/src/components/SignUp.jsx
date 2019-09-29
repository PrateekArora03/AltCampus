import React from "react";
import { Link } from "react-router-dom";
class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div className='form-container sign-in-container'>
          <h1>Sign up</h1>
          <Link to='/login'>You already have account?</Link>
          <form action='#'>
            <input
              type='text'
              name='username'
              onChange={this.handleChange}
              placeholder='Username'
            />
            <input
              type='email'
              name='email'
              onChange={this.handleChange}
              placeholder='Email'
            />
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
              placeholder='Password'
            />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
