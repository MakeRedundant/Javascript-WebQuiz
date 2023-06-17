// Questions
var questions = [
    //Array called questions holding objects which contain the quiz questions
    {
      question: "Commonly used data types DO NOT include:",
      answer0: "Numbers",
      answer1: "Strings",
      answer2: "Null",
      answer3: "Booleans",
      correctAnswer: "Booleans"
    },
    {
      question: "The condition in an if / else statement is enclosed within _____",
      answer0: "Quotes",
      answer1: "Paraentheses",
      answer2: "Square brackets",
      answer3: "Curly brackets",
      correctAnswer: "Curly brackets"
    },
    {
      question: "String values must be enclosed within ______ when being assigned to variables",
      answer0: "Curly brackets",
      answer1: "Quotes",
      answer2: "Commas",
      answer3: "Parentheses",
      correctAnswer: "Quotes"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answer0: "Javascript",
      answer1: "Terminal / bash",
      answer2: "For loops",
      answer3: "Console.log",
      correctAnswer: "Console.log"
    },
    {
      question: "In which tab can you view the contents of the local storage in a browser?",
      answer0: "Console",
      answer1: "Network",
      answer2: "Application",
      answer3: "Elements",
      correctAnswer: "Application"
  },
    
  ];

  // Answer buttons 
//this line selects the HTML #answers with querySelector method and using the property innterHTMl sets the content inside the element. 
//the = assignment operator assigns new values to the innerHTML property the <button id= btnAnswer0-3>
//the dynamically created buttosn will interact with the getQuestionsText () function where the buttons will have its textcontent set to the value stored in 
// questions[questionNumber].answer0-3 which is the questions array

document.querySelector("#answers").innerHTML = 
`
  <ul>
    <li><button id="btnAnswer0"></button></li>
    <li><button id="btnAnswer1"></button></li>
    <li><button id="btnAnswer2"></button></li>
    <li><button id="btnAnswer3"></button></li>
  </ul>
`;
