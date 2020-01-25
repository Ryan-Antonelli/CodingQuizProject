var quizTimer;

// HTML element selectors
var cardTitle = document.getElementById("cardTitle");
var questionText = document.getElementById("questionText");
var answerEntry = document.getElementById("form");
var highScores = document.getElementById("highScores");
var clearHighScores = document.getElementById("clearHighScores");
var form = document.getElementById("form");


// multiple choice questions
var quizQuestion0 = {
                    question: "beep beep question", 
                    rightAnswer: "mordor", 
                    wrongAnswer1: "kill all the muppet peoples", 
                    wrongAnswer2: "free willy", 
                    wrongAnswer3: "total is better than corn flakes",
};
// for randomizing answer positions, unused ATM
// var remainingAnswers1 = Object.keys(quizQuestion1).length - 1;
// var randomAnswer = Math.ceil(Math.random * 4) <-- needs work

var quizQuestion1 = {question: "Question question boogaloo", rightAnswer: "noop noop", wrongAnswer1: "bradybotx", wrongAnswer2: "flim flam alacazam", wrongAnswer3: "cooter mooter booter"};

var quizQuestion2 = {question: "6a", rightAnswer: "7a", wrongAnswer1: "8a", wrongAnswer2: "9a", wrongAnswer3: "0a"};

var quizQuestion3 = {question: "6s", rightAnswer: "7s", wrongAnswer1: "8s", wrongAnswer2: "9s", wrongAnswer3: "0s"};

var quizQuestion4 = {question: "6d", rightAnswer: "7d", wrongAnswer1: "8d", wrongAnswer2: "9d", wrongAnswer3: "0d"};

// text entry question
// var quizQuestion3 = {question: "11", rightAnswer: "12text"}

var quizQuestions = [quizQuestion0, quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4];

var breaker1 = $("<br>");
var breaker2 = $("<br>");
var breaker3 = $("<br>");
var breaker4 = $("<br>");

// quiz start function
function startQuiz() {
    // for (let i = 0; i < 5; i++) {
        // iteratable question number
        var i = 0;
        var questionNumber = quizQuestions[i];
        
        console.log(questionNumber);
        console.log(questionNumber.question);
        
        $(cardTitle).text("Question " + [i + 1]);    
        $(questionText).text(questionNumber.question);

// needs labels, and how do we apply the answer text so that its visible?

        var input1 = $('<input type="radio" name="answer" id="answer1"></input>').text(questionNumber.rightAnswer)
        var input2 = $('<input type="radio" name="answer" id="answer2">').val(questionNumber.wrongAnswer1);
        var input3 = $('<input type="radio" name="answer" id="answer3">').val(questionNumber.wrongAnswer2);
        var input4 = $('<input type="radio" name="answer" id="answer4">').val(questionNumber.wrongAnswer3);
        $(form).append(input1, breaker1, input2, breaker2, input3, breaker3, input4)
    // }
    
};

startQuiz();
