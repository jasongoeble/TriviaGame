//psuedo code design
//
//page load welcomes user to the game page

//present a start game button
//  need .click register for starting the game

//once game starts:
//  start a 30 second timer

//  present a question
//      pull question from array of question objects

//  present 4 possible answer
//      pull answers from answer atttribute of question objects
//          there will be 4 answers to every question
//          there will be only 1 valid answer

//      if timer expires with no answer
//          incriment incorrect answer counter
//          incriment question counter
//          remove question from page
//          remove answers from page
//          present correct answer
//          wait 10 seconds before proceeding to next question
//          reset question timer to 30 seconds
//      if answered incorrectly
//          incriment incorrect answer counter
//          incriment question counter
//          remove question from page
//          remove answers from page
//          notify player they chose incorrectly
//          present correct answer
//          wait 10 seconds
//          move on to next question
//              if last question
//                  show total number of questions correct
//                  show total number of questions incorrect
//                  provide option to play again
//      if answered correctly
//          incriment question counter
//          incriment correct answer counter
//          remove question from page
//          remove answers from page
//          congratulate player
//          wait 10 seconds before proceeding to next question
//          move on to next question
//              if last question
//                  show total number of questions correct
//                  show total number of questions incorrect
//                  provide option to play again
//                  

///////////////////////////////////////////////////////////////////

//      reset timer to 30 seconds
//      start timer

//questions objects held in an array:
//  x questions
//      text string
//  4 answers
//      text strings
//  1 valid answer
//      integer

/////////////////////////////////////////////////////////////////////

//ex:
//  var exampleQuestion = [
//      {
//          question: "text of first question",
//          qAnswers: ["a", "b", "c", "d"],
//          images: ["../assets/images/somePicture.png"],
//          correctAnswer: integer 0-3
//      }        
//  ]

//  global variables
$(document).ready(function() {

var questionNumber = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var rightAnswer;
var notRightAnswerotRightAnswer;
var myTimer;
var intervalId;

var exampleQuestion =
{
    Asks:[
        {
            question: "Which of the following groups did Eddie Veder star as lead vocals?",
            qAnswers: ["Nirvana","Pearl Jam","Sound Garden","Green Day"],
            correctAnswer:1, 
        },
        {
            question: "Which of the following movies was released in 1994?",
            qAnswers: ["Pulp Fiction","Jurassic Park","Toy Story","The Matrix"],
            correctAnswer:0, 
        },
        {
            question: "Which of the following movies was Tom Hanks not in?",
            qAnswers: ["Forrest Gump","A League of Their Own","The Green Mile","Silence of the Lambs"],
            correctAnswer:3, 
        },
        {
            question: "What year was Quentin Tarantin's movie Django Unchained released?",
            qAnswers: ["2010","2011","2012","2013"],
            correctAnswer:2, 
        },
        {
            question: "Which of the following groups has had the largest concert attendance?",
            qAnswers: ["Rod Stewart","AC/DC","New York Philharmonic","Garth Brooks"],
            correctAnswer:0, 
        }
    ]
};

$("#starting").click(function()
{
    startGame(exampleQuestion,QuestionNumber);
})


//function playGameQuestion()
//{
    //this functionality should hid the start game button once clicked
    //var a = document.getElementById("starter");
    //if (a.style.display === "none") {
    //    a.style.display = "block";
    //} else {
    //    a.style.display = "none";
    //}

    //startGame();
//}

function startGame(exampleQuestion,questionNumber)
{
    for (z=0; z<exampleQuestion.length; z++)
    {
    //      sets display clock to 00:00
        reset();

    //      sets maximum waiting duration for an answer
        myTimer = setTimeout(outOfTime, (1000*30));

    //      starts the question countup display
        startQuestion();

    //      so long as the maximum wait time hasn't been met display a question
        do
        {
            display(exampleQuestion, questionNumber);

        } while (myTimer = false);
    }

    //when the game ends re-display the start game button
    //var b = document.getElementById("starter");
    //b.style = "block"
}

function outOfTime()
{
    clearTimeout(myTimer);

    incorrectAnswers++;
    notRightAnswer = "<p> You ran out of time.  The correct answer was: "+exampleQuestion.Asks[questionNumber].qAnswers[exampleQuestion.Asks[questionNumber].correctAnswer]+".</p>";
    $("#answerDisplay").html(notRightAnswer);
    $("#totalIncorrect").html("<h2>Incorrect Answers: "+incorrectAnswers+"</h2>");
    questionIncriment();

    stop();
    reset();
    startDelay();

//      wait for 10 seconds
    myTimer = setTimeout(questionIncriment, (1000*10));
    stop();
    clearTimeout(myTimer);

}

function questionIncriment()
{
    questionNumber++;
}


//  this function requires the question object and the question number
function display(exampleQuestion, questionNumber,rightAnswer)
{
//      //variable (string) to hold the question to display
    var currentQuestion = exampleQuestion.Asks[questionNumber].question;
    currentQuestion = "<h2>"+currentQuestion+"</h2>";

//      //variable (array) to hold the possible answers
    var answerLinks = exampleQuestion.Asks[questionNumber].qAnswers;

//      //variable (int) to hold the correct answer integer value
    rightAnswer = exampleQuestion.Asks[questionNumber].correctAnswer;
//
//  //declare the anAnswer variable used in the for loop
    var anAnswer;
//      //replaces all html in the div with id=questionDisplay 
    $("#questionDisplay").html(currentQuestion);

//      //clears the html content in the div with id=answerDisplay, just in case its not empty
    $("#answerDisplay").html("<h2>Possible Answers:</h2>");

//      //loop to append answers to the page
    for (i = 0; i < answerLinks.length; i++)
    {
//          //define the text for the link, which is itself also the link/button
        anAnswer.text(answerLinks[i]);

//          //define the integer value for the link/button
        anAnswer.value(i);

//          //define the class for the answer link/button, will be used to register a click on any answer
        anAnswer.addClass("clickAnswer");

//          //show the answer on the page
        $("#answerDisplay").append("<h3>"+anAnswer+"</h3>");
    }

}

//  //functional click listeners for all answers done by class, limited by timer
//  
$(".clickAnswer").click(function()
{
    clearTimeout();
    stop();

    if(this.attr("value") === rightAnswer)
    {
        correctAnswers++;
        $("#answerDisplay").html("<h2>Congratulations, you chose the right answer!</h2>");
        $("#totalCorrect").html("<h2>Correct Answers: "+correctAnswers+"</h2>");
        startDelay();
//          wait 10 seconds
        myTimer = setTimeout(questionIncriment, (1000*10));
        stop();
    }

    else 
    {
        incorrectAnswers++;
        notRightAnswer = "<h2> You chose the wrong answer.  The correct answer was: "+exampleQuestion.Asks[questionNumber].qAnswers[exampleQuestion.Asks[questionNumber].correctAnswer]+".</h2>";
        $("#answerDisplay").html(notRightAnswer);
        $("#totalIncorrect").html("<h2>Incorrect Answers: "+incorrectAnswers+"</h2>");
        startDelay();
//          wait 10 seconds
        myTimer = setTimeout(questionIncriment, (1000*10));
        stop();
    }
});
//  

// resets the timer, sets time display to 0 seconds
function reset() 
{
    time = 0;
    $("#timedisplay").text("00:00");
}

//this functions starts the 30 second question timer
function startQuestion() 
{
    intervalId = setInterval(count, (1000*30));
}

//this function starts the 10 second between question timer
function startDelay() 
{
    intervalId = setInterval(count, (1000*10));
}

//this function stops the timer, and will be used in conjunction with setting a new timer duration
function stop() 
{
    //console.log("stopping");
    clearInterval(intervalId);
}

//this function incriments the counter and updates the timerDisplay field on the page
function count() 
{
    time++;
    var converted = timeConverter(time);
    $("#timeDisplay").text(converted);
}

//this function converts the millisecond duration to display as mm:ss
function timeConverter(t) 
{

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) 
    {
        seconds = "0" + seconds;
    }

    if (minutes === 0) 
    {
        minutes = "00";
    }
    else if (minutes < 10) 
    {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

});