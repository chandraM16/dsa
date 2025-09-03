// Example 1:
// Input: N = 3
// Output:
// * * *
// * * *
// * * *

// Example 2:
// Input: N = 6
// Output:
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

const printPatternP1 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "* ";
    }
    console.log(str);
  }
};

printPatternP1(4);
