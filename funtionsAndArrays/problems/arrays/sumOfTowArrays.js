// you will get two arrays
// arr1 = [3,1,0,7,5]
// arr2 = [1,1,1,1,1,1,1]
// res = [1,1,4,2,1,8,6]

import { printInConsole } from "../../../globalHelperFunctions.js";

const sumOfTwoArrays = (arr1, arr2) => {
  if (!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)) {
    printInConsole("Please give valid input ");
    return [];
  }

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  let res = [];
  let carry = 0;
  let i = arr1.length - 1;
  let j = arr2.length - 1;

  while (i >= 0 || j >= 0 || carry != 0) {
    let firstDigit = i >= 0 ? arr1[i] : 0;
    let secondDigit = j >= 0 ? arr2[j] : 0;
    if (typeof firstDigit !== "number" || typeof secondDigit !== "number") {
      printInConsole("Invalid ele in array");
      return [];
    }
    if (firstDigit < -9 || 9 < firstDigit) {
      printInConsole("One of the ele of Arr 1 is not in range");
      return [];
    }
    if (secondDigit < -9 || 9 < secondDigit) {
      printInConsole("One of the ele of Arr 2 is not in range");
      return [];
    }

    const sum = firstDigit + secondDigit + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    res.unshift(digit);
    i--;
    j--;
  }
  return res;
};

console.log(sumOfTwoArrays([3, 1, 0, 7, 5], [1, 1, 1, 1, 1, 1]));
console.log(sumOfTwoArrays([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
console.log(sumOfTwoArrays([9, 9, 9], [1])); // [1, 0, 0, 0]
console.log(sumOfTwoArrays([0], [0])); // [0]
console.log(sumOfTwoArrays([2, 7], [9])); // [3, 6]
console.log(sumOfTwoArrays([1], [9, 9, 9])); // [1, 0, 0, 0]
console.log(sumOfTwoArrays([0, 0, 1], [0, 9, 9])); // [1, 0, 0]
console.log(sumOfTwoArrays([5], [])); // [5]
console.log(sumOfTwoArrays([], [6])); // [6]
console.log(sumOfTwoArrays([0, 1], [9])); // [1, 0]
console.log(sumOfTwoArrays([9], [9])); // [1, 8]

// invalid TC
console.log(sumOfTwoArrays(null, [1, 2])); // []
console.log(sumOfTwoArrays([1, 2], undefined)); // []
console.log(sumOfTwoArrays("123", [1, 2])); // []
console.log(sumOfTwoArrays([1, 2], "456")); // []
console.log(sumOfTwoArrays([1, 2], [10, 2])); // [] -> out of range (10)
console.log(sumOfTwoArrays([1, 2], [-10, 2])); // [] -> out of range (-10)
console.log(sumOfTwoArrays([1, 2], [2, 9, "a"])); // [] -> invalid type (if input has non-number, though not checked yet)
