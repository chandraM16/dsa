const printArrEleReverse = (arr) => {
    displayEleRevers(arr, arr.length - 1);
};

const displayEleRevers = (arr, idx) => {
  if (idx < 0) {
    return;
  }
  console.log(arr[idx]);
  displayEleRevers(arr, idx - 1);
};

printArrEleReverse([1, 2, 3, 4, 5]);