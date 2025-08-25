const getSubsequence = (str) => {
  return helperFunction(str);
};
const helperFunction = (str) => {
  if (str.length === 0) {
    return ["-"];
  }
  if (str.length === 1) {
    return [str[0], "-"];
  }
  const ch = str[0];
  const subString = str.slice(1);
  const recursionRes = helperFunction(subString);

  const res = [];

  for (let i = 0; i < recursionRes.length; i++) {
    res.push("-" + recursionRes[i]);
    res.push(ch + recursionRes[i]);
  }

  return res;
};

console.log(getSubsequence("abc"));
