// Questions
var questions = [
    //Array called questions holding objects which contain the quiz questions
    {
      question: "Which of these is not a data type in Javascript?",
      answer0: "Numbers",
      answer1: "Strings",
      answer2: "Null",
      answer3: "Arrays",
      correctAnswer: "Arrays",
    },
    {
      question: "What keyword could you use to declare a variable in Javascript?",
      answer0: "Let",
      answer1: "Const",
      answer2: "Var",
      answer3: "All the above",
      correctAnswer: "All the above",
    },
    {
      question: "String values must be enclosed within ______ when being assigned to variables",
      answer0: "Curly brackets",
      answer1: "Quotes",
      answer2: "Commas",
      answer3: "Parentheses",
      correctAnswer: "Curly brackets",
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answer0: "Javascript",
      answer1: "Terminal / bash",
      answer2: "For loops",
      answer3: "Console.log",
      correctAnswer: "Console.log",
    },
    {
      question: "In which tab can you view the contents of the local storage in a browser?",
      answer0: "Console",
      answer1: "Elements",
      answer2: "Network",
      answer3: "Application",
      correctAnswer: "Application",
  },
    
  ];

  // Answer buttons 
//this line selects the HTML #answers with querySelector method and using the property innterHTMl sets the content inside the element. 
//the = assignment operator assigns new values to the innerHTML property the <button id= btnAnswer0-3>
//the dynamically created buttosn will interact with the getQuestionsText () function where the buttons will have its textcontent set to the value stored in 
// questions[questionNumber].answer0-3 which is the questions array
document.querySelector("#answers").innerHTML = "<button id='btnAnswer0'></button><button id='btnAnswer1'></button><button id='btnAnswer2'></button><button id='btnAnswer3'></button>";
