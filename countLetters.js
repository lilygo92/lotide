const countLetters = function(string) {
  let noSpaces = string.replace(/\s/g, "");
  let letterCount = {};
  
  for (const letter of noSpaces) {
    letterCount[letter] ? letterCount[letter] += 1 : letterCount[letter] = 1;
  }
  return letterCount;
};

console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));