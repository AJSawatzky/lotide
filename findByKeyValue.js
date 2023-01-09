const findKeyByValue = (object, value) => {
  let keys = obj.keys(object);
  
  for (const element of keys) {
    if (object[element] === value) {
      return element;
    }
  }
};

module.exports = findKeyByValue