//returns a subset `array1`, removing from it the elements from `array2`.

const without = function(array1, array2) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(array1[i]);
    for (let j = 0; j < array.length; j++) {
      if (array1[i] === array2[j]) {
        answer.pop();
      }    
    }
  }
  return answer;
};

module.exports = without;
