const countOnly = function(allItems, ItemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (ItemsToCount[item]) {
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;



