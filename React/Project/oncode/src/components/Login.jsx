import React from "react";
export default function Login() {
  return (
    <div className='form-container sign-in-container'>
      <h1>Sign in</h1>
      <p>Need an account?</p>
      <form action='#'>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
