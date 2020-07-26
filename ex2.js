
var readlineSync = require('readline-sync');

const firstFunction = (num1, num2) => {
    if(num1+num2 === 10)
    {
        console.log('makes 10');

    } else {
        console.log('nope');
    }

}

let num1 = parseInt( readlineSync.question('Enter first number '));
let num2 = parseInt (readlineSync.question('Enter second number '));
if(Number.isInteger(num1) && Number.isInteger(num2)){
    firstFunction(num1,num2);
}


