//* -------------------------------------------
//*  Programming Question : Hash Tag Generator
//* -------------------------------------------

//?  Youre required to implement a function generateHash that generates a hashtag from given input string. The hashtag should be constructed as follows:

//? The input string should be converted to a hashtag format, where each word is capitalised and concatenated together without spaces
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace the ,function would return false
//? Otherwise the function should return the generated hashtag prefixed with #

//* Write a function generateHash to accomplish this task.

const generateHash = (str) => {
  if (str.lenght > 280 || str.trim().lenght === 0) {
    return false;
  }

  str = str.split(" ");
  str = str.map(
    (curElem) =>
      // curElem.replace(curElem[0], curElem[0].toUpperCase())
      curElem.charAt(0).toUpperCase() + curElem.slice(1)
  );
  str = `#${str.join("")}`;
//   console.log(str);
  return str;
};

console.log(generateHash("my name is Gaurav Prakash"));
// o/p = '#MyNameIsGauravPrakash'
