import React from "react";
import "../stylesheets/Header.scss";

export default function Header() {
  return (
    <header className='container'>
      <nav className='navbar'>
        <a className='nav navbar-brand' href='#/'>
          onCode
        </a>
        <ul className='nav navbar-list'>
          <li className='nav-item'>
            <a className='nav-link' href='#/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#/'>
              Sign in
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#/'>
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
