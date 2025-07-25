// print the all subarray of array

import { printInConsole } from "../../../globalHelperFunctions.js";

const printSubArray = (arr = []) => {
  if (!arr || !Array.isArray(arr)) {
    printInConsole("Invalid input");
  }

  let i = 0;
  while (i < arr.length) {
    let j = i;
    while (j < arr.length) {
      console.log(arr.slice(i, j + 1));
      j++;
    }
    i++;
  }
};

console.log(printSubArray(["a", "b", "c", "d"]));
