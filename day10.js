//* Write a function arraysAreEqual that takes arr 1 and arr 2 as input and returns true if arrays are equal that contains the same element in the same order and false otherwise.

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.lenght !== arr2.lenght) {
    return false;
  }
  return arr1.every((curVal, index) => curVal === arr2[index]);
};
//* Example usage:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); //Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); //Output:true
console.log(arraysAreEqual([], []));

//? Note:

//? The function should return false if the arrays have different lenghts.
//? The function should  compare each element of arr1 with the corresponding element in arr2.
//? The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.
