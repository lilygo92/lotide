const countLetters = function(string) {
  let noSpaces = string.replace(/\s/g, "");
  let letterCount = {};
  
  for (const letter of noSpaces) {
    letterCount[letter] ? letterCount[letter] += 1 : letterCount[letter] = 1;
  }
  return letterCount;
};

module.exports = countLetters;