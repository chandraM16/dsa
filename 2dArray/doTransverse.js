import { isValidTwoDArr, printInConsole } from "../globalHelperFunctions.js";

export const doTransverse = (arr = [[]]) => {
  const arrInfo = isValidTwoDArr({ arr, isSquare: true });

  if (!arrInfo.isValid) {
    printInConsole("Invalid Input arr");
    return;
  }

  let i = 0;

  while (i < arr.length) {
    let j = 0;
    while (j < i) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
      j++;
    }
    i++;
  }

  return arr;
};
console.log(
  doTransverse([
    [1, 2],
    [3, 4],
  ])
);

console.log(
  doTransverse([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// Expected Output:
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ]

console.log(doTransverse([[99]]));
// Expected Output: [[99]]

console.log(
  doTransverse([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
// Expected Output:
// [
//   [1, 5, 9, 13],
//   [2, 6, 10, 14],
//   [3, 7, 11, 15],
//   [4, 8, 12, 16],
// ]

console.log(
  doTransverse([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
// Expected Output: Error printed → "Invalid Input arr"
