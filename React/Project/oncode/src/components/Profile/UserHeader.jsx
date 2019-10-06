import React from "react";
import { Link } from "react-router-dom";

class UserHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      searchedUser: null,
      sameUser: null,
      following: false
    };
  }

  follow = () => {
    fetch(
      `http://localhost:3000/api/profiles/${this.state.searchedUser.username}/follow`,
      {
        method: "POST",
        headers: {
          authorization: JSON.parse(localStorage.authToken)
        }
      }
    )
      .then(response => {
        if (!response.ok) throw new Error("Network not ok");
        return response.json();
      })
      .then(user => {
        if (user.status === false) throw new Error(user.message);
        this.setState({
          searchedUser: user.followeruser,
          user: user.followingUser,
          following: true
        });
      })
      .catch(err => console.error(err));
  };
  unfollow = () => {
    fetch(
      `http://localhost:3000/api/profiles/${this.state.searchedUser.username}/follow`,
      {
        method: "DELETE",
        headers: {
          authorization: JSON.parse(localStorage.authToken)
        }
      }
    )
      .then(response => {
        if (!response.ok) throw new Error("Network not ok");
        return response.json();
      })
      .then(user => {
        if (user.status === false) throw new Error(user.message);
        this.setState({
          searchedUser: user.followeruser,
          user: user.followingUser,
          following: false
        });
      })
      .catch(err => console.error(err));
  };
  componentDidMount() {
    if (this.props.userData.user) {
      let {
        user,
        searchedUser,
        user: { sameUser }
      } = this.props.userData;
      if (!sameUser && user.following.includes(searchedUser._id)) {
        this.setState({ user, searchedUser, sameUser, following: true });
      } else {
        this.setState({ user, searchedUser, sameUser });
      }
    } else {
      let { searchedUser } = this.props.userData;
      this.setState({ searchedUser });
    }
  }
  render() {
    var { searchedUser, user, sameUser, following } = this.state;
    return (
      searchedUser && (
        <div className='user-profile-header'>
          <div className='user-profile-header-container'>
            <div className='profile-pic-wrapper'>
              <img
                src={searchedUser.photo}
                alt={`${searchedUser.username}-Profile`}
              />
            </div>
            <div className='profile-details'>
              <h1>
                <span className='profile-details-name'>
                  {searchedUser.name}
                </span>
                <span className='profile-follow-edit-button'>
                  {!localStorage.authToken ? (
                    <Link to='/login'>Follow</Link>
                  ) : sameUser ? (
                    <Link to='/account/edit'>EDIT PROFILE</Link>
                  ) : (
                    <Link onClick={!following ? this.follow : this.unfollow}>
                      {!following ? "UNFOLLOW" : "FOLLOW"}
                    </Link>
                  )}
                </span>
              </h1>
              <p className='profile-bio'>{searchedUser.bio}</p>
              <p className='social'>
                {/* <a href='http://' target='_blank' rel='noopener'>
                <i className='fa fa-github'></i>hh
              </a> */}
              </p>
            </div>
          </div>
        </div>
      )
    );
  }
}
export default UserHeader;
