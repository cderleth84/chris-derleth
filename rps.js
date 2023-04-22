// const computerChoiceDisplay = document.getElementById("computer-choice");
// const userChoiceDisplay = document.getElementById("user-choice");
// const resultDisplay = document.getElementById("result");
// const possibleChoices = document.querySelectorAll(".rps-button");
// let userChoice;

// possibleChoices.forEach((possibleChoice) =>
//   possibleChoice.addEventListener("click", (e) => {
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML = userChoice;
//   })
// );

// const rockChoice = document.getElementById("rock").innerText;
// const paperChoice = document.getElementById("paper").innerText;
// const scissorsChoice = document.getElementById("scissors").innerText;
// console.log(rockChoice);
// console.log(paperChoice);
// console.log(scissorsChoice);

const randomNumber = Math.floor(Math.random() * 3);
let userChoice;
let computerChoice;
let result;

function playGame(userChoice, computerChoice) {
  document.getElementById("user-choice").innerHTML = userChoice;

  function computerSelector(randomNumber) {
    if (randomNumber === 0) {
      computerChoice = "Rock";
      document.getElementById("computer-choice").innerHTML = computerChoice;
      return computerChoice;
    } else if (randomNumber === 1) {
      computerChoice = "Paper";
      document.getElementById("computer-choice").innerHTML = computerChoice;
      return computerChoice;
    } else {
      computerChoice = "Scissors";
      document.getElementById("computer-choice").innerHTML = computerChoice;
      return computerChoice;
    }
  }
  computerSelector(randomNumber);

  if (userChoice === computerChoice) {
    result = "Tie";
    document.getElementById("result").innerHTML = result;
    return result;
  } else if (userChoice === "Rock" && computerChoice === "Paper") {
    result = "Computer Wins";
    document.getElementById("result").innerHTML = result;
    return result;
  } else if (userChoice === "Paper" && computerChoice === "Scissors") {
    result = "Computer Wins";
    document.getElementById("result").innerHTML = result;
    return result;
  } else if (userChoice === "Scissors" && computerChoice === "Rock") {
    result = "Computer Wins";
    document.getElementById("result").innerHTML = result;
    return result;
  } else {
    result = "You Win!";
    document.getElementById("result").innerHTML = result;
    return result;
  }
}

// Play again
// if (confirm("Play Again?")) {
//   console.log("Playing Again");
// }
// console.log("Not playing again");

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }
