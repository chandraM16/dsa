const printIncreasingDecreasing = (num) => {
    if(num === 0){
        return;
    }
    console.log(num)
    printIncreasingDecreasing(num -1)
    console.log(num)
}


printIncreasingDecreasing(5)