const readlineSync = require('readline-sync');
let ans1 = readlineSync.question('please enter a string:').toString();

let result = ans1.split(' ').join('*');
console.log(result);