import React, { Component } from "react";

const { app } = window.require("electron").remote;

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <div>Version: {app.getVersion()}</div>
      </div>
    );
  }
}

export default App;
