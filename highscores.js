//Global variables
var highScores = []; 

var clear = document.querySelector("#clear");

// Initialise 
findHighscore();
highScoresList();

//Functions for highscore list, dynamically generates a li for each new highscore saved 
function highScoresList () {
     highScoresLi = [];
for (let i = 0; i< highScores.length; i++) {
  highScoresLi[i] = document.createElement("li");
  document.querySelector("#highscores").append(highScoresLi[i]);
  highScoresLi[i].textContent = highScores[i].initials + " " + highScores[i].scoreCount;
  console.log("score added ")
    }
}

//Functions for finding highscores from local storage
function findHighscore() {
    if(localStorage.getItem("highscores") !== null) {
        highScores = JSON.parse(localStorage.getItem("highscores"));
    }
}

//Function to go back to the questions
function startQuestions () {
    window.location.href= "index.html";
//     document.querySelector("#quiz-section").setAttribute("class")
// }
}
// Function for highscore clear all
function highScoresClear() {
    highScores = [];
    highScores = JSON.stringify(highScores);
    localStorage.setItem("highscores", highScores);
  
    // Clear the displayed list
    var highscoresList = document.querySelector("#highscores");
    highscoresList.innerHTML = " ";
  }
  


  // Event Listener for clear button 
  document.querySelector("#clear").addEventListener("click", function (event) {
    event.preventDefault();
    highScoresClear();
    console.log("Scores cleared")
  });

  document.querySelector("a"). addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("highscores", JSON.stringify(highScores));
    startQuestions();
  });