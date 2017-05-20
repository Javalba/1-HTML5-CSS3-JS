// function getDigits(n) {
//    var digits = 0;
//    while(n >= 1) {
//       n/=10;
//       digits += 1;
//    }
//    return digits;
// }
//
// getDigits(200);//3
// getDigits(3.2 * 10e20);//=>22

// function getLastDigit(index) {
//   var fibonacci_series = function (n)
//   {
//     if (n===1) return [0, 1];
//     else
//     {
//       var s = fibonacci_series(n - 1);
//       s.push(s[s.length - 1] + s[s.length - 2]);
//       return s;
//     }
//   };
//
//   var fibo = fibonacci_series(index);
//   console.log(fibo);
//   return (fibo[fibo.length - 1]);
// }
// console.log(getLastDigit(50));

// function getLastDigit(index) {
//   var fibonacci_series = function (n)
//   {
//     if (n===1) return [0, 1];
//     else
//     {
//       var s = fibonacci_series(n - 1);
//       s.push(s[s.length - 1] + s[s.length - 2]);
//       return s;
//     }
//   };
//
//   var fibo = fibonacci_series(index);
//   console.log(fibo);
//   return (fibo[fibo.length - 1]);
// }

// function getLastDigit(index){
//   var n1=1;
//   var n2=0;
//   var sum=0;
//   var lastNum;
//   var lastone;
//   for (var i = 0; i < index; i++) {
//     sum = n1;
//     n1 = (n2 + n1)%10;
//     n2 = sum;
//     // sum=n1+n2;
//     // n2=sum+n2;
//     // n1=sum;
//     // lastNum=n1;
//     console.log(n2);
//     lastone = n2.toString().split('').pop();
//     console.log("->"+lastone);
//
//     // 1,1,2,3,5,8,13,21,34
//   }
//   return lastone;
// }
// console.log("Hola");


// function getLastDigit(n) {
//   var a = 1;
//   var b = 0;
//   var c = null;
//   while (n > 0) {
//     c = a;
//     a = b + a;
//     b = c;
//     n--;
//     lastone = b.toString().split('').pop();
//     console.log("->"+lastone);
//   }
//   return b;
// }
// console.log(getLastDigit(30));


// var looping = function(n) {
//     var a = 0, b = 1, f = 1;
//     for(var i = 2; i <= n; i++) {
//         f = (a + b);
//         a = b;
//         b = f;
//         // console.log(f);
//             lastone = b.toString().split('').pop();
//             // console.log("->"+lastone);
//     }
//     return console.log(f);
// };
//
// looping(20000);


// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// Changes the color of the background using STYLE
function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

// Run this function every 300ms
setInterval(changeBackgroundColor, 300);


//
// var element = document.getElementById("cat");
// => undefined
//
// element.style.backgroundColor = "red";
// element.style.border = "2px green solid";
