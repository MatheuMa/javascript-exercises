const pascal = function (n) {
  if (n < 1) return;

  const result = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) result.push(1);
    else result.push(pascal(n - 1)[i - 1] + pascal(n - 1)[i]);
  }

  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = pascal;
