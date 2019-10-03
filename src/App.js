import React, { Component } from "react";

// import Header from "./Components/Layout/Header/Header";
import Header2 from "./Components/Layout/Header/Header2";
import Home from "./Components/Pages/Home/Home";

import "./scss/main.scss";

class App extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = e => {
    console.log("clicked");

    if (!this.state.menuButton) {
      this.setState(state => ({
        menuButton: true
      }));
      console.log("true");
    } else {
      this.setState(state => ({
        menuButton: false
      }));
      console.log("false");
    }
  };

  render() {
    return (
      <div id="bg-img" className="App">
        <Header2 />
        <Home />
      </div>
    );
  }
}

export default App;
