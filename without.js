const without = (arr, remove) => {
  // create an clone of arr to store the final value
  let removed = arr.slice();

  // loop through removed while checking if arr[i] is also in remove
  for (let i = 0; i < removed.length; i++) {
    // loop through remove to check if arr[i] equals remove[j]
    // if arr[i] !== remove[j],
    for (let j = 0; j < remove.length; j++) {
      if (removed[i] === remove[j]) {
        removed.splice(i, 1);
      }
    }
  }
  return removed;
};

module.exports = without;
