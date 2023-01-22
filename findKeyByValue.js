//takes in an object and a value and returns the first key that corresponds to that value.

const findKeyByValue = (object, value) => {
  let keys = obj.keys(object);
  
  for (const element of keys) {
    if (object[element] === value) {
      return element;
    }
  }
};

module.exports = findKeyByValue