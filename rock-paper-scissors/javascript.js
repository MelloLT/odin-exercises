const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log("Computer's input: " + choices[randomIndex]);
  return choices[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, paper or scissors?", "rock").toLowerCase();
  console.log("User's input: " + humanChoice);
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("A tie");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      console.log("Computer loses! Rock beats Scissors");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      console.log("Computer loses! Scissors beats Paper");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      console.log("Computer loses! Paper beats Rock");
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    }
    console.log(
      `Human's score: ${humanScore}, computer's score: ${computerScore}`
    );
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore == computerScore) {
    console.log("Final - tie!");
  } else if (humanScore > computerScore) {
    console.log("Final - human won!");
  } else {
    console.log("Final - computer won!");
  }
}

playGame();
