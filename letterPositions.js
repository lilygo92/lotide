const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // loop through sentence
  // create empty arrays as keys for letters inside results, skipping spaces
  // if sentence[i] has an equivalent key inside results, push i to appropriate array inside results
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]] && sentence[i] !== " ") {
      results[sentence[i]] = [];
    }
    if (sentence[i] !== " ") {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;