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
  userInfo = "Please Enter a Guess between 0 and 100";
  userGuess = prompt(userInfo);
  userGuess = +userGuess; //converts userGuess to a number
  if (userGuess === computerGuess) {
    return "You guess it";
  } else {
    console.log(testGuess(computerGuess, userGuess, previousGuess));
    return checkGuess(computerGuess);
  }
}
guessGame();

function testGuess(computerGuess, userGuess, previousGuess) {
  if (Math.abs(computerGuess - userGuess) < Math.abs(computerGuess - previousGuess)) {
    console.log("Getting Hotter");
  } else if (Math.abs(computerGuess - userGuess) > Math.abs(computerGuess - previousGuess)) {
    console.log("Getting Colder");
  } else if (Math.abs(computerGuess - userGuess) == Math.abs(computerGuess - previousGuess)) {
    console.log("Neither Colder nor Hotter");
  }
}








