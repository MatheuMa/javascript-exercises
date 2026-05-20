const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce(((total, current) => total += current), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total *= current)
};

const power = function(number, power) {
	let result = number;
  for (let i = 1; i < power; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
  if (number < 1) return 1;
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
