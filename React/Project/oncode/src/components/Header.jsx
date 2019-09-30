import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.scss";

export default function Header(props) {
  return (
    <header className='container'>
      <nav className='navbar'>
        <Link className='nav navbar-brand titillium-font' to='/'>
          onCode
        </Link>
        <ul className='nav navbar-list'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          {!props.user ? (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/compose'>
                  New Post
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/account/edit'>
                  Settings
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={`/@${props.user.username}`}>
                  {props.user.username}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
