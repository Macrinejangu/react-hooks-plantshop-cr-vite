import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // Holds every plant returned by the backend
  const [plants, setPlants] = useState([]);

  // Fetch all plants once, when the app first mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  // Adds a newly created plant to state so it renders immediately
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;