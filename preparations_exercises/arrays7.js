let array = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((accumulator, currentValue) => {
    console.log(accumulator + currentValue * currentValue )
    return accumulator + currentValue * currentValue 
  }, 0);

}

console.log(sumOfSquares(array)); // => 83