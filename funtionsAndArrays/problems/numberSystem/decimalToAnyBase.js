// convert decimal number in nay base b

/**
 * Converts a decimal number to its equivalent in a specified base (between 2 and 36).
 *
 * @param {number} inputNumber - The decimal number to be converted. Must be a non-negative integer.
 * @param {number} base - The base to convert the number to. Must be an integer between 2 and 36.
 * @returns {string} - A string representing the converted number in the specified base, or an error message if inputs are invalid.
 *
 * The function supports bases up to 36, using digits 0-9 and letters A-Z for representation.
 */

const decimalToAnyBase = (inputNumber, base) => {
  if (
    typeof inputNumber !== "number" ||
    typeof base !== "number" ||
    inputNumber < 0 ||
    !Number.isInteger(inputNumber) ||
    base < 2 ||
    base > 36
  ) {
    return "Invalid input: number must be a non-negative integer and base must be between 2 and 36";
  }

  if (inputNumber === 0) return "0"; // Handle zero

  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = inputNumber;
  let result = "";

  while (number > 0) {
    const remainder = number % base;
    result = digits[remainder] + result;
    number = Math.floor(number / base);
  }

  return `The ${inputNumber} in base ${base} is ${result}`;
};

console.log(decimalToAnyBase(10, 2)); // Binary → "1010"
console.log(decimalToAnyBase(255, 16)); // Hex → "FF"
console.log(decimalToAnyBase(100, 8)); // Octal → "144"
console.log(decimalToAnyBase(0, 10)); // Zero → "0"
console.log(decimalToAnyBase(12345, 36)); // Max base → "9IX"
console.log(decimalToAnyBase(-10, 2)); // Invalid input
console.log(decimalToAnyBase(15.5, 2)); // Invalid input
console.log(decimalToAnyBase(10, 1)); // Invalid base
