import React from "react";
import closedDoor from "../closedDoor.png";
import goatDoor from "../goatDoor.gif";
import keyDoor from "../keyDoor.gif";

const Door = ({ handleSelection, id, game }) => {
  const { contestantGuess, montyDoor, prizeDoor, win = "" } = game;

  if (win === true || win === false) {
    return (
      <>
        {prizeDoor === +id ? (
          <div>
            <img src={keyDoor} alt="Opening door to reveal keys" />
          </div>
        ) : (
          <div>
            <img src={goatDoor} alt="Opening door to reveal goat" />
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {contestantGuess === +id ? (
          <div>
            <img src={closedDoor} alt="Closed door" />
            <p>You chose Door {id}</p>
          </div>
        ) : montyDoor === +id ? (
          <div>
            <img src={goatDoor} alt="Opening door to reveal goat" />
            <p>Monty opens Door {id}</p>
          </div>
        ) : (
          <div>
            <img
              src={closedDoor}
              name={id}
              id={`door-${id}`}
              alt="Closed door"
              onClick={handleSelection}
            />
            <p>Door {id}</p>
          </div>
        )}
      </>
    );
  }
};

export { Door };
