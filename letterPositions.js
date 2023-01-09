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
  const answer = {};
    
  for (let i = 0; i < sentence.length; i++) {
    let element = sentence[i];

    if (element !== ' ') {
      if (answer.hasOwnProperty(element)) {
        answer[element].push(i);
      } else {
        answer[element] = [];
        answer[element].push(i);
      }
    }
  }

  return answer;
};

module.exports = letterPositions;