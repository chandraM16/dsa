// you will be given an Arr(sorted) and num, you have to find the Ceil and Floor for given num from given arr.
// Example -> arr = [10,20,30,40,50,60,70,80,90], num = 43,so Ceil = 50 and floor = 40

import { printInConsole } from "../../../globalHelperFunctions.js";

const findTheCeilAndFloor = (arr, num) => {
  if (!arr || !Array.isArray(arr) || arr.length === 0 || arr.length === 1) {
    printInConsole("Invalid Arr input");
    return null;
  }
  if (!num || typeof num !== "number") {
    printInConsole("Invalid Num input");
    return null;
  }
  if (arr[0] > num || num > arr.at(-1)) {
    printInConsole("Invalid Num range");
    return null;
  }
  if (arr.length === 2) {
    return arr;
  }

  let ceil = Infinity;
  let floor = -Infinity;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > num) {
      ceil = arr[mid];
      high = mid - 1;
    } else if (arr[mid] < num) {
      floor = arr[mid];
      low = low + 1;
    } else {
      ceil = arr[mid];
      floor = arr[mid];
      return [floor, ceil];
    }
  }
  return [floor, ceil];
};
console.log(findTheCeilAndFloor([10, 20, 30, 40, 50, 60, 70, 80, 90], 111));
