import React, { useState } from "react";
import "./App.css";

function App() {
  const [clouds, setClouds] = useState({ 1: false, 2: false, 3: false });

  const cloudNext = () => {
    setClouds({ 1: !clouds[1], 2: !clouds[2], 3: !clouds[3] });
  };
  return (
    <div className="App">
      <div class="rail-1">
        <img
          src="/cloud_1.png"
          className={`cloud ${clouds[1] && "App-cloud-1"}`}
          alt="logo"
        />
      </div>
      <div class="rail-2">
        <img
          src="/cloud_2.png"
          className={`cloud ${clouds[2] && "App-cloud-2"}`}
          alt="logo"
        />
      </div>
      <div class="rail-3">
        <img
          src="/cloud_3.png"
          className={`cloud ${clouds[3] && "App-cloud-3"}`}
          alt="logo"
        />
      </div>
      <button onClick={cloudNext}>do it</button>
    </div>
  );
}

export default App;
