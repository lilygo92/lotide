const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
    // if (!object2[key]){
    //   return false;
    // }
    if (object1[key] !== object2[key] && !Array.isArray(object1[key])) {
      return false;
    }

    if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;