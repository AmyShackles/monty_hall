import React from "react";
import { Prompt } from "./Prompt.js";
import { Door } from "./Door.js";
import { MontyHall } from "./MontyHall.js";

const Gameshow = () => {
  const [promptOpen, setPromptOpen] = React.useState(false);
  const [result, setResult] = React.useState("");
  const [game, setGame] = React.useState(null);

  const handleSelection = (event) => {
    const door = event.target.name;
    if (!game) {
      setGame(new MontyHall(door));
      setPromptOpen(true);
    }
  };
  const keepDoor = () => {
    setResult(game.checkWinning());
    setPromptOpen(false);
  };
  const changeDoor = () => {
    setResult(game.changeAnswer());
    setPromptOpen(false);
  };
  const restart = () => {
    setResult("");
    setGame(null);
  };
  return (
    <>
      {promptOpen && (
        <Prompt>
          <h1>Do you want to change doors?</h1>
          <button onClick={keepDoor}>No</button>
          <button onClick={changeDoor}>Change Answer </button>
        </Prompt>
      )}
      <div className="doors">
        <Door id="1" game={game || {}} handleSelection={handleSelection} />
        <Door id="2" game={game || {}} handleSelection={handleSelection} />
        <Door id="3" game={game || {}} handleSelection={handleSelection} />
      </div>
      {result && (
        <>
          <div className="results">
            {result.map((phrase, index) => {
              if (index === result.length - 1) {
                if (game.win === false) {
                  return (
                    <p key={index} className="lose">
                      {phrase}
                    </p>
                  );
                } else if (game.win === true) {
                  return (
                    <p key={index} className="win">
                      {phrase}
                    </p>
                  );
                }
              }
              return <p key={index}>{phrase}</p>;
            })}
          </div>
          <button onClick={restart}>Play again?</button>
        </>
      )}
    </>
  );
};

export { Gameshow };
