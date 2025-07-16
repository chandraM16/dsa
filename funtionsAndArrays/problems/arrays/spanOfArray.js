import { printInConsole } from "../../../globalHelperFunctions.js";

// span = max ele of arr - min ele of arr

export const fetchSpanOfArray = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    printInConsole("Given input array is not array !");
    return;
  }
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  }

  let min = arr.at(0);
  let max = arr.at(0);
  for (let idx = 0; idx < arr.length; idx++) {
    const element = arr[idx];
    if (typeof element !== "number") {
      printInConsole(`${element} is not number at index ${idx}`);
      return 0;
    }
    min = Math.min(min, element);
    max = Math.max(max, element);
  }
  return max - min;
};

console.log(fetchSpanOfArray([1, 2, 3, 4, 5])); // 4
console.log(fetchSpanOfArray([5, 1, 9, -2, 3])); // 11
console.log(fetchSpanOfArray([10, 10, 10, 10])); // 0
console.log(fetchSpanOfArray([100])); // 0
console.log(fetchSpanOfArray([100, 1000])); // 900
console.log(fetchSpanOfArray([-10, -5, -20, -1])); // 19
console.log(fetchSpanOfArray([0, 0, 0])); // 0
console.log(
  fetchSpanOfArray([Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER])
); // 18014398509481982

// Invalid Inputs
console.log(fetchSpanOfArray([])); // 0
console.log(fetchSpanOfArray("not an array")); // undefined (Logs error)
console.log(fetchSpanOfArray(12345)); // undefined (Logs error)
console.log(fetchSpanOfArray(null)); // undefined (Logs error)
console.log(fetchSpanOfArray(undefined)); // undefined (Logs error)
console.log(fetchSpanOfArray([1, 2, "a", 4])); // 0 (Logs error: "a is not number at index 2")
console.log(fetchSpanOfArray([1, 2, NaN, 4])); // NaN (Assuming NaN is treated as number)
console.log(fetchSpanOfArray([1, 2, {}, 4])); // 0 (Logs error: [object Object] is not number at index 2)
console.log(fetchSpanOfArray([1, 2, [], 4])); // 0 (Logs error:  is not number at index 2)
console.log(fetchSpanOfArray([1, 2, true, 4])); // 0 (Logs error: true is not number at index 2)
