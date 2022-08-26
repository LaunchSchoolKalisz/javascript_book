function oddLengths(array) {
  result = []
  array.reduce((accumulator, currentString) => {
    if (currentString.length % 2 != 0) {
      result.push(currentString.length)
    }
  }, array[0])
  return result
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// LS Solution
// function oddLengths(strings) {
//   return strings.reduce((filteredNumbersArray, letters) => {
//     let length = letters.length;
//     if (length % 2 === 1) {
//       filteredNumbersArray.push(length);
//     }

//     return filteredNumbersArray;
//   }, []);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr));