// convert decimal number in nay base b

const decimalToAnyBase = (inputNumber, base) => {
  let number = inputNumber;
  if (
    typeof number !== "number" ||
    typeof base !== "number" ||
    base < 2 ||
    base > 36
  ) {
    return "Invalid input: number must be a non-negative integer and base must be between 2 and 36";
  }

  if (number === 0) return "0"; // Handle the case for zero

  let result = null;

  let power = 1; // Initialize power of base

  while (number > 0) {
    const lastDigit = number % base; // Get the last digit in the given base
    number = Math.floor(number / base); // Remove the last digit

    result = result + lastDigit * power; // Add the last digit to the result
    power *= 10;
  }

  return `The ${inputNumber} in base ${base} is ${result}`;
};

console.log(decimalToAnyBase(10, 2)); // The number in base 2 is 1010
console.log(decimalToAnyBase(255, 16)); // The number in base 16 is 255
console.log(decimalToAnyBase(100, 8)); // The number in base 8 is 144
console.log(decimalToAnyBase(123456, 36)); // The number in base 36 is 3D7
console.log(decimalToAnyBase(0, 2)); // The number in base 2 is 0
console.log(decimalToAnyBase(10, 1)); // Invalid input: number must be a non-negative integer and base must be between 2 and 36
console.log(decimalToAnyBase(10, 37)); // Invalid input: number must be a non-negative integer and base must be between
