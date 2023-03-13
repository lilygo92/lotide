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

module.exports = flatten;
