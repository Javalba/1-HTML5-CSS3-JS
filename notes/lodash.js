

var opinions = ["This is the best job ever", "Satisfied", "At least I get paid","I m looking for another job","I don\' t want to answer"];

var depAlfa =     ["","","","","","","","","",""];
var depBeta =     ["","","","","","","","","",""];
var depCharlie =  ["","","","","","","","","",""];
var depDelta =    ["","","","","","","","","",""];
var depEco =      ["","","","","","","","","",""];

//console.log(fillOpinions(depAlfa));

//returns random idx of array
// function randomOpinion(array) {
//   return Math.floor(Math.random() * array.length);
// }
//
// //fill the departments with the random opinions
// function fillOpinions(array) {
//   for (var i = 0; i < array.length; i++) {
//     array[i] = opinions[randomOpinion(opinions)];
//   }
//   return array;
// }

_.shuffle(opinions);

var prueba = function(){
  opinions = _.shuffle(i);
};

console.log(prueba);
