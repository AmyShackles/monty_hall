import React from "react";
import { Prompt } from "./Prompt.js";
import { Door } from "./Door.js";
import { MontyHall } from "./MontyHall.js";

const Gameshow = ({ setScore, setGamesPlayed, setSwitched, setModalOpen }) => {
  const [promptOpen, setPromptOpen] = React.useState(false);
  const [result, setResult] = React.useState("");
  const [game, setGame] = React.useState({});
  const [selected, setSelected] = React.useState(false);
  const [prizeOrGoat, setPrizeOrGoat] = React.useState('')

  React.useEffect(() => {
    if (game.win === true) {
      setScore((score) => score + 1);
    }
    if (game.win === true || game.win === false) {
      setGamesPlayed((gamesPlayed) => gamesPlayed + 1);
    }
  }, [game.win, setScore, setGamesPlayed]);

  const handleSelection = (id) => {
    setModalOpen(true);
    const door = id
    if (!game.contestantDoor) {
      setGame(new MontyHall(door));
      setSelected(true);
    }
  };
  const keepDoor = () => {
    setResult(game.checkWinning());
    setPromptOpen(false);
    setSelected(false);
  };
  const changeDoor = () => {
    setResult(game.changeAnswer());
    setSwitched((switched) => switched + 1);
    setPromptOpen(false);
    setSelected(false);
  };
  const restart = () => {
    setResult("");
    setPrizeOrGoat(game.prizeDoor);
    setGame({});
    setModalOpen(false);
  };
  return (
    <main>
      {promptOpen ? (
        <Prompt>
          <p>Do you want to change doors?</p>
          <button tabIndex="0" onClick={keepDoor}>No</button>
          <button tabIndex="0" onClick={changeDoor}>Change Answer </button>
        </Prompt>
      ) : null}
      <div className="doors">
        <Door id="1" prizeOrGoat={prizeOrGoat === 1} isOpen={promptOpen} game={game || {}} handleSelection={handleSelection} />
        <Door id="2" prizeOrGoat={prizeOrGoat === 2} isOpen={promptOpen} game={game || {}} handleSelection={handleSelection} />
        <Door id="3" prizeOrGoat={prizeOrGoat === 3} isOpen={promptOpen} game={game || {}} handleSelection={handleSelection} />
      </div>
      <br />
      {selected ? <button onClick={() => setPromptOpen(true)}>Decide Next Move</button> : null}
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
    </main>
  );
};

export { Gameshow };
