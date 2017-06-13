/* Iteration 1 - The Office */
var opinions = ["This is the best job ever", "Satisfied", "At least I get paid", "I m looking for another job", "I don\' t want to answer"];
var departaments = [];
var departaments = fillDepartaments(5, 10);
console.log("OFFICE -->", departaments);

/**
 * fill a specefic quantity of departaments with a specefic opinions
 * @param   qty [quantity of departaments]
 * @param   ops [quantity opinions for each departament]
 * @return  departaments
 */
function fillDepartaments(qty, ops) {
  departaments.push(_.times(qty, function() {
    return fillOpinions(ops);
  }));
  return departaments;
}


/**
 * Return department with 'ops' opinions
 * @param  ops quantity of opinions
 * @return departamnt
 */
function fillOpinions(ops) {
  var departament = [];
  for (var j = 0; j < ops; j++) {
    departament.push(_.sample(opinions));
  }
  return departament;
}


/* Iteration 2 - Harry Potter */
var pairsOfBirthdays = _.chunk(birthdays, 2);
console.log("HOla");

console.log("pairsOfBirthdays:\n"+pairsOfBirthdays);

// Adding extra birthdays to the array
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
  "Dudley Dursley", "30 June", "Tom Riddle", "31 December"
];

// var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
//                  "Ron Weasley", "1 March", "Remus Lupin", "10 March",
//                  "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
//                   "Draco Malfoy", "5 June", "Dobby", "28 June",
//                   "Neville Longbottom", "30 July", "Harry Potter", "31 July",
//                   "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
//                   "Hermione Granger", "19 September", "Minerva McGonagall",
//                   "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
//                   "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
//                   "6 December", "Charlie Weasley", "12 December",];

var allBirthdays = function() {
  return _.concat(pairsOfBirthdays, _.chunk(moreBirthdays, 2));
};
console.log(allBirthdays());


// The Password Problem
var goodPsswd = "1234567890";
var badPsswd = "1123456";
//Unique Characters
function noRepeatChar(password) {

  var result = _.filter(password, function(value, index, iteratee) {
    return _.includes(iteratee, value, index + 1);
  });

  if (result.length < 1) {
    console.log("good password");
  } else {
    console.log("AUCH, bad password");
  }
}

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
// Only digits
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function(password) {
  return _.dropRight(password.split(""), 10).join("");
};
trimPassword(badPsswd);


// Abbey Road Studios
// November is a good month
var novemberArtists = function() {
  return _.uniq(_.map(_.filter(abbeyRoadRecords, ["month", 11]), "artist"));
};
console.log(novemberArtists());
// Artist who recorded the most times
var bestArtist = function() {
  return _.first(_.orderBy(_.groupBy(abbeyRoadRecords, "artist"), ['Array', 'length'], ['asc', 'desc']))[0].artist;
};
console.log(bestArtist());
// The Beatles and Abbey Road
var lastBeatlesSong = function() {
  return _.orderBy(_.filter(abbeyRoadRecords, ["artist", "The Beatles"]), 'year', ['desc'])[0].year;
};
console.log(lastBeatlesSong());
// Sixties Crazyness
var sixtiesSong = function() {
  return _.orderBy(_.filter(abbeyRoadRecords, ["year", 1969]), 'month', ['desc'])[0];
};
console.log(sixtiesSong().artist + " recorded " + sixtiesSong().song);
