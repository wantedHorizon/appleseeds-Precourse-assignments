const readlineSync = require('readline-sync');


const questions = [
    {
        q: 'How many white gowns do you have in your closet',
        answers:[
             'what is a gown', 
             'Only one for Purim', 
             'I have only white gowns in my closet ', 
             'what is a closet', 

        ],
        scores: [3,2,1,0]
    },
    {
        q: 'Do you follow your parents advice?',
        answers:[
             'Never', 
             'Most of the time', 
             'Depends', 
             'always'


        ],
        scores: [3,1,2,0]
    },
    {
        q: 'Which is more important: following the rules or having a good time?',
        answers:[
             'Party all day, all night',  
            
             'I\'ts important to keep balance', 
             'Following the rules', 
             'I try having fun whenever i can, with out breraking the law'

        ],
        scores: [3,2,1,0]
    },
    {
        q: 'Is it more important to be funny or to be kind?',
        answers:[
             'Funny', 
             'Both', 
             'I dont know', 
             'kind', 
        ],
        scores: [3,1,2,0]
    },
    {
        q: "What's your idea of success?",
        answers:[
           'Wealth and Fame', 
            'Having fun all day',
             'Looking after my family', 
             'Making a diffrence in the world'

        ],
        scores: [3,2,1,0]
    },
    {
        q: 'Which is more important: being reliable or being fascinating?',
        answers:[
           'reliable',
            'fascinating',
           "I dont know",
            'Depends who you are and your situation'

        ],
        scores: [1,3,2,0 ]
    },
];

const myfunction =(total,value) =>{

    console.log('---------------------------');
     index = readlineSync.keyInSelect(value.answers, value.q);    
    
    if(index < 0){
        throw "canceled";
    }

     return total+=value.scores[index];

};
let sum = questions.reduce(myfunction,0) ;
let result = '';
console.log(sum);
if(sum >= 0) {
    if(sum <5){
        result = "You are an Angel"
    } else if(sum <7){
        result = "You are a semi-Angel, a bit more and you there"
    } else if(sum <13){
        result = " You are not an angel, try hard and maybe you got a chance"
    } else {
        result = " Obiously you are not an angel\nMaybe you should start helping people";
    } 
}



console.log("~~~~~~~~Quiz results~~~~~~~~")
console.log(result);

