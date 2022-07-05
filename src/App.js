import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Result from "./pages/Result";
import { map, DataContext } from './pages/Home'

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={map}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </DataContext.Provider>
      {/* <Home /> */}
    </div>
  );
}

export default App;
