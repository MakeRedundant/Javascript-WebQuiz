//Global variables
var highScores = [];

var clear = document.querySelector("#clear");

// Initialise
findHighscore();
highScoresList();

//Functions for highscore list, dynamically generates a li for each new highscore saved
function highScoresList() {
  highScoresList = [];
  for (let i = 0; i < highScores.length; i++) {
    highScoresList[i] = document.createElement("li");
    document.querySelector("#highscores").append(highScoresList[i]);
    highScoresList[i].textContent =
      highScores[i].initials + " " + highScores[i].scoreCount;
    console.log("score added ");
  }
}

//Functions for finding highscores from local storage
function findHighscore() {
  if (localStorage.getItem("highscores") !== null) {
    highScores = JSON.parse(localStorage.getItem("highscores"));
  }
}

//Function to go back to the questions
function startQuestions() {
  window.location.href = "index.html";
}

// Function for highscore clear all
function highScoresClear() {
  highScores = [];
  localStorage.setItem("highscores", highScores);

  // Clears the displayed list
  var highscoresList = document.querySelector("#highscores");
  highscoresList.innerHTML = " ";
}

// Event Listener for clear button
document.querySelector("#clear").addEventListener("click", function (event) {
  event.preventDefault();
  highScoresClear();
  console.log("Scores cleared");
});
document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("highscores", JSON.stringify(highScores));
  startQuestions();
});
