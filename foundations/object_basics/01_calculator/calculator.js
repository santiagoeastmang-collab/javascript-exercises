const add = function(a, b) {
    return a + b;  
};

const subtract = function(a, b) {
    return a - b
};

const sum = function(array) {
  if(array.length === 0) {
    return 0;
  } else {
    return array.reduce((actual, current) => actual + current);
  }
};

const multiply = function(array) {
    return array.reduce((actual, current) => actual * current);
};

const power = function(a, b) {
    return a ** b
};

const factorial = function(a) {
  let result = 1
  for (let index = 1; index <= a; index++) {
    result *= index;
  }
  return result;
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
