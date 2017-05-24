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



$("input").on("focus focusout",function(){
  $(this).toggleClass("events");
});
