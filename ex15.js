
const readlineSync = require('readline-sync');

function getMinMax(arr) {
    return arr.reduce(({min, max}, v,index) => ({
      min: min < v ? min : v,
      max: max > v ? max : v,
    }), { min: arr[0], max: arr[0] });
  }

const arr =[];

const getNumber = () => {
    let num = readlineSync.question('plz insert wanted length of arr ');

    let  num1 = parseInt(num);
    return num1;
}

const index = getNumber();
for(let i=0;i<index;i++){
    arr.push(Math.floor(Math.random() * 50)+1);

}

const res = getMinMax (arr);

console.log('min is '+res.min);
console.log('max is '+res.max);
