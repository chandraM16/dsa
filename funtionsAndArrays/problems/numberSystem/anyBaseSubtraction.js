import { printInConsole } from "../../../globalHelperFunctions.js";

//
const anyBaseSubtraction = (inputNum1, inputNum2, base) => {
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
    printInConsole("Invalid input in anyBaseSubtraction");
    return null;
  }
  if (isSmaller(inputNum1, inputNum2)) {
    printInConsole("inputNum1 < inputNum2");
    const res = anyBaseSubtraction(inputNum2, inputNum1, base);
    return `-${res}`;
  }

  const digit = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let num1 = inputNum1.toUpperCase();
  let num2 = inputNum2.toUpperCase();

  let i = inputNum1.length - 1;
  let j = inputNum2.length - 1;

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
      let firstNumber = lastDigitValueOfNum1;
      if (lastDigitValueOfNum1 < lastDigitValueOfNum2 + carry) {
        firstNumber += base;
      }

      let digitSub = firstNumber - lastDigitValueOfNum2 - carry;

      let digitSubValue = digit[digitSub];
      res = digitSubValue + res;

      if (lastDigitValueOfNum1 < lastDigitValueOfNum2 + carry) {
        carry = 1;
      } else {
        carry = 0;
      }
      i--;
      j--;
    } catch (error) {
      printInConsole(error);
    }
  }
  return res;
};

export const isSmaller = (num1, num2) => {
  if (num1.length < num2.length) return true;
  else if (num1.length > num2.length) return false;
  else {
    return num1 < num2;
  }
};
// console.log(anyBaseSubtraction("CAB", "FF", 16));
console.log(anyBaseSubtraction("1212", "236", 8));
console.log(anyBaseSubtraction("1010", "0010", 2)); // expected: "1000"
console.log(anyBaseSubtraction("1000", "0001", 2)); // expected: "0111" (Should be "111")
console.log(anyBaseSubtraction("A", "1", 16)); // expected: "9"
console.log(anyBaseSubtraction("100", "1", 10)); // expected: "99"
console.log(anyBaseSubtraction("5", "A", 16));
// expected: "-5", but your code gives wrong output or crashes.
console.log(anyBaseSubtraction("Z", "1", 36)); // expected: "Y"
console.log(anyBaseSubtraction("1G", "1", 16)); // expected: null
