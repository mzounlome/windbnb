import "./App.scss";

import Gallery from "./components/Gallery/Gallery";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
