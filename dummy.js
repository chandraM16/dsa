let arr = [1, 2, 3, 4];
function foo(a = []) {
  console.log(a);
  let i = 0;
  let j = a.length - 1;
  while (i <= j) {
    [a[i], a[j]] = [a[j], a[i]];
    i++;
    j--;
  }
  console.log(a);
  return a;
}

console.log(foo(arr));
console.log({ arr }); 

// 