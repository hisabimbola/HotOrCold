// var feedback = document.getElementById("feedback");

// var userGuess = document.getElementById("userGuess");

// var submitGuess = document.getElementsByTagName("button")[0];

// var newGame = document.getElementsByTagName("button")[1];

// var computerGuess;
// //Generates a random number from 0 to 100
// function guessGame () {  
//   //generates computer guess
//   computerGuess = Math.floor(Math.random() * 100);
//   //console.log(computerGuess);
//   return computerGuess;
// }

// function checkGuess(computerGuess) {
//   var previousGuess;
//   console.log(computerGuess)
//   if (typeof userValue != "number") {
//     previousGuess = 0;
//   } else {
//     previousGuess = userValue;
//   }
//   console.log(previousGuess);
//   //userInfo = "Please Enter a Guess between 0 and 100";
//   //feedback.innerText = userInfo;
//   //userGuess = prompt(userInfo);
//   userValue = userGuess.value; //converts userGuess to a number
//   if (userValue == computerGuess) {
//     feedback.innerHTML = "You guessed it";
//     return;
//   } else {
//     feedback.innerHTML = testGuess(computerGuess, userValue, previousGuess);
//     return checkGuess(computerGuess);
//   }
// }

// function testGuess(computerGuess, userGuess, previousGuess) {
//   if (Math.abs(computerGuess - userGuess) < Math.abs(computerGuess - previousGuess)) {
//     return "Getting Hotter";
//   } else if (Math.abs(computerGuess - userGuess) > Math.abs(computerGuess - previousGuess)) {
//     return "Getting Colder";
//   } else if (Math.abs(computerGuess - userGuess) == Math.abs(computerGuess - previousGuess)) {
//     return "Neither Colder nor Hotter";
//   }
// }

// //Event Listener to call the guessGame once user submit data
// //window.onload = guessGame;
// submitGuess.addEventListener("click", checkGuess(computerGuess));
// newGame.addEventListener("click", guessGame);


var feedback = document.getElementById("feedback");

var userGuess = document.getElementById("userGuess");

var submitGuess = document.getElementsByTagName("button")[0];

var newGame = document.getElementsByTagName("button")[1];
var computerGuess, 
    previousGuess = 0,
    userGuessValue;
newGame.addEventListener("click", guessGame);
submitGuess.addEventListener("click", checkGuess);

function guessGame () {  
  computerGuess = Math.floor(Math.random() * 100);
  return computerGuess;
}

function checkGuess () {
  userGuessValue = +userGuess.value
  
  if (userGuessValue === computerGuess) {
    feedback.innerHTML = "Your guess is correct!";
  } else {
    testGuess(computerGuess, userGuessValue, previousGuess);
  }
  if (previousGuess != userGuessValue) {
    previousGuess = userGuessValue;
  }
  userGuess.value = "";
}

function testGuess(computerGuess, userGuess, previousGuess) {
  if (Math.abs(computerGuess - userGuess) < Math.abs(computerGuess - previousGuess)) {
    feedback.innerHTML = "Getting Hotter";
  } else if (Math.abs(computerGuess - userGuess) > Math.abs(computerGuess - previousGuess)) {
    feedback.innerHTML = "Getting Colder";
  } else if (Math.abs(computerGuess - userGuess) == Math.abs(computerGuess - previousGuess)) {
    feedback.innerHTML = "Neither Colder nor Hotter";
  }
}































