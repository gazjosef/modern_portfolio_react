import React, { Component } from "react";

class Header2 extends Component {
  state = {
    menuButton: false
  };

  toggleMenu2 = e => {
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

  addShow = () => {
    return this.state.menuButton === true ? "show" : "";
  };

  addClose = () => {
    return this.state.menuButton === true ? "" : "close";
  };

  render() {
    return (
      <header>
        <div
          className={`menu-btn ${this.addClose()}`}
          onClick={this.toggleMenu2}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={`menu ${this.addShow()}`}>
          <div className={`menu-branding ${this.addShow()}`}>
            <div className="portrait" />
          </div>
          <ul className={`menu-nav ${this.addShow()}`}>
            <li className={`nav-item current ${this.addShow()}`}>
              <a href="/home.html" className="nav-link">
                Home
              </a>
            </li>
            <li className={`nav-item ${this.addShow()}`}>
              <a href="/about.html" className="nav-link">
                About Me
              </a>
            </li>
            <li className={`nav-item ${this.addShow()}`}>
              <a href="/work.html" className="nav-link">
                My Work
              </a>
            </li>
            <li className={`nav-item ${this.addShow()}`}>
              <a href="/contact.html" className="nav-link">
                How To Reach Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header2;
