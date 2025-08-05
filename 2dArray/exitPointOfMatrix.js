//you will give 2d arr, containing 0 and 1.
// rule you enter in 2d arr from 0,0 going in right direction and whenever the you have 1 you make right turn.
//so you have to find out the exit point of matrix.

import { isValidTwoDArr, printInConsole } from "../globalHelperFunctions.js";

// [
//    >[0,0,0,1,0],
//     [0,1,1,0,0],
//     [1,0,0,0,0], >
//     [0,1,0,1,0],
//     [1,0,1,0,1],
// ]

const exitPointOfMatrix = (arr) => {
  const arrInfo = isValidTwoDArr(arr, "number");
  if (!arrInfo.isValid) {
    printInConsole("Invalid Arr Input!");
  }

  let i = 0;
  let j = 0;
  let direction = 0;

  while (i < arr.length && j < arr[0].length) {
    const ele = arr[i][j];
    direction = (direction + ele) % 4;
    if (direction === 0) {
      //move in east direction
      j++;
    } else if (direction === 1) {
      //move in south direction
      i++;
    } else if (direction === 2) {
      //move in west direction
      j--;
    } else if (direction === 3) {
      // move in north direction
      i--;
    }
  }

  if (i === arr.length) {
    return [i - 1, j];
  }
  if (j === arr[0].length) {
    return [i, j - 1];
  }
  if (i < 0) {
    return [i + 1, j];
  }
  if (j < 0) {
    return [i, j + 1];
  }
};

console.log(
  exitPointOfMatrix([
    [0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
  ])
);
