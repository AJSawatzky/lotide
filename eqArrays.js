const eqArrays = function(firstArray, secondArray)  {
  for(let i = 0; i < firstArray.length; i++){
    if(firstArray[i] !== secondArray[i]){
      return false;
    }
  }
  if (firstArray.length === secondArray.length) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;