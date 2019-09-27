import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/FormUser.scss";
export default function Login() {
  return (
    <div className='form-container sign-in-container'>
      <h1>Sign in</h1>
      <Link to='/signup'>Need an account?</Link>
      <form action='#'>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button className='btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}
