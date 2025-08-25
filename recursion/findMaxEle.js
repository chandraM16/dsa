const helperFunction = (arr, idx) => {
  if (idx === 0) {
    return arr[idx];
  }
  const max1 = helperFunction(arr, idx - 1);
  return Math.max(arr[idx], max1);
};

const findMaxEle = (arr) => {
  return helperFunction(arr, arr.length - 1);
};

console.log(findMaxEle([1, 2, 3, 4, 5]));
