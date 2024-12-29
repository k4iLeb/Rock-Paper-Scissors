// Reset round
// END GAME
// Reset game

// DECLARE userScore = 0, compScore = 0, rounds = 1 <= 10
let userScore = 0;
let compScore = 0;
let rounds = 0;
const choices = ["rock", "paper", "scissors"];

playGame();

function playGame() {
  // IF rounds = 5:
  while (rounds < 5) {
    playRound();
  }
  // Announce winner
  if (userScore > compScore) alert("User WINS!");
  else if (userScore < compScore) alert("Comp WINS!");
  else alert("IT'S A TIE!");
}

// CREATE round
function playRound() {
  const userChoice = getUserChoice();
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
  console.log("userChoice: " + userChoice, "UserScore: " + userScore);
  console.log("compChoice: " + compChoice, "CompScore: " + compScore);
  console.log("rounds: " + rounds);
}

// GET input from user (PROMPT)
function getUserChoice() {
  // make it case-insensitive
  let answer = prompt("Rock,Paper or Scissors?");
  if (!answer || choices.indexOf(answer.toLowerCase()) === -1) {
    alert("Please provide a valid choice");
    return getUserChoice();
  } else {
    return answer;
  }
}

// GET random input from computer
function getCompChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

// playRound();
