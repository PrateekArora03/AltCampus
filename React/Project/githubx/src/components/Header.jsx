import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <Link to='/'>
          <h1>
            <i className='fa fa-github'></i> GitHubX
          </h1>
        </Link>
        <ul>
          <li>
            <NavLink exact activeClassName='active-nav' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active-nav' to='finder'>
              Finder
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active-nav' to='battle'>
              Battle
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
