const figlet = require('figlet');
const readlineSync = require('readline-sync');


arr = ['test','shalom','test','false','course','hello'];


printMsg=(word)=>{

    console.log(figlet.textSync(word, {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));
}


validateInput = (a, prev) =>{

    if(prev.includes(a) ) {
        console.log('you already enterd this letter');
        return false; 
    } else if(a.length !== 1){
        console.log('plz enter a single letter')
        return false;
    }  else if ( !a.match(/[a-z]/i)){
        console.log('plz enter a valid letter')
        return false;
    }

    return true;


}
const getGuess = () => {
    let str = readlineSync.question('enter your guess:');
    return str.toString().toLocaleLowerCase();

}
const checkWin =(array) =>{
    let res = true;
    for(let val of array){
        res= res && val.visible;
    }
    return res;
}

const createLettersArray = (w) => {
    const array = w.split('').map(val => {return {c: val, visible:false}});
    return array;
}

const checkIfChanged = (guess,array)=>{
    let changed = false;
    for(let i=0; i<array.length ;i++){
        if(!array[i].visible && array[i].c === guess){
            changed =true;
            array[i].visible = true;
        }
    }

    return changed;
}
const printWord = (array) =>{
    let res = '';
    for(let val of array){
        if(val.visible)
            res+=val.c;
        else res+= '*';    
    }
    console.log(res);
}

const startGame = (arr) => {
    const w = arr [Math.floor(Math.random()*arr.length)];
    let strike = 0;
    let left =10;
    let prevGuessed = '';
    let won = false;
    //const wordArr = w.split('').map((val)=>{return{w:val, visible:false} });
    const charArray =createLettersArray(w);//create letters array
    printMsg('Hanged Man!!');
    while(strike <10 && !won ){
        console.log('-------------------------------');
        left = 10 -strike;
        console.log(`You have ${left} guesses)`);

        printWord(charArray);
        guess = getGuess();
        if(guess === w){
            printMsg('You Win!!');
            
            won =true;
            break;
        } 
        else if(!validateInput(guess,prevGuessed)){//validate input
            console.log('Try again');
            continue;
        }

        if(checkIfChanged(guess,charArray)){
            console.log('Good Guess');
            if(checkWin(charArray)){
                printMsg('You Win!!');

                won =true;
            }
            
        } else{
            console.log('bad guess');
            strike++;
            if(strike >9){
                printMsg('You Lose');

            }
        }
        prevGuessed+=guess;



    }
}

 startGame(arr);