const revreseArr = (arr) => {
    return arr.reverse();
}

const reverseMethod =(arr)=> {
    let i=0;
    let temp;
    let j =arr.length-1;
    while(i<j){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
}

