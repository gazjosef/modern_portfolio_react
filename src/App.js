import React, { Component } from "react";

import Header from "./Header/Header";
import Home from "./Home/Home";

import "./scss/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  toggleMenu = e => {
    console.log("clicked");
    // this.setState(state => ({
    //   showMenu: true
    // }));
  };

  render() {
    return (
      <div id="bg-img" className="App">
        <div
          className="overlay"
          // style={{ backgroundColor: "rgba(68, 68, 68, 0.5)" }}
        >
          <Header toggleMenu={this.toggleMenu} />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
