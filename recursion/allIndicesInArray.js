const allIndicesInArray = (arr, num) => {
  return helperFunction1(arr, 0, num, []);
};
const helperFunction1 = (arr, idx, num, res) => {
  if (arr.length === idx) return [...res];

  let tempRes = [...res];
  if (arr[idx] === num) tempRes.push(idx);
  return helperFunction1(arr, idx + 1, num, tempRes);
};

const helperFunction2 = (arr, idx, num, res) => {
  if (arr.length === idx) return [...res];
  const a = helperFunction1(arr, idx + 1, num, res);
  if (arr[idx] === num) return [idx, ...a];
  else return a;
};

console.log(allIndicesInArray([2, 3, 6, 9, 8, 3, 2, 2, 6, 4], 2));
