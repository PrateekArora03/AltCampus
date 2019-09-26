import React from "react";

export default function signup() {
  return (
    <div>
      <div className='form-container sign-in-container'>
        <h1>Sign up</h1>
        <p>You already have account?</p>
        <form action='#'>
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
