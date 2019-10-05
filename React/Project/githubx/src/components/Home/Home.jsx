import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "./HomeCard";

export default function Home() {
  return (
    <div className='home'>
      <Link to='/finder'>
        <HomeCard name='finder' icon='search' />
      </Link>
      <Link to='/battle'>
        <HomeCard name='Battle' icon='compress' />
      </Link>
    </div>
  );
}
