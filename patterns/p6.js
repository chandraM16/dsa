// Examples:

// Input Format: N = 3
// Result:
// 1 2 3
// 1 2
// 1

// Input Format: N = 6
// Result:
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

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
