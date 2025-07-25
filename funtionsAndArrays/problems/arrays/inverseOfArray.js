//inverse of th arrays -> swaps the element of array with its index
// you will given the an array, each element of the array is less than the arr.length

import { printInConsole } from "../../../globalHelperFunctions.js";

// [3,1,4,2,0] -> [5,1,4,0,3]

const inverseOfArr = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    printInConsole(
      "Invalid Input: Given input arr is not arr, please provide the valid arr"
    );
    return;
  }

  let res = [];

  let i = 0;

  while (i < arr.length) {
    if (arr[i] >= arr.length || arr[i] < 0) {
      return printInConsole(`item at ${i} is not in range!`);
    }

    if (res[i]) {
      return printInConsole(`item are duplicate at ${i}`);
    }
    res[arr[i]] = i;
    i++;
  }

  return res;
};

console.log(inverseOfArr([3, 1, 4, 2, 0]));
// Basic test case
console.log(inverseOfArr([3, 1, 4, 2, 0])); // [4, 1, 3, 0, 2]

// Already inverse of itself
console.log(inverseOfArr([0, 1, 2, 3])); // [0, 1, 2, 3]

// Single element
console.log(inverseOfArr([0])); // [0]

// Repeated elements but still valid permutation
console.log(inverseOfArr([2, 0, 1])); // [1, 2, 0]

// Large array
console.log(inverseOfArr([4, 3, 2, 1, 0])); // [4, 3, 2, 1, 0]

// Element out of range
console.log(inverseOfArr([3, 1, 6, 2, 0])); // Error: item at 2 is not in range!

// Element equal to length (invalid)
console.log(inverseOfArr([0, 1, 2, 3, 5])); // Error: item at 4 is not in range!

// Not an array
console.log(inverseOfArr("not-an-array")); // Error

// Null input
console.log(inverseOfArr(null)); // Error

// Undefined input
console.log(inverseOfArr(undefined)); // Error

// Empty array
console.log(inverseOfArr([])); // []

// Duplicates (invalid case for proper inverse permutation, but your current logic doesn't validate duplicates)
console.log(inverseOfArr([1, 1, 0])); // [2, 1]

// Array with negative number
console.log(inverseOfArr([0, 1, -2])); // Error (ideally should handle or flag as invalid)
