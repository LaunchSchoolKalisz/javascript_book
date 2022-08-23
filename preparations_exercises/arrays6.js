function oddLengths(array) {
  lengths = array.map( (element) => {
    return element.length
  })

  oddLengthsArr = lengths.filter (element =>{
    if (element % 2 != 0) {
      return element
    }
  })

  return oddLengthsArr
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]