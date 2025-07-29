// you will be given an sorted array and num , yo have to find out the last and first index of the num
// for example, arr = [10, 20, 20, 20, 50, 60, 60, 60, 70, 70], num = 20
// first index -> 1 and last index -> 3

const findFirstAndLatIndex = (arr, num) => {
  if (!arr || !Array.isArray(arr) || arr.length === 0 || arr.length === 1) {
    printInConsole("Invalid Arr input");
    return null;
  }
  if (!num || typeof num !== "number") {
    printInConsole("Invalid Num input");
    return null;
  }

  let firstIndex = -1;
  let lastIndex = -1;

  // find the first index

  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > num) {
      high = mid - 1;
    } else if (arr[mid] < num) {
      low = mid + 1;
    } else {
      firstIndex = mid;
      high = mid - 1;
    }
  }

  // find the last index

  low = 0;
  high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > num) {
      high = mid - 1;
    } else if (arr[mid] < num) {
      low = mid + 1;
    } else {
      lastIndex = mid;
      low = mid + 1;
    }
  }

  return [firstIndex, lastIndex];
};

console.log(
  findFirstAndLatIndex([10, 20, 30, 30, 30, 60, 70, 70, 70, 90, 90, 90, 90], 10)
);



