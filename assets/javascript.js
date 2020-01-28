

// HTML element selectors
var cardTitle = document.getElementById("cardTitle");
var questionText = document.getElementById("questionText");
var highScores = document.getElementById("highScores");
var clearHighScores = document.getElementById("clearHighScores");
var form = document.getElementById("form");
var timer = document.getElementById("timer");
var submitButton = document.getElementById("submit");
var inputs = document.getElementById("inputs");
var radioButtons = $("input[name='answer']");
var highScoreList = document.getElementById("scores");

// multiple choice questions
var quizQuestion0 = "question";
var qq0Choices = ["a", "b", "c", "d"] ;
var qq0Answer = "a";


var quizQuestion1 = "Which of the following is a valid boolean value?"; 
var qq1Choices = ["true", "y", "100", "John"];
var qq1Answer = "true";


var quizQuestion2 = "The 'H' in 'HTML' stands for:";
var qq2Choices = ["hyper", "hooper", "haggis", "baseball"];                  
var qq2Answer = "hyper";

var quizQuestion3 = "Bears poop in the:";
var qq3Choices = ["woods", "big-boy potty", "chowder", "phonebooth"];
var qq3Answer = "woods";

var quizQuestion4 = "CSS is used to:";
var qq4Choices = ["Apply styling to HTML pages", "Frustrate developers", "Punish the unworthy", "Kill brain cells"];
var qq4Answer = "Apply styling to HTML pages";

var i = 0;
var checked;
var myTimer;

var quizQuestions = [quizQuestion0, quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4];
var quizChoices = [qq0Choices, qq1Choices, qq2Choices, qq3Choices, qq4Choices];
var quizAnswers = [qq0Answer, qq1Answer, qq2Answer, qq3Answer, qq4Answer];

var quizTimer = parseInt(quizQuestions.length * 15);


// quiz start function
$(submitButton).click(function(){     
    // iteratable question number
            // quiz timer
        if (i == 0) {  
            myTimer = setInterval(function() {
                $("#timer")
                    .empty();
                $("<h2>")
                    .text(quizTimer)
                    .appendTo(timer); 
                quizTimer--;
            }, 1000);
            
            if (quizTimer === 0) {
                endQuiz();
            }         
        }
            // console.log(i);
            // console.log(quizQuestions.length);
        
        if (i < quizQuestions.length) {
            
            // iterated variables
            
            var questionNumber = quizQuestions[i];
            var answersNumber = quizChoices[i];
            // console.log(answersNumber.length);
            $("#inputs")
                .empty();
            
            $(cardTitle)
                .text("Question " + [i + 1]);    
            $(questionText)
                .text(questionNumber);
            
            // shuffles answers
            function shuffleArray() {
                for (let v = answersNumber.length - 1; v > 0; v--) {
                    const x = Math.floor(Math.random() * (v + 1));
                    [answersNumber[v], answersNumber[x]] = [answersNumber[x], answersNumber[v]];
                }
            }

            shuffleArray();
           
            // writes text of questions and answers to card
            var label1 = $('<label for="answer1" class="px-2">')
                .text(answersNumber[0]);
            
            var input1 = $('<input type="radio" class="radio" name="answer" id="answer1" required></input>')
                .val(answersNumber[0]);

            var label2 = $('<label for="answer2" class="px-2">')
                .text(answersNumber[1]);
            
            var input2 = $('<input type="radio" class="radio" name="answer" id="answer2" required>')
                .val(answersNumber[1]);
            
            var label3 = $('<label for="answer3" class="px-2">')
                .text(answersNumber[2]);
            
            var input3 = $('<input type="radio" class="radio" name="answer" id="answer3" required">')
                .val(answersNumber[2]);
            
            var label4 = $('<label for="answer4" class="px-2">')
                .text(answersNumber[3]);
            
            var input4 = $('<input type="radio" class="radio" name="answer" id="answer4" required">')
                .val(answersNumber[3]);
                        
            $(inputs)
                .append(label1, input1, $("<br>"), label2, input2, $("<br>"), label3,  input3, $("<br>"), label4, input4);       
            
            $(submitButton).val("Next")

            var radioButtons = $("input[name='answer']");
            var correctNumber = quizAnswers[i];
            // console.log(radioButtons)
            console.log(correctNumber)
            $(radioButtons).change(function(){
    
                // pulls value of checked radio input
                var checked = $("input[name='answer']:checked").attr("id");
                // console.log(checked);
                var checkedLabel = $("label[for=" + checked + "]").text();
                // console.log(checkedLabel);
                // checks results against correct answer
                
                if (checkedLabel === correctNumber) {
                        // console.log(checkedLabel)
                        // console.log(correctNumber)
                        i++; 
                        $("<h2>").text("Correct!").appendTo(inputs)
                }
                else {
                        quizTimer -= 15
                        $("<h2>").text("Wrong!").appendTo(inputs)
                        i++;
                }
            
            });
        
        
        }
        
        else {
            endQuiz();
        }
}); 



// end of quiz- either completed or timed out
function endQuiz () {
    $("#form")
        .empty();
    $("<p></p>")
        .text("Thank you for applying at Antocorp!")
        .appendTo("#form")
    $(questionText)
        .text("")
    $(cardTitle)
        .text("You have completed the challenge!")
    var initials = prompt("Please enter your initials for the High Score list!")
    alert("Dear " + initials + ", Your score was " + quizTimer)
    var highScore = quizTimer
    localStorage.setItem("highScore", initials + highScore)
    // console.log(highScore)
    // console.log(initials)
    clearInterval(myTimer);
    $("#timer").empty();

}

// High Score Page Text
$(document).ready(function(){
    var storage = localStorage.getItem("highScore")
    $("highScoreList").text(storage)
    // console.log(highScore)
})

// Clear High Scores

$("#clearHighScores").click(function() {
   localStorage.clear(); 
})






