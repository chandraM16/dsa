const printIncreasing  = (num)=>{

    if(num < 1){
        return;
    }   
    printIncreasing(num -1)
    console.log(num)
}


printIncreasing(8)