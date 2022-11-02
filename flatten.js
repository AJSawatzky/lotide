// eqArrays function
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


// assertEqual function
const assertEqual = function(actual, expected) {
  
  if (eqArrays (actual === expected)) {
    console.log(`✅✅✅ Assertion Passed:, ${actual}, '===', ${expected}`);
    
  } else {
    console.log(`🛑🛑🛑Assertion Failed:, ${actual}, '!==',  ${secondArray}`);
  }
};


// flatten function
const flatten = (firstArray, secondArray) => {
  const newArray = firstArray.concat(secondArray);
  return newArray
};