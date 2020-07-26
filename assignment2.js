var readlineSync = require('readline-sync');


const getUsername = (player='') => {
  let str = readlineSync.question(player+'please enter your name: ');
  return str;
}
const getNumber = (money, player='') => {
    let num = readlineSync.question(player+' place a bet between 1 to '+money+': ');

    num1 = parseInt(num);
    return num1;
}

// const getRandomCard = () => {
//     return Math.floor(Math.random() * 11) +1;      // returns a random integer from 1 to 12
    

// }

const getRandomCard = () => {
    return {
        number: Math.floor(Math.random() * 11) +1,
        type:Math.floor(Math.random() * 3)
    }
    

}

const compareCards=(card1,card2, strongType)=>{


    if(card1.type !== card2.type){
        if(card1.type === strongType){
            return 1;
        } else if(card2.type === strongType){
            return -1;
        } else {
            if(card1.number > card2.number){//both cards strong number decide
                return 1;
                } else if(card1.number <card2.number){
                    return -1;
                } else {
                    return 0;
                }
            
        }
    } else{
        if(card1.number > card2.number){//both cards have the same color
            return 1;
            } else if(card1.number <card2.number){
                return -1;
            } else {
                return 0;
            }
    }
}
const startVsGame = () => {
    console.log('////////--------Welcome To WAR--------////////');
    const name1 =getUsername('player1 ');
    const name2 =getUsername('player2 ');
    const types = ['Club','Heart','Spade','Diamond'];
    let strong = 0;
    let bet = 0;
    //console.log('hello '+name+ ' You currently have '+money+' ILS');
    let canBet = true; 
    let wantToplay =true;
    let money1 = 50;
    let money2 = 50;
    let q ='';
    let turn = 1;
    let maxBet = 50;
    
  

    while(canBet && wantToplay){
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        strong = Math.floor(Math.random() * 3);
        console.log('strong card ='+types[strong]);
        
        if(turn %2 === 1){ // set bets by turn 
            bet = getNumber(maxBet ,name1);
            let options = ['Confirm', 'I want to quit'];
            index = readlineSync.keyInSelect(options, name2+', Your balance is '+money2+ ' What would you like to do?');    
            setBetPlayer = 1;
            confirmPlayer =2;
            quitName = name2;

        } else{
            bet = getNumber(maxBet ,name2);
            let options = ['Confirm', 'I want to quit'];
            setBetPlayer = 2;
            confirmPlayer =1;
            quitName = name1;

            index = readlineSync.keyInSelect(options, name1+', Your balance is '+money1+ ' What would you like to do?');
        }
        if(index === 1){
            console.log(quitName+ ' choose to quit');
            wantToplay =false;
            break;
        }
        
        //player choose valid bet
        if(Number.isInteger(bet) && bet >= 1 && bet<= maxBet){
            let player1Card= getRandomCard();
            let player2Card= getRandomCard();
            console.log(name1+' card is '+player1Card.number +' of '+types[player1Card.type]+', '+name2+' card is '+player2Card.number+' of '+types[player2Card.type]);
            console.log('strong card ='+types[strong]);
            let stat =compareCards(player1Card,player2Card,strong);
            if( stat> 0  ){//player1 won
                console.log(name1+' won this round');
                money1+=bet;
                money2-=bet;
                if(money2<1){
                    console.log(name2+' You are broke... Bye Bye ');
                    canBet = false;
                    wantToplay =false;
                    break;
                }
                
            }   else if(stat < 0) { // player1 lost
                console.log(name2+' won this round');     
               money2+=bet;
                money1-=bet;

                //check if ran out of money
                if(money1<1){
                    console.log(name1+' You are broke... Bye Bye ');
                    canBet = false;
                    wantToplay =false;
                    break;
                }
            } else {//draw
                console.log('draw');
            }
           
           maxBet = Math.min(money1,money2);
            
            if(confirmPlayer === 2){ // set bets by turn 
                q=name2+' Your balance is '+money2+ ' What would you like to do?';

            } else {
                q=name1+' Your balance is '+money1+ ' What would you like to do?';

            }
            let options = ['Play another round', 'leave with my money'];
            index = readlineSync.keyInSelect(options,q );  
            
            if(index !== 0){
                wantToplay =false;
            }
        } else {// choose invalid bet
            console.log('I said between 1 to '+maxBet+', and you typed '+ bet);
            console.log('I dont play with cheaters!! bye');
            canBet=false;
            wantToplay=false;
        }

        turn++;
    }
    
}

const startComputerGame = () => {
    console.log('////////--------Welcome To WAR--------////////');
    const name =getUsername();

   let money =50;
   const types = ['Club','Heart','Spade','Diamond'];
   let strong = 0;
    let bet = 0;
    console.log('hello '+name+ ' You currently have '+money+' ILS');
    let canBet = true; 
    let wantToplay =true;
    while(canBet && wantToplay){
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        strong = Math.floor(Math.random() * 3);
        console.log('strong card ='+types[strong]);
        
        bet = getNumber(money);
        //player choose valid bet
        if(Number.isInteger(bet) && bet >= 1 && bet<= money){
            let playerCard= getRandomCard();
            let cpuCard= getRandomCard();
            let stat = compareCards(playerCard,cpuCard,strong);
            console.log('Your card is '+playerCard.number +' of '+types[playerCard.type] +', my card is '+cpuCard.number +' of '+types[cpuCard.type]);

            if(stat>0){//player won
                console.log('you won this round');
                money+=bet;
                
            }   else { // player lost
                console.log('you lost this round');
                money-=bet;

                //check if ran out of money
                if(money<1){
                    console.log('You are broke... Bye Bye ');
                    canBet = false;
                    wantToplay =false;
                    break;
                }
            } 
            let options = ['Play another round', 'leave with my money'];
            index = readlineSync.keyInSelect(options, 'Your balance is '+money+ ' What would you like to do?');    
            
            if(index !== 0){
                wantToplay =false;
            }
        } else {// choose invalid bet
            console.log('I said between 1 to '+money+', and you typed '+ bet);
            console.log('I dont play with cheaters!! bye');
            canBet=false;
            wantToplay=false;
        }



    }
    
}

let options = ['player vs player', 'player vs computer'];
index = readlineSync.keyInSelect(options,'choose game mode');
if(index === 0){
    startVsGame();
} else if(index === 1) {
    startComputerGame();
}

