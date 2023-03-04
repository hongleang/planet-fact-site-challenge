import './App.css'

import planetData from "./data/data"

import PlanetFactPage from './layouts/PlanetFactPage/PlanetFactPage'

function App() {


  return (
    <div className="App">
      <div className="app-container">
        <PlanetFactPage data={planetData} />
      </div>
    </div>
  )
}

export default App
