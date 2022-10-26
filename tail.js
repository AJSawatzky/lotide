const assertEqual = function(actual, expected) {
  
  const tail = function(array) {
    let first = array.slice(1);
    return first;
  };

  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);
  assertEqual(words.length, 3);
  
};
