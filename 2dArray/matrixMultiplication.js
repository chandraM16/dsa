import { isValidTwoDArr, printInConsole } from "../globalHelperFunctions.js";

export const matrixMultiplication = (arr1, arr2) => {
  const arr1Info = isValidTwoDArr(arr1, "number");
  const arr2Info = isValidTwoDArr(arr2, "number");
  if (!arr1Info.isValid) {
    printInConsole("Invalid Arr1");
    return;
  }
  if (!arr2Info.isValid) {
    printInConsole("Invalid Arr2");
    return;
  }

  if (arr1Info?.col !== arr2Info.row) {
    printInConsole(
      "Invalid input for multiplication: Row and Col does not match"
    );
    return null;
  }

  // if code is here then everything is correct
  const res = [];

  for (let i = 0; i < arr1Info.row; i++) {
    let itemArr = [];
    for (let j = 0; j < arr2Info.col; j++) {
      let sum = 0;
      for (let k = 0; k < arr1Info.col; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      itemArr.push(sum);
    }
    res.push(itemArr);
  }

  return res;
};

// 1. Square Matrix (3×3) × (3×2)
console.log(
  matrixMultiplication(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
  )
);
Expected: [
  [22, 28],
  [49, 64],
  [76, 100],
];

// 2. 2×3 × 3×2
console.log(
  matrixMultiplication(
    [
      [1, 4, 7],
      [2, 5, 8],
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
  )
);
// Expected: [[1+12+35, 2+16+42], [2+15+40, 4+20+48]]
// Expected: [[54, 64], [57, 68]]

// 3. Identity matrix multiplication (3×3)
console.log(
  matrixMultiplication(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    [
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13],
    ]
  )
);
// Expected: [[5,6,7], [8,9,10], [11,12,13]]

// 4. Single row × single column (1×3 × 3×1)
console.log(matrixMultiplication([[1, 2, 3]], [[4], [5], [6]]));
// Expected: [[32]]

// 5. Single element (1×1 × 1×1)
console.log(matrixMultiplication([[5]], [[7]]));
// Expected: [[35]]
