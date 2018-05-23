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
//  questionNumber = 0;
//  correctAnswers = 0;
//  incorrectAnswers = 0;
//  var notRightAnswer;


//  for (z=0; z<exampleQuestion.length; z++)
//  {
//      sets display clock to 00:00
//      reset();

//      sets maximum waiting duration for an answer
//      setTimeout(outOfTime, (1000*30));

//      starts the question countup display
//      startQuestion();

//      so long as the maximum wait time hasn't been met display a question
//      do
//      {
//          display(exampleQuestion, questionNumber);

//      } while (setTimeout !=);
//  }

//  function outOfTime()
//  {
//      clearTimeout();
//      notRightAnswer = "<p> You ran out of time.  The correct answer was: "+exampleQuestion[questionNumber].qAnswers[exampleQuestion[questionNumber].correctAnswer]+".</p>";
//      $("answerDisplay").html(notRightAnswer);
//      questionIncriment();

//      stop();
//      reset();
//      startDelay();

//      wait for 10 seconds
//      setTimeout(questionIncriment, (1000*10));
//      stop();
//      clearTimeout();

//  }

//  function questionIncriment()
//  {
//      questionNumber++;
//  }


//  this function requires the question object and the question number
//  function display(exampleQuestion, questionNumber)
//  {

//      //variable (string) to hold the question to display
//      var currentQuestion = exampleQuestion[questionNumber].question;
//      currentQuestion = "<p>"+currentQuestion+"</p>";

//      //variable (array) to hold the possible answers
//      var answerLinks = exampleQuestion[questionNumber].qAnswers;

//      //variable (int) to hold the correct answer integer value
//      var rightAnswer = exampleQuestion[questionNumber].correctAnswer;
//
//      //replaces all html in the div with id=questionDisplay 
//      $("#questionDisplay").html(currentQuestion);

//      //clears the html content in the div with id=answerDisplay, just in case its not empty
//      $("answerDisplay").html("");

//      //loop to append answers to the page
//      for (i = 0; i < answerLinks.length; i++)
//      {
//          var anAnswer;

//          //define the text for the link, which is itself also the link/button
//          anAnswer.text(answerLinks[i]);

//          //define the integer value for the link/button
//          anAnswer.value(i);

//          //define the class for the answer link/button, will be used to register a click on any answer
//          anAnswer.addClass("clickAnswer");

//          //show the answer on the page
//          $("#answerDisplay").append(anAnswer);
//      }

//}

//  //functional click listeners for all answers done by class, limited by timer
//  
//  $(".anAnswer").click(function()
//  {

//      clearTimeout();
//      stop();

//      if(this.attr("value") === rightAnswer)
//      {
//          correctAnswers++;
//          $("#answerDisplay").html("Congratulations, you chose the right answer!")

//          startDelay();
//          wait 10 seconds
//          setTimeout(questionIncriment, (1000*10));
//          stop();
//      }

//      else 
//      {
//          incorrectAnswers++;
//          notRightAnswer = "<p> You chose the wrong answer.  The correct answer was: "+exampleQuestion[questionNumber].qAnswers[exampleQuestion[questionNumber].correctAnswer]+".</p>";
//          $("answerDisplay").html(notRightAnswer);

//          startDelay()
//          wait 10 seconds
//          setTimeout(questionIncriment, (1000*10));
//          stop();
//      }
//  }
//  

//  when there are no more questions
//  endGameResults(correctAnswers, incorrectAnswers);

//  function endGameResults(correctAnswers, incorrectAnswers)
//  {
//  here is where the code will go to display the total correct
//  and incorrect answers, as well as their successful percentage.
//  will need to include a way to re-start, possibly just reset questionNumber to 0?
//  }

var intervalId;

// resets the timer, sets time display to 0 seconds
// function reset() 
//{
//  time = 0;
//  $("#display").text("00:00");
// }

//this functions starts the 30 second question timer
// function startQuestion() 
// {
//  intervalId = setInterval(count, (1000*30);
// }

//this function starts the 10 second between question timer
// function startDelay() 
// {
//  intervalId = setInterval(count, (1000*10);
// }

//this function stops the timer, and will be used in conjunction with setting a new timer duration
// function stop() 
// {
//  console.log("stopping");
//  clearInterval(intervalId);
// }

//this function incriments the counter and updates the timerDisplay field on the page
// function count() {

//   time++;
//   var converted = timeConverter(time);
//   $("#timeDisplay").text(converted);

// }

//this function converts the millisecond duration to display as mm:ss
// function timeConverter(t) {

//   var minutes = Math.floor(t / 60);
//   var seconds = t - (minutes * 60);

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   if (minutes === 0) {
//     minutes = "00";
//   }
//   else if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   return minutes + ":" + seconds;
// }

