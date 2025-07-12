import { printInConsole } from "../../../globalHelperFunctions.js";

export const decimalToAnyBase = (inputNumber, base) => {
  if (inputNumber === 0) return "0"; // Handle zero
  if (
    typeof inputNumber !== "number" ||
    typeof base !== "number" ||
    inputNumber < 0 ||
    !Number.isInteger(inputNumber) ||
    base < 2 ||
    base > 36
  ) {
    printInConsole(
      "Invalid input: number must be a non-negative integer and base must be between 2 and 36 in decimalToAnyBase function"
    );
    return null;
  }

  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = inputNumber;
  let result = "";

  while (number > 0) {
    const remainder = number % base;
    result = digits[remainder] + result;
    number = Math.floor(number / base);
  }

  return result;
};

// console.log(decimalToAnyBase(10, 2)); // Binary → "1010"
// console.log(decimalToAnyBase(255, 16)); // Hex → "FF"
// console.log(decimalToAnyBase(100, 8)); // Octal → "144"
// console.log(decimalToAnyBase(0, 10)); // Zero → "0"
// console.log(decimalToAnyBase(12345, 36)); // Max base → "9IX"
// console.log(decimalToAnyBase(-10, 2)); // Invalid input
// console.log(decimalToAnyBase(15.5, 2)); // Invalid input
// console.log(decimalToAnyBase(10, 1)); // Invalid base
