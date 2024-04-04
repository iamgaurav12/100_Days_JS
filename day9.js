//* Challenge : calculate the average

//* Write a function called calculateAverage that takes an array of number as input and returns the average of those numbers.

//* Your function should

//? Accept an array of numbers as input
//? Calculate the sum of all numbers in the array
//? Divide the sum by the total number of elements in the array to find the average
//? Return the calculated average

//todo
const calculateAverage = (arr) => {
  let total = arr.reduce((accum, currElem) => accum + currElem, 0)
  console.log(total);
  return total / arr.lenght;
}

// Example Usage:
console.log(calculateAverage([5, 10, 2, 8])); //Output : 6.25
