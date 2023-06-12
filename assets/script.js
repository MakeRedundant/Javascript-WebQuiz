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
//  quizFeedback

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

//Start Quiz function
//Start Questions after clicking the start button 
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

//Feedback for each answer prompt
//Shows the feedback message for 2 seconds
function quizFeedback(text) {
  document.querySelector("#quizfeedback").textContent = text;
  document.querySelector("#quizfeedback").setAttribute("class", "visible");
  setTimeout(function() {
    document.querySelector("#quizfeedback").setAttribute("class", "hide");
},  
  2000);
}

//Function that checks checks if input was correct, updates scores counter and moves to the next question.
function questionsAnswer(answer) {
  if (questions[questionNumber]["answer" + answer] === questions[questionNumber].correctAnswer) { //first selects the question object based on the questionNumber array starting at 0, 
    //["answer" + answer] this here will create a string concatentation of "answer3" and with questions[questionNumber]["answer3"] will retrieve "Arrays"
    console.log("Correct!");
    //SFX correct 
    quizFeedback("Correct!")
    scoreCount++;
    questionNumber++;
  } else {
    console.log("Wrong!");
    quizFeedback("Wrong!")
    //sfx incorrect 
    timerCount -= 10; // Reduce timer by ten seconds on wrong answer
    document.querySelector("#timer").textContent = timerCount; // Updates timer
    questionNumber++;
  }
  if (questionNumber > questions.length - 1) {
    goScorePage();
  } else {
    getQuestionsText();
  }
}

function goScorePage() {
  console.log("You are at the Score page");
  clearInterval(timer);
  document.querySelector("#questions").setAttribute("class", "hide");
  document.querySelector("#score-screen").setAttribute("class","visible")
  document.querySelector("#final-score").textContent = timerCount; ", with " + scoreCount + "out of" + questions.length + "correct answers!";
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
  questionsAnswer(0)
});

document.querySelector("#btnAnswer1").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Answer 1 button clicked");
  questionsAnswer(1)
});
document.querySelector("#btnAnswer2").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Answer 2 button clicked");
  questionsAnswer(2)
});
document.querySelector("#btnAnswer3").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Answer 3 button clicked");
  questionsAnswer(3);
});
