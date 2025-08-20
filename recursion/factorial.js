const findFactorial = (num) => {
  if (num === 1) {
    return 1;
  }

  const num1 = findFactorial(num - 1);
  return num * num1;
};
console.log(findFactorial(6));
