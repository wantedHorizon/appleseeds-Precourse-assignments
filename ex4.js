var readlineSync = require('readline-sync');


const restaurant = () => {

    let ans1 = readlineSync.question(' How many people are you going with? ');
    a1 = parseInt(ans1);
    let kosher = 'All types of kashrut';
    
    if(Number.isInteger(a1) &&a1 >0){
        readlineSync.setDefaultOptions({limit: ['y', 'n']});
        let a2 = readlineSync.question('Should it be Kosher? ');
        
        if(a2 === 'y'){
            kosher = 'Regular Kashrut';

            let a3 = readlineSync.question('should it be Kashrut Lemehadrin? ');
            if(a3 === 'y'){
                kosher ='Kashrut Lemehadrin';
            }


        }

        const types = ['Meat', 'Cheese', 'Italian', 'Japanese','24/7'];
        const res = ['BBB','Cheese Cake factory','Tereza','Tranzit','Nafis'];
         index = readlineSync.keyInSelect(types, 'Which animal?');
         if(index === -1){
             console.log('canceld')
         } else{
            console.log(index);

            console.log('Ok, we are finding you a restaurant with thoose settings: \ntype: ' + types[index] + ' restaurant with '+kosher +' ,'+a1+' people');
            console.log('we found:'+ res[index]);
         }


    } else{
        console.log('plz enter a valid number');
        throw "stop execution";

    }


}

restaurant();
