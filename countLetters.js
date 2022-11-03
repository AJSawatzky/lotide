//assertEqual function template/example
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed:, ${actual}, '===', ${expected}`);
    
  } else {
    console.log(`✅✅✅ Assertion Failed:, ${actual}, '!==',  ${expected}`);
  }
};


// countLetters attempt
function countLetters(inputString) {
  const returnObject = {};

  // loop over input string
  for (let i = 0; i < inputString.length; i++) {
    // has been seen before?
    if (returnObject.hasOwnProperty(inputString[i])) {
      // increase count by 1
      returnObject[inputString[i]] += 1;
    } else {
      // add it to the object with a count of 1
      returnObject[inputString[i]] = 1;
    }
  }

  return returnObject;
}

console.log(countLetters('Lighthouse'));
