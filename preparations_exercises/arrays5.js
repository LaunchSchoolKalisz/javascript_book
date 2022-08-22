let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);

function findIntegers(array) {
  const new_array = array.filter(element => Number.isInteger(element))

  return new_array
}

console.log(integers); // => [1, 3, -4]