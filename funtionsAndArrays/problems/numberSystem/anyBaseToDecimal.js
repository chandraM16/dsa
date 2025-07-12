import { printInConsole } from "../../../globalHelperFunctions.js";

export const anyBaseToDecimal = (number, base) => {
  if (
    !number ||
    !base ||
    typeof number !== "string" ||
    typeof base !== "number" ||
    !Number.isInteger(base) ||
    (base > 16 && base < 2)
  ) {
    printInConsole("Please Provide Valid input to anyBaseToDecimal function ");
    return null;
  }
  if (number === "0") {
    return 0;
  }

  let res = 0;
  let power = 0;
  let digitStr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = number.toUpperCase();

  while (num.length > 0) {
    // get last chat of num

    let lastDigit = num.at(-1);
    let lastDigitValue = digitStr.indexOf(lastDigit);

    if (lastDigitValue === -1 || lastDigitValue >= base) {
      //  for binary numbers should between 0 and 1
      //  for decimal numbers should between 0 and 9
      //  for hex-decimal numbers should between 0 and 15
      printInConsole(`Invalid digit '${lastDigit}' for base ${base}`);
      return null;
    }
    let cal = +lastDigitValue * Math.pow(base, power);
    res += cal;
    num = num.slice(0, num.length - 1);
    power++;
  }
  return res;
};

// console.log(anyBaseToDecimal("1010", 2)); // ✅ 10
// console.log(anyBaseToDecimal("FF", 16)); // ✅ 255
// console.log(anyBaseToDecimal("144", 8)); // ✅ 100
// console.log(anyBaseToDecimal("0", 10)); // ✅ 0
// console.log(anyBaseToDecimal("9IX", 36)); // ✅ 12345
// console.log(anyBaseToDecimal("123", 2)); // ❌ Invalid digit '2' for base 2
// console.log(anyBaseToDecimal("abc", 16)); // ✅ 2748 (case-insensitive now)
// console.log(anyBaseToDecimal("Z", 36)); // ✅ 35
