const  readlineSync = require('readline-sync');
  let str = readlineSync.question('please enter a string:');

  const removeNoneLetters = (str) => {

    return str.replace(/[^0-9a-z ]/gi, '')
  }
const  longestword= (str) =>{
    str = removeNoneLetters(str);
    const arr = str.split(' ');
    let res = '';
    for(let w of arr){
        if(w.length > res.length)
        res= w;
    }

    return res;
  }

 


console.log( longestword(str) );
