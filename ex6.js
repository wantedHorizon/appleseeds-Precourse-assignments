const readlineSync = require('readline-sync');

let check = false; 
let a = readlineSync.questionInt('please choose a number larger than 10 ');
console.log("User answer : "+a);
if(a >10)
    check=true;
    
while(!check){
     a = readlineSync.questionInt('please choose a number LARGER than 10 ');

     console.log("User answer : "+a);
    if(a >10)
        check=true;
}

console.log("thank you");