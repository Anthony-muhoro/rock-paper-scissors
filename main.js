

const playerDisplay = document.getElementById("playerSelection");
const computerDisplay = document.getElementById("computerselection");
const resultDisplay = document.getElementById("winner-show-display");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const buttons = document.querySelectorAll(".play-options > div");




const rules = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};
const options = [
  { name: "rock", icon: "✊" },
  { name: "paper", icon: "✋" },
  { name: "scissors", icon: "✌️" },
];