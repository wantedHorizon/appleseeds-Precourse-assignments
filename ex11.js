const readlineSync = require('readline-sync');


const  checkPalindrom= (str) =>{
    return str == str.split('').reverse().join('');
  }


  let str = readlineSync.question('please enter a string:').toString();
console.log(checkPalindrom(str));