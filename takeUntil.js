//returns slice of array with elements taken from the beginning

const takeUntil = function(array, callback) {
  let newArray = [];
  let i = 0;
  let element = array[i] 

  while (!callback(element) && i < array.length) {
    newArray.push(element);
      i++;
    element = array[i];
  }
  return newArray;
};

module.exports = takeUntil;