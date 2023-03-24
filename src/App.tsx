import { useState } from "react";
import "./App.css";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

import planetData from "./data/data";

import PlanetFactPage from "./layouts/PlanetFactPage/PlanetFactPage";
import BackgroundStars from "./components/loadingScreen/BackgroundStars";

function App() {
  const [loading, setLoading] = useState(true);
  const completeLoading = () => setLoading(false);

  return (
    <div className="App">
      <div className="app-container">
        <div className="starBackground">
          <BackgroundStars />
        </div>

        {loading ? (
          <LoadingScreen {...{ loading, completeLoading }} />
        ) : (
          <PlanetFactPage data={planetData} />
        )}
      </div>
    </div>
  );
}

export default App;
