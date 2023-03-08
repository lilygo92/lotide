const flatten = (arr) => {
  // empty array
  let flattened = [];

  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // check if arr[i] is an array
    // conditional to push? or loop then push
    if (Array.isArray(arr[i])) {
      for (let j = arr[i].length - 1; j >= 0; j--) {
        flattened.push(arr[i][j]);
      }
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));


// loop through flattened
// check if flattened[i] is an array
// loop through flattened[i]
// splice flattened[i] with the elements of flattened[i]
//

// empty array
// loop through arr
// check if arr[i] is an array
// conditional to push? or loop then push

