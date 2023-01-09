//takes in 2 objects and return true if they are equal and false otherwise.

const eqArrays = require('./eqArrays')

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

module.exports = eqObjects