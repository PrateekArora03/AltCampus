import React from "react";
import { Link } from "react-router-dom";

export default function UserHeader(props) {
  return (
    <div className='user-profile-header'>
      <div className='user-profile-header-container'>
        <div className='profile-pic-wrapper'>
          <img src='' alt='' />
        </div>
        <div className='profile-details'>
          <h1>
            <span className='profile-details-name'></span>
            <span className='profile-follow--edit-button'>
              <Link></Link>
            </span>
          </h1>
          <p className='profile-description'></p>
          <p className='social'>
            <a href='http://' target='_blank' rel='noopener'>
              <i className='fab fa-github'></i>hh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
