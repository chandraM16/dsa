// Input Format: N = 3
// Result:
// 1
// 01
// 101

// Input Format: N = 6
// Result:
// 1
// 01
// 101
// 0101
// 10101
// 010101

const printPatternP11 = (n) => {
  for (let i = 0; i < n; i++) {
    let temp = 1;
    if (i % 2 === 0) {
      //row is even
      temp = 1;
    } else {
      temp = 0;
    }
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += `${temp} `;
      temp = temp === 1 ? 0 : 1;
    }
    console.log(str);
  }
};

printPatternP11(8);
