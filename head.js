// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(array) {
  let first = array[0];
  console.log(first);
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");