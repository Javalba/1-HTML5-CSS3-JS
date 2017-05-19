/* Iteration 1 - The Office */

// var depAlfa =     ["","","","","","","","","",""];
// var depBeta =     ["","","","","","","","","",""];
// var depCharlie =  ["","","","","","","","","",""];
// var depDelta =    ["","","","","","","","","",""];
// var depEco =      ["","","","","","","","","",""];

// var employeeSatisfaction = function() {
//
//   //Create opinions
//   // console.log(fillOpinions(depAlfa));
//   // console.log(fillOpinions(depBeta));
//   // console.log(fillOpinions(depCharlie));
//   // console.log(fillOpinions(depDelta));
//   // console.log(fillOpinions(depEco));
//   //
//   // console.log("Employee satisfaction: ");
//   console.log(fillDepartaments(5, 10));
// };

/* Iteration 1 - The Office */
var opinions = ["This is the best job ever", "Satisfied", "At least I get paid", "I m looking for another job", "I don\' t want to answer"];
var departaments = [];
// var employeeSatisfaction = fillDepartaments(5, 10);
var departaments = fillDepartaments(5,10);
console.log("DEPARTAMENTS -->", departaments);
//console.log("5 Departaments with 10 ops each one", employeeSatisfaction);

/**
 * fill a specefic quantity of departaments with a specefic opinions
 * @param   qty [quantity of departaments]
 * @param   ops [quantity opinions for each departament]
 * @return  departaments
 */
function fillDepartaments(qty, ops) {
  departaments.push(_.times(qty, fillOpinions(10)));
  return departaments;
}

/**
 * Return department with 'ops' opinions
 * @param  ops quantity of opinions
 * @return departamnt
 */
function fillOpinions (ops){
  var departament=[];
  for (var j = 0; j < ops; j++) {
    departament.push(_.sample(opinions));
  }
  return departament;
}


// var newArray = [];
// newArray.push(_.times(10, function() {
//   return _.sample([ "This is the best job ever",
//                    "Satisfied",
//                    "At least I get paid",
//                    "I'm looking for another job",
//                    "I don't want to answer"]);
// }));
// console.log("",newArray);
/*ITERATION 2*/


/*ITERATION 3*/

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {

var result = _.filter(password, function(value, index, iterate){
  return _.includes(iterate,value,index+1);
});

if(result.lenght<1){
console.log("good");
}
else{
  console.log("bad");
}
};

console.log("GOOD-->",noRepeatChar(goodPsswd));
console.log("BAD",noRepeatChar(badPsswd));
