const printArrEle = (arr) => {
  displayEle(arr, 0);
};

const displayEle = (arr, idx) => {
  if (idx === arr.length) {
    return;
  }
  console.log(arr[idx]);
  displayEle(arr, idx + 1);
};

printArrEle([1, 2, 3, 4, 5]);
