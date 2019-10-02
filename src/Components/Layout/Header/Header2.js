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

  openClose = () => {
    return this.state.menuButton === true ? "open" : "close";
  };

  showClass = () => {
    return this.state.menuButton === true ? "show" : "";
  };

  render() {
    return (
      <header>
        <div
          className={`menu-btn ${this.openClose()}`}
          onClick={this.toggleMenu2}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>
          <ul className="menu-nav">
            <li className={`nav-item ${this.showClass()}`}>
              <a href="/home.html" className="nav-link">
                Home
              </a>
            </li>
            <li className={`nav-item ${this.showClass()}`}>
              <a href="/about.html" className="nav-link">
                About Me
              </a>
            </li>
            <li className={`nav-item ${this.showClass()}`}>
              <a href="/work.html" className="nav-link">
                My Work
              </a>
            </li>
            <li className={`nav-item ${this.showClass()}`}>
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
