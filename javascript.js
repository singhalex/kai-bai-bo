const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();


function getRandomInt() {
    // Returns a random Int between 0 and 2.
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    // Randomly returns ROCK, PAPER, or SCISSORS.
    randomNumber = getRandomInt()
    if (randomNumber === 0) {
        result = "ROCK";
    } else if (randomNumber === 1) {
        result = "PAPER";
    } else {
        result = "SCISSORS";
    }
    return result;
}

function getPlayerChoice() {
    // Returns user entered value in all upper case and only accepts rock, paper, or scissors.
    input = prompt("Choose Rock, Paper, or Scissors:")
    input = input.toUpperCase();

    while (input != "ROCK" && input != "PAPER" && input != "SCISSORS") {
        input = prompt("Try again. Rock, paper, or scissors only:");
        input = input.toUpperCase();
    }
    return input;
}

function playRound(computerSelection, playerSelection) {
    /* Takes the computer choice and the player choice and determines the winner
    returning a message based on the winner. */
    console.log(playerSelection);
    console.log(`CPU picks ${computerSelection}`)
    if (playerSelection === computerSelection) {
        winner = "It's a tie!"
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        winner = "CPU Wins!";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        winner = "You Wins!!";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        winner = "You Wins!";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        winner = "CPU Wins!"
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        winner = "CPU Wins!"
    } else {
        winner = "You Wins!!"
    }
    return winner
} 

playRound(computerSelection, playerSelection);