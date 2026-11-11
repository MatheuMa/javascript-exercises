const permutations = function (array) {
  const result = [];

  const length = array.length;
  if (length < 2) return [array];

  for (let i = 0; i < length; i++) {
    const copy = [...array];
    const removed = copy.splice(i, 1);
    const remainingPermutations = permutations(copy);

    for (const p of remainingPermutations) {
      result.push([...removed, ...p]);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = permutations;
