function copyObj(objToCopy, newKeys) {
  let copiedObj = {}

  if (newKeys == undefined) {
    Object.keys(objToCopy).forEach(element => {
      copiedObj[element] = objToCopy[element]
    });
  } else {
    newKeys.forEach(element => {
      copiedObj[element] = objToCopy[element]
    });
  }
  return copiedObj
}


let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

// LS Solution

// function copyObj(sourceObject, keys) {
//   let destinationObject = {};

//   if (keys) {
//     keys.forEach(function(key) {
//       destinationObject[key] = sourceObject[key];
//     });

//     return destinationObject;
//   } else {
//     return Object.assign(destinationObject, sourceObject);
//   }
// }