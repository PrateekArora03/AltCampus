import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Feed from "./components/Feed";
import HeroSection from "./components/HeroSection";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  loggedUser = user => {
    this.setState({ user });
    localStorage.setItem("authToken", JSON.stringify(this.state.user.token));
  };

  protectedRoutes = () => {};
  unProtectedRoutes = () => {
    return (
      <>
        <Route
          exact
          path='/login'
          render={() => <Login loggedUser={this.loggedUser} />}
        />
        <Route exact path='/signup' component={SignUp} />
      </>
    );
  };

  render() {
    console.log(localStorage.authToken);
    return (
      <>
        <Header />
        <HeroSection />
        <Route exact path='/' component={Feed} />
        {!localStorage.authToken
          ? this.unProtectedRoutes
          : this.protectedRoutes}
      </>
    );
  }
}

export default App;
