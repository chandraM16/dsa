export const printInConsole = (text) => {
  console.log(text);
  console.log("----------------------------------------");
};

export const throwError = (message) => {
  throw new Error(message);
};

export const isValidTwoDArr = ({ arr, eleType, isSquare }) => {
  try {
    if (!arr || !Array.isArray(arr)) {
      return { isValid: false };
    }
    const row = arr.length;
    let col = arr[0].length;

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i] || !Array.isArray(arr[i])) {
        return { isValid: false };
      }
      let itemArrLength = arr[0]?.length;
      if (col !== itemArrLength || (isSquare && itemArrLength !== row)) {
        return { isValid: false };
      } else {
        col = itemArrLength;
      }
      if (eleType) {
        for (let j = 0; j < itemArrLength; j++) {
          if (typeof arr[i][j] !== eleType) {
            return { isValid: false };
          }
        }
      }
    }
    return { row, col, isValid: true };
  } catch (error) {
    printInConsole({ error });
    return { isValid: false };
  }
};
