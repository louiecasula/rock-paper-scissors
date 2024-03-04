const options = ["rock", "paper", "scissors"];

let playerScore = 0, computerScore = 0;

let getComputerChoice = () => options[Math.floor(Math.random() * 3)];

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log(`You both chose ${playerSelection}! It's a tie!`);
        updateScoreboard();
        return;
    }
    switch(playerSelection.toLowerCase() + computerSelection.toLowerCase()) {
        case("rock" + "scissors"):
        case("scissors" + "paper"):
        case("paper" + "rock"):
            console.log(`You won! ${playerSelection} beats ${computerSelection}!`);
            playerScore++;
            updateScoreboard();
            return true;
        case("rock" + "paper"):
        case("scissors" + "rock"):
        case("paper" + "scissors"):
            console.log(`You lost. ${computerSelection} beats ${playerSelection}...`);
            computerScore++;
            updateScoreboard();
            return false;
        default:
            console.log(`Invalid input. Please enter "Rock", "Paper", or "Scissors".`);
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => playRound(button.id, getComputerChoice()))

});

let updateScoreboard = () => {
    const scoreboard = document.getElementById('scoreboard');

    scoreboard.innerHTML = `<p>${playerScore} - ${computerScore}</p>`;
}