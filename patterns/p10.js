// Input Format: N = 3
// Result:
//   *
//   **
//   ***
//   **
//   *
// Input Format: N = 6
// Result:
//      *
//      **
//      ***
//      ****
//      *****
//      ******
//      *****
//      ****
//      ***
//      **
//      *

const printPatternP10 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
  for (let i = n - 1; i > 0; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
};

printPatternP10(9);
