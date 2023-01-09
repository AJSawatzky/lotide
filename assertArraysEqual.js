const eqArrays = require('./eqArrays');


// Checks if Array "actual" === "expected"  
const assertArraysEqual = function(actual, expected) {
  
  if (eqArrays (actual === expected)) {
    console.log(`✅✅✅ Assertion Passed:, ${actual}, '===', ${expected}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:, ${actual}, '!==',  ${expected}`);
  }
};


module.exports = assertArraysEqual;