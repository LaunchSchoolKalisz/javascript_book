// let readlineSync = require('readline-sync');
// let num = readlineSync.question('What number would you like to factorial? ');


function factorial(num) {
  let result = 1;
  for (i = 1; i <= num; i++ ) {
    result *= i 
  }
  return result
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320