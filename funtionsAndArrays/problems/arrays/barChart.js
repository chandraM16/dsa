// you will get an array, print the bar like below
// arr = [3, 4, 0, 7, 5];
//      *
//      *
//      * *
//   *  * *
// * *  * *
// * *  * *
// * *  * *

const printBar = (arr = []) => {
  // find the max element
  let maxEle = arr.at(0);
  arr.forEach((element) => {
    maxEle = Math.max(element, maxEle);
  });

  for (let i = maxEle; i > 0; i--) {
    let layer = "";
    arr.forEach((ele) => {
      if (ele >= i) {
        layer += " * ";
      } else {
        layer += "   ";
      }
    });
    console.log(layer);
    layer = "";
  }
};

printBar([3, 4, 0, 7, 5]);
