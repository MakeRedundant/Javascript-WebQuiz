//Global Variables

var timerCount = 0;
var start; //for the start button
var scoreCount; //defines score
var questionNumber; //defines which question to start

//Ids
// timer
// questions
// answers
// score-screen
// final-score
// initials
// start
// feedback

//Timer function 
function startTimer() {
    timerCount = 45; //start the timer from 45 
    document.querySelector("#timer").textContent = timerCount;
    timer = setInterval(function() {
        timerCount --; //decreases to 0
        document.querySelector("#timer").textContent = timerCount;
        if (timerCount <=0) { //When the timer runs out will go to the score page 
            goScorePage();
        }
    }, 1000);
}

// //Scorepage Function
// function goScorePage() {

// }

//Start Questions function after clicking the start button 
function startQuestions() {
scoreCount= 0,
questionNumber= 0, 
document.querySelector("#start-quiz").setAttribute("class", "hide");
document.querySelector("#questions").setAttribute("class", "visible");
getQuestionsText();
startTimer();
console.log("timer has started");
}
//Question text function from the questions array
//uses document.querySelector("#question-title")' which selects the HTML #question-title to display in <h2>
function getQuestionsText() { 
  document.querySelector("#question-title").textContent = questions [questionNumber].question; 
  document.querySelector("#btnAnswer0").textContent = questions[questionNumber].answer0; // similarly this uses the query.selector to select the HTMl elements for the answers 
  document.querySelector("#btnAnswer1").textContent = questions[questionNumber].answer1;//questions[questionNumber].answer1; sets the corresponding answer choice from the questions array 
  document.querySelector("#btnAnswer2").textContent = questions[questionNumber].answer2;
  document.querySelector("#btnAnswer3").textContent = questions[questionNumber].answer3;
}

// function resetGame () {

// }

// Start Quiz function
function startQuiz() {
  document.querySelector("#start-quiz").classList.add("hide");
  document.querySelector("#questions").classList.remove("hide");
  startTimer(); // Start the timer when the quiz starts
  getQuestionsText();
}



//Event Listerners 

//Start Button 
document.querySelector("#start").addEventListener("click", function() {
    console.log("Start button clicked");
    startQuestions();
});
// Answer questions button 
document.querySelector("#btnAnswer0").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Answer 0 button clicked");
  questionsResolve(0)
});

document.querySelector("#btnAnswer1").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Answer 1 button clicked");
  questionsResolve(1)
});
document.querySelector("#btnAnswer2").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Answer 2 button clicked");
  questionsResolve(2)
});
document.querySelector("#btnAnswer3").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Answer 3 button clicked");
  questionsResolve(3);
});
