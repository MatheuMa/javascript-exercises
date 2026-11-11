const totalIntegers = function (thing) {
  if (typeof thing !== "object" || thing === null) return;

  let sum = 0;
  const values = Object.values(thing);

  for (const val of values) {
    if (Number.isInteger(val)) sum++;
    else if (typeof val === "object" && val !== null) sum += totalIntegers(val);
  }

  return sum;
};

// Do not edit below this line
module.exports = totalIntegers;
