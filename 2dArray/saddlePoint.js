// the saddle point is define as a number which is minimum in row and maximum in column

// every 2D matrix will have only one saddle point 
import { isValidTwoDArr, printInConsole } from "../globalHelperFunctions.js"

const findSaddlePoint = (arr) => {
   const arrInfo = isValidTwoDArr({ arr, eleType: "number" })
   if (!arrInfo.isValid) {
      printInConsole("Invalid Input!")
      return null
   }


   let minEleCol = 0;
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
         if(arr[i][j] < arr[i][minEleCol]){
            minEleCol = j
         }
      }
      for (let k = 0; k < arr.length; k++) {
         if(arr[i][minEleCol] < arr[k][minEleCol]){
            return arr[i][minEleCol]
         }
      }
   }
   return -1;
}