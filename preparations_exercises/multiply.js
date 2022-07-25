// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566

let rlSync = require('readline-sync');

function getNumber() {
  firstNum = Number(rlSync.question("What is the first number?\n"))
  secondNum = Number(rlSync.question("What is the second number?\n"))
  console.log(`The product of ${firstNum} and ${secondNum} is ${firstNum * secondNum}`)
}

getNumber()

// LS solution

function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber("Please enter the first number: ")
let right = getNumber("Please enter the second number: ")
console.log(`The product of ${left} and ${right} is ${multiply(left, right)}`)