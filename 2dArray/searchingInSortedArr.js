// you will give the arr and the num, you have to find out whether the num is present in the arr or not.
// if present return the index of the num else return -1
// you can assume that the arr is sorted in row wise and column wise
// example -> arr = 
// [
// [1,2,3,4],
// [5,6,7,8],
// [9,10,11,12]
// ], num = 5, so return (0,1) 

import { isValidTwoDArr, printInConsole } from "../globalHelperFunctions.js"


const searchInSortedArr = (arr, num)=>{
    const arrInfo = isValidTwoDArr({ arr, eleType: "number" })
    if(!arrInfo.isValid){
        printInConsole("Invalid Input Arr!")
        return null;
    }
    let pivotCol  = arr[0].length -1;
    let pivotRow = 0;
    while(pivotRow < arr.length && pivotCol >= 0){
        if(arr[pivotRow][pivotCol] === num){
            return[pivotRow, pivotCol]
        }
        else if(arr[pivotRow][pivotCol] > num){
            pivotCol--
        }
        else {
            pivotRow++
        }
    }
    return -1;
}

console.log(searchInSortedArr([[1,2,3,4],[5,6,7,8],[9,10,11,12]], 12));