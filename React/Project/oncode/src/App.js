import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomeFeed from "./components/HomeFeed";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Route exact path='/' component={HomeFeed} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
    </>
  );
}

export default App;
