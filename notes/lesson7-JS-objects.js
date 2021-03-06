var olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powel",
  swimming200Men: "Michael Phelps"
};

//Add propertie without using a constructor method
olympicRecords.otro = "Javier Armero";
console.log(olympicRecords);


console.log(Object.keys(olympicRecords));


/*EXERCISE*/
var user1 = { name: "Nick", id: 7 };
var user2 = { name: "Javier", id: 8};

var book1 = { title: "The Catcher in the Rye", author: "J.D Salinger", isbn: "0316769487", category: "Classic Literature" };
var book2 = { title: "To Kill a Mockingibrd", author: "Harper Lee", isbn: "0446310786", category: "Classic Literature" };

user1.books = [book1,book1];

//Create a library

var library = [];
library.users = [user1,user2];

console.log("library-->",library);

var book3 = { title: "3To Kill a Mockingibrd", author: "Harper Lee", isbn: "0446310786", category: "Classic Literature" };
library.users[0].books.push(book3);
//como accedo a library.users.books
console.log("library-->",library);

console.log(Object.keys(library.users));

//Iterar por usuarios
// var array = [[]];
// for (var i = 0; i < library.users.length; i++) {
//   for (var j = 0; j < library.users.books.length; j++) {
//     console.log(array[i][j]);
//   }
// }

library.users.forEach(function(library){
  console.log(library);
});


/********************************************************************************************/
/*ARRAYS*/
/********************************************************************************************/


// Names generated by faker: https://github.com/marak/Faker.js/

var classes = [
  [
    { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
    { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
    { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
    { firstName: 'Lulu', lastName: 'Considine', age: 20 },
    { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
  ],
  [
    { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
    { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
    { firstName: 'Emie', lastName: 'Franecki', age: 29 },
    { firstName: 'Okey', lastName: 'Runte', age: 18 },
    { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
  ],
  [
    { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
    { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
    { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
    { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
    { firstName: 'Stanley', lastName: 'Hand', age: 22 }
  ],
  [
    { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
    { firstName: 'Mervin', lastName: 'Blick', age: 28 },
    { firstName: 'Damien', lastName: 'Rohan', age: 28 },
    { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
    { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
  ],
  [
    { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
    { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
    { firstName: 'Braeden', lastName: 'Walker', age: 26 },
    { firstName: 'Derick', lastName: 'Weber', age: 22 },
    { firstName: 'Robert', lastName: 'Beatty', age: 30 }
  ]
];

// From the array classes
//
console.log("Classes\n"+classes);
// Retrieve the second “classroom” of students
console.log("\nRetrieve the second “classroom” of students: \n"+classes[1]);

console.log("\nRetrieve the second “classroom” of students: \n"+Object.keys(classes[1]));
// Retrieve the first name “Antonette”
console.log("\nRetrieve the first name “Antonette” \n");
console.log(classes[4][0].firstName);

// Retrieve the age 18
console.log("\nRetrieve the age 18 \n");
console.log(classes[1][3].age);

// Retrieve the last name “Beatty”
console.log("\nRetrieve the last name “Beatty” \n");
console.log(classes[4][4].lastName);



var schoolSystem = {
  schools: [
    {
      name: "Fake School 1",
      classRooms: [
        {
          teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
          students: [
              { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
              { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
              { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
              { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
              { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
            ]
        },
        {
          teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
          students: [
            { firstName: 'Manley', lastName: 'Doyle', age: 18 },
            { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
            { firstName: 'Sid', lastName: 'Rohan', age: 30 },
            { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
            { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
          ]
        }
      ]
     },
     {
      name: "Fake School 2",
      classRooms: [
        {
          teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
          students: [
            { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
            { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
            { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
            { firstName: 'Rickie', lastName: 'White', age: 22 },
            { firstName: 'Rose', lastName: 'Collins', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
          students: [
            { firstName: 'Melany', lastName: 'Welch', age: 25 },
            { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
            { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
            { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
            { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
           ]
         }
       ]
	 },
	 {
      name: "Fake School 3",
      classRooms: [
        {
          teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
          students: [
            { firstName: 'Christop', lastName: 'Hahn', age: 26 },
            { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
            { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
            { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
            { firstName: 'Maudie', lastName: 'Haley', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
          students: [
            { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
            { firstName: 'Lois', lastName: 'Kulas', age: 28 },
            { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
            { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
            { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
          ]
        }
      ]
    }
  ]
};

console.log(schoolSystem.schools[1].name);
// Fake School 2

console.log(schoolSystem.schools[1]);
// {
// 	name: 'Fake School 2',
// 	classRooms:
// 	   [
// 		{ teacher: [Object], students: [Object] },
// 		 { teacher: [Object], students: [Object] }
// 	   ]
// }
console.log(schoolSystem.schools[1].classRooms[0]);

// {
// 	teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
// 	students: [
// 		{ firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
// 		{ firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
// 		{ firstName: 'Mikayla', lastName: 'Braun', age: 23 },
// 		{ firstName: 'Rickie', lastName: 'White', age: 22 },
// 		{ firstName: 'Rose', lastName: 'Collins', age: 30 }
// 	]
// }

console.log(schoolSystem.schools[1].classRooms[0].students[1]);

// { firstName: 'Jennyfer', lastName: 'Hane', age: 19 }

console.log(schoolSystem.schools[1].classRooms[0].students[1].firstName);

// 'Jennyfer'

// Exercise
//
// Add a student with name of Lucille D. Lozano to Fake School 2, in the first classroom.
var student = { firstName: 'Lucille D', lastName: 'Lozano', age: 24};
schoolSystem.schools[1].classRooms[0].students.push(student);
console.log(schoolSystem.schools[1].classRooms[0]);

// Retrieve the “Fake School 3” object
console.log(schoolSystem.schools[2]);

// Retrieve the teacher with the first name of “Nathanael”
 console.log(schoolSystem.schools[1].classRooms[0].teacher);
// Retrieve the student with the first name of “Saul”


/*¿¿¿¿PORQUE????*/
console.log("\n\n\n******************");
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
