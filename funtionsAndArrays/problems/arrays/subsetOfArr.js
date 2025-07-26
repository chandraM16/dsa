// you will given an arr [a,b,c] nad you have print its all subset array
// for  [a,b,c], subset are [-,-,-],[-,-,c],[-,b,-],[-,b,c],[a,-,-],[a,-,c],[a,b,-],[a,b,c]

import { printInConsole } from "../../../globalHelperFunctions.js";

const printAllSubSetOfArr = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    printInConsole("Invalid Arr input");
    return;
  }

  const limit = Math.pow(2, arr.length);
  let i = 0;
  while (i < limit) {
    //convert the i into binary
    const binaryArr = i.toString(2).padStart(arr.length, "0").split(""); // [0, 0, 0];
    let res = "";
    binaryArr.forEach((item, k) => {
      if (item === "1") {
        res += arr[k];
      } else {
        res += "-";
      }
    });
    console.log(res);
    i++;
  }
};

printAllSubSetOfArr(["a", "b", "c", "d", "e"]);
