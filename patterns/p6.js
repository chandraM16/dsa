const printPatternP6 = (n) => {
  for (let i = 0; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += j;
    }
    console.log(str);
  }
};

printPatternP6(8);
