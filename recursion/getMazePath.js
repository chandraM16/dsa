const getMazePath = (sr, sc, dr, dc) => {
  if (sr === dr && sc === dc) {
    return [""];
  }
  if (sr > dr || sc > dc) {
    return [];
  }
  let hPath = [];
  let vPath = [];
  // horizontal move
  if (sc < dc) {
    hPath = getMazePath(sr, sc + 1, dr, dc);
  }
  // vertical move
  if (sr < dr) {
    vPath = getMazePath(sr + 1, sc, dr, dc);
  }
  hPath = hPath?.map((path) => `h${path}`);
  vPath = vPath?.map((path) => `v${path}`);

  return [...hPath, ...vPath];
};

console.log(getMazePath(1, 1, 3, 3));
