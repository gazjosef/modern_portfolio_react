import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
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
              {/* <a href="/home.html" className="nav-link">
                Home
              </a> */}
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${this.addShow()}`}>
              {/* <a href="/about.html" className="nav-link">
                About Me
              </a> */}
              <Link to="/about" style={{ textDecoration: "none" }}>
                About
              </Link>
            </li>
            <li className={`nav-item ${this.addShow()}`}>
              {/* <a href="/work.html" className="nav-link">
                My Work
              </a> */}
              <Link to="/work" style={{ textDecoration: "none" }}>
                Work
              </Link>
            </li>
            <li className={`nav-item ${this.addShow()}`}>
              {/* <a href="/contact.html" className="nav-link">
                How To Reach Me
              </a> */}
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
