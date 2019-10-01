import React from "react";
import { withRouter as Router } from "react-router-dom";
import UserHeader from "./Profile/UserHeader";

function UserProfile(props) {
  let { user } = props;
  console.log(props.match.params.username, user);
  return <UserHeader />;
}

export default Router(UserProfile);
