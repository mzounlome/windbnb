import "./App.scss";

import Gallery from "./components/Gallery/Gallery";
import NavBar from "./components/Nav/NavBar";
import { locations } from "./data";
import { useState } from "react";

function App() {
  const [currentLocation, setCurrentLocation] = useState("Finland");
  const handleLocation = () => {
    switch (currentLocation) {
      case "Italy":
        return locations.Italy;
      case "France":
        return locations.France;
      case "Sweden":
        return locations.Sweden;
      default:
        return locations.Finland;
    }
  };

  const handleLocationChange = (event) => {
    event.preventDefault();
    setCurrentLocation(event.target.value);
  };
  const stays = handleLocation();

  return (
    <div className="App">
      <NavBar handleLocationChange={handleLocationChange} />
      <div>
        <Gallery stays={stays} currentLocation={currentLocation} />
      </div>
    </div>
  );
}

export default App;
