import React from "react";
import { withRouter } from "react-router-dom";
import UserHeader from "./UserHeader";

class UserProfile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: null,
      searchedUser: null
    };
  }
  fetchUser = username => {
    fetch(`http://localhost:3000/api/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        } else return response.json();
      })
      .then(searchedUser => {
        if (!searchedUser) throw new Error("User Not Found!");
        this.setState({ searchedUser });
      })
      .catch(err => console.error(err));
  };
  componentDidMount() {
    let {
      match: {
        params: { username }
      }
    } = this.props;
    if (!localStorage.authToken) {
      this.fetchUser(username);
    } else {
      fetch("http://localhost:3000/api/user/", {
        headers: {
          authorization: JSON.parse(localStorage.authToken)
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          } else return response.json();
        })
        .then(user => {
          user.sameUser = user.username === username ? true : false;
          this.setState({ user });
          this.fetchUser(username);
        })
        .catch(err => console.error(err));
    }
  }
  render() {
    return (
      <div className='container'>
        {this.state.searchedUser && <UserHeader userData={this.state} />}
      </div>
    );
  }
}

export default withRouter(UserProfile);
