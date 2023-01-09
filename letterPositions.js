//takes in a string and returns all indices of letter positions in the string.

const letterPositions = function(string) {
  const answer = {};
    
  for (let i = 0; i < sentence.length; i++) {
    let element = sentence[i];

    if (element !== ' ') {
      if (answer.hasOwnProperty(element)) {
        answer[element].push(i);
      } else {
        answer[element] = [];
        answer[element].push(i);
      }
    }
  }

  return answer;
};

module.exports = letterPositions;