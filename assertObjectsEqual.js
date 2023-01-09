//takes in 2 objects and returns true if they are equal and false otherwise.

const eqObjects = require('./eqObjects');

//Checks if object "actual" === "expected"
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  if (eqObjects(actual === expected)) {
    console.log(`✅✅✅ Assertion Passed:, ${inspect(actual)}, '===', ${inspect(expected)}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:, ${inspect(actual)}, '!==',  ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
