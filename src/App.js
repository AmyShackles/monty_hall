import React from "react";
import "./App.css";
import { Gameshow } from "./components/Gameshow.js";

function App() {
  const [score, setScore] = React.useState(0);
  const [gamesPlayed, setGamesPlayed] = React.useState(0);
  const [switched, setSwitched] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Monty Hall Problem</h1>
      </header>
      {score ? <div className="score">
        <p>
          {score} wins/{gamesPlayed} games
        </p>
        <p>
          You switched doors {switched} times (
          {gamesPlayed === 0
            ? "0.00"
            : ((switched / gamesPlayed) * 100).toFixed(2)}
          %)
        </p>
        <p>
          You opted to not switch doors {gamesPlayed - switched} times (
          {gamesPlayed === 0
            ? "0.00"
            : (((gamesPlayed - switched) / gamesPlayed) * 100).toFixed(2)}
          %)
        </p>
        <p>
          Your win percentage is{" "}
          {gamesPlayed === 0
            ? "0.00"
            : ((score / gamesPlayed) * 100).toFixed(2)}
          %
        </p>
      </div> : null}
      {!switched && <h2>Select a door</h2>}
      <Gameshow
        setScore={setScore}
        setGamesPlayed={setGamesPlayed}
        setSwitched={setSwitched}
      />
    </div>
  );
}

export default App;
