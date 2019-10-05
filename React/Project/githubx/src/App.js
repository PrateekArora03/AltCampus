import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./App.scss";
import Home from "./components/Home/Home";
import Finder from "./components/Finder/Finder";
function App() {
  return (
    <>
      <Header />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/finder'>
        <Finder />
      </Route>
    </>
  );
}

export default App;
