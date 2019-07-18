import React from "react";

function Header() {
  return (
    <header>
      <div className="menu-btn">
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait" />
        </div>
        <ul className="menu-nav">
          <li className="nav-item">
            <a href="/home.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about.html" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="/work.html" className="nav-link">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact.html" className="nav-link">
              How To Reach Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
