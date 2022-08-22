let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

const evenOrOdd = []
myArray.map( (num, idx) => {
  if(num % 2 == 0) {
    evenOrOdd[idx] = "even"
  } else {
    evenOrOdd[idx] = "odd"
  }
})

console.log(evenOrOdd);