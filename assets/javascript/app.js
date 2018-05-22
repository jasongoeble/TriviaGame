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


//      reset timer to 30 seconds
//      start timer




//questions objects held in an array:
//  x questions
//      text string
//  4 answers
//      text strings
//  1 valid answer
//      integer

//ex:
//  var exampleQuestion = [
//      {
//          question: "text of first question",
//          qAnswers: ["a", "b", "c", "d"],
//          images: ["../assets/images/somePicture.png"],
//          correctAnswer: integer 0-3
//      }        
//  ]

//will probably use a display function that replaces the HTML in a div for both questions and answers
//will need to create click listeners for each of the answers

//global variables
//  questionNumber = 0;
//  correctAnswers = 0;
//  incorrectAnswers = 0;

//  global loop to display questions
//  for (z = 0; z < exampleQuestion.length)
//  {
//      display(exampleQuestion,questionNumbeR);
//      z++
//  }

//  when there are no more questions
//  endGameResults(correctAnswers, incorrectAnswers);

//  this function requires the question object and the question number
//  function display(exampleQuestion, questionNumber)
//  {

//      need to call global timer and set to 30 seconds and start

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
//          anAnswer.addClass(clickAnswer);

//          //if the above line does not work, then the following should:
//          anAnswer.classList.add("clickAnswer");

//          //show the answer on the page
//          $("#answerDisplay").append(anAnswer);
//      }

//}

//  //functional click listeners for all questions done by class
//  $(".anAnswer").click(function()
//  {

//      need to stop global timer

//      var notRightAnswer;

//      if(this.attr("value") === rightAnswer)
//      {

//          need to set global timer to 10 seconds and start timer

//          questionNumber++;
//          $("#answerDisplay").html("Congratulations, you chose the right answer!")

//      }

//      else 
//      {

//          need to set global timer to 10 seconds and start timer

//          questionNumber++;
//          notRightAnswer = "<p> You chose the wrong answer.  The correct answer was: "+exampleQuestion[questionNumber].qAnswers[exampleQuestion.correctAnswer]+".</p>";
//          $("answerDisplay").html(notRightAnswer);


//      }
//  }

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


//      reset timer to 30 seconds
//      start timer




//questions objects held in an array:
//  x questions
//      text string
//  4 answers
//      text strings
//  1 valid answer
//      integer

//ex:
//  var exampleQuestion = [
//      {
//          question: "text of first question",
//          qAnswers: ["a", "b", "c", "d"],
//          images: ["../assets/images/somePicture.png"],
//          correctAnswer: integer 0-3
//      }        
//  ]

//will probably use a display function that replaces the HTML in a div for both questions and answers
//will need to create click listeners for each of the answers

//global variables
//  questionNumber = 0;
//  correctAnswers = 0;
//  incorrectAnswers = 0;

//  global loop to display questions
//  for (z = 0; z < exampleQuestion.length)
//  {
//      display(exampleQuestion,questionNumbeR);
//      z++
//  }

//  when there are no more questions
//  endGameResults(correctAnswers, incorrectAnswers);

//  this function requires the question object and the question number
//  function display(exampleQuestion, questionNumber)
//  {

//      need to call global timer and set to 30 seconds and start

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
//          anAnswer.addClass(clickAnswer);

//          //if the above line does not work, then the following should:
//          anAnswer.classList.add("clickAnswer");

//          //show the answer on the page
//          $("#answerDisplay").append(anAnswer);
//      }

//}

//  //functional click listeners for all questions done by class
//  $(".anAnswer").click(function()
//  {

//      need to stop global timer

//      var notRightAnswer;

//      if(this.attr("value") === rightAnswer)
//      {

//          need to set global timer to 10 seconds and start timer

//          questionNumber++;
//          $("#answerDisplay").html("Congratulations, you chose the right answer!")

//      }

//      else 
//      {

//          need to set global timer to 10 seconds and start timer

//          questionNumber++;
//          notRightAnswer = "<p> You chose the wrong answer.  The correct answer was: "+exampleQuestion[questionNumber].qAnswers[exampleQuestion.correctAnswer]+".</p>";
//          $("answerDisplay").html(notRightAnswer);


//      }
//  }
