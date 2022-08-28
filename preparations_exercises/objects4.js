let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj)
let upperCasedKeys = []
 array.forEach((key) => {upperCasedKeys.push(key.toUpperCase())})

console.log(obj)
console.log(array)
console.log(upperCasedKeys)
