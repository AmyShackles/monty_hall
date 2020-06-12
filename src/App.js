import React from "react";
import "./App.css";
import { Gameshow } from "./components/Gameshow.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Monty Hall Problem</h1>
        <Gameshow />
      </header>
    </div>
  );
}

export default App;
