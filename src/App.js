import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
