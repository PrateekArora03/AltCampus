import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Feed from "./components/Feed";
import HeroSection from "./components/HeroSection";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Route exact path='/' component={Feed} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
    </>
  );
}

export default App;
