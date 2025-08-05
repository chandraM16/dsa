// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// suppose you have this arr and you have tot print it in wave pattern

import { isValidTwoDArr, printInConsole } from "../globalHelperFunctions.js";

// like this > 1,4,7,8,5,2,3,6,9

const printInWave = (arr) => {
  if (!isValidTwoDArr({ arr }).isValid) {
    printInConsole("Invalid arr");
    return null;
  }
  let j = 0;
  while (j < arr[0].length) {
    if (j % 2 === 0) {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i][j];
        console.log(element);
      }
    } else {
      for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i][j];
        console.log(element);
      }
    }
    j++;
  }
  console.log("--------------------");
};

console.log(
  printInWave([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  printInWave([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
