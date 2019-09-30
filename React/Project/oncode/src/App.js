import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Feed from "./components/Feed";
import Compose from "./components/Compose";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  loggedUserToken = userToken => {
    fetch("http://localhost:3000/api/user/", {
      headers: {
        authorization: userToken
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        } else return response.json();
      })
      .then(user => {
        localStorage.setItem("authToken", JSON.stringify(userToken));
        this.setState({ user });
      })
      .catch(err => console.error(err));
  };

  protectedRoutes = () => {
    return (
      <Switch>
        <Route exact path='/compose' component={Compose} />
        <Route exact path='/account/edit' component={SignUp} />
        <Route
          exact
          path={`/@${this.state.user ? this.state.user.username : "/"}`}
          render={() => console.log("user")}
        />
        <Route render={() => console.log("not fond")} />
      </Switch>
    );
  };
  unProtectedRoutes = () => {
    return (
      <>
        <Route
          exact
          path='/login'
          render={() => <Login loggedUserToken={this.loggedUserToken} />}
        />
        <Route exact path='/signup' component={SignUp} />
      </>
    );
  };
  componentDidMount() {
    if (localStorage.authToken) {
      this.loggedUserToken(JSON.parse(localStorage.authToken));
    }
  }
  render() {
    return (
      <>
        <Header user={this.state.user} />
        <Route exact path='/' component={Feed} />
        {!localStorage.authToken
          ? this.unProtectedRoutes()
          : this.protectedRoutes()}
      </>
    );
  }
}

export default App;
