// you will give the number and you have to print the number in decreasing order but using recursion
const printDecreasing = (num) => {
    if (num === 0) {
        return;
    }
    console.log(num);
    printDecreasing(num - 1);
}