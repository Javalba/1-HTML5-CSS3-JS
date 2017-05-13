var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]


/*¿¿¿¿PORQUE????*/
var names = {
  name1: ["javier"]
};
var copyName1=names;
//var lastState = JSON.parse(JSON.stringify(rover)); //Store last state by value

console.log("name1 -->",names.name1);
console.log("copyName1-->",copyName1.name1);
changeName("pepito");
console.log("name1 -->",names.name1);
console.log("copyName1-->",copyName1.name1);

function changeName(name){names.name1 = name;}



function doSomethingWithAFunction(name, functionToCall){
  functionToCall(name);
}
                                       // Anonymous Function
doSomethingWithAFunction("Ironhacker", function(someParameter){console.log("Hello " + someParameter);} );
// => Hello Ironhacker
//
//
//

console.log("**************************");

 function avg(array) {
  for (var sum=0, i=0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

var ratingsShow1 = [1, 3, 1, 1, 5, 4, 3, 5, 5, 5, 3, 3, 1, 1, 2, 4, 4, 1, 2];
var ratingsShow2 = [2, 1, 4, 5, 3, 4, 2, 1, 3, 4, 3, 2];

console.log('The average rating of show1 is ' + avg(ratingsShow1));
console.log('The average rating of show2 is ' + avg(ratingsShow2));
console.log('The average rating of show3 is ' + avg([2, 3, 1, 3]));

// which show has the highest average of ratings?


var arrayNames = ["Pedro", "Jake", "Joan"];

arrayNames.push("Rachel");

console.log(arrayNames[3]);
/*PUSH first element?*/

var arrayNames = ["Pedro", "Jake", "Joan"];

console.log(arrayNames[0]);
console.log(arrayNames);
arrayNames.splice(1,arrayNames.length); // (idx start, cut to the end)
console.log(arrayNames[0]);
console.log(arrayNames);

console.log("***********");

var arrayNames = ["Pedro", "Jake", "Joan"];

arrayNames.forEach(function(name){
  console.log(name);
});


function printStars(howMany){
  var stars = '';
  for (var i=0; i < howMany; i++) {
    stars += '*';
  }
  console.log(stars);
}

[1,2,3,4,5].forEach(function(num){
  printStars(num);
});
