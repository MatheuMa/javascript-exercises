const contains = function (obj, target) {
  const values = Object.values(obj);

  for (const val of values) {
    if (Object.is(val, target)) return true;
    if (typeof val === "object" && val !== null) {
      if (contains(val, target)) return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
