//takes in an object and callback and returns the first key that meets the criteria specified in callback.

const findKey = function(object, callback) {
 let keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    if (callback(object[keys[i]])) {
      return keys[i];
    }
  } 
};

module.exports = findKey;