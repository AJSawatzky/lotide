//const assertEqual = require("./assertEqual");

const findKey = function(object, callback) {
 let keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    if (callback(object[keys[i]])) {
      return keys[i];
    }
  } 
};

module.exports = findKey;