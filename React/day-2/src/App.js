import React from "react";
import "./App.css";
import Button from "./components/button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    const data = ["let", "const", "var"];
    return (
      <>
        <Button onClick={() => this.setState({ count: 0 })}>Lets</Button>
        <Button onClick={() => this.setState({ count: 1 })}>conts</Button>
        <Button onClick={() => this.setState({ count: 2 })}>var</Button>
        <div>{data[this.state.count]}</div>
      </>
    );
  }
}

export default App;
