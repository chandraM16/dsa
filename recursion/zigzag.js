const printZigZag = (num) => {
  if (num ==- 0) {
    return;
  }
  console.log("Pre ", num);
  printZigZag(num - 1);
  console.log("In  ", num);
  printZigZag(num - 1);
  console.log("Post ", num);
};
printZigZag(3);
