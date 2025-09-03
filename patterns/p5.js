// Examples:

// Input Format: N = 3
// Result:
// * * *
// * *
// *

// Input Format: N = 6
// Result:
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

const printPatternP5 = (n) => {
  for (let i = 0; i < n; i++) {
    let col = n - i;
    let str = "";
    for (let j = 0; j < col; j++) {
      str += "* ";
    }
    console.log(str);
  }
};

printPatternP5(0);
