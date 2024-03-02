const options = ["rock", "paper", "scissors"];

let getComputerChoice = () => options[Math.floor(Math.random() * 3)];

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log(`You both chose ${playerSelection}! It's a tie!`);
        return;
    }
    switch(playerSelection.toLowerCase() + computerSelection.toLowerCase()) {
        case("rock" + "scissors"):
        case("scissors" + "paper"):
        case("paper" + "rock"):
            console.log(`You won! ${playerSelection} beats ${computerSelection}!`);
            return true;
        case("rock" + "paper"):
        case("scissors" + "rock"):
        case("paper" + "scissors"):
            console.log(`You lost. ${computerSelection} beats ${playerSelection}...`);
            return false;
        default:
            console.log(`Invalid input. Please enter "Rock", "Paper", or "Scissors".`);
    }
}

let playGame = () => {
    let playerScore = 0, computerScore = 0;

    while (true) {
        if (playerScore == 5) {
            console.log(`YOU WON!!! FINAL SCORE: ${playerScore} - ${computerScore}`);
            return false;
        }
        if (computerScore == 5) {
            console.log(`YOU LOST... FINAL SCORE: ${playerScore} - ${computerScore}`);
            return false;
        }
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result == undefined) { continue; }
        if (result) {
            playerScore++;
            console.log(`YOU: ${playerScore} - ${computerScore} : COMP`);
        }
        if (!result){
            computerScore++;
            console.log(`YOU: ${playerScore} - ${computerScore} : COMP`);
        }
    }
}

playGame();