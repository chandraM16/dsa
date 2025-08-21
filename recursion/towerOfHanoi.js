const towerOfHanoi = (st, dt, ht, numOfDisk) => {
  if (numOfDisk === 0) {
    return;
  }
  towerOfHanoi(st, ht, dt, numOfDisk - 1);
  console.log(`Move disk ${numOfDisk} from ${st} to ${dt}`);
  towerOfHanoi(ht, dt, st, numOfDisk - 1);
};


towerOfHanoi("A", "C", "B", 4);
