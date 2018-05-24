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
$(function() {

var questionNumber = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var rightAnswer;
var notRightAnswer;
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
    questionNumber = 0;
    startGame(exampleQuestion,questionNumber, rightAnswer);
});


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

function startGame(exampleQuestion, questionNumber, rightAnswer)
{
    for (z=0; z<exampleQuestion.Asks.length; z++)
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
            display(exampleQuestion, questionNumber, rightAnswer);

        } while (myTimer = false);
    }

    //when the game ends re-display the start game button
    //var b = document.getElementById("starter");
    //b.style = "block"
}

function outOfTime()
{
    clearTimeout(myTimer);
    reset();

    incorrectAnswers++;
    var correct = exampleQuestion.Asks[questionNumber].correctAnswer;
    notRightAnswer = "<p> You ran out of time.  The correct answer was: "+exampleQuestion.Asks[questionNumber].qAnswers[correct]+".";
    $("#totalIncorrect").html("<h2>Incorrect Answers: "+incorrectAnswers+"</h2>");
    questionIncriment();

//      wait for 10 seconds
    myTimer = setTimeout(questionIncriment, (1000*10));

    clearTimeout(myTimer);

    //recall the display function
    display(exampleQuestion, questionNumber, rightAnswer);

}

function questionIncriment()
{
    questionNumber++;

}

//  game over function
function gameEnd()
{
    clearTimeout(myTimer);
    reset();
    $("#questionDisplay").html("");
    $("#answerDisplay").html("<h2>The game is over.  If you would like to play again please press the 'Start Game' button.</h2>");
}

//  this function requires the question object and the question number
function display(exampleQuestion, questionNumber, rightAnswer)
{
    if(questionNumber < exampleQuestion.Asks.length)
    {
        //      //variable (string) to hold the question to display
        var currentQuestion = exampleQuestion.Asks[questionNumber].question;
        currentQuestion = "<h2>"+currentQuestion+"</h2>";

    //      //variable (array) to hold the possible answers
        var answerLinks = exampleQuestion.Asks[questionNumber].qAnswers;

    //      //variable (int) to hold the correct answer integer value
        rightAnswer = exampleQuestion.Asks[questionNumber].correctAnswer;
    //
        console.log("Right Answer Num: "+rightAnswer);
    //      //replaces all html in the div with id=questionDisplay 
        $("#questionDisplay").html(currentQuestion);

    //      //clears the html content in the div with id=answerDisplay, just in case its not empty
        $("#answerDisplay").html("<h2>Possible Answers:</h2>");

        //declare the anAnswer variable used in the for loop
        var anAnswer;
        var numberVal = 0;
        var possibleAnswer;
        
    //      //loop to append answers to the page
        for (i = 0; i < answerLinks.length; i++)
        {        
            possibleAnswer = answerLinks[i];
    //      //define the text for the link, which is itself also the link/button
            console.log(possibleAnswer);
            console.log(numberVal);
            //define the answer element text, value, and class
            anAnswer = $("<button>").text(possibleAnswer).val(numberVal).addClass("clickAnswer");
            
            //incriments the numberVal variable so that on the subsequent intterations of the loop it assigns unique number values
            numberVal++;

            //show the answer on the page
            $("#answerDisplay").append(anAnswer);
            $("#answerDisplay").append("<br><br>");;
        }
    }
    else
    {
        gameEnd();
    }
}

//  //functional click listeners for all answers done by class, limited by timer
//  
$("body").on("click",".clickAnswer", function()
{
    var userChoice = $(this).attr("val");
    console.log(userChoice);
    //cancel the 30 second timer.....but it doesn't appear to be working
    clearTimeout(myTimer);
    //reset the display clock to 00:00......but it doesn't appear to be working
    reset();
    //this.val is DEFINITELY not passing the value that is assigned to the button
    console.log("This value: "+this.val);
    if(userChoice === rightAnswer)
    {
        correctAnswers++;
        $("#answerDisplay").html("<h2>Congratulations, you chose the right answer!</h2>");
        $("#totalCorrect").html("<h2>Correct Answers: "+correctAnswers+"</h2>");
        questionIncriment();

        //startDelay();
//          wait 10 seconds
        myTimer = setTimeout(questionIncriment, (1000*10));

        //recall the display function
        display(exampleQuestion, questionNumber, rightAnswer);
    }

    else 
    {
        incorrectAnswers++;
        notRightAnswer = "<h2> You chose the wrong answer.  The correct answer was: "+exampleQuestion.Asks[questionNumber].qAnswers[exampleQuestion.Asks[questionNumber].correctAnswer]+".</h2>";
        $("#answerDisplay").html(notRightAnswer);
        $("#totalIncorrect").html("<h2>Incorrect Answers: "+incorrectAnswers+"</h2>");
        questionIncriment();

        //startDelay();
//          wait 10 seconds
        myTimer = setTimeout(questionIncriment, (1000*10));

        //recall the display function
        display(exampleQuestion, questionNumber, rightAnswer);
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
    //intervalId = setInterval(count, (1000*30));
    count(1000*30);
}

//this function starts the 10 second between question timer
function startDelay() 
{
    //intervalId = setInterval(count, (1000*10));
    count(1000*10);
}

//this function stops the timer, and will be used in conjunction with setting a new timer duration
//function stop() 
//{
    //console.log("stopping");
//    clearInterval(intervalId);
//}

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