import React from "react";

import Header from "./Header/Header";
import Home from "./Home/Home";

import "./scss/main.scss";

function App() {
  return (
    <div id="bg-img" className="App">
      {/* <div className="overlay">Hello</div> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
