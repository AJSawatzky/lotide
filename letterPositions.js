//takes in a string and returns all indices of letter positions in the string.

const letterPositions = function(sentence) {
  const results = {};

  const noSpaceString = sentence.replace(/ /g, "");

  for (let i = 0; i < noSpaceString.length; i++) {
    if (results[noSpaceString[i]]) {
      results[noSpaceString[i]].push(i);
    } else {
      results[noSpaceString[i]] = [];
      results[noSpaceString[i]].push(i);
    }
  }

  return results;
};

module.exports = letterPositions;