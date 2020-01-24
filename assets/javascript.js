var quizTimer;

var cardTitle = document.getElementById("cardTitle");
var questionText = document.getElementById("questionText");
var answerEntry = document.getElementById("form");

var highScores = document.getElementById("highScores");
var clearHighScores = document.getElementById("clearHighScores");

var quizQuestion1 = {question: "1", rightAnswer: "2", wrongAnswer1: "3", wrongAnswer2: "4", wrongAnswer3: "5"};
// for randomizing answer positions
// var remainingAnswers1 = Object.keys(quizQuestion1).length - 1;

var quizQuestion2 = {question: "6", rightAnswer: "7", wrongAnswer1: "8", wrongAnswer2: "9", wrongAnswer3: "0"};
// for randomizing answer positions
// var remainingAnswers2 = Object.keys(quizQuestion2).length - 1;

var quizQuestion3 = {question: "11", rightAnswer: "12text"}

var randomAnswer = Math.ceil(Math.random * 4)

function startQuiz() {
    for (let i = 0; i < quizQuestions.length; i++) {
        cardTitle.textContent("Question " + [i + 1])    
        questionText.textContent(quizQuestion1.question)
    }
    
}

