import { throwError, printInConsole } from "../../../globalHelperFunctions.js";
export const reverseArray = (arr, startIdx, endIdx) => {
  if (!Array.isArray(arr) || !arr) {
    // throwError("Invalid input: argument must be an array");
    printInConsole("Invalid input: argument must be an array");
    return;
  }

  if (
    arr.length === 0 ||
    arr.length === 1 ||
    (!startIdx &&
      !endIdx &&
      typeof startIdx === "number" &&
      typeof endIdx === "number" &&
      startIdx === endIdx)
  ) {
    return arr;
  }

  let s = startIdx;
  let e = endIdx;
  if (s === null || s === undefined || typeof s !== "number") {
    // printInConsole("startId is not valid input, we are setting it to 0 ");
    s = 0;
  }
  if (e === null || e === undefined || typeof e !== "number") {
    // printInConsole(
    //   "endId is not valid input, we are setting it to arr.length - 1 "
    // );
    e = arr.length - 1;
  }
  if (s < 0 || s >= arr.length || e < 0 || e >= arr.length) {
    printInConsole("Start index or end Index is out of the range");
    return;
  }

  let i = 0;
  let j = arr.length - 1;
  let res = [];
  while (i <= j) {
    if (i < s) {
      res[i] = arr[i];
      i++;
    }
    if (j > e) {
      res[j] = arr[j];
      j--;
    }
    if (s <= i && j <= e) {
      res[i] = arr[j];
      res[j] = arr[i];
      i++;
      j--;
    }
  }
  return res;
};

console.log(reverseArray([1, 2, 3, 4, 5], 0, 4)); // [5, 4, 3, 2, 1]
console.log(reverseArray([10, 20, 30], 0, 2)); // [30, 20, 10]
console.log(reverseArray(["a", "b", "c"], 0, 2)); // ["c", "b", "a"]
console.log(reverseArray([1, 2, 3, 4, 5], 1, 3)); // [1, 4, 3, 2, 5]
console.log(reverseArray([1, 2, 3])); // [3, 2, 1] (full reverse: startIdx/endIdx default)
console.log(reverseArray([100])); // [100] (single element)
console.log(reverseArray([1, 2, 3, 4], 2, 2)); // [1, 2, 3, 4] (reversing a single element has no effect)
console.log(reverseArray([5, 10, 15, 20], 0, 1)); // [10, 5, 15, 20]

console.log(reverseArray([10, 20, 30], -1, 5)); // Error: Invalid input
console.log(reverseArray([10, 20, 30], 1, -5)); // Error: Invalid input
console.log(reverseArray(null)); // Error: Invalid input
console.log(reverseArray(undefined)); // Error: Invalid input
console.log(reverseArray("12345")); // Error: Invalid input
console.log(reverseArray({ a: 1 })); // Error: Invalid input
console.log(reverseArray([1, 2, 3], "a", 2)); // May cause unexpected behavior
console.log(reverseArray([1, 2, 3], 0, "b")); // May cause unexpected behavior
