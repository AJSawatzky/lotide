const eqArrays = (firstArray, secondArray) => {
  if(firstArray.length !== secondArray){
    return false;
  }
  for(let i = 0; i < firstArray.length; i++){
    if(firstArray[i] !== secondArray[i]){
      return false;
    }
  }return true;
};

const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  
  if (keys1.length === keys2.length) {
    for (const element of keys1) {
      if (obj1[element] instanceof Array && obj2[element] instanceof Array) {
        if (!eqArrays(obj1[element], obj2[element])){
          return false;
        }
      } else if(!(obj1[element] instanceof Array) && !(obj2[element] instanceof Array)) {
        if (obj1[element] !== obj2[element]) {
          return false;
        }
      } else {
        return false;      
      }
    }
    return true;
  } else {
    return false
  }
};

//function implement
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  if (eqObjects(actual === expected)) {
    console.log(`✅✅✅ Assertion Passed:, ${inspect(actual)}, '===', ${inspect(expected)}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:, ${inspect(actual)}, '!==',  ${inspect(expected)}`);
  }
};

let ob1 = { a: '1', b: '2' };
let ob2 = { b: '2', a: '1' };
assertObjectsEqual(ob1, ob2);
