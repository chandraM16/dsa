// Examples:

// Input Format: N = 3
// Result: 
// *****  
//  ***
//   *   
// Input Format: N = 6
// Result:     
// ***********
//  *********
//   *******
//    ***** 
//     ***    
//      *

const printPatternP8 = (n) => {
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

printPatternP8(4);
