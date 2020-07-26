var readlineSync = require('readline-sync');


const numLogger = (num) => {
    const arr =[ 'ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

    let num1 = parseInt(num);
   
    if(num1 >=0 && num<10){
        console.log(arr[num1]);
    }
}
let number = readlineSync.question('plz enter a number from 0-9 ');

numLogger(number);
