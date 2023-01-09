// takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

const flatten = function(array) {
  let answer = [];
  array.forEach(element => {
    if (!Array.isArray(element)) {
      answer.push(element);
    } else {
      for (let i = 0; i < element.length; i++) {
        answer.push(element[i]);
      }
    }
  });
  array = answer;
  return array;
};

module.exports = flatten;
