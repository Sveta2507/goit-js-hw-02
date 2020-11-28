const findLongestWord = function(string) {
    let arr = string.split(" ");
    // console.log(arr);
    let longestWord = arr[0];
    for (let i = 1; i < arr.length; i++ ) {
      // console.log(arr[i]);
      if (longestWord.length < arr[i].length) {
        longestWord = arr[i];
    }
  }
  return longestWord;
  };

  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

  console.log(findLongestWord('Google do a roll')); // 'Google'

  console.log(findLongestWord('May the force be with you')); // 'force'