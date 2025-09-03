const printPermutation = (str) => {
  return helperFunction(str);
};

const helperFunction = (str, ans) => {
  if (str.length === 0) {
    return [""];
  }
  const res = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const ros = str.slice(0, i) + str.slice(i + 1);
    const resTillNow = helperFunction(ros, ans + ch);
    for (let j = 0; j < resTillNow.length; j++) {
      res.push(ch + resTillNow[j]);
    }
  }
  return res;
};

console.log(printPermutation("abcd"));
