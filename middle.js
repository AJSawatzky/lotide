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


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (eqArrays (actual === expected)) {
    console.log(`✅✅✅ Assertion Passed:, ${actual}, '===', ${expected}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:, ${actual}, '!==',  ${expected}`);
  }
};

const middle = function(array){
    if (array.length % 2 === 0) {
      var mid1 = array[Math.floor((array.length - 1) / 2)];
      var mid2 = array[Math.floor((array.length) / 2)];
      return [mid1, mid2];
        
  }else {
    var mid3 = array[Math.floor(array.length / 2)];
    return [mid3];
    }
  }

console.log(middle(['a','b','c']));
console.log(middle(['a','b','c','d']));
console.log(middle(['a','b','c','d','e']));
console.log(middle(['a','b','c','b','d','e']));

