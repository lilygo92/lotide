const takeUntil = function(data, callback) {
  const results = [];
  for (let item of data) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
};

module.exports = takeUntil;