//return an object that enumerates each letter of "phrase"

const countLetters = function(inputString) {
  const returnObject = {};

  // loop over input string
  for (const element of phrase) {
    // has been seen before?
    if (element !== ' ') {
      // increase count by 1
      if (returnObject(element)) {
        returnObject[element]++;
    } else {
      // add it to the object with a count of 1
      returnObject[element] = 1;
    }
  }
}

  return returnObject;
}

module.exports = countLetters;
