var feedback = document.getElementById("feedback");

var userGuess = document.getElementById("userGuess");

var submitGuess = document.getElementById("submitGuess");

var newGame = document.getElementById("newGame");

//A guess game, design by Abimbola Idowu, with Love from Andela....hehehehe

function guessGame () {
  //all variables are declared here
  var computerGuess;
  //generates computer guess
  computerGuess = Math.floor(Math.random() * 100);
  //
  console.log(computerGuess);
  return checkGuess(computerGuess);
}

function checkGuess(computerGuess) {
  previousGuess = 0;
  if (typeof userGuess != "number") {
    previousGuess = 0;
  } else {
    previousGuess = userGuess;
  }
  //userInfo = "Please Enter a Guess between 0 and 100";
  //feedback.innerText = userInfo;
  //userGuess = prompt(userInfo);
  userValue = userGuess.value; //converts userGuess to a number
  if (userValue == computerGuess) {
    feedback.innerHTML = "You guess it";
    return;
  } else {
    feedback.innerHTML = testGuess(computerGuess, userValue, previousGuess);
    return checkGuess(computerGuess);
  }
}

function testGuess(computerGuess, userGuess, previousGuess) {
  if (Math.abs(computerGuess - userGuess) < Math.abs(computerGuess - previousGuess)) {
    return "Getting Hotter";
  } else if (Math.abs(computerGuess - userGuess) > Math.abs(computerGuess - previousGuess)) {
    return "Getting Colder";
  } else if (Math.abs(computerGuess - userGuess) == Math.abs(computerGuess - previousGuess)) {
    return "Neither Colder nor Hotter";
  }
}








