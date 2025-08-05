import { reverseArray } from "../funtionsAndArrays/problems/arrays/reverseArray.js";
import { isValidTwoDArr, printInConsole } from "../globalHelperFunctions.js";
import { doTransverse } from "./doTransverse.js";

const rotate90Degree = (arr) => {
  const arrInfo = isValidTwoDArr({ arr, isSquare: true });

  if (!arrInfo.isValid) {
    printInConsole("Invalid Input Arr!");
    return;
  }
  const transverseArr = doTransverse(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = reverseArray(arr[i]);
  }

  return arr;
};

console.log(
  rotate90Degree([
    [1, 2],
    [3, 4],
  ])
);
// Expected Output:
// [
//   [3, 1],
//   [4, 2],
// ]

console.log(
  rotate90Degree([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// Expected Output:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ]

console.log(
  rotate90Degree([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
// Expected Output: Error printed → "Invalid Input Arr!"
