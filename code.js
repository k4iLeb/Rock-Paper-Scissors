// Reset round
// END GAME
// Reset game

// DECLARE userScore = 0, compScore = 0, rounds = 1 <= 10
let userScore = 0;
let compScore = 0;
let rounds = 0;
const choices = ["rock", "paper", "scissors"];

// ========== SELECTORS =========================

const button = document.querySelector("#resetGameBtn");
const btns = document.querySelectorAll(".btns");
const round = document.querySelector(".rounds");
const userScoreSpan = document.querySelector("#UserScore");
const compScoreSpan = document.querySelector("#CompScore");

button.addEventListener("click", resetGame);

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id);
  });
});

function resetGame() {
  rounds = 0;
  round.textContent = `Round: ${rounds}`;
  userScore = 0;
  userScoreSpan.textContent = userScore;
  compScore = 0;
  compScoreSpan.textContent = compScore;
}

function playGame() {
  // IF rounds = 5:

  if (rounds === 5) {
    // Announce winner
    if (userScore > compScore) alert("User WINS!");
    else if (userScore < compScore) alert("Comp WINS!");
    else alert("IT'S A TIE!");
    rounds = 0;
    userScore = 0;
    compScore = 0;
  }
}

// CREATE round
function playRound(userBtnChoice) {
  const userChoice = userBtnChoice;
  const compChoice = getCompChoice();
  // CONDITIONS
  // IF userChoice === compChoice => TIE
  if (userChoice === compChoice) {
    alert("TIE");
    // IF userChoice !== compChoice:
  } else {
    // IF userChoice === Rock:
    if (userChoice === "rock") {
      // IF compChoice === Paper:
      if (compChoice === "paper") {
        // OUTPUT user < comp => compScore +1
        alert("Paper wins Rock, comp wins!");
        compScore++;
      } else {
        // IF compChoice === Scissors:
        alert("Rock wins Scissors, User wins!");
        userScore++;
      }
    } else if (userChoice === "paper") {
      if (compChoice === "rock") {
        alert("Paper wins Rock, User wins!");
        userScore++;
      } else {
        alert("Scissors win Paper, comp wins!");
        compScore++;
      }
    } else {
      if (compChoice === "rock") {
        alert("Rock wins Scissors, comp wins!");
        compScore++;
      } else {
        alert("Scissors win Paper, User wins!");
        userScore++;
      }
    }
  }

  // END ROUND => rounds ++
  rounds++;
  round.textContent = `Round: ${rounds}`;
  userScoreSpan.textContent = userScore;
  compScoreSpan.textContent = compScore;
  console.log("userChoice: " + userChoice, "UserScore: " + userScore);
  console.log("compChoice: " + compChoice, "CompScore: " + compScore);
  console.log("rounds: " + rounds);

  playGame();
}

// GET random input from computer
function getCompChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}
