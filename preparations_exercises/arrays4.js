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

// LS solutions

// let newArray = myArray.map(function(value) {
//   if (value % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// });

// let newArray = [];
// for (let i = 0; i < myArray.length; i += 1) {
//   let value = myArray[i];
//   if (value % 2 === 0) {
//     newArray.push('even');
//   } else {
//     newArray.push('odd');
//   }
// }