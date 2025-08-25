const firstIndexofOccurrence = (arr, num) => {
  //   return helperFunction(arr, arr.length - 1, num);
  return helperFunction2(arr, 0, num);
};
const helperFunction = (arr, idx, num) => {
  if (idx < 0) {
    return -1;
  }
  const foundIdx = helperFunction(arr, idx - 1, num);
  if (foundIdx !== -1) {
    return foundIdx;
  }
  if (arr[idx] === num) {
    return idx;
  }
  return -1;
};
const helperFunction2 = (arr, idx, num) => {
  if (idx === arr.length) {
    return -1;
  }
  if (arr[idx] === num) {
    return idx;
  } else {
    const foundIdx = helperFunction2(arr, idx + 1, num);
    return foundIdx;
  }
};

console.log(
  firstIndexofOccurrence([2, 3, 9, 8, 7, 6, 4, 8, 12, 7, 3, 8, 12], 2)
);
