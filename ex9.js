const readlineSync = require('readline-sync');

const printPrimes =(n) => {
    var arr  = [], i, j, primes = [];
    for (i = 2; i <= n; ++i) 
    {
        if (!arr [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= n; j += i) 
            {
                arr[j] = true;
            }
        }
    }
    return primes;
}
let check = false; 

    const a = readlineSync.question('please enter a positive number:');
    
    if(a< 1){
        console.log("plz enter a number bigger then 1");
    } else {
        console.log(printPrimes(a));    }



