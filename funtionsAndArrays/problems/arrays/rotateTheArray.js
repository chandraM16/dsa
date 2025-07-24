import { printInConsole } from "../../../globalHelperFunctions.js";

// you will given a array and number, rotate the array by the given number (number could positive and negative)
// for example, if you give [1, 2, 3, 4, 5] and 2, you will get [3, 4, 5, 1, 2] ( clockwise rotation)
// for example, if you give [1, 2, 3, 4, 5] and -2, you will get [4, 5, 1, 2, 3] ( anticlockwise rotation)

const rotateTheArrayByNumber = (arr, num) => {
  if (!Array.isArray(arr) || typeof num !== "number") {
    throw new Error(
      "Invalid input: first argument must be an array and second argument must be a number"
    );
  }
  if (num === 0 || num === arr.length) {
    return arr;
  }

  let rotateByNum = num % arr.length;
  if (rotateByNum < 0) {
    rotateByNum += arr.length;
  }
  let firstPart = arr.slice(0, arr.length - rotateByNum);
  let secondPart = arr.slice(arr.length - rotateByNum);

  // reverse 1st part
  let res1 = reverseArray(firstPart);
  // reverse 2nd part
  let res2 = reverseArray(secondPart);
  // reverse complete arr

  const completeArr = [...res1, ...res2];

  return reverseArray(completeArr);
};

const reverseArray = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    printInConsole(
      "Invalid input: argument must be an array and valid indices"
    );
    return;
  }
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  let i = 0;
  let j = arr.length - 1;
  const res = [...arr];
  while (i <= j) {
    [res[i], res[j]] = [arr[j], arr[i]];
    res[i] = arr[j];
    res[j] = arr[i];
    i++;
    j--;
  }
  return res;
};

console.log(
  rotateTheArrayByNumber(["a", "b", "c", "d", "e", "f", "g", "h"], 2)
); // ["g", "h", "a", "b", "c", "d", "e", "f"];
console.log(
  rotateTheArrayByNumber(["a", "b", "c", "d", "e", "f", "g", "h"], -65)
); // ["g", "h", "a", "b", "c", "d", "e", "f"];
