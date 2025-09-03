// Examples:

// Input Format: N = 3
// Result:
// *
// * *
// * * *

// Input Format: N = 6
// Result:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

const printPatternP2 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
};

printPatternP2(8);
