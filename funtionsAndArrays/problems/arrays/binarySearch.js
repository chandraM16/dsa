import { printInConsole } from "../../../globalHelperFunctions.js";

const binarySearch = (arr, num) => {
  if (!arr || !Array.isArray(arr)) {
    printInConsole("Invalid Input Arr");
    return;
  }
  if (!num || typeof num !== "number") {
    printInConsole("Invalid Input num");
    return;
  }
  let low = 0;
  let high = arr.length - 1;
  // if (num === arr[low]) {
  //   return low;
  // }

  // if (num === arr[high]) {
  //   return high;
  // }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] > num) {
      high = mid - 1;
    }
    if (arr[mid] < num) {
      low = mid + 1;
    }
  }
  printInConsole("Sorry element you are search for, is not present in arr ");
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
