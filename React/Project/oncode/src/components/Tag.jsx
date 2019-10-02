import React from "react";
import { Link } from "react-router-dom";

export default function Tag(props) {
  let { tag } = props;
  return (
    <Link className='tag' to={props}>
      {tag.name}
    </Link>
  );
}
