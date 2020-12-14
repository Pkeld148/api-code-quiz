var openingTitle = "Welcome to the API Code Quiz! \nClick the button to begin!"
var quizQuestions = [
  "Commonly used data types DO NOT include:",
  "The condition in an if / else statement is enclosed within _____",
  "Arrays in JavaScript can be used to store _____",
  "String values must be enclosed within _____ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];
var answersQuestionOne = [
  "1. Strings",
  "2. Booleans",
  "3. Alerts",
  "4. Numbers",
];
var answersQuestionTwo = [
  "1. Quotes",
  "2. Curly Brackets",
  "3. Parenthesis",
  "4. Square Brackets",
];
var answersQuestionThree = [
  "1. Numbers and Strings",
  "2. Other Arrays",
  "3. Booleans",
  "4. All of the Above",
];
var answersQuestionFour = [
  "1. Commas",
  "2. Curly Brackets",
  "3. Quotes",
  "4. Parenthesis",
];
var answersQuestionFive = [
  "1. JavaScript",
  "2. Terminal/Bash",
  "3. For Loops",
  "4. Console.log",
];
var correctAnswer = [3, 3, 4, 3, 4];

$(document).ready(function() {
  $("p").hide();
});


$("#question").text("Welcome to the API Code Quiz! Click the button to begin!");
$("#footer").text("WARNING: Incorrect answers will deduct 10 seconds!");

$("#start").on("click", function () {
  console.log("YOU CLICKED BEGIN");
  $("p").show();
  $("#footer").hide();
  $("h3").hide();
});

// $("#question").text(quizQuestions[1]);


//  var quizQuestionAnswers = {
//     answersQuestionOne = [
//         "1. Strings",
//         "2. Booleans",
//         "3. Alerts",
//         "4. Numbers",
//       ],
//       answersQuestionTwo = [
//         "1. Quotes",
//         "2. Curly Brackets",
//         "3. Parenthesis",
//         "4. Square Brackets",
//       ],
//       answersQuestionThree = [
//         "1. Numbers and Strings",
//         "2. Other Arrays",
//         "3. Booleans",
//         "4. All of the Above",
//       ],
//       answersQuestionFour = [
//         "1. Commas",
//         "2. Curly Brackets",
//         "3. Quotes",
//         "4. Parenthesis",
//       ],
//       answersQuestionFive = [
//         "1. JavaScript",
//         "2. Terminal/Bash",
//         "3. For Loops",
//         "4. Console.log",
//       ]
//  }

// var answersQuestionOne = [
//   "1. Strings",
//   "2. Booleans",
//   "3. Alerts",
//   "4. Numbers",
// ];
// var answersQuestionTwo = [
//   "1. Quotes",
//   "2. Curly Brackets",
//   "3. Parenthesis",
//   "4. Square Brackets",
// ];
// var answersQuestionThree = [
//   "1. Numbers and Strings",
//   "2. Other Arrays",
//   "3. Booleans",
//   "4. All of the Above",
// ];
// var answersQuestionFour = [
//   "1. Commas",
//   "2. Curly Brackets",
//   "3. Quotes",
//   "4. Parenthesis",
// ];
// var answersQuestionFive = [
//   "1. JavaScript",
//   "2. Terminal/Bash",
//   "3. For Loops",
//   "4. Console.log",
// ];

// var questionOne = "Commonly used data types DO NOT include:";
// var questionTwo =
//   "The condition in an if / else statement is enclosed within _____";
// var questionThree = "Arrays in JavaScript can be used to store _____";
// var questionFour =
//   "String values must be enclosed within _____ when being assigned to variables.";
// var questionFive =
//   "A very useful tool used during development and debugging for printing content to the debugger is:";
