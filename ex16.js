
const readlineSync = require('readline-sync');

function getMinMax(arr) {
    return arr.reduce(({min, max}, v,index,array) => ({
      min: array[min] < v ? min : index,
      max: array[max] > v ? max : index,
    }), { min: 0, max:0 });
  }

const arr =[];

const getNumber = () => {
    let num = readlineSync.question('plz insert wanted length of arr ');

    let num1 = parseInt(num);
    return num1;
}

const index = getNumber();
for(let i=0;i<index;i++){
    arr.push(Math.floor(Math.random() * 50)+1);
    console.log(i+' '+arr[i]);

}

const res = getMinMax (arr);

console.log('min is at index '+res.min+ ' :'+arr[res.min]);
console.log('max is at index '+res.max+' :'+arr[res.max]);
