// const computerSelection = getComputerChoice();
// const playerSelection = getPlayerChoice();


function getRandomInt() {
    // Returns a random Int between 0 and 2.
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    // Randomly returns ROCK, PAPER, or SCISSORS.
    randomNumber = getRandomInt()
    console.log(randomNumber)
    if (randomNumber === 0) {
        result = "ROCK";
    } else if (randomNumber === 1) {
        result = "PAPER";
    } else {
        result = "SCISSORS";
    }
    console.log(result)
    return result;
}

function getPlayerChoice() {
    // Returns user entered value in all upper case and only accepts rock, paper, or scissors.
    ;playerSelection = prompt("Choose Rock, Paper, or Scissors:")
    playerSelection = playerSelection.toUpperCase();

    while (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") {
        playerSelection = prompt("Try again. Rock, paper, or scissors only:");
        playerSelection = playerSelection.toUpperCase();
    }
    // console.log(playerSelection)
    return playerSelection;
}


const computerSelection = getComputerChoice();
console.log(computerSelection)
