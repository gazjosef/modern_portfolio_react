import React from "react";

// Select DOM Items
// const menuBtn = document.querySelector(".menu-btn");
// const menu = document.querySelector(".menu");
// const menuNav = document.querySelector(".menu-nav");
// const menuBranding = document.querySelector(".menu-branding");
// const navItems = document.querySelectorAll(".nav-item");

const Header = props => {
  // menuBtn.addEventListener("click", toggleMenu());
  // toggleMenu = e => {
  //   console.log("clicked");
  // if (!this.state.showMenu) {
  //   menuBtn.classList.add("close");
  //   menu.classList.add("show");
  //   menuNav.classList.add("show");
  //   menuBranding.classList.add("show");
  //   navItems.forEach(item => item.classList.add("show"));
  //   this.setState({
  //     showMenu: true
  //   });
  // } else {
  //   menuBtn.classList.remove("close");
  //   menu.classList.remove("show");
  //   menuNav.classList.remove("show");
  //   menuBranding.classList.remove("show");
  //   navItems.forEach(item => item.classList.add("show"));
  //   this.setState({
  //     showMenu: false
  //   });
  // }
  console.log("header.js render called", props);
  return (
    <header>
      <div className="menu-btn" onClick={props.toggleMenu}>
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
};

export default Header;
