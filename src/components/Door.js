import React from "react";
import closedDoor from "../closedDoor.png";
import goatDoor from "../goatDoor.gif";
import keyDoor from "../keyDoor.gif";

const Door = ({ handleSelection, id, game, isOpen }) => {
  const { contestantGuess, montyDoor, prizeDoor, win = "" } = game;

  if (win === true || win === false) {
    return (
      <>
        {prizeDoor === +id ? (
            <img src={keyDoor} alt="Opening door to reveal keys" />
        ) : (
            <img src={goatDoor} alt="Opening door to reveal goat" />
        )}
      </>
    );
  } else {
    return (
      <>
        {contestantGuess === +id ? (
          <button disabled={isOpen}>
            <img src={closedDoor} alt="Closed door" />
            <p>You chose Door {id}</p>
          </button>
        ) : montyDoor === +id ? (
          <button disabled={isOpen}>
            <img src={goatDoor} alt="Opening door to reveal goat" />
            <p>Monty opens Door {id}</p>
          </button>
        ) : (
          <button onClick={handleSelection} disabled={isOpen}>
            <img
              src={closedDoor}
              name={id}
              id={`door-${id}`}
              alt="Closed door"
            />
            <p>Door {id}</p>
          </button>
        )}
      </>
    );
  }
};

export { Door };
