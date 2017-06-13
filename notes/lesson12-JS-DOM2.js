console.log("aa");
$(".container li:first").addClass("selected");

$(".container>article:nth-child(2)").addClass("middle");

$(".list-item:nth-child(even)").addClass("highlighted");

$(".list-item:last").css("border", "2px solid #eee");

// $("input").focus(function(){
//   $(this).css("border-color","green");
//   //
//   // $(this).toggleClass("events");
// });


$(document).ready(function(){


function test1(){
  a =4; //without a.
   b = 3;
}

  function add(){
    console.log("add");
  }
var b=2;
test1();

console.log(a);
console.log(b);
  setTimeout(add,5000);




});

// $("input").on("focus focusout",function(){
//   $(this).toggleClass("events");
// });
//
// $("p").click(function(){
//   $(".button-container").append("<button>Holi</button>");
// });
//
// $(".button-container").on("click","button",function(){
//
// });
//
// $(".button-container").click(function(){
//   console.log("Hola");
// });
