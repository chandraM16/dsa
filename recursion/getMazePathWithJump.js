const getMazePathWithJump = (sr, sc, dr, dc) => {
  if (sr === dr && sc === dc) {
    return [""];
  }
  if (sr > dr || sc > dc) {
    return [];
  }
  let allPaths = [];

  // horizontal move

  for (let i = 1; i + sc <= dc; i++) {
    let hPaths = getMazePathWithJump(sr, sc + i, dr, dc);
    hPaths = hPaths?.map((path) => `h${i}${path}`);
    allPaths = [...allPaths, ...hPaths];
  }
  // vertical move
  for (let i = 1; i + sr <= dr; i++) {
    vPaths = getMazePathWithJump(sr + i, sc, dr, dc);
    vPaths = vPaths?.map((path) => `v${i}${path}`);
    allPaths = [...allPaths, ...vPaths];
  }
  // diagonal move
  for (let i = 1; i + sr <= dr && i + sc <= dc; i++) {
    dPaths = getMazePathWithJump(sr + i, sc + i, dr, dc);
    dPaths = dPaths?.map((path) => `d${i}${path}`);
    allPaths = [...allPaths, ...dPaths];
  }

  return allPaths;
};

console.log(getMazePathWithJump(1, 1, 4, 4));
