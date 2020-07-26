const readlineSync = require('readline-sync');
  let str = readlineSync.question('please enter a string:').toString();

const  capString= (str) =>{
    const arr = str.split('').map((c)=>{
        if('aeiouy'.includes(c))
        return c.toUpperCase();
        
        else 
        return c;
    }).join('');

    return arr;
  }

console.log(capString(str))
