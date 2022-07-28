function evenOrOdd (num) {
  if (num.typeOf == "number") {
    if (num % 2 === 0) {
      console.log("even")
    } else {
      console.log("odd")
    }
  } else {
    console.log("Please enter a valid number")
  }
}
