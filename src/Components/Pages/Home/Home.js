import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Gareth <span className="text-secondary">Hind</span>
      </h1>
      <h2 className="sm-heading">Web Developer, Programmer, and Designer.</h2>
      <div className="icons">
        <a href="#">
          <i className="fas fa-twitter-square fa-2x" />
        </a>
        <a href="#!">
          <i className="fas fa-facebook-square fa-2x" />
        </a>
        <a href="#!">
          <i className="fas fa-linkedin-square fa-2x" />
        </a>
        <a href="#!">
          <i className="fas fa-github-square fa-2x" />
        </a>
      </div>
      <h2 className="sm-heading">
        <Link to="/work" style={{ textDecoration: "none" }}>
          Click To See My Work
        </Link>
      </h2>
    </main>
  );
}

export default Home;
