// Input Format: N = 3
// Result:
//   *
//  ***
// *****
// *****
//  ***
//   *
// Input Format: N = 6
// Result:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

const printPatternP9 = (n) => {
  // upper triangle
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
  // lower triangle
  for (let i = n; i > 0; i--) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
};

printPatternP9(15);
