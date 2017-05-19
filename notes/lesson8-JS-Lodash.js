// var array = [1, 2, 3];
//
// // The new array has the same elements of array
// // BUT each element is mapped to the value*2
// var newArray = array.map(function(number){
//   return number * 2;
// });
//
// console.log("MAP--> "+newArray);
// // [ 2, 4, 6 ]
//
//
// var array=[1,2,3];
// //
// // array.foreach(function(element){
// //   array
// // });
//
// var foods = ["pizza", "sandwiches", "ice cream"];
//
// var capsFoods = foods.map(function(food){
//   return food.toUpperCase();
// });
//
// console.log("Piza",capsFoods);
// // [ 'PIZZA', 'SANDWICHES', 'ICE CREAM' ]
//
//
// var cities = ["miami", "barcelona", "madrid"];
//
// var capsCities = cities.map(function(city){
//   return city.charAt(0).toUpperCase() + city.slice(1);
//   // return city.charAt(0).toUpperCase() + city.charAt(0);
// });
//
// console.log("Cities",capsCities);
// // ["Miami", "Barcelona", "Madrid"]
//
//
// var numbers = [2, 4, 6, 8];
//
// var total = numbers.reduce(function(previous, current, currentIndex, originalArray){
//   console.log(previous, current, currentIndex, originalArray);
//   return previous + current;
// }, 1);
//
// console.log("REDUCE",total);
// // 21
//
// var words = ["This", "is", "one", "big", "string"];
//
// var bigString = words.reduce(function(sum, word){
//   return sum + word;
// });
//
// console.log(bigString);
// // Thisisonebigstring
//
//
// var menu = [
//   { name: "Carrots", calories: 150 },
//   { name: "Steak", calories: 350 },
//   { name: "Broccoli", calories: 120 },
//   { name: "Chicken", calories: 250 },
//   { name: "Pizza", calories: 520 }
// ];
//
// var totalCalories = menu.reduce(function(sum,food){
//    return sum+food.calories;
//   //return sum+food["calories"];
// },0);
//
// // var averageCalories = totalCalories / Object.keys(menu).length;
// var averageCalories = totalCalories / menu.length;
//
// console.log("menu average--->"+averageCalories);
// // 278
//
//
// var people = [
//   { name: "Candice", age: 25 },
//   { name: "Tammy", age: 30 },
//   { name: "Allen", age: 49 },
//   { name: "Nettie", age: 21 },
//   { name: "Stuart", age: 17 },
//   { name: "Bill", age: 19 }
// ];
//
// var ofDrinkingAge = people.filter(function(person){
//   return person.age >= 21;
// });
//
// console.log(ofDrinkingAge);
// // [ { name: 'Candice', age: 25 },
// // { name: 'Tammy', age: 30 },
// // { name: 'Allen', age: 49 },
// // { name: 'Nettie', age: 21 } ]
//
//
//
// //Exercise 2
// var numbers = [1, 60, 112, 123, 100, 99, 73];
//
// var even = numbers.filter(function(element){
//   return element % 2 === 1 && element<42;
// });
// console.log(""+even+"\n\n\n");

/* MARIO.JS */
var mItems = [['Banana', 'Blooper', 'Bob-omb', 'Boomerang Flower', 'Bullet Bill'],
              ['Coin', 'Crazy 8'],
              ['Fire Flower'],
              ['Golden Mushroom', 'Green Shell'],
              ['Item Box'],
              ['Lightning'],
              ['Mushroom'],
              ['Piranha Plant'],
              ['Red Shell'],
              ['Spiny Shell/Blue Shell', 'Star', 'Super Horn'],
              ['Triple Bananas', 'Triple Green Shells', 'Triple Mushrooms', 'Triple Red Shells']];

var mCharacters = [{name: 'Baby Daisy'},
                   {name: 'Baby Luigi'},
                   {name: 'Baby Mario'},
                   {name: 'Baby Peach'},
                   {name: 'Baby Rosalina'},
                   {name: 'Bowser'},
                   {name: 'Daisy'},
                   {name: 'Donkey Kong'},
                   {name: 'Iggy'},
                   {name: 'Koopa Troopa'},
                   {name: 'Lakitu'},
                   {name: 'Larry'},
                   {name: 'Lemmy'},
                   {name: 'Ludwig'},
                   {name: 'Luigi'},
                   {name: 'Mario'},
                   {name: 'Metal Mario'},
                   {name: 'Mii'},
                   {name: 'Morton'},
                   {name: 'Peach'},
                   {name: 'Pink Gold Peach'},
                   {name: 'Rosalina'},
                   {name: 'Roy'},
                   {name: 'Shy Guy'},
                   {name: 'Toad'},
                   {name: 'Toadette'},
                   {name: 'Waluigi'},
                   {name: 'Wario'},
                   {name: 'Wendy'},
                   {name: 'Yoshi'}];


var mKarts = [{name: 'Standard Kart',     type: 'Kart'},
              {name: 'Pipe Frame',        type: 'Kart'},
              {name: 'Mach 8',            type: 'Kart'},
              {name: 'Steel Driver',      type: 'Kart'},
              {name: 'Cat Cruiser',       type: 'Kart'},
              {name: 'Circuit Special',   type: 'Kart'},
              {name: 'Tri-Speeder',       type: 'Kart'},
              {name: 'Badwagon',          type: 'Kart'},
              {name: 'Prancer',           type: 'Kart'},
              {name: 'Biddybuggy',        type: 'Kart'},
              {name: 'Landship',          type: 'Kart'},
              {name: 'Sneeker',           type: 'Kart'},
              {name: 'Sports Coupe',      type: 'Kart'},
              {name: 'Gold Standard',     type: 'Kart'},
              {name: 'GLA',               type: 'Kart'},
              {name: 'W 25 Silver Arrow', type: 'Kart'},
              {name: '300 SL Roadster',   type: 'Kart'},
              {name: 'The Blue Falcon',   type: 'Kart'},
              {name: 'B-Dasher',          type: 'Kart'},
              {name: 'Tanooki Kart',      type: 'Kart'},
              {name: 'Streetle',          type: 'Kart'},
              {name: 'Standard Bike',     type: 'Bike'},
              {name: 'Comet',             type: 'Bike'},
              {name: 'Sport Bike',        type: 'Bike'},
              {name: 'The Duke',          type: 'Bike'},
              {name: 'Flame Rider',       type: 'Bike'},
              {name: 'Varmint',           type: 'Bike'},
              {name: 'Mr. Scooty',        type: 'Bike'},
              {name: 'Jet Bike',          type: 'Bike'},
              {name: 'Yoshi Bike',        type: 'Bike'},
              {name: 'The Master Cycle',  type: 'Bike'},
              {name: 'City Tripper',      type: 'Bike'},
              {name: 'Standard ATV',      type: 'ATV'},
              {name: 'Wild Wiggler',      type: 'ATV'},
              {name: 'Teddy Buggy',       type: 'ATV'}];

 var player = {};
 //
console.log(_.flatten(mKarts));

  array = [[2, 8], [2, [3, 4]], [4, 5]];
console.log(_.flatten(array));
// [2, 8, 2, [3, 4], 4, 5]

console.log(_.flattenDeep(array));
