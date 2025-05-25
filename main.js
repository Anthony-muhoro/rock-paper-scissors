const options = [
  { name: "rock", icon: "✊" },
  { name: "paper", icon: "✋" },
  { name: "scissors", icon: "✌️" },
];

const playerDisplay = document.getElementById("playerSelection");
const computerDisplay = document.getElementById("computerselection");
const resultDisplay = document.getElementById("winner-show-display");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const buttons = document.querySelectorAll(".play-options > div");

let playerCount = 0;
let computerCount = 0;


const rules = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

function getComputerChoice() {
  const random = options[Math.floor(Math.random() * options.length)];
  computerDisplay.textContent = random.icon;
  return random.name;
}

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const playerChoice = options[i];
    playerDisplay.textContent = playerChoice.icon;

    const computerChoice = getComputerChoice();

    if (playerChoice.name === computerChoice) {
      resultDisplay.textContent = "Draw";
    } else if (rules[playerChoice.name] === computerChoice) {
      resultDisplay.textContent = "Player wins";
      playerScore.textContent = ++playerCount;
    } else {
      resultDisplay.textContent = "Computer wins";
      computerScore.textContent = ++computerCount;
    }
  });
});

// TODO
// 1. implement score History
// 2....