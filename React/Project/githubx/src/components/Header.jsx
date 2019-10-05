import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <Link to='/'>
          <h1>
            <i className='fa fa-github'></i> Githubx
          </h1>
        </Link>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='finder'>Finder</Link>
          </li>
          <li>
            <Link to='battle'>Battle</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
