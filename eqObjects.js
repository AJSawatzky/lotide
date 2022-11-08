const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual}, '===', ${expected}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:, ${actual}, '!==',  ${expected}`);
  }
};

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
let keys1 = Object.keys(obj1)
let keys2 = Object.keys(obj2)

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false