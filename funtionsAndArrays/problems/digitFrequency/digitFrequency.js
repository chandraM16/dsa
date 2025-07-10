// find the number of appearances of given digit in a given number
// for example, the digit 1 appears 3 times in the number 1112345 and you cant use string methods

const digitFrequency = (number, digit) => {
  if (
    typeof number !== "number" ||
    typeof digit !== "number" ||
    digit < 0 ||
    digit > 9
  ) {
    return "Invalid input: number must be a non-negative integer and digit must be between 0 and 9";
  }

  let count = 0;
  let currentNumber = Math.abs(number); // Handle negative numbers

  while (currentNumber > 0) {
    const lastDigit = currentNumber % 10; // Get the last digit
    if (lastDigit === digit) {
      count++;
    }
    currentNumber = Math.floor(currentNumber / 10); // Remove the last digit
  }

  return `The digit ${digit} appears ${count} times in the number ${number}`;
};

// Example usage:
console.log(digitFrequency(123321, 1)); // The digit 1 appears 2 times in the number 123321
console.log(digitFrequency(456, 5)); // The digit 5 appears 1 times in the number 456
console.log(digitFrequency(0, 0)); // The digit 0 appears 1 times in the number 0
console.log(digitFrequency(-1112345, 1)); // The digit 1 appears 3 times in the number -1112345
console.log(digitFrequency(1112345, 10)); // Invalid input: number must be a non-negative integer and digit must be between 0 and 9
console.log(digitFrequency(1112345, -1)); // Invalid input: number must be a non-negative integer and digit must be between 0 and 9
