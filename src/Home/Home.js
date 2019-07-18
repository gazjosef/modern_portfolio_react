import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main>
      <h1 className="lg-heading">
        Gareth <span className="text-secondary">Hind</span>
      </h1>
      <h2 className="sm-heading">Web Developer, Programmer, and Designer.</h2>
      <div className="icons">
        <a href="#!">
          {/* <i className="fab fa-twitter" />
          <FontAwesomeIcon icon={faHome} /> */}
        </a>
      </div>
    </main>
  );
}

export default Home;
