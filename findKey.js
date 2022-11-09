const assertEqual = require("./assertEqual");

const findKey = function(object, callback) {
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      if (callback(object[key])) {        
      }
    } else {
      return undefined;
    }
  }
};

module.exports = findKey;