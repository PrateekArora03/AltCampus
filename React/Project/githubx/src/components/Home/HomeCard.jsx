import React from "react";

export default function HomeCard(props) {
  let { icon, name } = props;
  return (
    <div className='home-card'>
      <i class={`fa fa-${icon}`}></i>
      <p>Github {name}</p>
    </div>
  );
}
