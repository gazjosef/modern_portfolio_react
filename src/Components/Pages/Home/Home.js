import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Gareth <span className="text-secondary-color">Hind</span>
      </h1>
      <h2 className="sm-heading">Web Developer, Programmer, and Designer.</h2>
      <div className="icons">
        <h2 className="sm-heading">
          <a href="https://github.com/gazjosef">
            <i className="fab fa-github-square fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/gareth-hind-a32448191/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </h2>
      </div>
      <button className="btn btn-warning">
        <Link to="/work" style={{ textDecoration: "none" }}>
          Click To See My Work
        </Link>
      </button>
    </main>
  );
}

export default Home;
