import { printInConsole } from "../../../globalHelperFunctions.js";

// you will given a array and number, rotate the array by the given number (number could positive and negative)
// for example, if you give [1, 2, 3, 4, 5] and 2, you will get [3, 4, 5, 1, 2] ( clockwise rotation)
// for example, if you give [1, 2, 3, 4, 5] and -2, you will get [4, 5, 1, 2, 3] ( anticlockwise rotation)

const rotateTheArrayByNumber = (arr, num) => {
  if (!Array.isArray(arr) || typeof num !== "number") {
    printInConsole(
      "Invalid input: first argument must be an array and second argument must be a number"
    );
    return;
  }
  if (num === 0 || num === arr.length) {
    return arr;
  }

  let rotateByNum = num % arr.length;
  if (rotateByNum < 0) {
    rotateByNum += arr.length;
  }
  let firstPart = arr.slice(0, arr.length - rotateByNum);
  let secondPart = arr.slice(arr.length - rotateByNum);

  // reverse 1st part
  let res1 = reverseArray(firstPart);
  // reverse 2nd part
  let res2 = reverseArray(secondPart);
  // reverse complete arr

  const completeArr = [...res1, ...res2];

  return reverseArray(completeArr);
};

const reverseArray = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    printInConsole(
      "Invalid input: argument must be an array and valid indices"
    );
    return;
  }
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  let i = 0;
  let j = arr.length - 1;
  const res = [...arr];
  while (i <= j) {
    [res[i], res[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return res;
};

// Rotate by positive number less than array length
console.log(rotateTheArrayByNumber([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// Rotate by 0 (no change)
console.log(rotateTheArrayByNumber([1, 2, 3, 4, 5], 0)); // [1, 2, 3, 4, 5]

// Rotate by number equal to array length (no change)
console.log(rotateTheArrayByNumber([1, 2, 3], 3)); // [1, 2, 3]

// Rotate by number more than array length (wrap around)
console.log(rotateTheArrayByNumber([1, 2, 3, 4], 6)); // [3, 4, 1, 2]

// Rotate by negative number (left shift)
console.log(rotateTheArrayByNumber([1, 2, 3, 4, 5], -2)); // [3, 4, 5, 1, 2]

// Rotate single element array
console.log(rotateTheArrayByNumber([99], 3)); // [99]

// Rotate empty array
console.log(rotateTheArrayByNumber([], 2)); // []

// First argument is not an array
console.log(rotateTheArrayByNumber("12345", 2)); // Error

// Second argument is not a number
console.log(rotateTheArrayByNumber([1, 2, 3], "2")); // Error

// Second argument is missing
console.log(rotateTheArrayByNumber([1, 2, 3])); // Error

// Both arguments are missing
console.log(rotateTheArrayByNumber()); // Error

//edge cases
// Large k value (like 10^6) to test performance
console.log(rotateTheArrayByNumber([1, 2, 3, 4, 5], 1000002)); // Efficiently handled wrap-around

// Array with all elements the same
console.log(rotateTheArrayByNumber([7, 7, 7, 7], 2)); // [7, 7, 7, 7]

// Array with mixed types (numbers and strings)
console.log(rotateTheArrayByNumber([1, "two", 3], 1)); // [3, 1, "two"]
