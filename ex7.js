const readlineSync = require('readline-sync');


function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

let check = false; 
let a ;

     a = readlineSync.questionInt('please enter a positive number:');
  if(a< 0){
    console.log("error");
  } else {
    const result =factorialize(a);

    console.log("factorial: "+result);
  }

