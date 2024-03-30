//* -------------------------------------------
//*  Programming Question : Longest Word in a String
//* -------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest word , return the first one encountered

//* Constraints
//? The input string may contain alphabetic characters digits, space and punctuation
//? The input string is non-empty
//? The input string may contain mutiple words separated bt spaces

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
      return false;
    }
  
    words = str.split(" ");
    console.log(words);
    //  ? M-1
    //   words = words.sort((a, b) => b.length - a.length);
    //   console.log(words);
    //   return words[0];
    //? M-2
    return words.reduce(
      (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
      ""
      );
      
  };
  
  console.log(findLongestWord("100 days Javascript Problem Solving"));
  