import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Layout/Header/Header";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Work from "./Components/Pages/Work/Work";

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
      <Router>
        <div id="bg-img" className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
