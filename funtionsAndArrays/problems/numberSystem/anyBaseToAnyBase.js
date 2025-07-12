import { printInConsole } from "../../../globalHelperFunctions.js";
import { anyBaseToDecimal } from "./anyBaseToDecimal.js";
import { decimalToAnyBase } from "./decimalToAnyBase.js";

export const anyBaseToAnyBase = (inputNumber, fromBase, toBase) => {
  if (inputNumber === 0 || inputNumber === "0") return 0;

  if (
    !inputNumber ||
    !fromBase ||
    !toBase ||
    typeof inputNumber !== "string" ||
    typeof fromBase !== "number" ||
    typeof toBase !== "number" ||
    !Number.isInteger(fromBase) ||
    !Number.isInteger(toBase) ||
    (2 > fromBase && fromBase > 36) ||
    (2 > toBase && toBase > 36)
  ) {
    printInConsole("Invalid Input to anyBaseToAnyBase function !");
    return null;
  }

  const decimalNumberOfGiveNumber = anyBaseToDecimal(inputNumber, fromBase);
  let result;
  if (
    decimalNumberOfGiveNumber &&
    typeof decimalNumberOfGiveNumber === "number"
  ) {
    result = decimalToAnyBase(decimalNumberOfGiveNumber, toBase);
  } else {
    printInConsole(
      `Given number is not able to convert to decimal, Please check your inputNumber!`
    );
    return null;
  }
  return result;
};

// console.log(anyBaseToAnyBase("1010", 2, 10)); // ➤ "10"
// console.log(anyBaseToAnyBase("FF", 16, 10)); // ➤ "255"
// console.log(anyBaseToAnyBase("255", 10, 16)); // ➤ "FF"
// console.log(anyBaseToAnyBase("144", 8, 2)); // ➤ "1100100"
// console.log(anyBaseToAnyBase("0", 10, 2)); // ➤ "0"
// console.log(anyBaseToAnyBase("Z", 36, 10)); // ➤ "35"
// console.log(anyBaseToAnyBase("35", 10, 36)); // ➤ "Z"
// console.log(anyBaseToAnyBase("1A", 16, 2)); // ➤ "11010"
// console.log(anyBaseToAnyBase("11010", 2, 16)); // ➤ "1A"
// console.log(anyBaseToAnyBase("HELLO", 36, 10)); // ➤ "29234652"

// console.log(anyBaseToAnyBase("123", 2, 10)); // ➤ "Invalid digit '2' for base 2"
// console.log(anyBaseToAnyBase("", 10, 2)); // ➤ "Invalid input"
// console.log(anyBaseToAnyBase("A1", 10, 2)); // ➤ "Invalid digit 'A' for base 10"
