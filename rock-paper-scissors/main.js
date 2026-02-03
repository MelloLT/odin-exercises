const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;
let gameOver = false;

let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let scores = document.querySelector(".scores");
let currentScore = document.querySelector(".currentScore");

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
  while (!choices.includes(humanChoice)) {
    humanChoice = prompt("Enter rock, paper and etc.. pls :/").toLowerCase();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  const p = document.createElement("p");
  if (gameOver === true) {
    return;
  } else if (humanChoice == computerChoice) {
    console.log("Tie");
    p.innerText = `You tied! You both picked ${humanChoice}`;
    scores.appendChild(p);
    currentScore.textContent = `Human - ${humanScore} | Computer - ${computerScore}`;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    humanScore++;

    p.innerText = `You won! ${humanChoice} destroyed ${computerChoice}`;
    scores.appendChild(p);
    currentScore.textContent = `Human - ${humanScore} | Computer - ${computerScore}`;
    console.log("Player wins");
  } else {
    computerScore++;

    p.innerText = `You lost! ${computerChoice} destroyed ${humanChoice}`;
    scores.appendChild(p);
    currentScore.textContent = `Human - ${humanScore} | Computer - ${computerScore}`;
    console.log("Computer wins");
  }

  checkWhoWon(humanScore, computerScore);
}

function checkWhoWon(humanScore, computerScore) {
  const h2 = document.createElement("h2");
  if (humanScore === 5) {
    gameOver = true;
    h2.innerText = `Yay! You won! Human: ${humanScore} | Computer: ${computerScore}`;
    scores.appendChild(h2);
  } else if (computerScore === 5) {
    gameOver = true;
    h2.innerText = `No! You lost! Human: ${humanScore} | Computer: ${computerScore}`;
    scores.appendChild(h2);
  }
}

rock.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const humanChoice = "rock";
  playRound(humanChoice, computerChoice);
});

scissors.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const humanChoice = "scissors";
  playRound(humanChoice, computerChoice);
});

paper.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const humanChoice = "paper";
  playRound(humanChoice, computerChoice);
});

// function playGame() {
//   // for (let i = 0; i < 5; i++) {
//   //   console.log(`Human - ${humanScore}, computer - ${computerScore}`);
//   //   const humanSelection = getHumanChoice();
//   //   const computerSelection = getComputerChoice();
//   //   playRound(humanSelection, computerSelection);
//   // }
// }
