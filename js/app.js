var game = {
  //Gives feedback back to the user
  feedback: document.getElementById("feedback"),
  //userGuess
  userGuess: document.getElementById("userGuess"),
  //when user clicks the submit button
  submitGuess: document.getElementsByTagName("button")[0],
  //when user clicks new game
  newGame: document.getElementsByTagName("button")[1],
  //all variables used declared here
  computerGuess: 0,
  previousGuess: 0,

  init: function () {
    this.guessGame();
    this.newGameListener();
    this.submitGuessListener();
  },
  //generates random number from 0 to 100
  guessGame: function () {
    this.computerGuess = Math.floor(Math.random() * 100);
    this.feedback.innerHTML = "Please Enter a Guess(Number) between 0 and 100";
    console.log(this.computerGuess);
    userGuess.value = "";
  },

  //compares user guess against, computer guess
  compareGuess: function (userGuessValue) {
    if (userGuessValue == this.computerGuess) {
      this.feedback.innerHTML = "Your guess is correct!";
    } else {
      this.testGuess(this.computerGuess, userGuessValue, this.previousGuess);
    }
    //sets, the previous guess of the user
    if (this.previousGuess != userGuessValue) {
      this.previousGuess = userGuessValue;
    }
    this.userGuess.value = "";
  },

  //gives feedback base on the user previous input
  testGuess: function(computerGuess, userGuess, previousGuess) {
    //creates variable to reduce repetition
    console.log(computerGuess, userGuess, previousGuess)
    var compUserDiff = Math.abs(computerGuess - userGuess);
    var compPrevDiff = Math.abs(computerGuess - previousGuess);
    if (compUserDiff < compPrevDiff) {
      this.feedback.innerHTML = "Getting Hotter!";
    } else if (compUserDiff > compPrevDiff) {
      this.feedback.innerHTML = "Getting Colder!";
    } else if (compUserDiff == compPrevDiff) {
      this.feedback.innerHTML = "Neither Colder nor Hotter!";
    }
  },
  //checks if user input is valid
  checkGuess: function() {
    var userGuessValue;
    if (/[^0-9]/g.test(this.userGuess.value) || userGuessValue > 100) {
      this.feedback.innerHTML = "Please Enter a number between 0 and 100 only";
    } else {
      userGuessValue = +this.userGuess.value //converts user guess to a number and stores in a new variable
      this.compareGuess(userGuessValue);
    }
    userGuess.value = "";
  },

  //EventListeners
  //when New game button is press, guessgame function is called
  newGameListener: function () {
    this.newGame.addEventListener("click", function () {
      game.guessGame();
    });
  }, 
  //when submit button is pressed, checkguess is called
  submitGuessListener: function () {
    this.submitGuess.addEventListener("click", function () {
      game.checkGuess();
    });
  } 

}

//calls guessGame, when windows loads
game.init();