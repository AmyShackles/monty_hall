class MontyHall {
  constructor(contestantGuess) {
    this.contestantGuess = Number(contestantGuess);
    this.doors = [1, 2, 3];
    this.prizeDoor = this.getPrizeDoor();
    this.montyDoor = this.montyOpens();
    this.win = false;
  }
  start() {
    console.log(`You chose ${this.contestantGuess} as your door`);
    return this.montyOpens();
  }
  getPrizeDoor() {
    return Math.floor(Math.random() * 3) + 1;
  }
  montyOpens() {
    if (this.contestantGuess === this.prizeDoor) {
      let options = this.doors.filter((door) => door !== this.contestantGuess);
      return this.randomDoor(options);
    } else {
      return this.doors.find(
        (door) => door !== this.prizeDoor && door !== this.contestantGuess
      );
    }
  }
  randomDoor(doors) {
    let randomIndex = Math.floor(Math.random() * 2);
    return doors[randomIndex];
  }
  changeAnswer() {
    return this.checkWinning(
      this.doors.find(
        (door) => door !== this.contestantGuess && door !== this.montyDoor
      )
    );
  }
  checkWinning(guess = this.contestantGuess) {
    const response = [];
    if (guess === this.contestantGuess) {
      response.push(`You guessed Door ${guess}. `);
    } else {
      response.push(
        `You originally guessed Door ${this.contestantGuess} and switched to choose Door ${guess}. `
      );
    }
    response.push(`The prize was located in Door ${this.prizeDoor}.  `);
    if (guess === this.prizeDoor) {
      this.win = true;
      response.push("Congratulations, you win!");
    } else {
      response.push("Better luck next time.");
    }
    return response;
  }
}

export { MontyHall };
