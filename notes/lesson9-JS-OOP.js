var car = {
  name: 'Knight Industries Two Thousand',
  isOn: false,
  sayMyName: function() {
    console.log("My name is " + this.name);
  },
  start: function() {
    this.isOn = true;
  },
  stop: function() {
    this.isOn = false;
  }
};


car.sayMyName();
// => My name is Knight Industries Two Thousand

car.start();
// => now isOn === true
console.log(car.isOn);

car.stop();
// => now isOn === false
console.log(car.isOn);



function Car(name) {
  this.name = name;
  this.sayMyName = function() {
    console.log("This car's name is " + this.name);
  };
}

var kitt = new Car("Knight Industries Two Thousand");
var modelS = new Car("Tesla Model S SuperCar");

kitt.sayMyName(); // => My name is Knight Industries Two Thousand
modelS.sayMyName(); // => My name is Tesla Model S SuperCar




function BlackjackGame() {
  this.total = 0;
  this.card = 0;
  this.nextCard = function() {
    this.card = parseInt((Math.random() * 13) + 1); // number between 1-13
    console.log("Next Card... " + this.card);
  };
  this.play = function() {
    this.nextCard();
    this.total += this.card;
    this.checkResult();
  };
  this.stand = function() {
    this.total = 0;
    console.log("Scared huh? Let's start again");
  };
  this.checkResult = function() {
    console.log("Total = " + this.total);
    if (this.total > 21) {
      console.log("You lose! Play Again?");
      this.total = 0;
    } else if (this.total == 21) {
      console.log("You Win!  Play Again?");
      this.total = 0;
    }
  };
}

var game = new BlackjackGame();

game.play();
//=> CARD = 9
//=> Total = 9

game.play();
//=> CARD = 11
//=> Total = 20

game.stand();
//=> Scared huh? Let's start again

game.play();
//=> CARD = 12
//=> Total = 12

game.play();
//=> CARD = 11
//=> Total = 21
//=> You Win!  Play Again?

function Animal(name, owner) {
  this.name = name;
  this.owner = owner;
}

var myAnimal = new Animal("Arya", "Josephine");

console.log(myAnimal);


function Item(name, price) {
  this.name = name;
  this.price = price;

  this.applyDiscount = function() {
    this.price = price / 2;
  };
}



function Item(name, price) {
  this.name = name;
  this.price = price;


  this.showName = function() {
    console.log("" + this.name);
  };
}

Item.prototype.calculatePrice = function() {
  if (this.name === "fruit") {
    this.price = this.price - this.price * 0.05;
    return console.log(this.price);
  } else return console.log(this.price);

};

var ball = new Item('soccer ball', 15);
console.log("soccer ball, 15");
ball.calculatePrice();
// => 15

var fruit = new Item('fruit', 10);
console.log("fruit,10");
fruit.calculatePrice();
// => 9.5

// Item.prototype.calculatePrice = function() {
//
// }
//
// var ball = new Item('soccer ball', 15);
// ball.calculatePrice();
// // => 15
//
// var fruit = new Item('fruit', 10);
// fruit.calculatePrice();
// // => 9.5
//

// Add a Fruit constructor to the previous examples. This constructor will inherit from Item and have the next properties:
// Expiration date
// Brand

function Fruit(name, price, exp_date, brand) {
  Item.call(this, name, price);
  this.exp_date = exp_date;
  this.brand = brand;
}

var apple = new Fruit('Apple', '0.20', '19/05/2017', "Golden");
console.log("Fruit-->", apple);

apple.showName();
