import { printInConsole } from "../../../globalHelperFunctions.js";

const anyBaseAddition = (inputNum1, inputNum2, base) => {
  if (
    !inputNum1 ||
    !inputNum2 ||
    !base ||
    typeof inputNum1 !== "string" ||
    typeof inputNum2 !== "string" ||
    typeof base !== "number" ||
    !Number.isInteger(base) ||
    base < 2 ||
    36 < base
  ) {
    printInConsole("Invalid input in anyBaseAddition");
    return null;
  }

  const digit = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let num1 = inputNum1.toUpperCase();
  let num2 = inputNum2.toUpperCase();

  let i = inputNum1.length - 1;
  let j = inputNum2.length - 1;
  let q = 0;
  let r = 0;
  let carry = 0;
  let res = "";

  while (i >= 0 || j >= 0 || carry !== 0) {
    try {
      let lastDigitOfNum1 = i >= 0 ? num1[i] : null;
      let lastDigitValueOfNum1 = lastDigitOfNum1
        ? digit.indexOf(lastDigitOfNum1)
        : 0;

      let lastDigitOfNum2 = j >= 0 ? num2[j] : null;
      let lastDigitValueOfNum2 = lastDigitOfNum2
        ? digit.indexOf(lastDigitOfNum2)
        : 0;

      if (lastDigitValueOfNum1 >= base || lastDigitValueOfNum2 >= base) {
        printInConsole("Invalid base! according to numbers!");
        return null;
      }

      let digitSum = lastDigitValueOfNum1 + lastDigitValueOfNum2 + carry;
      q = Math.floor(digitSum / base);
      r = digitSum % base;
      if (q !== 0) {
        carry = 1;
      } else {
        carry = 0;
      }
      let digitSumValue = digit[r];
      res = digitSumValue + res;
      i--;
      j--;
    } catch (error) {
      printInConsole(error);
    }
  }
  return res;
};

console.log(anyBaseAddition("1010", "1101", 2)); // ➤ "10111"
console.log(anyBaseAddition("A", "1", 16)); // ➤ "B"
console.log(anyBaseAddition("Z", "1", 36)); // ➤ "10"
console.log(anyBaseAddition("777", "1", 8)); // ➤ "1000"
console.log(anyBaseAddition("0", "0", 10)); // ➤ "0"
console.log(anyBaseAddition("AB", "CD", 16)); // ➤ "178"
console.log(anyBaseAddition("0", "0", 10)); // ➤ "0"
console.log(anyBaseAddition("FF", "CAB", 16)); // ➤ "DAA"

console.log(anyBaseAddition("1", "1", 1)); // ➤ null
console.log(anyBaseAddition("1", "1", 37)); // ➤ null

console.log(anyBaseAddition("1G", "2", 16)); // ➤ null (invalid digit 'G')
