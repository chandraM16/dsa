const getStairPath = (n) => {
  if (n === 0) {
    return [""];
  }
  if (n < 0) {
    return [];
  }
  let path1 = getStairPath(n - 1);
  let path2 = getStairPath(n - 2);
  let path3 = getStairPath(n - 3);

  path1 = path1.map((path) => "1" + path);
  path2 = path2.map((path) => "2" + path);
  path3 = path3.map((path) => "3" + path);

  return [...path1, ...path2, ...path3];
};

console.log(getStairPath(4));
