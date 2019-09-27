import React from "react";
import { Link } from "react-router-dom";
export default function signup() {
  return (
    <div>
      <div className='form-container sign-in-container'>
        <h1>Sign up</h1>
        <Link to='/login'>You already have account?</Link>
        <form action='#'>
          <input type='text' name='text' placeholder='Username' />
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
