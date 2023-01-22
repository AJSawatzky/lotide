//returns all itmes after the head of `array` as an array

const tail = function(array) {
  if (array === undefined) {
    return undefined;
  }
  const tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;
