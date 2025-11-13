const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
  return humanChoice;
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("Tie");
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      humanScore++;
      console.log("Player wins");
    } else {
      console.log("Computer wins");
      computerScore++;
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  playRound();
}

playGame();
