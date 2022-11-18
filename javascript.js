const playerWin = "You Wins!!";
const cpuWin = "CPU Wins!";
const tie = "It's a tie!"
const score = document.createElement("p");
const container = document.querySelector("#container");
const cpuSelectionDeclaration = document.createElement("p");
const playerSelectionDeclaration = document.createElement("p");
const results = document.createElement("p");
const cpuScoreBoard = document.querySelector("#cpu-score-board");
const playerScoreBoard = document.querySelector("#player-score-board");
const cpuScoreBoardCounter = document.createElement("p");
cpuScoreBoardCounter.innerText = 0;
cpuScoreBoardCounter.style.fontSize = "34px";
const playerScoreBoardCounter = document.createElement("p");
playerScoreBoardCounter.innerText = 0;
playerScoreBoardCounter.style.fontSize = "34px";

let cpuScore = 0;
let playerScore = 0;

score.textContent = "Hello";

container.appendChild(cpuSelectionDeclaration);
container.appendChild(playerSelectionDeclaration);
container.appendChild(results)
cpuScoreBoard.appendChild(cpuScoreBoardCounter);
playerScoreBoard.appendChild(playerScoreBoardCounter);

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
    cpuSelectionDeclaration.textContent = `CPU has selected ${result}`
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
    playerSelectionDeclaration.textContent = `You've selected ${input}`
    return input;
}

function compareChoice(cpu, player) {
    /* Takes the computer choice and the player choice and determines the winner
    returning a message based on the winner. */
    if (player === cpu) {
        winner = tie;
    } else if ((player === "ROCK" && cpu === "PAPER") || (player === "PAPER" && cpu === "SCISSORS") || (player === "SCISSORS" && cpu === "ROCK")) {
        winner = cpuWin;
    } else if ((player === "ROCK" && cpu === "SCISSORS") || (player === "PAPER" && cpu === "ROCK")) {
        winner = playerWin;
    } else {
        winner = playerWin;
    }
    return winner
} 

function keepScore(round) {
    // Tally score based on winner.
    if (round === cpuWin) {
        cpuScore++;
        cpuScoreBoardCounter.innerText = cpuScore;
    } else if (round === playerWin) {
        playerScore++;
        playerScoreBoardCounter.innerText = playerScore;
    }
}

function whoWon(playerScore, cpuScore) {
    // Declare winner
    if (playerScore === 5) {
        results.innerText = "You win the game!";
        results.style.fontSize = "40px";
    } else if (cpuScore === 5) {
        results.innerHTML = "You lost the game :(";
        results.style.fontSize = "40px";
    }

    if (playerScore === 5 || cpuScore === 5) {
        return true;
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let rpsResult = compareChoice(computerSelection, playerSelection);
    results.textContent = rpsResult;
    keepScore(rpsResult);
     if (whoWon(playerScore, cpuScore)) {
        // Reset score if winner declared
        playerScore = 0;
        playerScoreBoardCounter.innerText = "";
        cpuScore = 0;
        cpuScoreBoardCounter.innerText = "";
     }
}

let rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    playRound(rock.id.toUpperCase())
    playerSelectionDeclaration.textContent = `You've selected ${rock.id.toUpperCase()}`
})

let paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    playRound(paper.id.toUpperCase())
    playerSelectionDeclaration.textContent = `You've selected ${paper.id.toUpperCase()}`
})

let scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    playRound(scissors.id.toUpperCase())
    playerSelectionDeclaration.textContent = `You've selected ${scissors.id.toUpperCase()}`
})
