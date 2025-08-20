const power = (num, pow) => {
  if (pow === 0) {
    return 1;
  }
  const num1 = power(num, pow - 1);
  return num * num1;
};

console.log(power(2, 3)); // 8
