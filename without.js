//returns a subset `array1`, removing from it the elements from `array2`.

const without = function(sourceArray, itemsToBeRemoved) {
  let newArray = sourceArray;
    for (let i in newArray) {
    for (let j in itemsToBeRemoved) {
      if (itemsToBeRemoved[j] === sourceArray[i]) {
        newArray.splice(i,1);
      }
    }
  }
  return newArray;
};

module.exports = without;

