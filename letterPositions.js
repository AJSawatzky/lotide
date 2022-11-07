const eqArrays = (firstArray, secondArray) => {
  if(firstArray.length !== secondArray){
    return false;
  }
  for(let i = 0; i < firstArray.length; i++){
    if(firstArray[i] !== secondArray[i]){
      return false;
    }
  }return true;
}

const assertArraysEqual = function(actual, expected) {
  
  if (eqArrays (actual === expected)) {
    console.log(`✅✅✅ Assertion Passed:, ${actual}, '===', ${expected}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:, ${actual}, '!==',  ${expected}`);
  }
};


const letterPositions = function(string) {
  const results = {};
    function getIndices(char, string){
      var currentCharacterArray = [];
      i = -1;
        while ((i = string.indexOf(char, i + 1)) >= 0) {
          currentCharacterArray.push(i);
        }
        return currentCharacterArray;
      }
        for(const char of string){
          results[char] = getIndices(char, string);
    }
    return results;
};

console.log(letterPositions('Lighthouse'));
assertArraysEqual(letterPositions("hello").e, [1]);
