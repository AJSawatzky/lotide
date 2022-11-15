const eqArrays = require('./eqArrays')

// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

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

module.exports = middle;

