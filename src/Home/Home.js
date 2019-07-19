import React from "react";

function Home() {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Gareth <span className="text-secondary">Hind</span>
      </h1>
      <h2 className="sm-heading">Web Developer, Programmer, and Designer.</h2>
      <div className="icons">
        <a href="#!">
          <i className="fa fa-twitter-square fa-2x" />
        </a>
        <a href="#!">
          <i className="fa fa-facebook-square fa-2x" />
        </a>
        <a href="#!">
          <i className="fa fa-linkedin-square fa-2x" />
        </a>
        <a href="#!">
          <i className="fa fa-github-square fa-2x" />
        </a>
      </div>
    </main>
  );
}

export default Home;
