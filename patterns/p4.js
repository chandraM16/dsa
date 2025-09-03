const printPatternP4 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    console.log(str);
  }
};

printPatternP4(5);