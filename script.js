const options = ["rock", "paper", "scissors"]

let getComputerChoice = () => options[Math.floor(Math.random() * 3)]

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `You both chose ${playerSelection}! It's a tie!`
    }
    switch(playerSelection.toLowerCase() + computerSelection.toLowerCase()) {
        case("rock" + "scissors"):
        case("scissors" + "paper"):
        case("paper" + "rock"):
            return `You won! ${playerSelection} beats ${computerSelection}!`
        case("rock" + "paper"):
        case("scissors" + "rock"):
        case("paper" + "scissors"):
            return `You lost. ${computerSelection} beats ${playerSelection}...`
    }
  }
  
  const playerSelection = "ROCK";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));