// Use this file to write the logic of your game, the needed attrs and functions

// We will create the constructor function for TenSecondsMathGame. This function will:
//
// Receive the operation selected by the user and the upper limit of the this.numbers to be used in the problems as parameters.
// Set the operation the user selected to play with.
// Set the upper limit of the this.numbers to be used in the problems.

function TenSecondsMathGame(op, limit) {
  this.op = op;
  this.limit = limit;
  this.numbers = [];
  this.result = 0;

  this.newQuestion = function() {
    var n1, n2;
    n1 = Math.floor(Math.random() * (this.limit) + 1);
    n2 = Math.floor(Math.random() * (this.limit) + 1);
    this.numbers = [n1, n2];

    function sortNumber(a, b) {
      return a - b;
    }
    this.numbers.sort(sortNumber); // order numbers ascending
    function makeDivisible(numbers) {
      while (numbers[1] % numbers[0] !== 0) {numbers[1]++;}
      return numbers;
    }
    this.numbers = makeDivisible(this.numbers);



    switch (op) {
      case "addition":
        this.result = this.numbers[1] + this.numbers[0];
        console.log("" + this.numbers[1] + " + " + this.numbers[0] + "");
        break;
      case "subtraction":
        this.result = this.numbers[1] - this.numbers[0];
        console.log("" + this.numbers[1] + " - " + this.numbers[0] + "");
        break;
      case "multiplication":
        this.result = this.numbers[1] * this.numbers[0];
        console.log("" + this.numbers[1] + " * " + this.numbers[0] + "");
        break;
      case "division":
        this.result = this.numbers[1] / this.numbers[0];
        console.log("" + this.numbers[1] + " / " + this.numbers[0] + "");
        break;
      default:
    }
  };

  this.isCorrectAnswer = function(attempt) {
    if (attempt !== this.result) {
      console.log("WROONG");
    } else {
      console.log("SUCCESS!");
    }
  };

}
console.log("as");
var a = new TenSecondsMathGame("division", 10);

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answerx
