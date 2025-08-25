const lastIndexOfOccurrence = (arr, num) => {
  return helperFunction(arr, arr.length - 1, num);
};

const helperFunction = (arr, idx, num) => {
  if (idx < 0) return -1;
  if (arr[idx] === num) return idx;
  return helperFunction(arr, idx - 1, num);
};

console.log(lastIndexOfOccurrence([2, 3, 6, 9, 8, 3, 2, 2, 6, 4], 100));
