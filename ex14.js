
const arr =[];

for(let i=0;i<5;i++){
    arr.push(Math.floor(Math.random() * 100));

}

arr.sort();
for(let val of arr){
    console.log(val);
}