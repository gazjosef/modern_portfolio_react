import './App.scss';

import { Home } from "./Components/Pages/Home/Home"
import { Work } from "./Components/Pages/Work/Work"
import { Contact } from "./Components/Pages/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
