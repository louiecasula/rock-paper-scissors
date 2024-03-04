const options = ["rock", "paper", "scissors"];

let playerScore = 0, computerScore = 0;

const scoreboard = document.getElementById('scoreboard');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
    button.addEventListener('click', () => updateScoreboard());
});

let getComputerChoice = () => options[Math.floor(Math.random() * 3)];

let updateScoreboard = () => {
    if (playerScore >= 5) {
        scoreboard.innerHTML = `<p>YOU WON!<br>P1: ${playerScore} - ${computerScore} :CPU</p>`;
    }
    else if (computerScore >= 5) {
        scoreboard.innerHTML = `<p>YOU LOST...<br>P1: ${playerScore} - ${computerScore} :CPU</p>`;
    }
    else {
        scoreboard.innerHTML = `<p>P1: ${playerScore} - ${computerScore} :CPU</p>`;
    }
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        console.log(`You both chose ${playerSelection}! It's a tie!`);
        return;
    }
    switch(playerSelection + computerSelection) {
        case("rock" + "scissors"):
        case("scissors" + "paper"):
        case("paper" + "rock"):
            console.log(`You won! ${playerSelection} beats ${computerSelection}!`);
            playerScore++;
            return;
        case("rock" + "paper"):
        case("scissors" + "rock"):
        case("paper" + "scissors"):
            console.log(`You lost. ${computerSelection} beats ${playerSelection}...`);
            computerScore++;
            return;
        default:
            console.log(`Invalid input. Please enter "Rock", "Paper", or "Scissors".`);
    }
}