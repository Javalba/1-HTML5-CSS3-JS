console.log("My name is Bob, and I'm writing JavaScript");

//USE LET IN FUTURE, FOREVER!
var name = ""; // --> ""
var name2; //--> undefined


var myValue = "This is a string";
console.log(myValue);

myValue = 2;
console.log(myValue);

console.log(5 % 3);

var number1 = "1";
var number2 = (4 / 4);

console.log('==' + (number1 == number2));
console.log('===' + (number1 === number2));

//EXAMPLE OF '' and ""
console.log("aaaa\nbbbb");
console.log("It's \"game\" time.");
console.log('It\'s "game" time.');

var greeting = "Hello";
console.log("Hello");
console.log("greeting[-1]-->", greeting[-1]);
console.log("greeting[0]-->", greeting[0]);
console.log("greeting[2]-->", greeting[2]);
console.log("greeting[4]-->", greeting[4]);
console.log("greeting[5]-->", greeting[5]);

var phrase = "Don't be evil";
console.log(phrase.indexOf("evil"));
console.log(phrase.indexOf("'"));
console.log(phrase.indexOf('\''));

var var1 = "My favorite dessert is jello";
console.log("Write code that finds the index of the letter “j” in My favorite dessert is jello.\n ", var1.indexOf("j"));

console.log("Write code that finds the index of the letter “s” in My favorite dessert is jello");
var str = "My favorite dessert is jello";
var indices = [];
for (var i = 0; i < str.length; i++) {
  if (str[i] === "s") indices.push(i);
}
console.log(indices);



var language = prompt("Idioma?");

if (language === "Spanish") {
  console.log("Hola mundo");
} else {
  if (language === "French") {
    console.log("Bonjour tout le monde");
  } else {
    console.log("Hello world");
  }
}

//https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
