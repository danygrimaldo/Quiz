var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");

startButton.addEventListener("click", start);
    
function start() {
    timer();


}


function timer() {
    var timeLeft = 5;
    // set interval, clear interva;
}


//set function for timer after start button is clicked




nextButton.addEventListener("click", next);





//set function for next question feature
function next() {

    var questions = document.quiz.question1.value;
    var correct = 0;


    if (questions == "correctAnswer") {
        correct++;
    }

    var messages = ["EXCELENT!", "Better Luck Next Time"];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
};
//Set function for User name entry
function done() {

}