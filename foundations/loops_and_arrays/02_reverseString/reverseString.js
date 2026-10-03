const text = "hello"

const reverseString = function(text) {
    // split es un string method
    // reverse() y join() son un array method
    return text.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
