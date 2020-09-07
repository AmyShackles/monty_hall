import React from "react";
import goatDoor from '../goathead.svg';
import keyDoor from '../cashbriefcase.svg';

const Door = ({ handleSelection, id, game, isOpen, prizeOrGoat }) => {
  const { contestantGuess, montyDoor, prizeDoor, win = "" } = game;

  const handleKeyPress = (e, id) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      if (!game.montyDoor) {
        handleSelection(id)
      }    }
  }

  const handleClick = (e, id) => {
    e.preventDefault();
    if (!game.montyDoor) {
      handleSelection(id)
    }
  }

  if (win !== "") {
    return (
      <div className="scene" tabIndex={game.prizeDoor ? '' : "0"} disabled={isOpen}>
        <div className="goat">
          <img src={game.prizeDoor ? (prizeDoor === +id ? keyDoor : goatDoor) : prizeOrGoat ? keyDoor : goatDoor} alt={prizeDoor === +id ? 'Door opens to reveal prize' : 'Door opens to reveal goat'}/>
        </div>

        <div className="door show--right" id={id}>
          <div className="door--face door--front">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="doorknobGradient">
                  <stop offset="2%" stopColor="rgba(172,143,26,1)" />
                  <stop offset="26%" stopColor="rgba(172,143,26,1)" />
                  <stop offset="74%" stopColor="rgba(144,113,9,1)" />
                  <stop offset="100%" stopColor="rgba(135,107,14,1)" />
                </linearGradient>
              </defs>
              <circle className="doorknob" cx="90%" cy="65%" r="5" />
            </svg>
          </div>
          <div className="door--face door--back"></div>
          <div className="door--face door--right"></div>
        </div>
      </div>
    )
  } else {
    if (contestantGuess === +id) {
      return (
        <div className="scene" tabIndex={game.prizeDoor ? '' : "0"} disabled={isOpen}>
          <div className="goat"></div>

          <div className="door" id={id} >
            <div className="door--face door--front">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="doorknobGradient">
                    <stop offset="2%" stopColor="rgba(172,143,26,1)" />
                    <stop offset="26%" stopColor="rgba(172,143,26,1)" />
                    <stop offset="74%" stopColor="rgba(144,113,9,1)" />
                    <stop offset="100%" stopColor="rgba(135,107,14,1)" />
                  </linearGradient>
                </defs>
                <circle className="doorknob" cx="90%" cy="65%" r="5" />
              </svg>
            </div>
            <div className="door--face door--back"></div>
            <div className="door--face door--right"></div>
          </div>
          <p>You chose door {id}</p>
        </div>
      )
    } else if (montyDoor === +id) {
      return (
        <div className="scene" tabIndex={game.prizeDoor ? '' : "0"}  disabled={isOpen}>
          <div className="goat">
            <img src={goatDoor} alt="Door opens to reveal goat"/>

          </div>

          <div className="door show--right" id={id} >
            <div className="door--face door--front">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="doorknobGradient">
                    <stop offset="2%" stopColor="rgba(172,143,26,1)" />
                    <stop offset="26%" stopColor="rgba(172,143,26,1)" />
                    <stop offset="74%" stopColor="rgba(144,113,9,1)" />
                    <stop offset="100%" stopColor="rgba(135,107,14,1)" />
                  </linearGradient>
                </defs>
                <circle className="doorknob" cx="90%" cy="65%" r="5" />
              </svg>
            </div>
            <div className="door--face door--back"></div>
            <div className="door--face door--right"></div>
          </div>
          <p>Monty opens door {id}</p>
        </div>

      )
    } else {
      return (
        <div className="scene" tabIndex={game.prizeDoor ? '' : "0"} onClick={e => handleClick(e, id)} onKeyDown={e => handleKeyPress(e, id)} role="button" disabled={isOpen}>
          <div className="goat">
          <img src={game.prizeDoor ? (prizeDoor === +id ? keyDoor : goatDoor) : prizeOrGoat ? keyDoor : goatDoor} alt={prizeDoor === +id ? 'Door opens to reveal prize' : 'Door opens to reveal goat'}/>
          </div>

          <div className="door" id={id} >
            <div className="door--face door--front">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="doorknobGradient">
                    <stop offset="2%" stopColor="rgba(172,143,26,1)" />
                    <stop offset="26%" stopColor="rgba(172,143,26,1)" />
                    <stop offset="74%" stopColor="rgba(144,113,9,1)" />
                    <stop offset="100%" stopColor="rgba(135,107,14,1)" />
                  </linearGradient>
                </defs>
                <circle className="doorknob" cx="90%" cy="65%" r="5" />
              </svg>
            </div>
            <div className="door--face door--back"></div>
            <div className="door--face door--right"></div>
          </div>
        </div>
      )
    }

  }
};

export { Door };
