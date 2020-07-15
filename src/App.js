import React from "react";
import "./App.css";
import { Gameshow } from "./components/Gameshow.js";

function App() {
  const [score, setScore] = React.useState(0);
  const [gamesPlayed, setGamesPlayed] = React.useState(0);
  const [switched, setSwitched] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Monty Hall Problem</h1>
      </header>

{!score && !gamesPlayed ? <div className="description">
  <p>The Monty Hall Problem is a brain teaser based around the American TV game show <i>Let's Make a Deal</i> and named after that show's original host.  The general premise of the problem is as follows:</p>
  <p>You are presented with three doors.  Behind two of the doors, there is a goat.  Behind the third is a prize.  You are asked to make a guess at which of the three doors contains the prize.  Monty Hall then opens one of the doors to reveal a goat.  You are given the option to keep your original door or switch doors.</p>
  <p>Which one is more likely to result in you winning?  Are the chances equal?</p>
</div> : null }
      {!modalOpen && <h2>Select a door</h2>}
      <Gameshow
        setScore={setScore}
        setGamesPlayed={setGamesPlayed}
        setSwitched={setSwitched}
        setModalOpen={setModalOpen}
      />
      <div className="table">
      {score || gamesPlayed ? <table className="score">
        <caption>Results</caption>
        <thead>
          <tr>
            <th>In {gamesPlayed} {gamesPlayed === 1 ? 'game' : 'games'}</th>
            <th>#</th>
            <th>%</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <th>Wins</th>
              <td>{score}</td>
              <td>{gamesPlayed === 0
            ? "0.00"
            : ((score / gamesPlayed) * 100).toFixed(2)}
          %</td>
            </tr>
            <tr>
              <th>Switched</th>
              <td>{switched}</td>
              <td> {gamesPlayed === 0
            ? "0.00"
            : ((switched / gamesPlayed) * 100).toFixed(2)}
          %</td>
            </tr>
            <tr>
              <th>Stayed</th>
              <td>{gamesPlayed - switched}</td>
              <td> {gamesPlayed === 0
            ? "0.00"
            : (((gamesPlayed - switched) / gamesPlayed) * 100).toFixed(2)}
          %</td>
            </tr>
          </tbody>
          </table>

: ''}
    </div>
    </div>
  );
}

export default App;
