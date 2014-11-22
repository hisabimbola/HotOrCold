//Gives feedback back to the user
var feedback = document.getElementById("feedback");
//userGuess
var userGuess = document.getElementById("userGuess");
//when user clicks the submit button
var submitGuess = document.getElementsByTagName("button")[0];
//when user clicks new game
var newGame = document.getElementsByTagName("button")[1];
//all variables used declared here
var computerGuess, 
    previousGuess = 0,
    userGuessValue;

//EventListeners
//when New game button is press, guessgame function is called
newGame.addEventListener("click", guessGame);
//when submit button is pressed, checkguess is called
submitGuess.addEventListener("click", checkGuess);

//calls guessGame, when windows loads
window.onload = guessGame;

//generates random number from 0 to 100
function guessGame () {  
  computerGuess = Math.floor(Math.random() * 100);
  feedback.innerHTML = "Please Enter a Guess between 0 and 100";
  return computerGuess;
}
//compares user guess against, computer guess
function compareGuess () {
  
  if (userGuessValue === computerGuess) {
    feedback.innerHTML = "Your guess is correct!";
  } else {
    testGuess(computerGuess, userGuessValue, previousGuess);
  }
  //sets, the previous guess of the user
  if (previousGuess != userGuessValue) {
    previousGuess = userGuessValue;
  }
  userGuess.value = "";
}

//gives feedback base on the user previous input
function testGuess(computerGuess, userGuess, previousGuess) {
  //creates variable to reduce repetition
  var compUserDiff = Math.abs(computerGuess - userGuess);
  var compPrevDiff = Math.abs(computerGuess - previousGuess);
  if (compUserDiff < compPrevDiff) {
    feedback.innerHTML = "Getting Hotter!";
  } else if (compUserDiff > compPrevDiff) {
    feedback.innerHTML = "Getting Colder!";
  } else if (compUserDiff == compPrevDiff) {
    feedback.innerHTML = "Neither Colder nor Hotter!";
  }
}

//checks if user input is valid
function checkGuess () {
  userGuessValue = +userGuess.value //converts user guess to a number and stores in a new variable
  if (userGuessValue == 0) {
    feedback.innerHTML = "Please Enter a number";
  } else {
    compareGuess()
  }
}






























