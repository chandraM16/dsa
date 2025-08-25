const findMinEle = (arr) => {
  return helperFunction(arr, 0);
};

const helperFunction = (arr, idx) => {
  if (idx === arr.length - 1) {
    return arr[idx];
  }
  const min = helperFunction(arr, idx + 1);
  if (min < arr[idx]) {
    return min;
  }
  return arr[idx];
};

console.log(findMinEle([1, 2, 3, 4, 5, -34]));
