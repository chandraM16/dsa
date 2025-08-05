// you will given an 2d arr and you have to print it spiral way
// [
//     [1, 2, 3]
//     [4, 5, 6]
//     [7, 8, 9]
// ];
// and you have to print it like this > 1,4,7,8,9,6,3,2,5

import { isValidTwoDArr, printInConsole } from "../globalHelperFunctions.js";

const printInSpiralWay = (arr) => {
  const arrInfo = isValidTwoDArr({ arr });
  if (!arrInfo.isValid) {
    printInConsole("Invalid Arr input");
    return null;
  }

  let minR = 0;
  let minC = 0;
  let maxC = arr[0].length - 1;
  let maxR = arr.length - 1;
  let totalEle = arr.length * arr[0].length;
  let count = 0;

  while (count < totalEle) {
    // print left wall
    for (let i = minR; i <= maxR && count < totalEle; i++) {
      const element = arr[i][minC];
      console.log(element);
      count++;
    }
    minC++;
    // print bottom wall
    for (let i = minC; i <= maxC && count < totalEle; i++) {
      const element = arr[maxR][i];
      console.log(element);
      count++;
    }
    maxR--;
    // print right wall
    for (let i = maxR; i >= minR && count < totalEle; i--) {
      const element = arr[i][maxC];
      console.log(element);
      count++;
    }
    maxC--;
    // print top wall
    for (let i = maxC; i >= minC && count < totalEle; i--) {
      const element = arr[minR][i];
      console.log(element);
      count++;
    }
    minR++;
  }
};
printInSpiralWay([
  [1, 2, 3, "a", "b", "c"],
  [4, 5, 6, "p", "q", "r"],
  [7, 8, 9, "x", "y", "z"],
]);
