// function resolveAfter2Seconds(x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }
//
// async function add1(x) {
//   var a = resolveAfter2Seconds(20);
//   var b = resolveAfter2Seconds(30);
//   return x + await a + await b;
// }
//
// add1(10).then(v => {
//   console.log(v);  // prints 60 after 2 seconds.
// });
//
// async function add2(x) {
//   var a = await resolveAfter2Seconds(20);
//   var b = await resolveAfter2Seconds(30);
//   return x + a + b;
// }
//
// add2(10).then(v => {
//   console.log(v);  // prints 60 after 4 seconds.
// });


// var counter = 1;
// var callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 1000);
//
//   counter += 1;
//
//   if (counter > 10) {
//     clearTimeout(timeoutId);
//   }
// };
//
// var timeoutId = setTimeout(callbackFunction, 1000);


// var counter = 1;
//
// var callbackFunction = function (){
//   console.log(counter);
//
//   if(counter < 10){
//     setTimeout(callbackFunction,1000);
//   }
//     counter += 1;
// };
//
// setTimeout(callbackFunction,1000);


// var counter = 10;
//
// var callbackFunction = function (){
//   console.log("(1)",counter);
//
//   if(counter > 1){
//     setTimeout(callbackFunction,1000);
//   }
//   else{
//     setTimeout(console.log("BOOM!!"),1000);
//   }
//     counter -= 1;
// };
//
// setTimeout(callbackFunction,1000);
//
// console.log("***");
//
// var i = 10;
// var intervalId = setInterval(function() {
//   if (i > 0) {
//     console.log("(2)",i);
//   } else {
//     console.log("Pop!");
//     clearInterval(intervalId);
//   }
//
//   i--;
// }, 1000);

// var myCounterRecursive = function(counter){
//   console.log(counter);
//   counter-=1;
//
//  if(counter === 0){
//     console.log("boom");
//   }
//   else if(counter > 0){
//     setTimeout(myCounterRecursive(counter),1000);
//     // setTimeout(myCounterRecursive(counter), 1000);
//   }
// };
// myCounterRecursive(10);


// var callbackFunction = function (counter){
//   console.log("(1)",counter);
//   if(counter > 1){
//     counter -= 1;
//     setTimeout(callbackFunction(counter),1000);
//   }
//   else{
//     setTimeout(console.log("BOOM!!"),1000);
//   }
// };
//
// setTimeout(callbackFunction(10),1000);

var callbackFunction = function (counter){

  if(counter >= 1){
    console.log("(1)",counter);
        counter -= 1;
    setTimeout(callbackFunction(counter),1000);
  }
  else{
    setTimeout(console.log("BOOM!!"),1000);
  }

};

setTimeout(callbackFunction(10),1000);


// var i = 10;
// var intervalId = setInterval(function(10) {
//   if (i > 0) {
//     console.log("(2)",i);
//   } else {
//     console.log("Pop!");
//     clearInterval(intervalId);
//   }
//
//   i--;
// }, 1000);
